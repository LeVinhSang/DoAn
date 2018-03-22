
exports.up = function(knex, Promise) {
    return knex.schema.createTable('borrow_books', function (table) {
        table.increments('id');
        table.integer('student_code').notNull();
        table.string('student_name').notNull();
        table.integer('phone');
        table.integer('book_id');
        table.date('date_borrow');
        table.date('date_return');
        table.date('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('borrow_books');
};
