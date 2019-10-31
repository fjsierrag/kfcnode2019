const chai = require("chai");
const config = require("config");
const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");

const expect = chai.expect;
const assert = chai.assert;

chai.should();

describe("api/keywords/model", () => {
    const database = config.get("database")
    const mongoServer = new MongoMemoryServer();
    before(async () => {
        const dburi = await mongoServer.getConnectionString();
        console.log(dburi);
        await mongoose.connect(
            dburi, database.options
        );
    });

    after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });
});