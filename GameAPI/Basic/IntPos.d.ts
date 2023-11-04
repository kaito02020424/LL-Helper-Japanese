/// <reference path="../../index.d.ts" />

/**
 * ### 🎯 整数座標オブジェクト
 *
 * x、y、z座標はすべて**整数**であり、通常はブロックの座標など整数で位置を示すために使用されます。
 *
 * @see [🎯 座標オブジェクト](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Basic?id=%f0%9f%8e%af-%e5%9d%90%e6%a0%87%e5%af%b9%e8%b1%a1)
 */
declare class IntPos {
  /**
   * @param x x座標（整数）
   * @param y y座標（整数）
   * @param z z座標（整数）
   * @param dimId ディメンションID
   */
  constructor(x: number, y: number, z: number, dimId: number);

  /** x座標（整数） */
  x: number;

  /** y座標（整数） */
  y: number;

  /** z座標（整数） */
  z: number;

  /**
   * ### ディメンション名
   *
   * オーバーワールド - `Overworld`\
   * ネザー - `Nether`\
   * ジ・エンド - `TheEnd`
   */
  readonly dim: "オーバーワールド" | "ネザー" | "ジ・エンド";

  /**
   * ### ディメンションID
   *
   * オーバーワールド - `0`\
   * ネザー - `1`\
   * ジ・エンド - `2`
   *
   * ある状況ではディメンションが無効であるか、取得できない場合、`dimid`の値は`-1`となります。
   */
  dimid: 0 | 1 | 2;

  toString(): string;
}
