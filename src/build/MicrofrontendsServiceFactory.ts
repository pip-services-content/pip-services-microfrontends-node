import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { MicrofrontendsMongoDbPersistence } from '../persistence/MicrofrontendsMongoDbPersistence';
import { MicrofrontendsFilePersistence } from '../persistence/MicrofrontendsFilePersistence';
import { MicrofrontendsMemoryPersistence } from '../persistence/MicrofrontendsMemoryPersistence';
import { MicrofrontendsController } from '../logic/MicrofrontendsController';
import { MicrofrontendsHttpServiceV1 } from '../services/version1/MicrofrontendsHttpServiceV1';
import { MicrofrontendsCommandableGrpcServiceV1 } from '../services/version1/MicrofrontendsCommandableGrpcServiceV1';
import { MicrofrontendsGrpcServiceV1 } from '../services/version1/MicrofrontendsGrpcServiceV1';

export class MicrofrontendsServiceFactory extends Factory {
	public static Descriptor = new Descriptor("pip-services-microfrontends", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("pip-services-microfrontends", "persistence", "memory", "*", "1.0");
	public static FilePersistenceDescriptor = new Descriptor("pip-services-microfrontends", "persistence", "file", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("pip-services-microfrontends", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("pip-services-microfrontends", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("pip-services-microfrontends", "service", "http", "*", "1.0");
	public static CommandableGrpcServiceDescriptor = new Descriptor("pip-services-microfrontends", "service", "commandable-grpc", "*", "1.0");
	public static GrpcServiceDescriptor = new Descriptor("pip-services-microfrontends", "service", "grpc", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(MicrofrontendsServiceFactory.MemoryPersistenceDescriptor, MicrofrontendsMemoryPersistence);
		this.registerAsType(MicrofrontendsServiceFactory.FilePersistenceDescriptor, MicrofrontendsFilePersistence);
		this.registerAsType(MicrofrontendsServiceFactory.MongoDbPersistenceDescriptor, MicrofrontendsMongoDbPersistence);
		this.registerAsType(MicrofrontendsServiceFactory.ControllerDescriptor, MicrofrontendsController);
		this.registerAsType(MicrofrontendsServiceFactory.HttpServiceDescriptor, MicrofrontendsHttpServiceV1);
		this.registerAsType(MicrofrontendsServiceFactory.CommandableGrpcServiceDescriptor, MicrofrontendsCommandableGrpcServiceV1);
		this.registerAsType(MicrofrontendsServiceFactory.GrpcServiceDescriptor, MicrofrontendsGrpcServiceV1);
	}
	
}
