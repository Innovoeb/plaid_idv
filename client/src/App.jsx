import { useState, useEffect } from 'react'
import './App.css'
import { usePlaidLink } from 'react-plaid-link'


function App() {

  const [linkToken, setLinkToken] = useState(null)

  // onEffect make call to Plaid API to get a link token
  useEffect(() => {
    const fetchLinkToken = async () => {
      try {
        const response = await fetch('http://localhost:3000/plaid/link_tokens?productName=idv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setLinkToken(data.link_token)
      } catch (error) {
        console.error('Error fetching link token:', error)
      }
    }
    fetchLinkToken()
  }, [])

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      console.log(`metadata: ${JSON.stringify(metadata)}`)
    },
  })

  return (
    <>
      <button onClick={() => open()} disabled={!ready}>
        Start Verification
      </button>
    </>
  )
}

export default App
