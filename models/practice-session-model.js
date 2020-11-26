const db = require('../config/db-config');

module.exports = {
    addSession
};

function addSession(data){

    return db('session')
        .insert(data);
}