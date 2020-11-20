
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('class_students', tbl => {
        tbl.uuid('id')
            .primary()
            .unique()
            .notNullable()
            .defaultTo(knex.raw('uuid_generate_v4()'));

        tbl.uuid('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        tbl.uuid('class_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('classroom')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('class_students');
};
