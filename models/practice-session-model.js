const db = require('../config/db-config');

module.exports = {
    addSession,
    getUserSessions
};

function addSession(data){
    return db('session')
            .insert(data);
}

function getUserSessions(user_id){
    return db('session')
            .where({ user_id });
}