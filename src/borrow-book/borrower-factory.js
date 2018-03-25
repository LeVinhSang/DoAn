const BorrowerBook = require('./borrower-book');
const BookProvider = require('../book/book-provider');
const BookFactory  = require('../book/book-factory');

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
        borrower.setDateReturn(borrowerRaw.date_return);
        borrower.setDateBorrow(borrowerRaw.date_return);
        return bookProvider.provide(borrowerRaw.book_id)
            .then( book => {
                borrower.setBook(book);
                return borrower;
            });

    }

    makeFromDB(borrowerRaw) {
        let borrower = new BorrowerBook(borrowerRaw.student_code, borrowerRaw.student_name);
        borrower.setId(borrowerRaw.id);
        borrower.setPhone(borrowerRaw.phone);
        borrower.setDateBorrow(borrowerRaw.date_borrow);
        borrower.setDateReturn(borrowerRaw.date_return);
        let book = bookFactory.makeFromDB(borrowerRaw);
        book.setId(borrowerRaw.book_id);
        borrower.setBook(book);
        return borrower;
    }
}

module.exports = BorrowerFactory;
