const BookController                   = require('../http/controller/book-controller');
const express                          = require('express');
const router                           = express.Router();
const bookRequest                      = require('../http/middleware/book-request');
const BorrowerController               = require('../http/controller/borrow-book-controller');
const borrowerRequest                  = require('../http/middleware/borrower-request');
const UndeletedSearchConditionBorrower = require('../src/searching-service/borrower/undeleted-search-condition');
const KeywordSearchConditionBorrower   = require('../src/searching-service/borrower/keyword-search-condition');
const AdvanceSearchConditionBorrower   = require('../src/searching-service/borrower/advance-search-condition');
const TitleSeachCondition              = require('../src/searching-service/book/title-search-condition');
const UndeletedSearchConditionBook     = require('../src/searching-service/book/undeleted-search-condition');
const DetailSearchConditionBorrower    = require('../src/searching-service/borrower/detail-search-condition');
const DetailSearchConditionBook        = require('../src/searching-service/book/detail-search-condition');
const IdSearchCondition                = require('../src/searching-service/borrower/id-search-condition');
const checkNullDateReturn              = require('../http/middleware/check-null-date-return');




let bookController           = new BookController();
let borrowerController       = new BorrowerController();

router.post('/book', bookRequest, bookController.createBook);

router.post('/edit/book/:id', bookRequest, bookController.editBook);

router.delete('/book/:id',  bookController.removeBook);



router.get('/', (req, res) => {
    res.render('home.njk');
});


router.get('/book', (req, res,next) => {
    req.condition = new TitleSeachCondition(req.query.title);
    next();
}, bookController.search);

router.get('/books', (req, res, next) => {
    req.condition = new UndeletedSearchConditionBook();
    next();
}, bookController.search);

router.get('/book/:id', (req, res, next) => {
    req.condition = new DetailSearchConditionBook(req.params.id);
    next();
}, bookController.search);

/********************************************************************************************/

router.post('/edit/borrower/:id',borrowerRequest, borrowerController.editBorrower);

router.post('/borrower', checkNullDateReturn, borrowerRequest, borrowerController.createBorrower);

router.get('/delete/borrower/:id', borrowerController.removeBorrower);

router.get('/borrowers', (req, res, next) => {
    req.condition = new UndeletedSearchConditionBorrower();
    next();
}, borrowerController.search);

router.get('/api/borrower/search-basic', (req, res, next) => {
    req.condition = new KeywordSearchConditionBorrower(req.query.keyword);
    next();
}, borrowerController.search);

router.get('/borrower/search-advance', (req, res, next) => {
    req.condition = new AdvanceSearchConditionBorrower(req.query.student_code, req.query.student_name, req.query.book);
    next();
}, borrowerController.search);

router.get('/borrower/:id', (req, res, next) => {
    req.condition = new IdSearchCondition(req.params.id);
    next();
}, borrowerController.renderEditBorrower)

module.exports = router;
