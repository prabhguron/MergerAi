// To use any npm package, just import it
// import axios from "axios"
import couchbase from "couchbase";
export default defineComponent({
  async run({ steps, $ }) {
    await Promise.all(steps.word_embeddings.$return_value.map( async(transaction) =>{
      async function uploadDocumentToCouchbase() {
        // User inputs
        const clusterConnStr = "cluster"; // Replace this with Connection String
        const username = "username"; // Replace this with username from database access credentials
        const password = "password"; // Replace this with password from database access credentials
        const bucketName = "bucket";
        const scopeName = "scope";
        const collectionName = "collection";
        
       
        
        // Get a reference to the cluster
        const cluster = await couchbase.connect(clusterConnStr, {
            username: username,
            password: password,
            // Use the pre-configured profile below to avoid latency issues with your connection.
            configProfile: "wanDevelopment",
        });
      
        // Get a reference to the bucket
        const bucket = cluster.bucket(bucketName);
      
        // Get a reference to the collection
        const collection = bucket.scope(scopeName).collection(collectionName);
  
      const {transaction_id, ...rest_of_transaction} = transaction
      // Simple K-V operation - to create a document with specific ID
      console.log(transaction_id, rest_of_transaction)
      let createResult = await collection.insert(transaction_id, rest_of_transaction);
    }

      // Call the function to upload the document
      await uploadDocumentToCouchbase();
  }))
    return "success"
  },
})