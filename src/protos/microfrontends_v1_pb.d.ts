// package: microfrontends_v1
// file: microfrontends_v1.proto

import * as jspb from "google-protobuf";

export class ErrorDescription extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getCorrelationId(): string;
  setCorrelationId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getCause(): string;
  setCause(value: string): void;

  getStackTrace(): string;
  setStackTrace(value: string): void;

  getDetailsMap(): jspb.Map<string, string>;
  clearDetailsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDescription.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDescription): ErrorDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDescription;
  static deserializeBinaryFromReader(message: ErrorDescription, reader: jspb.BinaryReader): ErrorDescription;
}

export namespace ErrorDescription {
  export type AsObject = {
    type: string,
    category: string,
    code: string,
    correlationId: string,
    status: string,
    message: string,
    cause: string,
    stackTrace: string,
    detailsMap: Array<[string, string]>,
  }
}

export class PagingParams extends jspb.Message {
  getSkip(): number;
  setSkip(value: number): void;

  getTake(): number;
  setTake(value: number): void;

  getTotal(): boolean;
  setTotal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PagingParams.AsObject;
  static toObject(includeInstance: boolean, msg: PagingParams): PagingParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PagingParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PagingParams;
  static deserializeBinaryFromReader(message: PagingParams, reader: jspb.BinaryReader): PagingParams;
}

export namespace PagingParams {
  export type AsObject = {
    skip: number,
    take: number,
    total: boolean,
  }
}

export class Microfrontend extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPathPrefix(): string;
  setPathPrefix(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getType(): string;
  setType(value: string): void;

  getRemoteEntry(): string;
  setRemoteEntry(value: string): void;

  getExposedModule(): string;
  setExposedModule(value: string): void;

  getElementName(): string;
  setElementName(value: string): void;

  getParamsMap(): jspb.Map<string, string>;
  clearParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Microfrontend.AsObject;
  static toObject(includeInstance: boolean, msg: Microfrontend): Microfrontend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Microfrontend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Microfrontend;
  static deserializeBinaryFromReader(message: Microfrontend, reader: jspb.BinaryReader): Microfrontend;
}

export namespace Microfrontend {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    pathPrefix: string,
    icon: string,
    type: string,
    remoteEntry: string,
    exposedModule: string,
    elementName: string,
    paramsMap: Array<[string, string]>,
  }
}

export class MicrofrontendPage extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Microfrontend>;
  setDataList(value: Array<Microfrontend>): void;
  addData(value?: Microfrontend, index?: number): Microfrontend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicrofrontendPage.AsObject;
  static toObject(includeInstance: boolean, msg: MicrofrontendPage): MicrofrontendPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MicrofrontendPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicrofrontendPage;
  static deserializeBinaryFromReader(message: MicrofrontendPage, reader: jspb.BinaryReader): MicrofrontendPage;
}

export namespace MicrofrontendPage {
  export type AsObject = {
    total: number,
    dataList: Array<Microfrontend.AsObject>,
  }
}

export class MicrofrontendPageRequest extends jspb.Message {
  getCorrelationId(): string;
  setCorrelationId(value: string): void;

  getFilterMap(): jspb.Map<string, string>;
  clearFilterMap(): void;
  hasPaging(): boolean;
  clearPaging(): void;
  getPaging(): PagingParams | undefined;
  setPaging(value?: PagingParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicrofrontendPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MicrofrontendPageRequest): MicrofrontendPageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MicrofrontendPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicrofrontendPageRequest;
  static deserializeBinaryFromReader(message: MicrofrontendPageRequest, reader: jspb.BinaryReader): MicrofrontendPageRequest;
}

export namespace MicrofrontendPageRequest {
  export type AsObject = {
    correlationId: string,
    filterMap: Array<[string, string]>,
    paging?: PagingParams.AsObject,
  }
}

export class MicrofrontendPageReply extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): ErrorDescription | undefined;
  setError(value?: ErrorDescription): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): MicrofrontendPage | undefined;
  setPage(value?: MicrofrontendPage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicrofrontendPageReply.AsObject;
  static toObject(includeInstance: boolean, msg: MicrofrontendPageReply): MicrofrontendPageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MicrofrontendPageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicrofrontendPageReply;
  static deserializeBinaryFromReader(message: MicrofrontendPageReply, reader: jspb.BinaryReader): MicrofrontendPageReply;
}

export namespace MicrofrontendPageReply {
  export type AsObject = {
    error?: ErrorDescription.AsObject,
    page?: MicrofrontendPage.AsObject,
  }
}

export class MicrofrontendIdRequest extends jspb.Message {
  getCorrelationId(): string;
  setCorrelationId(value: string): void;

  getMicrofrontendId(): string;
  setMicrofrontendId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicrofrontendIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MicrofrontendIdRequest): MicrofrontendIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MicrofrontendIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicrofrontendIdRequest;
  static deserializeBinaryFromReader(message: MicrofrontendIdRequest, reader: jspb.BinaryReader): MicrofrontendIdRequest;
}

export namespace MicrofrontendIdRequest {
  export type AsObject = {
    correlationId: string,
    microfrontendId: string,
  }
}

export class MicrofrontendObjectRequest extends jspb.Message {
  getCorrelationId(): string;
  setCorrelationId(value: string): void;

  hasMicrofrontend(): boolean;
  clearMicrofrontend(): void;
  getMicrofrontend(): Microfrontend | undefined;
  setMicrofrontend(value?: Microfrontend): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicrofrontendObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MicrofrontendObjectRequest): MicrofrontendObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MicrofrontendObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicrofrontendObjectRequest;
  static deserializeBinaryFromReader(message: MicrofrontendObjectRequest, reader: jspb.BinaryReader): MicrofrontendObjectRequest;
}

export namespace MicrofrontendObjectRequest {
  export type AsObject = {
    correlationId: string,
    microfrontend?: Microfrontend.AsObject,
  }
}

export class MicrofrontendObjectReply extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): ErrorDescription | undefined;
  setError(value?: ErrorDescription): void;

  hasMicrofrontend(): boolean;
  clearMicrofrontend(): void;
  getMicrofrontend(): Microfrontend | undefined;
  setMicrofrontend(value?: Microfrontend): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicrofrontendObjectReply.AsObject;
  static toObject(includeInstance: boolean, msg: MicrofrontendObjectReply): MicrofrontendObjectReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MicrofrontendObjectReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicrofrontendObjectReply;
  static deserializeBinaryFromReader(message: MicrofrontendObjectReply, reader: jspb.BinaryReader): MicrofrontendObjectReply;
}

export namespace MicrofrontendObjectReply {
  export type AsObject = {
    error?: ErrorDescription.AsObject,
    microfrontend?: Microfrontend.AsObject,
  }
}

