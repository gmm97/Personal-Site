## Introduction

Production SQL databases such as PostgreSQL (SQL), MongoDB (NoSQL), Oracle Database (SQL) and many others form a core part of a web developer's toolkit. When a front-end developer creates a website, a _backend_ is required for processing the request and returning a response. Often, for tasks such as user authentication, handling product listings and for pretty much everything where we need to _persist_ or store data in some form, we open a connection from our backend server to our production database and run _queries_ on a database table in some _query language_. But how should we structure those databases to ensure we follow the DRY paradigm? How do we decide which data to keep in separate tables and which data to store together? Can we somehow structure our tables to make our queries faster, if we know the exact data we are likely to be querying ahead of time? In the course of this project, I take a look at some of the technical aspects of database structure and performance while trying to recreate (a simplified version of) the Instagram database.

## Details

You can access the entire report [here](https://drive.google.com/file/d/1plemUPJPSh_ETvzfvrSNX_aHWOS-3XR8/view?usp=sharing). Feel free to drop me a message if you have any questions!

- ### Scenario & Introduction

  1. How do we go about designing a complex database relationship diagram like the one [here](https://dbdiagram.io/d/604740d2fcdcb6230b233e49)?

  2. How should we implement referential integrity constraints on database fields?

  3. How (and when) should we use denormalization to improve query performance?

  4. Splitting of responsibilty: Client-side, Server-side or Database validation?

  5. How to setup and apply migrations to a production database?

- ### Database Indexing & Query Planning

  1.  How does database indexing work? What goes on behind the scenes when we create a primary or secondary index using SQL?

  2.  How does the PostgreSQL planner perform query planning?

  3.  What are single-level and multi-level indexes? How do we use data structures such as B-Trees to reduce the number of blocks we need to read from a file system?

  4.  What are covering indexes? How can we use them to further improve performance?

  5.  Indexes may not be used, depending on the query. How then does PostgreSQL choose whether to use our indexes? What kinds of scans are there anyways?

  6.  What are heap only tuples (HOT) and how do they improve performance when we want to update data in our table?

## My Experience

My first experience in working with databases came about when I started using NodeJS to interact with them through npm libraries like Mongodb and Mongoose. These libraries are extremely useful for getting developers up and running with databases, as establishing a connection from the backend server and querying for data becomes a trivial task. There is still some schema planning involved but the complexity of indexing is well hidden - so well, in fact, that you don't need to worry about it at all unless you're working directly with a production database! It was only in my experience at Shopee where I got the chance to use [Druid](https://druid.apache.org/docs/latest/querying/sql.html) to interact with massive data warehouses and run actual SQL queries on a production database. Dealing with subjects such as _sharding_, _partitioning_ and in-memory caches such as _Redis_ as part of that experience opened my eyes to the degree of customizability we have in setting up our own SQL database! This report allowed me the chance to get up to speed with some of the hairier parts of databases and explore PostgreSQL, so feel free to take a look :)
