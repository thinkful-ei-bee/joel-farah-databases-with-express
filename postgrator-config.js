require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "host": process.env.MIGRATION_DB_HOST,
  "port": process.env.MIGRATION_DB_PORT,
  "database": process.env.MIGRATION_DB_NAME,
  "username": process.env.MIGRATION_DB_USER,
  "password": process.env.MIGRATION_DB_PASS
}

// MIGRATION_DB_HOST="localhost"
// MIGRATION_DB_PORT="5432"
// MIGRATION_DB_NAME="blogful"
// MIGRATION_DB_USER="dunder-mifflin"
// MIGRATION_DB_PAS="kerka97301"