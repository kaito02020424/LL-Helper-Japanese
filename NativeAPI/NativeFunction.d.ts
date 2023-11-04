/// <reference path="../index.d.ts" />

declare enum NativeTypes {
  Void,
  Bool,
  Char,
  UnsignedChar,
  Short,
  UnsignedShort,
  Int,
  UnsignedInt,
  Long,
  UnsignedLong,
  LongLong,
  UnsignedLongLong,
  Float,
  Double,
  Pointer,
}

declare class NativeHook {
  /**
   * 関数を呼び出すための機能
   * @param params - NativeFunctionで定義された関数のパラメータに対応するもの
   * @returns any - NativeFunctionで定義された戻り値に対応するもの
   */
  call(...params: any[]): any;

  /** 関数ポインタのポインタ値 */
  address: NativePointer | number;

}

declare class NativeFunction {
  /**
   * シンボルから関数を取得します。
   * @param symbol - 解析する関数のシンボル
   * @returns {NativeFunction} - ネイティブ関数のインスタンス
   */
  static fromSymbol(symbol: string): NativeFunction;

  /**
   * 説明から関数を取得します。
   * @param ReturnValue - 戻り値の型
   * @param Params - パラメータの型、左から右に直接渡します
   * @returns {NativeFunction} - ネイティブ関数のインスタンス
   */
  static fromDescription(
    ReturnValue: NativeTypes,
    Params: Array<NativeTypes>
  ): NativeFunction;

  /**
   * スクリプトから関数を取得します。
   * @param ReturnValue - 戻り値の型
   * @param Params - パラメータの型
   * @param Callback - コールバック関数
   * @returns {NativeFunction} - ネイティブ関数のインスタンス
   */
  static fromScript(
    ReturnValue: NativeTypes,
    Params: Array<NativeTypes>,
    Callback: (...Params: NativeTypes[]) => any
  ): NativeFunction;

  /**
   * 関数をフックします。
   * @param func - フックしたい関数
   * @returns {NativeHook} - ネイティブフックのインスタンス
   */
  hook(func: (...params: any[]) => any): NativeHook;
}
