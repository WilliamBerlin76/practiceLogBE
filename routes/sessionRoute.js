const router = require("express").Router();
const Session = require('../models/practice-session-model');

router.post('/add', (req, res) => {
    const data = req.body;

    Session.addSession(data)
    .then(session => {
        res.status(201).json({ message: "added session", session: data })
    })
    .catch(err => {
        console.log(err);
    });
})

module.exports = router;