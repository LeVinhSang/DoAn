const BookFactory = require('./book-factory');
const Book        = require('./book');
const connection  = require('../../database/knex-connection');

let bookFactory   = new BookFactory();

class BookProvider {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {int} id
     * @return {PromiseLike |Promise}
     */
    provide(id) {
        return connection.select()
            .from('books')
            .where({id : id, deleted_at: null})
            .then(results => {

                if(results.length === 0) {
                    let book = new Book('');
                    book.setId(id);
                    return book;
                }
                return bookFactory.makeFromDB(results[0]);
            });
    }
}

module.exports = BookProvider;
