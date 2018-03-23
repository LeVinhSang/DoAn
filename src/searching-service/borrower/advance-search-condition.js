class AdvancedSearchCondition {

    /**
     *
     * @param {string} student_code
     * @param {string} student_name
     * @param {string} book
     */
    constructor (student_code, student_name,book){
        this.student_code = student_code;
        this.student_name = student_name;
        this.book         = book;
    }

    /**
     *
     * @param sqlQuery
     * @return {BorrowerBook[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where('student_code', 'like', '%' + this.student_code + '%')
            .where('student_name', 'like', '%' + this.student_name + '%')
            .where('title', 'like', '%' + this.book + '%')
            .where({'borrow_books.deleted_at': 0});
    }
}

module.exports = AdvancedSearchCondition;
