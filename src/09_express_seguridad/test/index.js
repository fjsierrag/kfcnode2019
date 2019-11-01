const chai = require("chai");
const chaiHttp = require("chai-http");
const {MongoMemoryServer} = require("mongodb-memory-server");

const app = require("../index");
const expect = chai.expect;
const assert = chai.assert;

const Keyword = require("../api/keywords/model");

chai.use(chaiHttp);
chai.should();

describe("index", () => {
    let mongoServer = new MongoMemoryServer({
        instance: {
            ip: "localhost",
            port: 27017,
            dbName: "nodeapp"
        }
    });
    before(async () => {
        const uri = await mongoServer.getConnectionString();
        console.log("DB_URI", uri);
    });

    after(async () => {
        await mongoServer.stop();
    });

    beforeEach(async () => {
        const k1 = {name: "k1", desc: "d2", url: "u2"};
        const k2 = {name: "k2", desc: "d2", url: "u2"};
        const k3 = {name: "k3", desc: "d3", url: "u3"};
        await Keyword.create(k1, k2, k3);
    });

    it("should return all the keywords", async () => {
        const res = await chai.request(app).get("/api/keywords");
        expect(res.body).to.be.a("array");
        expect(res.body.length).to.equal(3);
    });

});