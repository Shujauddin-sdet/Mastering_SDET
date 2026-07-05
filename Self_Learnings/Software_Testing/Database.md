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
  - [3.5 DISTINCT](#35-distinct)
  - [3.6 Aliases (AS) for columns and tables](#36-aliases-as-for-columns-and-tables)
  - [3.7 ORDER BY (ASC, DESC)](#37-order-by-asc-desc)
  - [3.8 LIMIT (and OFFSET)](#38-limit-and-offset)
- [Modifying Data](#modifying-data)
  - [4.1 INSERT INTO (Single and Multiple Rows)](#41-insert-into-single-and-multiple-rows)
  - [4.2 UPDATE (with WHERE)](#42-update-with-where)
  - [4.3 DELETE (with WHERE, and TRUNCATE concept)](#43-delete-with-where-and-truncate-concept)
- [Aggregating Data](#aggregating-data)
  - [5.1 COUNT, SUM, AVG](#51-count-sum-avg)
  - [5.2 GROUP BY](#52-group-by)
  - [5.3 HAVING (Filtering Groups)](#53-having-filtering-groups)
- [Combining Tables](#combining-tables)
  - [6.1 INNER JOIN](#61-inner-join)
  - [6.2 LEFT JOIN (and RIGHT JOIN briefly)](#62-left-join-and-right-join-briefly)
  - [6.3 Joining Multiple Tables](#63-joining-multiple-tables)
- [Subqueries Basics](#subqueries-basics)
  - [7.1 Subquery in WHERE Clause](#71-subquery-in-where-clause)
  - [7.2 Subquery in SELECT Clause](#72-subquery-in-select-clause)
  - [7.3 Subquery in FROM Clause (Derived Tables)](#73-subquery-in-from-clause-derived-tables)

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

---

## 3.5 DISTINCT
### 🔍 Simple Analogy
- Imagine a bowl of mixed fruit: apple, banana, apple, orange, banana, banana.
- You ask someone: “What types of fruit are in the bowl?”
- They don't list every single piece. They say: “Apple, banana, orange.” They've removed the repeats and given you only the unique types.
- In SQL, `DISTINCT` does exactly that. It takes a column (or combination of columns) that may contain duplicate values and returns each unique value only once.

### 💼 Professional Context
- When testing, you often need to answer questions like:
  - “How many different cities do our users come from?”
  - “Which unique products have been ordered?”
  - “Show me all the distinct user IDs that have placed an order – without repeating the ones who ordered multiple times.”
- Without `DISTINCT`, you'd get a long list full of repeats. With `DISTINCT`, you get a clean, de‑duplicated list. This is especially useful for counting unique items, generating drop‑down lists for UI testing, or verifying that a column doesn't contain unexpected duplicates.

### 🧪 Try It Now (Using Your Practice Database)
- We'll use the orders table because it naturally contains duplicate values. User 1 (Alice) placed two orders, so the user_id column has the number 1 twice.

#### 1. See the duplicate values first
```sql
SELECT user_id FROM orders;
```
- You'll see: 1, 1, 2, 3 – user 1 appears twice.

#### 2. Now remove duplicates with DISTINCT
```sql
SELECT DISTINCT user_id FROM orders;
```
- The result is: 1, 2, 3 – only the unique user IDs.

#### 3. Distinct on text columns – Unique cities
- Although your users table currently has all different cities, let's see it in action anyway:
```sql
SELECT DISTINCT city FROM users;
```
- You'll see: New York, London, Paris, and a NULL for Diana. Each appears only once.

#### 4. Distinct on multiple columns
- You can also find unique combinations. For example, unique city and age pairs:
```sql
SELECT DISTINCT city, age FROM users;
```
- This shows each existing combination. If two users lived in London and were both 25, they'd be collapsed into one row. Right now, all combinations are unique anyway, but you can see the pattern.

### 📝 Explanation
- `DISTINCT` removes duplicate rows from the result set, showing only unique values or unique combinations.
- It works on one column or multiple columns together.
- Use it to answer “how many different…?” questions, clean up data displays, and check for unexpected duplicates.
- As a QA, I use `DISTINCT` to quickly verify the variety of data in a table (e.g., distinct statuses, distinct product names) and to count unique users, orders, or other entities.

---

## 3.6 Aliases (AS) for columns and tables
### 🔍 Simple Analogy
- Think of a passport application form with column headings like *Surname*, *Given Name*, and *Date of Birth*. Those headings are short, clear, and easy to read.
- Now imagine the form’s original database columns are named `app_surname_txt`, `app_given_name_txt`, and `app_dob_dt`. If you handed that raw list to a customer, they’d be confused.
- So you take a sticky note, write a friendly name over each ugly column, and say: “From now on, display *Surname* instead of `app_surname_txt`.”
- In SQL, the `AS` keyword is that sticky note. It gives a column, a calculation, or even a whole table a temporary, friendly name—just for the output. It doesn’t change the real table; it only changes how the result looks.

### 💼 Professional Context
- When you write queries, column names can be cryptic, especially when using functions like `COUNT(*)` or `SUM(amount)`. The result might show `COUNT(*)` as the column header, which is meaningless in a test report.
- Aliases fix that. They give you clean, readable column headers in your result sets. You also use them to rename columns when joining tables (to avoid confusion between columns with the same name) or to give a temporary name to a subquery.
- As a QA, you’ll use aliases to:
  - Produce clear test evidence reports.
  - Label calculated fields like totals or averages.
  - Distinguish columns with the same name from different tables when joining.

### 🧪 Try It Now (Using Your Practice Database)


#### 1. Simple column alias
```sql
SELECT name AS customer_name, email AS contact_email
FROM users;
```
- You’ll see the results with headers `customer_name` and `contact_email` instead of `name` and `email`.

#### 2. Alias on a calculation
- Count how many users exist and give the result a meaningful name:
```sql
SELECT COUNT(*) AS total_users
FROM users;
```
- The result header will say `total_users` instead of `COUNT(*)`.

#### 3. Alias with spaces or mixed case (use double quotes)
- If you want a header like "Total Orders", wrap the alias in double quotes:
```sql
SELECT COUNT(*) AS "Total Orders"
FROM orders;
```
- Without quotes, the space would break the query. (In some databases, square brackets `[]` are used; in SQLite, double quotes work.)

#### 4. Table alias (shorter name for a table)
- Later, when you join tables, you’ll write something like:
```sql
SELECT u.name, u.email
FROM users AS u
WHERE u.city = 'London';
```
- Here `users AS u` assigns the temporary nickname `u` to the `users` table. You can then use `u.name` instead of `users.name`. It makes long queries much cleaner.

### 📝 Explanation
- The `AS` keyword creates a temporary alias (nickname) for a column or table in the output.
- It does not change the original table or column name in the database.
- Column aliases make result headers readable; table aliases shorten and simplify complex queries.
- Use double quotes around an alias if it contains spaces or special characters.
- As a QA, I use aliases constantly to turn raw query output into clear, professional test evidence.

---

## 3.7 ORDER BY (ASC, DESC)
### 🔍 Simple Analogy
- You've got a pile of customer cards on your desk. Right now they're in no particular order — just the way they fell out of the box.
- Now you want them sorted:
  - Alphabetically by name → from Alice to Charlie.
  - By age, oldest first → from 35 down to 25.
  - By city, reverse alphabetical → from Paris down to London.
- The database is the same. After filtering rows with `WHERE`, you often want the results in a specific order. `ORDER BY` does exactly that — it rearranges the output rows, just like sorting physical cards.
  - `ASC` (ascending) = smallest to largest, A to Z, earliest to latest. This is the default.
  - `DESC` (descending) = largest to smallest, Z to A, latest to earliest.

### 💼 Professional Context
- As a QA, sorted results are essential for:
  - Seeing the most recent orders first.
  - Listing users by registration date for a test report.
  - Finding the highest product price.
  - Presenting clean, readable data to developers or in test evidence.
- `ORDER BY` works on numbers, text, and dates. You can sort by multiple columns too — for example, sort users by city, then by name inside each city.

### 🧪 Try It Now (Using Your Practice Database)
- Run these one by one in your editor.

#### 1. Sort users by name alphabetically (ASC is the default)
```sql
SELECT name, email FROM users
ORDER BY name;
```
- Or explicitly:
```sql
SELECT name, email FROM users
ORDER BY name ASC;
```
- Result: Alice, Bob, Charlie, Diana.

#### 2. Sort users by name descending (Z to A)
```sql
SELECT name, email FROM users
ORDER BY name DESC;
```
- Result: Diana, Charlie, Bob, Alice.

#### 3. Sort orders by amount, smallest first
```sql
SELECT product, amount FROM orders
ORDER BY amount ASC;
```
- Mouse (25.50), Keyboard (75.00), Monitor (300.00), Laptop (1200.00).

#### 4. Sort by multiple columns
- Sort users by city ascending, then by age descending inside each city:
```sql
SELECT name, city, age FROM users
ORDER BY city ASC, age DESC;
```
- (Notice London with Bob, New York with Alice, Paris with Charlie, then Diana's `NULL` city last — `NULL`s appear at the end in `ASC` order by default in SQLite.)

### 📝 Explanation
- `ORDER BY column` sorts the result rows based on that column.
- `ASC` (ascending) = smallest first (A→Z, 1→9). This is the default and can be omitted.
- `DESC` (descending) = largest first (Z→A, 9→1).
- You can sort by multiple columns: `ORDER BY col1, col2`. Each column gets its own direction.
- As a QA, I use `ORDER BY` to inspect data in a logical sequence, find extremes (oldest, most expensive), and produce readable reports.

---

## 3.8 LIMIT (and OFFSET)
### 🔍 Simple Analogy
- Imagine a thick telephone directory with thousands of names.
- You don’t want to read the whole book. You only want to see the first 5 names.
- Or you want to see names 11 to 20 — the second page of results.
- You tell the directory:
  - “Give me only 5 rows.” (that’s `LIMIT`)
  - “Skip the first 10 rows, then give me 5.” (that’s `OFFSET`)
- `LIMIT` tells the database exactly how many rows you want back. `OFFSET` tells it how many rows to jump over before starting.

### 💼 Professional Context
- In real testing, you rarely want all rows — especially if a table has thousands of records. You use `LIMIT` to:
  - Quickly peek at the first few rows to check data structure.
  - Test pagination logic (page 1, page 2, etc.).
  - Retrieve a single row, like the most recent order.
  - Speed up queries during debugging.
- `OFFSET` is optional. It’s used to skip rows, usually together with `LIMIT` to simulate “pages” of results.
- Syntax pattern:
```sql
SELECT columns FROM table
ORDER BY column
LIMIT number_of_rows OFFSET number_to_skip;
```
- `LIMIT` always comes last (or before `OFFSET`). `OFFSET` can be zero — that’s the same as not writing it.

### 🧪 Try It Now (Using Your Practice Database)
- Run these one by one in your editor.

#### 1. Get only the first 2 users
```sql
SELECT id, name FROM users
ORDER BY id
LIMIT 2;
```
- You’ll see Alice (id=1) and Bob (id=2). Only 2 rows, even though the table has more.

#### 2. Get the single most expensive order
```sql
SELECT product, amount FROM orders
ORDER BY amount DESC
LIMIT 1;
```
- Only the Laptop row (1200.00) appears.

#### 3. Skip the first row, then get the next 2 (pagination)
```sql
SELECT id, name FROM users
ORDER BY id
LIMIT 2 OFFSET 1;
```
- This skips Alice (id=1) and returns Bob (id=2) and Charlie (id=3).

#### 4. Page 2 of orders (2 orders per page)
- Page 1 (first 2 orders):
```sql
SELECT id, product, amount FROM orders
ORDER BY id
LIMIT 2 OFFSET 0;
```
- Page 2 (next 2 orders):
```sql
SELECT id, product, amount FROM orders
ORDER BY id
LIMIT 2 OFFSET 2;
```
- (Page 2 returns orders with id 3 and 4 — Monitor and Mouse.)

### 📝 Explanation
- `LIMIT n` restricts the result to only `n` rows.
- `OFFSET m` skips the first `m` rows before starting to return results.
- Together, `LIMIT` and `OFFSET` are used for pagination — fetching results one “page” at a time.
- `LIMIT` without `OFFSET` just grabs the first rows, which is perfect for a quick data preview.
- As a QA, I use `LIMIT` to verify sample data, test pagination behaviour in APIs, and speed up manual checks on large tables.

---

# Modifying Data

## 4.1 INSERT INTO (Single and Multiple Rows)
### 🔍 Simple Analogy
- You have an empty page in your customer ledger. You want to add a new customer.
- You could write down one customer at a time — name, email, age, city — and save the page.
- Or, if five new customers just signed up, you could write all five in one go.
- `INSERT INTO` is the pen that writes new rows into your database table. You decide whether to insert a single row or multiple rows at once.

### 💼 Professional Context
- As a QA or SDET, you’ll use `INSERT INTO` constantly to:
  - Create test data before running manual or automated tests.
  - Add new records that you will later read, update, or delete.
  - Populate a fresh database with sample data so your queries return something meaningful.
- The basic pattern is:
```sql
INSERT INTO table_name (column1, column2, …)
VALUES (value1, value2, …);
```
- For multiple rows, just add more sets of values separated by commas:
```sql
INSERT INTO table_name (column1, column2, …)
VALUES
  (value1_row1, value2_row1, …),
  (value1_row2, value2_row2, …),
  ...;
```
- You don’t have to provide a value for the primary key if it’s set to `AUTOINCREMENT` — the database generates it automatically.

### 🧪 Try It Now (Using Your Practice Database)
- Run these queries in your editor.

#### 1. Insert a single new user
```sql
INSERT INTO users (name, email, age, city)
VALUES ('Eve', 'eve@mail.com', 28, 'Berlin');
```
- Then check:
```sql
SELECT * FROM users WHERE name = 'Eve';
```
- You’ll see Eve’s row with a new `id` assigned automatically.

#### 2. Insert multiple orders at once
```sql
INSERT INTO orders (user_id, product, amount, order_date)
VALUES
  (5, 'Tablet', 450.00, '2026-07-01'),
  (5, 'Headphones', 80.00, '2026-07-02');
```
- (We used `user_id = 5` because Eve is the fifth user inserted — her ID is 5. Verify with `SELECT * FROM users;`.)
- Check the orders table:
```sql
SELECT * FROM orders WHERE user_id = 5;
```
- Both new orders appear.

#### 3. Insert using SELECT (copy data from another table)
- You can also insert rows by copying from an existing table. For example, create a test copy of some users:
```sql
INSERT INTO test_users (name, email)
SELECT name, email FROM users WHERE city = 'London';
```
- (You don’t have a `test_users` table yet; this is just to show the syntax. You can try it after creating one.)

### 📝 Explanation
- `INSERT INTO table (columns) VALUES (values)` adds one or more new rows.
- For multiple rows, list each row’s values in parentheses, separated by commas.
- Columns with `AUTOINCREMENT` (like `id`) can be omitted; the database assigns the next value automatically.
- You must respect all constraints (`NOT NULL`, `UNIQUE`, `FOREIGN KEY`) or the insert will fail — that’s the database protecting your data.
- As a QA, I insert test data before runs, and sometimes I insert deliberately bad data to check that constraints block it.

---

## 4.2 UPDATE (with WHERE)
### 🔍 Simple Analogy
- Imagine you keep a notebook of regular customers. One day, a customer tells you: “I’ve moved house. Please change my city from London to Manchester.”
- You take your eraser, find only their row, and carefully replace the old city with the new one. If you erased the city for everyone, that would be a disaster.
- In SQL, `UPDATE` is the eraser. The `WHERE` clause is your finger pointing at the exact row. Without `WHERE`, you’d accidentally change every row in the table.

### 💼 Professional Context
- As a QA, you update data to:
  - Fix test data that became stale.
  - Simulate a user changing their profile.
  - Change an order’s status to test different scenarios.
  - Verify that an update operation works correctly before automating it.
- The basic pattern is:
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
- **Always use WHERE.** An `UPDATE` without `WHERE` changes every row. That’s fine when you want a mass update, but in testing, it’s usually an accident you want to avoid.

### 🧪 Try It Now (Using Your Practice Database)
#### 1. Update a single user’s city
- Bob currently lives in London. Let’s move him to Manchester.
```sql
UPDATE users
SET city = 'Manchester'
WHERE name = 'Bob';
```
- Verify:
```sql
SELECT name, city FROM users WHERE name = 'Bob';
```
- Bob’s city is now Manchester.

#### 2. Update multiple columns at once
- Change Eve’s age and city together:
```sql
UPDATE users
SET age = 29, city = 'Hamburg'
WHERE email = 'eve@mail.com';
```
- Check:
```sql
SELECT name, age, city FROM users WHERE email = 'eve@mail.com';
```

#### 3. Increase the amount of all orders placed by user 5 by 10% (bulk update with a condition)
```sql
UPDATE orders
SET amount = amount * 1.10
WHERE user_id = 5;
```
- Then see the updated amounts:
```sql
SELECT product, amount FROM orders WHERE user_id = 5;
```
- The Tablet (450) becomes 495, Headphones (80) becomes 88.

#### ⚠️ The Danger of UPDATE Without WHERE
- Try this only if you’re curious — it will change every row:
```sql
UPDATE users
SET city = 'Nowhere';
```
- Now every user lives in Nowhere. That’s a useful reminder: always use `WHERE` unless you truly mean “all rows”.
- *(To undo, you can re‑run your original INSERT script to rebuild the tables. That’s why we saved it.)*

### 📝 Explanation
- `UPDATE table_name SET column = value WHERE condition` modifies existing rows.
- `SET` lists the columns and their new values; separate multiple changes with commas.
- `WHERE` restricts which rows are updated. Without it, every row gets updated — a common and dangerous mistake.
- As a QA, I use `UPDATE` to prepare test data, simulate user actions, and validate that the system responds correctly to data changes.

---

## 4.3 DELETE (with WHERE, and TRUNCATE concept)
### 🔍 Simple Analogy
- Think of your customer notebook again.
- A customer asks you to remove their entire record because they closed their account. You find their row and erase it completely. That’s `DELETE` with a `WHERE` clause – surgical, precise.
- Now imagine you want to wipe the whole notebook clean but keep the empty lined pages ready for new customers. That’s `DELETE` without `WHERE` – every row vanishes, but the table shell remains.
- If you want to tear out the entire page and start a fresh blank one, that’s `TRUNCATE` (in databases that support it), or in SQLite you simply `DROP` the table and recreate it.

### 💼 Professional Context
- As a QA, you use `DELETE` to:
  - Remove test data you inserted during a test run, so the database is clean for the next run.
  - Simulate a user deleting their account and verify the application handles it correctly.
  - Clear out stale rows before inserting fresh ones.
  - Test that foreign key constraints prevent deletion of a parent row that still has child rows (e.g., deleting a user who still has orders).
- Basic pattern:
```sql
DELETE FROM table_name
WHERE condition;
```
- **Critical rule:** Just like `UPDATE`, a `DELETE` without `WHERE` removes every single row from the table. Be extremely careful, and always double‑check your condition before running it.

#### ⚡ TRUNCATE vs DELETE (Brief Concept)
| Action | DELETE FROM table (no WHERE) | TRUNCATE TABLE table | DROP TABLE table |
|---|---|---|---|
| **What it removes** | All rows, row by row. | All rows, but faster (deallocates entire data pages). | The entire table – structure and rows. |
| **Where used** | Every database, including SQLite. | MySQL, PostgreSQL, Oracle etc. Not in SQLite. | Every database. |
| **Recovery** | Can be rolled back if inside a transaction. | Usually cannot be rolled back. | Cannot be rolled back. |
| **Table structure** | Remains. | Remains. | Gone. |

- Since SQLite doesn’t have a `TRUNCATE` command, you mimic it by either:
  - Using `DELETE FROM table;` (slower for huge tables, but fine for testing).
  - Dropping the table and recreating it: `DROP TABLE users;` then re‑run `CREATE TABLE users (...);`.
- For test databases with just a few rows, `DELETE FROM table;` is perfectly fine.

### 🧪 Try It Now (Using Your Practice Database)
#### 1. Delete a single specific row
- Delete the user named Eve:
```sql
DELETE FROM users
WHERE name = 'Eve';
```
- Verify:
```sql
SELECT * FROM users;
```
- Eve is gone. The other users remain untouched.

#### 2. Delete all orders for a specific user (bulk delete with condition)
- Remove all orders placed by user 3 (Charlie):
```sql
DELETE FROM orders
WHERE user_id = 3;
```
- Check:
```sql
SELECT * FROM orders;
```
- Only orders from Alice (user 1) and Bob (user 2) remain. Charlie’s orders are wiped.

#### 3. Delete all rows from a table (careful!)
```sql
DELETE FROM users;
```
- Now run:
```sql
SELECT * FROM users;
```
- Zero rows. The users table still exists, with all its columns, but it’s empty.
- *(To bring back your test data, just re‑run the original INSERT script you saved.)*

### 📝 Explanation
- `DELETE FROM table WHERE condition` removes specific rows that match the condition.
- A `DELETE` without `WHERE` removes all rows – the table stays, but is empty.
- `TRUNCATE` is a faster, non‑transactional way to empty a table in other databases; SQLite doesn’t support it, so we use `DELETE FROM table;` or `DROP` + recreate.
- As a QA, I use `DELETE` to clean up test data, simulate user data removal, and test constraint behaviours (like foreign key restrictions).
- Always verify your `WHERE` clause before running a `DELETE`. A missing condition can wipe your entire dataset.

---

# Aggregating Data

## 5.1 COUNT, SUM, AVG
### 🔍 Simple Analogy
- You have a pile of order receipts. Now, instead of looking at each receipt one by one, you want quick answers:
  - How many orders did we receive? → You count the receipts.
  - How much money did we make in total? → You add up all the amounts.
  - What’s the average order value? → You divide the total by the number of receipts.
- `COUNT`, `SUM`, and `AVG` are the calculator buttons that do exactly that—instantly, without you needing to add anything manually.

### 💼 Professional Context
- As a QA, you use aggregate functions to verify business logic and data correctness. For example:
  - Does the dashboard show the correct number of registered users? → `COUNT(*)`
  - Is the total revenue on the reports page calculated correctly? → `SUM(amount)`
  - Is the average order value within an expected range? → `AVG(amount)`
- Aggregates work on many rows and collapse them into a single value. They are often used with `WHERE` to answer questions about a specific subset, like “How many orders were placed in June?”

#### Most common aggregate functions:
| Function | What it returns |
|---|---|
| **COUNT(*)** | Total number of rows |
| **COUNT(column)** | Number of rows where that column is not NULL |
| **SUM(column)** | Total sum of values in a numeric column |
| **AVG(column)** | Average (mean) of values in a numeric column |
| **MIN(column)** | Smallest value |
| **MAX(column)** | Largest value |

### 🧪 Try It Now (Using Your Practice Database)
- Before running these, make sure you have sample data. If you deleted everything while testing `DELETE`, just re‑run your original `INSERT` script to bring back the rows.

#### 1. Count all users
```sql
SELECT COUNT(*) AS total_users FROM users;
```
- You’ll see total_users: 4 (Alice, Bob, Charlie, Diana).

#### 2. Count users with a known city (not NULL)
```sql
SELECT COUNT(city) AS users_with_city FROM users;
```
- Diana’s city is NULL, so this returns 3.

#### 3. Total sales amount from all orders
```sql
SELECT SUM(amount) AS total_revenue FROM orders;
```
- Laptop (1200) + Mouse (25.50) + Keyboard (75) + Monitor (300) + Tablet (450) + Headphones (80) = 2130.50. *(Assuming default data plus the recent inserted tablet/headphones).*

#### 4. Average order amount
```sql
SELECT AVG(amount) AS average_order FROM orders;
```
- 2130.50 ÷ 6 ≈ 355.0833...

#### 5. Highest and lowest order amount
```sql
SELECT MIN(amount) AS smallest_order, MAX(amount) AS largest_order FROM orders;
```
- Smallest: Mouse (25.50). Largest: Laptop (1200).

#### 6. Filtered aggregate – total orders by Alice (user_id = 1)
```sql
SELECT SUM(amount) AS alice_total FROM orders WHERE user_id = 1;
```
- Alice spent 1200 + 25.50 = 1225.50.

### 📝 Explanation
- `COUNT(*)` counts all rows; `COUNT(column)` counts only rows where that column is not NULL.
- `SUM(column)` adds up numeric values; ignores NULLs automatically.
- `AVG(column)` calculates the mean of a numeric column (ignores NULLs).
- `MIN` and `MAX` find the smallest and largest values.
- These functions condense many rows into a single meaningful number, perfect for verifying statistics and summaries.
- As a QA, I use them to check dashboard numbers, validate report totals, and spot anomalies quickly.

---

## 5.2 GROUP BY
### 🔍 Simple Analogy
- You’re organising a stack of order receipts.
- Right now you can count them all (31 receipts), or add up the total money (₹14,000). But what if you want to know:
  - “How many orders did each customer place?”
  - “What’s the total spending per customer?”
  - “How many customers do we have in each city?”
- You can’t answer these with just `COUNT(*)` or `SUM()` on the whole table — you need to group the receipts by customer, and then count inside each group.
- In SQL, `GROUP BY` does exactly that. It sorts the rows into piles (one pile per customer, or per city), and then the aggregate function (`COUNT`, `SUM`, etc.) runs on each pile separately.

### 💼 Professional Context
- As a QA, you use `GROUP BY` constantly:
  - “Show me the number of orders placed by each user, so I can test the user dashboard.”
  - “What’s the total revenue per product category?”
  - “How many failed login attempts per user in the last 24 hours?”
  - “Show me the count of test records I inserted, grouped by test run ID.”
- `GROUP BY` is always used with an aggregate function — otherwise, you’d just get a distinct list, which `DISTINCT` does better.
- Basic pattern:
```sql
SELECT column_to_group_by, AGGREGATE_FUNCTION(column_to_aggregate)
FROM table
GROUP BY column_to_group_by;
```
- You can also group by multiple columns. Any column in the `SELECT` that is not an aggregate must appear in the `GROUP BY`.

### 🧪 Try It Now (Using Your Practice Database)
- If you deleted data earlier, re‑run your original INSERT script so the users and orders tables are populated with the default sample rows (Alice, Bob, Charlie, Diana, and their orders).

#### 1. Count orders per user
```sql
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id;
```
- Result: User 1 (Alice): 2 orders, User 2 (Bob): 1 order, User 3 (Charlie): 1 order.

#### 2. Total spending per user
```sql
SELECT user_id, SUM(amount) AS total_spent
FROM orders
GROUP BY user_id
ORDER BY total_spent DESC;
```
- Now you see who spent the most.

#### 3. Number of users per city
```sql
SELECT city, COUNT(*) AS users_in_city
FROM users
GROUP BY city;
```
- You’ll see counts for London, New York, Paris, and a NULL group for Diana (if her city is still NULL). The database treats all NULLs as one group in `GROUP BY`.

#### 4. Average age per city (excluding NULL cities)
```sql
SELECT city, AVG(age) AS average_age
FROM users
WHERE city IS NOT NULL
GROUP BY city;
```

#### 5. Group by multiple columns – count orders per user per product
```sql
SELECT user_id, product, COUNT(*) AS times_ordered
FROM orders
GROUP BY user_id, product;
```
- Shows you if a user ordered the same product more than once.

### 📝 Explanation
- `GROUP BY` divides rows into groups that share the same value in the specified column(s).
- Aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) are then applied to each group independently.
- Any column in the `SELECT` that isn’t an aggregate must be in the `GROUP BY` clause.
- You often combine `GROUP BY` with `ORDER BY` to sort the groups (e.g., biggest spenders first).
- As a QA, `GROUP BY` is essential for verifying grouped data on dashboards, reports, and summary views.

---

## 5.3 HAVING (Filtering Groups)
### 🔍 Simple Analogy
- You’ve just sorted your order receipts into piles — one pile for each customer.
- Now you want to find only the customers who have more than one order. You can’t check that before making the piles, because the count doesn’t exist yet. You must create the piles first, then look at each pile’s size and throw away the ones that are too small.
- In SQL:
  - `WHERE` filters individual rows **before** the piles are made.
  - `HAVING` filters the piles themselves **after** `GROUP BY` has done its work.
- So `WHERE` works on raw rows; `HAVING` works on grouped results.

### 💼 Professional Context
- As a QA, you’ll use `HAVING` to answer questions like:
  - “Which users have placed more than 3 orders?” (test power‑user logic)
  - “Which products have a total sales value below ₹500?” (find unpopular items)
  - “Which cities have an average user age over 30?” (verify demographic filters)
  - “Show me only the test runs where the number of failures is greater than zero.”
- `HAVING` always comes after `GROUP BY`. You can’t use aggregate functions in `WHERE` — they belong in `HAVING`.
- Basic pattern:
```sql
SELECT column, AGGREGATE_FUNCTION(...)
FROM table
GROUP BY column
HAVING condition_on_aggregate;
```

### 🧪 Try It Now (Using Your Practice Database)
- Make sure your users and orders tables contain the default sample rows. If you deleted anything, re‑run your original INSERT script.

#### 1. Users who have placed more than 1 order
```sql
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING order_count > 1;
```
- Only user 1 (Alice) appears, because she has two orders.

#### 2. Users whose total spending is above ₹500
```sql
SELECT user_id, SUM(amount) AS total_spent
FROM orders
GROUP BY user_id
HAVING total_spent > 500;
```
- Alice (1225.50) will show up.

#### 3. Cities with more than one user
```sql
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city
HAVING user_count > 1;
```
- Since all cities in our default data have only one user each, this might return nothing. You can test the opposite: `HAVING user_count = 1`.

#### 4. Average order value per user, showing only those with average above ₹100
```sql
SELECT user_id, AVG(amount) AS avg_order
FROM orders
GROUP BY user_id
HAVING avg_order > 100;
```

#### ⚖️ WHERE vs HAVING
| Clause | What it filters | Works with… | Position in query |
|---|---|---|---|
| **WHERE** | Individual rows before grouping | Column values directly | Before `GROUP BY` |
| **HAVING** | Groups after grouping | Aggregate results (`COUNT`, `SUM`, `AVG`, etc.) | After `GROUP BY` |

- You can use both in the same query. For example, first filter out orders below ₹30 with `WHERE`, then group by user, then keep only groups with more than one order using `HAVING`.
```sql
SELECT user_id, COUNT(*) AS orders_above_30
FROM orders
WHERE amount > 30
GROUP BY user_id
HAVING orders_above_30 > 1;
```

### 📝 Explanation
- `HAVING` filters groups created by `GROUP BY`, just as `WHERE` filters rows before grouping.
- It’s used with aggregate functions — `HAVING COUNT(*) > 5`, `HAVING AVG(amount) < 100`.
- `WHERE` cannot use aggregates; `HAVING` cannot exist without `GROUP BY` (in standard SQL, though some databases tolerate it).
- As a QA, `HAVING` helps me find outliers, validate business rules on grouped data, and focus my testing on the most relevant subsets.

---

# Combining Tables

## 6.1 INNER JOIN
### 🔍 Simple Analogy
- You have two separate ledgers:
  - **Customers ledger** – lists every customer’s ID, name, email, and city.
  - **Orders ledger** – lists every order: what product, how much, and the customer ID who bought it.
- But the orders ledger doesn’t show the customer’s name – only their ID. If you want to see who placed each order, you must bring the two ledgers together. You take a row from the orders ledger, find the matching customer ID in the customers ledger, and combine them into one row.
- That’s `INNER JOIN`. It links two tables on a shared column, returning only the rows that match in both.

### 💼 Professional Context
- As a QA, you rarely query a single table for meaningful checks. You join tables to:
  - Verify that an order belongs to a real user.
  - Display a human‑readable test report showing user names next to their orders.
  - Check that all foreign key relationships are intact.
  - Combine data from multiple sources to validate end‑to‑end scenarios.
- `INNER JOIN` returns only rows where the join condition is true in both tables. If a customer has no orders, they won’t appear. If an order references a non‑existent user, it also won’t appear (which is good for finding orphaned data).
- Basic pattern:
```sql
SELECT table1.column, table2.column, ...
FROM table1
INNER JOIN table2 ON table1.common_column = table2.common_column;
```
- You can join more than two tables by chaining additional `INNER JOIN` clauses.

### 🧪 Try It Now (Using Your Practice Database)
- Make sure your users and orders tables have the default rows. Re‑run your original INSERT script if needed, so Alice (id=1), Bob (id=2), Charlie (id=3), Diana (id=4), and their orders are present.

#### 1. See every order with the customer name
```sql
SELECT users.name, orders.product, orders.amount
FROM orders
INNER JOIN users ON orders.user_id = users.id;
```
- Result:
  - Alice (Laptop, 1200.00)
  - Alice (Mouse, 25.50)
  - Bob (Keyboard, 75.00)
  - Charlie (Monitor, 300.00)
- Diana doesn’t appear because she has no orders — the join is only for matching rows.

#### 2. Join with a WHERE clause – only orders above ₹100
```sql
SELECT users.name, orders.product, orders.amount
FROM orders
INNER JOIN users ON orders.user_id = users.id
WHERE orders.amount > 100;
```
- Shows Laptop (1200) and Monitor (300).

#### 3. Join and aggregate – total spending per user
```sql
SELECT users.name, SUM(orders.amount) AS total_spent
FROM orders
INNER JOIN users ON orders.user_id = users.id
GROUP BY users.name
ORDER BY total_spent DESC;
```
- Result: Alice has the highest total, followed by Charlie, then Bob. Diana is absent because she has no orders.

#### 4. Check for orphaned orders (advanced practice)
- To find orders that have an invalid user_id (not in the users table), you’d use a `LEFT JOIN` (covered next). `INNER JOIN` automatically hides them, which is why it’s safe for clean data.

### 📝 Explanation
- `INNER JOIN` combines rows from two tables where the join condition is true in both.
- It’s the standard way to bring together related data, like customer names with their orders.
- Rows that don’t have a match in the other table are excluded from the result.
- The join condition usually compares a foreign key in one table with the primary key in another.
- As a QA, I use `INNER JOIN` to verify relational integrity, create readable test evidence, and validate business rules across multiple tables.

---

## 6.2 LEFT JOIN (and RIGHT JOIN briefly)
### 🔍 Simple Analogy
- You have your two ledgers again: customers and orders.
- Last time, with `INNER JOIN`, you only saw customers who had placed orders. Diana was invisible because she had no orders – like she was standing outside the shop and we ignored her.
- Now you want a complete customer list, and if someone hasn’t ordered anything yet, you still want to see their name – with just a blank space or a dash in the order columns.
- That’s `LEFT JOIN`. It says: “Give me all rows from the left table (customers), and if there’s a matching order, attach it. If not, leave the order columns empty.”
- The left table is the one written first in the query, before `LEFT JOIN`. The right table is the second one. So `LEFT JOIN` keeps every row from the first table, no matter what.

### 💼 Professional Context
- As a QA, you use `LEFT JOIN` to:
  - Find all users, including those who have never placed an order (inactive users).
  - Identify orphaned records – e.g., orders that reference a missing user (by checking where the joined column is `NULL`).
  - Build complete reports where the primary table must keep all rows, and the secondary data is optional.
  - Test that the system correctly handles missing related data.
- `RIGHT JOIN` does the same thing, but keeps every row from the right table instead. In practice, most developers simply swap the table order and use `LEFT JOIN` because it’s easier to read. `RIGHT JOIN` is rare, and SQLite doesn’t support it at all, so we’ll focus on `LEFT JOIN`.
- Basic pattern:
```sql
SELECT left_table.column, right_table.column, ...
FROM left_table
LEFT JOIN right_table ON left_table.common_column = right_table.common_column;
```

### 🧪 Try It Now (Using Your Practice Database)
- Make sure users has Alice, Bob, Charlie, and Diana (who has no orders). If you inserted Eve earlier and she has orders, that’s fine. Re‑run the original INSERT script if needed.

#### 1. List all users, with their orders if they exist
```sql
SELECT users.name, orders.product, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```
- Diana appears, but her order columns are `NULL` because she has no matching row in orders. She’s no longer invisible.

#### 2. Count orders per user, including those with zero orders
```sql
SELECT users.name, COUNT(orders.id) AS order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.name;
```
- Result: Alice (2), Bob (1), Charlie (1), Diana (0). Diana’s count is zero because `COUNT(orders.id)` ignores `NULL`s, which is exactly what we want.

#### 3. Find users with no orders (the inactive list)
```sql
SELECT users.name
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE orders.id IS NULL;
```
- Only Diana appears. This is a classic QA check: “Show me all users who haven’t placed an order.”

#### 🔄 RIGHT JOIN (Briefly)
- `RIGHT JOIN` keeps every row from the right table. If you swapped the table order, you could achieve the same result with `LEFT JOIN`. For example:
```sql
-- This is a RIGHT JOIN (not supported in SQLite, but in other databases):
SELECT users.name, orders.product
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

-- The equivalent LEFT JOIN (swap the tables):
SELECT users.name, orders.product
FROM orders
LEFT JOIN users ON users.id = orders.user_id;
```
- Since SQLite doesn’t support `RIGHT JOIN`, just remember: you can always reverse the table order and use `LEFT JOIN`. It’s the industry standard approach.

### 📝 Explanation
- `LEFT JOIN` keeps every row from the first (left) table, and attaches matching rows from the second table when they exist.
- If there’s no match, the columns from the second table are filled with `NULL`.
- This is perfect for finding records with missing related data, like users with no orders, or products never purchased.
- `RIGHT JOIN` is the mirror image; it’s rarely used because you can swap the table order and write a `LEFT JOIN` instead.
- As a QA, I use `LEFT JOIN` to build complete test reports that include all base records, and to verify that the absence of related data is correctly handled.

---

## 6.3 Joining Multiple Tables
### 🔍 Simple Analogy
- You have three ledgers this time:
  - **Customers** – who each customer is.
  - **Orders** – what they bought and when.
  - **Shipments** – the delivery status of each order.
- You want a single report that shows: Customer name, Product they ordered, And whether it was shipped or still processing.
- You can’t get that from just two ledgers. You need all three, linked together. You start with customers, walk over to their orders, then from each order walk to the shipment information. That’s joining multiple tables — one chain of links.

### 💼 Professional Context
- Real databases are rarely just two tables. An e‑commerce system might have users, orders, order_items, products, shipments, payments, etc. As a QA, you often need to pull data from three, four, or even more tables to verify a complete user journey.
- The good news is the pattern doesn’t change. You simply add another `JOIN` after the first one, linking the third table to one of the previous tables on a shared column. The same rules apply: `INNER JOIN` if you only want rows that match everywhere, or `LEFT JOIN` to keep all rows from one side.
- Basic pattern:
```sql
SELECT table1.col, table2.col, table3.col, ...
FROM table1
JOIN table2 ON table1.common_col = table2.common_col
JOIN table3 ON table2.another_col = table3.another_col
...;
```
- Each `JOIN` adds one more table to the chain. You can mix `INNER JOIN` and `LEFT JOIN` as needed.

### 🛠️ Add a Third Table (One‑Time Setup)
- We need a third table to practise with. Let’s create a shipments table that tracks the delivery status of each order.
- Run the following in your editor once:
```sql
CREATE TABLE shipments (
    order_id INTEGER PRIMARY KEY,
    status TEXT NOT NULL,
    shipped_date TEXT,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

INSERT INTO shipments (order_id, status, shipped_date) VALUES
(1, 'Delivered', '2026-06-05'),
(2, 'Delivered', '2026-06-06'),
(3, 'Shipped', '2026-06-04'),
(4, 'Processing', NULL),
(5, 'Delivered', '2026-07-05'),
(6, 'Processing', NULL);
```
- *(Note: order IDs 5 and 6 may exist if you still have Eve’s orders. If you don’t have those orders, you can insert only rows that match existing `orders.id` values. To be safe, you can adapt the insert or check what order IDs exist with `SELECT id FROM orders;` and only insert matching ones.)*
- You can quickly check your order IDs:
```sql
SELECT id FROM orders;
```
- Then adjust the `INSERT INTO shipments` accordingly. If you’re missing some orders, just insert rows for the ones you have, or re‑run the original INSERT script for orders to have all six.

### 🧪 Try It Now
- Now we’ll join users → orders → shipments to see customer names, what they ordered, and their shipment status.

#### 1. Full chain: customer name, product, amount, shipment status
```sql
SELECT users.name,
       orders.product,
       orders.amount,
       shipments.status
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN shipments ON orders.id = shipments.order_id;
```
- You’ll see a clean table with four columns. Only orders that have a matching shipment will appear (because of `INNER JOIN`). If some orders don’t have a shipment row, they’ll be hidden.

#### 2. Include all orders, even if shipment status is missing
- Here we use a `LEFT JOIN` for the last step, so orders without a shipment will show `NULL` in the status column:
```sql
SELECT users.name,
       orders.product,
       orders.amount,
       shipments.status
FROM users
INNER JOIN orders ON users.id = orders.user_id
LEFT JOIN shipments ON orders.id = shipments.order_id;
```

#### 3. Add a filter: only delivered items
```sql
SELECT users.name, orders.product, shipments.status
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN shipments ON orders.id = shipments.order_id
WHERE shipments.status = 'Delivered';
```

#### 4. Count the number of shipments per status (using the same joins)
```sql
SELECT shipments.status, COUNT(*) AS count
FROM orders
INNER JOIN shipments ON orders.id = shipments.order_id
GROUP BY shipments.status;
```

### 📝 Explanation
- Joining multiple tables means adding more `JOIN` clauses after the first one, each linking a new table to one already in the query.
- Each `JOIN` needs its own `ON` condition that defines how the tables relate.
- You can mix `INNER JOIN` and `LEFT JOIN` to control which rows are kept when relationships are optional.
- The sequence of joins usually follows the natural chain of relationships: users → orders → shipments.
- As a QA, I use multi‑table joins to validate full workflows, generate comprehensive test evidence, and check data integrity across the entire system.

---

# Subqueries Basics

## 7.1 Subquery in WHERE Clause
### 🔍 Simple Analogy
- You have two ledgers again: customers and orders. Now imagine you want to find all customers who have ever placed an order. You don’t know their IDs off the top of your head. So you do this:
  - First, you go to the orders ledger and write down every user_id that appears there.
  - Then you go to the customers ledger and pick only those customers whose ID is in that list.
- In SQL, you can do this in one step using a subquery. The inner query (`SELECT user_id FROM orders`) produces a list, and the outer query (`SELECT * FROM users WHERE id IN (...)`) uses that list as a filter. The inner query runs first, hands its result to the outer query, and you get the final answer.
- A subquery is just a query inside another query. When it’s used in a `WHERE` clause, it acts as a dynamic filter that depends on live data from another table.

### 💼 Professional Context
- As a QA, you’ll use subqueries in `WHERE` to:
  - Find records that match a condition from another table (e.g., "all users who placed an order in June").
  - Compare a value against a calculated aggregate (e.g., "all orders above the average amount").
  - Check for the existence of related rows ("users who have at least one order").
  - Check for the absence of related rows ("users who have never placed an order").
- Subqueries are especially handy when you don’t want to hardcode values. If the data changes, the subquery result changes automatically.
- Basic pattern:
```sql
SELECT columns
FROM table
WHERE column IN (SELECT column FROM another_table WHERE condition);
```
- You can also use comparison operators like `=`, `>`, `<`, `>=`, `<=`, `<>` when the subquery returns a single value (like an average).

### 🧪 Try It Now (Using Your Practice Database)
- We’ll use the existing users and orders tables. If you don’t have recent data, re‑run your original INSERT script for the default rows.

#### 1. Find all users who have placed at least one order
```sql
SELECT name, email
FROM users
WHERE id IN (SELECT DISTINCT user_id FROM orders);
```
- This returns Alice, Bob, and Charlie. Diana is excluded because she has no orders. The inner query `SELECT DISTINCT user_id FROM orders` returns (1,2,3,5?) — only those IDs. The outer query then picks the matching users.

#### 2. Find all orders that belong to users living in London or Paris
```sql
SELECT product, amount
FROM orders
WHERE user_id IN (SELECT id FROM users WHERE city IN ('London', 'Paris'));
```
- The inner query finds Bob (London) and Charlie (Paris), returns their IDs, then the outer query pulls their orders.

#### 3. Compare against an aggregate: orders above the average amount
```sql
SELECT product, amount
FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);
```
- The inner query calculates the average order amount (let’s say ~355). The outer query returns only orders above that average.

#### 4. Users with zero orders (using NOT IN)
```sql
SELECT name, email
FROM users
WHERE id NOT IN (SELECT DISTINCT user_id FROM orders);
```
- Diana appears. This is the classic “inactive users” check.

### 📝 Explanation
- A subquery is a complete `SELECT` statement placed inside another SQL statement, usually inside parentheses.
- When used in a `WHERE` clause, the subquery runs first and produces a list of values or a single value.
- `IN` checks if a value exists in the list returned by the subquery.
- `NOT IN` checks for the opposite.
- Comparison operators (`=`, `>`, `<`) are used when the subquery is guaranteed to return a single value (like an aggregate).
- Subqueries make queries dynamic: you don’t need to know the exact IDs or values beforehand.
- As a QA, I use subqueries to verify relationships, check business rules that span multiple tables, and quickly isolate data for testing.

---

## 7.2 Subquery in SELECT Clause
### 🔍 Simple Analogy
- You’re writing a report card for each customer. Next to their name, you want to show:
  - Their total number of orders (calculated from the orders ledger).
  - Their total spending (summed from the orders ledger).
  - The average order value for the whole shop (so they can see if they’re above or below).
- You don’t want to write these numbers down by hand. You want the database to look them up automatically as it prints each customer’s row.
- A subquery in the `SELECT` clause does exactly that. It runs a tiny query inside the main query, once for each row (or once overall, depending on how it’s written), and displays the result right there as a new column.

### 💼 Professional Context
- As a QA, you use subqueries in `SELECT` to:
  - Add calculated values from other tables without joining (e.g., total orders per user as a column).
  - Show comparisons against overall statistics (e.g., average order value next to each order).
  - Create rich test evidence: each row is self‑contained with all its relevant metrics.
  - Verify that per‑user summaries match what’s shown on the application’s dashboard.
- This type of subquery is placed in the column list of the main query and usually returns a single value per row. It can be correlated (referring to something in the outer row) or non‑correlated (independent of the outer row).
- Basic pattern (correlated subquery):
```sql
SELECT column1,
       (SELECT AGGREGATE(...) FROM table2 WHERE table2.common_col = table1.common_col) AS alias
FROM table1;
```
- The condition `table2.common_col = table1.common_col` ties the inner query to the current row of the outer query.

### 🧪 Try It Now (Using Your Practice Database)
- We’ll use the existing users and orders tables. Ensure you have the default rows (Alice, Bob, Charlie, Diana, plus any additional orders from earlier inserts).

#### 1. Show each user with their total number of orders
```sql
SELECT name,
       (SELECT COUNT(*) FROM orders WHERE orders.user_id = users.id) AS order_count
FROM users;
```
- Result: Alice 2, Bob 1, Charlie 1, Diana 0. The inner query counts orders for the specific `user_id` that matches each user’s `id`.

#### 2. Show each user with their total spending
```sql
SELECT name,
       (SELECT SUM(amount) FROM orders WHERE orders.user_id = users.id) AS total_spent
FROM users;
```

#### 3. Show each order with the average order amount for the whole shop (non‑correlated)
```sql
SELECT product, amount,
       (SELECT AVG(amount) FROM orders) AS shop_average
FROM orders;
```
- Every row shows the same shop average, next to the order amount. You can easily compare if each order is above or below average.

#### 4. Show each user’s name and the average value of their orders (correlated, useful for loyalty analysis)
```sql
SELECT name,
       (SELECT AVG(amount) FROM orders WHERE orders.user_id = users.id) AS avg_order_value
FROM users;
```
- Users with no orders will show `NULL` for the average, which is correct.

### 📝 Explanation
- A subquery in the `SELECT` clause is a mini‑query that runs as part of the column list, returning a value for each output row.
- A **correlated subquery** has a `WHERE` condition that links it to the outer query’s current row (e.g., `WHERE orders.user_id = users.id`). It runs once per row.
- A **non‑correlated subquery** has no such link and runs once, returning the same value for every row (e.g., the overall average).
- These subqueries are perfect for adding dynamic summaries, comparisons, and metrics without altering the main table structure.
- As a QA, I use them to build rich, informative test reports that combine raw data with calculated indicators, helping me spot discrepancies quickly.

---

## 7.3 Subquery in FROM Clause (Derived Tables)
### 🔍 Simple Analogy
- You’ve been writing queries that produce result tables — like a list of users and their order counts. Now imagine you want to run another query on top of that result table, as if it were a real table in the database.
- Think of it like this:
  - You take all the order receipts and create a summary sheet: “Total spending per customer”.
  - Then, on that summary sheet, you highlight only the customers who spent more than ₹500.
- The summary sheet isn’t a permanent ledger — it’s a temporary report you just created. But you can still ask questions about it.
- In SQL, a subquery inside the `FROM` clause is exactly that temporary report. It’s called a **derived table** (or inline view). You wrap a `SELECT` statement in parentheses, give it a name, and then treat it like any other table in the outer query.

### 💼 Professional Context
- As a QA, you use derived tables when:
  - You need to filter or group the results of an aggregation (e.g., “show me all users whose total spending exceeds ₹500”). You can’t do that with a simple `HAVING` on the raw orders table because you first need to aggregate, then filter on the aggregate.
  - You want to break a complex query into logical steps, making it easier to read and debug.
  - You want to combine data from multiple aggregates side by side (e.g., total orders and total spending per user, then join them).
- The derived table approach is powerful because it lets you think step‑by‑step: “First I’ll build this summary, then I’ll query that summary.”
- Basic pattern:
```sql
SELECT derived_table.column, ...
FROM (
    SELECT column1, AGGREGATE(...)
    FROM table
    GROUP BY column1
) AS derived_table
WHERE derived_table.aggregate_column > value;
```
- The inner query runs first, producing a temporary table (the derived table). The outer query then uses that temporary table as its data source.

### 🧪 Try It Now (Using Your Practice Database)
- We’ll use the familiar users and orders tables.

#### 1. Show users whose total spending is above ₹500
```sql
SELECT spending.name, spending.total_spent
FROM (
    SELECT users.name, SUM(orders.amount) AS total_spent
    FROM users
    INNER JOIN orders ON users.id = orders.user_id
    GROUP BY users.name
) AS spending
WHERE spending.total_spent > 500;
```
- The inner query builds a temporary table `spending` with columns `name` and `total_spent`. The outer query then selects only the rows where `total_spent > 500`.

#### 2. Show products ordered by users who live in London
```sql
SELECT london_orders.product, london_orders.amount
FROM (
    SELECT orders.product, orders.amount
    FROM orders
    INNER JOIN users ON orders.user_id = users.id
    WHERE users.city = 'London'
) AS london_orders;
```
- Here the derived table `london_orders` filters all orders down to those belonging to London users. The outer query simply presents the result.

#### 3. Rank users by total spending (without window functions)
- You can compute an aggregate, then order it, using a derived table:
```sql
SELECT *
FROM (
    SELECT users.name, SUM(orders.amount) AS total_spent
    FROM users
    INNER JOIN orders ON users.id = orders.user_id
    GROUP BY users.name
) AS user_totals
ORDER BY user_totals.total_spent DESC;
```
- The outer query sorts the derived table. You can also add a `LIMIT` to find the top spender.

#### 4. Find users with above‑average total spending (nested derived tables)
- This uses a derived table for user totals and another for the overall average:
```sql
SELECT user_totals.name, user_totals.total_spent
FROM (
    SELECT users.name, SUM(orders.amount) AS total_spent
    FROM users
    INNER JOIN orders ON users.id = orders.user_id
    GROUP BY users.name
) AS user_totals
WHERE user_totals.total_spent > (
    SELECT AVG(total_spent)
    FROM (
        SELECT SUM(orders.amount) AS total_spent
        FROM orders
        GROUP BY user_id
    ) AS all_totals
);
```
- That’s advanced, but it shows how derived tables can be layered. For most test checks, a single derived table is enough.

### 📝 Explanation
- A subquery in the `FROM` clause is called a **derived table**. It’s a temporary table created by the inner `SELECT` and used by the outer query.
- The derived table **must be given an alias** (a name) so the outer query can refer to it.
- This technique lets you break down complex logic into two clear steps: first build a summary, then filter or sort that summary.
- It’s often used for aggregations that need further filtering (like “show me users with total sales > ₹500”), which can’t be done with a simple `WHERE` on the original table.
- As a QA, I use derived tables to create test datasets that mirror application dashboard queries, validate multi‑step business rules, and produce clean, readable test evidence.

