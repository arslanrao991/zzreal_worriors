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