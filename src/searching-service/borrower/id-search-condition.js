class IdSearchCondition {

    constructor(borrowerId) {
        this.borrowerId = borrowerId;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where({'borrow_books.deleted_at': 0, 'borrow_books.id': this.borrowerId})
    }
}

module.exports = IdSearchCondition;
