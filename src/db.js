const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	password: "David@220103",
	host: "localhost",
	port: 5432,
	database: "db_webnotes",
});

module.exports = pool;
