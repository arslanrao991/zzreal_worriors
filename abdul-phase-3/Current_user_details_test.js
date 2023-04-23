Feature('Test Current User API');

const assert = require('assert');
const axios = require('axios');

Scenario('Get current user details - email and name', async ({ I }) => {
  // Set the endpoint URL
  const url = 'http://localhost:3000/api/user/current';

  // Set the request headers
  const headers = {
    'Content-Type': 'application/json',
    'X-Metabase-Session': '679c4774-5214-48b0-b121-2dd96412b57a',
  };

  // Send the GET request to the API endpoint
  const response = await axios.get(url, { headers });

  // Assert the response status code
  assert.equal(response.status, 200);

  // Assert the email and name of the user
  assert.strictEqual(response.data.email, 'ab.rehman2709@gmail.com');
  assert.strictEqual(response.data.first_name, 'Abdul');
  assert.strictEqual(response.data.last_name, 'Rehman');
}).tag('@user');

Scenario('Get current user details - incorrect email, first_name, and last_name', async ({ I }) => {
  // Set the endpoint URL
  const url = 'http://localhost:3000/api/user/current';

  // Set the request headers
  const headers = {
    'Content-Type': 'application/json',
    'X-Metabase-Session': '679c4774-5214-48b0-b121-2dd96412b57a',
  };

  // Send the GET request to the API endpoint
  const response = await axios.get(url, { headers });

  // Assert the response status code
  assert.equal(response.status, 200);

  // Assert that the email, first_name, and last_name are incorrect
  assert.strictEqual(response.data.email, 'john.doe@example.com');
  assert.notStrictEqual(response.data.first_name, 'John');
  assert.notStrictEqual(response.data.last_name, 'Doe');
}).tag('@user');
