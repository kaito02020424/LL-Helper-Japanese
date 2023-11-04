/// <reference path="../index.d.ts" />

declare class NativePointer {
    /**
     * メモリを確保します。
     * @param size - 確保したいメモリのサイズ
     * @returns {NativePointer} - 新しいメモリを指すポインタ
     */
    static malloc(size: number): NativePointer;
  
    /**
     * メモリを解放します。
     * @param block - NativePointer
     */
    static free(block: NativePointer): void;
  
    /**
     * ポインタをオフセットさせます。
     * @param offset - オフセット量
     * @returns {NativePointer} - オフセット後のポインタ
     */
    offset(offset: number): NativePointer;
  
    /**
     * シンボルからアドレスを取得します。
     * @param symbol - 検索したいシンボル
     * @returns {NativePointer} - 検索結果。検索に失敗した場合、空のポインタが返ります。
     */
    fromSymbol(symbol: string): NativePointer;
  
    /**
     * アドレスインスタンスを取得します。
     * @param address - アドレス、16進数の文字列または数値で表現されます
     * @returns {NativePointer} - 対応するアドレスのポインタインスタンス
     */
    fromAddress(address: string | number): NativePointer;
  
    /** ポインタのアドレス */
    asRawAddress: number;
  
    /** ポインタのアドレスの16進数表現 */
    asHexAddress: string;
  
    /** ポインタのバイト型 */
    byte: any;
  
    int8: any;
  
    uint8: any;
  
    int16: any;
  
    uint16: any;
  
    int32: any;
  
    uint32: any;
  
    long: any;
  
    ulong: any;
  
    int64: any;
  
    uint64: any;
  
    float: any;
  
    double: any;
  
    string: string;
  
    bool: boolean;
  
    /**
     * エンティティとしてキャストします。
     * @returns {LLSE_Entity} - エンティティオブジェクト
     */
    asEntity(): LLSE_Entity;
  
    /**
     * アイテムとしてキャストします。
     * @returns {LLSE_Item} - アイテムオブジェクト
     */
    asItem(): LLSE_Item;
  
    /**
     * プレイヤーとしてキャストします。
     * @returns {LLSE_Player} - プレイヤーオブジェクト
     */
    asPlayer(): LLSE_Player;
  
    /**
     * コンテナとしてキャストします。
     * @returns {LLSE_Container} - コンテナオブジェクト
     */
    asContainer(): LLSE_Container;
  }
  


