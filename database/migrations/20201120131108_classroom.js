
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('classroom', tbl => {
        tbl.uuid('id')
            .primary()
            .unique()
            .notNullable()
            .defaultTo(knex.raw('uuid_generate_v4()'));

        tbl.string('title')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('classroom');
};
