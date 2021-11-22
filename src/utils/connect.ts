const config = require("config");
import log from "./logger";
import { createConnection } from "typeorm";
import { PersonEntity } from '../model/Person.model';

const connection = async () => {
    await createConnection({
        type: "postgres",
        host: config.get('host'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get("DB_NAME"),
        entities: [PersonEntity],
        // NOTE only in development
        synchronize: true
    }).then(() => {
        log.info("connected to db")
        return 1;
    }).catch((err) => {
        log.error("Ĉonnection to db failed. Error log:")
        throw new Error(err);

    })
}

export default connection;