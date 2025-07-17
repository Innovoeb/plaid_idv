<div style="text-align: center">
  <img src="pics/plaid-bg1x.jpg" alt="plaid logo" style="width: 200px; height: 200px; object-fit: cover; margin: 0 50px; display: inline-block;">
  <img src="pics/react.png" alt="react logo" style="width: 200px; height: 200px; object-fit: cover; margin: 0 50px; display: inline-block;">
  <img src="pics/express.png" alt="express logo" style="width: 200px; height: 200px; object-fit: cover; margin: 0 50px; display: inline-block;">
</div>

## Plaid Identity Verification w/ React.js & Express.js
Proof of concept application using the Plaid Identity Verification UX in React.js & Express.js

![Alt text for the GIF](pics/plaid-idv.gif)

### Node.js Installation
1. 
```
git clone git@github.com:Innovoeb/plaid_idv.git
```
2. within root directory of cloned repo
```
npm i
``` 
3. create a .env file within the server/ directory and include Plaid API developer credentials with the key names of `PLAID_client_id` and `PLAID_secret_key`
- https://dashboard.plaid.com/developers/keys 
4. ```npm start``` within root directory of cloned repo to start the application.

<br>
Example web app (client) will run on **localhost:5173** while the internal REST api (server) will run on **localhost:3000**



### Resources
