# API and Unit Test Automation
# Task 1 - Explore the existing Unit and API test Automation


I explored a lot of API testing automation and unit testing frameworks such as :

- Jest
- Codecept
- Cucumber
- Selenium
- Mocha
- JUnit
- CodeceptJS

Since, we were already fimiliar with codecept so we did API test automation in codeceptjs.

## **Step 1: Install and run the Metabase**

In my case, I Install the metabase in my linux using **Docker**.

## **Step 2: Sign up into metabase**

Sign up into metabase using

- email and
- password

(it will lbe used to get **session token** later on)

## **Step 3: Get the Session token**

You can use curl in terminal entry **email** , **password** and Api to get the session token. Run the below command to get the session token valid for 14 days otherwise metabase will refuse to talk with you.

```
  curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "person@metabase.com", "password": "fakepassword"}' \
  http://localhost:3000/api/session
```

You will get a response like:

```
  response = {"id":"38f4939c-ad7f-4cbe-ae54-30946daf8593"}
```

## **Step 3: Instal codecept**

```
  npm i codeceptjs --save-dev
```

```
  npx codeceptjs init
```

Use this [codecept installation Guide](https://codecept.io/api/#installation) for clear concept, whether to use REST or GraphQL, test folders.

# **Session_test.js File**

After creating a folder and installing codeceptjs into it create a Session_test.js test file and write the following code into it.

```
const assert = require('assert');
const { I } = require('codeceptjs');

Feature('Session Token Test');

  Scenario('Get Session Token - Session Token Found', async ({ I }) => {
      const username = 'ab.rehman2709@gmail.com';
      const password = 'HJ2EuMPsZJ!*#C3';
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

The code is testing whether a session token can be retrieved from a POST request to a local API endpoint. The first scenario tests if a valid session token is returned when valid credentials are provided, while the second scenario tests if no session token is returned when invalid credentials are provided.
# **Run the file:**
```
  npx codeceptjs run --grep @tagname
```
# Task 2 - Automate API test

- Identify 3 API test scenarios per person for meta base Project
    
    ## Endpoint: api/user:
    
    ```jsx
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
    ```
    
    ## Finding:
    
    ```jsx
    CodeceptJS v3.4.1 #StandWithUkraine
    Using test root "/home/abdul/Desktop/phase3"
    
    Test Current User API --
      ✔ Get current user details - email and name @user in 110ms
      ✔ Get current user details - incorrect email, first_name, and last_name @user in 113ms
    
      OK  | 2 passed   // 232ms
    ```
    
    ## Endpoint: api/database:
    
    ```jsx
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
    ```
    
    ## Finding:
    
    ```jsx
    Using test root "/home/abdul/Desktop/phase3"
    
    Test the database API --
    Sample Database
      ✔ Should return the database with ID 1 @database in 112ms
    
      OK  | 1 passed   // 117ms
    ```
    
    ## Endpoint: api/session:
    
    ## Endpoint: api/collection and api/collection/1:
    
- Update the framework by including required libraries to run API tests, e.g.
    - I have used codecept.js
- **Optimised and Modularized the code where possible**


# Task 3 - Add Linters and SAST tools to your project

Link of video : 

[https://drive.google.com/file/d/1h-qwlUOpnnd4BafZdfbSihBPfN18P2Cm/view?usp=sharing](https://drive.google.com/file/d/1h-qwlUOpnnd4BafZdfbSihBPfN18P2Cm/view?usp=sharing)

## Add and configure Linter to your project

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

---

Link of video : 

[https://drive.google.com/file/d/1h-qwlUOpnnd4BafZdfbSihBPfN18P2Cm/view?usp=sharing](https://drive.google.com/file/d/1h-qwlUOpnnd4BafZdfbSihBPfN18P2Cm/view?usp=sharing)

## Add some SAST tools according to framework to application.

I also used ESlint as SAST tool in my project becuase it can be used according to my research.


# Task 4 - Performance Testing

I explored a some of perfomance testing tools such as :

- Jmeter
- K6
- Locust
- Gatling

 In terms of ease of use, K6 is known for its simplicity and user-friendly interface. It requires minimal setup and configuration, and allows users to write performance tests in JavaScript, Therefore, I used it.

## Install and configure K6

Use the following commands to install and configure K6:



```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```
# Load Tesing
## create k6-load-test.js file:

Write the following code:

```bash
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
```

This is a K6 script that simulates load testing on an API endpoint that requires a session token to be obtained via a POST request to the /api/session endpoint.

The script sets the options for the test run using the options object, with a configuration for 100 virtual users (vus) and a test duration of 10 seconds (duration).

In the default function, each virtual user sends a POST request to the specified API endpoint with the given username and password, using the http.post function. The response is then checked to ensure that the session token is present in the response, using the check function with a JSONPath expression that looks for the 'id' field in the response JSON.

After each request, the virtual user sleeps for 1 second using the sleep function to simulate a more realistic user behavior.

The purpose of this script is to generate load on the API endpoint and test its performance under a simulated user load. The script can be modified to test different scenarios or endpoints, and the options object can be adjusted to simulate different user loads and test durations. The check function can also be used to verify different aspects of the response, such as HTTP status codes, response times, or specific fields in the response JSON.

## Run:

You can run it using :


```bash
    k6 run k6-load-test.js
```


## Screenshot

[Click me](https://drive.google.com/file/d/1lhWWcEFdrrvnYoLqMjLFs3DAYFBdx5At/view?usp=share_link)



## Finding:

The output shows the result of running a load test on an API endpoint using k6 with 50 virtual users (VUs) over 5 seconds. The test scenario involved making a POST request to create a session token with a username and password. The test was successful as indicated by the check function that verified the session token was found in the response. The test sent 936 requests in total, with an average duration of 108.44ms. The iterations per second and VUs gradually increased from 3 to 100, and the maximum duration was 40 seconds. Overall, the load test demonstrated that the API endpoint was able to handle the specified amount of traffic without any errors.


# Stress Tesing

## create k6-stress-test.js file:

Write the following code:

```bash
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

}
```

I have written a stress testing script in k6 for an API endpoint that retrieves a session token. The script sends a POST request to the endpoint with a fixed username and password, and checks that the response status is 200 and that the session token is found in the response JSON. The script is designed to gradually ramp up the number of virtual users over three stages, each with a different target load, and runs for a total duration of four minutes. The script also uses a `Rate` metric to track the rate of errors. Overall, the purpose of this script is to simulate a realistic Stress  on the API and identify any performance issues that may arise under heavy stress.

## Run:

You can run it using :


```bash
    k6 run k6-stress-test.js
```
## Screenshot

[Click me](https://drive.google.com/file/d/1eti6uc1smbL6EWnKOWKqjxhrQ1Rro0mS/view?usp=sharing)

## Finding:

I ran a k6 stress test on an API endpoint that retrieves a session token for four minutes, with gradually increasing load up to a maximum of 100 virtual users. The test showed that all 88,832 iterations completed successfully, but with 100% error rate, indicating that the API endpoint did not return the expected response for any of the requests. The response time statistics showed an average response time of 135.29ms, with a median of 110.64ms and a 95th percentile of 324.69ms, which indicates that the endpoint can handle the load with reasonable performance, but the errors suggest there may be issues with the endpoint's functionality. Overall, the stress test was helpful in identifying potential issues with the API endpoint under heavy load, and further investigation is needed to determine the cause of the errors.


# Meeting Notes

People: Muhammad Arslan Tariq FastNU, Abdul Rehman, Syed Yousaf Qadri FastNU
Status: In Progress

## Meeting 1 (7 Feb 2023)

- Discuss Use of Notion
- Discuss Individual Tasks
- Plan to research on different projects and discuss in next meeting

## Meeting 2 (4 March 2023)

- Discuss about project and selected Metabase as testing
- Discuss about User Stories and divide work among ourselves
- Discuss about how to use Gerkin language to do automation

## Meeting 3 (11 March 2023)

- Discuss different errors occurs during automation part and successfully debug
- Explains the working of auomation with team members and show how it works

## Meeting 4 (21 April 2023)
- Discuss API Testing.
- Discuss Different testing scenarios.
- Share the configurations and understand members test scenarios.
- Execute members test case for better understanding

## Summary Project Phase 3
All of the members have created a fully documented easily readable file/guide to go through phase 3 in their respective folders. Also created and checked tasks on notion and maintain meeting notes in this files.