require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "port":8889,
    "database": "mosaik_db",
    "host": "127.0.0.1",
    
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "mosaik_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "mosaik_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}