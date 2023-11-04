/// <reference path="../index.d.ts" />

declare class Packet {
    /**
     * データパケットの名前を取得
     * @returns {string} データパケットの名前
     */
    getName(): string;

    /**
     * データパケットのIDを取得
     * @returns {number} データパケットのID
     */
    getId(): number;
}

declare class BinaryStream {
    /**
     * 二進数ストリームをリセット
     * @returns {boolean} 成功したかどうか
     */
    reset(): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {boolean} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeBool(value: boolean): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeByte(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeDouble(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeFloat(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeSignedBigEndianInt(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeSignedInt(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeSignedInt64(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeSignedShort(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {string} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeString(value: string): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeUnsignedChar(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeUnsignedInt(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeUnsignedInt64(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeUnsignedShort(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeUnsignedVarInt(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeUnsignedVarInt64(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeVarInt(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {number} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeVarInt64(value: number): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {FloatPos} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeVec3(value: FloatPos): boolean;

    /**
     * 二進数ストリームに書き込む
     * @param {NbtCompound} value パラメータ
     * @returns {boolean} 成功したかどうか
     */
    writeCompoundTag(value: NbtCompound): boolean;

    /**
     * 二進数ストリームからデータパケットを生成
     * @param {number} pktid データパケットID
     * @returns {Packet} データパケットオブジェクト
     */
    createPacket(pktid: number): Packet;
}