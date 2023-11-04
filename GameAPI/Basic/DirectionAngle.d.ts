/// <reference path="../../index.d.ts" />

/**
 * ### 📐 方向角オブジェクト
 *
 * エンジンは「DirectionAngle」オブジェクトを使用してオイラー角を示し、「方向角オブジェクト」と呼びます。
 * このオブジェクトの2つのメンバーは、通常エンティティの向きなどの方向データを表すのに使用される浮動小数点数です。
 *
 * @see [📐 方向角オブジェクト](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Basic?id=%f0%9f%93%90-%e6%96%b9%e5%90%91%e8%a7%92%e5%af%b9%e8%b1%a1)
 */
declare class DirectionAngle {
  /**
   * @param pitch 仰角（-90° ~ 90°）
   * @param yaw 偏角（回転角）
   */
  constructor(pitch: number, yaw: number);

  /** 仰角（-90° ~ 90°） */
  pitch: number;

  /** 偏角（回転角） */
  yaw: number;

  /**
   * ### 偏角を基本的な方向に変換する
   *
   * 返り値は`0`-`3`で、北東南西の4つの基本的な方向を表します。
   * エンティティがどの方向を向いているかを素早く判断するのに使用されます。
   *
   * @returns 現在の方向角オブジェクトが指す基本的な方向
   */
  toFacing(): 0 | 1 | 2 | 3;

  toString(): string;
}
