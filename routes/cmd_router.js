/**
 * @fileoverview routes/cmd_router.js
 */

const router = require('express').Router();
const CMD_CNTLR = require('@/application/cmd/cmd_cntlr');

router.route('/')
    .post(CMD_CNTLR.addCmd);

module.exports = router;
