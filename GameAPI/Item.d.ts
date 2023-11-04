/// <reference path="../index.d.ts" />

declare class Item {
  /** ゲーム内で表示されるアイテムの名前 */
  readonly name: string;

  /** アイテムの標準タイプ名 */
  readonly type: string;

  /** アイテムのゲーム内ID */
  readonly id: number;

  /** このアイテムオブジェクトのスタック数 */
  readonly count: number;

  /** アイテムの追加値（例: 羊毛の色） */
  readonly aux: number;

  /** アイテムの現在の耐久値 */
  readonly damage: number;

  /** アイテムの攻撃ダメージ */
  readonly attackDamage: number;

  /** アイテムの最大耐久値 */
  readonly maxDamage: number;

  /** アイテムのLore */
  readonly lore: Array<string>

  /** アイテムが武具アイテムかどうか */
  readonly isArmorItem: boolean

  /** アイテムがブロックかどうか */
  readonly isBlock: boolean

  /** アイテムが破壊可能なアイテムかどうか */
  readonly isDamageableItem: boolean

  /** アイテムの耐久が減少しているかどうか */
  readonly isDamaged: boolean

  /** アイテムがすでにエンチャントされているかどうか */
  readonly isEnchanted: boolean

  /** アイテムがエンチャントの本かどうか */
  readonly isEnchantingBook: boolean
  
  /** アイテムが耐火性かどうか */
  readonly isFireResistant: boolean
  
  /** アイテムがスタックの最大数に達しているかどうか */
  readonly isFullStack: boolean
  
  /** アイテムが輝いているかどうか */
  readonly isGlint: boolean
  
  /** アイテムが馬の鎧アイテムかどうか */
  readonly isHorseArmorItem: boolean
  
  /** アイテムが液体を通過するかどうか */
  readonly isLiquidClipItem: boolean
  
  /** アイテムが音楽ディスクかどうか */
  readonly isMusicDiscItem: boolean
  
  /** アイテムが副手に装備できるかどうか */
  readonly isOffhandItem: boolean
  
  /** アイテムがポーションアイテムかどうか */
  readonly isPotionItem: boolean
  
  /** アイテムがスタック可能かどうか */
  readonly isStackable: boolean
  
  /** アイテムが装備可能かどうか */
  readonly isWearableItem: boolean

  /**
   * 既存のアイテムオブジェクトからクローンを生成
   * @returns Item|null 生成された新しいアイテムオブジェクト
   */
  clone(): Item | null;

  /**
   * アイテムオブジェクトが空かどうかを判定
   * @returns boolean このアイテムオブジェクトが空かどうか
   */
  isNull(): boolean;

  /**
   * このアイテムオブジェクトを空に設定（アイテムを削除）
   * @returns boolean 削除が成功したかどうか
   */
  setNull(): boolean;

  /**
   * このアイテムオブジェクトを別のアイテムに設定
   * @param item 設定するアイテムオブジェクト
   * @returns boolean 設定が成功したかどうか
   */
  set(item: Item): boolean;

  /**
   * アイテムの追加値を設定
   * @param aux アイテムの追加値
   * @returns boolean 設定が成功したかどうか
   */
  setAux(aux: number): boolean;

  /**
   * アイテムに対応するNBTオブジェクトを取得
   * @returns NbtCompound アイテムのNBTオブジェクト
   */
  getNbt(): NbtCompound;

  /**
   * アイテムに対応するNBTオブジェクトを書き込む
   * @param nbt NBTオブジェクト
   * @returns boolean 書き込みが成功したかどうか
   */
  setNbt(nbt: NbtCompound): boolean;

  /**
   * カスタムのLoreを設定
   * @param names 設定するLore文字列の配列
   * @returns boolean 設定が成功したかどうか
   */
  setLore(names: Array<string>): boolean;

  /**
   * カスタムのアイテム名を設定
   * @param name 新しいアイテム名
   * @returns boolean 設定が成功したかどうか
   */
  setDisplayName(name: string): boolean

  /**
   * 同じ種類のアイテムかどうかを判定
   * @param item 判定するアイテム
   * @returns 同じ種類のアイテムかどうか
   */
  match(item: Item): boolean
}

declare namespace mc {
  /**
   * アイテムオブジェクトからドロップエンティティを生成
   * @param item ドロップエンティティを生成するためのアイテムオブジェクト
   * @param pos ドロップエンティティを生成する位置の座標オブジェクト（またはx, y, z, dimidを使用して位置を指定）
   * @returns Entity|null 生成されたドロップエンティティオブジェクト
   */
  function spawnItem(item: Item, pos: IntPos | FloatPos): Entity | null;

  /**
 * アイテムオブジェクトからドロップエンティティを生成
 * @param item 生成に使用するアイテムオブジェクト
 * @param x x座標
 * @param y y座標
 * @param z z座標
 * @param dimId ディメンションID
 * @returns Entity|null 生成されたドロップエンティティオブジェクト
 */
function spawnItem(
  item: Item,
  x: number,
  y: number,
  z: number,
  dimId: 0 | 1 | 2
): Entity | null;

/**
 * NBTからアイテムオブジェクトを生成
 * @param nbt アイテムオブジェクトの生成に使用するNBT
 * @returns Item|null 生成されたアイテムオブジェクト
 */
function newItem(nbt: NbtCompound): Item | null;

  /**
   * 新しいアイテムオブジェクトを生成
   * @param name アイテムの標準タイプ名（例: `minecraft:bread`）
   * @param count アイテムのスタック数
   */
  function newItem(name: string, count: number): Item | null;
}

declare class LLSE_Item extends Item{}