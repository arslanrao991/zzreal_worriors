
Feature('Test the database API');

const assert = require('assert');
const axios = require('axios');

Scenario('Should return the database with ID 1 ', async (I) => {
    // Set the endpoint URL
    const url = 'http://localhost:3000/api/database/1';
  
    // Set the request headers
    const headers = {
      'Content-Type': 'application/json',
      'X-Metabase-Session': '679c4774-5214-48b0-b121-2dd96412b57a',
    };
  
    // Send the GET request to the API endpoint
    const response = await axios.get(url, { headers });
  
    //console.log(response.data); // Log response body
  
    assert.strictEqual(response.status, 200);
    
    assert.strictEqual(response.data.name, "Sample Database");
    console.log(response.data.name); // Log response body
  
  }).tag('@database');