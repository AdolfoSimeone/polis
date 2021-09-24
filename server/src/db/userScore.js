const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_metered = pg.queryP_metered;
const pgQueryP_metered_readOnly = pg.queryP_metered_readOnly;
const pgQueryP_readOnly = pg.queryP_readOnly;
const pgQueryP_readOnly_wRetryIfEmpty = pg.queryP_readOnly_wRetryIfEmpty;
const SQL = require("./sql");
const sql_user_stats = SQL.sql_user_stats;

//check if user has records in the score table
const userHasScore = async (uid) => {
    const q = sql_user_stats
        .select(sql_user_stats.uid)
        .from(sql_user_stats)
        .where(sql_user_stats.uid.equals(uid));
    try {
        let rows = await pgQueryP_readOnly(q.toString());
    }
    catch (e){

    }
}

//

//get user score
export const getUserScore = async (uid) => {
    
    const q = sql_user_stats
        .select(sql_user_stats.star())
        .from(sql_user_stats)
        .where(sql_user_stats.uid.equals(uid));
    try{
        let rows = await pgQueryP_readOnly(q.toString());
    }
    catch (e) {

    }
}

//upsert user score
export const saveUserScore = async (userScore) => {
    try{
        let doUpdate = await userHasScore(userScore.uid);
        let q;
        if (doUpdate){
            q = sql_user_stats.update(userScore).where(sql_user_stats.uid.equals(userScore.uid));
        }
        else {
            q = sql_user_stats.insert(userScore);
        }
        try{
            let result = await pgQueryP(q.toString());
        }
        catch (e){
            
        }
    }
    catch (e) {
        console.log(e);
    }
}

