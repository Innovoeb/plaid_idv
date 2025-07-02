import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'
import 'dotenv/config'

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': process.env.PLAID_client_id,
        'PLAID-SECRET': process.env.PLAID_secret_key,
      },
    },
})
  
export const plaidClient = new PlaidApi(configuration)