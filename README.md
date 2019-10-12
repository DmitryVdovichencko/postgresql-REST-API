# REST API tutorial for NodeJS PostgreSQL 

[![Build Status](https://travis-ci.org/DmitryVdovichencko/postgresql-REST-API.svg?branch=master)](https://travis-ci.org/DmitryVdovichencko/postgresql-REST-API)  [![Maintainability](https://api.codeclimate.com/v1/badges/a4651aef30c68193a87f/maintainability)](https://codeclimate.com/github/DmitryVdovichencko/postgresql-REST-API/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/a4651aef30c68193a87f/test_coverage)](https://codeclimate.com/github/DmitryVdovichencko/postgresql-REST-API/test_coverage)

## Setting up PostgreSQL on Ubuntu

[How to install PostgreSQL guide from DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

Here we install postgresql on ubuntu:

```bash
sudo apt install postgresql postgresql-contrib
```

### Quick look on PostgreSQL:

Now we have PostgreSQL installed! 

So we have postgres database and postgres superuser profile by default.

Now we can logging into postgres session:

```bash
sudo -i -u postgres
```

and run PostgreSQL command line:

```bash
postgres@Ubuntu-develop:~$ psql
```
Then we can create user with encrypted password and grant him permissions to create databases & new roles, like in this pattern: 

```bash 
postgres=# CREATE USER username WITH ENCRYPTED PASSWORD 'your password';
postgres=# ALTER ROLE admin_api WITH CREATEDB CREATEROLE;
```

After creating new user we can create new database with new user as owner

```bash 
postgres=> CREATE DATABASE databasename  OWNER username;
```
Now we need to exit from this session:

```bash
\q
exit
```

Once we created new db, we can connect to new session:

```bash
psql -U user_name -d database_name -h 127.0.0.1 -W
```

For the further connection read [Guide to write pg_hba.conf in Russian and in Eng as well](https://postgrespro.ru/docs/postgresql/9.4/auth-pg-hba-conf)

At this point we've installed & run `postgresql database`, so we can test it:


## Creating express server
[express](https://www.npmjs.com/package/express) - web server framework
[pg](https://www.npmjs.com/package/pg) - PostgreSQL client for Node
[dotenv](https://www.npmjs.com/package/dotenv) - allows you to load environment variables from .env file
[cors](https://www.npmjs.com/package/cors) - enable CORS
We'll also install nodemon for development, which automatically restarts the server every time you make a change. 
