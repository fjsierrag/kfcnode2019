const chai = require("chai");
const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const expect = chai.expect;
const assert = chai.assert;
const Keywords = require("../../../api/keywords/model");
chai.should();

describe("api/keywords/model", () => {
    const mongoServer = new MongoMemoryServer();
    before(async () => {
        const dburi = await mongoServer.getConnectionString();
        console.log(dburi);
        await mongoose.connect(
            dburi, {useNewUrlParser: true, poolSize: 10, useUnifiedTopology: true}
        );
    });

    it("should create a keyword", () => {
        const kw = Keywords.create();
    });

    after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });
});