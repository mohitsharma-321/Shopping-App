# Social Media Sample Project


## Database Setup

```shell
$ mysql -u root
```

```mysql
create database cbshopdb;

create user cbshopuser identified with mysql_native_password by 'cbshoppass';

grant all privileges on cbshopdb.*  to cbshopuser;

flush privileges;
```

## Project Structure

```shell
src
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site
└── routes              # express middlewares (route wise)
```

## Business Logic 

### Users

1. **create users** 
    this will create a new user with a random username

### Products

1. **create product**
    this will create a new product, required fields are 
    - username (the author of this post)
    - title
    - body 

2. **show all product**
    list all existing posts, we should have following filtering support

    - filter by username
    - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD` 
