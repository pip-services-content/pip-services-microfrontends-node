"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsHttpServiceV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class MicrofrontendsHttpServiceV1 extends pip_services3_rpc_node_1.CommandableHttpService {
    constructor() {
        super('v1/microfrontends');
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'controller', 'default', '*', '1.0'));
    }
}
exports.MicrofrontendsHttpServiceV1 = MicrofrontendsHttpServiceV1;
//# sourceMappingURL=MicrofrontendsHttpServiceV1.js.map