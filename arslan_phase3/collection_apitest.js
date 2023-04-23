const assert = require('assert');
const axios = require('axios');

Feature('Test collection API');

Scenario('Get all collections ', async (I) => {
  // Set the endpoint URL
  const url = 'http://localhost:3000/api/collection';

  // Set the request headers
  const headers = {
    'Content-Type': 'application/json',
    'X-Metabase-Session': 'dc601433-1d27-4d59-93c2-2961016a6d10',
  };

  // Send the GET request to the API endpoint
  const response = await axios.get(url, { headers });

  // Assert the response status code
  assert.strictEqual(response.status, 200);
  
  // Assert the name of the first collection
  const jsonData = response.data;
  assert.strictEqual(jsonData[0].name, 'Our analytics');
}).tag('@col');

Scenario.skip('Should return the collection with ID 1 ', async (I) => {
  // Set the endpoint URL
  const url = 'http://localhost:3000/api/collection/1';

  // Set the request headers
  const headers = {
    'Content-Type': 'application/json',
    'X-Metabase-Session': 'dc601433-1d27-4d59-93c2-2961016a6d10',
  };

  // Send the GET request to the API endpoint
  const response = await axios.get(url, { headers });

  assert.strictEqual(response.status, 200);
  
  assert.strictEqual(response.data.name, "Arslan Tariq's Personal Collection");


}).tag('@col');