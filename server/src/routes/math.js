module.exports = (app, helpers) => {
    const {
        handle_GET_math_pca,
        moveToBody,
        redirectIfHasZidButNoConversationId,
        getConversationIdFetchZid,
        assignToP,
        assignToPCustom,
        getInt,
        getStringLimitLength,
        handle_GET_math_pca2,
        getReportIdFetchRid,
        handle_GET_math_correlationMatrix,
        need,
        want,
        wantHeader
    } = helpers;
    app.get("/api/v3/math/pca",
        handle_GET_math_pca);

    app.get("/api/v3/math/pca2",
        moveToBody,
        redirectIfHasZidButNoConversationId, // TODO remove once
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('math_tick', getInt, assignToP),
        wantHeader('If-None-Match', getStringLimitLength(1000), assignToPCustom('ifNoneMatch')),
        handle_GET_math_pca2);

    app.get("/api/v3/math/correlationMatrix",
        moveToBody,
        need('report_id', getReportIdFetchRid, assignToPCustom('rid')),
        want('math_tick', getInt, assignToP, -1),
        handle_GET_math_correlationMatrix);
};