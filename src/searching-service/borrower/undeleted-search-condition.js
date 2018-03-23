class UndeletedSearchCondition {

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where({'borrow_books.deleted_at': 0})
    }
}

module.exports = UndeletedSearchCondition;
