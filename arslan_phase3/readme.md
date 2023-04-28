

# Task 1: Explore Unit Testing and Api Testing

## **Step 1: Run Metabase from Docker
In my case, I run the metabase on my mac in Docker.

## **Step 2: Configure codecept.conf.js
.....
    REST: 
    {
      endpoint: 'http://localhost:3000/api'
    },
    JSONResponse: {}
....

## **Step 3: Get the Session token by running the session_token_apitest.js

```bash
Feature('Session Token Test');

  Scenario('Get Session Token - Session Token Found', async ({ I }) => {
      const username = 'l191110@lhr.nu.edu.pk';
      const password = 'metabase123';
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
  }).tag('@session');

this will log the responce on console like this below

  response = {"id":"dc601433-1d27-4d59-93c2-2961016a6d10"}

now we can use this session id 


const assert = require('assert');
const { I } = require('codeceptjs');
```

## **Step 4: Now we can use this session id to do api testing

In this section I have research api and unit testing of metabase on google and also read the official documentation of metabse for api and unit testin.

As far as I know, there is no official framework for Metabase API testing or unit testing. However, Metabase is built on top of the Clojure programming language and the Ring web framework, which can be used for API testing and unit testing respectively.

For API testing, popular frameworks in the Clojure community include:

clj-http: a lightweight HTTP client library that can be used for making API requests and testing responses.
http-kit: a high-performance HTTP client/server library that can be used for testing APIs.
For unit testing, popular frameworks in the Clojure community include:

clojure.test: a built-in testing framework that provides a simple and flexible way to define and run tests.
midje: a testing framework that provides a more expressive syntax for writing tests and supports a wider range of testing scenarios.
Of course, you can also use other testing frameworks and tools that are not specific to Clojure or Ring, such as CodeceptJS or K6, to test Metabase. It ultimately depends on your requirements and preferences.
For this assignment purpose I have using Codeceptjs.

# Task 2: Automate Web API Test
For this task I have created 3 API Test Cases these are:
- adminemail_apitest.js
- collection_apitest.js
- dataset_apitest.js

Also these is a api test case to get session token:
- session_token_apitest.js

### Session Token Code

```
const assert = require('assert');
const { I } = require('codeceptjs');

Feature('Session Token Test');

  Scenario('Get Session Token - Session Token Found', async ({ I }) => {
      const username = 'l191110@lhr.nu.edu.pk';
      const password = 'metabase123';
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
```


### Findings
```
arslantariq@ArslanTariq-InternPrWifi zzreal_worriors % npx codeceptjs run --grep @session                                          
CodeceptJS v3.4.1 #StandWithUkraine
Using test root "/Users/arslantariq/Desktop/ST/zzreal_worriors"

Session Token Test --
Session Token: fa60af6f-d827-4c76-9d54-64c4ae536932
  ✔ Get Session Token - Session Token Found @session in 1197ms
Session Token: undefined
  ✔ Get Session Token - Session Token Not Found @session in 99ms

  OK  | 2 passed   // 1s
```

# Task 3: Add Linters and SAST Tool
For this task I have using Eslint which is a linter tool but also support SAST Feature like find security vulnerabilites like SQL Injection Attack.

Link of video : 

[https://drive.google.com/file/d/1r5TC8xFekjfgLR-Zg1skoTuDyB-o5rYP/view?usp=sharing](https://drive.google.com/file/d/1r5TC8xFekjfgLR-Zg1skoTuDyB-o5rYP/view?usp=sharing)

### Add and configure Linter to your project

Linters are software tools that analyze source code to identify issues, errors, and potential problems that might otherwise go unnoticed. Linters typically check code for compliance with coding standards, style conventions, and best practices, as well as for syntax errors, unused variables, and other issues that can cause bugs or performance problems. Linters can be used for many programming languages and can be integrated with development environments and build systems to provide immediate feedback to developers as they write code. Linters are an essential part of the modern software development process, helping to improve code quality, maintainability, and reliability.

### **To add linters to CodeceptJS project, you can follow these steps:**

### 1. Install the linters you want to use, such as ESLint or Prettier, using npm or yarn. For example, to install ESLint, you can run:

```jsx
npm install eslint --save-dev
```

### 2. Next, install `eslint-plugin-codeceptjs/`

```jsx
npm install eslint-plugin-codeceptjs --save-dev
```

### 3. Initialize the linter configuration file. For example, to initialize ESLint, you can run:

```jsx
npx eslint --init
```

This will prompt you to answer some questions to set up your configuration file. You can choose the options that best suit your project's needs.

### 4. Update the Codecept.config.js file

```jsx
module.exports = {
  
.......
  lint: {
    enabled: true,
    files: ["./*test.js"],
    options: {
      eslint: {
        configFile: "./.eslintrc.json",
      },
    },
  },
.......
};
```

### 5. Usage

The simplest way to use this plugin is to add the `/recommended` config to the extends section of your `.eslintrc` configuration file:

`{  "extends": ["plugin:codeceptjs/recommended"]}`

Alternatively, add `codeceptjs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```jsx
{    "plugins": [    "codeceptjs"    ],   
 "env": {     
   "codeceptjs/codeceptjs": true  
  }
}
```

Then configure the rules you want to use under the rules section.

```
{
  "rules": {
    "codeceptjs/no-actor-in-scenario": 2
  }
}
```

### 3. Run

```jsx
npx eslint test-file-name
```

### Findings
```
/Users/arslantariq/Desktop/ST/zzreal_worriors/arslan_phase3/collection_apitest.js
  27:1  warning  Unexpected skipped test  codeceptjs/no-skipped-tests

✖ 1 problem (0 errors, 1 warning)
  0 errors and 1 warning potentially fixable with the `--fix` option.
```

# Task 4: Perfromance Testing
I explored a some of perfomance testing tools such as :

- Jmeter
- K6
- Locust
- Gatling

 In terms of ease of use, K6 is known for its simplicity and user-friendly interface. It requires minimal setup and configuration, and allows users to write performance tests in JavaScript, Therefore, I used it.

## Install and configure K6

Use the following commands to install and configure K6:



```bash
brew install k6
k6 version
```
# Load Tesing
## create k6-load-test.js file:

Write the following code:

```import http from 'k6/http';
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
```


## Run:

You can run it using :

```bash
    k6 run k6_viewReports.js
```
### Findings
```bash

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./arslan_phase3/k6_viewReports.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 40s max duration (incl. graceful stop):
           * default: 100 looping VUs for 10s (gracefulStop: 30s)


     █ Scenario 6: View a report

       ✗ Logged in successfully
        ↳  0% — ✓ 0 / ✗ 861
       ✓ Report page loaded successfully
       ✓ Report contains data

     checks.........................: 66.66% ✓ 1722       ✗ 861  
     data_received..................: 72 MB  6.6 MB/s
     data_sent......................: 326 kB 30 kB/s
     group_duration.................: avg=1.21s    min=1.01s   med=1.13s    max=2.15s    p(90)=1.5s     p(95)=1.8s    
     http_req_blocked...............: avg=135.19µs min=1µs     med=3µs      max=5.92ms   p(90)=6µs      p(95)=301.94µs
     http_req_connecting............: avg=101.5µs  min=0s      med=0s       max=3.91ms   p(90)=0s       p(95)=260.89µs
     http_req_duration..............: avg=106.89ms min=4.19ms  med=52.68ms  max=1.08s    p(90)=256.43ms p(95)=390.46ms
       { expected_response:true }...: avg=150.12ms min=14.15ms med=100.13ms max=788.72ms p(90)=336.42ms p(95)=505.02ms
     http_req_failed................: 50.00% ✓ 861        ✗ 861  
     http_req_receiving.............: avg=3.4ms    min=25µs    med=559.5µs  max=144.72ms p(90)=7.91ms   p(95)=15.1ms  
     http_req_sending...............: avg=48.91µs  min=7µs     med=20µs     max=1.89ms   p(90)=40µs     p(95)=80.94µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=103.43ms min=4.11ms  med=50.99ms  max=1.08s    p(90)=242.62ms p(95)=383.71ms
     http_reqs......................: 1722   156.159074/s
     iteration_duration.............: avg=1.21s    min=1.01s   med=1.13s    max=2.15s    p(90)=1.5s     p(95)=1.8s    
     iterations.....................: 861    78.079537/s
     vus............................: 4      min=4        max=100
     vus_max........................: 100    min=100      max=100


running (11.0s), 000/100 VUs, 861 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s
```

