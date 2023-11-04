/// <reference path="../../index.d.ts" />

/**
 * ### 🎯 コマンド実行者オブジェクト
 *
 * このオブジェクトは、コマンドの実行者を表し、実行者に対して操作を行うことができます。
 *
 * このクラスには**コンストラクタはありません**。コマンドのコールバック関数から取得してください。
 *
 * @see {@linkcode Command.setCallback()}
 * @see [パラメータ origin：コマンドの実行者](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Command?id=%e5%8f%82%e6%95%b0-origin-%ef%bc%9a%e5%91%bd%e4%bb%a4%e7%9a%84%e6%89%a7%e8%a1%8c%e8%80%85)
 */
declare class CommandOrigin {
  /** コマンドの実行主体の種類 */
  readonly type: number;

  readonly typeName: string;

  /** コマンドの実行主体の名前 */
  readonly name: string;

  /** コマンドの実行主体の座標 */
  readonly pos: FloatPos;

  /** コマンドの実行主体のブロック座標 */
  readonly blockPos: IntPos;

  /** コマンドを実行したエンティティ（オプション） */
  readonly entity?: Entity;

  /** コマンドを実行したプレイヤー（オプション） */
  readonly player?: Player;

  getNbt(): NbtCompound;

  toString(): string;
}
