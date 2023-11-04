/// <reference path="../index.d.ts" />
declare enum sendTextType {
  raw = 0,
  chat = 1,
  popup = 4,
  tip = 5,
  json = 9,
}

/** プレイヤー */
declare class Player {
  /** プレイヤー名 */
  readonly name: string;

  /** プレイヤー位置 */
  readonly pos: FloatPos;

  /** プレイヤーのブロック位置 */
  readonly blockPos: IntPos;

  /** プレイヤー足元の位置 */
  readonly feetPos: FloatPos;

  /** プレイヤーの直前の死亡位置 */
  readonly lastDeathPos: IntPos;

  /** プレイヤーの実際の名前 */
  readonly realName: string;

  /** プレイヤーのXuid文字列 */
  readonly xuid: string;

  /** プレイヤーのUuid文字列 */
  readonly uuid: string;

  /** プレイヤーの権限レベル（0 - 4） */
  readonly permLevel: number;

  /** プレイヤーのゲームモード（0 - 3） */
  readonly gameMode: number;

  /** プレイヤーが飛行できるかどうか */
  readonly canFly: boolean;

  /** プレイヤーが寝ることができるかどうか */
  readonly canSleep: boolean;

  /** プレイヤーがマップ上で表示されるかどうか */
  readonly canBeSeenOnMap: boolean;

  /** プレイヤーが凍結できるかどうか */
  readonly canFreeze: boolean;

  /** プレイヤーが日光を見ることができるかどうか */
  readonly canSeeDaylight: boolean;

  /** プレイヤーが名前タグを表示できるかどうか */
  readonly canShowNameTag: boolean;

  /** プレイヤーがベッドで寝ることを開始できるかどうか */
  readonly canStartSleepInBed: boolean;

  /** プレイヤーがアイテムを拾うことができるかどうか */
  readonly canPickupItems: boolean;

  /** プレイヤーの最大ヘルス */
  readonly maxHealth: number;

  /** プレイヤーの現在のヘルス */
  readonly health: number;

  /** プレイヤーが現在浮いているかどうか */
  readonly inAir: boolean;

  /** プレイヤーが現在水中にいるかどうか */
  readonly inWater: boolean;

  /** プレイヤーが溶岩中にいるかどうか */
  readonly inLava: boolean;

  /** プレイヤーが雨が降っているかどうか */
  readonly inRain: boolean;

  /** プレイヤーが雪が降っているかどうか */
  readonly inSnow: boolean;

  /** プレイヤーが壁にいるかどうか */
  readonly inWall: boolean;

  /** プレイヤーが水中または雨の中にいるかどうか */
  readonly inWaterOrRain: boolean;

  /** プレイヤーがワールド内にいるかどうか */
  readonly inWorld: boolean;

  /** プレイヤーが雲の中にいるかどうか */
  readonly inClouds: boolean;

  /** プレイヤーが現在しゃがんでいるかどうか */
  readonly isSneaking: boolean;

  /** @deprecated プレイヤーが現在しゃがんでいるかどうか */
  readonly sneaking: boolean;

  /** プレイヤーの現在の速度 */
  readonly speed: number;

  /** プレイヤーの現在の方向 */
  readonly direction: DirectionAngle;

  /** プレイヤー（エンティティの）ユニークな識別子 */
  readonly uniqueId: string;

  /** プレイヤーが設定した言語コード（例：zh_CN） */
  readonly langCode: string;

  /** プレイヤーが読み込み中かどうか */
  readonly isLoading: boolean;

  /** プレイヤーが透明状態かどうか */
  readonly isInvisible: boolean;

  /** プレイヤーがポータル内にいるかどうか */
  readonly isInsidePortal: boolean;

  /** プレイヤーが傷ついているかどうか */
  readonly isHurt: boolean;

  /** 未知 */
  readonly isTrusting: boolean;

  /** プレイヤーがダメージを受ける可能性のあるブロックに触れているかどうか */
  readonly isTouchingDamageBlock: boolean;

  /** プレイヤーがお腹をすかしているかどうか */
  readonly isHungry: boolean;

  /** プレイヤーが炎に巻かれているかどうか */
  readonly isOnFire: boolean;

  /** プレイヤーが地上にいるかどうか */
  readonly isOnGround: boolean;

  /** プレイヤーが高温ブロック（溶岩など）の上にいるかどうか */
  readonly isOnHotBlock: boolean;

  /** プレイヤーが取引中かどうか */
  readonly isTrading: boolean;

  /** プレイヤーがアドベンチャーモードかどうか */
  readonly isAdventure: boolean;

  /** プレイヤーが滑空中かどうか */
  readonly isGliding: boolean;

  /** プレイヤーがサバイバルモードかどうか */
  readonly isSurvival: boolean;

  /** プレイヤーがスペクテイターモードかどうか */
  readonly isSpectator: boolean;

  /** プレイヤーが乗馬中かどうか */
  readonly isRiding: boolean;

  /** プレイヤーがダンス中かどうか */
  readonly isDancing: boolean;

  /** プレイヤーがクリエイティブモードかどうか */
  readonly isCreative: boolean;

  /** プレイヤーが飛行中かどうか */
  readonly isFlying: boolean;

  /** プレイヤーが現在寝ているかどうか */
  readonly isSleeping: boolean;

  /** プレイヤーが動いているかどうか */
  readonly isMoving: boolean;

  /** @deprecated プレイヤーのデバイスIPアドレス */
  readonly ip: string;

  /**
   * プレイヤーがOPであるかどうかを判定します。
   * @returns {boolean} プレイヤーがOPであるかどうか
   */
  isOP(): boolean;

  /**
   * プレイヤーの接続を切断します。
   * @param msg {string} 切断理由を表示するメッセージ
   * @returns {boolean} 接続の切断が成功したかどうか
   */
  kick(msg?: string): boolean;

  /**
   * プレイヤーにテキストメッセージを送信します。
   * @param msg {string} 送信するテキスト
   * @param type {sendTextType | number} (オプション) 送信するテキストのタイプ、デフォルトは0です
   * @returns {boolean} 送信に成功したかどうか
   */
  tell(msg: string, type?: sendTextType | number): boolean;

  /**
   * プレイヤーにテキストメッセージを送信します。
   * @param msg {string} 送信するテキスト
   * @param type {sendTextType | number} (オプション) 送信するテキストのタイプ、デフォルトは0です
   * @returns {boolean} 送信に成功したかどうか
   */
  sendText(msg: string, type?: sendTextType | number): boolean;

  /**
   * プレイヤーの接続を切断します。
   * @param msg {string} 切断理由を表示するメッセージ
   * @returns {boolean} 接続の切断が成功したかどうか
   */
  disconnect(msg?: string): boolean;

  /**
   * 画面上部にメッセージを表示します（実績達成などと同様）。
   * @param title {string} 表示するタイトル
   * @param message {string} 表示するテキスト
   * @returns {boolean} 送信に成功したかどうか
   */
  sendToast(title: string, message: string): boolean;

  /**
   * プレイヤーの身代わりとしてコマンドを実行します。
   * @param cmd {string} 実行するコマンド
   * @returns {boolean} 実行が成功したかどうか
   */
  runcmd(cmd: string): boolean;

  /**
   * プレイヤーの身代わりとして発言します。
   * @param text {string} 模擬発言内容
   * @returns {boolean} 実行が成功したかどうか
   */
  talkAs(text: string): boolean;

  /**
   * プレイヤーの身代わりとして他のプレイヤーに発言します。
   * @param target {Player} 模擬発言対象プレイヤー
   * @param text {string} 模擬発言内容
   * @returns {boolean} 実行が成功したかどうか
   */
  talkAs(target: Player, text: string): boolean;
  /**
   * ### エンティティから指定座標までの距離を取得します。
   * @param pos 目標位置
   * @returns {number} 座標までの距離（ブロック単位）
   */
  distanceToSqr(pos: Entity | Player | IntPos | FloatPos): number;

  /**
   * ### エンティティから指定座標までの距離を取得します。
   * @param pos 目標位置
   * @returns {number} 座標までの距離（ブロック単位）
   */
  distanceTo(pos: Entity | Player | IntPos | FloatPos): number;

  /**
   * プレイヤーを指定の位置にテレポートします。
   * @param pos 目標の位置座標（またはx, y, z, dimidを使用してプレイヤーの位置を特定する）
   * @param rot 送信後のプレイヤーの向き（省略可能、省略した場合、テレポート前の向きと同じ）
   * @returns {boolean} テレポートが成功したかどうか
   */
  teleport(pos: IntPos | FloatPos, rot?: DirectionAngle): boolean;

  /**
   * プレイヤーを指定の位置にテレポートします。
   * @param pos 目標の位置座標（またはx, y, z, dimidを使用してプレイヤーの位置を特定する）
   * @param rot 送信後のプレイヤーの向き（省略可能、省略した場合、テレポート前の向きと同じ）
   * @returns {boolean} テレポートが成功したかどうか
   */
  teleport(
    x: number,
    y: number,
    z: number,
    dimid: 0 | 1 | 2,
    rot?: DirectionAngle
  ): boolean;

  /**
   * プレイヤーを殺害します。
   * @returns {boolean} 成功したかどうか
   */
  kill(): boolean;

  /**
   * プレイヤーにダメージを与えます。
   * @param damage プレイヤーに与えるダメージの値
   * @returns {boolean} ダメージを与えたかどうか
   */
  hurt(damage: number): boolean;

  /**
   * プレイヤーを回復させます。
   * @param health 回復するハートの数
   * @returns {boolean} 回復が成功したかどうか
   */
  heal(health: number): boolean;

  /**
   * プレイヤーのヘルスを設定します。
   * @param health ヘルスの数値
   * @returns {boolean} 成功したかどうか
   */
  setHealth(health: number): boolean;

  /**
   * プレイヤーの最大ヘルスを設定します。
   * @param health ヘルスの数値
   * @returns {boolean} 成功したかどうか
   */
  setMaxHealth(health: number): boolean;

  /**
   * プレイヤーのハンガー値を設定します。
   * @param hunger ハンガー値の数値
   * @returns {boolean} 成功したかどうか
   */
  setHungry(hunger: number): boolean;

  /**
   * プレイヤーを一定の時間火傷状態にします。
   * @param time 火傷の継続時間（秒単位）
   * @param isEffect 火のエフェクトがあるかどうか
   * @returns {boolean} 成功したかどうか
   */
  setFire(time: number, isEffect: boolean): boolean;

  /**
   * プレイヤーの火傷を消します。
   * @returns {boolean} 消火したかどうか
   */
  stopFire(): boolean;

  /**
   * プレイヤーの名前を変更します。
   * @param newName 新しいプレイヤー名
   * @returns {boolean} 名前を変更したかどうか
   */
  rename(newName: string): boolean;

  /**
   * プレイヤーが現在立っているブロックを取得します。
   * @returns {Block} 現在立っているブロックオブジェクト
   */
  getBlockStandingOn(): Block;

  /**
   * プレイヤーに関連するデバイス情報オブジェクトを取得します。
   * @returns {Device} プレイヤーに関連するデバイス情報オブジェクト
   */
  getDevice(): Device;

  /**
   * プレイヤーの主手に持っているアイテムオブジェクトを取得します。
   * @returns {Item} プレイヤーの主手に持っているアイテムオブジェクト
   * @tips ここで取得したアイテムオブジェクトは参照です。つまり、この関数から返されたアイテムオブジェクトを変更したり、そのAPIを使用したりすると、プレイヤーの主手に関連付けられたアイテムに直接操作が行われます。
   */
  getHand(): Item;

  /**
   * プレイヤーのオフハンドに持っているアイテムオブジェクトを取得します。
   * @returns {Item} プレイヤーのオフハンドに持っているアイテムオブジェクト
   * @tips ここで取得したアイテムオブジェクトは参照です。つまり、この関数から返されたアイテムオブジェクトを変更したり、そのAPIを使用したりすると、プレイヤーのオフハンドに関連付けられたアイテムに直接操作が行われます。
   */
  getOffHand(): Item;

  /**
   * プレイヤーのインベントリコンテナオブジェクトを取得します。
   * @returns {Container} プレイヤーのインベントリに関連付けられたコンテナオブジェクト
   */
  getInventory(): Container;

  /**
   * プレイヤーの防具スロットコンテナオブジェクトを取得します。
   * @returns {Container} プレイヤーの防具スロットに関連付けられたコンテナオブジェクト
   */
  getArmor(): Container;

  /**
   * プレイヤーのエンダーチェストコンテナオブジェクトを取得します。
   * @returns {Container} プレイヤーのエンダーチェストに関連付けられたコンテナオブジェクト
   */
  getEnderChest(): Container;

  /**
   * プレイヤーのリスポーン地点を取得します。
   * @returns {IntPos} リスポーン地点の座標
   */
  getRespawnPosition(): IntPos;

  /**
   * プレイヤーにアイテムを与えます。
   *
   * インベントリがいっぱいの場合、余分なアイテムはドロップされます。
   *
   * @param item {Item} 与えるアイテムオブジェクト
   * @param amount {number} アイテムオブジェクトの数、アイテムオブジェクト自体の `Count` プロパティは無視されます
   * @returns {boolean} 成功したかどうか
   */
  giveItem(item: Item, amount?: number): boolean;

  /**
   * プレイヤーのバックパックから特定のアイテムタイプをすべて削除します。
   * @param type {string} 削除するアイテムタイプ名
   * @returns {number} 削除したアイテムの数
   */
  clearItem(type: string): number;

  /**
   * プレイヤーのバックパックから特定のアイテムタイプを指定の数だけ削除します。
   * @param type {string} 削除するアイテムタイプ名
   * @param amount {number} 削除するアイテムの数
   * @returns {number} 削除したアイテムの数
   */
  clearItem(type: string, amount: number): number;

  /**
   * プレイヤーのアイテムを再度読み込みます。
   * @returns {boolean} 成功したかどうか
   */
  refreshItems(): boolean;

  /**
   * プレイヤーが読み込んでいるすべてのチャンクを再読み込みします。
   * @returns {boolean} 成功したかどうか
   */
  refreshChunks(): boolean;

  /**
   * プレイヤーの操作権限を変更します。
   * @param level {0 | 1 | 4} 目標の操作権限レベル
   * @returns {boolean} 成功したかどうか
   */
  setPermLevel(level: 0 | 1 | 4): boolean;

  /**
   * プレイヤーのゲームモードを変更します。
   * @param mode {number} 目標のゲームモード、0がサバイバルモード、1がクリエイティブモード、2がハードコアモードです
   * @returns {boolean} 成功したかどうか
   */
  setGameMode(mode: number): boolean;

  /**
   * プレイヤーの経験レベルを増やします。
   * @param count {number} 増やす経験レベルの数
   * @returns {boolean} 設定が成功したかどうか
   */
  addLevel(count: number): boolean;

  /**
   * プレイヤーの経験レベルを減らします。
   * @param count {number} 減らす経験レベルの数
   * @returns {boolean} 設定が成功したかどうか
   */
  reduceLevel(count: number): boolean;

  /**
   * プレイヤーの現在の経験レベルを取得します。
   * @returns {number} プレイヤーの現在の経験レベル
   */
  getLevel(): number;

  /**
   * プレイヤーの経験レベルを設定します。
   * @param count {number} 設定する経験レベル
   * @returns {boolean} 設定が成功したかどうか
   */
  setLevel(count: number): boolean;

  /**
   * プレイヤーの経験をリセットします。
   * @returns {boolean} 設定が成功したかどうか
   */
  resetLevel(): boolean;

  /**
   * プレイヤーの現在の経験値を取得します。
   * @returns {number} プレイヤーの現在の経験値
   */
  getCurrentExperience(): number;

  /**
   * プレイヤーの現在の経験値を設定します。
   * @param count {number} 設定する経験値
   * @returns {boolean} 設定が成功したかどうか
   */
  setCurrentExperience(count: number): boolean;

  /**
   * プレイヤーの合計経験値を取得します。
   * @returns {number} プレイヤーの合計経験値
   */
  getTotalExperience(): number;

  /**
 * プレイヤーの総経験値を設定します。
 * @param count {number} 設定する経験値
 * @returns {boolean} 成功したかどうか
 */
  setTotalExperience(count: number): boolean;

  /**
   * プレイヤーの経験値を増やします。
   * @param count {number} 増やす経験値の数
   * @returns {boolean} 設定が成功したかどうか
   */
  addExperience(count: number): boolean;

  /**
   * プレイヤーの経験値を減らします。
   * @param count {number} 減らす経験値の数
   * @returns {boolean} 設定が成功したかどうか
   */
  reduceExperience(count: number): boolean;

  /**
   * プレイヤーが次のレベルに必要な経験値を取得します。
   * @returns {number} プレイヤーが次のレベルに必要な経験値
   */
  getXpNeededForNextLevel(): number;

  /**
   * プレイヤーを指定のサーバーに転送します。
   * @param server {string} 目標サーバーのIP / ドメイン名
   * @param port {number} 目標サーバーのポート
   * @returns {boolean} 転送が成功したかどうか
   */
  transServer(server: string, port: number): boolean;

  /**
   * プレイヤーのクライアントをクラッシュさせます。
   * @returns {boolean} クラッシュが成功したかどうか
   */
  crash(): boolean;

  /**
   * プレイヤーのカスタムサイドバーを設定します。
   * @param title {string} サイドバーのタイトル
   * @param data {Record<string, number>} サイドバーオブジェクトの内容
   * @param sortOrder {sidebar | 0 | 1} （オプション）サイドバーコンテンツのソート順序。`0`はスコア昇順、`1`はスコア降順です。デフォルト値は `1` です。
   * @returns {boolean} 設定が成功したかどうか
   */
  setSidebar(
    title: string,
    data: Record<string, number>,
    sortOrder?: sidebar | 0 | 1
  ): boolean;

  /**
   * プレイヤーのカスタムサイドバーを削除します。
   * @returns {boolean} 削除が成功したかどうか
   */
  removeSidebar(): boolean;

  /**
   * プレイヤーが見るカスタムボスバーを設定します。
   * @param uid {number} ユニークな識別子、競合しない必要があります！バーごとに1つのuid
   * @param title {string} カスタムボスバーのタイトル
   * @param percent {number} バー内のパーセンテージ、0から100までの有効な範囲です。0は空のバー、100はフルバーです。
   * @param colour {number} バーの色（デフォルト値は2（赤））
   * @returns {boolean} 設定が成功したかどうか
   */
  setBossBar(
    uid: number,
    title: string,
    percent: number,
    colour: number
  ): boolean;

  /**
   * プレイヤーのカスタムボスバーを削除します。
   * @param uid {number} 対応するsetBossBarのuid
   * @returns {boolean} 削除が成功したかどうか
   */
  removeBossBar(uid: number): boolean;

  /**
   * オンラインプレイヤーに関連するNBTオブジェクトを取得します。
   * @returns {NbtCompound} プレイヤーのNBTオブジェクト
   */
  getNbt(): NbtCompound;

  /**
   * オンラインプレイヤーに関連するNBTオブジェクトを書き込みます。
   * @param nbt {NbtCompound} NBTオブジェクト
   * @returns {boolean} 書き込みが成功したかどうか
   */
  setNbt(nbt: NbtCompound): boolean;

  /**
   * プレイヤーにタグを追加します。
   * @param tag {string} 追加するタグ文字列
   * @returns {boolean} 設定が成功したかどうか
   */
  addTag(tag: string): boolean;

  /**
   * プレイヤーからタグを削除します。
   * @param tag {string} 削除するタグ文字列
   * @returns {boolean} 削除が成功したかどうか
   */
  removeTag(tag: string): boolean;

  /**
   * プレイヤーが特定のタグを持っているかどうかを確認します。
   * @param tag {string} 確認するタグ文字列
   * @returns {boolean} そのタグを持っているかどうか
   */
  hasTag(tag: string): boolean;

  /**
   * プレイヤーのすべてのタグ文字列のリストを取得します。
   * @returns {Array<String>} プレイヤーのすべてのタグ文字列のリスト
   */
  getAllTags(): Array<string>;

  /**
   * プレイヤーのアビリティ情報（プレイヤーNBTから取得）を取得します。
   * @returns {object<String,any>} プレイヤーのすべてのアビリティ情報のキー - 値リストオブジェクト
   */
  getAbilities(): any;

  /**
   * プレイヤーの属性情報（プレイヤーNBTから取得）を取得します。
   * @returns {Array<Object>} プレイヤーのすべての属性オブジェクトの配列
   */
  getAttributes(): Array<any>;

  /**
   * ダメージ吸収属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setAbsorption(value: number): boolean;

  /**
   * 攻撃ダメージ属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setAttackDamage(value: number): boolean;

  /**
   * 最大攻撃ダメージ属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setMaxAttackDamage(value: number): boolean;

  /**
   * フォローレンジ属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setFollowRange(value: number): boolean;

  /**
   * ノックバック抵抗属性を設定します。
   * @param value {0 | 1} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setKnockbackResistance(value: 0 | 1): boolean;

  /**
   * 幸運属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setLuck(value: number): boolean;

  /**
   * 移動速度属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setMovementSpeed(value: number): boolean;

  /**
   * 水中移動速度属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setUnderwaterMovementSpeed(value: number): boolean;

  /**
   * 溶岩上移動速度属性を設定します。
   * @param value {number} 新しい値
   * @returns {boolean} 成功したかどうか
   */
  setLavaMovementSpeed(value: number): boolean;

  /**
   * プレイヤーのスプリント状態を取得します。
   * @returns {boolean} プレイヤーのスプリント状態
   */
  isSprinting(): boolean;

  /**
   * プレイヤーのスプリント状態を設定します。
   * @param sprinting {boolean} スプリント状態かどうか
   * @returns {boolean} 設定が成功したかどうか
   */
  setSprinting(sprinting: boolean): boolean;

  /**
   * プレイヤーの視線の方向にあるエンティティを取得します。
   * @param maxDistance {number} 最大距離を検索します
   * @returns {Entity|null} 視線の方向にあるエンティティ、取得できない場合は Null を返します
   */
  getEntityFromViewVector(maxDistance?: number): Entity | null;

  /**
   * プレイヤーの視線の方向にあるブロックを取得します。
   * @param includeLiquid {boolean} 液体ブロックを含めるかどうか
   * @param solidOnly {boolean} Solid タイプのブロックのみ許可するかどうか
   * @param maxDistance {number} 検索する最大距離
   * @param fullOnly {boolean} 完全なブロックのみを許可するかどうか
   * @returns {Block|null} 視線の方向にあるブロック、取得できない場合は Null を返します
   */
  getBlockFromViewVector(
    includeLiquid?: boolean,
    solidOnly?: boolean,
    maxDistance?: number,
    fullOnly?: boolean
  ): Block | null;

  /**
   * プレイヤーにデータパケットを送信します。
   * @param packet {Packet} データパケット
   */
  sendPacket(packet: Packet): boolean | null;

  /**
   * プレイヤーが存在するバイオームIDを取得します。
   * @returns {number} プレイヤーが存在するバイオームID
   */
  getBiomeId(): number;

  /**
   * プレイヤーが存在するバイオームの名前を取得します。
   * @returns {string} プレイヤーが存在するバイオームの名前
   */
  getBiomeName(): string;

  /**
   * プレイヤーのAbility属性を設定します。
   * @param AbilityID {number} AbilityのID
   * @param value {boolean} オンまたはオフ
   * @returns {boolean} 影響なし
   */
  setAbility(AbilityID: number, value: boolean): boolean;

  /**
   * プレイヤーがボットプレイヤーかどうかを判定します。
   * @returns {boolean} ボットプレイヤーかどうか
   */
  isSimulatedPlayer(): boolean;

  /**
   * プレイヤーのバインドデータを保存します。
   * @param name {string} 保存するバインドデータの名前
   * @param data {any} 保存するバインドデータ、`Null` であっても構いません
   * @returns {boolean} 保存が成功したかどうか
   */
  setExtraData(name: string, data: any): boolean;

  /**
   * プレイヤーのバインドデータを取得します。
   * @param name {string} 取得するバインドデータの名前
   * @returns {any|null} 保存されたバインドデータ
   */
  getExtraData(name: string): any | null;

  /**
   * プレイヤーのバインドデータを削除します。
   * @param name {string} 削除するバインドデータの名前
   * @returns {boolean} 削除が成功したかどうか
   */
  delExtraData(name: string): boolean;

  /**
   * オンラインプレイヤーのスコアボードのスコアを取得します（簡易関数）。
   * @param name {string} スコアボードの名前
   * @returns {number} スコアボード上の数値
   */
  getScore(name: string): number;

  /**
   * オンラインプレイヤーのスコアボードのスコアを変更します（簡易関数）。
   * @param name {string} スコアボードの名前
   * @param value {number} 設定する値
   * @returns {boolean} 設定が成功したかどうか
   */
  setScore(name: string, value: number): boolean;

  /**
   * オンラインプレイヤーのスコアボードのスコアを増やします（簡易関数）。
   * @param name {string} スコアボードの名前
   * @param value {number} 増やす値
   * @returns {boolean} 設定が成功したかどうか
   */
  addScore(name: string, value: number): boolean;

  /**
   * オンラインプレイヤーのスコアボードのスコアを減らします（簡易関数）。
   * @param name {string} スコアボードの名前
   * @param value {number} 減らす値
   * @returns {boolean} 設定が成功したかどうか
   */
  reduceScore(name: string, value: number): boolean;

  /**
   * オンラインプレイヤーのスコアボードからスコアを削除します（簡易関数）。
   * @param name {string} スコアボードの名前
   * @returns {boolean} 削除が成功したかどうか
   */
  deleteScore(name: string): boolean;

  /**
   * プレイヤーにモーダルフォームを送信します。
   * @param title {string} フォームのタイトル
   * @param content {string} フォームの内容
   * @param confirmButton {string} ボタン1のテキスト
   * @param cancelButton {string} ボタン2のテキスト
   * @param callback {(player: Player, result: boolean | null) => void} プレイヤーがボタンをクリックした後に呼び出されるコールバック関数
   * @returns {number|null} 送信されたフォームのID
   */
  sendModalForm(
    title: string,
    content: string,
    confirmButton: string,
    cancelButton: string,
    callback: (player: Player, result: boolean | null) => void
  ): number | null;

  /**
   * プレイヤーにシンプルフォームを送信します。
   * @param title {string} フォームのタイトル
   * @param content {string} フォームの内容
   * @param buttons {Array<string>} 各ボタンのテキストの文字列の配列
   * @param images {Array<string>} 各ボタンに対応する画像のパスの配列
   * @param callback {(player: Player, id: number | null) => void} プレイヤーがボタンをクリックした後に呼び出されるコールバック関数
   */
  sendSimpleForm(
    title: string,
    content: string,
    buttons: Array<string>,
    images: Array<string>,
    callback: (player: Player, id: number | null) => void
  ): number | null;

  /**
   * プレイヤーにカスタムフォーム（JSON形式）を送信します。
   * @param json {string} カスタムフォームのJSON文字列
   * @param callback {(player: Player, data: Array<any> | null) => void} プレイヤーがフォームを提出した後に呼び出されるコールバック関数
   */
  sendCustomForm(
    json: string,
    callback: (player: Player, data: Array<any> | null) => void
  ): number | null;

  /**
   * シンプルフォームまたはカスタムフォームをプレイヤーに送信します。
   * @param fm {SimpleForm | CustomForm} 設定済みのフォームオブジェクト
   * @param callback {(player: Player, data: number | Array<any> | null) => void} プレイヤーがフォーム要素と対話した後に呼び出されるコールバック関数
   */
  sendForm(
    fm: SimpleForm,
    callback: (player: Player, id: number | null) => void
  ): number | null;

  /**
   * カスタムフォームを送信する
   * @param fm 設定済みのフォームオブジェクト
   * @param callback {(player: Player, data: Array<any> | null) => void} プレイヤーがフォーム要素と対話した後に呼び出されるコールバック関数
   */
  sendForm(
    fm: CustomForm,
    callback: (player: Player, data: Array<any> | null) => void
  ): number | null;

  /**
   * 发送表单
   * @param fm 配置好的表单对象
   * @param callback 玩家与表单元素互动之后被调用的回调函数。
   */
  sendForm(
    fm: CustomForm | SimpleForm,
    callback: (player: Player, data: number | Array<any> | null) => void
  ): number | null;

  /**
   * 非推奨: 代わりに getInventory() を使用してください。
   * @deprecated この関数は非推奨です。代わりに getInventory() を使用してください。
   */
  getContainer(): Container;

  /**
   * プレイヤーのサイズを変更します。
   * @param scale {number} 新しいプレイヤーサイズ（整数）
   * @returns {boolean} サイズ変更が成功したかどうか
   */
  setScale(scale: number): boolean;

  /**
   * プレイヤーにタイトルを表示します。
   * @param content {string} 設定するタイトルの内容
   * @param type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8} タイトルのタイプ、デフォルトは2
   * @param fadeInTime {number} フェードイン時間、単位はTick、デフォルトは10
   * @param stayTime {number} ステイ時間、単位はTick、デフォルトは70
   * @param fadeOutTime {number} フェードアウト時間、単位はTick、デフォルトは20
   * @returns {boolean} 送信が成功したかどうか
   */
  setTitle(
    content: string,
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    fadeInTime?: number,
    stayTime?: number,
    fadeOutTime?: number
  ): boolean;

  /**
   * プレイヤーから特定の座標までの距離を取得します。
   * @param pos {IntPos | FloatPos} ターゲットの位置
   * @returns {number} 座標までの距離（ブロック）
   * @deprecated この関数は非推奨です。
   */
  distanceToPos(pos: IntPos | FloatPos): number;

  /**
   * プレイヤーの所持金を増やします。
   * @param value {number} 増やす金額
   * @returns {boolean} 設定が成功したかどうか
   */
  addMoney(value: number): boolean;

  /**
   * プレイヤーのすべてのエフェクトを取得します。
   * @returns {number[]} プレイヤーのすべてのエフェクトID
   */
  getAllEffects(): number[];

  /**
   * プレイヤーにエフェクトを追加します。
   * @param id {number} エフェクトのID
   * @param tick {number} 持続時間
   * @param level {number} レベル
   * @param showParticles {boolean} パーティクルを表示するかどうか
   * @returns {boolean} 設定が成功したかどうか
   */
  addEffect(id: number, tick: number, level: number, showParticles: boolean): boolean;

  /**
   * プレイヤーからエフェクトを削除します。
   * @param id {number} エフェクトのID
   * @returns {boolean} 設定が成功したかどうか
   */
  removeEffect(id: number): boolean;
}

declare namespace mc {
  /**
   * すべてのプレイヤーにテキストメッセージをブロードキャストします。
   * @param msg 待機中のテキストメッセージ
   * @param type （オプション）テキストメッセージのタイプ、デフォルトは0
   * @returns boolean 送信に成功したかどうか
   */
  function broadcast(msg: string, type?: sendTextType | number): boolean;

  /**
   * プレイヤーのリスポーン位置を変更します。
   * @param pos リスポーン位置（または x, y, z, dimid で指定可能）
   * @returns boolean 修正に成功したかどうか
   */
  function setRespawnPosition(pos: IntPos): boolean;

  /**
   * プレイヤーのリスポーン位置を変更します。
   * @param pos リスポーン位置（または x, y, z, dimid で指定可能）
   * @returns boolean 修正に成功したかどうか
   */
  function setRespawnPosition(
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2
  ): boolean;

  /**
   * モックプレイヤーを生成します。
   * @param name モックプレイヤーの名前
   * @param pos エンティティの生成位置の座標オブジェクト（または x, y, z, dimid で指定可能）
   * @returns SimulatedPlayer モックプレイヤーオブジェクト、または null
   */
  function spawnSimulatedPlayer(
    name: string,
    pos: IntPos
  ): SimulatedPlayer | null;

  /**
   *
   * @param name モックプレイヤーの名前
   * @param x x座標
   * @param y y座標
   * @param z z座標
   * @param dimId ディメンションID
   */
  function spawnSimulatedPlayer(
    name: string,
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2
  ): SimulatedPlayer | null;

  /**
   * 既存のプレイヤーから情報を取得します。
   * @param info プレイヤーの名前またはXuid
   * @returns Player 生成されたプレイヤーオブジェクト
   */
  function getPlayer(info: string): Player;

  /**
   * オンラインのすべてのプレイヤーを取得します。
   * @returns Array<Player> プレイヤーオブジェクトの配列
   */
  function getOnlinePlayers(): Array<Player>;

  /**
   * プレイヤーに関連するNBTオブジェクトを取得します。
   * @param uuid プレイヤーのUUID
   * @returns 玩家のNBTオブジェクト
   * **オフラインプレイヤーのNBTも取得可能**
   */
  function getPlayerNbt(uuid: string): NbtCompound;

  /**
   * プレイヤーに関連するNBTオブジェクトを書き込みます。
   * @param uuid プレイヤーのUUID
   * @param nbt NBTオブジェクト
   * @returns 是否成功書き込み
   * **オフラインプレイヤーのNBTも操作可能**
   */
  function setPlayerNbt(uuid: string, nbt: NbtCompound): boolean;

  /**
   * プレイヤーに関連するNBTオブジェクトの特定のNbtTagを上書きします。
   * @param uuid プレイヤーのUUID
   * @param nbt NBTオブジェクト
   * @param tags 上書きするNbtTag (String)
   * @returns boolean 対応するタグの上書きが成功したかどうか
   */
  function setPlayerNbtTags(
    uuid: string,
    nbt: NbtCompound,
    tags: Array<string>
  ): boolean;

  /**
   * アーカイブからプレイヤーに関連するNBTオブジェクトのすべての内容を削除します。
   * @param uuid プレイヤーのUUID
   * @returns boolean 削除に成功したかどうか
   */
  function deletePlayerNbt(uuid: string): boolean;
}

declare enum sidebar {
  /** 降順 */
  Descending = 1,
  /** 昇順 */
  Ascending = 0,
}

declare class LLSE_Player extends Player { }

/**
 * シミュレートされたプレイヤー
 * @see [🏃‍♂️ プレイヤーオブジェクト](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Player?id=%e6%a8%a1%e6%8b%9f%e7%8e%a9%e5%ae%b6%ef%bc%88%e7%94%b3%e3%81%b8%e3%81%a8%e3%81%97%e3%81%86%e3%82%92%e5%8f%8a%e3%81%a8%e3%81%97%e3%82%88%e3%81%86%e3%81%a8%e3%81%8e%e3%82%87%ef%bc%8c%e6%9c%aa%e7%94%9f%e6%88%90%e3%81%ae%e6%a8%a1%e6%8b%9f%e7%8e%a9%e5%ae%b6%e3%82%af%e3%83%a9%e3%82%b9%ef%bc%89)
 * @see [mojang-gametestドキュメント](https://docs.microsoft.com/zh-cn/minecraft/creator/scriptapi/mojang-gametest/simulatedplayer)
 */
declare class SimulatedPlayer extends Player {
  /**
   * シミュレート攻撃
   * @param target （オプション）攻撃対象、デフォルトは視線の中のエンティティ
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateAttack(target?: Entity): boolean;

  /**
   * シミュレート破壊
   * @param target （オプション）破壊対象の座標またはブロック、デフォルトは視線の中のブロック
   * @param face （オプション）どの面から破壊するか
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateDestroy(target: IntPos | Block, face: number): boolean;

  /**
   * シミュレート接続断
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateDisconnect(): boolean;

  /**
   * シミュレート相互作用
   * @param target （オプション）シミュレート対象、デフォルトは視線の中のブロックまたはエンティティ
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateInteract(target?: Entity): boolean;

  /**
   * シミュレート相互作用
   * @param target （オプション）シミュレート対象、デフォルトは視線の中のブロックまたはエンティティ
   * @param face （オプション）シミュレート対象ブロックの面
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateInteract(target?: IntPos | Block, face?: number): boolean;

  /**
   * シミュレートジャンプ
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateJump(): boolean;

  /**
   * シミュレートブロックまたはエンティティを見る
   * @param target 見る対象（エンティティ、座標、ブロック）
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateLookAt(target: Entity | IntPos | FloatPos | Block): boolean;

  /**
   * シミュレート身体の回転を設定
   * @param rot 設定する角度
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateSetBodyRotation(rot: number): boolean;

  /**
   * プレイヤー座標系での相対移動
   * @param pos 移動方向
   * @param speed （オプション）移動速度、デフォルトは1
   * @returns boolean 移動リクエストが成功したかどうか
   */
  simulateLocalMove(pos: IntPos | FloatPos, speed?: number): boolean;

  /**
   * ワールド座標系での相対移動
   * @param pos 移動方向
   * @param speed （オプション）移動速度、デフォルトは1
   * @returns boolean 移動リクエストが成功したかどうか
   */
  simulateWorldMove(pos: IntPos | FloatPos, speed?: number): boolean;

  /**
   * 座標まで直線移動
   * @param pos 移動方向
   * @param speed （オプション）移動速度、デフォルトは1
   * @returns boolean 移動リクエストが成功したかどうか
   * **注：自動経路探索が必要な場合、simulateNavigateTo を考慮してください{@linkcode simulateNavigateTo}**
   */
  simulateMoveTo(pos: IntPos | FloatPos, speed?: number): boolean;

  /**
   * シミュレート経路移動
   * @param target 移動対象
   * @param speed （オプション）移動速度、デフォルトは1
   * @returns Object 指定した位置に到達できるかどうかと経路
   */
  simulateNavigateTo(
    target: Entity | IntPos | FloatPos,
    speed?: number
  ): {
    isFullPath: boolean;
    path: Array<Array<number>>;
  };

  /**
   * シミュレート経路移動（複数の目標）
   * @param target 移動対象
   * @param speed （オプション）移動速度、デフォルトは1
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateNavigateTo(
    target: Array<IntPos> | Array<FloatPos>,
    speed?: number
  ): boolean;

  /**
   * アイテムの使用をシミュレート
   * @param target （オプション）使用するアイテム（またはスロット内のアイテム）、デフォルトは選択したアイテム
   * @param pos （オプション）対象座標、デフォルトはブロックの方向
   * @param face （オプション）対象ブロックの面、デフォルトは0
   * @param relative （オプション）ブロックからの相対オフセット座標、デフォルトは{0.5,0.5,0.5}
   */
  simulateUseItem(
    target?: Item | number,
    pos?: IntPos,
    face?: number,
    relative?: FloatPos
  ): boolean;

  /**
   * ブロック破壊のシミュレート停止
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateStopDestroyingBlock(): boolean;

  /**
   * シミュレート相互作用の停止
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateStopInteracting(): boolean;

  /**
   * シミュレート移動の停止
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateStopMoving(): boolean;

  /**
   * アイテムの使用のシミュレート停止
   * @returns boolean 操作のシミュレーションが成功したかどうか
   */
  simulateStopUsingItem(): boolean;
}
