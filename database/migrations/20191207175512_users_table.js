
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('users', tbl => {
        tbl.uuid('id')
            .primary()
            .unique()
            .notNullable()
            .defaultTo(knex.raw('uuid_generate_v4()'));

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
