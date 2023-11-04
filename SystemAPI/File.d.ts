/// <reference path="../index.d.ts" />

declare class file {
  /**
   * ファイルを表すクラスです。
   * @param path - 想要打开的文件路径
   * @param mode - ファイルの打開モード
   * @param isBinary - （オプション）二進モードでファイルを開く場合はtrue。デフォルトは`false`
   */
  constructor(path: string, mode: number, isBinary?: boolean);

  /** 現在のファイルのパス */
  readonly path: string;

  /** 現在のファイルの絶対パス */
  readonly absolutePath: string;

  /** 現在のファイルのサイズ */
  readonly size: number;

  /** ファイルのオープンモードを示す列挙型（読み取り専用） */
  static readonly ReadMode: number;

  /** ファイルのオープンモードを示す列挙型（書き込み） */
  static readonly WriteMode: number;

  /** ファイルのオープンモードを示す列挙型（追加） */
  static readonly AppendMode: number;

  /**
   * ファイルの内容を読み込みます。
   * @param path - 対象ファイルのパス。相対パスはBDSルートディレクトリを基準とします。
   * @returns {string | null} - ファイルの内容または読み込みに失敗した場合はnull
   */
  static readFrom(path: string): string | null;

  /**
   * 指定のファイルに内容を書き込みます。
   * @param path - 対象ファイルのパス。相対パスはBDSルートディレクトリを基準とします。
   * @param text - 書き込む内容
   * @returns {boolean} - 書き込みに成功した場合はtrue、それ以外はfalse
   */
  static writeTo(path: string, text: string): boolean;

  /**
   * 指定のファイルに行を追加します。
   * @param path - 対象ファイルのパス。相対パスはBDSルートディレクトリを基準とします。
   * @param text - 追加する行の内容
   * @returns {boolean} - 書き込みに成功した場合はtrue、それ以外はfalse
   */
  static writeLine(path: string, text: string): boolean;

  /**
   * ファイルからテキストまたはバイナリデータを読み取ります。
   * @param cnt - 読み取る文字数またはバイト数
   * @returns {string | ByteBuffer | null} - 読み取った文字列の内容、バイナリデータ、または読み取りに失敗した場合はnull
   */
  readSync(cnt: number): string | ByteBuffer | null;

  /**
   * 从文件读取一行文本
   * @returns {string|null} 读取的字符串内容
   */
  readLineSync(): string | null;

  /**
   * ファイルからすべての内容を読み取ります。
   * @returns {string | ByteBuffer | null} - 読み取った文字列の内容、バイナリデータ、または読み取りに失敗した場合はnull
   */
  readAllSync(): string | ByteBuffer | null;

  /**
   * テキストまたはバイナリデータをファイルに書き込みます。
   * @param str - 書き込む内容
   * @returns {boolean} - 書き込みに成功した場合はtrue、それ以外はfalse
   */
  writeSync(str: string | ByteBuffer): boolean;

  /**
   * ファイルに一行のテキストを書き込みます。
   * @param str - 書き込む内容
   * @returns {boolean} - 書き込みに成功した場合はtrue、それ以外はfalse
   */
  writeLineSync(str: string): boolean;

  /**
   * ファイルからテキストまたはバイナリデータを非同期で読み取ります。
   * @param cnt - 読み取る文字数またはバイト数
   * @param callback - 結果を取得するためのコールバック関数
   * @returns {boolean} - リクエストの送信に成功した場合はtrue、それ以外はfalse
   */
  read(
    cnt: number,
    callback: (result: string | ByteBuffer | null) => void
  ): boolean;

  /**
   * ファイルから一行のテキストを非同期で読み取ります。
   * @param callback - 結果を取得するためのコールバック関数
   * @returns {boolean} - リクエストの送信に成功した場合はtrue、それ以外はfalse
   */
  readLine(callback: (result: string) => void): boolean;

  /**
   * ファイルからすべての内容を非同期で読み取ります。
   * @param callback - 結果を取得するためのコールバック関数
   * @returns {boolean} - リクエストの送信に成功した場合はtrue、それ以外はfalse
   */
  readAll(callback: (result: string | ByteBuffer | null) => void): boolean;

  /**
   * テキストまたはバイナリデータをファイルに非同期で書き込みます。
   * @param str - 書き込む内容
   * @param callback - （オプション）結果を取得するためのコールバック関数
   * @returns {boolean} - リクエストの送信に成功した場合はtrue、それ以外はfalse
   */
  write(
    str: string | ByteBuffer,
    callback?: (result: boolean) => void
  ): boolean;

  /**
   * ファイルに一行のテキストを非同期で書き込みます。
   * @param str - 書き込む内容
   * @param callback - （オプション）結果を取得するためのコールバック関数
   * @returns {boolean} - リクエストの送信に成功した場合はtrue、それ以外はfalse
   */
  writeLine(
    str: string | ByteBuffer,
    callback?: (result: boolean) => void
  ): boolean;

  /**
   * ファイルポインタを移動します。
   * @param pos - ファイルポインタを移動する位置
   * @param isRelative - 現在のファイルポインタ位置からの相対位置かどうか
   * @returns {boolean} - 移動に成功した場合はtrue、それ以外はfalse
   */
  seekTo(pos: number, isRelative: boolean): boolean;

  /**
   * ファイルのサイズを設定します。
   * @param size - 設定する目標のサイズ
   * @returns {boolean} - 設定に成功した場合はtrue、それ以外はfalse
   * @tips - 設定された新しいサイズは、ファイルの現在のサイズより大きい場合があります。新しいサイズがファイルの現在のサイズより小さい場合、元のファイルは切り詰められます。
   */
  setSize(size: number): boolean;

  /**
   * ファイルを閉じます。
   * @returns {boolean} - 閉じるのに成功した場合はtrue、それ以外はfalse
   * @tips ファイルを閉じた後、再度使用しないでください。
   */
  close(): boolean;

  /**
   * ファイルポインタがファイルの末尾にあるかどうかを返します。
   * @returns {boolean} - ファイルポインタがファイルの末尾にある場合はtrue、それ以外はfalse
   */
  isEOF(): boolean;

  /**
   * ファイルバッファをフラッシュします。
   * @returns {boolean} - フラッシュに成功した場合はtrue、それ以外はfalse
   */
  flush(): boolean;

  /**
   * 前回のIO操作で生成されたエラーコードを取得します。
   * @returns {number} - 前回のIO操作で生成されたエラーコード
   */
  errorCode(): number;

  /**
   * エラー状態をクリアします。
   * @return boolean - クリアに成功した場合はtrue、それ以外はfalse
   */
  clear(): boolean;

  /**
   * フォルダを作成します。
   * @param dir - ターゲットフォルダのパス
   * @returns {boolean} - 作成に成功した場合はtrue、それ以外はfalse
   */
  static createDir(dir: string): boolean;

  /**
   * フォルダを作成します（エイリアス）。
   * @param dir - ターゲットフォルダのパス
   * @returns {boolean} - 作成に成功した場合はtrue、それ以外はfalse
   */
  static mkdir(dir: string): boolean;

  /**
   * ファイルまたはフォルダを削除します。
   * @param path - ターゲットファイルまたはフォルダのパス
   * @returns {boolean} - 削除に成功した場合はtrue、それ以外はfalse
   */
  static delete(path: string): boolean;

  /**
   * ファイルまたはフォルダが存在するかどうかを判断します。
   * @param path - ターゲットファイルまたはフォルダのパス
   * @returns {boolean} - ターゲットが存在する場合はtrue、それ以外はfalse
   */
  static exists(path: string): boolean;

  /**
   * ファイルまたはフォルダを指定の場所にコピーします。
   * @param from - ソースファイルまたはフォルダのパス
   * @param to - ターゲットファイルまたはフォルダの場所
   * @returns {boolean} - コピーに成功した場合はtrue、それ以外はfalse
   */
  static copy(from: string, to: string): boolean;

  /**
   * ファイルまたはフォルダを指定の場所に移動します。
   * @param from - ソースファイルまたはフォルダのパス
   * @param to - ターゲットファイルまたはフォルダの場所
   * @returns {boolean} - 移動に成功した場合はtrue、それ以外はfalse
   */
  static move(from: string, to: string): boolean;

  /**
   * 指定のファイルまたはフォルダをリネームします。
   * @param from - ファイルまたはフォルダの古い名前
   * @param to - 新しい名前
   * @returns {boolean} - リネームに成功した場合はtrue、それ以外はfalse
   */
  static rename(from: string, to: string): boolean;

  /**
   * 指定のファイルのサイズを取得します。
   * @param path - 操作対象のファイルのパス
   * @returns {number} - ファイルのサイズ（バイト単位）
   * @tips 渡されたパスがディレクトリの場合、-1 を返します。
   */
  static getFileSize(path: string): number;

  /**
   * 指定のパスがディレクトリであるかどうかを判定します。
   * @param path - 判定対象のパス
   * @returns {boolean} - 対象のパスがディレクトリの場合はtrue、それ以外はfalse
   */
  static checkIsDir(path: string): boolean;

  /**
   * 指定のディレクトリ内のすべてのファイルとフォルダをリストアップします。
   * @param dir - フォルダのパス
   * @returns {string[]} - フォルダ内のファイルおよびフォルダ名の配列
   */
  static getFilesList(dir: string): string[];
}

declare class File extends file { }
