const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_metered = pg.queryP_metered;
const pgQueryP_metered_readOnly = pg.queryP_metered_readOnly;
const pgQueryP_readOnly = pg.queryP_readOnly;
const pgQueryP_readOnly_wRetryIfEmpty = pg.queryP_readOnly_wRetryIfEmpty;
const SQL = require("./sql");
const sql_user_favorite_comments = SQL.sql_user_favorite_comments;

export const getUserFavoriteComments = (uid) => {
    let q = sql_user_favorite_comments
        .select(sql_user_favorite_comments.star()) //TODO get comment content
        .from(sql_user_favorite_comments)
        .where(sql_user_favorite_comments.uid.equals(uid));
}

export const addUserFavoriteComment = () => {
    let q;
}

export const removeUserFavoriteComment = () => {
    let q;
}