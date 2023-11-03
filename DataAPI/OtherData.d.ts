declare namespace data {
  /**
   * JSONへの変換
   * @param _var JSON化する変数
   * @param space オプション: 数値の空白を指定する。 
   * @returns {string|null} JSON化された文字列
   */
  function toJson(_var: any, space: number): string | null;

  /**
   * JSONの解析
   * @param json オブジェクト化されるJSON
   * @returns {any|null} 変換後のオブジェクト
   */
  function parseJson(json: string): any | null;

  /**
   * MD5の計算
   * @param str MD5を計算する文字列またはバイト列
   * @returns {string} MD5ダイジェスト文字列
   */
  function toMD5(str: string | ArrayBuffer): string;

  /**
   * SHA1の計算
   * @param str SHA1を計算する文字列またはバイト列
   * @returns {string} SHA1ダイジェスト文字列
   */
  function toSHA1(str: string | ArrayBuffer): string;

  /**
   * Base64へのエンコード
   * @param str Base64に変換する文字列またはバイト列
   * @returns {string} Base64への変換結果
   */
  function toBase64(str: string | ArrayBuffer): string;

  /**
   * Base64のデコード
   * @param base64 Base64文字列
   * @param isBinary 戻り値がバイト列かどうか。デフォルトはfalse
   * @returns {string|ArrayBuffer} エンコードされた文字列またはバイト列
   */
  function fromBase64(base64: string, isBinary: boolean): string | ArrayBuffer;
}


