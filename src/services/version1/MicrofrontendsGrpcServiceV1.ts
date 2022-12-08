let _ = require('lodash');
let services = require('../../../../src/protos/microfrontends_v1_grpc_pb');
let messages = require('../../../../src/protos/microfrontends_v1_pb');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';
import { FilterParamsSchema } from 'pip-services3-commons-node';
import { PagingParamsSchema } from 'pip-services3-commons-node';
import { GrpcService } from 'pip-services3-grpc-node';

import { MicrofrontendV1 } from '../../data/version1/MicrofrontendV1';
import { MicrofrontendV1Schema } from '../../data/version1/MicrofrontendV1Schema';
import { IMicrofrontendsController } from '../../logic/IMicrofrontendsController';
import { MicrofrontendsGrpcConverterV1 } from './MicrofrontendsGrpcConverterV1';

export class MicrofrontendsGrpcServiceV1 extends GrpcService {
    private _controller: IMicrofrontendsController;
	
    public constructor() {
        super(services.MicrofrontendsService);
        this._dependencyResolver.put('controller', new Descriptor("pip-services-microfrontends", "controller", "default", "*", "*"));
    }

	public setReferences(references: IReferences): void {
		super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired<IMicrofrontendsController>('controller');
    }
    
    private getMicrofrontends(call: any, callback: any) {
        let correlationId = call.request.getCorrelationId();
        let filter = new FilterParams();
        MicrofrontendsGrpcConverterV1.setMap(filter, call.request.getFilterMap());
        let paging = MicrofrontendsGrpcConverterV1.toPagingParams(call.request.getPaging());

        this._controller.getMicrofrontends(
            correlationId,
            filter,
            paging,
            (err, result) => {
                let error = MicrofrontendsGrpcConverterV1.fromError(err);
                let page = err == null ? MicrofrontendsGrpcConverterV1.fromMicrofrontendPage(result) : null;

                let response = new messages.MicrofrontendPageReply();
                response.setError(error);
                response.setPage(page);

                callback(err, response);
            }
        );
    }

    private getMicrofrontendById(call: any, callback: any) {
        let correlationId = call.request.getCorrelationId();
        let microfrontendId = call.request.getMicrofrontendId();

        this._controller.getMicrofrontendById(
            correlationId,
            microfrontendId,
            (err, result) => {
                let error = MicrofrontendsGrpcConverterV1.fromError(err);
                let microfrontend = err == null ? MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;

                let response = new messages.MicrofrontendObjectReply();
                response.setError(error);
                response.setMicrofrontend(microfrontend);

                callback(err, response);
            }
        );
    }

    private createMicrofrontend(call: any, callback: any) {
        let correlationId = call.request.getCorrelationId();
        let microfrontend = MicrofrontendsGrpcConverterV1.toMicrofrontend(call.request.getMicrofrontend());

        this._controller.createMicrofrontend(
            correlationId,
            microfrontend,
            (err, result) => {
                let error = MicrofrontendsGrpcConverterV1.fromError(err);
                let microfrontend = err == null ? MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;

                let response = new messages.MicrofrontendObjectReply();
                response.setError(error);
                if (result)
                    response.setMicrofrontend(microfrontend);

                callback(err, response);
            }
        );
    }

    private updateMicrofrontend(call: any, callback: any) {
        let correlationId = call.request.getCorrelationId();
        let microfrontend = MicrofrontendsGrpcConverterV1.toMicrofrontend(call.request.getMicrofrontend());

        this._controller.updateMicrofrontend(
            correlationId,
            microfrontend,
            (err, result) => {
                let error = MicrofrontendsGrpcConverterV1.fromError(err);
                let microfrontend = err == null ? MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;

                let response = new messages.MicrofrontendObjectReply();
                response.setError(error);
                if (result)
                    response.setMicrofrontend(microfrontend);

                callback(err, response);
            }
        );
    }

    private deleteMicrofrontendById(call: any, callback: any) {
        let correlationId = call.request.getCorrelationId();
        let microfrontendId = call.request.getMicrofrontendId();

        this._controller.deleteMicrofrontendById(
            correlationId,
            microfrontendId,
            (err, result) => {
                let error = MicrofrontendsGrpcConverterV1.fromError(err);
                let microfrontend = err == null ? MicrofrontendsGrpcConverterV1.fromMicrofrontend(result) : null;

                let response = new messages.MicrofrontendObjectReply();
                response.setError(error);
                if (result)
                    response.setMicrofrontend(microfrontend);

                callback(err, response);
            }
        );
    }    
        
    public register() {
        this.registerMethod(
            'get_microfrontends', 
            null,
            this.getMicrofrontends
        );

        this.registerMethod(
            'get_microfrontend_by_id', 
            null,
            this.getMicrofrontendById
        );

        this.registerMethod(
            'create_microfrontend', 
            null,
            this.createMicrofrontend
        );

        this.registerMethod(
            'update_microfrontend', 
            null,
            this.updateMicrofrontend
        );

        this.registerMethod(
            'delete_microfrontend_by_id',
            null, 
            this.deleteMicrofrontendById
        );
    }
}
