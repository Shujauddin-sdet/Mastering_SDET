// Challenge 8
// Test Environment Config
// In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

// Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

// Examples:
// Input:
// envName = "staging"
// Output:
// Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror
// 💡 Explanation:The switch matches "staging" and sets the corresponding configuration values for the staging environment.

// change this to test different envs: "dev", "staging", "qa", "production"
let envName = "staging";

let baseUrl = "";
let apiKey = "";
let timeout = 0;
let envDescription = "";

switch (envName) {
    case "dev":
        baseUrl = "https://dev-api.testingacademy.com";
        apiKey = "dev_key_xxxx-xxxx";
        timeout = 5000;
        envDescription = "Dev - Local development environment";
        break;

    case "staging":
        baseUrl = "https://staging-api.testingacademy.com";
        apiKey = "stg_key_xxxx-xxxx";
        timeout = 8000;
        envDescription = "Staging - Pre-production mirror";
        break;

    case "qa":
        baseUrl = "https://qa-api.testingacademy.com";
        apiKey = "qa_key_xxxx-xxxx";
        timeout = 10000;
        envDescription = "QA - Dedicated testing environment";
        break;

    case "production":
    case "prod":
        baseUrl = "https://api.testingacademy.com";
        apiKey = "prod_key_xxxx-xxxx";
        timeout = 15000;
        envDescription = "Production - Live environment";
        break;

    default:
        baseUrl = "UNKNOWN";
        apiKey = "UNKNOWN";
        timeout = 0;
        envDescription = "Unknown environment - check config";
}

console.log(`Environment: ${envName.toUpperCase()} Base URL: ${baseUrl} API Key: ${apiKey} Timeout: ${timeout}ms Description: ${envDescription}`);
