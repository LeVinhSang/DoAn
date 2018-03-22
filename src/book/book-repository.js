const Book = require('./book');

class BookRepository {
    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Book} book
     * @return {Promise}
     */
    add(book) {
        return this.connection('books').insert({
            title: book.getTitle(),
            author: book.getAuthor(),
            images: book.getImages(),
            genre: book.getGenre()
        });
    }

    /**
     *
     * @param {Book} book
     * @return {Promise}
     */
    edit(book) {
        return this.connection('books').update({
            title: book.getTitle(),
            author: book.getAuthor(),
            images: book.getImages(),
            genre: book.getGenre()
        }).where({
            id: book.getId(),
            deleted_at: null
        });
    }

    /**
     *
     * @param {int} id
     * @return {Promise}
     */
    remove(id) {
        return this.connection('books').update({
            deleted_at: new Date().toLocaleString()
        }).where({
            id: id
        });
    }
}

module.exports = BookRepository;
