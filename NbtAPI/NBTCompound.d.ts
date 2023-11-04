/// <reference path="../index.d.ts" />

declare class NbtCompound {
  constructor(data?: object);

  /**
   * NBTオブジェクトに格納されているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトに格納されているデータ型: {NBT.enum}
   */
  getType(): 10;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param space （オプション） - 出力文字列を整形する場合にこのパラメータを指定します
   * @returns {string} - JSON文字列
   */
  toString(space?: number): string;

  /**
   * すべてのキーを取得します。
   * @returns {Array<string>} - コンパウンド内のすべてのキー
   */
  getKeys(): Array<string>;

  /**
   * 指定したキーの値のデータ型を取得します。
   * @param key - 調査するキー名
   * @returns {any} - 対応する値のデータ型: {NBT.enum}
   */
  getTypeOf(key: string): NBT;

  /**
   * キーに対応するNBTオブジェクトを設定します。
   * @param key - 操作対象のキー名
   * @param tag - 書き込むNBTオブジェクト（NBTデータを保持）
   * @returns {boolean} - 書き込みが成功したかどうか
   */
  setTag(key: string, tag: NbtType): boolean;

  /**
   * キーに対応するNBTオブジェクトを読み込みます。
   * @param key - 操作対象のキー名
   * @returns {NbtType|null} - キーに対応するNBTオブジェクト
   */
  getTag(key: string): NbtType | null;

  /**
   * キーに対応するNBTオブジェクトを削除します。
   * @param key - 操作対象のキー名（キーは既に存在している必要があります）
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  removeTag(key: string): NbtCompound;

  /**
   * キーに対応する値をエンドデータに設定します。
   * @param key - 操作対象のキー名
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setEnd(key: string): NbtCompound;

  /**
   * キーに対応する値をバイトデータに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setByte(key: string, data: number): NbtCompound;

  /**
   * キーに対応する値をショートデータに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setShort(key: string, data: number): NbtCompound;

  /**
   * キーに対応する値を整数データに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setInt(key: string, data: number): NbtCompound;

  /**
   * キーに対応する値をロングデータに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setLong(key: string, data: number): NbtCompound;

  /**
   * キーに対応する値を浮動小数点数データに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setFloat(key: string, data: number): NbtCompound;

  /**
   * キーに対応する値を倍精度浮動小数点数データに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setDouble(key: string, data: number): NbtCompound;

  /**
   * キーに対応する値をバイト配列データに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setByteArray(key: string, data: ByteBuffer): NbtCompound;

  /**
   * キーに対応する値を文字列データに設定します。
   * @param key - 操作対象のキー名
   * @param data - 書き込む具体的なデータ
   * @returns {NbtCompound} - 処理が完了したNBTオブジェクト（他の操作を連鎖できるように）: {NbtCompound}
   */
  setString(key: string, data: string): NbtCompound;

  /**
   * キーに対応する値を読み込みます。
   * @param key - 操作対象のキー名
   * @returns {any|NbtList|NbtCompound|null} - キーに対応する値の具体的なデータ
   */
  getData(key: string): any | NbtList | NbtCompound | null;

  /**
   * NBTタグオブジェクトをオブジェクトに変換します。
   * @returns {Object} - 対応するオブジェクト/テーブル
   */
  toObject(): Object;

  /**
   * NBTタグオブジェクトをバイナリNBTにシリアライズします。
   * @returns {ByteBuffer} - 対応するバイナリNBTデータ: {ByteBuffer}
   */
  toBinaryNBT(): ByteBuffer;

  /**
   * NBTオブジェクトをSNBT文字列に変換します。
   * @param space （オプション） - 出力文字列を整形する場合にこのパラメータを指定します
   * @returns {string} - SNBT文字列
   */
  toSNBT(space?: number): string;

  /**
   * このNBTタグオブジェクトを破棄します。
   * @returns {boolean} - 正常にクリアされたかどうか
   * 訳者注:中国語版のtypo?
   */
  destroy(): boolean;
}
