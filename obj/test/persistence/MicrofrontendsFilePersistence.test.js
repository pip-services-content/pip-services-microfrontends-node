"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MicrofrontendsFilePersistence_1 = require("../../src/persistence/MicrofrontendsFilePersistence");
const MicrofrontendsPersistenceFixture_1 = require("./MicrofrontendsPersistenceFixture");
suite('MicrofrontendsFilePersistence', () => {
    let persistence;
    let fixture;
    setup((done) => {
        persistence = new MicrofrontendsFilePersistence_1.MicrofrontendsFilePersistence('./data/microfrontends.test.json');
        fixture = new MicrofrontendsPersistenceFixture_1.MicrofrontendsPersistenceFixture(persistence);
        persistence.open(null, (err) => {
            persistence.clear(null, done);
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
//# sourceMappingURL=MicrofrontendsFilePersistence.test.js.map