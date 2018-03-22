const BookController           = require('../http/controller/book-controller');
const express                  = require('express');
const router                   = express.Router();
const bookRequest              = require('../http/middleware/book-request');
const BorrowerController       = require('../http/controller/borrow-book-controller');
const borrowerRequest          = require('../http/middleware/borrower-request');
const UndeletedSearchCondition = require('../src/searching-service/undeleted-search-condition');
const KeywordSearchCondition   = require('../src/searching-service/keyword-search-condition');
const AdvanceSearchCondition   = require('../src/searching-service/advance-search-condition');


let bookController           = new BookController();
let borrowerController       = new BorrowerController();

router.post('/book', bookRequest, bookController.createBook);
router.put('/book/:id', bookRequest, bookController.editBook);
router.delete('/book/:id',  bookController.removeBook);

router.put('/borrower/:id', borrowerRequest, borrowerController.editBorrower);
router.post('/borrower', borrowerRequest, borrowerController.createBorrower);
router.delete('/borrower/:id', borrowerController.removeBorrower);

router.get('/borrowers', (req, res, next) => {
    req.condition = new UndeletedSearchCondition();
    next();
}, borrowerController.search);

router.get('/search-basic', (req, res, next) => {
    req.condition = new KeywordSearchCondition(req.query.keyword);
    next();
}, borrowerController.search);

router.get('/search-advance', (req, res, next) => {
    req.condition = new AdvanceSearchCondition(req.query.student_code, req.query.student_name, req.query.book);
    next();
}, borrowerController.search);

module.exports = router;
