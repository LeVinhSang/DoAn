const Connection  = require('../../../database/knex-connection');

class Searcher {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param condition
     * @return Book[]
     */
     search(condition) {
        let sqlQuery = this.connection
            .select()
            .from('books')
        condition.describe(sqlQuery);
        return sqlQuery.then(results => results);
    }
}

module.exports = Searcher;
