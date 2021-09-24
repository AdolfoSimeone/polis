const pg = require("./pg-query");
const pgQueryP = pg.queryP;
const pgQueryP_metered = pg.queryP_metered;
const pgQueryP_metered_readOnly = pg.queryP_metered_readOnly;
const pgQueryP_readOnly = pg.queryP_readOnly;
const pgQueryP_readOnly_wRetryIfEmpty = pg.queryP_readOnly_wRetryIfEmpty;
const SQL = require("./sql");

//check if the user has a profile record
const userHasProfile = async (uid) => {
    return true;
}

export const getUserProfile = (uid) => {

}

export const saveUserProfile = async (userProfile) => {
    let doUpdate = await userHasProfile(userProfile.uid);
    if (doUpdate){

    }
    else {

    }
}