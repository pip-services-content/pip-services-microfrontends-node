"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
let restify = require('restify');
let assert = require('chai').assert;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const MicrofrontendsMemoryPersistence_1 = require("../../../src/persistence/MicrofrontendsMemoryPersistence");
const MicrofrontendsController_1 = require("../../../src/logic/MicrofrontendsController");
const MicrofrontendsHttpServiceV1_1 = require("../../../src/services/version1/MicrofrontendsHttpServiceV1");
let httpConfig = pip_services3_commons_node_1.ConfigParams.fromTuples("connection.protocol", "http", "connection.host", "localhost", "connection.port", 3000);
let MICROFRONTEND1 = {
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
let MICROFRONTEND2 = {
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
suite('MicrofrontendsHttpServiceV1', () => {
    let service;
    let rest;
    suiteSetup((done) => {
        let persistence = new MicrofrontendsMemoryPersistence_1.MicrofrontendsMemoryPersistence();
        let controller = new MicrofrontendsController_1.MicrofrontendsController();
        service = new MicrofrontendsHttpServiceV1_1.MicrofrontendsHttpServiceV1();
        service.configure(httpConfig);
        let references = pip_services3_commons_node_3.References.fromTuples(new pip_services3_commons_node_2.Descriptor('pip-services-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence, new pip_services3_commons_node_2.Descriptor('pip-services-microfrontends', 'controller', 'default', 'default', '1.0'), controller, new pip_services3_commons_node_2.Descriptor('pip-services-microfrontends', 'service', 'http', 'default', '1.0'), service);
        controller.setReferences(references);
        service.setReferences(references);
        service.open(null, done);
    });
    suiteTeardown((done) => {
        service.close(null, done);
    });
    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });
    test('CRUD Operations', (done) => {
        let microfrontend1, microfrontend2;
        async.series([
            // Create one microfrontend
            (callback) => {
                rest.post('/v1/microfrontends/create_microfrontend', {
                    microfrontend: MICROFRONTEND1
                }, (err, req, res, microfrontend) => {
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
                });
            },
            // Create another microfrontend
            (callback) => {
                rest.post('/v1/microfrontends/create_microfrontend', {
                    microfrontend: MICROFRONTEND2
                }, (err, req, res, microfrontend) => {
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
                });
            },
            // Get all microfrontends
            (callback) => {
                rest.post('/v1/microfrontends/get_microfrontends', {}, (err, req, res, page) => {
                    assert.isNull(err);
                    assert.isObject(page);
                    assert.lengthOf(page.data, 2);
                    callback();
                });
            },
            // Update the microfrontend
            (callback) => {
                microfrontend1.name = 'Updated Name 1';
                rest.post('/v1/microfrontends/update_microfrontend', {
                    microfrontend: microfrontend1
                }, (err, req, res, microfrontend) => {
                    assert.isNull(err);
                    assert.isObject(microfrontend);
                    assert.equal(microfrontend.name, 'Updated Name 1');
                    assert.equal(microfrontend.id, MICROFRONTEND1.id);
                    microfrontend1 = microfrontend;
                    callback();
                });
            },
            // Delete microfrontend
            (callback) => {
                rest.post('/v1/microfrontends/delete_microfrontend_by_id', {
                    microfrontend_id: microfrontend1.id
                }, (err, req, res, result) => {
                    assert.isNull(err);
                    //assert.isNull(result);
                    callback();
                });
            },
            // Try to get delete microfrontend
            (callback) => {
                rest.post('/v1/microfrontends/get_microfrontend_by_id', {
                    microfrontend_id: microfrontend1.id
                }, (err, req, res, result) => {
                    assert.isNull(err);
                    //assert.isNull(result);
                    callback();
                });
            }
        ], done);
    });
});
//# sourceMappingURL=MicrofrontendsHttpServiceV1.test.js.map