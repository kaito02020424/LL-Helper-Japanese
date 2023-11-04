/** JSON設定ファイルを作成または開きます。 */
declare class JsonConfigFile {
  constructor(path: string, _default?: string);

  /** ファイルのパスです。BDSルートディレクトリを基準とします。
   * パスに存在しないディレクトリが含まれている場合、LLSEは自動的に作成します。
   */
  path: string;

  /** オプション: ファイルのデフォルトコンテンツ。
   * ターゲットファイルが**存在しない**場合、エンジンは新しい設定ファイルを作成し、ここにデフォルトコンテンツを書き込みます。
   * このパラメータを指定しない場合、新しい設定ファイルは空になります。
   */
  default?: string;

  /**
   * 設定項目を初期化します（関数を便利に使用）。
   * @param name 設定項目の名前
   * @param _default 設定項目の初期値
   * @returns {any} 具体的なデータ型に基づく
   * 設定ファイルを初期化する便利な方法を提供し、デフォルトの設定ファイルコンテンツを手動で記述する手間を省略します。
   */
  init(name: string, _default: any): any;

  /**
   * 設定項目を書き込みます。
   * @param name 設定項目の名前
   * @param data 指定された型
   * @returns {boolean} 書き込みに成功したかどうか
   */
  set(name: string, data: any): boolean;

  /**
   * 設定項目を読み取ります。
   * @param name 設定項目の名前
   * @param _default オプション: 読み取りに失敗した場合に返されるデフォルト値（デフォルトは`null`）
   * @returns {any} 指定した設定項目のデータ
   */
  get(name: string, _default?: any | null): any;

  /**
   * 設定項目を削除します。
   * @param name 設定項目の名前
   * @returns {boolean} 削除に成功したかどうか
   */
  delete(name: string): boolean;

  /**
   * ファイル内の設定項目を再読み込みします。
   * @returns {boolean} 読み込みに成功したかどうか
   */
  reload(): boolean;

  /**
   * 設定ファイルを閉じます。
   * @returns {boolean} 閉じるのに成功したかどうか
   */
  close(): boolean;

  /**
   * 設定ファイルのパスを取得します。
   * @returns {string} 現在の設定ファイルのファイルパス
   */
  getPath(): string;

  /**
   * 設定ファイル全体の内容を読み取ります。
   * @returns {string} 現在の設定ファイルのすべての内容
   */
  read(): string;

  /**
   * 設定ファイル全体の内容を書き込みます。
   * @param content コンテンツ
   * @returns {boolean} 書き込みに成功したかどうか
   */
  write(content: string): boolean;
}

/** INI設定ファイルを作成または開きます。 */
declare class IniConfigFile {
  constructor(path: string, _default?: string);

  /** ファイルのパスです。BDSルートディレクトリを基準とします。
   * パスに存在しないディレクトリが含まれている場合、LLSEは自動的に作成します。
   */
  path: string;

  /** オプション: ファイルのデフォルトコンテンツ。
   * ターゲットファイルが**存在しない**場合、エンジンは新しい設定ファイルを作成し、ここにデフォルトコンテンツを書き込みます。
   */
  _default?: string;

  /**
   * 設定項目を初期化します。
   * @param section 設定項目のキー名
   * @param name 設定項目の名前
   * @param _default 設定項目の初期値（数値、文字列、ブール値）
   * @returns {number|string|boolean} 指定した設定項目のデータ
   */
  init(section: string, name: string, _default: number | string | boolean): any;

  /**
   * 設定項目を書き込みます。
   * @param section 設定項目のキー名
   * @param name 設定項目の名前
   * @param data 書き込む設定データ（数値、文字列、ブール値）
   * @returns {boolean} 書き込みに成功したかどうか
   */
  set(section: string, name: string, data: number | string | boolean): boolean;

  /**
   * @param section 設定項目のキー名
   * @param name 設定項目の名前
   * @param _default オプション: 読み取りに失敗した場合に返されるデフォルト値（デフォルトは`0`）
   * @returns {string} 指定した設定項目のデータ
   */
  getStr(section: string, name: string, _default?: string | number | boolean): string;

  /**
   * @param section 設定項目のキー名
   * @param name 設定項目の名前
   * @param _default オプション: 読み取りに失敗した場合に返されるデフォルト値（デフォルトは`0`）
   * @returns {number} 指定した設定項目のデータ
   */
  getInt(section: string, name: string, _default?: string | number | boolean): number;

  /**
   * @param section 設定項目のキー名
   * @param name 設定項目の名前
   * @param _default オプション: 読み取りに失敗した場合に返されるデフォルト値（デフォルトは`0`）
   * @returns {number} 指定した設定項目のデータ
   */
  getFloat(section: string, name: string, _default?: string | number | boolean): number;

  /**
   * @param section 設定項目のキー名
   * @param name 設定項目の名前
   * @param _default オプション: 読み取りに失敗した場合に返されるデフォルト値（デフォルトは`0`）
   * @returns {boolean} 指定した設定項目のデータ
   */
  getBool(section: string, name: string, _default?: string | number | boolean): boolean;

  /**
   * @param section 設定項目のキー名
   * @param name 設定項目の名前
   * @returns {boolean} 削除に成功したかどうか
   */
  delete(section: string, name: string): boolean;

  /**
   * ファイル内の設定項目を再読み込みします。
   * @returns {boolean} 読み込みに成功したかどうか
   */
  reload(): boolean;

  /**
   * 設定ファイルを閉じます。
   * @returns {boolean} 閉じるのに成功したかどうか
   */
  close(): boolean;

  /**
   * 設定ファイルのパスを取得します。
   * @returns {string} 現在の設定ファイルのファイルパス
   */
  getPath(): string;

  /**
   * 設定ファイル全体の内容を読み取ります。
   * @returns {string} 現在の設定ファイルのすべての内容
   */
  read(): string;

  /**
   * 設定ファイル全体の内容を書き込みます。
   * @param content コンテンツ
   * @returns {boolean} 書き込みに成功したかどうか
   */
  write(content: string): boolean;
}
