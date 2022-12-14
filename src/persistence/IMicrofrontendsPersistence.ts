import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IGetter } from 'pip-services3-data-node';
import { IWriter } from 'pip-services3-data-node';

import { MicrofrontendV1 } from '../data/version1/MicrofrontendV1';

export interface IMicrofrontendsPersistence extends IGetter<MicrofrontendV1, string>, IWriter<MicrofrontendV1, string> {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void;

    getOneById(correlationId: string, id: string, 
        callback: (err: any, item: MicrofrontendV1) => void): void;

    create(correlationId: string, item: MicrofrontendV1, 
        callback: (err: any, item: MicrofrontendV1) => void): void;

    update(correlationId: string, item: MicrofrontendV1, 
        callback: (err: any, item: MicrofrontendV1) => void): void;

    deleteById(correlationId: string, id: string,
        callback: (err: any, item: MicrofrontendV1) => void): void;
}
