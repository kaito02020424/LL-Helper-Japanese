/// <reference path="../../index.d.ts" />

/**
 * ### 🎈 エンティティオブジェクト
 *
 * スクリプトエンジンでは、「エンティティオブジェクト」を使用して特定のエンティティに関連する情報を操作および取得します。
 *
 * このクラスには**コンストラクタはありません**。このクラスのインスタンスを取得するには、以下の方法を使用してください：
 *
 * - イベントリスナーから取得
 * - {@linkcode mc.getAllEntities()}
 * - {@linkcode mc.spawnMob()}
 * - {@linkcode mc.cloneMob()}
 * - 他のAPIから取得
 *
 * **注意**: エンティティオブジェクトを長期間保持しないでください。
 * 対応するエンティティが破棄されると、エンティティオブジェクトも同時に解放されます。
 * したがって、エンティティと長期間対話する必要がある場合は、上記の方法を使用してリアルタイムのエンティティオブジェクトを取得してください。
 *
 * @see [🎈 エンティティオブジェクト API](https://docs.litebds.com/en/#/LLSEPluginDevelopment/GameAPI/Entity)
 */
declare class Entity {
  /** エンティティ名 */
  readonly name: string;

  /** エンティティの標準タイプ名 */
  readonly type: string;

  /** エンティティのゲーム内ID */
  readonly id: number;

  /** エンティティの位置 */
  readonly pos: FloatPos;

  /** エンティティのブロック位置 */
  readonly blockPos: IntPos;

  /** エンティティの足元の位置 */
  readonly feetPos: FloatPos;

  /** エンティティの最大体力 */
  readonly maxHealth: number;

  /** エンティティの現在の体力 */
  readonly health: number;

  /** エンティティが飛行できるかどうか */
  readonly canFly: boolean;

  /** エンティティが凍結できるかどうか */
  readonly canFreeze: boolean;

  /** エンティティが昼光を見ることができるかどうか */
  readonly canSeeDaylight: boolean;

  /** エンティティがアイテムを拾えるかどうか */
  readonly canPickupItems: boolean;

  /** エンティティが浮遊しているかどうか */
  readonly inAir: boolean;

  /** エンティティが水中にいるかどうか */
  readonly inWater: boolean;

  /** エンティティが溶岩中にいるかどうか */
  readonly inLava: boolean;

  /** エンティティが雨中にいるかどうか */
  readonly inRain: boolean;

  /** エンティティが雪中にいるかどうか */
  readonly inSnow: boolean;

  /** エンティティが壁にいるかどうか */
  readonly inWall: boolean;

  /** エンティティが水中または雨中にいるかどうか */
  readonly inWaterOrRain: boolean;

  /** エンティティがワールド内にいるかどうか */
  readonly inWorld: boolean;

  /** エンティティの現在の速度 */
  readonly speed: number;

  /** エンティティの現在の向き */
  readonly direction: DirectionAngle;

  /** エンティティの一意の識別子 */
  readonly uniqueId: string;

  /** エンティティが透明かどうか */
  readonly isInvisible: boolean;

  /** エンティティがポータル内にいるかどうか */
  readonly isInsidePortal: boolean;

  /** エンティティが信頼できるかどうか */
  readonly isTrusting: boolean;

  /** エンティティがダメージを受けるブロックに触れているかどうか */
  readonly isTouchingDamageBlock: boolean;

  /** エンティティが炎に包まれているかどうか */
  readonly isOnFire: boolean;

  /** エンティティが地上にいるかどうか */
  readonly isOnGround: boolean;

  /** エンティティが熱いブロックの上にいるかどうか */
  readonly isOnHotBlock: boolean;

  /** エンティティがトレードをしているかどうか */
  readonly isTrading: boolean;

  /** エンティティが乗っているかどうか */
  readonly isRiding: boolean;

  /** エンティティがダンスをしているかどうか */
  readonly isDancing: boolean;

  /** エンティティが眠っているかどうか */
  readonly isSleeping: boolean;

  /** エンティティが怒っているかどうか */
  readonly isAngry: boolean;

  /** エンティティが幼体かどうか */
  readonly isBaby: boolean;

  /** エンティティが移動中かどうか */
  readonly isMoving: boolean;

  /** 位置の変化 */
  readonly posDelta: FloatPos;

  /**
   * ### エンティティを指定した位置にテレポート
   *
   * @param pos - 目標位置の座標
   * @param rot - テレポート後のエンティティの向き。省略すると、テレポート前と同じ向きになります。
   *
   * @returns テレポートが成功したかどうか
   */
  teleport(pos: IntPos | FloatPos, rot?: DirectionAngle): boolean;

  /**
   * ### エンティティを指定した位置にテレポート
   *
   * @param x - x座標
   * @param y - y座標
   * @param z - z座標
   * @param dimId - 次元ID
   * @param rot - テレポート後のエンティティの向き。省略すると、テレポート前と同じ向きになります。
   *
   * @returns テレポートが成功したかどうか
   */
  teleport(
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2 | 3,
    rot?: DirectionAngle
  ): boolean;

  /**
   * ### 指定したエンティティを殺す
   *
   * @returns 実行が成功したかどうか
   */
  kill(): boolean;

  /**
   * ### エンティティにダメージを与える
   *
   * ここで与えるダメージは真のダメージであり、アーマーや保護装備によって軽減されません。
   *
   * @param damage - エンティティに与えられるダメージ量
   * @param type - ダメージの種類（{@linkcode ActorDamageCause}を参照）
   *
   * @returns ダメージが与えられたかどうか
   */
  hurt(damage: number, type?: number): boolean;

  /**
   * ### エンティティを回復する
   *
   * @param health - 回復する体力量
   *
   * @returns 回復が成功したかどうか
   */
  // 公式バージョンでは実装されていない
  // heal(health: number): boolean;

  /**
   * ### エンティティに火をつける
   *
   * @param time - 燃える期間（秒単位）
   *
   * @returns 火をつけたかどうか
   */
  setOnFire(time: number): boolean;

  /**
   * ### エンティティのサイズを設定する
   *
   * @param scale - 新しいエンティティのサイズ
   *
   * @returns エンティティが成功補正されたかどうか
   */
  // 公式バージョンでは実装されていない
  // setScale(scale: number): boolean;

  /**
   * ### エンティティから指定座標までの距離を取得する
   *
   * @param pos - 対象位置
   *
   * @returns その座標までの距離（ブロック単位）
   */
  // 公式バージョンでは実装されていない
  // distanceToPos(pos: IntPos | FloatPos): number;

  /**
   * ### エンティティオブジェクトがプレイヤーかどうかをチェック
   *
   * @returns 現在のエンティティオブジェクトがプレイヤーかどうか
   */
  isPlayer(): boolean;
  /**
   * ### エンティティオブジェクトをプレイヤーオブジェクトに変換
   *
   * 現在のエンティティオブジェクトがプレイヤーを指している場合、この関数を使用してエンティティオブジェクトをプレイヤーオブジェクトに変換し、より多くのプレイヤー関連のAPIを使用できます。
   * このエンティティオブジェクトがプレイヤーを指していない場合、または変換に失敗した場合、`null`が返ります。
   *
   * @returns 変換されたプレイヤーオブジェクト、失敗した場合は `null`
   */
  toPlayer(): Player | null;

  /**
   * ### エンティティオブジェクトがアイテムエンティティであるかどうかを判定
   *
   * @returns 現在のエンティティオブジェクトがアイテムエンティティであるかどうか
   */
  isItemEntity(): boolean;

  /**
   * ### アイテムエンティティ内のアイテムオブジェクトを取得
   *
   * 現在のエンティティオブジェクトがアイテムエンティティである場合、この関数を使用してアイテムエンティティ内のアイテムオブジェクトを取得し、より多くのアイテム関連のAPIを使用できます。
   * このエンティティオブジェクトがアイテムエンティティでない場合、または取得に失敗した場合、`null`が返ります。
   *
   * @returns 取得したアイテムオブジェクト、失敗した場合は `null`
   */
  toItem(): Item | null;

  /**
   * ### エンティティの現在の立っているブロックを取得
   *
   * @returns 現在立っているブロックオブジェクト
   */
  getBlockStandingOn(): Block;

  /**
   * ### 生物のアーマーコンテナオブジェクトを取得
   *
   * @returns このエンティティのアーマーコンテナに対応するコンテナオブジェクト
   */
  getArmor(): Container;

  /**
   * ### 生物がコンテナを持っているかどうかを判定（アーマーコンテナを除く）
   *
   * アルパカの背中に箱など、それぞれ独自のコンテナオブジェクトを持っています。
   *
   * @returns この生物エンティティがコンテナを持っているかどうか
   */
  hasContainer(): boolean;

  /**
   * ### 生物が所有するコンテナオブジェクトを取得（アーマーコンテナを除く）
   *
   * @returns この生物エンティティが所有するコンテナオブジェクト
   */
  getContainer(): Container;

  /**
   * ### 生物のアイテムをリフレッシュ
   *
   * 生物のアイテムを変更した後、クライアントで適用するために生物のすべてのアイテムをリフレッシュする必要があります。
   *
   * @returns リフレッシュが成功したかどうか
   */
  refreshItems(): boolean;

  /**
   * ### エンティティにタグを追加
   *
   * @param tag - 追加するタグの文字列
   *
   * @returns タグが追加されたかどうか
   */
  addTag(tag: string): boolean;

  /**
   * ### エンティティからタグを削除
   *
   * @param tag - 削除するタグの文字列
   *
   * @returns タグが削除されたかどうか
   */
  removeTag(tag: string): boolean;

  /**
   * ### エンティティが特定のタグを持っているか確認
   *
   * @param tag - 確認するタグの文字列
   *
   * @returns このタグを持っているかどうか
   */
  hasTag(tag: string): boolean;

  /**
   * ### エンティティが持つすべてのタグのリストを返す
   *
   * @returns エンティティが持つすべてのタグの文字列リスト
   */
  getAllTags(): Array<string>;

  /**
   * ### エンティティに対応するNBTオブジェクトを取得
   *
   * @returns エンティティのNBTオブジェクト
   */
  getNbt(): NbtCompound;

  /**
   * ### エンティティに対応するNBTオブジェクトを書き込む
   *
   * @param nbt - NBTオブジェクト
   *
   * @returns 書き込みが成功したかどうか
   */
  setNbt(nbt: NbtCompound): boolean;

  /**
   * @deprecated
   * @alias {@linkcode getNbt()}
   */
  getTag(): NbtCompound;

  /**
   * @deprecated
   * @alias {@linkcode setNbt()}
   */
  setTag(nbt: NbtCompound): boolean | null;

  /**
   * ### エンティティの視線方向にあるエンティティを取得
   *
   * @param maxDistance - 最大距離の探索
   *
   * @returns 視線方向のエンティティ、取得に失敗した場合は `null`
   */
  getEntityFromViewVector(maxDistance?: number): Entity | null;

  /**
   * ### エンティティの視線方向にあるブロックを取得
   *
   * @param includeLiquid - 液体ブロックを含めるか
   * @param solidOnly - `Solid` タイプのブロックのみを許可するか
   * @param maxDistance - 最大距離の探索
   * @param fullOnly - 完全なブロックのみを許可するか
   *
   * @returns 視線方向のブロック、取得に失敗した場合は `null`
   */
  getBlockFromViewVector(
    includeLiquid?: boolean,
    solidOnly?: boolean,
    maxDistance?: number,
    fullOnly?: boolean
  ): Block | null;

  /**
   * ### Molangスクリプトを高速に実行
   *
   * Molangの詳細な使用方法については、[MOLANGドキュメント bedrock.dev](https://bedrock.dev/zh/docs/stable/Molang)を参照してください。
   *
   * @param str - Molangスクリプト
   *
   * @returns スクリプトの実行結果
   */
  quickEvalMolangScript(str: string): number;

  asPointer(): NativePointer | null;

  /**
   * ### エンティティのサイズを設定
   *
   * @param scale - 新しいエンティティのサイズ（整数）
   *
   * @returns サイズが設定されたかどうか
   */
  setScale(scale: number): boolean;

  /**
   * ### エンティティの消火
   *
   * @returns 消火が成功したかどうか
   */
  stopFire(): boolean;

  /**
   * @deprecated
   * ### エンティティから座標への距離を取得
   *
   * @param pos - 対象位置
   *
   * @returns その座標までの距離（ブロック単位）
   *
   */
  distanceToPos(pos: Entity | Player | IntPos | FloatPos): number;

  /**
   *
   * ### エンティティから座標への距離を取得
   *
   * @param pos - 対象位置
   *
   * @returns その座標までの距離（ブロック単位）
   *
   */
  distanceToSqr(pos: Entity | Player | IntPos | FloatPos): number;

  /**
   *
   * ### エンティティから座標への距離を取得
   *
   * @param pos - 対象位置
   *
   * @returns その座標までの距離（ブロック単位）
   *
   */
  distanceTo(pos: Entity | Player | IntPos | FloatPos): number;

  /** 生命値を設定 */
  setHealth(health: number): boolean;

  /** 生命値上限を設定 */
  setMaxHealth(health: number): boolean;

  /**
   * ダメージ吸収属性を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setAbsorption(value: number): boolean;

  /**
   * 攻撃ダメージ属性を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setAttackDamage(value: number): boolean;

  /**
   * 最大攻撃ダメージ属性
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setMaxAttackDamage(value: number): boolean;

  /**
   * フォロー範囲を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setFollowRange(value: number): boolean;

  /**
   * ノックバック抵抗属性を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setKnockbackResistance(value: 0 | 1): boolean;

  /**
   * 幸運属性を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setLuck(value: number): boolean;

  /**
   * 移動速度属性を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setMovementSpeed(value: number): boolean;

  /**
   * 水中移動速度属性を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setUnderwaterMovementSpeed(value: number): boolean;

  /**
   * 岩浆上移動速度属性を設定
   * @param value - 新しい値
   * @returns 成功したかどうか
   */
  setLavaMovementSpeed(value: number): boolean;

  /**
   * 指定エンティティを消滅させる
   * @returns 成功したかどうか
   */
  despawn(): boolean;

  /**
   * 指定エンティティを削除
   * @returns 成功したかどうか
   */
  remove(): boolean;

  setPosDelta(arg1: FloatPos): boolean;

  setPosDelta(arg1: number, arg2: number, arg3: number): boolean;

  /**
   * エンティティのすべての効果を取得
   * @returns エンティティのすべての効果ID
   */
  getAllEffects(): number[];

  /**
   * エンティティに効果を追加
   * @param id - 効果のID
   * @param tick - 持続時間
   * @param level - レベル
   * @param showParticles - パーティクルを表示するかどうか
   * @returns 成功したかどうか
   */
  addEffect(
    id: number,
    tick: number,
    level: number,
    showParticles: boolean
  ): boolean;

  /**
   * エンティティから効果を削除
   * @param id - 効果のID
   * @returns 成功したかどうか
   */
  removeEffect(id: number): boolean;
}

declare class LLSE_Entity extends Entity { }