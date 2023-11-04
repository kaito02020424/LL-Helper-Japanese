/// <reference path="../../index.d.ts" />

/**
 * ### 📦 ブロックオブジェクト
 *
 * LLSEでは、「ブロックオブジェクト」を使用して特定の種類のブロックに関連する情報を操作および取得します。
 *
 * このクラスには**コンストラクタが存在しません**。クラスオブジェクトを取得するには他の方法を使用してください。
 *
 * **注意**: ブロックオブジェクトを**長期間保持しないでください**。\
 * ブロックオブジェクトが対応するブロックが破壊されると、ブロックオブジェクトも無効になります。\
 * したがって、特定のブロックを長期間操作する必要がある場合は、**イベントパラメータ**を使用するか、**{@linkcode mc.getBlock()}**を使用してリアルタイムのブロックオブジェクトを取得してください。
 *
 * @see [📦 ブロックオブジェクト](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Block)
 */
declare class Block {
  /** ゲーム内で表示されるブロックの名前（例: `Stone`） */
  readonly name: string;

  /** ブロックの標準タイプ名（例: `minecraft:stone`） */
  readonly type: string;

  /** ブロックのゲーム内ID */
  readonly id: number;

  /** ブロックの位置 */
  readonly pos: IntPos;

  /** ブロックのタイルデータ */
  readonly tileData: number;

  /** ブロックのバリアント */
  readonly variant: number;

  /** ブロックの透明度 */
  readonly translucency: number;

  /** ブロックの厚さ */
  readonly thickness: number;

  /** ブロックが空気かどうか */
  readonly isAir: boolean;

  /** ブロックが跳ね返りブロックかどうか */
  readonly isBounceBlock: boolean;

  /** ブロックがボタンブロックかどうか */
  readonly isButtonBlock: boolean;

  /** ブロックが作物ブロックかどうか */
  readonly isCropBlock: boolean;

  /** ブロックがドアブロックかどうか */
  readonly isDoorBlock: boolean;

  /** ブロックがフェンスブロックかどうか */
  readonly isFenceBlock: boolean;

  /** ブロックがフェンスゲートブロックかどうか */
  readonly isFenceGateBlock: boolean;

  /** ブロックが薄いフェンスブロックかどうか */
  readonly isThinFenceBlock: boolean;

  /** ブロックが重いブロックかどうか */
  readonly isHeavyBlock: boolean;

  /** ブロックが茎ブロックかどうか */
  readonly isStemBlock: boolean;

  /** ブロックがスラブブロックかどうか */
  readonly isSlabBlock: boolean;

  /** ブロックが破壊不可能かどうか */
  readonly isUnbreakable: boolean;

  /** ブロックが水を遮るかどうか */
  readonly isWaterBlockingBlock: boolean;

  /**
   * ### ブロックを破壊
   *
   * @param drop アイテムをドロップするかどうか
   * @returns 破壊に成功したかどうか
   */
  destroy(drop: boolean): boolean;

  /**
   * ### ブロックに対応するNBTオブジェクトを取得
   *
   * NBTオブジェクトについての詳細は、[NBTインターフェースドキュメント](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)を参照してください。
   *
   * @returns ブロックのNBTオブジェクト
   */
  getNbt(): NbtCompound;

  /**
   * @deprecated
   * @alias {@linkcode getNbt()}
   */
  getTag(): NbtCompound;

  /**
   * ### ブロックに対応するNBTオブジェクトを書き込む
   *
   * NBTオブジェクトについての詳細は、[NBTインターフェースドキュメント](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)を参照してください。
   *
   * 注意: このAPIを慎重に使用し、代わりに**{@linkcode mc.setBlock()}**を使用することを検討してください。
   *
   * @param nbt NBTオブジェクト
   * @returns 書き込みに成功したかどうか
   */
  setNbt(nbt: NbtCompound): boolean;

  /**
   * @deprecated
   * @alias {@linkcode setNbt()}
   */
  setTag(nbt: NbtCompound): boolean;

  /**
   * ### ブロックのBlockStateを取得
   *
   * ブロックのBlockStateを解析し、`Object`に変換するのを支援する便利な関数です。
   *
   * `block.getNbt().getTag("states").toObject()`のスクリプト実行と同等です。
   *
   * NBTオブジェクトについての詳細は、[NBTインターフェースドキュメント](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)を参照してください。
   *
   * @returns ブロックのBlockState
   */
  getBlockState(): object;

  /**
   * ### ブロックがコンテナを持っているかどうかを判定
   *
   * たとえば、チェスト、バケツなどの各々が独自のコンテナオブジェクトを持っています。
   *
   * コンテナオブジェクトに関する詳細は、[コンテナオブジェクトAPIドキュメント](https://docs.litebds.com/#/zh_CN/Development/GameAPI/Container)を参照してください。
   *
   * @returns このブロックがコンテナを持っているかどうか
   */
  hasContainer(): boolean;

  /**
   * ### ブロックが所属するコンテナオブジェクトを取得
   *
   * たとえば、チェスト、バケツなどの各々が独自のコンテナオブジェクトを持っています。
   *
   * コンテナオブジェクトに関する詳細は、[コンテナオブジェクトAPIドキュメント](https://docs.litebds.com/#/zh_CN/Development/GameAPI/Container)を参照してください。
   *
   * @returns このブロックが所属するコンテナオブジェクト
   */
  getContainer(): Container;

  /**
   * ### ブロックがブロックエンティティを持っているかどうかを判定
   *
   * ブロックエンティティオブジェクトに関する詳細は、[ブロックエンティティオブジェクトAPIドキュメント](https://docs.litebds.com/#/zh_CN/Development/GameAPI/BlockEntity)を参照してください。
   *
   * @returns このブロックがブロックエンティティを持っているかどうか
   */
  hasBlockEntity(): boolean;

  /**
   * ### ブロックが所属するブロックエンティティオブジェクトを取得
   *
   * ブロックエンティティオブジェクトに関する詳細は、[ブロックエンティティオブジェクトAPIドキュメント](https://docs.litebds.com/#/zh_CN/Development/GameAPI/BlockEntity)を参照してください。
   *
   * @returns このブロックが所属するブロックエンティティオブジェクト
   */
  getBlockEntity(): BlockEntity;

  /**
   * ### ブロックが所属するブロックエンティティを削除
   *
   * ブロックエンティティオブジェクトに関する詳細は、[ブロックエンティティオブジェクトAPIドキュメント](https://docs.litebds.com/#/zh_CN/Development/GameAPI/BlockEntity)を参照してください。
   *
   * @returns 削除に成功したかどうか
   */
  removeBlockEntity(): boolean;

  asPointer(): NativePointer;
}

declare class LLSE_Block extends Block {}
