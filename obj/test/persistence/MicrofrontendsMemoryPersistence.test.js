"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const MicrofrontendsMemoryPersistence_1 = require("../../src/persistence/MicrofrontendsMemoryPersistence");
const MicrofrontendsPersistenceFixture_1 = require("./MicrofrontendsPersistenceFixture");
suite('MicrofrontendsMemoryPersistence', () => {
    let persistence;
    let fixture;
    setup((done) => {
        persistence = new MicrofrontendsMemoryPersistence_1.MicrofrontendsMemoryPersistence();
        persistence.configure(new pip_services3_commons_node_1.ConfigParams());
        fixture = new MicrofrontendsPersistenceFixture_1.MicrofrontendsPersistenceFixture(persistence);
        persistence.open(null, done);
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
//# sourceMappingURL=MicrofrontendsMemoryPersistence.test.js.map