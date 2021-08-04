# Installation
- Please install node v14.16.0 (https://nodejs.org/en/)
- An .env file has been sent via email to Sabrina Ginter containing environment variables including Zendesk's API url, my username, my token for authentication, and more. I did not want to leave that information embeded into the code because the repository had to be public.
- The .env file has to be placed at:
```
ZENDESK_COOP/server/.env
```


## Front-end (React.js)
From the root folder (ZENDESK-COOP) run:
```
npm install
npm start
```


## Back-end (Node.js)
Open another terminal and from the root folder (ZENDESK-COOP) run:
```
cd server
npm install
npm start
```


## Open the app
Visit http://localhost:3000/


## Testing
Within the server folder run:
```
npm run test
```

## References:
### 1. User Interface
I used Material-UI (https://material-ui.com/) to build the front end

### 2. Zendesk API
I used Zendesk's API (https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/) to get the tickets from my account and its pagination params to limit 25 tickets per page (https://developer.zendesk.com/api-reference/ticketing/introduction/#pagination).

### 3. Testing
I used Jest (https://jestjs.io/) to create some unit test for the server.