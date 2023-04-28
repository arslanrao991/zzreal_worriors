Feature('Test Metabase API query');

const assert = require('assert');
const axios = require('axios');

Scenario('Should return the correct result for a Metabase API query', async (I) => {
  // Set the endpoint URL
  const url = 'http://localhost:3000/api/dataset';

  // Set the request headers
  const headers = {
    'Content-Type': 'application/json',
    'X-Metabase-Session': 'af640b14-ca9a-4be7-af6f-211306f3f4fa',
  };

  // Set the request data for the API query
  const data = {
    type: "native",
    native: {
      query: "SELECT * FROM accounts",
    },
    database: 1,
    parameters: [],
  };

  // Send the API request
  const response = await axios.post(url, data, { headers });

  // Verify the response
  assert.strictEqual(response.status, 200);
//   assert.strictEqual(response.data.data.length, 5);
//   assert.strictEqual(response.data.data[0].id, 1);
}).tag('@dataset');
