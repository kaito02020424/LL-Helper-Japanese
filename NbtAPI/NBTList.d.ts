/// <reference path="../index.d.ts" />

/**
 * NbtList クラスの型宣言
 */
declare class NbtList {
  constructor(data?: Array<NbtType>);

  /**
   * NBTオブジェクトの格納されているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 9;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */
  toString(space?: number): string;

  /**
   * リストの長さを取得します。
   * @returns {number} - このリストの長さ
   */
  getSize(): number;

  /**
   * 特定のインデックス位置に格納されているデータ型を取得します。
   * @param {number} index - クエリ対象のインデックス
   * @returns {any} - このインデックス位置に格納されているNBTのデータ型
   */
  getTypeOf(index: number): NBT;

  /**
   * 特定のインデックス位置にNBTオブジェクトを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {NbtType} tag - 書き込むNBTオブジェクト
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setTag(index: number, tag: NbtType): NbtList;

  /**
   * 特定のインデックス位置からNBTオブジェクトを読み取ります。
   * @param {number} index - 操作対象のインデックス
   * @returns {NbtType | null} - NBTオブジェクト
   */
  getTag(index: number): NbtType | null;

  /**
   * リストの末尾にNBTオブジェクトを追加します。
   * @param {NbtType} tag - 追加するNBTオブジェクト
   * @returns {NbtList} - 追加が完了したNBTリスト（他の操作をチェーンできるように）
   */
  addTag(tag: NbtType): NbtList;

  /**
 * 特定のインデックス位置に格納されているNBTオブジェクトを削除します。
 * @param {number} index - 削除する対象のインデックス
 * @returns {NbtList} - 処理が完了したNBTリスト（他の操作をチェーンできるように）
 */
removeTag(index: number): NbtList;

/**
 * 特定のインデックス位置に具体的なデータを設定します。
 * @param {number} index - 操作対象のインデックス
 * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
 */
setEnd(index: number): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {number} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setByte(index: number, data: number): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {number} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setShort(index: number, data: number): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {number} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setInt(index: number, data: number): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {number} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setLong(index: number, data: number): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {number} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setFloat(index: number, data: number): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {number} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setDouble(index: number, data: number): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {ByteBuffer} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setByteBuffer(index: number, data: ByteBuffer): NbtList;

  /**
   * 特定のインデックス位置にデータを設定します。
   * @param {number} index - 操作対象のインデックス
   * @param {string} data - 書き込む具体的なデータ
   * @returns {NbtList} - 書き込みが完了したNBTリスト（他の操作をチェーンできるように）
   */
  setString(index: number, data: string): NbtList;

  /**
   * 特定のインデックス位置からデータを読み取ります。
   * @param {number} index - 操作対象のインデックス
   * @returns {any | NbtList | NbtCompound | null} - キーに対応する値の具体的なデータ
   */
  getData(index: number): any | NbtList | NbtCompound | null;

  /**
   * List型をArrayに変換します。
   * @returns {Array<any>} - 対応する配列/リスト
   */
  toArray(): Array<any>;
}
