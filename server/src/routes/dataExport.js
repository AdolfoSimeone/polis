module.exports = (app, helpers) => {
    const {
        moveToBody,
        assignToP,
        getConversationIdFetchZid,
        assignToPCustom,
        getStringLimitLength,
        handle_GET_dataExport,
        handle_GET_dataExport_results,
        auth,
        need,
        want
    } = helpers;
    app.get("/api/v3/dataExport",
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        need('conversation_id', getStringLimitLength(1, 1000), assignToP),
        want('format', getStringLimitLength(1, 100), assignToP),
        want('unixTimestamp', getStringLimitLength(99), assignToP),
        handle_GET_dataExport);

    app.get("/api/v3/dataExport/results",
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        need('conversation_id', getStringLimitLength(1, 1000), assignToP),
        want('filename', getStringLimitLength(1, 1000), assignToP),
        handle_GET_dataExport_results);
};