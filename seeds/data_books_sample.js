
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('books').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('books').insert([
                {title: 'Dragon Ball ',author: 'Akira',
                    images:'https://lh3.googleusercontent.com/hE8fcOqXKnuU4ImxrVe9YT0461nkOsRVMIBTzXGhrS7B61R6XABi-48QbfNG9XPXBjA=h900-rw',
                    amount: 10, genre: 'develop', deleted_at: '0'}
            ]);
        });
};
