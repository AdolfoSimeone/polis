const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_readOnly = pg.queryP_readOnly;
const SQL = require("./sql");
const sql_user_stats = SQL.sql_user_stats;
const sql_user_badges = SQL.sql_user_badges;
const sql_user_actions = SQL.sql_user_actions;

//check if the user has a profile record
const userHasProfile = async (uid) => {
    //TODO redo scrapped query
    return true;
}

export const getUserProfile = (uid) => {
    let q; //TODO make query with various tables joined together if possible
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
//TODO redo query to insert initial values to other stats & badges tables
export const saveUserProfile = async (userProfile) => {
    let doUpdate = await userHasProfile(userProfile.uid);
    if (doUpdate){
        let updateQuery;
        try {
            let rows = await pgQueryP_readOnly(updateQuery.toString());
            return rows;
        }
        catch (e){
            //TODO throw again?
            console.log(e);
            return [];
        }
    }
    else {
        let insertQuery;
        try {
            let rows = await pgQueryP_readOnly(insertQuery.toString());
            return rows;
        }
        catch (e){
            //TODO throw again?
            console.log(e);
            return [];
        }
    }
}