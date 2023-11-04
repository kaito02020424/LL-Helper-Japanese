/// <reference path="../../index.d.ts" />

declare namespace mc {
  /**
   * ### 現在読み込まれているすべてのエンティティを取得
   * 
   * @returns エンティティのリスト
   */
  function getAllEntities(): Array<Entity>;

  /**
   * ### 新しいモブを生成して取得
   * 
   * この関数を使用して、指定した位置に新しいモブを生成し、それに対応するエンティティオブジェクトを取得します。
   * 
   * @param name モブの名前空間名、例：`minecraft:creeper`
   * @param pos モブを生成する位置の座標オブジェクト
   * 
   * @returns 生成されたエンティティオブジェクト（失敗した場合は`null`）
   */
  function spawnMob(name: string, pos: IntPos | FloatPos): Entity | null;

  /**
   * ### 新しいモブを生成して取得
   * 
   * この関数を使用して、指定した位置に新しいモブを生成し、それに対応するエンティティオブジェクトを取得します。
   * 
   * @param name モブの名前空間名、例：`minecraft:creeper`
   * @param x x座標
   * @param y y座標
   * @param z z座標
   * @param dimId ディメンションID
   * 
   * @returns 生成されたエンティティオブジェクト（失敗した場合は`null`）
   */
  function spawnMob(
    name: string,
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2
  ): Entity | null;

  /**
   * ### モブを複製して取得
   * 
   * @param entity 複製するエンティティオブジェクト
   * @param pos モブを生成する位置の座標オブジェクト
   * 
   * @returns 複製されたエンティティオブジェクト（失敗した場合は`null`）
   */
  function cloneMob(entity: Entity, pos: IntPos | FloatPos): Entity | null;

  /**
   * モブを複製して取得
   * 
   * @param entity 複製するエンティティオブジェクト
   * @param x x座標
   * @param y y座標
   * @param z z座標
   * @param dimId ディメンションID
   * 
   * @returns Entity|null 複製されたエンティティオブジェクト（失敗した場合は`null`）
   */
  function cloneMob(
    entity: Entity,
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2
  ): Entity | null;

  /**
   * ### 指定位置で爆発を発生させる
   * 
   * @param pos 爆発が発生する位置の座標
   * @param source 爆発の元となるエンティティオブジェクト、`Null`でも構いません
   * @param power 爆発の威力値、爆発のダメージと範囲に影響します
   * @param range 爆発の範囲半径、爆発の拡散範囲に影響します
   * @param isDestroy 爆発がブロックを破壊するかどうか
   * @param isFire 爆発後に炎を残すかどうか
   * 
   * @returns 爆発の発生に成功したかどうか
   */
  function explode(
    pos: IntPos | FloatPos,
    source: Entity,
    power: number,
    range: number,
    isDestroy: boolean,
    isFire: boolean
  ): boolean;

  /**
   * ### 指定位置で爆発を発生させる
   * 
   * @param x x座標
   * @param y y座標
   * @param z z座標
   * @param dimId ディメンションID
   * @param source 爆発の元となるエンティティオブジェクト、`Null`でも構いません
   * @param power 爆発の威力値、爆発のダメージと範囲に影響します
   * @param range 爆発の範囲半径、爆発の拡散範囲に影響します
   * @param isDestroy 爆発がブロックを破壊するかどうか
   * @param isFire 爆発後に炎を残すかどうか
   * 
   * @returns 爆発の発生に成功したかどうか
   */
  function explode(
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2,
    source: Entity,
    power: number,
    range: number,
    isDestroy: boolean,
    isFire: boolean
  ): boolean;
}
