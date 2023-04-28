import http from 'k6/http';
import { group, check, sleep } from 'k6';

export let options = {
    vus: 100,
    duration: '10s',
  };

  export default function () {
    group('Scenario 5: Export Data to CSV', () => {
      const username = 'l191110@lhr.nu.edu.pk';
      const password = 'metabase123';
  
      // Login to Metabase
      const loginRes = http.post('http://localhost:3000/api/session', {
        username,
        password,
      });
      check(loginRes.status, { 'Logged in successfully': (r) => r === 200 });
  
      // Retrieve the session token from the login response
      const sessionToken = JSON.parse(loginRes.body).id;
  
      // Navigate to a report page
      const reportRes = http.get('http://localhost:3000/question/1/sales-report');
      check(reportRes.status, { 'Report page loaded successfully': (r) => r === 200 });
  
      // Use the session token to authenticate subsequent requests
      const cookies = {
        'metabase.SESSION_ID': sessionToken,
      };
      const reportHtml = reportRes.body;
  
      // Extract the report ID from the report page HTML
      const reportIdMatch = reportHtml.match(/var\sreport_id\s\=\s(\d+)\;/);
      if (reportIdMatch === null) 
      {
        throw new Error('Unable to extract report ID');
      }
      const reportId = reportIdMatch[1];
  
      // Request the report data in CSV format
      const csvRes = http.get(`http://localhost:3000/api/dataset/${reportId}.csv`, { cookies });
      check(csvRes.status, { 'CSV export successful': (r) => r === 200 });
  
      // Verify that the CSV contains data
      const csvContainsData = csvRes.body.length > 0;
      check(csvContainsData, { 'CSV contains data': (r) => r === true });
      sleep(1);
    });
  }