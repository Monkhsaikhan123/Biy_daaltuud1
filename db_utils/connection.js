const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host:"localhost",
    user:"root",
    database:"bat",
    password:"Lovemomdadsister3",
}).promise()


module.exports = pool