let assert = require('chai').assert;
let grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
let async = require('async');

let services = require('../../../../src/protos/microfrontends_v1_grpc_pb');
let messages = require('../../../../src/protos/microfrontends_v1_pb');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { MultiString } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { MicrofrontendV1 } from '../../../src/data/version1/MicrofrontendV1';
import { MicrofrontendsMemoryPersistence } from '../../../src/persistence/MicrofrontendsMemoryPersistence';
import { MicrofrontendsController } from '../../../src/logic/MicrofrontendsController';
import { MicrofrontendsGrpcServiceV1 } from '../../../src/services/version1/MicrofrontendsGrpcServiceV1';

var grpcConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

let MICROFRONTEND1: MicrofrontendV1 = {
    id: "1",
    name: "Microfrontend 1",
    description: "Main module",
    path_prefix: "md1",
    icon: "icon1",
    type: "vue",
    remote_entry: "/remote",
    exposed_module: "module1",
    element_name: "main_module",
    params: {}
};
let MICROFRONTEND2: MicrofrontendV1 = {
    id: '2',
    name: "Microfrontend 2",
    description: "Second module",
    path_prefix: "md2",
    icon: "icon2",
    type: "vue",
    remote_entry: "/remote",
    exposed_module: "module2",
    element_name: "second_module",
    params: {}
};

suite('MicrofrontendsGrpcServiceV1', ()=> {
    let service: MicrofrontendsGrpcServiceV1;

    let client: any;

    suiteSetup((done) => {
        let persistence = new MicrofrontendsMemoryPersistence();
        let controller = new MicrofrontendsController();

        service = new MicrofrontendsGrpcServiceV1();
        service.configure(grpcConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-microfrontends', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-microfrontends', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        service.open(null, done);
    });
    
    suiteTeardown((done) => {
        service.close(null, done);
    });

    setup(() => {
        let packageDefinition = protoLoader.loadSync(
            __dirname + "../../../../../src/protos/microfrontends_v1.proto",
            {
                keepCase: true,
                longs: Number,
                enums: Number,
                defaults: true,
                oneofs: true
            }
        );
        let clientProto = grpc.loadPackageDefinition(packageDefinition).microfrontends_v1.Microfrontends;

        client = new clientProto('localhost:3000', grpc.credentials.createInsecure());
    });

    test('CRUD Operations', (done) => {
        let microfrontend1, microfrontend2;

        async.series([
        // Create one microfrontend
            (callback) => {
                client.create_microfrontend(
                    { 
                        microfrontend: MICROFRONTEND1 
                    },
                    (err, response) => {
                        err = err || response.error;
                        let microfrontend = response ? response.microfrontend : null;

                        assert.isNull(err);
                        
                        assert.isObject(microfrontend);
                        assert.equal(microfrontend.name, MICROFRONTEND1.name);
                        assert.equal(microfrontend.description, MICROFRONTEND1.description);
                        assert.equal(microfrontend.path_prefix, MICROFRONTEND1.path_prefix);
                        assert.equal(microfrontend.icon, MICROFRONTEND1.icon);
                        assert.equal(microfrontend.type, MICROFRONTEND1.type);
                        assert.equal(microfrontend.remote_entry, MICROFRONTEND1.remote_entry);
                        assert.equal(microfrontend.exposed_module, MICROFRONTEND1.exposed_module);
                        assert.equal(microfrontend.element_name, MICROFRONTEND1.element_name);

                        microfrontend1 = microfrontend;

                        callback();
                    }
                );
            },
        // Create another microfrontend
            (callback) => {
                client.create_microfrontend(
                    { 
                        microfrontend: MICROFRONTEND2 
                    },
                    (err, response) => {
                        err = err || response.error;
                        let microfrontend = response ? response.microfrontend : null;

                        assert.isNull(err);
                        
                        assert.isObject(microfrontend);
                        assert.equal(microfrontend.name, MICROFRONTEND2.name);
                        assert.equal(microfrontend.description, MICROFRONTEND2.description);
                        assert.equal(microfrontend.path_prefix, MICROFRONTEND2.path_prefix);
                        assert.equal(microfrontend.icon, MICROFRONTEND2.icon);
                        assert.equal(microfrontend.type, MICROFRONTEND2.type);
                        assert.equal(microfrontend.remote_entry, MICROFRONTEND2.remote_entry);
                        assert.equal(microfrontend.exposed_module, MICROFRONTEND2.exposed_module);
                        assert.equal(microfrontend.element_name, MICROFRONTEND2.element_name);

                        microfrontend2 = microfrontend;

                        callback();
                    }
                );
            },
    // Get all microfrontends
            (callback) => {
                client.get_microfrontends(
                    {
                        filter: {}
                    },
                    (err, response) => {
                        err = err || response.error;
                        let microfrontends = response ? response.page : null;

                        assert.isNull(err);
                        
                        assert.isObject(microfrontends);
                        assert.lengthOf(microfrontends.data, 2);

                        callback();
                    }
                );
            },
        // Update the microfrontend
            (callback) => {
                microfrontend1.name = 'Updated Name 1';

                client.update_microfrontend(
                    { 
                        microfrontend: microfrontend1 
                    },
                    (err, response) => {
                        err = err || response.error;
                        let microfrontend = response ? response.microfrontend : null;

                        assert.isNull(err);
                        
                        assert.isObject(microfrontend);
                        assert.equal(microfrontend.name, 'Updated Name 1');
                        assert.equal(microfrontend.id, MICROFRONTEND1.id);

                        microfrontend1 = microfrontend;

                        callback();
                    }
                );
            },
        // Delete microfrontend
            (callback) => {
                client.delete_microfrontend_by_id(
                    { 
                        microfrontend_id: microfrontend1.id 
                    },
                    (err, response) => {
                        err = err || response.error;
                        let microfrontend = response ? response.microfrontend : null;

                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete microfrontend
            (callback) => {
                client.get_microfrontend_by_id(
                    { 
                        microfrontend_id: microfrontend1.id 
                    },
                    (err, response) => {
                        err = err || response.error;
                        let microfrontend = response ? response.microfrontend : null;

                        assert.isNull(err);
                        
                        //assert.isObject(microfrontend);

                        callback();
                    }
                );
            }
        ], done);
    });

});
