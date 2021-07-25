module.exports = (app, helpers) => {
    const {
        moveToBody,
        need,
        want,
        auth,
        assignToP,
        assignToPCustom,
        getStringLimitLength,
        getConversationIdFetchZid,
        getBool,
        getInt,
        getEmail,
        handle_GET_conversationPreloadInfo,
        handle_GET_conversationsRecentlyStarted,
        handle_GET_conversationsRecentActivity,
        handle_POST_convSubscriptions,
        handle_POST_conversation_close,
        handle_POST_conversation_reopen,
        handle_PUT_conversations
    } = helpers;
    app.get("/api/v3/conversations/preload",
        moveToBody,
        need('conversation_id', getStringLimitLength(1, 1000), assignToP), // we actually need conversation_id to build a url
        handle_GET_conversationPreloadInfo);

    app.get("/api/v3/conversations/recently_started",
        auth(assignToP),
        moveToBody,
        want('sinceUnixTimestamp', getStringLimitLength(99), assignToP),
        handle_GET_conversationsRecentlyStarted);

    app.get("/api/v3/conversations/recent_activity",
        auth(assignToP),
        moveToBody,
        want('sinceUnixTimestamp', getStringLimitLength(99), assignToP),
        handle_GET_conversationsRecentActivity);

    app.post("/api/v3/convSubscriptions",
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        need("type", getInt, assignToP),
        need('email', getEmail, assignToP),
        handle_POST_convSubscriptions);

    app.post('/api/v3/conversation/close',
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        handle_POST_conversation_close);
    
    app.post('/api/v3/conversation/reopen',
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        handle_POST_conversation_reopen);
    
    app.put('/api/v3/conversations',
        moveToBody,
        auth(assignToP),
        need('conversation_id', getConversationIdFetchZid, assignToPCustom('zid')),
        need('conversation_id', getStringLimitLength(1, 1000), assignToP), // we actually need conversation_id to build a url
        want('is_active', getBool, assignToP),
        want('is_anon', getBool, assignToP),
        want('is_draft', getBool, assignToP, false),
        want('is_data_open', getBool, assignToP, false),
        want('owner_sees_participation_stats', getBool, assignToP, false),
        want('profanity_filter', getBool, assignToP),
        want('short_url', getBool, assignToP, false),
        want('spam_filter', getBool, assignToP),
        want('strict_moderation', getBool, assignToP),
        want('topic', getOptionalStringLimitLength(1000), assignToP),
        want('description', getOptionalStringLimitLength(50000), assignToP),
        want('vis_type', getInt, assignToP),
        want('help_type', getInt, assignToP),
        want('write_type', getInt, assignToP),
        want('socialbtn_type', getInt, assignToP),
        want('bgcolor', getOptionalStringLimitLength(20), assignToP),
        want('help_color', getOptionalStringLimitLength(20), assignToP),
        want('help_bgcolor', getOptionalStringLimitLength(20), assignToP),
        want('style_btn', getOptionalStringLimitLength(500), assignToP),
        want('auth_needed_to_vote', getBool, assignToP),
        want('auth_needed_to_write', getBool, assignToP),
        want('auth_opt_fb', getBool, assignToP),
        want('auth_opt_tw', getBool, assignToP),
        want('auth_opt_allow_3rdparty', getBool, assignToP),
        want('verifyMeta', getBool, assignToP),
        want('send_created_email', getBool, assignToP), // ideally the email would be sent on the post, but we post before they click create to allow owner to prepopulate comments.
        want('launch_presentation_return_url_hex', getStringLimitLength(1, 9999), assignToP), // LTI editor tool redirect url (once conversation editing is done)
        want('context', getOptionalStringLimitLength(999), assignToP),
        want('tool_consumer_instance_guid', getOptionalStringLimitLength(999), assignToP),
        want('custom_canvas_assignment_id', getInt, assignToP),
        want('link_url', getStringLimitLength(1, 9999), assignToP),
        want('subscribe_type', getInt, assignToP),
        handle_PUT_conversations);
};