const router = require("express").Router();

const authRouter = require('../auth/auth-router');
const sessionRouter = require('../routes/sessionRoute');

router.use('/auth', authRouter);
router.use('/session', sessionRouter);

module.exports = router;