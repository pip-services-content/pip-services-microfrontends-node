import { IReferences } from 'pip-services3-commons-node';
import { GrpcService } from 'pip-services3-grpc-node';
export declare class MicrofrontendsGrpcServiceV1 extends GrpcService {
    private _controller;
    constructor();
    setReferences(references: IReferences): void;
    private getMicrofrontends;
    private getMicrofrontendById;
    private createMicrofrontend;
    private updateMicrofrontend;
    private deleteMicrofrontendById;
    register(): void;
}
