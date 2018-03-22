exports.up = function(knex, Promise) {
    return knex.schema.createTable('login', function (table) {
        table.string('name').primary();
        table.string('password').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('login');
};