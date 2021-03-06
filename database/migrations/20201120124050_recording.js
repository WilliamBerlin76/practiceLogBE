
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('recording', tbl => {
        tbl.uuid('id')
            .primary()
            .notNullable()
            .unique()
            .defaultTo(knex.raw('uuid_generate_v4()'));
        
        tbl.uuid('session_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('session')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        tbl.string('url')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recording');
};
