const BorrowerBook = require('./borrower-book');
const BookProvider = require('../book/book-provider');
const BookFactory  = require('../book/book-factory');
const Borrower     = require('./borrower-book');

let bookProvider   = new BookProvider();
let bookFactory    = new BookFactory();

class BorrowerFactory {

    /**
     *
     * @param borrowerRaw
     * @return {PromiseLike | Promise}
     */
    makeBorrower(borrowerRaw) {
        let borrower = new BorrowerBook(borrowerRaw.student_code, borrowerRaw.student_name);
        borrower.setPhone(borrowerRaw.phone);
        return bookProvider.provide(borrowerRaw.book_id)
            .then( book => {
                borrower.setBook(book);
                return borrower;
            });

    }

    makeFromDB(bookRaw) {
        let borrower = new BorrowerBook(bookRaw.student_code, bookRaw.student_name);
        borrower.setId(bookRaw.id);
        borrower.setPhone(bookRaw.phone);
        let book = bookFactory.makeFromDB(bookRaw);
        book.setId(bookRaw.book_id);
        borrower.setBook(book);
        return borrower;
    }
}

module.exports = BorrowerFactory;
