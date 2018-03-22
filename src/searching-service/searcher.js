const Connection  = require('../../database/knex-connection');
const BorrowFactory = require('../borrow-book/borrower-factory');

class Searcher {

    /**
     *
     * @param {Connection} connection
     * @param {BorrowerFactory} factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    /**
     *
     * @param condition
     * @return Book[]
     */
     search(condition) {
        let factory  = this.factory;
        let sqlQuery = this.connection
            .select('borrow_books.id', 'borrow_books.student_code', 'borrow_books.student_name',
                'borrow_books.book_id', 'borrow_books.date_borrow', 'borrow_books.date_return', 'books.title',
                'books.author', 'books.images', 'books.genre')
            .from('borrow_books')
            .leftJoin('books', function () {
                this.on('book_id', '=', 'books.id')
            });

        condition.describe(sqlQuery);
        return sqlQuery.then(results => results.map(element => factory.makeFromDB(element)));
    }
}

module.exports = Searcher;
