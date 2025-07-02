import express from 'express'
import { createLinkToken } from '../plaid/createLinkToken.js'

const plaidRouter = express.Router()

plaidRouter.post('/plaid/link_tokens', async (req, res) => {
    try {
        // if productName query exists and is not empty
        if ('productName' in req.query && req.query.productName !== '') {
            let response = await createLinkToken(req.query.productName)
            res.status(200).json(response)
            console.log('------------------------------------------------------------------')
            console.log(`POST ${req.originalUrl} == ${res.statusCode}!`)
            console.log(response)
        } else {
            res.status(400).json({ message: 'No productName query param included' })
        }
    } catch (error) {
        res.status(500)
        console.log(error)
    }
})

export default plaidRouter