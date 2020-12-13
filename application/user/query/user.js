/**
 * @fileoverview application/user/query/user.js
 */

/* ================================================== [INSERT] ================================================== */

/* ================================================== [SELECT] ================================================== */

const select1 = `
    SELECT
        IDX AS idx,
        PW AS orgnPw,
        SHA2(:pw, 224) AS inptPw
    FROM
        USER
    WHERE
        EMAIL = :email
`;

/* ================================================== [UPDATE] ================================================== */

/* ================================================== [DELETE] ================================================== */

module.exports = {
    select1
};
