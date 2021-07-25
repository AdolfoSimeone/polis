module.exports = (app, helpers) => {
    const express = require('express');
    const {
        middleware_responseTime_start,
        redirectIfNotHttps,
        writeDefaultHead,
        redirectIfWrongDomain,
        redirectIfApiDomain,
        devMode,
        middleware_log_request_body,
        middleware_log_middleware_errors,
        addCorsHeader,
        middleware_check_if_options
    } = helpers;
    app.use(function(req, res, next) {
        console.log("before");
        console.log(req.body);
        console.log(req.headers);
        next();
    });
    
    app.use(middleware_responseTime_start);

    app.use(redirectIfNotHttps);
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(writeDefaultHead);
    app.use(redirectIfWrongDomain);
    app.use(redirectIfApiDomain);
    
    if (devMode) {
        app.use(express.compress());
    } else {
        // Cloudflare would apply gzip if we didn't
        // but it's about 2x faster if we do the gzip (for the inbox query on mike's account)
        app.use(express.compress());
    }
    app.use(middleware_log_request_body);
    app.use(middleware_log_middleware_errors);

    app.use(function(req, res, next) {
        console.log("part2");
        console.log(req.body);
        console.log(req.headers);
        next();
    });

    app.all("/api/v3/*", addCorsHeader);
    app.all("/font/*", addCorsHeader);
    app.all("/api/v3/*", middleware_check_if_options);
};