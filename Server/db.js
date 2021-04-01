const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "123",
    host: "db",
    port: 5432,
    database: "web_l1"
});

module.exports = pool;