require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "mosaik_db",
    "host": "127.0.0.1",
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "mosaik_db",
    "host": "127.0.0.1",
    "port": "8889",    
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "mosaik_db",
    "host": "127.0.0.1",
    "port": "8889",    
    "dialect": "mysql"
  }
}