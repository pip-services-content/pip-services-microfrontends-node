"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsCommandableGrpcServiceV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
class MicrofrontendsCommandableGrpcServiceV1 extends pip_services3_grpc_node_1.CommandableGrpcService {
    constructor() {
        super('v1/microfrontends');
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'controller', 'default', '*', '*'));
    }
}
exports.MicrofrontendsCommandableGrpcServiceV1 = MicrofrontendsCommandableGrpcServiceV1;
//# sourceMappingURL=MicrofrontendsCommandableGrpcServiceV1.js.map