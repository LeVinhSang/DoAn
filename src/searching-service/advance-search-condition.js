class AdvancedSearchCondition {

    /**
     *
     * @param {string} student_code
     * @param {string} student_name
     */
    constructor (student_code, student_name){
        this.student_code = student_code;
        this.student_name = student_name;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where('student_code', 'like', '%' + this.student_code + '%')
            .where('student_name', 'like', '%' + this.student_name + '%')
            .where({'borrow_books.deleted_at': null});
    }
}

module.exports = AdvancedSearchCondition;
