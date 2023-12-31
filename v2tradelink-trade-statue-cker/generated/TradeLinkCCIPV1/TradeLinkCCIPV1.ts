// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreateFulfill extends ethereum.Event {
  get params(): CreateFulfill__Params {
    return new CreateFulfill__Params(this);
  }
}

export class CreateFulfill__Params {
  _event: CreateFulfill;

  constructor(event: CreateFulfill) {
    this._event = event;
  }

  get fulfillId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ownerFulfill(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CreateOffer extends ethereum.Event {
  get params(): CreateOffer__Params {
    return new CreateOffer__Params(this);
  }
}

export class CreateOffer__Params {
  _event: CreateOffer;

  constructor(event: CreateOffer) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ownerOffer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferRequested extends ethereum.Event {
  get params(): OwnershipTransferRequested__Params {
    return new OwnershipTransferRequested__Params(this);
  }
}

export class OwnershipTransferRequested__Params {
  _event: OwnershipTransferRequested;

  constructor(event: OwnershipTransferRequested) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Success extends ethereum.Event {
  get params(): Success__Params {
    return new Success__Params(this);
  }
}

export class Success__Params {
  _event: Success;

  constructor(event: Success) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fulfillId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sourceChain(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get destChain(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get userOffer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get userFulfill(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class TradeLinkCCIPV1__decodeFulfillResultDecodedStruct extends ethereum.Tuple {
  get offerId(): BigInt {
    return this[0].toBigInt();
  }

  get destChainSelector(): BigInt {
    return this[1].toBigInt();
  }

  get destChainAddress(): Address {
    return this[2].toAddress();
  }

  get tokenIn(): Array<Address> {
    return this[3].toAddressArray();
  }

  get tokenInAmount(): Array<BigInt> {
    return this[4].toBigIntArray();
  }

  get nftIn(): Array<Address> {
    return this[5].toAddressArray();
  }

  get nftInId(): Array<BigInt> {
    return this[6].toBigIntArray();
  }

  get feeAddress(): Address {
    return this[7].toAddress();
  }

  get ownerFulfillAddress(): Address {
    return this[8].toAddress();
  }

  get traderFulfillAddress(): Address {
    return this[9].toAddress();
  }

  get isBridge(): boolean {
    return this[10].toBoolean();
  }

  get isSuccess(): boolean {
    return this[11].toBoolean();
  }
}

export class TradeLinkCCIPV1__decodeMessagePayloadResultDecodedStruct extends ethereum.Tuple {
  get step(): BigInt {
    return this[0].toBigInt();
  }

  get offerId(): BigInt {
    return this[1].toBigInt();
  }

  get fulfillOfferId(): BigInt {
    return this[2].toBigInt();
  }

  get fulfillInfo(): Bytes {
    return this[3].toBytes();
  }
}

export class TradeLinkCCIPV1__decodeOfferResultDecodedDataStruct extends ethereum.Tuple {
  get tokenIn(): Array<Address> {
    return this[0].toAddressArray();
  }

  get tokenInAmount(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get nftIn(): Array<Address> {
    return this[2].toAddressArray();
  }

  get nftInId(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get destSelectorOut(): BigInt {
    return this[4].toBigInt();
  }

  get tokenOut(): Array<Address> {
    return this[5].toAddressArray();
  }

  get tokenOutAmount(): Array<BigInt> {
    return this[6].toBigIntArray();
  }

  get nftOut(): Array<Address> {
    return this[7].toAddressArray();
  }

  get nftOutId(): Array<BigInt> {
    return this[8].toBigIntArray();
  }

  get ownerOfferAddress(): Address {
    return this[9].toAddress();
  }

  get traderOfferAddress(): Address {
    return this[10].toAddress();
  }

  get deadLine(): BigInt {
    return this[11].toBigInt();
  }

  get fee(): BigInt {
    return this[12].toBigInt();
  }

  get feeAddress(): Address {
    return this[13].toAddress();
  }

  get isSuccess(): boolean {
    return this[14].toBoolean();
  }
}

export class TradeLinkCCIPV1__encodedFulfillInput_fulfillPayloadStruct extends ethereum.Tuple {
  get offerId(): BigInt {
    return this[0].toBigInt();
  }

  get destChainSelector(): BigInt {
    return this[1].toBigInt();
  }

  get destChainAddress(): Address {
    return this[2].toAddress();
  }

  get tokenIn(): Array<Address> {
    return this[3].toAddressArray();
  }

  get tokenInAmount(): Array<BigInt> {
    return this[4].toBigIntArray();
  }

  get nftIn(): Array<Address> {
    return this[5].toAddressArray();
  }

  get nftInId(): Array<BigInt> {
    return this[6].toBigIntArray();
  }

  get feeAddress(): Address {
    return this[7].toAddress();
  }

  get ownerFulfillAddress(): Address {
    return this[8].toAddress();
  }

  get traderFulfillAddress(): Address {
    return this[9].toAddress();
  }

  get isBridge(): boolean {
    return this[10].toBoolean();
  }

  get isSuccess(): boolean {
    return this[11].toBoolean();
  }
}

export class TradeLinkCCIPV1__encodedMessagePayloadInput_messagePayloadStruct extends ethereum.Tuple {
  get step(): BigInt {
    return this[0].toBigInt();
  }

  get offerId(): BigInt {
    return this[1].toBigInt();
  }

  get fulfillOfferId(): BigInt {
    return this[2].toBigInt();
  }

  get fulfillInfo(): Bytes {
    return this[3].toBytes();
  }
}

export class TradeLinkCCIPV1__fulfillCollectionResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: Address;
  value4: Address;
  value5: Address;
  value6: boolean;
  value7: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: Address,
    value4: Address,
    value5: Address,
    value6: boolean,
    value7: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    return map;
  }

  getOfferId(): BigInt {
    return this.value0;
  }

  getDestChainSelector(): BigInt {
    return this.value1;
  }

  getDestChainAddress(): Address {
    return this.value2;
  }

  getFeeAddress(): Address {
    return this.value3;
  }

  getOwnerFulfillAddress(): Address {
    return this.value4;
  }

  getTraderFulfillAddress(): Address {
    return this.value5;
  }

  getIsBridge(): boolean {
    return this.value6;
  }

  getIsSuccess(): boolean {
    return this.value7;
  }
}

export class TradeLinkCCIPV1__fulfillOfferResult {
  value0: BigInt;
  value1: Bytes;

  constructor(value0: BigInt, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }

  getFullfillId(): BigInt {
    return this.value0;
  }

  getMessageId(): Bytes {
    return this.value1;
  }
}

export class TradeLinkCCIPV1__getFeeFulfillOfferInput_messagePayloadStruct extends ethereum.Tuple {
  get step(): BigInt {
    return this[0].toBigInt();
  }

  get offerId(): BigInt {
    return this[1].toBigInt();
  }

  get fulfillOfferId(): BigInt {
    return this[2].toBigInt();
  }

  get fulfillInfo(): Bytes {
    return this[3].toBytes();
  }
}

export class TradeLinkCCIPV1__offerCollectionResult {
  value0: BigInt;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }

  getDestSelectorOut(): BigInt {
    return this.value0;
  }

  getOwnerOfferAddress(): Address {
    return this.value1;
  }

  getTraderOfferAddress(): Address {
    return this.value2;
  }

  getDeadLine(): BigInt {
    return this.value3;
  }

  getFee(): BigInt {
    return this.value4;
  }

  getFeeAddress(): Address {
    return this.value5;
  }

  getIsSuccess(): boolean {
    return this.value6;
  }
}

export class TradeLinkCCIPV1 extends ethereum.SmartContract {
  static bind(address: Address): TradeLinkCCIPV1 {
    return new TradeLinkCCIPV1("TradeLinkCCIPV1", address);
  }

  createOffer(_createOffer: Bytes): BigInt {
    let result = super.call("createOffer", "createOffer(bytes):(uint256)", [
      ethereum.Value.fromBytes(_createOffer)
    ]);

    return result[0].toBigInt();
  }

  try_createOffer(_createOffer: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("createOffer", "createOffer(bytes):(uint256)", [
      ethereum.Value.fromBytes(_createOffer)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decodeFulfill(
    encodedData: Bytes
  ): TradeLinkCCIPV1__decodeFulfillResultDecodedStruct {
    let result = super.call(
      "decodeFulfill",
      "decodeFulfill(bytes):((uint256,uint64,address,address[],uint256[],address[],uint256[],address,address,address,bool,bool))",
      [ethereum.Value.fromBytes(encodedData)]
    );

    return changetype<TradeLinkCCIPV1__decodeFulfillResultDecodedStruct>(
      result[0].toTuple()
    );
  }

  try_decodeFulfill(
    encodedData: Bytes
  ): ethereum.CallResult<TradeLinkCCIPV1__decodeFulfillResultDecodedStruct> {
    let result = super.tryCall(
      "decodeFulfill",
      "decodeFulfill(bytes):((uint256,uint64,address,address[],uint256[],address[],uint256[],address,address,address,bool,bool))",
      [ethereum.Value.fromBytes(encodedData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TradeLinkCCIPV1__decodeFulfillResultDecodedStruct>(
        value[0].toTuple()
      )
    );
  }

  decodeMessagePayload(
    encodedData: Bytes
  ): TradeLinkCCIPV1__decodeMessagePayloadResultDecodedStruct {
    let result = super.call(
      "decodeMessagePayload",
      "decodeMessagePayload(bytes):((uint256,uint256,uint256,bytes))",
      [ethereum.Value.fromBytes(encodedData)]
    );

    return changetype<TradeLinkCCIPV1__decodeMessagePayloadResultDecodedStruct>(
      result[0].toTuple()
    );
  }

  try_decodeMessagePayload(
    encodedData: Bytes
  ): ethereum.CallResult<
    TradeLinkCCIPV1__decodeMessagePayloadResultDecodedStruct
  > {
    let result = super.tryCall(
      "decodeMessagePayload",
      "decodeMessagePayload(bytes):((uint256,uint256,uint256,bytes))",
      [ethereum.Value.fromBytes(encodedData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TradeLinkCCIPV1__decodeMessagePayloadResultDecodedStruct>(
        value[0].toTuple()
      )
    );
  }

  decodeOffer(
    encodedData: Bytes
  ): TradeLinkCCIPV1__decodeOfferResultDecodedDataStruct {
    let result = super.call(
      "decodeOffer",
      "decodeOffer(bytes):((address[],uint256[],address[],uint256[],uint64,address[],uint256[],address[],uint256[],address,address,uint256,uint256,address,bool))",
      [ethereum.Value.fromBytes(encodedData)]
    );

    return changetype<TradeLinkCCIPV1__decodeOfferResultDecodedDataStruct>(
      result[0].toTuple()
    );
  }

  try_decodeOffer(
    encodedData: Bytes
  ): ethereum.CallResult<TradeLinkCCIPV1__decodeOfferResultDecodedDataStruct> {
    let result = super.tryCall(
      "decodeOffer",
      "decodeOffer(bytes):((address[],uint256[],address[],uint256[],uint64,address[],uint256[],address[],uint256[],address,address,uint256,uint256,address,bool))",
      [ethereum.Value.fromBytes(encodedData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TradeLinkCCIPV1__decodeOfferResultDecodedDataStruct>(
        value[0].toTuple()
      )
    );
  }

  encodedFulfill(
    _fulfillPayload: TradeLinkCCIPV1__encodedFulfillInput_fulfillPayloadStruct
  ): Bytes {
    let result = super.call(
      "encodedFulfill",
      "encodedFulfill((uint256,uint64,address,address[],uint256[],address[],uint256[],address,address,address,bool,bool)):(bytes)",
      [ethereum.Value.fromTuple(_fulfillPayload)]
    );

    return result[0].toBytes();
  }

  try_encodedFulfill(
    _fulfillPayload: TradeLinkCCIPV1__encodedFulfillInput_fulfillPayloadStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "encodedFulfill",
      "encodedFulfill((uint256,uint64,address,address[],uint256[],address[],uint256[],address,address,address,bool,bool)):(bytes)",
      [ethereum.Value.fromTuple(_fulfillPayload)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  encodedMessagePayload(
    _messagePayload: TradeLinkCCIPV1__encodedMessagePayloadInput_messagePayloadStruct
  ): Bytes {
    let result = super.call(
      "encodedMessagePayload",
      "encodedMessagePayload((uint256,uint256,uint256,bytes)):(bytes)",
      [ethereum.Value.fromTuple(_messagePayload)]
    );

    return result[0].toBytes();
  }

  try_encodedMessagePayload(
    _messagePayload: TradeLinkCCIPV1__encodedMessagePayloadInput_messagePayloadStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "encodedMessagePayload",
      "encodedMessagePayload((uint256,uint256,uint256,bytes)):(bytes)",
      [ethereum.Value.fromTuple(_messagePayload)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  feePlatform(): BigInt {
    let result = super.call("feePlatform", "feePlatform():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feePlatform(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feePlatform", "feePlatform():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fulfillCollection(param0: BigInt): TradeLinkCCIPV1__fulfillCollectionResult {
    let result = super.call(
      "fulfillCollection",
      "fulfillCollection(uint256):(uint256,uint64,address,address,address,address,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TradeLinkCCIPV1__fulfillCollectionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toBoolean(),
      result[7].toBoolean()
    );
  }

  try_fulfillCollection(
    param0: BigInt
  ): ethereum.CallResult<TradeLinkCCIPV1__fulfillCollectionResult> {
    let result = super.tryCall(
      "fulfillCollection",
      "fulfillCollection(uint256):(uint256,uint64,address,address,address,address,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TradeLinkCCIPV1__fulfillCollectionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toBoolean(),
        value[7].toBoolean()
      )
    );
  }

  fulfillOffer(
    _createFulfillOffer: Bytes
  ): TradeLinkCCIPV1__fulfillOfferResult {
    let result = super.call(
      "fulfillOffer",
      "fulfillOffer(bytes):(uint256,bytes32)",
      [ethereum.Value.fromBytes(_createFulfillOffer)]
    );

    return new TradeLinkCCIPV1__fulfillOfferResult(
      result[0].toBigInt(),
      result[1].toBytes()
    );
  }

  try_fulfillOffer(
    _createFulfillOffer: Bytes
  ): ethereum.CallResult<TradeLinkCCIPV1__fulfillOfferResult> {
    let result = super.tryCall(
      "fulfillOffer",
      "fulfillOffer(bytes):(uint256,bytes32)",
      [ethereum.Value.fromBytes(_createFulfillOffer)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TradeLinkCCIPV1__fulfillOfferResult(
        value[0].toBigInt(),
        value[1].toBytes()
      )
    );
  }

  getFeeFulfillOffer(
    _messagePayload: TradeLinkCCIPV1__getFeeFulfillOfferInput_messagePayloadStruct
  ): BigInt {
    let result = super.call(
      "getFeeFulfillOffer",
      "getFeeFulfillOffer((uint256,uint256,uint256,bytes)):(uint256)",
      [ethereum.Value.fromTuple(_messagePayload)]
    );

    return result[0].toBigInt();
  }

  try_getFeeFulfillOffer(
    _messagePayload: TradeLinkCCIPV1__getFeeFulfillOfferInput_messagePayloadStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFeeFulfillOffer",
      "getFeeFulfillOffer((uint256,uint256,uint256,bytes)):(uint256)",
      [ethereum.Value.fromTuple(_messagePayload)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getFeeOffer(
    _fulfillOfferId: BigInt,
    _destChainSelector: BigInt,
    _destChainAddress: Address,
    _feeTokenAddress: Address
  ): BigInt {
    let result = super.call(
      "getFeeOffer",
      "getFeeOffer(uint256,uint64,address,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_fulfillOfferId),
        ethereum.Value.fromUnsignedBigInt(_destChainSelector),
        ethereum.Value.fromAddress(_destChainAddress),
        ethereum.Value.fromAddress(_feeTokenAddress)
      ]
    );

    return result[0].toBigInt();
  }

  try_getFeeOffer(
    _fulfillOfferId: BigInt,
    _destChainSelector: BigInt,
    _destChainAddress: Address,
    _feeTokenAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFeeOffer",
      "getFeeOffer(uint256,uint64,address,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_fulfillOfferId),
        ethereum.Value.fromUnsignedBigInt(_destChainSelector),
        ethereum.Value.fromAddress(_destChainAddress),
        ethereum.Value.fromAddress(_feeTokenAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRouter(): Address {
    let result = super.call("getRouter", "getRouter():(address)", []);

    return result[0].toAddress();
  }

  try_getRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall("getRouter", "getRouter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  offerCollection(param0: BigInt): TradeLinkCCIPV1__offerCollectionResult {
    let result = super.call(
      "offerCollection",
      "offerCollection(uint256):(uint64,address,address,uint256,uint256,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TradeLinkCCIPV1__offerCollectionResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBoolean()
    );
  }

  try_offerCollection(
    param0: BigInt
  ): ethereum.CallResult<TradeLinkCCIPV1__offerCollectionResult> {
    let result = super.tryCall(
      "offerCollection",
      "offerCollection(uint256):(uint64,address,address,uint256,uint256,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TradeLinkCCIPV1__offerCollectionResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBoolean()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sourceChainSelector(): BigInt {
    let result = super.call(
      "sourceChainSelector",
      "sourceChainSelector():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_sourceChainSelector(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sourceChainSelector",
      "sourceChainSelector():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _router(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sourceSelector(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _linkToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class CcipReceiveCall extends ethereum.Call {
  get inputs(): CcipReceiveCall__Inputs {
    return new CcipReceiveCall__Inputs(this);
  }

  get outputs(): CcipReceiveCall__Outputs {
    return new CcipReceiveCall__Outputs(this);
  }
}

export class CcipReceiveCall__Inputs {
  _call: CcipReceiveCall;

  constructor(call: CcipReceiveCall) {
    this._call = call;
  }

  get message(): CcipReceiveCallMessageStruct {
    return changetype<CcipReceiveCallMessageStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CcipReceiveCall__Outputs {
  _call: CcipReceiveCall;

  constructor(call: CcipReceiveCall) {
    this._call = call;
  }
}

export class CcipReceiveCallMessageStruct extends ethereum.Tuple {
  get messageId(): Bytes {
    return this[0].toBytes();
  }

  get sourceChainSelector(): BigInt {
    return this[1].toBigInt();
  }

  get sender(): Bytes {
    return this[2].toBytes();
  }

  get data(): Bytes {
    return this[3].toBytes();
  }

  get destTokenAmounts(): Array<CcipReceiveCallMessageDestTokenAmountsStruct> {
    return this[4].toTupleArray<CcipReceiveCallMessageDestTokenAmountsStruct>();
  }
}

export class CcipReceiveCallMessageDestTokenAmountsStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class CreateOfferCall extends ethereum.Call {
  get inputs(): CreateOfferCall__Inputs {
    return new CreateOfferCall__Inputs(this);
  }

  get outputs(): CreateOfferCall__Outputs {
    return new CreateOfferCall__Outputs(this);
  }
}

export class CreateOfferCall__Inputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }

  get _createOffer(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CreateOfferCall__Outputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class FulfillOfferCall extends ethereum.Call {
  get inputs(): FulfillOfferCall__Inputs {
    return new FulfillOfferCall__Inputs(this);
  }

  get outputs(): FulfillOfferCall__Outputs {
    return new FulfillOfferCall__Outputs(this);
  }
}

export class FulfillOfferCall__Inputs {
  _call: FulfillOfferCall;

  constructor(call: FulfillOfferCall) {
    this._call = call;
  }

  get _createFulfillOffer(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class FulfillOfferCall__Outputs {
  _call: FulfillOfferCall;

  constructor(call: FulfillOfferCall) {
    this._call = call;
  }

  get fullfillId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get messageId(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawNFTCall extends ethereum.Call {
  get inputs(): WithdrawNFTCall__Inputs {
    return new WithdrawNFTCall__Inputs(this);
  }

  get outputs(): WithdrawNFTCall__Outputs {
    return new WithdrawNFTCall__Outputs(this);
  }
}

export class WithdrawNFTCall__Inputs {
  _call: WithdrawNFTCall;

  constructor(call: WithdrawNFTCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _beneficiary(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawNFTCall__Outputs {
  _call: WithdrawNFTCall;

  constructor(call: WithdrawNFTCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall extends ethereum.Call {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}
