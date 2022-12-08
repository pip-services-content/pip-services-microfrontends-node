import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { DependencyResolver } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { TagsProcessor } from 'pip-services3-commons-node';

import { MicrofrontendV1 } from '../data/version1/MicrofrontendV1';
import { IMicrofrontendsPersistence } from '../persistence/IMicrofrontendsPersistence';
import { IMicrofrontendsController } from './IMicrofrontendsController';
import { MicrofrontendsCommandSet } from './MicrofrontendsCommandSet';

export class MicrofrontendsController implements  IConfigurable, IReferenceable, ICommandable, IMicrofrontendsController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'pip-services-microfrontends:persistence:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(MicrofrontendsController._defaultConfig);
    private _persistence: IMicrofrontendsPersistence;
    private _commandSet: MicrofrontendsCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<IMicrofrontendsPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new MicrofrontendsCommandSet(this);
        return this._commandSet;
    }
    
    public getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }

    public getMicrofrontendById(correlationId: string, id: string, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        this._persistence.getOneById(correlationId, id, callback);        
    }

    public createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        this._persistence.create(correlationId, microfrontend, callback);
    }

    public updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        this._persistence.update(correlationId, microfrontend, callback);
    }

    public deleteMicrofrontendById(correlationId: string, id: string,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {  
        this._persistence.deleteById(correlationId, id, callback);
    }

}
