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