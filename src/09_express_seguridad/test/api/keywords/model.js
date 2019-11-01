const chai = require("chai");
const config = require("config");
const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Keyword = require("../../../api/keywords/model");

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

    beforeEach(async () => {
        await Keyword.deleteMany();
    });

    after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    it("should create a keyword", async () => {
        const newKeyword = {
            name: "Nombre",
            desc: "Desc",
            url: "http://url.dev"
        };
        const savedKeyword = await Keyword.create(newKeyword);

        expect(savedKeyword).to.have.property("_id");
        expect(savedKeyword).to.have.property("__v");
        expect(savedKeyword).to.have.property("name")
            .to.equal(newKeyword.name);
        expect(savedKeyword).to.have.property("desc")
            .to.equal(newKeyword.desc);
        expect(savedKeyword).to.have.property("url")
            .to.equal(newKeyword.url);

        let numerKeywords = await Keyword.countDocuments();
        expect(numerKeywords).to.equal(1);
    });

    it("reject keyword with no name", async () => {
        let hasError = false;
        const newKeyword = {
            desc: "Desc",
            url: "http://url.dev"
        };
        try {
            const savedKeyword = await Keyword.create(newKeyword);
        } catch (e) {
            hasError = true;
            expect(e.name).to.equal("ValidationError");
            expect(e.errors).to.have.property("name");
        }
        expect(hasError, "Validation error must be thrown").to.be.true;
    });
});