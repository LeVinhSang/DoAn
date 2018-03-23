
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('borrow_books').del()
        .then(function () {
            // Inserts seed entries
            return knex('borrow_books').insert([
                {id: 1, student_code: '1400618', student_name:'Sang', phone:'0189', book_id:1,
                    date_borrow: new Date(), deleted_at: '0'},
            ]);
        });
};
