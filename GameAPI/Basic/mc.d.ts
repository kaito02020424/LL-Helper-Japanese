/// <reference path="../../index.d.ts" />

declare namespace mc {
  /**
   * ### 整数座標オブジェクトを生成します
   *
   * @param x x座標
   * @param y y座標
   * @param z z座標
   * @param dimId
   * ディメンションID
   *
   * 主世界 - `0`\
   * 下界 - `1`\
   * 末地 - `2`
   *
   * @returns 整数座標オブジェクト
   */
  function newIntPos(x: number, y: number, z: number, dimId: 0 | 1 | 2): IntPos;

  /**
   * ### 浮動小数点座標オブジェクトを生成します
   *
   * @param x x座標
   * @param y y座標
   * @param z z座標
   * @param dimId
   * ディメンションID
   *
   * 主世界 - `0`\
   * 下界 - `1`\
   * 末地 - `2`
   *
   * @returns 浮動小数点座標オブジェクト
   */
  function newFloatPos(
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2
  ): FloatPos;

  /**
   * ### 構造NBTを取得します
   * 
   * @param pos1 第1座標オブジェクト
   * @param pos2 第2座標オブジェクト
   * @param ignoreBlocks 
   * @param ignoreEntities
   * @default ignoreBlocks - false
   * @default ignoreEntities - false
   * 
   * @returns 構造NBT
   */
  function getStructure(pos1: IntPos, pos2: IntPos, ignoreBlocks?: boolean, ignoreEntities?: boolean): NbtCompound

  /**
   * ### 構造NBTを配置します
   * 
   * @param nbt 構造NBTオブジェクト
   * @param pos 配置座標オブジェクト
   * @param mirror ミラー 0:なし 1:X 2:Z 3:XZ
   * @default mirror - 0
   * @param rotation 回転 0:なし 1:90度回転 2:180度回転 3:270度回転
   * @default rotation - 0
   * 
   * @returns 配置が成功したかどうか
   */
  function setStructure(nbt: NbtCompound, pos: IntPos, mirror?: 0 | 1 | 2 | 3, rotation?: 0 | 1 | 2 | 3): boolean
}
