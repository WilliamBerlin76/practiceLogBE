const { v4: uuidv4 } = require('uuid');

exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.uuid('id')
            .primary()
            .unique()
            .notNullable()
            .defaultTo(uuidv4());

        tbl.string('username', 128)
            .unique()
            .notNullable();
        tbl.string('password', 128).notNullable();
        tbl.string('email', 320)
            .unique()
            .notNullable();

        tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
