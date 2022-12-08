import { CommandSet } from 'pip-services3-commons-node';
import { ICommand } from 'pip-services3-commons-node';
import { Command } from 'pip-services3-commons-node';
import { Schema } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';
import { FilterParamsSchema } from 'pip-services3-commons-node';
import { PagingParamsSchema } from 'pip-services3-commons-node';

import { MicrofrontendV1 } from '../data/version1/MicrofrontendV1';
import { MicrofrontendV1Schema } from '../data/version1/MicrofrontendV1Schema';
import { IMicrofrontendsController } from './IMicrofrontendsController';

export class MicrofrontendsCommandSet extends CommandSet {
    private _logic: IMicrofrontendsController;

    constructor(logic: IMicrofrontendsController) {
        super();

        this._logic = logic;

        // Register commands to the database
		this.addCommand(this.makeGetMicrofrontendsCommand());
		this.addCommand(this.makeGetMicrofrontendByIdCommand());
		this.addCommand(this.makeCreateMicrofrontendCommand());
		this.addCommand(this.makeUpdateMicrofrontendCommand());
		this.addCommand(this.makeDeleteMicrofrontendByIdCommand());
    }

	private makeGetMicrofrontendsCommand(): ICommand {
		return new Command(
			"get_microfrontends",
			new ObjectSchema(true)
				.withOptionalProperty('filter', new FilterParamsSchema())
				.withOptionalProperty('paging', new PagingParamsSchema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let filter = FilterParams.fromValue(args.get("filter"));
                let paging = PagingParams.fromValue(args.get("paging"));
                this._logic.getMicrofrontends(correlationId, filter, paging, callback);
            }
		);
	}

	private makeGetMicrofrontendByIdCommand(): ICommand {
		return new Command(
			"get_microfrontend_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('microfrontend_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let microfrontend_id = args.getAsString("microfrontend_id");
                this._logic.getMicrofrontendById(correlationId, microfrontend_id, callback);
            }
		);
	}

	private makeCreateMicrofrontendCommand(): ICommand {
		return new Command(
			"create_microfrontend",
			new ObjectSchema(true)
				.withRequiredProperty('microfrontend', new MicrofrontendV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let microfrontend = args.get("microfrontend");
                this._logic.createMicrofrontend(correlationId, microfrontend, callback);
            }
		);
	}

	private makeUpdateMicrofrontendCommand(): ICommand {
		return new Command(
			"update_microfrontend",
			new ObjectSchema(true)
				.withRequiredProperty('microfrontend', new MicrofrontendV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let microfrontend = args.get("microfrontend");
                this._logic.updateMicrofrontend(correlationId, microfrontend, callback);
            }
		);
	}
	
	private makeDeleteMicrofrontendByIdCommand(): ICommand {
		return new Command(
			"delete_microfrontend_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('microfrontend_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let microfrontendId = args.getAsNullableString("microfrontend_id");
                this._logic.deleteMicrofrontendById(correlationId, microfrontendId, callback);
			}
		);
	}

}