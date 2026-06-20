# Module 4: API Testing Fundamentals & Postman

---

## 📋 Table of Contents

1. [Introduction to Web Services & APIs](#1-introduction-to-web-services--apis)
   - [1.1 What is an API?](#11-what-is-an-api)
   - [1.2 HTTP Protocol & REST Principles](#12-http-protocol--rest-principles)
   - [1.3 Deep Dive: REST API vs Plain HTTP](#13-deep-dive-rest-api-vs-plain-http)
2. [Types of APIs by Architectural Design & Protocol](#2-types-of-apis-by-architectural-design--protocol)
   - [2.1 Data Formats (XML, JSON, Protobuf)](#21-data-formats-xml-json-protobuf)
   - [2.2 API Architectures (SOAP, REST, GraphQL, gRPC, WebSocket, Webhooks)](#22-api-architectures)
3. [Types of APIs by Accessibility Scope](#3-types-of-apis-by-accessibility-scope)
4. [Understanding API Documentation (OpenAPI/Swagger)](#4-understanding-api-documentation-openapiswagger)

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

### 1. Internal API

#### 🔍 Analogy
The plumbing inside a hotel. Guests never see it, but it connects the boiler, the kitchen sinks, and every bathroom. Without it, the hotel stops working.

#### 💼 Detail
- Runs entirely behind the company firewall or within a private network (VPC).
- Often uses technologies like gRPC, REST, or message queues (RabbitMQ, Kafka).
- Not documented for the outside world; documentation is internal.
- As a QA, you test these by being inside the network or using VPN, often with mock services to simulate dependent systems. You'll focus on **integration testing** and **contract testing** (e.g., using Pact) between services.

---

### 2. Partner API

#### 🔍 Analogy
A hotel giving a trusted tour operator a special keycard that opens only the luggage storage room and the business lounge. The tour operator can't go into guest rooms or the accounting department.

#### 💼 Detail
- Exposed over the internet but heavily secured.
- Requires onboarding: the partner gets a unique API key, IP whitelisting, or a client certificate.
- Often accompanied by a legal agreement or SLA (Service Level Agreement).
- As a QA, you test both the API functionality and the onboarding process: can a partner call the API with their credentials? Are they correctly restricted from accessing other endpoints? You also test that rate limits are enforced per partner.

---

### 3. Public API

#### 🔍 Analogy
A hotel's front desk, lobby, and restaurant — open to everyone. Anyone can walk in, but there are rules: no shoes, no running, and the swimming pool is for guests only.

#### 💼 Detail
- The most exposed API type. Can be used by anyone who signs up for an API key.
- Must be robust, well-documented (OpenAPI/Swagger), and heavily monitored.
- Requires authentication (API key, OAuth 2.0) to identify the caller.
- Has rate limiting to prevent abuse and cost overruns.
- As a QA, you test thoroughly for security: SQL injection, excessive data exposure, authentication bypass. You also test with invalid or missing keys, expired tokens, and high-volume requests to validate rate limiting.

---

### 4. Composite API

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
