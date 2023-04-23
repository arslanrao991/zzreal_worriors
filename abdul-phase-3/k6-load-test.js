import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '10s',
};

export default function () {
  const username = 'ab.rehman2709@gmail.com';
  const password = 'HJ2EuMPsZJ!*#C3';

  const response = http.post('http://localhost:3000/api/session', { username, password });

  check(response, {
    'Session token found in response': (res) => res.json('id') !== null,
  });

  sleep(1);
}
