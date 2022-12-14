import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';

import { MicrofrontendsServiceFactory } from '../build/MicrofrontendsServiceFactory';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultGrpcFactory } from 'pip-services3-grpc-node';

export class MicrofrontendsProcess extends ProcessContainer {

    public constructor() {
        super("microfrontends", "Microfrontends microservice");
        this._factories.add(new MicrofrontendsServiceFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultGrpcFactory);
    }

}
