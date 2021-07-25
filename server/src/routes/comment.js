module.exports = (app, helpers) => {
    const {
        timeout,
        moveToBody,
        authOptional,
        auth,
        need,
        want,
        getConversationIdFetchZid,
        assignToP,
        assignToPCustom,
        getArrayOfInt,
        getBool,
        getStringLimitLength,
        haltOnTimeout,
        handle_GET_nextComment
    } = helpers;

    app.get("/api/v3/nextComment",
        timeout(15000),
        moveToBody,
        authOptional(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        resolve_pidThing('not_voted_by_pid', assignToP, "get:nextComment"),
        want('without', getArrayOfInt, assignToP),
        want('include_social', getBool, assignToP),
        want('lang', getStringLimitLength(1,10), assignToP), // preferred language of nextComment
        haltOnTimeout,
        handle_GET_nextComment);

    app.get("/api/v3/comments",
        moveToBody,
        authOptional(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('report_id', getReportIdFetchRid, assignToPCustom('rid')), // if you want to get report-specific info
        want('tids', getArrayOfInt, assignToP),
        want('moderation', getBool, assignToP),
        want('mod', getInt, assignToP),
        want('modIn', getBool, assignToP), // set this to true if you want to see the comments that are ptpt-visible given the current "strict mod" setting, or false for ptpt-invisible comments.
        want('mod_gt', getInt, assignToP),
        want('include_social', getBool, assignToP),
        want('include_demographics', getBool, assignToP),
        //    need('lastServerToken', _.identity, assignToP),
        want('include_voting_patterns', getBool, assignToP, false),
        resolve_pidThing('not_voted_by_pid', assignToP, "get:comments:not_voted_by_pid"),
        resolve_pidThing('pid', assignToP, "get:comments:pid"),
        handle_GET_comments);

    // TODO probably need to add a retry mechanism like on joinConversation to handle possibility of duplicate tid race-condition exception
    app.post("/api/v3/comments",
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('txt', getOptionalStringLimitLength(997), assignToP),
        want('vote', getIntInRange(-1, 1), assignToP),
        want("twitter_tweet_id", getStringLimitLength(999), assignToP),
        want("quote_twitter_screen_name", getStringLimitLength(999), assignToP),
        want("quote_txt", getStringLimitLength(999), assignToP),
        want("quote_src_url", getUrlLimitLength(999), assignToP),
        want("anon", getBool, assignToP),
        want("is_seed", getBool, assignToP),
        want('xid', getStringLimitLength(1, 999), assignToP),
        resolve_pidThing('pid', assignToP, "post:comments"),
        handle_POST_comments);

    app.post("/api/v3/comments/slack",
        auth(assignToP),
        want('slack_team', getOptionalStringLimitLength(99), assignToP),
        want('slack_user_id', getOptionalStringLimitLength(99), assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('txt', getOptionalStringLimitLength(997), assignToP),
        want('vote', getIntInRange(-1, 1), assignToP, -1), // default to agree
        want("twitter_tweet_id", getStringLimitLength(999), assignToP),
        want("quote_twitter_screen_name", getStringLimitLength(999), assignToP),
        want("quote_txt", getStringLimitLength(999), assignToP),
        want("quote_src_url", getUrlLimitLength(999), assignToP),
        want("anon", getBool, assignToP),
        want("is_seed", getBool, assignToP),
        resolve_pidThing('pid', assignToP, "post:comments"),
        handle_POST_comments_slack);

    app.put('/api/v3/comments',
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        need('tid', getInt, assignToP),
        need('active', getBool, assignToP),
        need('mod', getInt, assignToP),
        need('is_meta', getBool, assignToP),
        need('velocity', getNumberInRange(0, 1), assignToP),
        handle_PUT_comments);

    app.get("/api/v3/comments/translations",
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('tid', getInt, assignToP),
        want('lang', getStringLimitLength(1,10), assignToP),
        handle_GET_comments_translations);    
};