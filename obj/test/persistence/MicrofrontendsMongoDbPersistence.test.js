"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let process = require('process');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const MicrofrontendsMongoDbPersistence_1 = require("../../src/persistence/MicrofrontendsMongoDbPersistence");
const MicrofrontendsPersistenceFixture_1 = require("./MicrofrontendsPersistenceFixture");
suite('MicrofrontendsMongoDbPersistence', () => {
    let persistence;
    let fixture;
    setup((done) => {
        var MONGO_DB = process.env["MONGO_DB"] || "test";
        var MONGO_COLLECTION = process.env["MONGO_COLLECTION"] || "microfrontends";
        var MONGO_SERVICE_HOST = process.env["MONGO_SERVICE_HOST"] || "localhost";
        var MONGO_SERVICE_PORT = process.env["MONGO_SERVICE_PORT"] || "27017";
        var MONGO_SERVICE_URI = process.env["MONGO_SERVICE_URI"];
        var dbConfig = pip_services3_commons_node_1.ConfigParams.fromTuples("collection", MONGO_COLLECTION, "connection.database", MONGO_DB, "connection.host", MONGO_SERVICE_HOST, "connection.port", MONGO_SERVICE_PORT, "connection.uri", MONGO_SERVICE_URI);
        persistence = new MicrofrontendsMongoDbPersistence_1.MicrofrontendsMongoDbPersistence();
        persistence.configure(dbConfig);
        fixture = new MicrofrontendsPersistenceFixture_1.MicrofrontendsPersistenceFixture(persistence);
        persistence.open(null, (err) => {
            if (err == null) {
                persistence.clear(null, (err) => {
                    done(err);
                });
            }
            else {
                done(err);
            }
        });
    });
    teardown((done) => {
        persistence.close(null, done);
    });
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });
    test('Get with Filters', (done) => {
        fixture.testGetWithFilter(done);
    });
});
//# sourceMappingURL=MicrofrontendsMongoDbPersistence.test.js.map