import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { MicrofrontendV1 } from '../data/version1/MicrofrontendV1';

export interface IMicrofrontendsController {
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void;

    getMicrofrontendById(correlationId: string, microfrontend_id: string, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;

    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;

    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;

    deleteMicrofrontendById(correlationId: string, microfrontend_id: string,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
}
