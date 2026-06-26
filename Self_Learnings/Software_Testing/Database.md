# Table of Contents
- [Introduction to Databases for QA](#introduction-to-databases-for-qa)
  - [1.1 What is a Database? Why does a QA need SQL?](#11-what-is-a-database-why-does-a-qa-need-sql)
  - [1.2 Types of Databases (Relational vs. Non-Relational) and Common Systems](#12-types-of-databases-relational-vs-non-relational-and-common-systems)
  - [1.3 Why SQLite is perfect for learning and prototyping](#13-why-sqlite-is-perfect-for-learning-and-prototyping)
- [Getting Started with SQLite](#getting-started-with-sqlite)
  - [2.1 Setting up SQLite and a practice database](#21-setting-up-sqlite-and-a-practice-database)
  - [2.2 Basic data types and table creation (CREATE TABLE, DROP TABLE)](#22-basic-data-types-and-table-creation-create-table-drop-table)
  - [2.3 Constraints (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY)](#23-constraints-not-null-unique-primary-key-foreign-key)
- [Reading Data (SELECT Queries)](#reading-data-select-queries)
  - [3.1 SELECT and FROM](#31-select-and-from)
  - [3.2 WHERE clause with AND, OR, NOT](#32-where-clause-with-and-or-not)
  - [3.3 IN, BETWEEN, LIKE, and wildcards](#33-in-between-like-and-wildcards)
  - [3.4 NULL Handling (IS NULL, IS NOT NULL)](#34-null-handling-is-null-is-not-null)

---

# Introduction to Databases for QA

## 1.1 What is a Database? Why does a QA need SQL?
### 🔍 Simple Analogy
- Think of a huge, smart warehouse that stores every item a shop sells.
- The website or mobile app you test is the shiny shop front where customers browse.
- The API is the waiter that takes the customer’s order to the back.
- The database is the actual warehouse (the kitchen pantry) where all the items, orders, and customer records are kept in perfectly labelled boxes.
- Now, if a customer complains, “I ordered a blue T‑shirt but received a red one”, you have two choices:
  - Just trust the shop display and the waiter’s notepad – maybe the shop made a mistake, maybe the waiter wrote it down wrong.
  - Walk into the warehouse yourself, open the box, and check the colour directly – you find the actual T‑shirt that was shipped. That’s the source of truth.
- SQL (Structured Query Language) is the master key to that warehouse. It lets you open the boxes, count items, check labels, and even change things safely, so you can find out exactly what happened without relying on the app’s UI or API.

### 💼 Professional Context
- A database is an organised collection of structured data, stored and managed electronically. It’s where every user account, every order, every payment, and every log entry lives permanently.
- There are two main families:
  - **Relational Databases (RDBMS)** – data is stored in tables (like Excel sheets) with rows and columns, and tables are linked together. Examples: MySQL, PostgreSQL, SQLite, Oracle, SQL Server.
  - **Non‑Relational Databases (NoSQL)** – data is stored differently (documents, key‑value pairs, graphs). Examples: MongoDB, Redis, Cassandra.
- As a QA/SDET, you will almost always work with relational databases, and SQL is the language used to communicate with them.

### ❓ Why Does a QA Need SQL?
Here are five real‑world tasks you cannot do without SQL:
| Task | Description |
|---|---|
| Verify data persistence after an API call | You send a POST request to create a user. The API returns 201 Created. But was the user actually stored in the database? Run a SELECT query to check if the row exists. |
| Find the root cause of a bug | A user complains, “My profile name keeps resetting to null.” You can query the database to see what’s actually stored, even if the UI looks fine. You might discover that the UPDATE operation never changed the column. |
| Prepare test data | Instead of creating a hundred users through the UI or API (which is slow), you can write an INSERT script to populate the database instantly with the exact test data you need, including edge cases. |
| Validate calculations | The dashboard shows “Total Revenue: ₹45,000”. Is that correct? You can write a SELECT SUM(amount) FROM orders WHERE ... and verify the number independently. If it’s wrong, you’ve found a bug. |
| Test data integrity and constraints | A system must ensure that every order belongs to a valid user. Using SQL, you can try to insert an order with a non‑existent user ID and verify that the database rejects it (foreign key constraint). That’s database‑level testing. |

- SQL is the ultimate truth serum. The UI can lie, the API can hide errors, but the database will show you exactly what is stored.

### 🧪 Real‑World Example – E‑Commerce Login
- Let’s connect it to the login tests you already know.
- A user registers with email john@example.com via the API.
- You run a SQL query:
```sql
SELECT email, is_active FROM users WHERE email = 'john@example.com';
```
- If the row shows `is_active = 0` when it should be `1`, you’ve caught a bug that neither the API response nor the UI would have shown.
- As an SDET, you’ll often use SQL inside your automation scripts (via Playwright’s DB connection or a separate SQL library) to do this check automatically – but you must first understand the queries manually.

### 📝 Explanation
- “A database is the permanent, structured storage for an application’s data. As a QA, I use SQL to independently verify that the backend has stored, updated, or deleted data correctly. This allows me to test beyond the UI and API, directly confirming data persistence and integrity. I can also use SQL to create test data, validate calculations, and debug issues by inspecting the true state of the application. SQL is an essential tool for any tester who wants to go beyond surface‑level verification.”

---

## 1.2 Types of Databases (Relational vs. Non-Relational) and Common Systems
### 🔍 Simple Analogy
- Imagine two different ways to store your belongings:
| Database Type | Analogy |
|---|---|
| **Relational Database** | A set of filing cabinets with labelled folders. Each folder (table) has a fixed structure: name, date, amount. Folders are linked by IDs (like a customer ID). Everything is neat, organised, and you always know exactly where to find what. This is great for bank records, orders, user accounts – anything that needs strict rules and relationships. |
| **Non‑Relational Database (NoSQL)** | A big, flexible storage room with boxes, sticky notes, and whiteboards. Some boxes hold documents (like JSON), some hold simple key‑value pairs (like a dictionary), others hold graphs. There are no fixed forms. It’s super fast and flexible, perfect for real‑time chat messages, product recommendations, or IoT sensor data. |

### 💼 Professional Context
- Databases are broadly classified into two types based on how they store data:
  - **Relational (SQL)** – Data is stored in tables with rows and columns. Tables can be related using primary and foreign keys. They use SQL for querying. They enforce ACID (Atomicity, Consistency, Isolation, Durability) properties for reliable transactions.
  - **Non‑Relational (NoSQL)** – Data is stored in flexible formats: documents (JSON), key‑value pairs, wide‑column stores, or graphs. They do not require a fixed schema. They are designed for scalability, speed, and handling unstructured data.
- As a QA/SDET, you will primarily work with relational databases, but you may encounter NoSQL for logging, caching, or specific microservices.

### 📊 Common Relational Database Systems
| System | Notes |
|---|---|
| **SQLite** | Lightweight, file‑based, zero‑configuration. Embedded inside many applications. |
| **MySQL** | Open‑source, very popular for web applications (often paired with PHP). |
| **PostgreSQL** | Open‑source, powerful, supports advanced features like JSON queries. Favoured for complex applications. |
| **Oracle Database** | Enterprise‑grade, expensive, used in large corporations and banks. |
| **Microsoft SQL Server** | Microsoft’s enterprise database, integrates well with .NET ecosystems. |

### 📊 Common Non‑Relational Database Systems
| System | Type | Notes |
|---|---|---|
| **MongoDB** | Document store | Stores JSON‑like documents. Very popular for flexible, fast‑changing data. |
| **Redis** | Key‑value store | In‑memory data structure store, used for caching, session management, and real‑time leaderboards. |
| **Cassandra** | Wide‑column store | Distributed and highly scalable, used for huge amounts of data across many servers. |
| **Neo4j** | Graph database | Data stored as nodes and relationships. Ideal for social networks or recommendation engines. |

### ❓ Why a QA/SDET Should Know the Difference
- You'll write SQL for relational databases daily. Understanding the schema (tables, relationships, constraints) helps you design better test cases.
- You might test APIs that use MongoDB for storage. Knowing it's document‑based means you can query it differently and look for JSON structures, not rows.
- Some test environments use SQLite for local testing and PostgreSQL for production. You must know they are both relational but may behave slightly differently on complex queries.
- In a microservices architecture, different services might use different databases. Your testing strategy adapts accordingly.

### 📝 Explanation 
- A relational database organises data into structured tables with defined columns and relationships, using SQL for all operations. It ensures strong consistency and is ideal for transactional applications like banking, e‑commerce, and user management.
- A non‑relational (NoSQL) database stores data in flexible formats (documents, key‑value, graphs) without a fixed schema, allowing for high speed and scalability with unstructured or semi‑structured data.
- Common relational systems include SQLite (lightweight, embedded), MySQL (web apps), PostgreSQL (advanced features), Oracle (enterprise), and SQL Server (Microsoft stack).
- Common NoSQL systems include MongoDB (documents), Redis (caching), Cassandra (distributed), and Neo4j (graphs).
- As a QA, you’ll typically query relational databases to verify data accuracy, but you should recognise NoSQL when you encounter it and adapt your validation approach accordingly.

---

## 1.3 Why SQLite is perfect for learning and prototyping
### 🔍 Simple Analogy
- Imagine you want to practice cooking, but you don’t have a full restaurant kitchen. Instead, you buy a small, portable electric stove. You plug it in, and it works instantly. No gas lines, no heavy equipment. It does everything you need for learning: boil, fry, simmer. And when you’re done, you can pack it away in a drawer.
- SQLite is that portable stove for databases. You don’t need to install a huge server, configure ports, or create user accounts. It’s just a single file on your computer. You can create tables, insert data, run queries, and even delete the whole database by deleting the file. It’s the fastest way to learn SQL without any setup headache.

### 💼 Professional Context
- SQLite is a self‑contained, serverless, zero‑configuration database engine. Unlike MySQL or PostgreSQL, which require a separate server process running and listening for connections, SQLite reads and writes directly to a single file on disk. It’s embedded inside thousands of applications (mobile apps, browsers, desktop software) and is the most widely deployed database in the world.
- For a QA or SDET, SQLite is the perfect learning tool because:
  - There is no installation wizard or server to manage. You download one small tool or use an online SQLite viewer and start immediately.
  - The entire database is a single file. You can share it, back it up, or reset your practice by simply copying or deleting the file.
  - SQLite understands standard SQL. The SELECT, INSERT, UPDATE, DELETE, JOIN, and aggregation queries you write here work almost identically on MySQL, PostgreSQL, and other systems.
  - Many test automation frameworks use SQLite as a lightweight local store for test data or as a mock database during integration tests.
- The goal isn’t to become an SQLite expert. The goal is to learn the SQL language on a frictionless platform and then transfer that knowledge anywhere.

### 📝 Explanation
- SQLite is a database engine that stores everything in a single file, requiring no server or configuration.
- It’s ideal for learning because it’s instant, portable, and supports standard SQL that transfers to MySQL, PostgreSQL, and other databases.
- In test automation, SQLite is often used as an embedded database for local testing, mocking, or storing test results.
- For this module, we’ll use SQLite to practice every SQL concept hands‑on, so you gain real query‑writing skills without any complex setup.

---

# Getting Started with SQLite

## 2.1 Setting up SQLite and a practice database
### 🔍 Simple Analogy
- You want to learn accounting. Instead of buying a real bank's computer system, you get a blank pocket ledger from the stationery store.
- The ledger has empty columns: Date, Description, Amount.
- You can write row after row of made‑up transactions to practice.
- You can erase a whole page and start over if you mess up.
- The entire ledger is just one small book — you can carry it anywhere.
- That pocket ledger is exactly what we're building now with SQLite: a small, self‑contained database file that lives on your computer (or in the browser). It needs no server, no internet, no password. It's our private practice space where mistakes are completely free.

### 💼 Professional Context
- In a real company, the application stores data on powerful servers like MySQL or PostgreSQL. As a QA, you'll query those databases to verify data. But during learning, you don't need a big server. You use SQLite — a tiny, zero‑configuration database that understands the same SQL language. Every SELECT, INSERT, JOIN you write here works identically on those production systems.
- Our goal now: create two tables that mimic a small online shop — users and orders — and fill them with a few sample rows. This will be our sandbox for every single SQL topic later.

### 🛠️ Creating the Practice Database (Run Once)
- We'll use sqliteonline.com since it requires no install.
- Open the site and make sure the engine at the top is set to SQLite. Then, in the big central Code Editor, paste the following script and click the green Run button.
```sql
-- Create the users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    age INTEGER,
    city TEXT
);

-- Create the orders table
CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    product TEXT NOT NULL,
    amount REAL NOT NULL,
    order_date TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample users
INSERT INTO users (name, email, age, city) VALUES
('Alice', 'alice@mail.com', 30, 'New York'),
('Bob', 'bob@mail.com', 25, 'London'),
('Charlie', 'charlie@mail.com', 35, 'Paris');

-- Insert sample orders
INSERT INTO orders (user_id, product, amount, order_date) VALUES
(1, 'Laptop', 1200.00, '2026-06-01'),
(1, 'Mouse', 25.50, '2026-06-03'),
(2, 'Keyboard', 75.00, '2026-06-02'),
(3, 'Monitor', 300.00, '2026-06-04');
```
- Once you run it, the database is ready. You can see the tables appear in the left sidebar under main → Tables.

### 🧪 Verify It's Working
- Open a new tab (click the + icon) and type:
```sql
SELECT * FROM users;
```
- Run it. You should see Alice, Bob, and Charlie.
- Now try:
```sql
SELECT * FROM orders;
```
- You'll see the four orders. Your pocket ledger is now filled with test data.

---

## 2.2 Basic data types and table creation (CREATE TABLE, DROP TABLE)
### 🔍 Simple Analogy
- Imagine you're the manager of a warehouse. Before you can store any goods, you need to decide:
  - What kind of shelves will you build? (CREATE TABLE)
  - What labels go on each column? (column names)
  - What type of item can be placed in each column? (data type – only numbers, only text, etc.)
  - If you no longer need a shelf, how do you dismantle it completely? (DROP TABLE)
- That's exactly what we're learning now.

### 💼 Professional Context
- In SQL, a table is a grid of rows and columns. When you create a table, you must specify for each column:
  - Its name (e.g., name, age, email).
  - Its data type – what kind of data it can store.
  - Any rules (constraints) – we'll cover those in 2.3.
- The most common SQLite data types you'll use as a QA:

| Data Type | Meaning | Example values |
|---|---|---|
| **INTEGER** | Whole number | 30, 1, 2026 |
| **TEXT** | Any text, letters, numbers as characters | 'Alice', 'alice@mail.com', 'New York' |
| **REAL** | Decimal number (floating point) | 1200.00, 25.50 |
| **BLOB** | Binary data (rare for testing) | Images, files |

### 🧱 How to Create a Table (CREATE TABLE)
- Here's the basic syntax:
```sql
CREATE TABLE table_name (
    column1_name DATA_TYPE,
    column2_name DATA_TYPE,
    column3_name DATA_TYPE
);
```
- A real example from our database:
```sql
CREATE TABLE users (
    id INTEGER,
    name TEXT,
    email TEXT,
    age INTEGER,
    city TEXT
);
```
- That's the simplest form. It creates a blank table with those five columns, ready to accept rows.

### 💥 How to Destroy a Table (DROP TABLE)
- To completely remove a table and all its data, use:
```sql
DROP TABLE table_name;
```
- For example:
```sql
DROP TABLE users;
```
- That erases the entire users table from existence — structure, rows, everything. It's irreversible, so in a real company you'd be extremely careful with this command. For practice, it's safe because you can recreate it instantly.

### 📌 What about inserting rows?
- That's coming in 4.1: INSERT INTO. Right now, we're only learning how to build and destroy the table structure. The data rows are a later skill. But you already have your users and orders tables with sample data, so we can practice everything else in between.

### 📝 Explanation (Summary)
- `CREATE TABLE table_name (columns...)` builds a new, empty table with specified column names and data types.
- Common data types: `INTEGER` (whole numbers), `TEXT` (strings), `REAL` (decimals).
- `DROP TABLE table_name` permanently deletes the entire table and all its data — no undo.
- `DELETE FROM table_name` only removes rows; the table structure remains.

---

## 2.3 Constraints (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY)
### 🔍 Simple Analogy
- Imagine you’re filling out a passport application form.

| Constraint | Analogy |
|---|---|
| **NOT NULL** | The form says “Full Name” with a red star. You cannot leave it blank. If you do, the officer rejects the form immediately. |
| **UNIQUE** | The “Passport Number” field must be different for every single person. Two people can’t share the same number, or the system breaks. |
| **PRIMARY KEY** | Each form gets a barcode sticker (e.g., Application #8842) that is unique and never empty. It’s the one perfect identifier for that application, used to track it everywhere. |
| **FOREIGN KEY** | The form asks for your “ID Card Number”. That number must match a real ID card that already exists in the government’s database. If you make up a number, the officer says, “This ID doesn’t exist; I can’t verify you.” |

- Constraints are the strict but helpful rules that prevent garbage data from entering the system, just like the form officer who checks every field.

### 💼 Professional Context
- In a database, constraints are rules applied to table columns to enforce data integrity. Without them, you could accidentally insert a user with no email, or two users with the same ID, or an order that belongs to a non‑existent customer. Constraints keep the data accurate and trustworthy.
- Here are the four foundational constraints you’ll use constantly:

#### 1. NOT NULL
- **What it does**: Forces a column to always have a value. You cannot leave it empty.
- **Example from our users table**: The `name` column is `NOT NULL`. You cannot create a user without a name.
- **Without this rule**: A row could have an empty name, and the application might crash when trying to display “Welcome, !”
- **Try violating it (optional)**:
```sql
INSERT INTO users (name, email) VALUES (NULL, 'test@mail.com');
```
This will fail with an error because name cannot be NULL.

#### 2. UNIQUE
- **What it does**: Guarantees that all values in a column are different. No duplicates allowed.
- **Example from our users table**: The `email` column is `UNIQUE`. You cannot register the same email address twice.
- **Without this rule**: Two different users could end up with alice@mail.com, causing login chaos and data corruption.
- **Try violating it (optional)**:
```sql
INSERT INTO users (name, email) VALUES ('Duplicate Alice', 'alice@mail.com');
```
This will fail because alice@mail.com already exists.

#### 3. PRIMARY KEY
- **What it does**: Uniquely identifies every single row in a table. It combines `NOT NULL` and `UNIQUE` automatically. There can be only one primary key per table.
- **Example from our users table**: The `id` column is the primary key. Every user gets a unique, never‑empty ID (1, 2, 3…). You use this ID to find, update, or delete exactly that user.
- **Without this rule**: There would be no reliable way to say “update the user named Alice” if there were two Alices.
- **How it’s defined in SQL**:
```sql
id INTEGER PRIMARY KEY AUTOINCREMENT,
```
AUTOINCREMENT tells SQLite to automatically assign the next number (1, 2, 3…) when a new row is inserted. You don’t need to provide the ID yourself.

#### 4. FOREIGN KEY
- **What it does**: Links two tables together. It ensures that a value in one table must match a value in another table’s primary key. It prevents orphaned records.
- **Example from our orders table**: The `user_id` column is a foreign key that references `users(id)`. This means every order must belong to a real, existing user. You cannot place an order for user #99 if that user doesn’t exist.
- **Without this rule**: An order could be linked to a deleted or non‑existent user. When the application tries to show “Order placed by…”, it would fail or show nonsense.
- **How it’s defined in SQL**:
```sql
FOREIGN KEY (user_id) REFERENCES users(id)
```
- **Try violating it (optional)**:
```sql
INSERT INTO orders (user_id, product, amount, order_date) 
VALUES (99, 'Phone', 500, '2026-06-05');
```
This will fail because user 99 doesn’t exist in the users table. The database protects the relationship.

### 📝 Bringing it all together (Our current tables)
- Look at the script we used to build your practice database. Every constraint is already at work:

| Table.Column | Applied Constraint | Result |
|---|---|---|
| **users.id** | Primary key | unique and never empty. |
| **users.name** | NOT NULL | a user must have a name. |
| **users.email** | NOT NULL and UNIQUE | a user must provide an email that no one else uses. |
| **orders.id** | Primary key | unique and never empty. |
| **orders.user_id** | Foreign key | must match a real `users.id`. |
| **orders.product, amount, order_date** | NOT NULL | you can’t have an order without a product and a price. |

- That’s why your database is robust. It refuses to accept bad data, just like a well‑trained security guard.

### 📝 Explanation
- Constraints are rules applied to table columns that protect the quality of the data.
- **NOT NULL** forces a column to always have a value; an empty field is rejected.
- **UNIQUE** ensures every value in a column is different; duplicates are forbidden.
- **PRIMARY KEY** is a unique, never‑empty identifier for each row; every table should have one.
- **FOREIGN KEY** links a column to another table’s primary key, preventing orphaned or invalid references.
- As a QA, you test these constraints by deliberately inserting bad data (NULLs, duplicates, invalid references) and verifying the database rejects them with clear errors.
- A well‑constrained database is your first line of defence against bugs that corrupt data silently.

---

# Reading Data (SELECT Queries)

## 3.1 SELECT and FROM
### 🔍 Simple Analogy
- Imagine you’re standing in front of a huge filing cabinet that contains every customer record, every order, and every payment your company has.
- You don’t want to open every drawer and read every paper. Instead, you turn to the cabinet and say:
  - “Show me the name and city columns…” (that’s **SELECT**)
  - “…from the users drawer.” (that’s **FROM**)
- The cabinet hands you exactly those pieces of paper, and nothing else.
- In SQL, `SELECT` is the word that tells the database which columns you want to see, and `FROM` tells it which table to pull them from.

### 💼 Professional Context
- `SELECT` and `FROM` are the most frequently used words in SQL. Every time you want to look at data, you write a `SELECT` statement. As a QA, you’ll use it to:
  - Verify that a newly registered user actually appears in the users table.
  - Pull up all orders placed on a specific date.
  - Check if a product’s price was updated correctly.
  - Extract test data before running an automated script.
- The basic pattern is:
```sql
SELECT column1, column2 FROM table_name;
```
- If you want to see every column in the table, you use the star wildcard:
```sql
SELECT * FROM table_name;
```
- That’s it. `SELECT` lists the columns you want, `FROM` picks the table.

### 🧪 Try It Now (Using Your Practice Database)
- Open your SQLite editor. You already have the users and orders tables with data.

#### 1. Select all columns from users
```sql
SELECT * FROM users;
```
- You’ll see Alice, Bob, and Charlie with all their details.

#### 2. Select only the name and email columns
```sql
SELECT name, email FROM users;
```
- Now you see only those two columns – no id, age, or city.

#### 3. Select all columns from orders
```sql
SELECT * FROM orders;
```
- You’ll see the four orders with their amounts and dates.

#### 4. Select only the product and amount from orders
```sql
SELECT product, amount FROM orders;
```
- The results show a clean list: Laptop 1200.00, Mouse 25.50, etc.

### 📝 Explanation
- `SELECT` defines which columns to retrieve. Use a comma‑separated list for specific columns, or `*` for all columns.
- `FROM` tells the database which table to read from.
- Together, `SELECT ... FROM ...` is the universal starting point for any data check.
- As a QA, I use this constantly to inspect the state of the database after actions performed via the UI or API, ensuring data persistence and correctness.

---

## 3.2 WHERE clause with AND, OR, NOT
### 🔍 Simple Analogy
- Imagine the filing cabinet again. Earlier, you asked for all papers from a drawer. But now, you only want specific ones:

| Clause/Operator | Analogy |
|---|---|
| **WHERE** | “Show me all users who live in London.” |
| **AND** | “Show me users who live in London and are over 25 years old.” |
| **OR** | “Show me users who live in London or Paris.” |
| **NOT** | “Show me users who do not live in London.” |

- The `WHERE` clause is your filter. It tells the database: “Only give me the rows that match these conditions.”

### 💼 Professional Context
- In real testing, you rarely want all rows. You need to zoom in on specific data:
  - After a registration test, you check: “Does a user with email test@example.com exist?”
  - For a bug report, you query: “How many orders were placed after June 1st and have an amount greater than ₹500?”
  - When cleaning up test data, you delete rows where the name starts with “Test_”.
- `WHERE` lets you add conditions. You combine multiple conditions with:
  - **AND** – both (or all) conditions must be true.
  - **OR** – at least one condition must be true.
  - **NOT** – the condition that follows is reversed (true becomes false, and vice versa).

### 🧪 Try It Now (Using Your Practice Database)
- Run these one by one in your editor.

#### 1. Simple WHERE – Filter by city
```sql
SELECT * FROM users
WHERE city = 'London';
```
- You’ll see only Bob’s row because he’s the one in London.

#### 2. WHERE with AND – Two conditions both true
```sql
SELECT * FROM users
WHERE age > 25 AND city = 'New York';
```
- Only Alice matches: she is over 25 and lives in New York.

#### 3. WHERE with OR – Either condition true
```sql
SELECT * FROM users
WHERE city = 'London' OR city = 'Paris';
```
- Bob (London) and Charlie (Paris) both appear.

#### 4. WHERE with NOT – Reverse the condition
```sql
SELECT * FROM users
WHERE NOT city = 'New York';
```
- Everyone except Alice is shown.

#### 5. Mixing AND and OR
```sql
SELECT * FROM users
WHERE age > 25 AND (city = 'London' OR city = 'Paris');
```
- This returns users who are over 25 and live in either London or Paris. (In our data, only Charlie – age 35, Paris – matches. Bob is 25, not greater than 25.)
- **Important**: Use parentheses `()` to group conditions, exactly like in mathematics. Without them, the database might evaluate the logic differently.

### 📝 Explanation
- The `WHERE` clause filters rows so only those that satisfy a condition are returned.
- `AND` combines conditions so that all must be true for a row to be included.
- `OR` combines conditions so that at least one must be true.
- `NOT` negates a condition, including rows where the condition is false.
- When mixing `AND` and `OR`, always use parentheses to make your logic clear and correct.
- As a QA, I use these daily to pinpoint exactly the data I need to verify, debug, or clean up after tests.

---

## 3.3 IN, BETWEEN, LIKE, and wildcards
### 🔍 Simple Analogy
- You already know how to ask for specific files using a single condition like “all files from London”. Now we learn three shortcuts that make your requests much faster and smarter.

| Operator | Analogy |
|---|---|
| **IN** | “Show me the files for London, Paris, and Berlin — all at once, without writing three separate lines.” |
| **BETWEEN** | “Show me the files from January to March — the whole range, including both ends.” |
| **LIKE** | “Show me all files where the name starts with ‘A’ or contains ‘gmail’.” (You don’t need the exact spelling.) |

- These are the filter power‑ups. They let you describe a group of values, a range, or a pattern, all in one short line.

### 💼 Professional Context
- When testing, you often need to pull data that matches one of several values (e.g., orders from specific cities), falls inside a date or price range, or follows a pattern (e.g., emails ending in @example.com). Writing multiple OR conditions or figuring out exact boundaries by hand is tedious and error‑prone.
- `IN` replaces a long chain of `OR` conditions.
- `BETWEEN` replaces `>=` and `<=` with a clean range.
- `LIKE` lets you search with patterns when you only know part of the text.
- These three operators appear in almost every real‑world test query.

#### 1. IN – Pick from a List of Values
- **Analogy**: Checking “Is the city Paris, London, or Berlin?” in one breath, instead of asking three separate yes/no questions.
- **Syntax**:
```sql
SELECT columns FROM table
WHERE column IN (value1, value2, value3);
```
- **Try it now**:
```sql
SELECT name, city FROM users
WHERE city IN ('London', 'Paris');
```
- You see Bob (London) and Charlie (Paris). Alice is excluded.
- **What about numbers?**
```sql
SELECT product, amount FROM orders
WHERE amount IN (25.50, 300.00);
```
- Returns the Mouse and Monitor orders.

#### 2. BETWEEN – Values Inside a Range (Inclusive)
- **Analogy**: “All files from Monday to Friday” — you don’t list every single day, you just give the start and end. `BETWEEN` includes both ends (Monday and Friday).
- **Syntax**:
```sql
SELECT columns FROM table
WHERE column BETWEEN low_value AND high_value;
```
- **Try it now**:
```sql
SELECT name, age FROM users
WHERE age BETWEEN 25 AND 30;
```
- You get Bob (25) and Alice (30). It includes the exact boundaries.
- **For text or dates**:
```sql
SELECT product, order_date FROM orders
WHERE order_date BETWEEN '2026-06-01' AND '2026-06-02';
```
- Returns Laptop and Keyboard — the orders on those two dates.
- **Important**: `BETWEEN` always includes both endpoints. If you want an exclusive range, you still use `>` and `<`.

#### 3. LIKE – Pattern Matching with Wildcards
- **Analogy**: You remember a customer’s name starts with “Al…”, but you forgot the rest. You ask the filing cabinet: “Give me all files where the name starts with ‘Al’.”
- **Two wildcards**:
  - `%` (percent) → matches any number of characters (including zero).
  - `_` (underscore) → matches exactly one character.
- **Syntax**:
```sql
SELECT columns FROM table
WHERE column LIKE 'pattern';
```
- **Examples on your users table**:
  - Starts with ‘A’: `'A%'` → Alice.
```sql
SELECT name FROM users WHERE name LIKE 'A%';
```
  - Ends with ‘e’: `'%e'` → Alice, Charlie.
```sql
SELECT name FROM users WHERE name LIKE '%e';
```
  - Contains ‘ar’: `'%ar%'` → Charlie.
```sql
SELECT name FROM users WHERE name LIKE '%ar%';
```
  - Email with domain ‘mail.com’: `'%@mail.com'`
```sql
SELECT email FROM users WHERE email LIKE '%@mail.com';
```
Returns all three emails.
  - Exactly three letters, first ‘B’, last ‘b’: `'B_b'` would match “Bob”.
```sql
SELECT name FROM users WHERE name LIKE 'B_b';
```
(This is less common, but good to know.)
- **Case sensitivity**: SQLite `LIKE` is case‑insensitive for ASCII letters by default, so `'a%'` will also find Alice. But other databases might be case‑sensitive, so check your environment.

### 📝 Explanation
- `IN` lets you list several acceptable values in parentheses. It’s cleaner than many `OR` conditions.
- `BETWEEN` selects values inside an inclusive range. Perfect for dates, ages, or prices.
- `LIKE` allows pattern searching using `%` (any number of characters) and `_` (exactly one character).
- These operators are essential for writing concise, readable filters when testing data.
- I use `IN` to verify a set of test users, `BETWEEN` to check date‑bound orders, and `LIKE` to find partially‑known strings like email domains or names with typos.

---

## 3.4 NULL Handling (IS NULL, IS NOT NULL)
### 🔍 Simple Analogy
- Imagine you’re filling in a customer information form.
- Some boxes are left completely blank – you didn’t write anything. That’s a NULL.
- Some boxes have a value like 0 or "N/A" – you deliberately filled them. That’s not NULL.
- A NULL is not zero, not an empty string, and not a space. It means “no data was entered” or “unknown”. The database treats NULL as a very special marker.
- When you test an application, you must know if missing data is allowed, and how the system handles it. Sometimes a NULL is perfectly fine (like an optional middle name). Other times, a NULL means a bug (like a missing email for a user who must be contactable).

### 💼 Professional Context
- In SQL, you cannot compare NULL with the usual `=` or `<>` operators. You must use `IS NULL` or `IS NOT NULL`.
- Why? Because NULL means unknown. Asking “is unknown equal to something?” is meaningless. So SQL requires you to ask: “Is this value missing? Yes or no?”
- As a QA, you use NULL checks to:
  - Verify that optional columns correctly allow missing values.
  - Find records where critical data was not saved (a bug).
  - Clean up incomplete test data.

### 🧪 Try It Now (Using Your Practice Database)
- First, let’s add a test user with some missing information so we can see NULLs in action.
```sql
INSERT INTO users (name, email, age, city) VALUES
('Diana', 'diana@mail.com', NULL, NULL);
```
- Now run the following queries one by one.

#### 1. Find all users who have no age specified (NULL)
```sql
SELECT name, age FROM users
WHERE age IS NULL;
```
- You’ll see only Diana — the one we just inserted with a missing age.

#### 2. Find all users who do have an age specified (NOT NULL)
```sql
SELECT name, age FROM users
WHERE age IS NOT NULL;
```
- Alice, Bob, and Charlie appear. Diana is excluded.

#### 3. Find all users whose city is missing
```sql
SELECT name, city FROM users
WHERE city IS NULL;
```
- Again, only Diana appears (her city is NULL).

#### 4. (Common mistake) Never use = or <> with NULL
- Try this incorrect query:
```sql
SELECT name, age FROM users
WHERE age = NULL;
```
- This returns nothing — even though Diana has a NULL age. That’s because `= NULL` is not valid SQL logic. Always use `IS NULL`.

### 📝 Explanation
- NULL means “missing” or “unknown” — it’s not the same as zero or an empty string.
- Use `IS NULL` to find rows where a column has no value.
- Use `IS NOT NULL` to find rows where a column is filled.
- Never use `= NULL` or `<> NULL` — they will not work as expected.
- As a QA, I check nullable columns after tests to ensure optional data is correctly omitted or, if required, that missing data is flagged as a defect.
