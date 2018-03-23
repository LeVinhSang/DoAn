class KeywordSearchCondition {

    /**
     *
     * @param {string} title
     */
    constructor (title){
        this.title = title;
    }

    /**
     *
     * @param sqlQuery
     * @return {Borrower[]}
     */
    describe(sqlQuery) {
        let title = this.title;
        return sqlQuery
            .where(function () {
                this.where('title', 'like', '%' + title + '%')
                    .orWhere('author', 'like', '%' + title + '%')
            }).where({'books.deleted_at': 0});
    }
}

module.exports = KeywordSearchCondition;
