const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_metered = pg.queryP_metered;
const pgQueryP_metered_readOnly = pg.queryP_metered_readOnly;
const pgQueryP_readOnly = pg.queryP_readOnly;
const pgQueryP_readOnly_wRetryIfEmpty = pg.queryP_readOnly_wRetryIfEmpty;
const SQL = require("./sql");
const sql_additional_comment_info = SQL.sql_additional_comment_info;

export const getAdditionalCommentInfo = () => {
    let q = sql_additional_comment_info
        .select(sql_additional_comment_info.star())
        .from(sql_additional_comment_info)
        .where();
}

export const saveAdditionalCommentInfo = () => {
    let q;
}

export const deleteAdditionalCommentInfo = () => {
    let q;
}