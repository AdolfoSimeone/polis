const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_readOnly = pg.queryP_readOnly;
const SQL = require("./sql");
const sql_quizzes = SQL.sql_quizzes;
const sql_quiz_options = SQL.sql_quiz_options;

export const getCategories = async () => {
    let q = sql_quizzes
        .select(sql_quizzes.star())
        .from(sql_quizzes)
        .where(sql_quizzes.rid.equals(rid));
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