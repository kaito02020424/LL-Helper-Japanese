/// <reference path="../index.d.ts" />

declare enum DamageCause {
  /** その他 */
  None = -0x01,

  /** 不正な方法（例: スクリプトが直接体力を0に設定）この種のダメージは防具やバフによって吸収されません */
  Override = 0x00,

  /** 接触ダメージ（例: サボテン） */
  Contact = 0x01,

  /** エンティティによる攻撃 */
  EntityAttack = 0x02,

  /** 弾丸による攻撃 */
  Projectile = 0x03,

  /** 窒息（密閉空間） */
  Suffocation = 0x04,

  /** 落下 */
  Fall = 0x05,

  /** 火災 */
  Fire = 0x06,

  /** 火災の継続ダメージ */
  FireTick = 0x07,

  /** 溶岩 */
  Lava = 0x08,

  /** 溺れ */
  Drowning = 0x09,

  /** ブロックの爆発 */
  BlockExplosion = 0x0a,

  /** エンティティの爆発 */
  EntityExplosion = 0x0b,

  /** 虚空 */
  Void = 0x0c,

  /** 自殺 */
  Suicide = 0x0d,

  /** イリュージョンのダメージ、ガーディアンの魔法ダメージ、ポーションのダメージなど */
  Magic = 0x0e,

  /** ウィザー効果 */
  Wither = 0x0f,

  /** 飢餓 */
  Starve = 0x10,

  /** 落下する金床 */
  Anvil = 0x11,

  /** 荊棘 */
  Thorns = 0x12,

  /** 落下するブロック */
  FallingBlock = 0x13,

  /** ピストン */
  Piston = 0x14,

  /** 動力エネルギー（滑空して壁にぶつかる） */
  FlyIntoWall = 0x15,

  /** マグマ */
  Magma = 0x16,

  /** ファイヤーワークス */
  Fireworks = 0x17,

  /** 稲妻 */
  Lightning = 0x18,

  /** ??? */
  Charging = 0x19,

  /** 温度（雪だるま？） */
  Temperature = 0x1a,

  /** 凍結 */
  Freezing = 0x1b,

  /** 鍾乳石による打撃 */
  Stalactite = 0x1c,

  /** 鍾乳石に落下 */
  Stalagmite = 0x1d,

  /** すべて */
  All = 0x1f,
}

declare namespace mc {
  /** エンティティの死亡 */
  function listen(
    event: "onMobDie",
    listener: (mob: Entity, source: Entity, cause: number) => void
  ): boolean;

  /** エンティティの被害（プレイヤーも含む） */
  function listen(
    event: "onMobHurt",
    listener: (
      mob: Entity,
      source: Entity | null,
      damage: number,
      cause: DamageCause | number
    ) => boolean | void
  ): boolean;

  /** エンティティによる爆発が発生 */
  function listen(
    event: "onEntityExplode",
    listener: (
      source: Entity,
      pos: FloatPos,
      radius: number,
      maxResistance: number,
      isDestroy: boolean,
      isFire: boolean
    ) => boolean | void
  ): boolean;

  /** エンティティのスポーンが発生
   * @deprecated 代わりにonMobTrySpawnとonMobSpawnedイベントを使用してください
   */
  function listen(
    event: "onMobSpawn",
    listener: (typeName: string, pos: FloatPos) => boolean | void
  ): boolean;

  /**
   * エンティティが自然にスポーンしようとする際に発生
   * 
   * コールバック内で:
   * * `typeName`: 生成されるエンティティの名前
   * * `pos`: 生成座標
   */
  function listen(
    event: "onMobTrySpawn",
    listener: (typeName: string, pos: FloatPos) => boolean | void
  )

  /**
   * エンティティが自然にスポーンし終わった際に発生
   * 
   * コールバック内で:
   * * `entity`: 生成されたエンティティのオブジェクト
   * * `pos`: 生成座標
   */
  function listen(
    event: "onMobSpawned",
    listener: (entity: Entity, pos: FloatPos) => void
  )

  /** エンティティが弾丸に当たった */
  function listen(
    event: "onProjectileHitEntity",
    listener: (entity: Entity, source: Entity) => void
  ): boolean;

  /** ウィザーボスがブロックを破壊 */
  function listen(
    event: "onWitherBossDestroy",
    listener: (witherBoss: Entity, AAbb: IntPos, aaBB: IntPos) => boolean | void
  ): boolean;

  /**
   * エンダードラゴンがブロックを破壊
   * 
   * コールバック内で:
   * * `EnderDragon`: エンダードラゴンのエンティティ
   * * `block`: エンダードラゴンが破壊したブロック
   */
  function listen(
    event: "onEnderDragonDestroy",
    listener: (EnderDragon: Entity, block: Block) => boolean | void
  )

  /** エンティティのライド */
  function listen(
    event: "onRide",
    listener: (entity1: Entity, entity2: Entity) => boolean | void
  ): boolean;

  /** エンティティがプレッシャープレートを踏む */
  function listen(
    event: "onStepOnPressurePlate",
    listener: (entity: Entity, pressurePlate: Block) => boolean | void
  ): boolean;

  /** 弾丸の作成 */
  function listen(
    event: "onSpawnProjectile",
    listener: (shooter: Entity, type: string) => boolean | void
  ): boolean;

  /** 弾丸の作成が完了 */
  function listen(
    event: "onProjectileCreated",
    listener: (shooter: Entity, entity: Entity) => boolean | void
  ): boolean;

  /** NPCがコマンドを実行 */
  function listen(
    event: "onNpcCmd",
    listener: (npc: Entity, pl: Player, cmd: string) => boolean | void
  ): boolean;

  /** アーマースタンドの変更 */
  function listen(
    event: "onChangeArmorStand",
    listener: (as: Entity, pl: Player, slot: number) => boolean | void
  ): boolean;

  /** エンティティの変換 */
  function listen(
    event: "onEntityTransformation",
    listener: (uniqueId: string, entity: Entity) => void
  ): boolean;
}
