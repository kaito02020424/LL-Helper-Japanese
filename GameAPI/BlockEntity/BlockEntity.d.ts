/// <reference path="../../index.d.ts" />

/**
 * ### ブロックエンティティオブジェクト
 *
 * LLSEでは、「ブロックエンティティオブジェクト」を使用して特定のブロックに関連する追加データを操作および取得します。
 *
 * このクラスには**コンストラクタが存在しません**。クラスオブジェクトを取得するには他の方法を使用してください。
 *
 * **注意**: **ブロックエンティティオブジェクト**は **実体(Entity)** ではありません！\
 * それらの間に特別な関係はありません。
 *
 * **注意**: ブロックエンティティオブジェクトを**長期間保持しないでください**。\
 * ブロックに対応するブロックが破壊されると、対応するブロックエンティティオブジェクトも無効になります。\
 * したがって、特定のブロックエンティティを長期間操作する必要がある場合は、**{@linkcode Block.getBlockEntity()}**を使用してリアルタイムのブロックエンティティオブジェクトを取得してください。
 */
declare class BlockEntity {

  /** ブロックエンティティの名前 */
  readonly name: string 

  /** ブロックエンティティに対応するブロックの位置 */
  readonly pos: IntPos;

  /** ブロックエンティティオブジェクトのタイプID */
  readonly type: number;

  /**
   * ### ブロックエンティティに対応するNBTオブジェクトを取得
   *
   * NBTオブジェクトについての詳細は、[NBTインターフェースドキュメント](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)を参照してください。
   *
   * @returns ブロックエンティティのNBTオブジェクト
   */
  getNbt(): NbtCompound;

  /**
   * ### ブロックエンティティに対応するNBTオブジェクトを書き込む
   *
   * NBTオブジェクトについての詳細は、[NBTインターフェースドキュメント](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)を参照してください。
   *
   * @param nbt NBTオブジェクト
   * @returns 書き込みに成功したかどうか
   */
  setNbt(nbt: NbtCompound): boolean;

  /**
   * ### ブロックエンティティに対応するブロックオブジェクトを取得
   *
   * @returns ブロックエンティティに対応するブロックオブジェクト
   */
  getBlock(): Block;

  asPointer(): NativePointer;
}

declare class LLSE_BlockEntity extends BlockEntity {}
