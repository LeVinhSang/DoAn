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
     * @return {string|*}
     */
    getDateBorrow() {
        return this.date_borrow;
    }

    getDateReturn() {
        return this.date_return;
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

    /**
     *
     * @param {string} date_borrow
     */
    setDateBorrow(date_borrow) {
        this.date_borrow = date_borrow;
    }

    setDateReturn(date_return) {
        this.date_return = date_return;
    }
}

module.exports = BorrowerBook;
