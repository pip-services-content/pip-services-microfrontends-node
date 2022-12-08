import { Descriptor } from 'pip-services3-commons-node';
import { CommandableGrpcService } from 'pip-services3-grpc-node';

export class MicrofrontendsCommandableGrpcServiceV1 extends CommandableGrpcService {
    public constructor() {
        super('v1/microfrontends');
        this._dependencyResolver.put('controller', new Descriptor('pip-services-microfrontends', 'controller', 'default', '*', '*'));
    }
}