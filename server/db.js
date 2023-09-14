const { Pool } = require('pg');

// Create a new pool instance with your database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // e.g., 'localhost'
  database: 'hospital',
  password: 'Sarita222@',
  port: 5432, // Default PostgreSQL port
});

// Export the pool for use in your application
module.exports = pool;
