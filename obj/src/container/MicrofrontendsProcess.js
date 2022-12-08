"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsProcess = void 0;
const pip_services3_container_node_1 = require("pip-services3-container-node");
const MicrofrontendsServiceFactory_1 = require("../build/MicrofrontendsServiceFactory");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
class MicrofrontendsProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("microfrontends", "Microfrontends microservice");
        this._factories.add(new MicrofrontendsServiceFactory_1.MicrofrontendsServiceFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_grpc_node_1.DefaultGrpcFactory);
    }
}
exports.MicrofrontendsProcess = MicrofrontendsProcess;
//# sourceMappingURL=MicrofrontendsProcess.js.map