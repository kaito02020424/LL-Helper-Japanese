/**
 * NbtEnd クラスの型宣言
 */
declare class NbtEnd {
  constructor();

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 0;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */
  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {any} data - 対応する型のデータを書き込みます
   * @returns {true} - 成功時に true を返します
   */
  set(data: any): true;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {null} - オブジェクトに格納されているデータ
   */
  get(): null;
}

/**
 * NbtByte クラスの型宣言
 */
declare class NbtByte {
  constructor(data?: number);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 1;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */
  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {number} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: number): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {number} - オブジェクトに格納されているデータ
   */
  get(): number;
}
/**
 * NbtShort クラスの型宣言
 */
declare class NbtShort {
  constructor(data?: number);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 2;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */

  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {number} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: number): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {number} - オブジェクトに格納されているデータ
   */
  get(): number;
}
declare class NbtInt {
  constructor(data?: number);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 3;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */
  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {number} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: number): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {number} - オブジェクトに格納されているデータ
   */
  get(): number;
}
/**
 * NbtLong クラスの型宣言
 */
declare class NbtLong {
  constructor(data?: number);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 4;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */

  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {number} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: number): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {number} - オブジェクトに格納されているデータ
   */
  get(): number;
}
/**
 * NbtFloat クラスの型宣言
 */
declare class NbtFloat {
  constructor(data?: number);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 5;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */
  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {number} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: number): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {number} - オブジェクトに格納されているデータ
   */
  get(): number;
}
/**
 * NbtDouble クラスの型宣言
 */
declare class NbtDouble {
  constructor(data?: number);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 6;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */
  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {number} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: number): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {number} - オブジェクトに格納されているデータ
   */
  get(): number;
}
/**
 * NbtByteArray クラスの型宣言
 */
declare class NbtByteArray {
  constructor(data?: ArrayBuffer);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 7;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */
  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {ArrayBuffer} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: ArrayBuffer): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {ArrayBuffer} - オブジェクトに格納されているデータ
   */
  get(): ArrayBuffer;
}
/**
 * NbtString クラスの型宣言
 */
declare class NbtString {
  constructor(data?: string);

  /**
   * NBTオブジェクトが格納しているデータ型を取得します。
   * @returns {any} - このNBTオブジェクトが格納しているデータ型
   */
  getType(): 8;

  /**
   * NBTオブジェクトをJSON文字列に変換します。
   * @param {number} space - オプション: 文字列をフォーマットする場合に渡すパラメータ
   * @returns {string} - 変換されたJSON文字列
   */

  toString(space?: number): string;

  /**
   * オブジェクトにデータを設定します。
   * @param {string} data - 対応する型のデータを書き込みます
   * @returns {boolean} - 成功時に true を返します
   */
  set(data: string): boolean;

  /**
   * オブジェクトからデータを読み取ります。
   * @returns {string} - オブジェクトに格納されているデータ
   */
  get(): string;
}
