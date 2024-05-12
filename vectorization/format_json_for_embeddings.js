// To use any npm package, just import it
// import axios from "axios"


export default defineComponent({

    async run({ steps, $ }) {  
      const plaidTransactions = steps.trigger.event.body.plaid.transactions
      plaidTransactions.map(transaction => {
        const vectorTransactionSchema = {
          "account_id": transaction.account_id,
          "counterparties": transaction.counterparties,
          "date": transaction.date,
          "location": transaction.location,
          "personal_finance_category": transaction.personal_finance_category,
          "transaction_type": transaction.transaction_type
        };
        transaction.vector_schema = vectorTransactionSchema;
        return transaction;
      })
  
      return plaidTransactions
    },
  })