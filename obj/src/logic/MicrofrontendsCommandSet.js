"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsCommandSet = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const pip_services3_commons_node_5 = require("pip-services3-commons-node");
const pip_services3_commons_node_6 = require("pip-services3-commons-node");
const pip_services3_commons_node_7 = require("pip-services3-commons-node");
const pip_services3_commons_node_8 = require("pip-services3-commons-node");
const MicrofrontendV1Schema_1 = require("../data/version1/MicrofrontendV1Schema");
class MicrofrontendsCommandSet extends pip_services3_commons_node_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeGetMicrofrontendsCommand());
        this.addCommand(this.makeGetMicrofrontendByIdCommand());
        this.addCommand(this.makeCreateMicrofrontendCommand());
        this.addCommand(this.makeUpdateMicrofrontendCommand());
        this.addCommand(this.makeDeleteMicrofrontendByIdCommand());
    }
    makeGetMicrofrontendsCommand() {
        return new pip_services3_commons_node_2.Command("get_microfrontends", new pip_services3_commons_node_5.ObjectSchema(true)
            .withOptionalProperty('filter', new pip_services3_commons_node_7.FilterParamsSchema())
            .withOptionalProperty('paging', new pip_services3_commons_node_8.PagingParamsSchema()), (correlationId, args, callback) => {
            let filter = pip_services3_commons_node_3.FilterParams.fromValue(args.get("filter"));
            let paging = pip_services3_commons_node_4.PagingParams.fromValue(args.get("paging"));
            this._logic.getMicrofrontends(correlationId, filter, paging, callback);
        });
    }
    makeGetMicrofrontendByIdCommand() {
        return new pip_services3_commons_node_2.Command("get_microfrontend_by_id", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('microfrontend_id', pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let microfrontend_id = args.getAsString("microfrontend_id");
            this._logic.getMicrofrontendById(correlationId, microfrontend_id, callback);
        });
    }
    makeCreateMicrofrontendCommand() {
        return new pip_services3_commons_node_2.Command("create_microfrontend", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('microfrontend', new MicrofrontendV1Schema_1.MicrofrontendV1Schema()), (correlationId, args, callback) => {
            let microfrontend = args.get("microfrontend");
            this._logic.createMicrofrontend(correlationId, microfrontend, callback);
        });
    }
    makeUpdateMicrofrontendCommand() {
        return new pip_services3_commons_node_2.Command("update_microfrontend", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('microfrontend', new MicrofrontendV1Schema_1.MicrofrontendV1Schema()), (correlationId, args, callback) => {
            let microfrontend = args.get("microfrontend");
            this._logic.updateMicrofrontend(correlationId, microfrontend, callback);
        });
    }
    makeDeleteMicrofrontendByIdCommand() {
        return new pip_services3_commons_node_2.Command("delete_microfrontend_by_id", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('microfrontend_id', pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let microfrontendId = args.getAsNullableString("microfrontend_id");
            this._logic.deleteMicrofrontendById(correlationId, microfrontendId, callback);
        });
    }
}
exports.MicrofrontendsCommandSet = MicrofrontendsCommandSet;
//# sourceMappingURL=MicrofrontendsCommandSet.js.map