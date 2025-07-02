import { plaidClient } from './plaidConfig.js'
import { v4 as uuidv4 } from 'uuid'


export const createLinkToken = async (productName) => {
  try {
    switch (productName) {
        case 'idv':
            const request = {
                client_name: "Wu-Tang Financial",
                country_codes: ["US"],
                language: "en",
                user: {
                    client_user_id: `${uuidv4()}`
                },
                products: ["identity_verification"],
                "identity_verification": {
                    "template_id": "idvtmp_4rQbm77Gi6w1F8"
                }   
            }
            const response = await plaidClient.linkTokenCreate(request)
            return response.data
    }
  } catch (error) {
    console.log(error)
  }
}