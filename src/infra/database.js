const pgp = require('pg-promise')();
const db = pgp({
    user: 'avnadmin',
    password: 'AVNS_cE-W8Cuu6Wj3M4IkN5G',
    host: 'pg-2878d2f1-jogo-web.h.aivencloud.com',
    port: 21143,
    database: 'defaultdb',
    ssl: {rejectUnauthorized: false}
})

module.exports = db;