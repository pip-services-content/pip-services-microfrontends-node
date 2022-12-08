import { ConfigParams } from 'pip-services3-commons-node';

import { MicrofrontendsMemoryPersistence } from '../../src/persistence/MicrofrontendsMemoryPersistence';
import { MicrofrontendsPersistenceFixture } from './MicrofrontendsPersistenceFixture';

suite('MicrofrontendsMemoryPersistence', ()=> {
    let persistence: MicrofrontendsMemoryPersistence;
    let fixture: MicrofrontendsPersistenceFixture;
    
    setup((done) => {
        persistence = new MicrofrontendsMemoryPersistence();
        persistence.configure(new ConfigParams());
        
        fixture = new MicrofrontendsPersistenceFixture(persistence);
        
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