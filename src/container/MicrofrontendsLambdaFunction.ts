import { Descriptor } from 'pip-services3-commons-node';
import { CommandableLambdaFunction } from 'pip-services3-aws-node';
import { MicrofrontendsServiceFactory } from '../build/MicrofrontendsServiceFactory';

export class MicrofrontendsLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("microfrontends", "Microfrontends function");
        this._dependencyResolver.put('controller', new Descriptor('pip-services-microfrontends', 'controller', 'default', '*', '*'));
        this._factories.add(new MicrofrontendsServiceFactory());
    }
}

export const handler = new MicrofrontendsLambdaFunction().getHandler();