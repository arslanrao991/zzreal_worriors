import http from 'k6/http';
import { group, check, sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '10s',
};

export default function () {
  group('Scenario 6: View a report', () => {
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

    // Navigate to the report page
    const reportRes = http.get('http://localhost:3000/question/1/sales-report');
    check(reportRes.status, { 'Report page loaded successfully': (r) => r === 200 });

    // Use the session token to authenticate subsequent requests
    const cookies = {
      'metabase.SESSION_ID': sessionToken,
    };
    const reportHtml = reportRes.body;

    // Verify that the report contains data
    const reportContainsData = reportHtml.includes('No data to display');
    check(reportContainsData, { 'Report contains data': (r) => r === false });
    
    sleep(1);
  
  });
}
