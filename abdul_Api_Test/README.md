
# Explored the API test automation and Unit Test frameworks

I explored a lot of API testing automation and unit testing frameworks such as :

* Jest
* Codecept
* Cucumber
* Selenium
* Mocha
* JUnit
* CodeceptJS

Since, we were already fimiliar with codecept so we did API test automation in codeceptjs. 

## Step 1: Install and run the Metabase 

In my case, I Install the metabase in my linux using **Docker**.

## Step 2: Sign up into metabase

Sign up into metabase using 
* email and 
* password  

(it will lbe used to get **session token** later on)

## Step 3: Get the Session token

You can use curl in terminal entry **email** , **password** and Api to get the session token. 
Run the below command to get the session token valid for 14 days otherwise metabase will refuse to talk with you.

```bash
  curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "person@metabase.com", "password": "fakepassword"}' \
  http://localhost:3000/api/session
```

You will get a response like:

```bash
  response = {"id":"38f4939c-ad7f-4cbe-ae54-30946daf8593"}
```

## Step 3: Instal codecept

```bash
  npm i codeceptjs --save-dev
```
```bash
  npx codeceptjs init
```
Use this [codecept installation Guide](https://codecept.io/api/#installation) for clear concept, whether to use REST or GraphQL, test folders.



# Session_test.js File

After creating a folder and installing codeceptjs into it create a Session_test.js test file and write the following code into it.

```bash
const assert = require('assert');
const { I } = require('codeceptjs');

Feature('Session Token Test');

  Scenario('Get Session Token - Session Token Found', async ({ I }) => {
      const username = 'ab.rehman2709@gmail.com';
      const password = 'HJ2EuMPsZJ!*#C3';
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
  }).tag('@session');  // use npx codeceptjs run --grep @session to run only this testc
```
The code is testing whether a session token can be retrieved from a POST request to a local API endpoint. The first scenario tests if a valid session token is returned when valid credentials are provided, while the second scenario tests if no session token is returned when invalid credentials are provided.
