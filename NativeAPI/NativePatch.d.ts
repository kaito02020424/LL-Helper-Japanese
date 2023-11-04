/// <reference path="../index.d.ts" />

declare class NativePatch {
  /**
   * パターン検索を実行します。
   * @param pattern - マッチングパターンを記述する文字列
   * @returns {NativePointer} - 結果のアドレス
   */
  search(pattern: string): NativePointer;

  /**
   * 指定された位置にパッチを適用します。
   * @param pointer - 対象アドレス
   * @param expect - 元のバイト列
   * @param target - 目標のバイト列
   * @returns {boolean} - 成功したかどうかの結果
   */
  patch(pointer: NativePointer, expect: string, target: string): boolean;

  /**
   * メモリをダンプして表示します。
   * @param pointer - 対象アドレス
   * @param size - 長さ
   * @returns {string} - メモリの内容
   * 訳者注:typo?(使用した経験がないため,関数名が間違ってる判断ができない.)
   */
  dump(pointer: NativePointer, size: number): string;
}
