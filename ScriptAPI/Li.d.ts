/// <reference path="../index.d.ts" />

/**
 * バージョン情報を表すクラス
 */
declare class version {
  /** メジャーバージョン（例: 2.1.0 の 2） */
  major: number;

  /** マイナーバージョン（例: 2.1.0 の 1） */
  minor: number;

  /** リビジョンバージョン（例: 2.1.0 の 0） */
  revision: number;

  /** 現在のバージョンがベータ版であるかどうか */
  isBeta: boolean;
}

declare namespace ll {
  /** LiteLoaderBDS が使用する言語 (例: `zh_Hans`、`en`、`ru_RU`) */
  const language: string;

  /** メジャーバージョン（例: 2.1.0 の 2） */
  const major: number;

  /** マイナーバージョン（例: 2.1.0 の 1） */
  const minor: number;

  /** リビジョンバージョン（例: 2.1.0 の 0） */
  const revision: number;

  /** バージョンのステータス (`0` は `Dev`、`1` は `Beta`、`2` は `Release`) */
  const status: number;

  /** LiteLoaderBDS Script Engine のバージョン */
  const scriptEngineVersion: string;

  /** Wine 環境下にあるかどうか */
  const isWine: boolean;

  /** デバッグモードであるかどうか */
  const isDebugMode: boolean;

  /** 現在のバージョンがベータ版であるかどうか */
  const isBeta: boolean;

  /** 現在のバージョンが開発版であるかどうか */
  const isDev: boolean;

  /** 現在のバージョンがリリース版であるかどうか */
  const isRelease: boolean;

  /**
   * LiteLoader ローダーのバージョンを取得します。
   * @returns {version} - ローダーのバージョン情報: {Version}
   */
  function version(): version;

  /**
   * LiteLoader ローダーのバージョン文字列を取得します。
   * @returns {string} - ローダーのバージョン文字列
   */
  function versionString(): string;

  /**
   * LiteLoader ローダーのバージョンをチェックします。
   * @param major - メジャーバージョン
   * @param minor オプション: - マイナーバージョン
   * @param revision オプション: - リビジョンバージョン
   * @returns {boolean} - チェック結果
   */
  function requireVersion(
    major: number,
    minor?: number,
    revision?: number
  ): boolean;

  /**
   * ロードされたすべてのプラグインをリストアップします。
   * @returns {string[]} - ロードされたすべてのプラグインのリスト
   */
  function listPlugins(): string[];

  /**
   * 関数をエクスポートします。
   * @param func - エクスポートする関数
   * @param namespace - 関数の名前空間名（異なるプラグインがエクスポートしたAPIを区別するため）
   * @param name - 関数のエクスポート名。他のプラグインはこの名前を使用して関数を呼び出します
   * @returns {boolean} - エクスポートが成功したかどうか
   */
  function exports(
    func: (...arg: any[]) => any,
    namespace: string,
    name: string
  ): boolean;

  /**
   * 関数をエクスポートします。
   * @param func - エクスポートする関数
   * @param name - 関数のエクスポート名。他のプラグインはこの名前を使用して関数を呼び出します
   * @returns {boolean} - エクスポートが成功したかどうか
   */
  function exports(func: (...arg: any[]) => any, name: string): boolean;

  /**
   * 関数をインポートします。
   * @param namespace - インポートする関数が使用する名前空間名
   * @param name - インポートする関数のエクスポート名
   * @returns {(...arg: any[]) => any} - インポートした関数
   */
  function imports(namespace: string, name: string): (...arg: any[]) => any;

  /**
   * 関数をインポートします。
   * @param name - インポートする関数のエクスポート名
   * @returns {(...arg: any[]) => any} - インポートした関数
   */
  function imports(name: string): (...arg: any[]) => any;

  /**
   * リモート関数がエクスポートされているかどうかを判断します。
   * @param namespace - 関数が使用する名前空間名
   * @param name - 関数が使用するエクスポート名
   * @returns {boolean} - 関数がエクスポートされているかどうか
   */
  function hasExported(namespace: string, name: string): boolean;

  /**
   * リモート関数がエクスポートされているかどうかを判断します。
   * @param name - 関数が使用するエクスポート名
   * @returns {boolean} - 関数がエクスポートされているかどうか
   */
  function hasExported(name: string): boolean;

  /**
   * プラグインの依存ライブラリを設定します。
   * @param path - 依存ライブラリのファイル名（例: `addplugin.js`）
   * @param remotePath （オプション） - 依存ライブラリを検索およびロードするパス。詳細はドキュメントを参照
   * @returns {boolean} - 依存ライブラリのロードが成功したかどうか
   */
  function require(path: string, remotePath?: string): boolean;

  /**
   * 文字列をスクリプトコードとして実行します。
   * @param str - スクリプトコードとして実行する文字列
   * @returns {any} - 実行結果
   */
  function eval(str: string): any;
}
