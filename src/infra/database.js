<<<<<<< HEAD
const pgp = require('pg-promise')();
const db = pgp({
    user: 'avnadmin',
    password: 'AVNS_cE-W8Cuu6Wj3M4IkN5G',
    host: 'pg-2878d2f1-jogo-web.h.aivencloud.com',
    port: 21143,
    database: 'defaultdb',
    ssl: {rejectUnauthorized: false}
})

=======
const pgp = require('pg-promise')();
const db = pgp({
    user: 'avnadmin',
    password: 'AVNS_cE-W8Cuu6Wj3M4IkN5G',
    host: 'pg-2878d2f1-jogo-web.h.aivencloud.com',
    port: 21143,
    database: 'defaultdb',
    ssl: {rejectUnauthorized: false}
})

>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
module.exports = db;