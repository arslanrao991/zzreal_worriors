Since, we were already fimiliar with codecept so we did API test automation in codeceptjs.

Step 1: Run Metabase from Docker
In my case, I run the metabase on my mac in Docker.

Step 2: Configure codecept.conf.js
.....
    REST: 
    {
      endpoint: 'http://localhost:3000/api'
    },
    JSONResponse: {}
....

Step 3: Get the Session token by running the session_token_apitest.js

Feature('Session Token Test');

  Scenario('Get Session Token - Session Token Found', async ({ I }) => {
      const username = 'l191110@lhr.nu.edu.pk';
      const password = 'metabase123';
      const response = await I.sendPostRequest('http://localhost:3000/api/session', { username, password });
      const sessionToken = response.data.id;

      console.log(`Session Token: ${sessionToken}`);

      assert.ok(sessionToken, 'Session Token not found in response');
  }).tag('@session');

  Scenario('Get Session Token - Session Token Not Found', async ({ I }) => {
      const username = 'invaliduser@gmail.com';
      const password = 'invalidpassword';
      const response = await I.sendPostRequest('http://localhost:3000/api/session', { username, password });
      const sessionToken = response.data.id;

      console.log(`Session Token: ${sessionToken}`);

      assert.strictEqual(sessionToken, undefined, 'Session Token found in response');
  }).tag('@session');

this will log the responce on console like this below

  response = {"id":"dc601433-1d27-4d59-93c2-2961016a6d10"}

now we can use this session id 


const assert = require('assert');
const { I } = require('codeceptjs');

step 4: Now we can use this session id to do api testing