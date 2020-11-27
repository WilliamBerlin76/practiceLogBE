const router = require("express").Router();

const authRouter = require('../auth/auth-router');
const sessionRouter = require('../routes/sessionRoute');
const restricted = require('../middleware/restricted-middleware');

router.use('/auth', authRouter);
router.use('/:user_id/session', restricted, sessionRouter);

module.exports = router;