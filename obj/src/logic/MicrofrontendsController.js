"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsController = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const MicrofrontendsCommandSet_1 = require("./MicrofrontendsCommandSet");
class MicrofrontendsController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_node_2.DependencyResolver(MicrofrontendsController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new MicrofrontendsCommandSet_1.MicrofrontendsCommandSet(this);
        return this._commandSet;
    }
    getMicrofrontends(correlationId, filter, paging, callback) {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }
    getMicrofrontendById(correlationId, id, callback) {
        this._persistence.getOneById(correlationId, id, callback);
    }
    createMicrofrontend(correlationId, microfrontend, callback) {
        this._persistence.create(correlationId, microfrontend, callback);
    }
    updateMicrofrontend(correlationId, microfrontend, callback) {
        this._persistence.update(correlationId, microfrontend, callback);
    }
    deleteMicrofrontendById(correlationId, id, callback) {
        this._persistence.deleteById(correlationId, id, callback);
    }
}
exports.MicrofrontendsController = MicrofrontendsController;
MicrofrontendsController._defaultConfig = pip_services3_commons_node_1.ConfigParams.fromTuples('dependencies.persistence', 'pip-services-microfrontends:persistence:*:*:1.0');
//# sourceMappingURL=MicrofrontendsController.js.map