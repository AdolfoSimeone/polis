const pg = require("../db/pg-query");
const pgQuery = pg.query;
const pgQuery_readOnly = pg.query_readOnly;
const pgQueryP = pg.queryP;
const pgQueryP_metered = pg.queryP_metered;
const pgQueryP_metered_readOnly = pg.queryP_metered_readOnly;
const pgQueryP_readOnly = pg.queryP_readOnly;
const pgQueryP_readOnly_wRetryIfEmpty = pg.queryP_readOnly_wRetryIfEmpty;
const SQL = require("../db/sql");

const handle_GET_userScore = async (req, res) => {

}

const handle_POST_viewInfo = async (req, res) => {

}

const handle_GET_info = async (req, res) => {

}

module.exports = {
    handle_GET_userScore,
    handle_POST_viewInfo,
    handle_GET_info
}