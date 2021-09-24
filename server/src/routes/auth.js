module.exports = (app, helpers) => {
    const { 
        assignToP,
        authOptional,
        enableAgid,
        getEmail,
        getPassword,
        getBool,
        getStringLimitLength,
        getOptionalStringLimitLength,
        getPasswordWithCreatePasswordRules,
        handle_POST_auth_password,
        handle_POST_auth_deregister,
        handle_POST_auth_facebook,
        handle_POST_auth_new,
        handle_POST_auth_pwresettoken,
        need,
        want
    } = helpers;
    app.post("/api/v3/auth/password",
        need('pwresettoken', getOptionalStringLimitLength(1000), assignToP),
        need('newPassword', getPasswordWithCreatePasswordRules, assignToP),
        handle_POST_auth_password);

    app.post("/api/v3/auth/pwresettoken",
        need('email', getEmail, assignToP),
        handle_POST_auth_pwresettoken);

    app.post("/api/v3/auth/deregister",
        want("showPage", getStringLimitLength(1, 99), assignToP),
        handle_POST_auth_deregister);

    app.post("/api/v3/auth/facebook",
        enableAgid,
        authOptional(assignToP),
        want('fb_granted_scopes', getStringLimitLength(1, 9999), assignToP),
        want('fb_friends_response', getStringLimitLength(1, 99999), assignToP),
        want('fb_public_profile', getStringLimitLength(1, 99999), assignToP),
        want('fb_email', getEmail, assignToP),
        want('hname', getOptionalStringLimitLength(9999), assignToP),
        want('provided_email', getEmail, assignToP),
        want('conversation_id', getOptionalStringLimitLength(999), assignToP),
        want('password', getPassword, assignToP),
        need('response', getStringLimitLength(1, 9999), assignToP),
        want("owner", getBool, assignToP, true),
        handle_POST_auth_facebook);
    
    app.post("/api/v3/auth/new",
        want('anon', getBool, assignToP),
        want('password', getPasswordWithCreatePasswordRules, assignToP),
        want('password2', getPasswordWithCreatePasswordRules, assignToP),
        want('email', getOptionalStringLimitLength(999), assignToP),
        want('hname', getOptionalStringLimitLength(999), assignToP),
        want('oinvite', getOptionalStringLimitLength(999), assignToP),
        want('encodedParams', getOptionalStringLimitLength(9999), assignToP), // TODO_SECURITY we need to add an additional key param to ensure this is secure. we don't want anyone adding themselves to other people's site_id groups.
        want('zinvite', getOptionalStringLimitLength(999), assignToP),
        want('organization', getOptionalStringLimitLength(999), assignToP),
        want('gatekeeperTosPrivacy', getBool, assignToP),
        want('lti_user_id', getStringLimitLength(1, 9999), assignToP),
        want('lti_user_image', getStringLimitLength(1, 9999), assignToP),
        want('lti_context_id', getStringLimitLength(1, 9999), assignToP),
        want('tool_consumer_instance_guid', getStringLimitLength(1, 9999), assignToP),
        want('afterJoinRedirectUrl', getStringLimitLength(1, 9999), assignToP),
        want("owner", getBool, assignToP, true),
        handle_POST_auth_new);
};