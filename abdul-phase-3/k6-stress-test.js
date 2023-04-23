import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const options = {
  stages: [
    { duration: '1m', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '2m', target: 0 },
  ],
};

const errorRate = new Rate('errors');

export default function () {
  const username = 'ab.rehman2709@gmail.com';
  const password = 'HJ2EuMPsZJ!*#C3';
  
  const res = http.post('http://localhost:3000/api/session', { username, password });
  
  const success = check(res, {
    'status is 200': (r) => r.status === 200,
    'session token found': (r) => r.json().id !== undefined,
  });
  
  errorRate.add(!success);
}
