Feature('Setting API');

const assert = require('assert');
const axios = require('axios');
const { rmSync } = require('fs');

Scenario('Should return the admin-email', async (I) => {
    // Set the endpoint URL
    const url = 'http://localhost:3000/api/setting/admin-email';
  
    // Set the request headers
    const headers = {
      'Content-Type': 'application/json',
      'X-Metabase-Session': 'dc601433-1d27-4d59-93c2-2961016a6d10',
    };
  
    const response = await axios.get(url, { headers });
    assert.strictEqual(response.data, "l191110@lhr.nu.edu.pk");
  
  }).tag('@adminemail');