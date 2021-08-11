const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_metered = pg.queryP_metered;
const pgQueryP_metered_readOnly = pg.queryP_metered_readOnly;
const pgQueryP_readOnly = pg.queryP_readOnly;
const pgQueryP_readOnly_wRetryIfEmpty = pg.queryP_readOnly_wRetryIfEmpty;
const SQL = require("./sql");
const sql_info_resources = SQL.sql_info_resources;
const sql_user_info_resources = SQL.sql_user_info_resources;

//get all available info resources, also indicate whether the user has viewed them or not
export const getAllInfoResources = (uid) => {
    let q = sql_info_resources
        .select(sql_info_resources.star())
        .from(sql_info_resources.leftJoin(sql_user_info_resources).on(sql_user_info_resources.rid.equals(sql_info_resources.rid)));
       
    try{
        let rows = await pgQueryP_readOnly(q.toString());
    }
    catch (e) {

    }
}