import { CommandSet } from 'pip-services3-commons-node';
import { IMicrofrontendsController } from './IMicrofrontendsController';
export declare class MicrofrontendsCommandSet extends CommandSet {
    private _logic;
    constructor(logic: IMicrofrontendsController);
    private makeGetMicrofrontendsCommand;
    private makeGetMicrofrontendByIdCommand;
    private makeCreateMicrofrontendCommand;
    private makeUpdateMicrofrontendCommand;
    private makeDeleteMicrofrontendByIdCommand;
}
