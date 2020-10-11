/**
 * @fileoverview config/mysql.js
 */

const mysql = require('mysql2');

const mysqlCnf = IS_PROD ? {
    host: 'mysql-8.0.20',
    user: 'postlude',
    password: 'dMm8Hcsvr7EShcFw'
} : {
    host: 'localhost',
    user: 'root',
    password: 'root'
};

const pool = mysql.createPool({
    ...mysqlCnf,
    database: 'mycmd',
    connectionLimit: 20,
    waitForConnections: true,
    queueLimit: 0,
    namedPlaceholders: true
    // debug: ['ComQueryPacket', 'RowDataPacket']
});

const promisePool = pool.promise();

/**
 * @description 커넥션 획득
 */
const getConn = async () => {
    try {
        const conn = await promisePool.getConnection();
        return conn;
    } catch (err) {
        console.error('[mysql] getConn - CONNECTION ERROR');
        throw err;
    }
};
exports.getConn = getConn;

/**
 * @description 커넥션 획득 테스트
 */
exports.testConn = async () => {
    let conn = null;
    try {
        conn = await getConn();
        console.log('- [MySQL] Test Connection - SUCCESS');
    } catch (err) {
        console.error('- [MySQL] Test Connection - FAIL');
        console.error(err);
    } finally {
        if (conn) {
            conn.release();
        }
    }
};
