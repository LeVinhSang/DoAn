
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('books').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('books').insert([
                {title: 'Dragon Ball ',author: 'Akira', images:'',amount: 10, genre: 'develop'}
            ]);
        });
};
