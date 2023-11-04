/// <reference path="../index.d.ts" />

declare namespace mc {
  /** プレイヤーがサーバーに接続しようと開始するときに発生します。 */
  function listen(
    event: 'onPreJoin',
    listener: (player: Player) => boolean | void
  ): boolean;

  /** プレイヤーがゲームに参加したときに発生します（ワールドの読み込みが完了）。 */
  function listen(event: 'onJoin', listener: (player: Player) => void): boolean;

  /** プレイヤーがゲームから退出したときに発生します。 */
  function listen(event: 'onLeft', listener: (player: Player) => void): boolean;

  /** プレイヤーが復活したときに発生します。 */
  function listen(
    event: 'onRespawn',
    listener: (player: Player) => void
  ): boolean;

  /** プレイヤーが死亡したときに発生します。 */
  function listen(
    event: 'onPlayerDie',
    listener: (player: Player, source: Entity | null) => void
  ): boolean;

  /** プレイヤーがコマンドを実行したときに発生します。 */
  function listen(
    event: 'onPlayerCmd',
    listener: (player: Player, cmd: string) => boolean | void
  ): boolean;

  /** プレイヤーがチャットメッセージを送信したときに発生します。 */
  function listen(
    event: 'onChat',
    listener: (player: Player, msg: string) => boolean | void
  ): boolean;

  /** プレイヤーがディメンションを切り替えたときに発生します。 */
  function listen(
    event: 'onChangeDim',
    listener: (player: Player, dimId: 0 | 1 | 2) => void
  ): boolean;

  /** プレイヤーがジャンプしたときに発生します。 */
  function listen(event: 'onJump', listener: (player: Player) => void): boolean;

  /** プレイヤーがスニーク状態を切り替えたときに発生します。 */
  function listen(
    event: 'onSneak',
    listener: (player: Player, isSneaking: boolean) => void
  ): boolean;

  /** プレイヤーがエンティティを攻撃したときに発生します。 */
  function listen(
    event: 'onAttackEntity',
    listener: (player: Player, entity: Entity, damage: number) => boolean | void
  ): boolean;

  /** プレイヤーがブロックを攻撃したときに発生します。 */
  function listen(
    event: 'onAttackBlock',
    listener: (player: Player, block: Block, item: Item) => boolean | void
  ): boolean;

  /** プレイヤーがアイテムを使用したときに発生します。 */
  function listen(
    event: 'onUseItem',
    listener: (player: Player, item: Item) => boolean | void
  ): boolean;

  /** プレイヤーがブロックにアイテムを使用したときに発生します（右クリック）。 */
  function listen(
    event: 'onUseItemOn',
    listener: (
      player: Player,
      item: Item,
      block: Block,
      side: number,
      pos: FloatPos
    ) => boolean | void
  ): boolean;

  /** プレイヤーがアイテムを拾ったときに発生します。 */
  function listen(
    event: 'onTakeItem',
    listener: (player: Player, entity: Entity, item: Item) => boolean | void
  ): boolean;

  /** プレイヤーがアイテムをドロップしたときに発生します。 */
  function listen(
    event: 'onDropItem',
    listener: (player: Player, item: Item) => boolean | void
  ): boolean;

  /** プレイヤーが食べ物を食べているときに発生します。 */
  function listen(
    event: 'onEat',
    listener: (player: Player) => boolean | void
  ): boolean;

  /** プレイヤーがトーテムを消費したときに発生します。 */
  function listen(
    event: 'onConsumeTotem',
    listener: (player: Player) => boolean | void
  ): boolean;

  /** プレイヤーがエフェクトを獲得したときに発生します。 */
  function listen(
    event: 'onEffectAdded',
    listener: (
      player: Player,
      effectName: string,
      amplifier: number,
      duration: number
    ) => boolean | void
  ): boolean;

/** プレイヤーがサーバーに接続しようと開始するときに発生します。 */
function listen(
  event: 'onPreJoin',
  listener: (player: Player) => boolean | void
): boolean;

/** プレイヤーからエフェクトが削除されたときに発生します。 */
function listen(
  event: 'onEffectRemoved',
  listener: (player: Player, effectName: string) => boolean | void
): boolean;

  /** プレイヤーがエフェクトを更新したときに発生します。 */
  function listen(
    event: 'onEffectUpdated',
    listener: (
      player: Player,
      effectName: string,
      amplifier: number,
      duration: number
    ) => boolean | void
  ): boolean;

  /** プレイヤーがブロックを破壊し始めたときに発生します（左クリック）。 */
  function listen(
    event: 'onStartDestroyBlock',
    listener: (player: Player, block: Block) => void
  ): boolean;

  /** プレイヤーがブロックを破壊し終えたときに発生します。 */
  function listen(
    event: 'onDestroyBlock',
    listener: (player: Player, block: Block) => boolean | void
  ): boolean;

  /** プレイヤーがブロックを配置しようとしたときに発生します。 */
  function listen(
    event: 'onPlaceBlock',
    listener: (player: Player, block: Block) => boolean | void
  ): boolean;

  /** プレイヤーがブロックを配置したときに発生します。 */
  function listen(
    event: 'afterPlaceBlock',
    listener: (player: Player, block: Block) => void
  ): boolean;

  /** プレイヤーがコンテナブロックを開いたときに発生します。 */
  function listen(
    event: 'onOpenContainer',
    listener: (player: Player, block: Block) => boolean | void
  ): boolean;

  /** プレイヤーがコンテナブロックを閉じたときに発生します。 */
  function listen(
    event: 'onCloseContainer',
    listener: (player: Player, block: Block) => boolean | void
  ): boolean;

  /** プレイヤーのインベントリが変更されたときに発生します。 */
  function listen(
    event: 'onInventoryChange',
    listener: (
      player: Player,
      slotNum: number,
      oldItem: Item,
      newItem: Item
    ) => void
  ): boolean;

  /** プレイヤーがスプリント状態を変更したときに発生します。 */
  function listen(
    event: 'onChangeSprinting',
    listener: (player: Player, sprinting: boolean) => void
  ): boolean;

  /** プレイヤーがリスポーンアンカーを使用したときに発生します。 */
  function listen(
    event: 'onUseRespawnAnchor',
    listener: (player: Player, pos: IntPos) => boolean | void
  ): boolean;

  /** プレイヤーがアーマースロットを変更したときに発生します。 */
  function listen(
    event: 'onSetArmor',
    listener: (player: Player, slotNum: number, item: Item) => boolean | void
  ): boolean;

  /** プレイヤーがコンテナGUIを開いたときに発生します。 */
  function listen(
    event: 'onOpenContainerScreen',
    listener: (player: Player) => boolean | void
  ): boolean;

  /** プレイヤーが経験値を獲得したときに発生します。 */
  function listen(
    event: 'onExperienceAdd',
    listener: (player: Player, exp: number) => boolean | void
  ): boolean;

  /** プレイヤーがベッドに入ったときに発生します。 */
  function listen(
    event: 'onBedEnter',
    listener: (player: Player, pos: IntPos) => boolean | void
  ): boolean;

  /** プレイヤーがバケツでアイテムを配置しようとしたときに発生します。 */
  function listen(
    event: 'onUseBucketPlace',
    listener: (
      player: Player,
      item: Item,
      block: Block | Item,
      side: 1 | 2 | 3 | 4 | 5 | 6,
      pos: FloatPos
    ) => boolean | void
  ): boolean;

  /** プレイヤーが食べ物を食べたときに発生します。 */
  function listen(
    event: 'onAte',
    listener: (player: Player, item: Item) => void
  ): boolean;
}
