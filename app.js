const express                 = require('express');
const bodyParser              = require('body-parser');
const knex                    = require('./database/knex-connection');
const router                  = require('./router/index');
const app                     = express();
const BookRepository          = require('./src/book/book-repository');
const BorrowerRepository      = require('./src/borrow-book/borrower-book-repository');
const Searcher                = require('./src/searching-service/searcher');
const BorrowerFactory         = require('./src/borrow-book/borrower-factory');


app.set('books.repo', new BookRepository(knex));
app.set('borrower.searcher', new Searcher(knex, new BorrowerFactory()));
app.set('borrowers.repo', new BorrowerRepository(knex));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);


app.listen(8080, () => {
    console.log('sever running');
});
