const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_metered = pg.queryP_metered;
const pgQueryP_metered_readOnly = pg.queryP_metered_readOnly;
const pgQueryP_readOnly = pg.queryP_readOnly;
const pgQueryP_readOnly_wRetryIfEmpty = pg.queryP_readOnly_wRetryIfEmpty;
const SQL = require("./sql");
const sql_quizzes = SQL.sql_quizzes;
const sql_quiz_options = SQL.sql_quiz_options;

//get a quiz at random for a given info resource
export const getQuizForResource = async (rid) => {
    let q = sql_quizzes
        .select(sql_quizzes.star())
        .from(sql_quizzes)
        .where(sql_quizzes.rid.equals(rid));
    try {
        let rows = await pgQueryP_readOnly(q.toString());
    }
    catch (e){

    }
    
}

//get options for a given quiz
export const getQuizOptions = async (qid) => {
    let q = sql_quiz_options
        .select(sql_quiz_options.star())
        .where(sql_quiz_options.qid.equals(qid));
    try{
        let rows = await pgQueryP_readOnly(q.toString());
    }
    catch (e){

    }
}

//validate if the submitted option is correct
export const validateQuizSelectedOption = (qid, opid) => {
    let q = sql_quiz_options
        .select(sql_quiz_options.is_correct)
        .where(sql_quiz_options.qid.equals(qid).and(sql_quiz_options.opid.equals(opid)));
    try {
        let result = await pgQueryP_readOnly(q.toString());
    }
    catch (e){

    }
    
}