
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : '166.62.10.29',
    database : 'db_aplusaudios',
    user     : 'aplusprodDB',
    password : 'aplusprodDB#@123@#',
    debug    :  false
});


module.exports = pool
