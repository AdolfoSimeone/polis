const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_readOnly = pg.queryP_readOnly;
const SQL = require("./sql");
const sql_additional_comment_info = SQL.sql_additional_comment_info;

export const getAdditionalCommentInfo = () => {
    let q = sql_additional_comment_info
        .select(sql_additional_comment_info.star())
        .from(sql_additional_comment_info)
        .where();
    try {
        let rows = await pgQueryP_readOnly(q.toString());
        return rows;
    }
    catch (e){
        //TODO throw again?
        console.log(e);
        return [];
    }
}

export const saveAdditionalCommentInfo = () => {
    let q; //TODO assemble proper query
    try {
        let rows = await pgQueryP_readOnly(q.toString());
        return rows;
    }
    catch (e){
        //TODO throw again?
        console.log(e);
        return [];
    }
}

export const deleteAdditionalCommentInfo = () => {
    let q; //TODO assemble proper query
    try {
        let rows = await pgQueryP_readOnly(q.toString());
        return rows;
    }
    catch (e){
        //TODO throw again?
        console.log(e);
        return [];
    }
}