"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsGrpcServiceV1 = void 0;
let _ = require('lodash');
let services = require('../../../../src/protos/microfrontends_v1_grpc_pb');
let messages = require('../../../../src/protos/microfrontends_v1_pb');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
const MicrofrontendsGrpcConverterV1_1 = require("./MicrofrontendsGrpcConverterV1");
class MicrofrontendsGrpcServiceV1 extends pip_services3_grpc_node_1.GrpcService {
    constructor() {
        super(services.MicrofrontendsService);
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-microfrontends", "controller", "default", "*", "*"));
    }
    setReferences(references) {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
    }
    getMicrofrontends(call, callback) {
        let correlationId = call.request.getCorrelationId();
        let filter = new pip_services3_commons_node_2.FilterParams();
        MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.setMap(filter, call.request.getFilterMap());
        let paging = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toPagingParams(call.request.getPaging());
        this._controller.getMicrofrontends(correlationId, filter, paging, (err, result) => {
            let error = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromError(err);
            let page = err == null ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontendPage(result) : null;
            let response = new messages.MicrofrontendPageReply();
            response.setError(error);
            response.setPage(page);
            callback(err, response);
        });
    }
    getMicrofrontendById(call, callback) {
        let correlationId = call.request.getCorrelationId();
        let microfrontendId = call.request.getMicrofrontendId();
        this._controller.getMicrofrontendById(correlationId, microfrontendId, (err, result) => {
            let error = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromError(err);
            let microfrontend = err == null ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;
            let response = new messages.MicrofrontendObjectReply();
            response.setError(error);
            response.setMicrofrontend(microfrontend);
            callback(err, response);
        });
    }
    createMicrofrontend(call, callback) {
        let correlationId = call.request.getCorrelationId();
        let microfrontend = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(call.request.getMicrofrontend());
        this._controller.createMicrofrontend(correlationId, microfrontend, (err, result) => {
            let error = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromError(err);
            let microfrontend = err == null ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;
            let response = new messages.MicrofrontendObjectReply();
            response.setError(error);
            if (result)
                response.setMicrofrontend(microfrontend);
            callback(err, response);
        });
    }
    updateMicrofrontend(call, callback) {
        let correlationId = call.request.getCorrelationId();
        let microfrontend = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(call.request.getMicrofrontend());
        this._controller.updateMicrofrontend(correlationId, microfrontend, (err, result) => {
            let error = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromError(err);
            let microfrontend = err == null ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;
            let response = new messages.MicrofrontendObjectReply();
            response.setError(error);
            if (result)
                response.setMicrofrontend(microfrontend);
            callback(err, response);
        });
    }
    deleteMicrofrontendById(call, callback) {
        let correlationId = call.request.getCorrelationId();
        let microfrontendId = call.request.getMicrofrontendId();
        this._controller.deleteMicrofrontendById(correlationId, microfrontendId, (err, result) => {
            let error = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromError(err);
            let microfrontend = err == null ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;
            let response = new messages.MicrofrontendObjectReply();
            response.setError(error);
            if (result)
                response.setMicrofrontend(microfrontend);
            callback(err, response);
        });
    }
    register() {
        this.registerMethod('get_microfrontends', null, this.getMicrofrontends);
        this.registerMethod('get_microfrontend_by_id', null, this.getMicrofrontendById);
        this.registerMethod('create_microfrontend', null, this.createMicrofrontend);
        this.registerMethod('update_microfrontend', null, this.updateMicrofrontend);
        this.registerMethod('delete_microfrontend_by_id', null, this.deleteMicrofrontendById);
    }
}
exports.MicrofrontendsGrpcServiceV1 = MicrofrontendsGrpcServiceV1;
//# sourceMappingURL=MicrofrontendsGrpcServiceV1.js.map