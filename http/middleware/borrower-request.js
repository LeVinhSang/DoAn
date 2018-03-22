const BorrowerFactory = require('../../src/borrow-book/borrower-factory');

let borrowerFactory   = new BorrowerFactory();

module.exports = (req, res, next) => {

    borrowerFactory.makeBorrower(req.body)
        .then( (borrower) => {
            borrower.setId(req.params.id);
            req.borrower = borrower;
            next();
        });
};
