const Book = require('../book/book');

class BorrowerBook {

    /**
     *
     * @param {int} student_code
     * @param {string} student_name
     */
    constructor(student_code, student_name) {
        this.student_code = student_code;
        this.student_name = student_name;
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
     * @return {int}
     */
    getStudent_code() {
        return this.student_code;
    }

    /**
     *
     * @return {string}
     */
    getStudent_name() {
        return this.student_name;
    }

    /**
     *
     * @return {int}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @return {Book}
     */
    getBook() {
        return this.book;
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
     * @param {int} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }


    /**
     *
     * @param {Book} book
     */
    setBook(book) {
        this.book = book;
    }
}

module.exports = BorrowerBook;
