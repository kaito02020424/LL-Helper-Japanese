/// <reference path="../index.d.ts" />

declare enum Version {
  Release,
  Beta,
  Dev,
}

declare namespace ll {
  /**
   * プラグインを登録します。
   * @param name - プラグイン名
   * @param introduction - プラグインの簡単な説明
   * @param version - プラグインのバージョン情報[2,0,1]
   * @param otherInformation - 提供するその他の情報（ライセンス、オープンソースの場所など）
   */
  function registerPlugin(
    name: string,
    introduction: string,
    version: readonly [number, number, number, Version?],
    otherInformation: Record<string, string>
  ): void;
}

/**
 * コンソールに情報を出力します。
 * @param data - 出力する変数またはデータ
 */
declare function log(...data: any[]): void;

/**
 * カラー付きのテキストを出力します。
 * @param color - この行の出力カラー（コードの例と効果はドキュメントを参照）
 * @param data - 出力する変数またはデータ
 */
declare function colorLog(color: string, ...data: any[]): void;

/**
 * 非同期に情報を出力します。
 * @param data - 出力する変数またはデータ
 */
declare function fastLog(...data: any[]): void;

/**
 * コードを一定時間後に実行します。
 * @param func - 実行する関数またはコード
 * @param msec - 実行を遅延させる時間（ミリ秒）
 * @returns - このタスクのID
 */
declare function setTimeout(func: () => void | string, msec: number): number | null;

/**
 * コードを定期的に実行します。
 * @param func - 実行する関数またはコード
 * @param msec - 実行間隔（ミリ秒）
 * @returns - このタスクのID
 */
declare function setInterval(func: () => void | string, msec: number): number | null;

/**
 * 遅延/定期的な実行をキャンセルします。
 * @param taskid - これらの関数から返されたタスクID
 * @returns - キャンセルが成功したかどうか
 */
declare function clearInterval(taskid: number): boolean | null;
