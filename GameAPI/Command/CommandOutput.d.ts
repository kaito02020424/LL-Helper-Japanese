/// <reference path="../../index.d.ts" />

/**
 * ### 🎯 CommandOutputオブジェクト
 *
 * このオブジェクトを使用することで、コマンドの実行結果をコマンドの実行者に出力できます。
 *
 * このクラスには**コンストラクタ**がありません。コマンドコールバック関数から取得してください。
 *
 * @see {@linkcode Command.setCallback()}
 * @see [パラメータ output：コマンドの実行結果をコマンドの実行者に出力する](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Command?id=%e5%8f%82%e6%95%b0-output-%ef%bc%9a%e5%90%91%e5%91%bd%e4%bb%a4%e6%89%a7%e8%a1%8c%e8%80%85%e8%be%93%e5%87%ba%e5%91%bd%e4%bb%a4%e7%9a%84%e6%89%a7%e8%a1%8c%e7%bb%93%e6%9e%9c)
 */
declare class CommandOutput {
  readonly empty: boolean;

  readonly successCount: number;

  /**
   * ### 成功メッセージを出力
   * 
   * @param msg 出力するメッセージ
   * 
   * @param param 置換するパラメータ
   * 
   * @returns 成功したかどうか
   */
  success(msg?: string, param?: any[]): boolean;

  /**
   * ### エラーメッセージを出力
   * 
   * @param msg 出力するメッセージ
   * 
   * @param param 置換するパラメータ
   * 
   * @returns 成功したかどうか
   */
  error(msg: string, param?: any[]): boolean;

  /**
   * ### 通常のメッセージを出力
   * 
   * @param msg 出力するメッセージ
   * 
   * @param param 置換するパラメータ
   * 
   * @param arg3 未知の整数 未使用
   * 
   * @returns 成功したかどうか
   */
  addMessage(msg: string, param?: any[], arg3?: number): boolean;

  toString(): string;
}
