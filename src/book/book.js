class Book {
    /**
     *
     * @param {string} title
     */
    constructor(title) {
        this.title = title;
    }

    /**
     *
     * @return {int|*}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     *
     * @return {string}
     */
    getAuthor() {
        return this.author;
    }

    /**
     *
     * @return {string|*}
     */
    getImages() {
        return this.images;
    }

    /**
     *
     * @return {string|*}
     */
    getGenre() {
        return this.genre;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @param {string} author
     */
    setAuthor(author) {
        this.author = author;
    }

    /**
     *
     * @param {string} images
     */
    setImages(images) {
        this.images = images;
    }

    /**
     *
     * @param {string} genre
     */
    setGenre(genre) {
        this.genre = genre;
    }
}

module.exports = Book;