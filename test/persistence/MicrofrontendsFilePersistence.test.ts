import { ConfigParams } from 'pip-services3-commons-node';

import { MicrofrontendsFilePersistence } from '../../src/persistence/MicrofrontendsFilePersistence';
import { MicrofrontendsPersistenceFixture } from './MicrofrontendsPersistenceFixture';

suite('MicrofrontendsFilePersistence', ()=> {
    let persistence: MicrofrontendsFilePersistence;
    let fixture: MicrofrontendsPersistenceFixture;
    
    setup((done) => {
        persistence = new MicrofrontendsFilePersistence('./data/microfrontends.test.json');

        fixture = new MicrofrontendsPersistenceFixture(persistence);

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