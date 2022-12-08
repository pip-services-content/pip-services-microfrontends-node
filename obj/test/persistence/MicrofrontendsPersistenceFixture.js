"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsPersistenceFixture = void 0;
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
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
let MICROFRONTEND3 = {
    id: '3',
    name: "Microfrontend 3",
    description: "N module",
    path_prefix: "md1",
    icon: "icon3",
    type: "react",
    remote_entry: "/remote",
    exposed_module: "module3",
    element_name: "n_module",
    params: {}
};
class MicrofrontendsPersistenceFixture {
    constructor(persistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }
    testCreateMicrofrontends(done) {
        async.series([
            // Create one microfrontend
            (callback) => {
                this._persistence.create(null, MICROFRONTEND1, (err, microfrontend) => {
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
                    callback();
                });
            },
            // Create another microfrontend
            (callback) => {
                this._persistence.create(null, MICROFRONTEND2, (err, microfrontend) => {
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
                    callback();
                });
            },
            // Create yet another microfrontend
            (callback) => {
                this._persistence.create(null, MICROFRONTEND3, (err, microfrontend) => {
                    assert.isNull(err);
                    assert.isObject(microfrontend);
                    assert.equal(microfrontend.name, MICROFRONTEND3.name);
                    assert.equal(microfrontend.description, MICROFRONTEND3.description);
                    assert.equal(microfrontend.path_prefix, MICROFRONTEND3.path_prefix);
                    assert.equal(microfrontend.icon, MICROFRONTEND3.icon);
                    assert.equal(microfrontend.type, MICROFRONTEND3.type);
                    assert.equal(microfrontend.remote_entry, MICROFRONTEND3.remote_entry);
                    assert.equal(microfrontend.exposed_module, MICROFRONTEND3.exposed_module);
                    assert.equal(microfrontend.element_name, MICROFRONTEND3.element_name);
                    callback();
                });
            }
        ], done);
    }
    testCrudOperations(done) {
        let microfrontend1;
        async.series([
            // Create items
            (callback) => {
                this.testCreateMicrofrontends(callback);
            },
            // Get all microfrontends
            (callback) => {
                this._persistence.getPageByFilter(null, new pip_services3_commons_node_1.FilterParams(), new pip_services3_commons_node_2.PagingParams(), (err, page) => {
                    assert.isNull(err);
                    assert.isObject(page);
                    assert.lengthOf(page.data, 3);
                    microfrontend1 = page.data[0];
                    callback();
                });
            },
            // Update the microfrontend
            (callback) => {
                //microfrontend1.name.put('en', 'Updated Name 1');
                microfrontend1.name = 'Updated Name 1';
                this._persistence.update(null, microfrontend1, (err, microfrontend) => {
                    assert.isNull(err);
                    assert.isObject(microfrontend);
                    assert.equal(microfrontend.name, 'Updated Name 1');
                    assert.equal(microfrontend.id, microfrontend1.id);
                    callback();
                });
            },
            // Delete microfrontend
            (callback) => {
                this._persistence.deleteById(null, microfrontend1.id, (err) => {
                    assert.isNull(err);
                    callback();
                });
            },
            // Try to get delete microfrontend
            (callback) => {
                this._persistence.getOneById(null, microfrontend1.id, (err, microfrontend) => {
                    assert.isNull(err);
                    assert.isNull(microfrontend || null);
                    callback();
                });
            }
        ], done);
    }
    testGetWithFilter(done) {
        async.series([
            // Create microfrontends
            (callback) => {
                this.testCreateMicrofrontends(callback);
            },
            // Get microfrontends filtered by product
            (callback) => {
                this._persistence.getPageByFilter(null, pip_services3_commons_node_1.FilterParams.fromValue({
                    type: 'vue'
                }), new pip_services3_commons_node_2.PagingParams(), (err, microfrontends) => {
                    assert.isNull(err);
                    assert.isObject(microfrontends);
                    assert.lengthOf(microfrontends.data, 2);
                    callback();
                });
            },
            // Get microfrontends filtered by search
            (callback) => {
                this._persistence.getPageByFilter(null, pip_services3_commons_node_1.FilterParams.fromValue({
                    search: 'Microfrontend'
                }), new pip_services3_commons_node_2.PagingParams(), (err, microfrontends) => {
                    assert.isNull(err);
                    assert.isObject(microfrontends);
                    assert.lengthOf(microfrontends.data, 3);
                    callback();
                });
            }
        ], done);
    }
}
exports.MicrofrontendsPersistenceFixture = MicrofrontendsPersistenceFixture;
//# sourceMappingURL=MicrofrontendsPersistenceFixture.js.map