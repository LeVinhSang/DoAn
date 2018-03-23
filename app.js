const express                 = require('express');
const bodyParser              = require('body-parser');
const knex                    = require('./database/knex-connection');
const router                  = require('./router/index');
const app                     = express();
const BookRepository          = require('./src/book/book-repository');
const BorrowerRepository      = require('./src/borrow-book/borrower-book-repository');
const SearcherBorrowers       = require('./src/searching-service/borrower/searcher');
const BorrowerFactory         = require('./src/borrow-book/borrower-factory');
const SearcherBook            = require('./src/searching-service/book/searcher');


app.set('books.repo', new BookRepository(knex));
app.set('borrower.searcher', new SearcherBorrowers(knex, new BorrowerFactory()));
app.set('books.searcher', new SearcherBook(knex));
app.set('borrowers.repo', new BorrowerRepository(knex));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);


app.listen(8080, () => {
    console.log('sever running');
});
