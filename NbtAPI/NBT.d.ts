/// <reference path="../index.d.ts" />

declare class NBT {
  // 列挙型
  static readonly End = 0

  static readonly Byte = 1

  static readonly Short = 2

  static readonly Int = 3

  static readonly Long = 4

  static readonly Float = 5

  static readonly Double = 6

  static readonly ByteArray = 7

  static readonly String = 8

  static readonly List = 9

  static readonly Compound = 10

  /**
   * SNBT文字列からNBTタグオブジェクトを生成します。
   * @param snbt - 解析したいSNBT文字列
   * @returns 生成されたNBTオブジェクト
   */
  static parseSNBT(snbt: string): NbtCompound | null;

  /**
   * バイナリNBTデータからNBTタグオブジェクトを生成します。
   * @param nbt - 解析したいバイナリNBTデータ
   * @returns 生成されたNBTオブジェクト
   */
  static parseBinaryNBT(nbt: ArrayBuffer): NbtCompound | null;

  /** @deprecated */
  static newTag(arg: NbtEnum): NbtType;

  /** @deprecated */
  static createTag(arg: NbtEnum): NbtType;
}


declare type NbtType =
  | NbtEnd
  | NbtByte
  | NbtShort
  | NbtInt
  | NbtLong
  | NbtFloat
  | NbtDouble
  | NbtByteArray
  | NbtString
  | NbtList
  | NbtCompound;
declare type NbtValue =
  | NbtEnd
  | NbtByte
  | NbtShort
  | NbtInt
  | NbtLong
  | NbtFloat
  | NbtDouble
  | NbtByteArray
  | NbtString;

declare type NbtEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;