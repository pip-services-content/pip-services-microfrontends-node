import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { MicrofrontendV1 } from '../data/version1/MicrofrontendV1';
import { IMicrofrontendsController } from './IMicrofrontendsController';
export declare class MicrofrontendsController implements IConfigurable, IReferenceable, ICommandable, IMicrofrontendsController {
    private static _defaultConfig;
    private _dependencyResolver;
    private _persistence;
    private _commandSet;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getCommandSet(): CommandSet;
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void;
    getMicrofrontendById(correlationId: string, id: string, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    deleteMicrofrontendById(correlationId: string, id: string, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
}
