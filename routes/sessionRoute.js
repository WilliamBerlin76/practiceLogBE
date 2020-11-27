const router = require("express").Router();
const Session = require('../models/practice-session-model');

router.post('/add', (req, res) => {
    const data = req.body;
    Session.addSession(data)
    .then(session => {
        res.status(201).json({ message: "added session", session: data });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'the server failed to add the session' });
    });
});

router.get('/:user_id', (req, res) => {
    const user_id = req.params.user_id;

    Session.getUserSessions(user_id)
        .then(sessions => {
            res.status(200).json(sessions)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'the server failed to get the sessions' });
        })
})

module.exports = router;