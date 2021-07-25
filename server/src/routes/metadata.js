module.exports = (app, helpers) => {
    const {
        moveToBody,
        auth,
        authOptional,
        assignToP,
        assignToPCustom,
        need,
        want,
        getInt,
        getOptionalStringLimitLength,
        getConversationIdFetchZid,
        handle_DELETE_metadata_questions,
        handle_DELETE_metadata_answers,
        handle_GET_metadata_questions,
        handle_POST_metadata_questions,
        handle_GET_metadata_answers,
        handle_GET_metadata_choices,
        handle_GET_metadata
    } = helpers;

    app.delete('/api/v3/metadata/questions/:pmqid',
        moveToBody,
        auth(assignToP),
        need('pmqid', getInt, assignToP),
        handle_DELETE_metadata_questions);

    app.delete('/api/v3/metadata/answers/:pmaid',
        moveToBody,
        auth(assignToP),
        need('pmaid', getInt, assignToP),
        handle_DELETE_metadata_answers);

    app.get('/api/v3/metadata/questions',
        moveToBody,
        authOptional(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('suzinvite', getOptionalStringLimitLength(32), assignToP),
        want('zinvite', getOptionalStringLimitLength(300), assignToP),
        // TODO want('lastMetaTime', getInt, assignToP, 0),
        handle_GET_metadata_questions);

    app.post('/api/v3/metadata/questions',
        moveToBody,
        auth(assignToP),
        need('key', getOptionalStringLimitLength(999), assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        handle_POST_metadata_questions);

    app.post('/api/v3/metadata/answers',
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        need('pmqid', getInt, assignToP),
        need('value', getOptionalStringLimitLength(999), assignToP),
        handle_POST_metadata_answers);

    app.get('/api/v3/metadata/choices',
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        handle_GET_metadata_choices);

    app.get('/api/v3/metadata/answers',
        moveToBody,
        authOptional(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('pmqid', getInt, assignToP),
        want('suzinvite', getOptionalStringLimitLength(32), assignToP),
        want('zinvite', getOptionalStringLimitLength(300), assignToP),
        // TODO want('lastMetaTime', getInt, assignToP, 0),
        handle_GET_metadata_answers);

    app.get('/api/v3/metadata',
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        want('zinvite', getOptionalStringLimitLength(300), assignToP),
        want('suzinvite', getOptionalStringLimitLength(32), assignToP),
        // TODO want('lastMetaTime', getInt, assignToP, 0),
        handle_GET_metadata);
};