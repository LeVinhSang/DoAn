const Book = require('./book');

class BookFactory {

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    makeFromDB(bookRaw) {
        let book = new Book(bookRaw.title);
        book.setAuthor(bookRaw.author);
        book.setId(bookRaw.id);
        book.setImages(bookRaw.images);
        book.setGenre(bookRaw.genre);
        return book;
    }
}

module.exports = BookFactory;
