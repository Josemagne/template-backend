const express = require("express");
const config = require("config");
// TypeORM connection to postgres
import connection from "./utils/connect";
// logger that gives us additional information for our logs
import log from "./utils/logger";
// router
import routes from "./routes/routes";

const app = express();

// Gets the port from /config/index.ts
const port = config.get('port');
// We want to start the server once our db connection is successful
connection().then(() => {
    app.listen(port, () => {

        log.info("Server is listening on port " + config.get("port"));
    })
})

