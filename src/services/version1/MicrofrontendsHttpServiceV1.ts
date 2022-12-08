import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class MicrofrontendsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/microfrontends');
        this._dependencyResolver.put('controller', new Descriptor('pip-services-microfrontends', 'controller', 'default', '*', '1.0'));
    }
}