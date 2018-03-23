class DetailSearchCondition {

    /**
     *
     *
     * @param {int} id
     */
    constructor(id) {
        this.id = id;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    desribe(sqlQuery) {
        return sqlQuery.where({deleted_at: 0, id:this.id})
    }
}

module.exports = DetailSearchCondition;
