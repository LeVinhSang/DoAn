const BookFactory = require('../../src/book/book-factory');

let bookFactory   = new BookFactory();

let bookRequest = (req, res, next) => {

    req.book = bookFactory.makeFromDB(req.body);
    req.book.setId(req.params.id);
    next();
};

module.exports = bookRequest;
