const BorrowerBook = require('./borrower-book');

class BorrowerBookRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {BorrowerBook} borrower
     * @return {Promise <promise>}
     */
    add(borrower) {
        return this.connection('borrow_books').insert({
            student_code: borrower.getStudent_code(),
            student_name: borrower.getStudent_name(),
            phone: borrower.getPhone(),
            book_id: borrower.getBook().getId(),
            date_borrow: new Date(),
            deleted_at: 0,
            date_return: 0
        });
    }

    /**
     *
     * @param {BorrowerBook} borrower
     * @return {Promise <promise>}
     */
    edit(borrower) {
        return this.connection('borrow_books').update({
            student_code: borrower.getStudent_code(),
            student_name: borrower.getStudent_name(),
            phone: borrower.getPhone(),
            book_id: borrower.getBook().getId() ? borrower.getBook().getId() : null,
            date_borrow: borrower.getDateBorrow(),
            date_return: borrower.getDateReturn()
        }).where({
            id: borrower.getId(),
            deleted_at: 0
        })
    }

    /**
     *
     * @param {int} id
     * @return {Promise <promise>}
     */
    remove(id) {
        return this.connection('borrow_books').update({
            deleted_at: new Date()
        }).where({
            id: id
        });
    }
}

module.exports = BorrowerBookRepository;
