

export default defineComponent({
    async run({ steps, $ }) {
  async function fetchWithExponentialBackoff(url, options, maxAttempts = 7, baseDelay = 3000) {
      let attempt = 0;
      while (attempt < maxAttempts) {
          try {
              const response = await fetch(url, options);
              return response.json();
          } catch (error) {
              if (attempt === maxAttempts - 1) {
                  throw new Error(`Failed after ${maxAttempts} attempts`);
              }
              const delay = Math.pow(30, attempt) * baseDelay;
              await new Promise(resolve => setTimeout(resolve, delay));
              attempt++;
          }
      }
  }
  
      const processed_transaction = steps.format_json_for_embeddings.$return_value;
      const new_transaction = await Promise.all(processed_transaction.map( async (transaction) => {
          // Usage example
          const url = "model url";
         
          const stringJson = JSON.stringify(transaction.vector_schema.personal_finance_category)
          const options = {
              headers: { Authorization: "Bearer XXXXXX" },
              method: "POST",
              body: stringJson.replace(/\{|\}/g, ''),
          };
          const result = await fetchWithExponentialBackoff(url, options);
          const justScoreArray = result[0].map(scoreAndLabel => scoreAndLabel.score);
          const completed_vector_schema = {...transaction, 
                                           schema_version: "v1",
                                           data_provider: "plaid",
                                           finance_category_vector_index : justScoreArray,
                                           location_vector_index: [transaction.location.lat || 0, transaction.location.lon || 0]
                                          
                                          }
          delete completed_vector_schema.vector_schema
        return completed_vector_schema
      }))
      
      return new_transaction;
  
    },
  })