class KeywordSearchCondition {

    /**
     *
     * @param {string} keyword
     */
    constructor (keyword){
        this.keyword = keyword;
    }

    /**
     *
     * @param sqlQuery
     * @return {Borrower[]}
     */
    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery
            .where(function () {
                this.where('student_code', 'like', '%' + keyword + '%')
                    .orWhere('student_name', 'like', '%' + keyword + '%')
                    .orWhere('books.title', 'like', '%' + keyword + '%')
            }).where({'borrow_books.deleted_at': null});
    }
}

module.exports = KeywordSearchCondition;
