# Module 4: API Testing Fundamentals & Postman

---

## 📋 Table of Contents

1. [Introduction to Web Services & APIs](#1-introduction-to-web-services--apis)
   - [1.1 What is an API?](#11-what-is-an-api)
   - [1.2 HTTP Protocol & REST Principles](#12-http-protocol--rest-principles)
   - [1.3 Deep Dive: REST API vs Plain HTTP](#13-deep-dive-rest-api-vs-plain-http)
2. [Types of APIs by Architectural Design & Protocol](#2-types-of-apis-by-architectural-design--protocol)
   - [2.1 Data Formats (XML, JSON, Protobuf)](#21-data-formats-xml-json-protobuf)
   - [2.2 API Architectures](#22-api-architectures)
3. [Types of APIs by Accessibility Scope](#3-types-of-apis-by-accessibility-scope)
   - [3.1 Internal API](#31-internal-api)
   - [3.2 Partner API](#32-partner-api)
   - [3.3 Public API](#33-public-api)
   - [3.4 Composite API](#34-composite-api)
4. [Understanding API Documentation (OpenAPI/Swagger)](#4-understanding-api-documentation-openapiswagger)
   - [4.1 What is OpenAPI/Swagger?](#41-what-is-openapiswagger)
   - [4.2 What a Typical OpenAPI Document Contains](#42-what-a-typical-openapi-document-contains)
   - [4.3 What Swagger UI Looks Like (and why QA loves it)](#43-what-swagger-ui-looks-like-and-why-qa-loves-it)
   - [4.4 How QA Uses API Documentation to Design Tests](#44-how-qa-uses-api-documentation-to-design-tests)
   - [4.5 Why This Matters for a QA/SDET](#45-why-this-matters-for-a-qasdet)
5. [The Anatomy of an HTTP Request & Response](#5-the-anatomy-of-an-http-request--response)
   - [5.1 HTTP vs HTTPS, SSL/TLS Basics](#51-http-vs-https-ssltls-basics)
   - [5.2 HTTP Methods (GET, POST, PUT, PATCH, DELETE)](#52-http-methods-get-post-put-patch-delete)
   - [5.3 URL Structure: Endpoints, Path Variables vs. Query Parameters](#53-url-structure-endpoints-path-variables-vs-query-parameters)
   - [5.4 HTTP Headers (Content-Type, Accept, Authorization)](#54-http-headers-content-type-accept-authorization)
   - [5.5 JSON Payloads & Parsing (Request Body)](#55-json-payloads--parsing-request-body)
   - [5.6 HTTP Status Codes (2xx, 3xx, 4xx, 5xx)](#56-http-status-codes-2xx-3xx-4xx-5xx)
6. [API Security & Authentication](#6-api-security--authentication)
   - [6.1 Authentication vs. Authorization](#61-authentication-vs-authorization)
   - [6.2 Common Auth Methods (Basic Auth, API Keys, Bearer/JWT Tokens)](#62-common-auth-methods-basic-auth-api-keys-bearerjwt-tokens)
   - [6.3 API Security Testing Basics](#63-api-security-testing-basics)
7. [API Test Design & Edge Cases (The QA Mindset)](#7-api-test-design--edge-cases-the-qa-mindset)
   - [7.1 Positive vs. Negative API Testing](#71-positive-vs-negative-api-testing)
   - [7.2 Applying EP & BVA to JSON Payloads](#72-applying-ep--bva-to-json-payloads)
   - [7.3 Testing Edge Cases (Nulls, Empty Strings, Missing Fields, Data Type Mismatches)](#73-testing-edge-cases-nulls-empty-strings-missing-fields-data-type-mismatches)
8. [Manual API Testing with Postman](#8-manual-api-testing-with-postman)
   - [8.1 Setting up Postman Collections](#81-setting-up-postman-collections)
   - [8.2 Using Environment and Global Variables](#82-using-environment-and-global-variables)
   - [8.3 Testing a Public REST API](#83-testing-a-public-rest-api)
   - [8.4 cURL & DevTools: Importing Requests from the Browser](#84-curl--devtools-importing-requests-from-the-browser)
   - [8.5 Using DevTools for API Testing (Filtering, Inspecting, and Importing)](#85-using-devtools-for-api-testing-filtering-inspecting-and-importing)
   - [8.6 Writing Test Scripts in Postman (Chai Assertions)](#86-writing-test-scripts-in-postman-chai-assertions)
   - [8.7 API Chaining: Passing Data Between Requests](#87-api-chaining-passing-data-between-requests)
   - [8.8 Data-Driven Testing: CSV/JSON with Collection Runner](#88-data-driven-testing-csvjson-with-collection-runner)

---

## 1. Introduction to Web Services & APIs

> **Section Summary:** An API is the "waiter" that lets two software systems talk to each other over HTTP without exposing internal logic. As an SDET, you test APIs directly — sending raw requests and verifying responses — which is faster, more stable, and earlier in the development cycle than UI testing.

---

### 1.1 What is an API?

#### 🔍 Simple Analogy

You're sitting at a restaurant table. You don't walk into the kitchen, grab ingredients, and cook your own meal. That's not how it works.

Instead, the waiter comes to you.

- You tell the waiter what you want: *"I'd like a pizza and a lemonade."*
- The waiter takes your order to the kitchen.
- The kitchen prepares the food.
- The waiter brings back exactly what you asked for (or apologises if something is unavailable).

In this analogy:
- **You** are the client (a mobile app, a web browser, a Playwright script).
- **The kitchen** is the server (where the real data and business logic live).
- **The waiter** is the API (Application Programming Interface).

The API is the messenger that takes your request, tells another system what you want, and brings back the response. It's how two software applications talk to each other without exposing their internal secrets.

#### 💼 Professional Definition

An API (Application Programming Interface) is a set of rules and protocols that allows one piece of software to interact with another. It defines:

- **Endpoints** – The specific URLs where requests go (like `/users`, `/login`).
- **Allowed operations** – What you can ask for: get data, create data, update, delete.
- **Format** – How the request and response must look (usually JSON today).

In web development, we mostly deal with REST APIs (also called RESTful APIs) that use the HTTP protocol. The API doesn't show you its database; it only exposes what it wants you to see.

When you test an API, you're not testing a user interface. You're sending raw requests directly to the server and checking the raw responses.

#### 🧪 Real-World Example – A Login API

When you log into an app on your phone:

The app calls an API endpoint: `POST https://api.example.com/auth/login`

It sends a JSON body:

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

The server checks the credentials.

The API responds with status `200 OK` and a body:

```json
{
  "token": "abc123xyz",
  "userName": "John"
}
```

Or, if the password is wrong:

```json
{
  "error": "Invalid credentials"
}
```

...with status `401 Unauthorized`.

The user never sees this raw JSON. The UI just parses the response and shows "Welcome, John" or an error message.

As a QA/SDET, you test this API directly. You send the same request with tools like Postman (manual) or Playwright (automated) and verify that the response is correct.

#### ❓ Why This Matters for an SDET

- APIs are the backbone of modern applications. The website, the mobile app, and even partner services all use the same API. If the API is broken, everything breaks.
- API testing is faster and more stable than UI testing. No browser rendering, no animations. You can test hundreds of scenarios in seconds.
- In **shift-left testing**, you can start API testing before a single UI element is coded. As soon as an endpoint exists, you can validate its logic.
- As an SDET, you'll automate APIs heavily using Playwright's built-in `request` fixture, often using API calls to set up test data for UI tests (e.g., creating a user via API, then logging in via the UI).

**Explanation:**
- An API is a contract that allows two software systems to communicate over HTTP.
- It defines endpoints, allowed methods, and data formats.
- APIs are tested by sending requests directly to endpoints and verifying the response status codes, body structure, and data correctness.
- This validates business logic without relying on the UI — making tests faster, earlier, and more reliable.

---

### 1.2 HTTP Protocol & REST Principles

> **Summary:** HTTP is the communication language (how messages travel); REST is the design style (how APIs should be organised). Together they form the foundation of modern web APIs.

#### 🔍 Simple Analogy

Imagine you're talking to a librarian in a massive, silent library.

**HTTP** is the strict set of rules for the conversation:
- You walk up and say *"I want to borrow The Alchemist"* (that's a request).
- The librarian replies, *"Here it is"* and hands you the book (that's a response), or says *"Sorry, that book is checked out"* (an error response).
- Every conversation follows the same structure: you ask, the librarian answers. That's the HTTP protocol.

**REST** is the way the library is organised so that any librarian can help you without remembering who you are:
- Every book has a unique shelf number (a URL).
- You use the same verbs with any book: GET (borrow), PUT (replace the entire book), PATCH (fix a torn page), DELETE (remove from shelf).
- The librarian doesn't remember you from last time; you must tell them everything they need to know in your request (**statelessness**).

So HTTP is the communication language. REST is the design style that makes the library (the API) simple, predictable, and scalable.

#### 💼 Professional Definition

**HTTP (HyperText Transfer Protocol)** is a request-response protocol that underpins the World Wide Web and almost all modern APIs. The client (browser, app, or testing tool) sends a request, and the server sends back a response. It is **stateless**: each request is independent and contains all the information the server needs to process it.

A typical **HTTP Request** contains:
- **Method** – what action to perform (GET, POST, etc.)
- **URL** – the address of the resource (e.g., `https://api.example.com/users/5`)
- **Headers** – metadata (authentication, content type)
- **Body** – optional data (for POST/PUT requests)

A typical **HTTP Response** contains:
- **Status Code** – the result (200 OK, 404 Not Found)
- **Headers** – metadata
- **Body** – the actual data (often JSON)

**REST (Representational State Transfer)** is an architectural style that uses HTTP to create scalable web services. A RESTful API adheres to these principles:

| Principle | Description |
| :--- | :--- |
| **Resources** | Everything is a resource (a user, an order, a product) identified by a unique URL (e.g., `/products/42`). |
| **Standard Methods** | Use HTTP verbs to act on resources: GET (read), POST (create), PUT/PATCH (update), DELETE (delete). |
| **Statelessness** | The server stores no client state between requests. Each request is self-contained; session data must be sent with every request (e.g., in an `Authorization` header). |
| **Uniform Interface** | Resources are manipulated in a consistent way across the entire API. |
| **Client-Server Separation** | The UI and the backend are independent, communicating only via the API. |
| **Cacheable** | Responses can be marked as cacheable to improve performance. |
| **Layered System** | The client doesn't know whether it's talking directly to the server or an intermediary (load balancer, proxy). |

#### 🧪 Real-World Example – A User Management API

A RESTful design for managing users:

| Action | Method | URL |
| :--- | :--- | :--- |
| List all users | `GET` | `/users` (optional: `?page=1`) |
| Get user #15 | `GET` | `/users/15` |
| Create a new user | `POST` | `/users` |
| Replace user #15 entirely | `PUT` | `/users/15` |
| Partially update user #15 | `PATCH` | `/users/15` |
| Delete user #15 | `DELETE` | `/users/15` |

Each endpoint uses the same `https://api.example.com` base URL, and the resource paths are predictable.

#### ❓ Why This Matters for an SDET

- You can't test an API without understanding its communication rules. Knowing HTTP means you can craft correct requests and interpret responses.
- In Postman, you manually build HTTP requests; in Playwright, you do the same thing with code.
- REST principles allow you to guess endpoints logically: if you know `/users`, you can expect `/users/5` to work, and you can design test cases around that.
- **Statelessness** means you must always include authentication tokens in your requests. Forgetting that is a common cause of `401` errors, which you'll debug.
- The predictable structure of REST APIs lets you apply automation patterns — e.g., parameterising resource IDs, reusing the same request logic with different data.

**Explanation:**
- HTTP is the fundamental protocol for communication on the web: a client sends a request with a method, URL, headers, and optionally a body; the server replies with a status code and response body.
- REST is an architectural style built on top of HTTP that organises APIs around resources and standard HTTP methods.
- It demands statelessness — meaning each request carries its own authentication and context.
- Understanding HTTP and REST is critical for API testing: it defines how to form requests, interpret responses, and design test cases that align with expected behaviour.

---

### 1.3 Deep Dive: REST API vs Plain HTTP

> **Summary:** HTTP is the transport layer (the road); REST is the rulebook for how to use that road so that every API looks and behaves consistently. Not every HTTP API is RESTful — but every REST API uses HTTP.

#### 🔍 Simple Analogy – The Vending Machine

Imagine a giant vending machine filled with hundreds of snacks. You want a chocolate bar.

- You look at the machine's panel. Every snack has a unique code — for example, A4 is the chocolate bar, B2 is chips.
- You press a button: the **GET** button with code A4.
- The machine finds the snack, drops it, and shows a green light (success).
- You don't have to tell the machine your name, where you're from, or what you bought last week. It doesn't remember you. That's **statelessness** — each request is independent.
- If you want a new snack that isn't in the machine, you fill a form and drop it in the "Add Snack" slot (**POST**).
- If a snack's wrapper is wrong, you can replace the whole snack (**PUT**) or just change the wrapper (**PATCH**).
- If a snack is expired, you can remove it (**DELETE**).

This vending machine works because of a set of design rules:
- Every item has a unique ID.
- The same set of buttons (GET, POST, PUT, DELETE) works for everything.
- The machine doesn't remember you.
- The interface (the keypad) is separate from the snacks (the database).

**That set of design rules is REST.**

> See [Section 1.2](#12-http-protocol--rest-principles) for the full breakdown of REST principles.

#### 🧪 Concrete Example – Library API

| Action | HTTP Method | URL | What happens |
| :--- | :--- | :--- | :--- |
| List all books | `GET` | `/books` | Returns a list of books in JSON. |
| Get one book | `GET` | `/books/8` | Returns details of book #8. |
| Add a new book | `POST` | `/books` | Sends a JSON body with title, author; creates a new book. Returns status `201 Created`. |
| Replace book #8 entirely | `PUT` | `/books/8` | Sends a complete new book object to replace the old one. |
| Update only the title of book #8 | `PATCH` | `/books/8` | Sends `{"title": "New Title"}`; changes only that field. |
| Remove book #8 | `DELETE` | `/books/8` | Deletes the book. Returns `200 OK` or `204 No Content`. |

Notice the patterns:
- The same base URL (`/books`) used for both listing and creating.
- The same resource URL (`/books/8`) used for read, replace, update, delete.
- All responses are JSON, and you know what to expect.

**That's REST in action.**

#### ❓ Why This Matters for a QA/SDET

- When you're given a REST API to test, you can immediately start writing test cases because you know the predictable structure: `GET /users`, `POST /users`, `GET /users/5`, etc.
- In Postman, you'll build requests following this exact pattern. In Playwright, you'll write automation that uses the same methods.
- The stateless rule means you must always include your authentication token in every request, or you'll get a `401 Unauthorized`. Testing that is a key **negative test case**.
- Because REST APIs are uniform, you can write reusable test scripts that work across different resources with minor changes.

**Explanation:**
- A REST API follows a set of design rules: everything is a resource with a unique URL, you interact using standard HTTP methods (GET, POST, PUT, DELETE), and the server doesn't remember you between requests.
- This makes the API predictable, easy to test, and scalable.
- Almost all modern web services are built this way — testing them means sending correct HTTP requests and verifying the responses.

#### ❓ Why not just use HTTP instead of REST? Both are stateless.

You're right — both HTTP and REST are stateless. But HTTP alone is just the raw communication line. REST adds rules and structure so that the communication is predictable, scalable, and easy to test.

#### 🔍 Simple Analogy – The Postal Service vs. The Addressing System

HTTP is the postal service. It delivers letters and parcels anywhere in the world. But the postal service doesn't tell you *how* to write the address.

REST is the standard way of writing addresses: Name, Street, City, Postcode, Country. If everyone writes addresses in the same format, letters are delivered efficiently and mistakes are rare.

Now imagine two people writing letters:
- Person A writes: *"For the tall man, third house after the red shop"*
- Person B writes: *"Mr. John Smith, 14 Oak Street, London, SW1 2AB"*

Person A's letter will probably get lost. Person B's letter follows the standard rules and arrives perfectly.

HTTP without REST is like Person A's letter. You can send a request, but the API designer may use weird endpoints like:

```text
GET /fetchUserById?id=5
POST /removeUser?uid=5
PUT /user/5/updateName
```

Every API looks completely different. Testing such an API is messy.

REST forces clean, predictable patterns:

```text
GET    /users/5
DELETE /users/5
PATCH  /users/5
```

Now, if you know one REST API, you can quickly understand any other REST API. Testing becomes systematic.

#### 💼 Professional Truth – HTTP is the protocol, REST is the design style.

HTTP gives you the verbs (GET, POST, PUT, DELETE) and the transport. But it does not say how to name your URLs, how to structure responses, or how to handle errors.

REST provides those missing rules:
- Resources get clean, logical URLs.
- You use the same HTTP methods in the same way across the whole API.
- The API returns proper status codes (200, 404, etc.).
- The API is stateless, and REST makes that explicit by requiring all context (like auth) in each request.

Without REST, every team would invent their own chaotic naming and behaviour. With REST, you gain consistency, which makes testing, automation, and integration vastly easier.

So, we don't use HTTP *instead of* REST. We use HTTP as the **foundation**, and REST as the **blueprint** that gives shape to the API. Every REST API uses HTTP; **not every HTTP API is RESTful**.

#### 🧪 Real-World Example – Deleting a User

Without REST (just random HTTP):

```text
POST /deleteUser
Body: { "id": 5 }
Method: POST
```
Or maybe `GET /remove/user?id=5`. It's anyone's guess.

With REST:

```text
DELETE /users/5
```
No body needed. Method `DELETE` tells you exactly what's happening. Status `204 No Content` means success.

Now imagine you have to write test cases for an API with 100 endpoints. With REST, you can predict the delete endpoint for orders will be `DELETE /orders/8`. That predictability saves enormous testing time.

**Explanation:**
- HTTP is the protocol that moves data between client and server.
- REST is a set of design rules that organise an API so it's clean, consistent, and scalable.
- Without REST, you could still use HTTP — but every API would look different, making testing chaotic.
- REST adds a uniform structure: resources identified by URLs, standard HTTP methods, and predictable behaviour.
- This consistency is what lets us test APIs efficiently and automate them reliably.

---

## 2. Types of APIs by Architectural Design & Protocol

> **Section Summary:** APIs use different architectural styles and data formats depending on the use case. REST (JSON) is the dominant modern style. SOAP (XML) is used in enterprise/banking. GraphQL gives clients control over what data they fetch. gRPC (Protobuf) is built for high-speed microservices. WebSocket and Webhooks handle real-time and event-driven communication respectively.

These define the rules, data formats, and communication styles between software systems.

---

### 2.1 Data Formats (XML, JSON, Protobuf)

Every API sends data back and forth. The data must be written in a format that both the client and the server understand. The three big ones are XML, JSON, and Protocol Buffers (Protobuf).

---

#### 1. XML (eXtensible Markup Language)

##### 🔍 Simple Analogy

Think of a detailed, formal application form printed on paper. It has boxes with labels: "First Name: ______", "Last Name: ______", "Date of Birth: ______". The form is very structured, but it's long and uses a lot of paper.

XML is that form. Every piece of data is wrapped in a start tag and an end tag. It's very descriptive but verbose (takes up a lot of space).

##### 💼 Professional Context

XML is a markup language designed to store and transport data. It is both human-readable and machine-readable.

Uses tags to define data. Example:

```xml
<user>
  <id>42</id>
  <name>John</name>
  <email>john@test.com</email>
</user>
```

Key features: Strict structure, supports attributes, can be validated against a schema (XSD). Used heavily in SOAP APIs and older enterprise systems.

**Why it matters for QA:** If you're testing SOAP or legacy APIs, you'll see XML requests and responses. You must check that the XML structure matches the schema, tags are correctly nested, and data types are right.

---

#### 2. JSON (JavaScript Object Notation)

##### 🔍 Simple Analogy

A sticky note with a shopping list: `{ "apples": 5, "milk": "1 litre", "eggs": 12 }`. It's quick, clean, and only contains the essentials.

JSON is the sticky note. It uses curly braces `{}`, square brackets `[]`, and key-value pairs. It's lightweight, easy to read, and the modern standard.

##### 💼 Professional Context

JSON is a lightweight data-interchange format, derived from JavaScript but language-independent.

Represents data as objects (key-value pairs) and arrays (ordered lists).

Example:

```json
{
  "id": 42,
  "name": "John",
  "email": "john@test.com"
}
```

**Why it matters for QA:** Most REST and GraphQL APIs use JSON. In Postman, you write JSON bodies. In Playwright, you assert on JSON response properties. Understanding JSON structure is fundamental to API testing.

---

#### 3. Protocol Buffers (Protobuf)

##### 🔍 Simple Analogy

A secret codebook shared between two spies. Instead of writing "Launch the rocket at 5 PM," they write "Code 7B." The message is tiny, and only those with the codebook can decode it.

Protobuf is that codebook. Data is serialised into a very compact binary format using a predefined schema (`.proto` file). It's not human-readable, but it's extremely fast and small.

##### 💼 Professional Context

Developed by Google, Protocol Buffers are a method of serialising structured data for use in communications protocols, like gRPC.

You define the schema once in a `.proto` file:

```proto
message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
}
```

The code generator creates classes that handle the binary encoding.

**Why it matters for QA:** Testing gRPC APIs requires understanding the protobuf schema. Tools like Postman (gRPC support) or BloomRPC allow you to view the deserialised JSON-like representation, but the actual transport is binary.

---

### 2.2 API Architectures

#### 1. SOAP – Simple Object Access Protocol

> **Summary:** A rigid, XML-only protocol with a formal WSDL contract. Built for high-security enterprise environments like banking and airlines.

##### 🔍 Simple Analogy

Imagine you want to send a valuable parcel to another country. The post office has a very strict rulebook: you must fill out a long form in triplicate, put the parcel in a specific envelope, seal it with a special wax stamp, and hand it to the officer. The officer checks everything against a master rulebook before accepting it.

SOAP works exactly like this. Every request must follow a strict format. The "envelope" contains your request, and the "rulebook" is a document called WSDL that defines every possible action, its parameters, and the exact response shape. It's highly secure, but it's heavy and slow.

##### 💼 Professional Details

SOAP is a **protocol**, not just a style. It defines a strict set of rules for communication.

- **Data format:** Only XML.
- **Message structure:** Every SOAP message has an Envelope (the outer wrapper), an optional Header (for security tokens, routing info), and a Body (the actual request or response).
- **Contract:** SOAP services are described by a **WSDL (Web Services Description Language)** file. The WSDL is a formal contract that lists every operation, the exact XML structure of requests and responses, and the endpoint URL. If the server changes the WSDL, clients break — so it's very rigid.
- **Transport:** Typically HTTP, but can also run over SMTP, TCP, or JMS.
- **Stateless or Stateful:** Can maintain state across multiple requests (unlike REST).
- **Built-in standards:** WS-Security for encryption and signing, WS-ReliableMessaging for guaranteed delivery, WS-Transaction for complex operations.
- **Use cases:** Banking, payment gateways, airline reservations, enterprise systems where strict contracts and high security are mandatory.
- **Testing tools:** SoapUI (dedicated SOAP testing tool), Postman (can handle SOAP with XML bodies), and custom scripts.

---

#### 2. REST – Representational State Transfer

> **Summary:** The dominant modern web architecture. Uses standard HTTP methods and JSON. Flexible, predictable, and the go-to for almost all web and mobile APIs.

##### 🔍 Simple Analogy

Imagine a modern food court. Each stall represents a resource (like "Burgers", "Pizzas", "Drinks"). Every stall has a clear menu board with a unique number. To order, you use the same set of verbs: "Give me" (GET), "Cook a new one" (POST), "Replace this" (PUT), "Change the toppings" (PATCH), "Throw it away" (DELETE). The stalls don't remember you; you carry your own tray (authentication) with each trip.

REST is that food court. It's simple, predictable, and scalable.

##### 💼 Quick Reference

- **Data format:** JSON (can also be XML, plain text)
- **Use cases:** Almost all modern web and mobile apps, public APIs (Twitter, GitHub, Google Maps), microservices
- **Testing tools:** Postman, Playwright, cURL, REST Assured
- **No built-in security:** Authentication is added via HTTPS and headers (Bearer tokens, API keys)

> For the full set of REST principles, see [Section 1.2](#12-http-protocol--rest-principles).

---

#### 3. GraphQL – Graph Query Language

> **Summary:** A flexible query language from Meta that lets the client request exactly the data it needs from a single endpoint. Eliminates over-fetching and under-fetching.

##### 🔍 Simple Analogy

Imagine a personal chef. You don't choose from a fixed menu. Instead, you say: *"I want the burger, but only the patty and cheese, no bun. And I want a small cola, but with no ice."* The chef brings you exactly that on one plate. The chef also gives you a detailed list of every ingredient available (the schema).

GraphQL is that personal chef. You request exactly the data you need, nothing more, nothing less.

##### 💼 Professional Details

Developed by Facebook. GraphQL is a query language for APIs and a runtime to execute those queries.

- **Data format:** JSON for both the query (sent as a string inside a JSON body) and the response.
- **Single endpoint:** All queries and mutations go to one URL (e.g., `/graphql`).
- **Client-driven:** The client specifies which fields it wants. No over-fetching (getting too much data) or under-fetching (needing multiple round trips to related data).
- **Schema and Type System:** Every GraphQL API has a strongly typed schema that defines every object type, query, and mutation. This schema is introspectable — you can ask the API to describe itself, which replaces traditional documentation.
- **Operations:** Queries (read), Mutations (create/update/delete), Subscriptions (real-time using WebSocket).
- **Use cases:** Complex, interconnected data like social media feeds, dashboards, e-commerce with varied product data.
- **Testing tools:** Postman (supports GraphQL queries), GraphiQL (in-browser explorer), and Playwright (send POST requests with the query).

---

#### 4. gRPC – gRPC Remote Procedure Calls

> **Summary:** A high-performance, binary protocol from Google using Protobuf over HTTP/2. Built for low-latency microservices communication with full streaming support.

##### 🔍 Simple Analogy

Imagine you have a magic walkie-talkie that lets you call a remote robot factory. You press a button labelled "Build Car" and speak the car model name. The robot instantly starts building, and you hear back "Car built" seconds later. The walkie-talkie uses a special compressed voice code (Protobuf) so messages are tiny and fast.

gRPC is that magic walkie-talkie. A client calls a function on a remote server as if it were local, using a binary, compact format.

##### 💼 Professional Details

Developed by Google. gRPC is a high-performance, open-source framework.

- **Data format:** Protocol Buffers (Protobuf) — binary, small, fast.
- **Contract:** A `.proto` file defines service methods and message structures. Both client and server code are generated from this file. This is a strict contract.
- **Transport:** HTTP/2, which allows multiplexing (many requests and responses over a single connection), server push, and bidirectional streaming.
- **Streaming types:**
  - Unary (single request, single response)
  - Server streaming (client sends one request, server streams multiple responses)
  - Client streaming (client streams requests, server responds once)
  - Bidirectional streaming (both stream simultaneously)
- **Use cases:** Microservices requiring low latency and high throughput, internal service-to-service communication (Netflix, Google, Uber).
- **Testing tools:** Postman (supports gRPC), BloomRPC, grpcurl, and custom Node.js/Python scripts using the generated stubs.

---

#### 5. WebSocket

> **Summary:** A persistent, two-way communication channel over a single TCP connection. Ideal for real-time apps like chat, live scores, and financial tickers.

##### 🔍 Simple Analogy

REST is like sending letters. Each letter is a separate conversation. WebSocket is like picking up the phone and keeping the line open. Both people can talk at any time without redialling.

##### 💼 Professional Details

WebSocket is a protocol that provides **full-duplex (two-way) communication** over a single, long-lived TCP connection.

- Starts with an HTTP handshake (client sends an `Upgrade` request), then the connection is upgraded to the WebSocket protocol.
- Once the connection is established, both client and server can send messages at any time, independently.
- **Data format:** Can be text (often JSON) or binary.
- **Use cases:** Real-time chat apps, live sports scores, financial tickers, online gaming, collaborative editing.
- **Testing tools:** Postman (WebSocket request type), browser developer tools (Network → WS tab), and Playwright (can listen to WebSocket events).

---

#### 6. Webhooks (Reverse APIs)

> **Summary:** Instead of your app polling a server for updates, the server pushes data to your URL the moment an event happens. Used in payment confirmations, CI/CD pipelines, and form submissions.

##### 🔍 Simple Analogy

Instead of calling the pizza shop every 5 minutes asking "Is my pizza ready?", you give them your phone number and say "Call me when it's ready." That's a webhook. The server pushes the event to you; you don't pull it.

##### 💼 Professional Details

A webhook is a mechanism where a server sends an HTTP POST request to a pre-registered URL when a specific event occurs.

- Often called a **"reverse API"** because the server initiates the communication.
- The client (receiver) provides a callback URL. The server (sender) posts data to that URL in real time.
- **Data format:** Usually JSON.
- **Use cases:** Payment confirmations (Stripe, PayPal), CI/CD notifications (GitHub webhook), form submissions, email delivery status.
- **Testing tools:** webhook.site (provides a temporary URL to capture incoming webhook requests and inspect the payload), Postman (can act as a mock server to receive webhooks), and ngrok to expose a local server.

---

#### 📊 Architectural Feature Comparison

| Feature | REST | GraphQL | SOAP | gRPC |
| :--- | :--- | :--- | :--- | :--- |
| **Data Format** | JSON, XML, Text | JSON | XML only | Protobuf (Binary) |
| **Flexibility** | Medium | High | Low (Strict) | Medium |
| **Endpoint Style** | Multiple endpoints | Single endpoint | WSDL-defined | .proto-defined |
| **Primary Use** | General Web Services | Mobile & Dashboards | Banking & Legacy | Microservices |
| **Real-time?** | No | Via Subscriptions | No | Yes (streaming) |

**Explanation:**
- **SOAP** is a strict XML-based protocol with a formal WSDL contract, used in high-security enterprise systems.
- **REST** is a resource-oriented architectural style using standard HTTP methods and usually JSON, adopted by most modern web APIs.
- **GraphQL** is a flexible query language that allows clients to request exactly the data they need from a single endpoint, backed by a strongly typed schema.
- **gRPC** is a high-performance binary protocol using Protobuf and HTTP/2 streaming — ideal for microservices.
- **WebSocket** provides persistent two-way connections for real-time communication.
- **Webhooks** are event-driven callbacks where servers push data to a client URL.
- As a QA/SDET, the appropriate tooling and testing approach is selected for each architecture to ensure correctness, performance, and security.

---

## 3. Types of APIs by Accessibility Scope

> **Section Summary:** APIs are classified by who can access them. This scope determines the authentication method, security level, and the type of test cases you write. Internal = integration/contract testing. Partner = SLA/onboarding testing. Public = security/rate-limit testing. Composite = aggregation/resilience testing.

---

#### 🔍 Simple Analogy – The Bank Building

Think of a bank building:

- **Internal API** – The staff-only back office. Only bank employees with an ID badge can enter. Customers never see it. It's used to move cash between vaults, update internal records, and run daily audits.
- **Partner API** – The secure business entrance. Armoured truck companies and business partners have special access cards. They can enter a restricted area to drop off or pick up cash, but they can't go into the main vault or the employee break room.
- **Public API** – The ATM and the front door. Anyone with a bank card (or just anyone walking in) can use it. The bank carefully limits what you can do: check balance, withdraw cash, deposit a cheque. You cannot access the vault directly.
- **Composite API** – A premium concierge service inside the bank. Instead of you visiting the ATM, then the loan desk, then the investment advisor separately, the concierge does all three for you in one trip and hands you a single summary.

#### 💼 Professional Definitions

| Type | Who Accesses It | Purpose | Security Level | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Internal (Private)** | Only within the organization. Not exposed to the outside world. | Connect internal services, microservices, or legacy systems. Backend-to-backend communication. | Highest — VPNs, private networks, mutual TLS. | HR system talking to the payroll system. |
| **Partner** | Specific, trusted third-party business partners. Approved entities only. | Enable B2B integrations: book shipments, query inventory, process joint transactions. | High — specific onboarding, API keys or client certificates, contractual. | An airline's API that lets Expedia search flights and reserve seats. |
| **Public (External/Open)** | Anyone on the internet. May require an API key, but registration is open to all. | Expose core services to a wide audience of developers and third-party integrations. | Moderate — API keys or OAuth tokens, rate limiting, usage quotas, monitoring. | Google Maps API, Twitter API, OpenWeatherMap API. |
| **Composite** | Internal or partner consumers needing aggregated data from multiple services. | Combine multiple API calls into one to reduce latency and simplify client logic. | Same as the underlying APIs; acts as a gateway. | An e-commerce API that returns product details, stock levels, and recommendations in a single call. |

---

### 3.1 Internal API

#### 🔍 Analogy
The plumbing inside a hotel. Guests never see it, but it connects the boiler, the kitchen sinks, and every bathroom. Without it, the hotel stops working.

#### 💼 Detail
- Runs entirely behind the company firewall or within a private network (VPC).
- Often uses technologies like gRPC, REST, or message queues (RabbitMQ, Kafka).
- Not documented for the outside world; documentation is internal.
- As a QA, you test these by being inside the network or using VPN, often with mock services to simulate dependent systems. You'll focus on **integration testing** and **contract testing** (e.g., using Pact) between services.

---

### 3.2 Partner API

#### 🔍 Analogy
A hotel giving a trusted tour operator a special keycard that opens only the luggage storage room and the business lounge. The tour operator can't go into guest rooms or the accounting department.

#### 💼 Detail
- Exposed over the internet but heavily secured.
- Requires onboarding: the partner gets a unique API key, IP whitelisting, or a client certificate.
- Often accompanied by a legal agreement or SLA (Service Level Agreement).
- As a QA, you test both the API functionality and the onboarding process: can a partner call the API with their credentials? Are they correctly restricted from accessing other endpoints? You also test that rate limits are enforced per partner.

---

### 3.3 Public API

#### 🔍 Analogy
A hotel's front desk, lobby, and restaurant — open to everyone. Anyone can walk in, but there are rules: no shoes, no running, and the swimming pool is for guests only.

#### 💼 Detail
- The most exposed API type. Can be used by anyone who signs up for an API key.
- Must be robust, well-documented (OpenAPI/Swagger), and heavily monitored.
- Requires authentication (API key, OAuth 2.0) to identify the caller.
- Has rate limiting to prevent abuse and cost overruns.
- As a QA, you test thoroughly for security: SQL injection, excessive data exposure, authentication bypass. You also test with invalid or missing keys, expired tokens, and high-volume requests to validate rate limiting.

---

### 3.4 Composite API

#### 🔍 Analogy
A hotel concierge who, after you ask *"Plan me a romantic evening,"* books a dinner reservation, orders flowers, and reserves a spa appointment — all in one go, handing you a single confirmation ticket.

#### 💼 Detail
- An API that acts as a **facade or orchestrator** for multiple backend services.
- Reduces the number of round trips for the client. Instead of making 3–5 API calls, the client makes one and gets a combined response.
- Common in microservices architectures, often implemented using an API Gateway (like Kong, Apigee, AWS API Gateway).
- As a QA, you test the composite API by:
  - Verifying that all the aggregated data is correct.
  - **Simulating partial failures:** what if one underlying service fails? Does the composite handle it gracefully (e.g., return partial data with a warning, or fail entirely with a clear error)?
  - Testing performance, because a composite API's latency is the sum of its slowest service.

---

#### ❓ Why This Matters for a QA/SDET

- You will write very different test cases depending on the scope. A public API demands rigorous security and rate-limit testing; an internal API may focus more on integration and performance.
- You'll need to know which authentication method is used for each scope. Internal APIs might use mutual TLS, partner APIs use unique keys, public APIs use OAuth.
- When testing composite APIs, you design fault-tolerance scenarios that a simple single-service test would never cover.
- Understanding these scopes also helps you communicate with the team: *"Is this endpoint internal? Then why is it exposed on the public gateway?"* — that's a security defect in the making.

**Explanation:**
- APIs are classified by accessibility scope into Internal, Partner, Public, and Composite.
- **Internal APIs** are used within an organization's private network for service-to-service communication.
- **Partner APIs** are shared with trusted third parties under contract and specific access controls.
- **Public APIs** are open to any developer, with authentication, rate limiting, and thorough documentation.
- **Composite APIs** combine multiple backend calls into a single endpoint to reduce client overhead.
- Testing strategy is tailored to each scope:
  - Internal → integration and contract testing.
  - Partner → security and SLA validation.
  - Public → extensive security and performance testing.
  - Composite → aggregation correctness and resilience to partial failures.

---

## 4. Understanding API Documentation (OpenAPI/Swagger)

> **Section Summary:** OpenAPI/Swagger is the user manual for an API. It lists every endpoint, HTTP method, required parameters, request/response schemas, and authentication — all in one place. As a QA, this document is your single source of truth for designing test cases without guesswork.

---

### 4.1 What is OpenAPI/Swagger?

#### 🔍 Simple Analogy

Imagine you buy a new washing machine. Inside the box, you find a user manual. This manual tells you:
- What buttons exist (Power, Start, Pause).
- What each button does (turn on, begin wash cycle, pause the cycle).
- What settings are available (water temperature, spin speed).
- What the machine needs from you (add detergent, close the door).
- What you should expect (clean clothes in 45 minutes).
- What error codes mean (E01 = door not closed, E02 = water supply issue).

Without the manual, you'd be pressing buttons randomly and hoping for the best. The manual doesn't tell you how the machine works inside — it just tells you how to use it.

**API Documentation (like OpenAPI/Swagger) is exactly that manual for an API.** It tells you what endpoints exist, what methods to use, what data to send, and what response to expect, without revealing the internal code.

#### 💼 Professional Context

API Documentation is a human-readable (and machine-readable) description of how an API works. It is the **single source of truth** for QA, developers, and partners who need to interact with the API.

The most common standard today is **OpenAPI** (formerly called Swagger).

**OpenAPI Specification (OAS):**
- An industry-standard format for describing REST APIs.
- Written in JSON or YAML.
- Describes every endpoint, HTTP method, request parameter, request body, response structure, status codes, and authentication requirements.
- Is machine-readable, meaning tools can import the specification and automatically generate interactive documentation, client code, and automated tests.

**Swagger:**
- Swagger is the original name for the specification. Now, Swagger refers to the set of tools built around the OpenAPI standard (Swagger UI, Swagger Editor, Swagger Hub).
- Many people still use "Swagger" to mean the documentation itself.

---

### 4.2 What a Typical OpenAPI Document Contains

| Section | What it tells you | Example |
| :--- | :--- | :--- |
| **Info** | API name, version, description. | "Pet Store API v1.0 – Manages pets, orders, and users." |
| **Servers** | Base URL(s) where the API lives. | `https://api.petstore.example.com/v1` |
| **Paths** | All available endpoints. | `/pets`, `/pets/{petId}`, `/store/order` |
| **Methods** | HTTP methods for each path. | `GET /pets`, `POST /pets`, `DELETE /pets/{petId}` |
| **Parameters** | Path variables, query parameters, headers. | `petId` (path, required, integer), `status` (query, optional, string) |
| **Request Body** | JSON schema of the data you must send (for POST/PUT/PATCH). | `{ "name": "string", "age": "integer", "type": "string" }` |
| **Responses** | Possible status codes and their response body schemas. | `200 OK` → returns a pet object. `404 Not Found` → returns `{ "error": "Pet not found" }`. |
| **Schemas** | Reusable data definitions (models). | Pet object: `{ id, name, age, type }` |
| **Security** | Authentication methods required. | `bearerAuth` (JWT token) or `apiKey` (header `X-API-Key`) |

---

### 4.3 What Swagger UI Looks Like (and why QA loves it)

When you open a Swagger documentation page (like the famous Petstore Swagger Demo), you see:
- A list of all sections (Pets, Store, User).
- Each section expands to show its endpoints.
- Each endpoint shows: the method and URL, a description, a clickable "Try it out" button, and fields to enter parameters and request bodies.
- After you click "Execute", it shows the actual response: status code, response body, and headers.

**For QA, this is a goldmine:**
- You don't need to guess endpoints — they are all listed.
- You can read the exact expected request format and data types.
- You can interactively test the API right in the browser before you even open Postman.
- You immediately see success and error responses documented.
- You can identify missing documentation (a requirement defect!) — e.g., an endpoint has no description of what a `400 Bad Request` returns.

**What to look for in Swagger as a QA:**
1. **The Endpoint URL:** E.g., `POST /api/v1/login`
2. **Required Headers:** Does it need a Bearer Token?
3. **Request Body Schema:** It will show you exactly what the JSON needs to look like (e.g., `email` must be a string, `password` is required).
4. **Expected Responses:** It will list all possible outcomes (`200 OK`, `400 Bad Request`, `401 Unauthorized`) so you know exactly what Test Cases to design!

---

### 4.4 How QA Uses API Documentation to Design Tests

**Example: `GET /pets/{petId}` from Swagger doc**

What the documentation tells us:
- **Method:** GET
- **URL:** `/pets/{petId}`
- **Path Parameter:** `petId` (integer, required)
- **Responses:** `200 OK` – returns a Pet object `{ id, name, status }`, `400 Bad Request` – Invalid ID supplied, `404 Not Found` – Pet not found
- **Security:** Requires API key in header.

From this, you design test cases:

| TC-ID | Type | Scenario | Expected |
| :--- | :--- | :--- | :--- |
| TC-PET-001 | ✅ Positive | GET with a valid `petId` (e.g., 5) | `200 OK`, response body contains correct pet object. |
| TC-PET-002 | ❌ Negative | GET with a non-existent `petId` (e.g., 99999) | `404 Not Found`, error message "Pet not found". |
| TC-PET-003 | ❌ Negative | GET with an invalid `petId` (e.g., "abc") | `400 Bad Request`, error message "Invalid ID". |
| TC-PET-004 | ❌ Negative | GET without an API key | `401 Unauthorized`. |
| TC-PET-005 | ❌ Negative | GET with an expired/malformed API key | `403 Forbidden`. |
| TC-PET-006 | ⚠️ Edge Case | GET with `petId = 0` | `400 Bad Request` or `404` (depends on implementation; documentation should clarify). |
| TC-PET-007 | ⚠️ Edge Case | GET with a very large `petId` (e.g., 999999999) | `404 Not Found` (no crash). |
| TC-PET-008 | ⚠️ Edge Case | GET with negative `petId` (e.g., -5) | `400 Bad Request`. |

All these test cases came purely from reading the API documentation. **No guesswork.**

---

### 4.5 Why This Matters for a QA/SDET

- **Shift-Left:** You can review API documentation before a single endpoint is coded. If the documentation is unclear, you log a defect at the requirement stage — cheap and fast.
- **Test Case Design:** API documentation is your primary input for designing both positive and negative API tests. Every field, type, and status code is a test opportunity.
- **Automation:** In Playwright or Postman, you can sometimes import an OpenAPI spec directly to generate a collection skeleton, saving hours of manual setup.
- **Contract Testing:** The OpenAPI spec acts as a contract. You can write automated tests that validate the actual API responses against the spec (schema validation). Postman and Playwright both support this.
- **Explanation:** If asked *"How do you start testing a new API?"*, your answer begins with: *"First, I study the OpenAPI/Swagger documentation to understand the endpoints, parameters, expected responses, and authentication requirements. From that, I design my test cases."*

**Explanation:**
- API documentation, typically in the OpenAPI (Swagger) format, is the comprehensive manual for an API.
- It describes every endpoint, HTTP method, parameter, request body schema, response structure, and authentication method.
- It is used to design thorough test cases covering positive flows, error scenarios, and edge cases.
- It enables early testing — documentation can be reviewed for completeness and correctness before any code is written.
- Tools like Swagger UI allow interactive testing of endpoints and verification of actual responses against documented schemas.
- Good API documentation turns testing from guesswork into a precise, systematic process.

---

## 5. The Anatomy of an HTTP Request & Response

> **Section Summary:** An HTTP transaction consists of a request from the client and a response from the server. Understanding the anatomy of these messages — protocol versions (HTTP vs HTTPS), methods (GET, POST, etc.), URLs, headers, payloads (JSON), and status codes — is essential for designing accurate and robust API tests.

---

### 5.1 HTTP vs HTTPS, SSL/TLS Basics

#### 🔍 Simple Analogy

HTTP is like sending a postcard. You write a message on the back, and it travels through the postal system completely open. Anyone who handles the postcard—the mail carrier, the sorting office clerk, a nosy neighbour—can read it. There’s no privacy at all.

HTTPS is like putting that same message inside a locked, tamper‑proof steel briefcase. Only the sender and the intended receiver have the key to open it. Even if someone intercepts the briefcase, they can’t read what’s inside or change the message without breaking the lock, which would be immediately obvious.

So, HTTPS is simply HTTP wrapped in a secure, encrypted layer. The “S” stands for Secure, and that security is provided by SSL/TLS.

#### 💼 Professional Details

**HTTP (HyperText Transfer Protocol)**
- Transmits data in plain text across the network.
- Anyone who intercepts the network traffic (e.g., on a public Wi‑Fi network) can read everything: usernames, passwords, credit card numbers, personal messages.
- Offers no built‑in encryption, no integrity protection, and no server authentication. You can’t be certain you’re talking to the real server.

**HTTPS (HTTP Secure)**
- Uses TLS (Transport Layer Security) — the modern successor to SSL (Secure Sockets Layer) — to encrypt the entire communication between client and server.
- Provides three essential things:
  - **Encryption** – The data is scrambled so that only the server with the correct private key can read it.
  - **Integrity** – The data cannot be modified or corrupted in transit without being detected.
  - **Authentication** – The client verifies the server’s identity through a digital certificate issued by a trusted Certificate Authority (CA). This prevents an attacker from impersonating the server.

**How the secure connection is established (the TLS handshake, simplified):**
1. Client (browser or Postman) connects to the server and says, “I want to talk securely.”
2. Server sends its SSL/TLS certificate to prove its identity. The certificate contains the server’s public key and is signed by a trusted CA.
3. Client verifies the certificate (checks that it’s valid, not expired, and issued for the correct domain).
4. Client and server agree on an encryption method and generate a unique session key that will be used to encrypt data during this session.
5. From that point, all data is encrypted end‑to‑end.

**Indicators in the browser / tools:**
- A padlock icon in the address bar.
- The URL starts with `https://` instead of `http://`.
- In Postman, you simply type `https://` as part of the request URL; Postman handles the encryption transparently.

#### 🧪 Real‑World Example – Login API

Unsafe (HTTP):

```text
POST http://api.bank.com/auth/login
Content-Type: application/json

{
  "email": "user@test.com",
  "password": "Secret123"
}
```

If you send this on a public Wi‑Fi, a hacker can capture the packet and read the email and password in plain text. That’s a catastrophic security breach.

Safe (HTTPS):

```text
POST https://api.bank.com/auth/login
Content-Type: application/json

{
  "email": "user@test.com",
  "password": "Secret123"
}
```

Now the entire request is encrypted. The hacker only sees scrambled bytes. Even if they capture it, they cannot read it. The server’s certificate also assures the client that it is really `api.bank.com`, not a fake site.

#### ❓ Why This Matters for a QA/SDET

- **Security Testing:** One of the most basic API security checks is verifying that all sensitive endpoints enforce HTTPS. You design test cases that send requests over `http://` and expect them to be rejected or redirected to `https://`.
- **Certificate Validation:** You can test with expired, self‑signed, or mismatched certificates to see if the client handles them correctly (should reject the connection with a clear error).
- **Data Exposure:** You verify that no sensitive data (passwords, tokens, credit card numbers) ever appears in the URL (even over HTTPS, URLs can be logged in browser history or server logs) or in response bodies when it shouldn’t.
- **Automation:** In Playwright, you can ignore HTTPS errors during testing for convenience, but you must ensure that the production test suite validates proper HTTPS behaviour.
- **Interview Ready:** The question “What is the difference between HTTP and HTTPS?” is extremely common. Your answer must mention encryption, integrity, authentication, and the TLS handshake.

**Explanation:**
- HTTP transmits data in plain text, making it vulnerable to eavesdropping and tampering.
- HTTPS adds a layer of security through TLS/SSL, which encrypts the entire communication, ensures data integrity, and authenticates the server’s identity using digital certificates.
- The padlock icon in the browser indicates an active HTTPS connection.
- As a QA/SDET, I verify that all sensitive API endpoints are only accessible over HTTPS, that the server certificates are valid, and that no sensitive data is leaked.
- This is a fundamental security check before any API release.

---

### 5.2 HTTP Methods (GET, POST, PUT, PATCH, DELETE)

#### 🔍 Simple Analogy

Imagine you're a librarian in a huge library. You have five basic things you can do with any book or record:

- **GET** – A visitor asks, "Can I see the book The Alchemist?" You find it, hand it to them. Nothing changes; the book stays on the shelf. You're just reading the current state.
- **POST** – A visitor says, "I'd like to donate a new book." You take their new book, give it a unique ID, and add it to the shelf. You don't know the ID in advance; the library assigns it.
- **PUT** – A visitor says, "This entire book The Alchemist has errors. Here is a completely new, corrected copy. Replace the old one." You take the new copy and put it exactly where the old one was. If the book didn't exist, you might even create it at that exact spot.
- **PATCH** – A visitor says, "The title page of The Alchemist has a typo. Here is just the corrected title page. Replace only that page." You remove the old page and insert the new one, leaving the rest of the book untouched.
- **DELETE** – A visitor says, "Please remove The Alchemist from the library." You take the book off the shelf and discard it (or archive it). It's gone.

These five actions are exactly the HTTP methods used in REST APIs. Every API call you make is one of these five, applied to a resource.

#### 💼 Professional Definitions

HTTP methods (also called verbs) tell the server what action the client wants to perform on a resource.

- **GET**
  - **Purpose:** Retrieve a representation of a resource.
  - **Safe?** Yes – it does not modify any data. Calling GET multiple times shouldn’t change anything on the server.
  - **Idempotent?** Yes – making the same GET request 1 time or 100 times produces the same result (same data, no side effects).
  - **Request body?** No – GET requests do not have a body. Data is sent via URL query parameters if needed.
  - **Caching?** GET responses can be cached by browsers and proxies.
  - **Example:** `GET /users/42` → Returns user with ID 42.

- **POST**
  - **Purpose:** Create a new resource. The server decides the new resource's ID.
  - **Safe?** No – it changes server state (creates something new).
  - **Idempotent?** No – sending the same POST request twice usually creates two separate resources (e.g., two identical orders).
  - **Request body?** Yes – contains the data for the new resource in JSON (or other format).
  - **Example:** `POST /users` with body `{ "name": "John", "email": "john@example.com" }` → Creates a new user. Returns `201 Created` with the new user's ID and data.

- **PUT**
  - **Purpose:** Replace an entire resource. If the resource exists, it's completely overwritten. If it doesn't exist, it may be created (depends on API design).
  - **Safe?** No – it modifies data.
  - **Idempotent?** Yes – sending the same PUT request multiple times results in the same final state (the resource always ends up exactly as specified).
  - **Request body?** Yes – contains the complete new representation of the resource.
  - **Example:** `PUT /users/42` with body `{ "name": "John Updated", "email": "john2@example.com" }` → Replaces the entire user 42. If a field is missing, it might be set to null.

- **PATCH**
  - **Purpose:** Partially update a resource. Only the fields included in the request body are changed; the rest stay the same.
  - **Safe?** No – it modifies data.
  - **Idempotent?** It can be, but not always. A simple field update is idempotent, but more complex operations (like "add $10 to account balance") are not.
  - **Request body?** Yes – contains only the fields to update.
  - **Example:** `PATCH /users/42` with body `{ "email": "newemail@example.com" }` → Changes only the email of user 42; name and other fields remain unchanged.

- **DELETE**
  - **Purpose:** Remove a resource.
  - **Safe?** No – it destroys data.
  - **Idempotent?** Yes – deleting the same resource twice has the same effect: the resource is gone. The second call may return `404 Not Found`.
  - **Request body?** Usually no body, though some APIs allow it (rare).
  - **Example:** `DELETE /users/42` → Deletes user 42. Returns `200 OK` or `204 No Content`.

#### 🧪 Real‑World Example – A Pet Store API

Let’s see all methods in action on a pet resource.

| Method | Endpoint | Request Body / Params | Expected Response |
| :--- | :--- | :--- | :--- |
| `GET` | `/pets/10` | None (or query params like `?include=owner`) | `200 OK` with `{ "id": 10, "name": "Rex", "status": "available" }` |
| `POST` | `/pets` | `{ "name": "Bella", "status": "available" }` | `201 Created` with the new pet’s ID and data. |
| `PUT` | `/pets/10` | `{ "id": 10, "name": "Rex", "status": "sold" }` | `200 OK` with the fully updated pet. |
| `PATCH` | `/pets/10` | `{ "status": "pending" }` | `200 OK` with the pet showing status "pending", name still "Rex". |
| `DELETE` | `/pets/10` | None | `200 OK` or `204 No Content` (pet removed). |

#### 📊 Quick Reference Table

| Method | Purpose | Safe? | Idempotent? | Body |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | Read a resource | Yes | Yes | No |
| `POST` | Create a new resource | No | No | Yes |
| `PUT` | Replace a resource entirely | No | Yes | Yes |
| `PATCH` | Update part of a resource | No | Maybe | Yes |
| `DELETE` | Remove a resource | No | Yes | Rarely |

#### ❓ Why This Matters for a QA/SDET

- You must know which method to use when constructing requests. Using GET instead of POST to create data is a common mistake – and GET requests shouldn't change state.
- **Testing idempotency:** For PUT and DELETE, you write test cases that send the same request multiple times and verify the system doesn’t break or create duplicates.
- **Testing safety:** For GET requests, you verify that the state of the system is unchanged after many reads (no side effects).
- **Negative testing:** You send a POST request with a body that's missing required fields and expect `400 Bad Request`. You send a DELETE request for a non‑existent ID and expect `404 Not Found`. You send a PATCH request with an invalid field and expect validation errors.
- When automating in Playwright or Postman, you’ll use the correct method for each test case. Using the wrong method can produce a `405 Method Not Allowed` error, which is itself a valid test case (testing that an endpoint rejects wrong methods).

**Explanation:**
- HTTP methods define the action the client wants to perform on a resource.
- GET retrieves data without side effects.
- POST creates new resources.
- PUT replaces an entire resource and is idempotent.
- PATCH updates part of a resource.
- DELETE removes a resource.
- As a QA, I test each method for its safety, idempotency, and correct behavior with valid and invalid inputs.
- I verify that endpoints respond correctly to wrong methods (like sending a GET to a creation endpoint) and that data integrity is maintained across multiple identical requests.

---

### 5.3 URL Structure: Endpoints, Path Variables vs. Query Parameters

#### 🔍 Simple Analogy

Think of the address on a house.

The endpoint is the full address: "123 Main Street, London, SW1 1AA". It uniquely identifies one house among millions.

The path variable is like the flat number inside that building: "Flat 3, 123 Main Street". It picks out one specific unit inside the resource.

The query parameter is like a note you add after the address: "Please leave the parcel at the back door". It doesn't change which house it is, but it gives extra instructions.

In a URL, these parts look like this:
`https://api.example.com/houses/123?delivery=back`

#### 💼 Professional Breakdown of a URL

A typical API URL is composed of several parts:

`https://api.example.com/v1/users/42?active=true&limit=10`

| Part | Name | Purpose | Example |
| :--- | :--- | :--- | :--- |
| `https://` | Protocol | How to communicate. http or https. | `https://` |
| `api.example.com` | Host (domain) | The server's address. | `api.example.com` |
| `/v1` | Base path (optional) | The API version. | `/v1` or `/v2` |
| `/users` | Resource (endpoint) | The type of thing we're working with. | `/users`, `/orders`, `/pets` |
| `/42` | Path variable | An identifier for one specific resource. | `42` (a user ID) |
| `?active=true&limit=10` | Query parameters (query string) | Extra options: filtering, sorting, pagination, search. | `active=true`, `limit=10` |

##### 1. Endpoints
An endpoint is simply the URL where the API can be accessed by a client. Each endpoint corresponds to a resource or a collection of resources.
- **Collection endpoint:** `/users` (all users)
- **Single resource endpoint:** `/users/42` (one specific user)
- RESTful APIs use nouns for endpoints, not verbs. Bad: `/getUser`. Good: `/users/42` with method GET.

##### 2. Path Variables (Path Parameters)
A path variable is part of the URL itself. It’s a placeholder that is replaced by a concrete value to identify a specific resource.
- **Syntax:** `/users/{userId}`
- **Example:** `/users/42` (The `42` replaces `{userId}` and uniquely identifies the user).
- **Real-world examples:**
  - `GET /posts/15` → Get blog post with ID 15.
  - `DELETE /orders/1002` → Cancel order 1002.
  - `PUT /books/978-3-16-148410-0` → Replace book with that ISBN.
- **Why testing matters:** Path variables are mandatory. If you skip the ID (e.g., `GET /users/`), the server should return a `404 Not Found` or `400 Bad Request`. You also test with invalid IDs: letters where numbers are expected, negative numbers, zero, extremely large numbers.

##### 3. Query Parameters (Query String)
Query parameters come after a question mark `?` in the URL. They are optional key‑value pairs used to filter, sort, search, or paginate the results.
- **Syntax:** `?key1=value1&key2=value2`
- **Example:** `GET /users?active=true&role=admin&limit=10&page=2`
- **Common query parameter uses:**
  - **Filtering:** `?status=available` (only pets that are available)
  - **Search:** `?q=Harry+Potter` (full‑text search)
  - **Pagination:** `?limit=50&offset=100` (get 50 results starting from the 101st)
  - **Sorting:** `?sort=price&order=desc`
  - **Field selection:** `?fields=id,name,email` (return only these fields – sparse fieldsets)
- **Why testing matters:** Query parameters are flexible, and many bugs live here:
  - Missing optional parameter → should still work, returning all results.
  - Invalid values (e.g., `limit=banana`) → `400 Bad Request`.
  - Negative or zero limits → `400 Bad Request`.
  - Extremely large limits (e.g., `limit=99999999`) → should be capped or error.
  - SQL injection in query string → should be sanitised.
  - Encoding: spaces become `%20`, special characters `%3D`. Testing ensures they are correctly decoded by the server.

#### 🧪 Real‑World Example – E‑Commerce API

##### 🔍 Simple Analogy – Library vs. Bookstore

**Path Variable** = you walk into a library and ask: "I want the book with ISBN 978-0-123-45678-9." The librarian goes straight to that exact, single book. The ISBN uniquely identifies one book.

**Query Parameter** = you walk into a bookstore and say: "Show me all books by J.K. Rowling, sorted by price, in pages of 20." The bookseller brings you a filtered list of many books.

In APIs, the same logic applies:
- If you want one specific product, you use a path variable (like a product ID or SKU).
- If you want a list of products that match some criteria, you use query parameters (filters, sorting, pagination).

##### 💼 E-Commerce Example Broken Down

Base URL: `https://api.store.com/v1`

###### 1. Path Variable – Get a single product
`GET /products/BZ-882`
- `/products` = the resource (all products).
- `/BZ-882` = a path variable. `BZ-882` is the unique SKU (stock keeping unit) of one specific product, like a "Samsung Galaxy S24 Ultra, Black, 256GB".
- The API understands: "Give me the product whose SKU is BZ-882."
- There is only one product with that SKU. The response is a single product object, like:

```json
{
  "sku": "BZ-882",
  "name": "Samsung Galaxy S24 Ultra",
  "category": "electronics",
  "brand": "Samsung",
  "price": 1299.99,
  "inStock": true
}
```

So, path variable = exact, single item.

###### 2. Query Parameters – Filter a list
`GET /products?category=electronics&brand=Samsung&sort=price&order=asc&limit=20&page=1`
- `/products` = the resource (all products).
- After `?` are query parameters (key=value pairs separated by `&`):
  - `category=electronics` → only products in the "electronics" category.
  - `brand=Samsung` → only Samsung brand.
  - `sort=price` → sort results by price.
  - `order=asc` → ascending order (cheapest first).
  - `limit=20` → show 20 products per page.
  - `page=1` → show the first page of results.
- The API understands: "Give me all products that are electronics, Samsung brand, sorted by price from lowest to highest, 20 items per page, and show me page 1."
- The response is an array (list) of many products, not just one, like:

```json
{
  "data": [
    { "sku": "EL-101", "name": "Samsung Charger", "price": 19.99 },
    { "sku": "EL-205", "name": "Samsung Galaxy Buds", "price": 99.99 },
    { "sku": "BZ-882", "name": "Samsung Galaxy S24 Ultra", "price": 1299.99 }
  ],
  "page": 1,
  "totalPages": 3,
  "totalItems": 58
}
```

So, query parameters = filter, sort, paginate a list.

##### 🔁 Why the SKU "BZ-882" appears in both examples
In the query parameter example, `BZ-882` is just one of many products in the filtered list. In the path variable example, it's the only item returned. Both are perfectly valid ways to use the same product ID, depending on whether you want to fetch it directly or find it among a filtered set.

#### ❓ Why This Matters for a QA/SDET

- You must construct valid URLs for every test case. A wrong URL is a wasted test.
- You design positive and negative tests around both path variables and query parameters.
- In automation, you'll write functions that build URLs dynamically, swapping out IDs and appending different query strings based on test data.
- Understanding URL structure helps you detect poorly designed endpoints (e.g., putting an action verb in the URL like `/getUser`, which violates RESTful design, or exposing database IDs without validation).
- You'll also test edge cases like double slashes (`//`), trailing slashes (`/users/` vs `/users`), and URL encoding.

**Explanation:**
- An API URL consists of the protocol, host, optional base path, an endpoint that represents a resource, optional path variables that identify a specific resource, and optional query parameters that provide filtering, sorting, and pagination.
- Path variables are part of the URL path and are required; query parameters come after the `?` and are flexible.
- As a QA, I systematically test both: for path variables, I validate correct, missing, and malformed IDs; for query parameters, I test missing, invalid, boundary, and combination values.
- This ensures the API is robust, predictable, and correctly handles a wide range of client inputs.

---

### 5.4 HTTP Headers (Content-Type, Accept, Authorization)

#### 🔍 Simple Analogy

Imagine you’re sending a parcel through a courier service.

**Content‑Type** is the label on the parcel that tells the receiver what’s inside: “Glass – Handle with Care” or “Food – Perishable”. If you label it wrongly, the receiver won’t know how to open it or might damage what’s inside.

**Accept** is you telling the courier: “I only want packages that are wrapped in blue paper; don’t even ring my doorbell if it’s not blue.” You’re telling the server what format of reply you’re willing to accept.

**Authorization** is your ID badge. The courier won’t hand over the parcel unless you show proof that you are allowed to receive it. It proves you have permission.

Headers are not part of the actual “message” – they’re extra instructions that tell the server how to handle your request or what to send back.

#### 💼 Professional Details

HTTP headers are key‑value pairs sent at the beginning of an HTTP request or response. They carry metadata: what type of data is being sent, what kind of response is expected, who is making the request, and much more.

##### 1. Content‑Type (Request Header)
- **Purpose:** Tells the server what format the request body is in.
- **When to send:** Anytime you send a request body (POST, PUT, PATCH).
- **Common values:**
  - `Content-Type: application/json` – Most modern APIs expect this. The body is JSON.
  - `Content-Type: application/xml` – Used for SOAP or legacy APIs.
  - `Content-Type: application/x-www-form-urlencoded` – Used by HTML forms. Data is sent as `key=value&key2=value2`.
  - `Content-Type: multipart/form-data` – Used when uploading files along with form fields.
- **If you forget Content‑Type:** The server doesn’t know how to read your body. It often responds with `415 Unsupported Media Type`. You, as a QA, must test this: what happens if the Content‑Type is missing, or set to `text/plain` when the endpoint expects JSON?

##### 2. Accept (Request Header)
- **Purpose:** Tells the server what format the client wants the response body in.
- **When to send:** Almost always. It’s the client saying, “I can understand JSON; please give me JSON.”
- **Common values:**
  - `Accept: application/json` – Give me JSON.
  - `Accept: application/xml` – Give me XML.
  - `Accept: */*` – Give me anything (default).
- **Testing scenarios:**
  - Send `Accept: application/xml` to an endpoint that only returns JSON. It may return `406 Not Acceptable` or fall back to JSON.
  - Send `Accept: */*` and verify the default format is correct.
  - Test that the response’s `Content-Type` header matches what you asked for.

##### 3. Authorization (Request Header)
- **Purpose:** Carries credentials to prove the client’s identity or permissions.
- **When to send:** On almost every request to a protected API (except public endpoints like login).
- **Common schemes:**
  - `Authorization: Basic base64(username:password)` – Simple, sent over HTTPS.
  - `Authorization: Bearer eyJhbGciOiJIUzI1NiIs...` – A JWT token, very common in modern APIs.
  - `Authorization: ApiKey abc123xyz` – A pre‑shared secret key.
  - `Authorization: Digest ...` – A more secure challenge‑response method (rare today).
- **Without proper Authorization:** Server returns `401 Unauthorized` or `403 Forbidden`. As a QA, you test:
  - No `Authorization` header → `401`.
  - Expired token → `401`.
  - Token with wrong permissions (e.g., a user trying to delete another user’s data) → `403`.
  - API key in the wrong location (query string vs. header).

#### 🧪 Real‑World Example – Creating a User

Request:

```text
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

{
  "name": "Jane",
  "email": "jane@example.com"
}
```

- `Content-Type` tells the server: “I’m sending you JSON; parse this body accordingly.”
- `Accept` tells the server: “I want the response (including the newly created user) in JSON.”
- `Authorization` proves that this client has permission to create a new user.

Response (200 OK):

```text
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 89,
  "name": "Jane",
  "email": "jane@example.com"
}
```

Here, the response `Content-Type` is `application/json`, matching the `Accept` header.

#### ❓ Why This Matters for a QA/SDET

- Headers are a rich source of test cases. You test missing, invalid, and unexpected headers.
- You ensure correct `Content-Type` is enforced: sending JSON as `text/plain` must fail.
- You verify that `Accept` negotiation works and the server sends the right format.
- You exhaustively test authentication: expired tokens, missing `Authorization`, invalid keys, and privilege escalation.
- In automation (Postman scripts, Playwright), you’ll set headers manually for each request. A single forgotten header can cause a `401` or `415`, breaking your suite.

**Explanation:**
- HTTP headers are metadata that accompany requests and responses.
- The Content-Type header tells the server the format of the request body; without it, the server can’t parse the payload.
- The Accept header tells the server what response format the client can process.
- The Authorization header carries credentials that grant or deny access.
- As a QA/SDET, I test these headers thoroughly: I verify that the correct Content-Type is enforced, that Accept negotiation returns the expected format, and that missing or invalid Authorization headers result in proper 401/403 responses.
- These checks are fundamental to API security and robustness.

---

### 5.5 JSON Payloads & Parsing (Request Body)

#### 🔍 Simple Analogy

Imagine you’re filling out a passport application form.

The form has labelled boxes: First Name, Last Name, Date of Birth, Place of Birth, Nationality.

You fill each box with exactly the right kind of information: a date in the date box, a country name in the nationality box.

If you leave the “Last Name” box empty, the clerk will reject the form. If you scribble nonsense in the “Date of Birth” box, the clerk will reject the form because it’s not a real date.

That’s exactly what a JSON payload is: a structured, labelled form that the client fills out and sends to the server. The server reads it, checks that the data is correct, and then processes it.

JSON is the language the form is written in. Parsing is the clerk reading the form and interpreting what you wrote.

#### 💼 Professional Definition

**JSON (JavaScript Object Notation)** is a lightweight, text‑based format for representing structured data. It’s human‑readable, machine‑readable, and language‑independent. Almost every modern REST API uses JSON for request and response bodies.

A **JSON payload** (the request body) is the actual data you send to the server in a POST, PUT, or PATCH request. It’s a string of text formatted according to JSON rules, placed in the body of the HTTP request.

**Parsing** is the process of converting that text string into a data structure (like an object or an array) that the server can work with programmatically.

#### 🧱 JSON Structure Basics

JSON is built from only a few data types:

| JSON Type | Example | Notes |
| :--- | :--- | :--- |
| String | `"John"` | Must be in double quotes. |
| Number | `42`, `3.14`, `-10` | No quotes around numbers. |
| Boolean | `true`, `false` | Lowercase, no quotes. |
| Null | `null` | Represents “no value”. |
| Object | `{ "key": "value" }` | Unordered collection of key‑value pairs, wrapped in curly braces. Keys must be strings. |
| Array | `["apple", "banana"]` | Ordered list of values, wrapped in square brackets. Values can be any type, including other objects/arrays. |

#### 🧪 Real‑World Example – Creating a User

Request:
`POST /users`
`Content-Type: application/json`

JSON Payload (Request Body):

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "age": 28,
  "isActive": true,
  "address": {
    "street": "15 Main St",
    "city": "London",
    "postcode": "SW1 1AA"
  },
  "roles": ["customer", "subscriber"]
}
```

Breakdown:
- The whole thing is a JSON object.
- `firstName`, `lastName`, `email` are strings.
- `age` is a number.
- `isActive` is a boolean.
- `address` is a nested object.
- `roles` is an array of strings.

Successful Response (201 Created):

```json
{
  "id": 1001,
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "age": 28,
  "isActive": true,
  "address": {
    "street": "15 Main St",
    "city": "London",
    "postcode": "SW1 1AA"
  },
  "roles": ["customer", "subscriber"]
}
```

The response confirms what you created.

#### 📝 How QA Tests JSON Payloads

Every field in the JSON is a potential test scenario. You must think: “What if this field is missing, wrong type, empty, duplicated, or contains special characters?”

##### 1. Positive tests (valid data)
- All required fields present, correct types, valid values.
- Nested objects correctly structured.
- Arrays contain valid items.

##### 2. Negative tests (invalid data)
- **Missing required fields:** e.g., omit email. Expect `400 Bad Request` with an error message indicating the missing field.
- **Wrong data types:** e.g., send `"age": "twenty eight"` (string instead of number). Expect `400`.
- **Empty strings:** e.g., `"firstName": ""`. Usually `400`, unless the API allows it.
- **Null values:** `"email": null`. Some APIs reject explicit nulls, others treat them as missing.
- **Extra fields:** `"middleName": "Ann"` when the API doesn’t expect it. Should the server ignore it or reject it? (Usually ignored, but worth testing.)
- **Malformed JSON:** Missing a closing brace `}`, a stray comma, single quotes instead of double quotes. Expect `400 Bad Request` with a generic “Invalid JSON” message.
- **Extremely large values:** `"firstName"` with 10,000 characters. Expect `400` (field too long) or successful truncation if documented.
- **Special characters and Unicode:** emoji in names, null as a string, SQL injection in fields, script tags.

##### 3. Boundary value tests (applying EP & BVA to JSON fields)
- `age`: test minimum allowed (e.g., 0, 1), maximum allowed (e.g., 120, 150), just below (‑1), just above (151).
- `roles` array: empty array `[]`, single element, maximum allowed number of elements.

#### 🔧 Parsing in Practice

The server parses the JSON string into an object to access properties like `body.firstName`.

If the JSON is malformed (e.g., missing a quote), parsing fails, and the server responds with `400 Bad Request` or `422 Unprocessable Entity`.

As a tester, when you write scripts in Postman, you parse the response JSON to assert values:
```javascript
const jsonData = pm.response.json();
pm.expect(jsonData.firstName).to.eql("Jane");
```

In Playwright (automation), you’ll similarly parse the response body:
```javascript
const user = await response.json();
expect(user.firstName).toBe("Jane");
```

#### ❓ Why This Matters for a QA/SDET

- You must be able to read and write JSON fluently; it’s the primary language of APIs.
- Every field is a test point. You systematically apply your manual test design skills (positive/negative, EP, BVA) to JSON payloads.
- Understanding parsing helps you debug failures: if your script can’t parse the response, you know the response body might be empty, HTML instead of JSON, or malformed.
- When automating, you’ll construct request bodies dynamically using JavaScript objects and `JSON.stringify()` to send them.
- You’ll validate not just status codes but also the structure and values of the response JSON. That’s the heart of API testing.

**Explanation:**
- JSON is the standard data format for modern API request and response bodies. It uses key-value pairs, arrays, and nested objects to represent structured data.
- The Content-Type header tells the server to expect JSON.
- As a QA, I design test cases around every field in the JSON payload: testing correct types, missing required fields, invalid values, boundary conditions, and malformed JSON.
- I also verify that the response JSON matches the expected schema and values.
- Parsing JSON responses in Postman and Playwright allows me to assert on specific data and build robust API test automation.

---

### 5.6 HTTP Status Codes (2xx, 3xx, 4xx, 5xx)

#### 🔍 Simple Analogy

When you order a pizza and the delivery arrives, the delivery person gives you a brief summary of what happened.

- **2xx (Success):** “Here’s your pizza. Everything is perfect.”
- **3xx (Redirection):** “We moved to a new shop. Go to this other address to collect your pizza.”
- **4xx (Client Error):** “You didn’t pay, so no pizza. Or you asked for a pizza that doesn’t exist on the menu.”
- **5xx (Server Error):** “The kitchen is on fire. We can’t make any pizza right now.”

HTTP status codes are that single‑line summary from the server. Every API response includes a three‑digit code that tells the client exactly what happened.

#### 💼 Professional Details

HTTP status codes are divided into five classes. The first digit tells you the category.

| Range | Class | Meaning |
| :--- | :--- | :--- |
| 1xx | Informational | Request received, continuing. Rarely seen in APIs. |
| 2xx | Success | The request was received, understood, and accepted. |
| 3xx | Redirection | Further action is needed to complete the request. |
| 4xx | Client Error | The request contains bad syntax or cannot be fulfilled. |
| 5xx | Server Error | The server failed to fulfill a valid request. |

#### 📋 Complete List of Common Status Codes

##### ✅ 2xx – Success (Everything worked)

| Code | Name | Meaning | Example |
| :--- | :--- | :--- | :--- |
| `200 OK` | OK | The request succeeded. Response body contains the requested data or confirmation. | `GET /users/5` returns user data. |
| `201 Created` | Created | A new resource was created successfully. Often returns the created object. | `POST /users` returns the new user with an ID. |
| `204 No Content` | No Content | The request succeeded, but there is no response body. Used for successful DELETEs or updates. | `DELETE /users/5` returns no body. |

##### 🔁 3xx – Redirection (Go somewhere else)

| Code | Name | Meaning | Example |
| :--- | :--- | :--- | :--- |
| `301 Moved Permanently` | Moved Permanently | The resource has been moved to a new URL. Clients should update their bookmarks. | Old URL `/old‑login` now permanently at `/login`. |
| `302 Found` | Found | Temporary redirect. The resource is at another URL for now. | After login, temporarily redirect to `/dashboard`. |
| `304 Not Modified` | Not Modified | The resource hasn’t changed since the last request. Used for caching. | `GET /users/5` with `If-None-Match` header returns `304` instead of re‑sending the full data. |

##### ❌ 4xx – Client Error (You made a mistake)

| Code | Name | Meaning | Example |
| :--- | :--- | :--- | :--- |
| `400 Bad Request` | Bad Request | The server cannot understand the request due to malformed syntax, missing required fields, or invalid data. | Sending JSON with a missing required `email` field. |
| `401 Unauthorized` | Unauthorized | Authentication is required and has failed or not been provided. | Calling a protected endpoint without an `Authorization` header. |
| `403 Forbidden` | Forbidden | The server understands the request but refuses to authorize it. You don’t have permission. | A regular user trying to delete an admin resource. |
| `404 Not Found` | Not Found | The requested resource does not exist on the server. | `GET /users/99999` when no user with that ID exists. |
| `405 Method Not Allowed` | Method Not Allowed | The HTTP method is not supported for the resource. | `POST /users/5` when only GET, PUT, and DELETE are allowed on a single resource. |
| `409 Conflict` | Conflict | Request conflicts with the current state of the server. Often used for duplicate entries. | Creating a user with an email that already exists. |
| `422 Unprocessable Entity` | Unprocessable Entity | The request is well‑formed but contains semantic errors (e.g., invalid field value). | `"age": -5` – the JSON is valid, but the value is not acceptable. |
| `429 Too Many Requests` | Too Many Requests | Rate limiting has been applied. The client has sent too many requests in a given time. | Making 100 login attempts per second triggers a block. |

##### 💥 5xx – Server Error (The server messed up)

| Code | Name | Meaning | Example |
| :--- | :--- | :--- | :--- |
| `500 Internal Server Error` | Internal Server Error | A generic server error. Something went wrong on the server’s side. | An unhandled exception in the code (e.g., null pointer, database crash). |
| `502 Bad Gateway` | Bad Gateway | The server, while acting as a gateway or proxy, received an invalid response from the upstream server. | API gateway calls a backend microservice that is down. |
| `503 Service Unavailable` | Service Unavailable | The server is currently unavailable (overloaded or down for maintenance). Usually temporary. | A maintenance page or server overload. |
| `504 Gateway Timeout` | Gateway Timeout | The server, acting as a gateway, did not receive a timely response from the upstream server. | A backend service takes too long to respond. |

#### 🔍 How to Check Status Codes

You check HTTP status codes in three ways, depending on your context:

##### 1. Manual testing – Postman
After sending a request, Postman displays the status code prominently at the top of the response area (e.g., `200 OK` in green, `404 Not Found` in orange, `500 Internal Server Error` in red). You can also write test scripts in Postman to assert the status code:

```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
```

##### 2. Automation – Playwright (TypeScript)
Playwright’s `APIRequestContext` returns a response object. You check the status code directly:

```typescript
const response = await request.post('https://api.example.com/users', {
  data: { name: 'Jane' }
});
expect(response.status()).toBe(201); // checks exactly 201
```

For UI tests with Playwright, you can also check network responses via `page.waitForResponse()` and then assert the status.

##### 3. Browser DevTools – Network tab
Open DevTools (F12) → Network tab. Perform an action in the web app. Click on any API call and see the status code under the “Status” column. This is how you quickly verify what the UI actually receives from the backend.

#### 🧪 Real‑World Testing – Status Code Test Cases

Using a user management API as an example, a QA would design tests like:

| Action | Expected Code | Negative Scenario | Expected Code |
| :--- | :--- | :--- | :--- |
| Create a new user with valid data | `201 Created` | Missing required field `email` | `400 Bad Request` or `422 Unprocessable Entity` |
| Get an existing user | `200 OK` | Get user ID `99999` | `404 Not Found` |
| Delete a user | `204 No Content` | Delete without auth header | `401 Unauthorized` |
| Update a user with a normal role | `200 OK` | Try to update an admin resource as a regular user | `403 Forbidden` |
| Call a POST endpoint with GET | `405 Method Not Allowed` | — | — |
| Send a request with an expired token | — | Expired JWT token | `401 Unauthorized` |
| Force a server crash (e.g., by sending a huge payload) | — | — | `500 Internal Server Error` (if the server doesn’t handle it) |

#### ❓ Why This Matters for a QA/SDET

- Every API test you write starts with checking the status code; it’s the first signal of success or failure.
- Status codes alone are not enough: a `200 OK` might still return incorrect data. You must also validate the response body. But a wrong status code is an immediate defect.
- You must test that the API uses the most appropriate code for each scenario – for example, a missing field should be `400` or `422`, not `500`. A poorly designed API might return `200 OK` with an error message in the body, which is a design flaw.
- In automation, you use status code assertions to categorise test results. If a `5xx` appears, your CI/CD pipeline can mark the build as unstable immediately.

**Explanation:**
- HTTP status codes are three‑digit numbers returned by the server to summarise the outcome of a request.
- 2xx codes indicate success (`200 OK`, `201 Created`, `204 No Content`).
- 3xx codes indicate redirection (`301`, `302`, `304`).
- 4xx codes signal client errors (`400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `405 Method Not Allowed`, `409 Conflict`, `422 Unprocessable Entity`, `429 Too Many Requests`).
- 5xx codes signify server errors (`500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout`).
- I check status codes manually in Postman and DevTools, and programmatically with assertions in Playwright.
- Verifying the correct status code for each positive and negative scenario is the first step in any API test.

---

## 6. API Security & Authentication

### 6.1 Authentication vs. Authorization

#### 🔍 Simple Analogy

You arrive at the entrance of a highly secure office building.

**Authentication** is the security guard at the front door asking: “Who are you? Show me your ID card.” You hand over your company ID. The guard checks that the photo matches your face and that the card is valid. Now the guard knows you are John Smith, employee #8842. This is about proving your identity.

**Authorization** is what happens after you’re inside. You walk up to the server room door, swipe your ID, and the door stays locked. You try to enter the finance director’s office – locked again. Your ID card works, but it only allows you into the engineering floor and the cafeteria. The system knows who you are, but it also knows what you are allowed to do. That’s authorization: proving you have permission.

- **Authentication** = Who are you?
- **Authorization** = Are you allowed to do this?

#### 💼 Professional Definitions

| Feature | Authentication | Authorization |
| :--- | :--- | :--- |
| **Question it answers** | “Who are you?” | “What are you allowed to do?” |
| **When it happens** | First – you must be identified before permissions can be checked. | Second – after identity is verified, the system checks your rights. |
| **How it works** | Credentials are provided: username/password, API key, JWT token, certificate. The server validates them. | The server checks the authenticated user’s role or permissions against the requested resource and action. |
| **Failure response** | `401 Unauthorized` – “I don’t know who you are; your credentials are missing or wrong.” | `403 Forbidden` – “I know who you are, but you don’t have permission to do this.” |
| **Real‑world example** | Swiping your ID card at the building entrance. | Trying to open the server room door with the same ID card; it stays locked. |

> **Key point:** The names are confusing because a `401 Unauthorized` actually means “unauthenticated.” Despite its name, it’s about failed authentication, not authorization.

#### 🧪 Real‑World API Example – Bank Account API

Scenario: You want to view the account details of user ID 500.

**1. Authentication fails**
- **Request:** `GET /accounts/500` (Without an `Authorization` header)
- **Response:** `401 Unauthorized`
- The server says: “I don’t know who you are. No valid token provided.”

**2. Authentication succeeds, but Authorization fails**
- **Request:** `GET /accounts/500`
- **Header:** `Authorization: Bearer token_for_user_300`
- The server decodes the token and knows you are User 300.
- The server checks: “Is User 300 allowed to view account 500?” → No.
- **Response:** `403 Forbidden`
- The server says: “I know who you are (User 300), but you don’t have permission to access account 500. That account belongs to another user, and you are not an admin.”

**3. Both Authentication and Authorization succeed**
- **Request:** `GET /accounts/500`
- **Header:** `Authorization: Bearer token_for_user_500` (Or a token with an admin role that can view any account).
- Server authenticates User 500, authorizes the request (it’s their own account).
- **Response:** `200 OK` with account details.

#### ❓ Why This Matters for a QA/SDET

You must design test cases that clearly separate authentication failures from authorization failures. If the server returns `401` when it should return `403` (or vice versa), that’s a security defect.

**Authentication tests:**
- No token → `401 Unauthorized`.
- Expired token → `401 Unauthorized`.
- Malformed token (e.g., `Bearer abc123`, but the token format is wrong) → `401 Unauthorized`.
- Token for a deleted user → `401 Unauthorized`.

**Authorization tests:**
- Regular user tries to access admin endpoint → `403 Forbidden`.
- User A tries to modify User B’s data → `403 Forbidden`.
- A valid token that lacks the required scope or role → `403 Forbidden`.

In automation (Postman, Playwright), you’ll write distinct test suites for authentication and authorization. A common SDET task is creating a token with different roles and verifying that permissions are correctly enforced.

**Explanation:**
- Authentication is the process of verifying who a user or client is, typically through credentials like passwords, API keys, or tokens.
- Authorization determines what that authenticated entity is allowed to do, based on roles or permissions.
- Authentication must happen first; if it fails, the server returns `401 Unauthorized`.
- If authentication succeeds but the user lacks the required permission, the server returns `403 Forbidden`.
- As a QA/SDET, I write test cases that validate both layers independently: ensuring that unauthenticated requests are rejected, and that authenticated users can only access resources they are explicitly permitted to.

---

### 6.2 Common Auth Methods (Basic Auth, API Keys, Bearer/JWT Tokens)

#### 🔍 Simple Analogy

Imagine you need to pick up a parcel from a secure locker.

- **Basic Auth** is like writing your username and password on a sticky note and sticking it to the locker every time you want to open it. It’s quick and simple, but anyone who sees the note can read your secrets, so you must be in a very safe place (like over HTTPS).
- **API Key** is like having a long, random membership number. You show the number; the locker opens. The locker doesn’t know who you are—only that the number is valid. It’s easy to share but also easy to steal.
- **Bearer Token (JWT)** is like a smart, time‑limited visitor badge. You first show your ID at the reception (login) and get a badge that says “John, valid for 1 hour, can access floors 1‑3.” Each time you go to a door, you just flash the badge. The badge is signed by the building, so the doors know it’s real without calling reception every time.

#### 💼 Professional Details

**1. Basic Authentication (Basic Auth)**
- **What it is:** The simplest authentication method. The client sends a string `username:password` encoded in Base64 in the `Authorization` header.
- **Header format:** `Authorization: Basic base64(username:password)`
- **Example:** Username: `admin`, Password: `secret123`
  - Base64 encoded: `admin:secret123` → `YWRtaW46c2VjcmV0MTIz`
  - Header: `Authorization: Basic YWRtaW46c2VjcmV0MTIz`
- **Important:** Base64 is not encryption; it’s just a reversible encoding. That’s why Basic Auth must always be used over HTTPS. Otherwise, credentials can be easily stolen.
- **Used in:** Legacy systems, internal APIs behind strict firewalls, quick testing.
- **Testing Basic Auth:**
  - Valid credentials → `200 OK` or the expected success.
  - Wrong password or username → `401 Unauthorized`.
  - Missing Authorization header → `401 Unauthorized`.
  - Using `http://` instead of `https://` → ensure the request is rejected or credentials are not sent in plain text.

**2. API Key**
- **What it is:** A long, unique, randomly generated string that the client includes in every request. The server checks if the key is valid and grants access. It doesn’t identify a user; it identifies an application or a project.
- **Where it goes:** Usually in a header or a query parameter.
  - Header: `X-API-Key: abc123def456ghi789`
  - Query parameter: `GET /users?api_key=abc123def456ghi789`
- **Used in:** Public APIs (e.g., Google Maps, OpenWeather), machine‑to‑machine communication.
- **Testing API Keys:**
  - Valid key → `200 OK`.
  - Invalid or malformed key → `401 Unauthorized` or `403 Forbidden`.
  - Missing key → `401 Unauthorized`.
  - Key with insufficient permissions (e.g., read‑only key used for a write operation) → `403 Forbidden`.
  - Key passed in URL: check that the key is not logged in browser history or server logs (should be in header).

**3. Bearer Token / JWT (JSON Web Token)**
- **What it is:** A token, often a JWT, that is obtained after a successful login (or by other authentication flows). The client then sends the token in the `Authorization` header as a “Bearer” token. The server validates the token’s signature and extracts the user identity and permissions without needing to store a session.
- **Header format:** `Authorization: Bearer eyJhbGciOiJIUzI1NiIs...`
- **JWT structure:** A JWT looks like three Base64‑encoded strings separated by dots: `header.payload.signature`. The payload contains claims like `userId`, `exp` (expiry time), and `scope/roles`. The signature ensures the token hasn’t been tampered with.
- **Benefits:** Stateless, self‑contained, can carry user info and permissions, scalable.
- **Used in:** Almost all modern single‑page applications (SPAs), mobile apps, and REST APIs.
- **Testing Bearer Tokens:**
  - Valid token → `200 OK`.
  - Expired token → `401 Unauthorized` with a message like “Token expired”.
  - Token signed with wrong secret → `401 Unauthorized` (invalid signature).
  - Token missing the Bearer prefix (e.g., `Authorization: eyJhbG...` without Bearer) → `401 Unauthorized` or `400 Bad Request`.
  - Token with wrong audience (`aud` claim) → `401 Unauthorized`.
  - Token with insufficient scope/role for the endpoint → `403 Forbidden`.
  - Refresh token flow (if applicable): ensure a new token can be obtained using a refresh token before expiry.

#### 🧪 Real‑World Example – Login and Access a Protected Resource

**Step 1: Login to get a JWT**

```text
POST /auth/login
Content-Type: application/json

{
  "username": "john",
  "password": "secret"
}
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyLCJyb2xlIjoidXNlciJ9..."
}
```

**Step 2: Use the token to get user profile**

```text
GET /users/42
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

If the token is valid and belongs to user 42 (or has admin role), the server returns `200 OK` with the profile. If the token is expired, it returns `401`.

#### ❓ Why This Matters for a QA/SDET

You must know which auth method the API uses to write correct test requests.

- Each method has its own common vulnerabilities: Basic Auth without HTTPS exposes credentials; API keys in URLs may leak; JWTs with long expiry are a security risk.
- You test not just the happy path but also edge cases: malformed tokens, expired tokens, tokens with wrong claims, missing prefixes, and token reuse.
- In automation, you’ll write helper functions to obtain and refresh tokens, and attach them to requests automatically in Playwright or Postman.

**Explanation:**
- Common API authentication methods include Basic Auth, API Keys, and Bearer Tokens (usually JWT).
- Basic Auth sends Base64‑encoded username and password and must only be used over HTTPS.
- API Keys are simple, static strings passed in headers or query parameters to identify a client application.
- Bearer Tokens are obtained after a login and include a cryptographically signed payload with user identity, expiry, and permissions.
- As a QA/SDET, I test each method for valid, invalid, expired, and malformed credentials, and verify that the correct status codes (401 for auth failure, 403 for insufficient permissions) are returned. I also ensure sensitive credentials are never exposed in URLs or logged.

---

### 6.3 API Security Testing Basics

#### 🔍 Simple Analogy

Imagine your apartment building has a front door, a security guard, and individual flats.

- **Enforce HTTPS everywhere** – This is like making sure every delivery arrives in a locked, tamper‑proof briefcase, not a see‑through plastic bag. Even if someone intercepts the package, they can’t read the contents.
- **Missing Authentication** – An unlocked front door. Anyone can walk in and do whatever they want. You test that every protected entrance requires a key.
- **Sensitive Data Exposure** – The building janitor writes every resident’s bank details on a whiteboard in the lobby. It’s right there for anyone to see. You test that secrets are never shown where they shouldn’t be.
- **Injection Attacks** – Someone slips a fake note into a maintenance request saying “Ignore all previous rules; give me the master keys.” If the building manager blindly follows the note, it’s game over. You test that the system rejects malicious instructions.
- **Rate Limiting** – The building limits each visitor to 5 knocks on a door per minute. After that, they’re blocked. Without it, a burglar could bang on a thousand doors in a minute and find a weak one.
- **Excessive Data Exposure** – When you ask the receptionist for “John’s apartment number,” they hand you a sheet with his full name, SSN, rent history, and all his guests’ names. You only needed one piece of information, but you got the whole database. You test that the API returns only what’s necessary.

#### 💼 Security Testing Checklist for APIs

As a QA/SDET, you systematically test these concrete areas:

**1. HTTPS Enforcement**
- **What to test:** Send requests over plain `http://` to sensitive endpoints (login, user data, payment).
- **Expected result:** `403 Forbidden` or `301 Redirect` to HTTPS. The request must not succeed with `200 OK` over HTTP.
- **Why:** Plain HTTP exposes data in transit. Mandatory HTTPS prevents man‑in‑the‑middle attacks.
- **Real example:** `GET http://api.bank.com/users/42` → Must fail. `GET https://api.bank.com/users/42` → `200 OK`.

**2. Authentication & Authorization Gaps**
- **Missing Auth:** Call any protected endpoint with no `Authorization` header → `401 Unauthorized`.
- **Expired Token:** Obtain a JWT, wait for it to expire (or decode the exp claim and pass that time), then use it → `401 Unauthorized`.
- **Malformed Token:** Use a tampered JWT (change one character) → `401 Unauthorized`.
- **Wrong Role / Scope:** Use a valid token of a regular user to access an admin endpoint (`GET /admin/users`) → `403 Forbidden`.
- **Token in URL:** If the API accepts tokens as query parameters (`?token=...`), check that they are not logged or visible in history. Better yet, they should be rejected; tokens belong in headers.

**3. Sensitive Data Exposure**
- **In Responses:** Check that password fields, password hashes, security question answers, or full credit card numbers never appear in API responses.
  - Example: `GET /users/5` should return `{ "id": 5, "name": "John", "email": "j@example.com" }` and NOT `{ "password": "hashedpw", "ssn": "123-45-6789" }`.
- **In URLs:** Verify that no sensitive data (tokens, passwords, personal info) is passed in path segments or query strings where they can be logged.
- **In Error Messages:** Ensure that detailed stack traces or database error messages are not leaked to the client in production. A server error should return a generic message like `500 Internal Server Error` with no DB details.

**4. Injection Attacks**
- **SQL Injection:** Insert SQL syntax into input fields or query parameters.
  - Example: `GET /users?name=' OR '1'='1` – should not return all users. The API must return `400 Bad Request` or an empty result set, not execute the injected SQL.
- **In JSON body:** `{ "email": "test@example.com'; DROP TABLE users;--" }` – must not execute any commands.
- **NoSQL Injection (MongoDB):** For REST APIs using NoSQL, try `{ "$gt": "" }` or similar operators in JSON fields.
- **Command Injection:** If an endpoint takes a filename or command parameter, try `; ls -la` or `&& whoami`. The API must sanitise input.
- **XML Injection:** Attempt to insert entity definitions or recursive payloads (Billion Laughs attack) in SOAP/XML endpoints.
- **Expected result:** The API must reject the payload with a `400 Bad Request` or treat it as a literal string, never execute it.

**5. Rate Limiting / Throttling**
- **What to test:** Send a high volume of requests in a short time from the same IP or API key.
  - Example: `POST /login` 50 times in 1 second.
- **Expected result:** After a threshold, the API must return `429 Too Many Requests` and block further attempts for a period.
- **Also test:** Whether the rate limit counters reset correctly after the time window expires.
- **Why:** Prevents brute‑force attacks on passwords, denial‑of‑service, and resource abuse.

**6. Excessive Data Exposure / Mass Assignment**
- **What to test:** When creating or updating a resource, send extra fields that should not be modifiable by the client.
  - Example: `POST /users` body: `{ "name": "Jane", "email": "jane@test.com", "role": "admin" }`. If only admins can assign roles, a normal user’s request with `"role": "admin"` must either be ignored or rejected.
- **Expected result:** The server must not allow the user to elevate their own privileges. Either strip the extra field or return `403 Forbidden`.
- **Also test:** When fetching a resource, check that the response doesn’t expose unnecessary relational data (e.g., an order shouldn’t contain the seller’s entire payment history).

**7. Cross‑Origin Resource Sharing (CORS) Misconfiguration**
- **What to test:** Send requests from a browser (or simulate via Postman with an `Origin` header) from an untrusted domain.
- **Expected result:** The API should only allow specific origins if configured correctly. An overly permissive `Access-Control-Allow-Origin: *` on sensitive endpoints is a security risk.

**8. Secure Headers (API Version)**
- Check that headers like `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, or `Content-Security-Policy` are present in the response (more for web UIs, but good for APIs returning HTML).
- Ensure cookies set by APIs have `Secure` and `HttpOnly` flags.

#### 🧪 Real‑World Security Test Case – Login Endpoint

Endpoint: `POST /auth/login`

Security checks:

| Test Scenario | Request | Expected Result |
| :--- | :--- | :--- |
| HTTPS enforcement | `http://api.example.com/auth/login` | `403 Forbidden` or `301 Redirect` to https. |
| SQL Injection | `{ "email": "'; DROP TABLE users;--", "password": "x" }` | `400 Bad Request` or generic error, no DB damage. |
| Missing Auth | `GET /users/me` with no `Authorization` header | `401 Unauthorized`. |
| Rate Limiting | 100 login attempts in 10 seconds | After threshold, `429 Too Many Requests`. |
| Sensitive Data in Response | Send valid login request | Response must not contain password hash. |

#### ❓ Why This Matters for a QA/SDET

You are the last line of defence before code hits production. A single missed security check can expose millions of users’ data.

- In CI/CD, you can automate many of these checks (Playwright scripts for HTTPS redirects, schema validation for over‑exposure, header assertions). They become part of the regression suite.
- Security testing isn’t just a specialist’s job; every SDET must know the basic API vulnerabilities. Interviewers will ask how you test API security.

**Explanation:**
- API security testing involves a set of concrete checks that verify the API protects data and resources.
- I verify that all sensitive endpoints enforce HTTPS, that missing, expired, or wrong‑role authentication tokens are correctly rejected with `401` or `403`.
- I ensure that responses never expose passwords or internal data, and that input fields are safe against injection attacks (SQL, NoSQL, command).
- Rate limiting must prevent brute‑force and denial‑of‑service.
- I also test for excessive data exposure by ensuring the API returns only necessary fields.
- These tests are a core part of my QA automation suite and are run continuously in CI/CD.

---

## 7. API Test Design & Edge Cases (The QA Mindset)

### 7.1 Positive vs. Negative API Testing

#### 🔍 Simple Analogy

Imagine you're testing a vending machine.

**Positive Testing** is checking that the machine works perfectly when a customer does everything right:
You insert exact change, press the button for a chocolate bar, and the machine drops it. The machine behaves exactly as designed.

**Negative Testing** is checking that the machine doesn't break, crash, or do something dangerous when a customer does something wrong or unexpected:
You insert fake money, press five buttons at once, kick the machine, or try to reach inside. The machine should reject the fake money, ignore the random button presses, stay standing after a kick, and sound an alarm if tampered with.

In APIs, positive testing verifies that the API returns the correct response when given valid inputs. Negative testing verifies that the API gracefully handles invalid, missing, or malicious inputs without crashing or leaking information.

#### 💼 Professional Definitions

| Feature | Positive Testing | Negative Testing |
| :--- | :--- | :--- |
| **Goal** | Confirm the system works as expected under normal, valid conditions. | Confirm the system is robust, secure, and stable under invalid, unexpected, or harmful conditions. |
| **Input** | Valid, correct data that follows all rules. | Invalid, missing, malformed, out‑of‑bounds, or malicious data. |
| **Expected result** | A success response (`2xx` status code) and the correct data. | An error response (`4xx` or `5xx` status code) with a clear, non‑leaking message. No crash, no data corruption. |
| **Mindset** | "Prove the feature works." | "Try to break the feature." |

Both are essential. A system with 100% positive test cases passing but zero negative testing will still fail in production when real users make mistakes or attackers probe its weaknesses.

#### 🧪 Real‑World Example – Create User API

**Endpoint:** `POST /users`
**Required fields:** `name` (string, 1–100 chars), `email` (valid email format), `age` (integer, 18–120).
**Optional field:** `phone` (string, 10–15 digits).

**Positive Test Cases**

| TC‑ID | Scenario | Request Body | Expected Status | Expected Response |
| :--- | :--- | :--- | :--- | :--- |
| **POS‑01** | Create user with all valid fields | `{ "name": "Jane", "email": "jane@test.com", "age": 30, "phone": "1234567890" }` | `201 Created` | Response body contains the created user with a new `id`. |
| **POS‑02** | Create user without optional phone field | `{ "name": "John", "email": "john@test.com", "age": 25 }` | `201 Created` | User created; phone is null or absent. |
| **POS‑03** | Name exactly at boundary – 1 character | `{ "name": "A", "email": "a@test.com", "age": 18 }` | `201 Created` | User created with name "A". |
| **POS‑04** | Age exactly at lower boundary – 18 | `{ "name": "Valid", "email": "v@test.com", "age": 18 }` | `201 Created` | User created. |
| **POS‑05** | Age exactly at upper boundary – 120 | `{ "name": "Valid", "email": "v2@test.com", "age": 120 }` | `201 Created` | User created. |

**Negative Test Cases**

| TC‑ID | Scenario | Request Body | Expected Status | Expected Behaviour |
| :--- | :--- | :--- | :--- | :--- |
| **NEG‑01** | Missing required field `name` | `{ "email": "j@test.com", "age": 30 }` | `400` or `422` | Error message indicating name is required. |
| **NEG‑02** | Missing required field `email` | `{ "name": "Jane", "age": 30 }` | `400` or `422` | Error message indicating email is required. |
| **NEG‑03** | Invalid email format | `{ "name": "Jane", "email": "not-an-email", "age": 30 }` | `400` or `422` | Error message indicating invalid email format. |
| **NEG‑04** | Age below minimum (17) | `{ "name": "Jane", "email": "j@test.com", "age": 17 }` | `400` or `422` | Error message indicating age must be at least 18. |
| **NEG‑05** | Age above maximum (121) | `{ "name": "Jane", "email": "j@test.com", "age": 121 }` | `400` or `422` | Error message indicating age maximum. |
| **NEG‑06** | Name exceeds 100 chars | `{ "name": "AAA…(101 chars)", "email": "j@test.com", "age": 30 }` | `400` or `422` | Error message indicating name too long. |
| **NEG‑07** | Name is empty string | `{ "name": "", "email": "j@test.com", "age": 30 }` | `400` or `422` | Error – name is required and cannot be empty. |
| **NEG‑08** | Wrong data type for age (string) | `{ "name": "Jane", "email": "j@test.com", "age": "thirty" }` | `400` or `422` | Error – age must be a number. |
| **NEG‑09** | Malformed JSON (missing brace) | `{ "name": "Jane", "email": "j@test.com", "age": 30` | `400 Bad Request` | Generic “Invalid JSON” error. |
| **NEG‑10** | SQL Injection in name | `{ "name": "Jane'; DROP TABLE users;--", "email": "j@test.com", "age": 30 }` | `400` or `201` | The system must not execute the injected SQL. If accepted, the name is stored literally. |
| **NEG‑11** | Duplicate email | Repeat POS‑01 with same email | `409 Conflict` | Error: “Email already exists”. |
| **NEG‑12** | Mass assignment (extra field) | `{ "name": "Jane", "email": "j@test.com", "age": 30, "role": "admin" }` | `400` or silently strip | The user must not be created with admin role. |

#### ❓ Why This Matters for a QA/SDET

Positive tests confirm that the API delivers business value – the feature works for legitimate users. Negative tests protect the system from crashing, leaking data, or creating security holes. They often uncover the most dangerous defects.

- In automation, you’ll group positive and negative test cases into the same suite, but sometimes run negative tests more frequently because they’re faster (e.g., a validation failure returns immediately without database writes).
- When designing test cases from an OpenAPI spec, you can derive negative tests from every field’s constraints (`minLength`, `maxLength`, `pattern`, `required`, `type`). Every constraint is a negative test opportunity.
- **The balance:** You shouldn’t write 100 negative tests for every positive one. Focus negative tests on security, boundary values, input validation, and error handling. Prioritise those that could cause the most damage.

**Explanation:**
- Positive API testing verifies that the API behaves correctly with valid, expected inputs, returning success codes and the right data.
- Negative API testing verifies that the API handles invalid, missing, or malicious inputs without crashing, leaking information, or accepting unauthorised data.
- Both are necessary: positive tests prove the system works; negative tests prove it’s robust.
- As a QA, I design positive tests from the happy paths in the API documentation, and negative tests from every field constraint, boundary condition, and security requirement.
- I automate both to provide fast, continuous feedback.

---

### 7.2 Applying EP & BVA to JSON Payloads

#### 🔍 Simple Analogy

Remember the roller coaster that only allows people between 120 cm and 200 cm tall. We used **Equivalence Partitioning (EP)** to group heights into “too short”, “valid”, and “too tall” groups, testing only one height from each. We used **Boundary Value Analysis (BVA)** to test exactly at the edges: 119 cm, 120 cm, 200 cm, 201 cm.

Now imagine the roller coaster also has a rule: you must be between 10 and 60 years old. We apply the same logic to the age field.

In an API, every field in the JSON payload (the request body) has rules just like height and age. We can apply EP and BVA to each numeric, string, or array field to design the minimum number of powerful test cases. This turns an infinite set of possible inputs into a handful of targeted tests.

#### 💼 Professional Context

When testing an API that accepts a JSON body, you don’t test every possible value for a field. You use EP and BVA to choose the values most likely to find bugs.

**How to apply EP to a JSON field:**
1. Identify the valid range or set of valid values.
2. Identify invalid ranges or values outside those rules.
3. Group all possible values into partitions that the API should treat the same.
4. Pick one representative value from each partition.

**How to apply BVA to a JSON field (if it’s numeric or has a length limit):**
1. For a range, test the exact boundary values.
2. Test just inside each boundary (boundary − 1 or boundary + 1).
3. Test just outside each boundary (boundary − 1 or boundary + 1 in the invalid direction).

**Applicable field types:**
- **Numbers:** age, price, quantity, page, limit.
- **Strings with length limits:** name (1–100 chars), password (8–50 chars).
- **Strings with pattern constraints:** email, phone, date.
- **Arrays:** roles (min 1 item, max 5 items).

#### 🧪 Real‑World Example – Create User API

**Endpoint:** `POST /users`
**Payload fields:**
- `name`: string, required, 1–100 characters.
- `email`: string, required, valid email format.
- `age`: integer, required, 18–120.
- `password`: string, required, 8–20 characters.
- `roles`: array of strings, optional, 0–3 items.

We’ll apply EP and BVA to these fields.

**Field: age (integer, 18–120)**
- **EP partitions:**
  - Invalid low: values < 18 (e.g., 10)
  - Valid: values 18 to 120 (e.g., 30)
  - Invalid high: values > 120 (e.g., 150)
- **BVA for lower boundary (18):**
  - 17 (just below, invalid)
  - 18 (exact boundary, valid)
  - 19 (just above, valid)
- **BVA for upper boundary (120):**
  - 119 (just below, valid)
  - 120 (exact boundary, valid)
  - 121 (just above, invalid)
- **Test data selection:** Instead of 120+ possible ones, we test 7 values (17, 18, 19, 119, 120, 121, 150) covering all boundaries and partitions.

**Field: name (string, 1–100 characters)**
- **BVA for boundaries (1 and 100):**
  - `""` (0 chars, empty) → `400 Bad Request`
  - `"A"` (1 char) → `201 Created`
  - `"AB"` (2 chars) → `201 Created`
  - string of 99 chars → `201 Created`
  - string of 100 chars → `201 Created`
  - string of 101 chars → `400 Bad Request`

**Field: roles (array, 0–3 items)**
- **BVA at upper boundary (3):**
  - Empty array `[]` → `201 Created` (optional)
  - Array with 2 items → `201 Created`
  - Array with 3 items → `201 Created`
  - Array with 4 items → `400 Bad Request`

**Field: email (valid email format)**
Emails don’t have a simple numeric range, but we partition by format:
- Valid format: `user@example.com`
- Invalid format (missing `@`): `userexample.com`
- Invalid format (no domain): `user@`
- Invalid format (empty): `""`

#### 🔗 Combining All Fields Into Test Cases

In practice, you don’t test each field’s boundaries in isolation forever; you create test data sets that combine valid values with one invalid field at a time, plus at least one “all valid” case and one “all fields boundary” case. 

| TC‑ID | name | email | age | password | roles | Expected Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BVA‑01** | `"A"` | `"a@b.com"` | 18 | `"12345678"` | `[]` | `201` |
| **BVA‑02** | (100 chars) | `"max@b.com"` | 120 | (20 chars) | `["a","b","c"]` | `201` |
| **BVA‑03** | `""` | `"a@b.com"` | 30 | `"12345678"` | `[]` | `400` |
| **BVA‑04** | `"Jane"` | `"noat"` | 30 | `"12345678"` | `[]` | `400` |
| **BVA‑05** | `"Jane"` | `"j@b.com"` | 17 | `"12345678"` | `[]` | `400` |
| **BVA‑06** | `"Jane"` | `"j@b.com"` | 121 | `"12345678"` | `[]` | `400` |
| **BVA‑07** | `"Jane"` | `"j@b.com"` | 30 | `"1234567"` (7 chars) | `[]` | `400` |
| **BVA‑08** | `"Jane"` | `"j@b.com"` | 30 | `"12345678"` | `["r1","r2","r3","r4"]` | `400` |

This covers positive boundaries (BVA‑01, BVA‑02) and negative boundaries (BVA‑03 to BVA‑08) in a single compact test suite.

#### ❓ Why This Matters for a QA/SDET

EP and BVA slash the number of test data combinations needed, making API testing efficient while hitting the most defect‑prone values.

- In **Postman**, you can set up data‑driven tests (CSV/JSON) with these exact values and run them in the Collection Runner.
- In **Playwright**, you can loop over an array of test data objects and run the same API call with different payloads, asserting the expected status code each time. This is called parameterised testing.
- These techniques directly connect your manual test design skills to API testing. You’re not just clicking around – you’re applying systematic, professional QA methods to JSON structures.

**Explanation:**
- Equivalence Partitioning and Boundary Value Analysis are powerful techniques for selecting API test data efficiently.
- EP divides input values into valid and invalid partitions; BVA targets the exact edges of those partitions where off‑by‑one errors hide.
- When applied to JSON payloads, I test numeric fields at boundaries, string length limits, and array size limits.
- Combined with positive/negative scenarios, EP and BVA form the backbone of my API test data strategy, whether I’m testing manually in Postman or writing parameterised automation in Playwright.

---

### 7.3 Testing Edge Cases (Nulls, Empty Strings, Missing Fields, Data Type Mismatches)

#### 🔍 Simple Analogy

Imagine you’re filling out a paper form to open a bank account.

- **Missing field** – You leave the “Date of Birth” box completely blank. The clerk says, “You must fill this in.”
- **Empty string** – You write nothing in the “Middle Name” box, but you still draw a line through it or hand in the form with that box visibly empty. The clerk might accept it (middle name is optional) or reject it if a value is required.
- **Null** – You literally cut the “Phone Number” section out of the paper form with scissors. That field doesn’t exist at all in what you submitted. It’s not blank; it’s completely absent.
- **Data type mismatch** – You write “next Tuesday” in the box that asks for your birth year. The clerk expected a number, not a phrase. The form is rejected.

In an API JSON payload, these four situations are different, and each can reveal a specific type of bug. A good API must handle all of them gracefully.

#### 💼 Professional Definitions

| Edge Case | Meaning in JSON | Example (field age) |
| :--- | :--- | :--- |
| **Missing field** | The key is completely absent from the JSON object. | `{ "name": "John" }` (no age key at all) |
| **Null value** | The key is present, but its value is `null`. | `{ "name": "John", "age": null }` |
| **Empty string** | The key is present, but its value is `""` (for string fields). | `{ "name": "", "age": 25 }` |
| **Data type mismatch** | The value is of the wrong JSON type (e.g., string instead of number, or boolean instead of string). | `{ "name": "John", "age": "twenty" }` |

**Why they are different (and why they must be tested separately):**
- A missing field and a null field are not the same. A well‑designed API may treat a missing optional field as “use default value”, but an explicit null might mean “clear this value”.
- An empty string is a string with zero length. It might pass a “required” check if the code only checks for the key’s presence, leading to a user with a blank name.
- Data type mismatches test the server’s input validation. A weak server might convert types silently (“5” → 5) or crash entirely. A robust server rejects them.

#### 🧪 Real‑World Example – Create User API

**Endpoint:** `POST /users`
**Required fields:** `name` (string, 1–100 chars), `email` (valid email), `age` (integer, 18–120).
**Optional field:** `phone` (string, 10–15 digits).

**Test Cases for Edge Cases**

| TC‑ID | Scenario | Request Body | Expected Status | Expected Behaviour |
| :--- | :--- | :--- | :--- | :--- |
| **EDGE‑01** | Missing required field `name` | `{ "email": "j@test.com", "age": 30 }` | `400` or `422` | Error message: “name is required”. |
| **EDGE‑02** | Null value for required field `name` | `{ "name": null, "email": "j@test.com", "age": 30 }` | `400 Bad Request` | Error message: “name must not be null” or similar. |
| **EDGE‑03** | Empty string for `name` | `{ "name": "", "email": "j@test.com", "age": 30 }` | `400 Bad Request` | Error message: “name must not be empty”. |
| **EDGE‑04** | Data type mismatch – `age` is string | `{ "name": "Jane", "email": "j@test.com", "age": "thirty" }` | `400 Bad Request` | Error message: “age must be a number”. |
| **EDGE‑05** | Data type mismatch – `age` is boolean | `{ "name": "Jane", "email": "j@test.com", "age": true }` | `400 Bad Request` | Error message: “age must be a number”. |
| **EDGE‑06** | Missing optional field `phone` | `{ "name": "Jane", "email": "j@test.com", "age": 30 }` | `201 Created` | User created; phone is absent or null in response. |
| **EDGE‑07** | Null for optional field `phone` | `{ "name": "Jane", "email": "j@test.com", "age": 30, "phone": null }` | `201` or `400` | Depends on API design. If optional, null may be fine; if API rejects explicit nulls, expect `400`. |
| **EDGE‑08** | Empty string for optional `phone` | `{ "name": "Jane", "email": "j@test.com", "age": 30, "phone": "" }` | `201` or `400` | Some APIs treat empty string as “not provided” and accept; others reject as invalid. |
| **EDGE‑09** | Missing all fields | `{ }` | `400 Bad Request` | Multiple error messages for all missing required fields, or one general message. |
| **EDGE‑10** | Array instead of object | `[ { "name": "Jane" } ]` | `400 Bad Request` | Error: “Expected object, received array”. |

#### ❓ Why This Matters for a QA/SDET

Developers often write code that checks `if (body.name)` but that check behaves differently for `undefined` (missing), `null`, and `""`. You must test all three.

- Ignoring these edge cases leads to “null pointer exception” crashes (`500 Internal Server Error`) or users being created with blank names.
- In automation (Postman/Playwright), you can parameterize these payloads and run them as data‑driven tests, ensuring every edge case is verified on every release.
- This is directly connected to what you learned in manual testing: positive, negative, and boundary value analysis. Now you’re applying it to API payloads.

**Explanation:**
- When testing API JSON payloads, I don’t just test correct values. I actively test edge cases: missing required fields, explicit null values, empty strings, and data type mismatches.
- These are distinct conditions that can each trigger different bugs—crashes, silent failures, or incorrect data.
- I design test cases to verify that the API returns clear 400/422 errors for invalid inputs and handles optional fields correctly.
- These edge case checks are standard in every test suite I build, whether manual in Postman or automated in Playwright.

---

## 8. Manual API Testing with Postman

> **Section Summary:** This section covers manual API testing using Postman, including collection setup, environment variables, importing requests, and writing automated test scripts to chain requests and run data-driven tests.

---

### 8.1 Setting up Postman Collections
*(Content to be added)*

---

### 8.2 Using Environment and Global Variables
*(Content to be added)*

---

### 8.3 Testing a Public REST API
*(Content to be added)*

---

### 8.4 cURL & DevTools: Importing Requests from the Browser
*(Content to be added)*

---

### 8.5 Using DevTools for API Testing (Filtering, Inspecting, and Importing)
*(Content to be added)*

---

### 8.6 Writing Test Scripts in Postman (Chai Assertions)

#### 🔍 Simple Analogy
Up until now, you’ve been cooking a dish (sending a request) and then looking at the plate (the response) with your own eyes to see if it looks right. That’s manual inspection.

Now, imagine you build a tiny robot judge that sits beside you. You hand the robot a checklist:
- “Check that the plate is not cracked (status code is 200).”
- “Check that the steak is medium-rare (the response body contains the correct data).”
- “Check that the meal arrived in under 3 seconds (response time is acceptable).”

Every time you cook, the robot instantly checks everything and raises a flag if something is wrong. In Postman, that robot judge is called a **test script**, and the checklist is written using a language called **Chai (Assertions)**.

#### 💼 Professional Context
Until now, every time you clicked Send in Postman, you had to read the response yourself to decide if it passed or failed. That’s manual testing.
But Postman has a built‑in JavaScript sandbox where you can write a few lines of code that run automatically after the response arrives. These are called test scripts.

Postman uses a popular JavaScript library called **Chai** for assertions. An assertion is simply a statement that checks if something is true. If the assertion is true, the test passes. If it’s false, the test fails and Postman shows a red cross with the reason.

What you can check with test scripts:
- **Status code:** Is it 200, 201, 404?
- **Response body:** Does it contain a specific field, type, or value?
- **Response headers:** Is the `Content-Type` exactly `application/json`?
- **Response time:** Is it under 500 milliseconds?
- **Custom logic:** You can write any JavaScript logic to validate responses.

The result is that your Postman collection turns from a manual request sender into an automated test suite. You can later run the entire suite with the Collection Runner and get a full pass/fail report without looking at a single response body.

#### 🧱 The Basic Structure of a Postman Test
Open any request in Postman and click the **Scripts** tab (next to Params, Auth, Headers, etc.). Then choose **Post-response**.
You write your tests inside a `pm.test()` function:

```javascript
pm.test("A short description of what you are checking", function () {
    // Your Chai assertion goes here
});
```

Example checking status code 200:
```javascript
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});
```

Breakdown:
- `pm.test()`: Creates a test case.
- `"Status code is 200 OK"`: The name of the test (displayed in the test results tab).
- `pm.response.to.have.status(200);`: The actual assertion. This is a Chai method that Postman provides for the response.

#### 🧪 Common Assertions You Will Use Every Day
The following table highlights the most common assertions used in API validation:

| What you want to check | Code snippet |
| :--- | :--- |
| Status code is exactly 200 | `pm.response.to.have.status(200);` |
| Status code is not 500 | `pm.response.to.not.have.status(500);` |
| Response body contains a field called id | `pm.expect(pm.response.json()).to.have.property('id');` |
| Response body has title equal to "My Test" | `pm.expect(pm.response.json().title).to.eql("My Test");` |
| Response is returned within 500ms | `pm.expect(pm.response.responseTime).to.be.below(500);` |
| Header Content-Type is application/json | `pm.response.to.have.header("Content-Type", "application/json; charset=utf-8");` |
| Response body is valid, parsable JSON | `pm.expect(function(){ JSON.parse(responseBody); }).to.not.throw();` |

> [!NOTE]
> `pm.expect` is a more flexible Chai assertion style. Both `pm.response.to.have...` and `pm.expect(...)` are correct; you’ll use whichever fits best.

#### 🛠️ Step‑by‑Step: Create a New Request and Write Test Scripts
We’ll use the JSONPlaceholder API and the environment you already have (JSONPlaceholder Dev with `baseUrl`).

1. **Create a new request:**
   - In Postman, open your “JSONPlaceholder Tests” collection.
   - Click the “…” next to the collection name $\rightarrow$ **Add Request**.
   - Name the request: `Get a single post (with tests)`.
   - Set the HTTP method to **GET**.
   - Set the URL to: `{{baseUrl}}/posts/1`
   - Click **Save**.
   - Send the request once without any scripts to see the raw response (`200 OK` and a JSON object representing post #1).

2. **Open the Test Script area:**
   - In the request pane, click the **Scripts** tab (next to Params, Auth, Headers, Body).
   - Under **Post-response** is where we’ll write our tests (runs after the response arrives).

3. **Write your first test (Status Code):**
   - Clear everything in the Post-response editor, then paste:
     ```javascript
     pm.test("Status code is 200 OK", function () {
         pm.response.to.have.status(200);
     });
     ```
   - Click **Send** again.
   - Look at the bottom in the **Test Results** tab. You should see:
     ```text
     PASS  Status code is 200 OK
     ```

4. **Add a test for valid JSON structure:**
   - Add this line after the first test:
     ```javascript
     pm.test("Response body is valid JSON", function () {
         pm.expect(function () {
             JSON.parse(responseBody);
         }).to.not.throw();
     });
     ```
   - *Explanation:* `responseBody` is a global variable containing raw response text. `JSON.parse` attempts to convert it to an object; if it fails, it throws an error. `to.not.throw()` verifies it doesn't crash.

5. **Add a test for field presence (`id`):**
   - Add the following test:
     ```javascript
     pm.test("Response has an 'id' property", function () {
         const jsonData = pm.response.json();
         pm.expect(jsonData).to.have.property('id');
     });
     ```
   - *Explanation:* `pm.response.json()` converts the response body into an object. We then check if the key `id` exists, regardless of its value.

6. **Add a test for specific field value (`userId`):**
   - Add the following test:
     ```javascript
     pm.test("The post belongs to userId 1", function () {
         const jsonData = pm.response.json();
         pm.expect(jsonData.userId).to.eql(1);
     });
     ```
   - *Explanation:* We access the `userId` field and use `.to.eql(1)` to check for deep equality (works for numbers, strings, arrays, etc.).

7. **Add a test for response time:**
   - Add the following test:
     ```javascript
     pm.test("Response time is less than 1000ms", function () {
         pm.expect(pm.response.responseTime).to.be.below(1000);
     });
     ```
   - *Explanation:* `pm.response.responseTime` returns latency in milliseconds. `.to.be.below(1000)` checks that it is under 1 second.

8. **Add a test for the Content-Type header:**
   - Add the following test:
     ```javascript
     pm.test("Content-Type header is application/json", function () {
         pm.response.to.have.header("Content-Type", "application/json; charset=utf-8");
     });
     ```

9. **Deliberately break a test to see a failure:**
   - Temporarily change the `userId` expected value to `5` instead of `1`.
   - Click **Send**. The test “The post belongs to userId 1” will fail.
   - You will see a red cross and the failure explanation:
     ```text
     FAIL  The post belongs to userId 1 | AssertionError: expected 1 to deeply equal 5
     ```
   - Revert the expected value back to `1` so the tests pass.

10. **Your final complete script:**
    ```javascript
    pm.test("Status code is 200 OK", function () {
        pm.response.to.have.status(200);
    });

    pm.test("Response body is valid JSON", function () {
        pm.expect(function () {
            JSON.parse(responseBody);
        }).to.not.throw();
    });

    pm.test("Response has an 'id' property", function () {
        const jsonData = pm.response.json();
        pm.expect(jsonData).to.have.property('id');
    });

    pm.test("The post belongs to userId 1", function () {
        const jsonData = pm.response.json();
        pm.expect(jsonData.userId).to.eql(1);
    });

    pm.test("Response time is less than 1000ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(1000);
    });

    pm.test("Content-Type header is application/json", function () {
        pm.response.to.have.header("Content-Type", "application/json; charset=utf-8");
    });
    ```

#### ❓ Why This Matters for a QA/SDET
- **Immediate feedback:** You no longer need to visually inspect responses; the assertions do it instantly and reliably.
- **Regression testing:** When you run these collections later, you instantly know if a change broke the endpoint.
- **Automation readiness:** These same assertion principles and libraries form the backbone of Playwright and CI/CD testing frameworks.

#### ✅ Quick Practice (5 minutes)
1. Open your “Get all posts” request.
2. Write a test script under Scripts $\rightarrow$ Post-response that:
   - Asserts status `200 OK`.
   - Asserts that the response body is an array.
   - Asserts that the array length is exactly 100.
3. Run the request and verify all tests pass.
4. Temporarily change the URL to `/posts/99999999` and verify that the tests fail as expected.

**Explanation:**
- **Automated Verification:** Writing post-response scripts in Postman automates API testing by executing assertions in a JavaScript sandbox immediately after a response is received.
- **Chai Assertion Library:** Postman provides the Chai library (`pm.expect` or `pm.response.to.have`) to validate response attributes like status codes, body structures, specific values, latency, and headers.
- **Visual Failure Reporting:** Failed assertions generate clear error trace logs in the Test Results tab, making failures easy to diagnose.
- **Evolvable Test Suites:** Creating structured test scripts turns a list of manual requests into an automated regression suite ready for CI/CD integration.

---

### 8.7 API Chaining: Passing Data Between Requests

#### 🔍 Simple Analogy
Imagine a relay race with two runners. The first runner completes their lap and passes a baton to the second runner. The second runner can only start once they have received that baton.

In API Chaining:
- **Runner 1** = Create post (chain start)
- **Runner 2** = Get chained post (chain end)
- **The Baton** = The `postId` value returned by Runner 1 and needed by Runner 2.

Instead of copying and pasting this baton by hand every time, you train Postman to extract the ID from the first response and automatically insert it into the next request.

#### 💼 Professional Context
In real-world testing, you rarely test endpoints in complete isolation. User scenarios usually span multiple steps:
1. **Create a resource** (e.g., POST `/posts` $\rightarrow$ returns ID `101`).
2. **Read, update, or delete** that resource using its ID (e.g., GET `/posts/101`).

Manually copying and pasting IDs between requests is slow and error-prone. Postman automates this hand-off using environment variables to share state between requests.

##### The Golden Rule of Chaining
> **Request 1 saves a value $\rightarrow$ Request 2 uses that value**

##### Where Each Piece Lives in Postman

| Component | Location & Function |
| :--- | :--- |
| **Saving a value** | **Test script** tab of Request 1 — runs automatically after response arrives. |
| **The shared locker** | **Environment variables** (e.g., your `JSONPlaceholder Dev` environment). |
| **Using the value** | **URL / headers / body** of Request 2 using double curly braces: `{{variableName}}`. |

#### 🧪 Real-World Example & Step-by-Step
We’ll chain two requests: POST a new post $\rightarrow$ get back the ID $\rightarrow$ GET that exact post.

1. **Create the first request ("Create a new post"):**
   - Add a new request in your collection.
   - Name it: `Create a new post (chaining)`.
   - Method: **POST**.
   - URL: `{{baseUrl}}/posts`
   - Body tab $\rightarrow$ **raw** $\rightarrow$ **JSON**:
     ```json
     {
         "title": "API Chaining Test",
         "body": "This post was created to test chaining",
         "userId": 1
     }
     ```
   - Click **Send** once to verify it returns `201 Created` with an `id` (usually `101`).

2. **Add a test script to capture the ID:**
   - Under the **Scripts** tab $\rightarrow$ **Post-response** of the POST request, add:
     ```javascript
     // Capture the new post ID from the response
     const jsonData = pm.response.json();
     const newPostId = jsonData.id;

     // Save it into an environment variable
     pm.environment.set("postId", newPostId);

     // Print it to the console for debugging
     console.log("Stored postId:", newPostId);
     ```
   - Click **Send**.
   - Check the **Environment quick look** (eye icon in the top right). You should see `postId` set with the value `101` (or the ID returned).

3. **Create the second request ("Get the newly created post"):**
   - Add another request to the collection.
   - Name it: `Get the newly created post (chained)`.
   - Method: **GET**.
   - URL: `{{baseUrl}}/posts/{{postId}}`
   - Click **Send**. Postman automatically opens the environment locker, retrieves `postId`, and swaps `{{postId}}` for its value. The request URL resolves to `.../posts/101`.

4. **Add assertions to verify the chained data:**
   - In the GET request’s **Scripts** $\rightarrow$ **Post-response** tab, add:
     ```javascript
     pm.test("Status code is 200 OK", function () {
         pm.response.to.have.status(200);
     });

     pm.test("Fetched post matches the expected title", function () {
         const jsonData = pm.response.json();
         pm.expect(jsonData.title).to.eql("API Chaining Test");
     });
     ```

#### 🔁 Automating the Full Chain with the Collection Runner
To run the chain automatically without clicking each request:
1. Click on your collection in the sidebar $\rightarrow$ click **Run**.
2. Select the two requests (ensuring the POST request is ordered before the GET request).
3. Click **Run [Collection Name]**. The runner executes the POST request, extracts and stores the ID, and then executes the GET request seamlessly.

#### ❓ Why This Matters for a QA/SDET
- **Simulates user journeys:** Real user behavior involves sequential API calls, and chaining lets you mock these flows.
- **Eliminates manual effort:** Automating data transfer saves massive regression testing time.
- **Prepares for code automation:** This exact pattern (extracting values from response bodies and passing them to next calls) is used programmatically in Playwright API tests.

**Explanation:**
- **Dynamic Handoff:** API chaining passes data (such as IDs or auth tokens) from the response of one request to the input parameters of the next.
- **State Management:** This is done by writing a post-response script to parse the JSON response (`pm.response.json()`) and saving it to an environment variable (`pm.environment.set("key", value)`).
- **Variable Injection:** The subsequent request accesses the shared locker using double curly braces (e.g., `{{key}}`) in the URL, headers, or body.
- **Workflow Automation:** Sequence runner runs the chained requests in order, validating complex workflows automatically and mirroring real-world integration scenarios.

---

### 8.8 Data-Driven Testing: CSV/JSON with Collection Runner

#### 🔍 Simple Analogy
Imagine you are testing a new coffee machine. You want to verify that it prepares the correct drink for any order combination.
Instead of making one order, tasting it, changing the selections, and repeating, you write a list of orders on a sheet of paper:
- Latte, Large, Oat Milk
- Espresso, Small, Whole Milk
- Cappuccino, Medium, Almond Milk

You feed this list to the machine and say, “Process each row on this list automatically and show me the results.” The machine runs through the list, preparing each drink and logging the outcome.

In Postman, that sheet of paper is a **CSV or JSON data file**, the coffee machine is the **Collection Runner**, and the list of orders is your **test data**.

#### 💼 Professional Context
In API testing, you often need to validate the same endpoint against a variety of inputs (positive inputs, invalid inputs, boundary values, etc.). Doing this manually by duplicating requests is inefficient.

Postman’s **Data-Driven Testing (DDT)** allows you to execute a request repeatedly, replacing parameters with values loaded from a external CSV or JSON file.
- The request uses `{{variableName}}` placeholders.
- The placeholders must exactly match the column headers (in CSV) or object keys (in JSON) of the data file.
- The Collection Runner executes one iteration per row/object in the data file.

This allows you to implement Equivalence Partitioning (EP) and Boundary Value Analysis (BVA) systematically and at scale.

#### 📄 Data File Formats & Structures
Before setting up the request, let's look at how the data files are structured:

````carousel
CSV Format (postData.csv)
```text
title,body,userId
"Valid Post", "This is a valid body", 1
"", "Empty title test", 2
"Special chars !@#", "Body with symbols", 1
"Boundary length title", "Body", 5
```
<!-- slide -->
JSON Format (postData.json)
```json
[
    {
        "title": "Valid Post",
        "body": "This is a valid body",
        "userId": 1
    },
    {
        "title": "",
        "body": "Empty title test",
        "userId": 2
    },
    {
        "title": "Special chars !@#",
        "body": "Body with symbols",
        "userId": 1
    },
    {
        "title": "Boundary length title",
        "body": "Body",
        "userId": 5
    }
]
```
````

#### 🛠️ Step-by-Step: Data-Driven Test with JSONPlaceholder
We will test the `POST /posts` endpoint using multiple iterations of test data.

1. **Prepare the request:**
   - Open your creation request (`POST {{baseUrl}}/posts`).
   - In the **Body** tab, replace the hardcoded values with variables:
     ```json
     {
         "title": "{{title}}",
         "body": "{{body}}",
         "userId": {{userId}}
     }
     ```
     *(Note: `{{userId}}` is not wrapped in quotes because the API expects a number).*

2. **Add dynamic assertions in Scripts:**
   - Under **Scripts** $\rightarrow$ **Post-response**, add:
     ```javascript
     pm.test("Status is 201 Created", function () {
         pm.response.to.have.status(201);
     });

     pm.test("Response title matches sent title", function () {
         var jsonData = pm.response.json();
         // pm.iterationData.get("key") gets the value from the current row
         pm.expect(jsonData.title).to.eql(pm.iterationData.get("title"));
     });
     ```

3. **Create and save the data file:**
   - Open a text editor and copy either the CSV or JSON data from the **Data File Formats** carousel above.
   - Save the file on your computer as `postData.csv` or `postData.json`.

4. **Run the Collection Runner:**
   - Click on your collection name in the sidebar $\rightarrow$ click **Run**.
   - In the Runner configurations:
     - Select only the `POST` request to avoid running other requests repeatedly.
     - Under **Data**, click **Select File** $\rightarrow$ upload your `postData` file.
     - The "Iterations" count will automatically update to `4` (since the file has 4 data rows).
     - Select the correct data file type (CSV or JSON) if not auto-detected.
     - Click **Run [Collection Name]**.

5. **Review the results:**
   - The Runner executes the request 4 times.
   - In the results view, you’ll see the test passes/failures for each iteration. For instance, if an empty title is sent, you can verify if the API echoed back the empty string correctly.

#### ❓ Why This Matters for a QA/SDET
- **High test coverage:** One request can be tested against dozens of edge cases and boundary values in seconds.
- **Repeatability:** The data file can be easily expanded with new scenarios without editing the Postman requests.
- **Newman Integration:** You can export the collection and run it in a CI/CD pipeline using Newman, feeding in different data files for different environments.

**Explanation:**
- **Data-Driven Automation:** Data-Driven testing runs a single request multiple times, feeding in different inputs from an external data source (CSV or JSON).
- **Automatic Parameter Mapping:** Postman maps file column headers or JSON keys to URL/body variables matching `{{variableName}}`.
- **Iteration Data Access:** Test scripts access active row data using `pm.iterationData.get("variableName")` to perform dynamic, row-specific assertions.
- **Efficient Scalability:** DDT enables QA engineers to execute comprehensive EP/BVA matrices without manually copying requests or bloating the collection size.
