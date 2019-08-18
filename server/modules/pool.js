const pg = require('pg');
const Pool = pg.Pool;
const config ={
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('postgresql connected');  
})

pool.on('error', (err, client) => {
    console.log('error on idle client', err);
})

module.exports = pool; 