/// <reference path="../index.d.ts" />

declare namespace mc {
  /** ブロックがプレイヤーによって対話されたときのリスナー */
  function listen(
    event: "onBlockInteracted",
    listener: (player: Player, block: Block) => boolean | void
  ): boolean;

  /** ブロックが変更されたときのリスナー */
  function listen(
    event: "onBlockChanged",
    listener: (beforeBlock: Block, afterBlock: Block) => boolean | void
  ): boolean;

  /** ブロックから起こる爆発イベントのリスナー */
  function listen(
    event: "onBlockExplode",
    listener: (
      source: Block,
      pos: FloatPos,
      radius: number,
      maxResistance: number,
      isDestroy: boolean,
      isFire: boolean
    ) => boolean | void
  ): boolean;

  /** ブロックが爆発によって破壊されたときのリスナー */
  function listen(
    event: "onBlockExploded",
    listener: (block: Block, source: Entity) => void
  ): boolean;

  /** 火が広がるイベントのリスナー */
  function listen(
    event: "onFireSpread",
    listener: (pos: IntPos) => boolean | void
  ): boolean;

  /** コマンドブロックがコマンドを実行したときのリスナー */
  function listen(
    event: "onCmdBlockExecute",
    listener: (cmd: string, pos: IntPos, isMinecart: boolean) => boolean | void
  ): boolean;

  /** コンテナ内のアイテムが変更されたときのリスナー */
  function listen(
    event: "onContainerChange",
    listener: (
      player: Player,
      container: Block,
      slotNum: number,
      oldItem: Item,
      newItem: Item
    ) => void
  ): boolean;

  /** ブロックが射撃物によって命中したときのリスナー */
  function listen(
    event: "onProjectileHitBlock",
    listener: (player: Player, block: Block) => void
  ): boolean;

  /** レッドストーンの更新イベントのリスナー */
  function listen(
    event: "onRedStoneUpdate",
    listener: (block: Block, level: number, isActive: boolean) => boolean | void
  ): boolean;

  /** ホッパー（ホッパーカート）がアイテムを吸い込むかどうかを調べるイベントのリスナー */
  function listen(
    event: "onHopperSearchItem",
    listener: (pos: FloatPos, isMinecart: boolean) => boolean | void
  ): boolean;

  /** ホッパーがアイテムを押し出すイベントのリスナー */
  function listen(
    event: "onHopperPushOut",
    listener: (cmd: string, pos: IntPos, isMinecart: boolean) => boolean | void
  ): boolean;

  /** ピストンが押し出しを試みたときのリスナー */
  function listen(
    event: "onPistonTryPush",
    listener: (pistonPos: IntPos, block: Block) => boolean | void
  ): boolean;

  /** ピストンがブロックを押し出したときのリスナー */
  function listen(
    event: "onPistonPush",
    listener: (pistonPos: IntPos, block: Block) => boolean | void
  ): boolean;

  /** 耕地が劣化したときのリスナー */
  function listen(
    event: "onFarmLandDecay",
    listener: (pos: IntPos, entity: Entity) => boolean | void
  ): boolean;

  /** アイテムフレームブロックが操作されたときのリスナー */
  function listen(
    event: "onUseFrameBlock",
    listener: (player: Player, block: Block) => boolean | void
  ): boolean;

  /** 流体ブロックが流れるときのリスナー */
  function listen(
    event: "onLiquidFlow",
    listener: (from: Block, to: IntPos) => boolean | void
  ): boolean;
}
