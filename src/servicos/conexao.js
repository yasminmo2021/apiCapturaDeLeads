import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Suporte99',
    database : 'banco_de_dados'
});

export default pool;