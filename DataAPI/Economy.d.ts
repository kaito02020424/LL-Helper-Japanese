/* eslint-disable @typescript-eslint/triple-slash-reference */

declare class record {
  /** トランザクションの発行元プレイヤーのXUID */
  from: string;

  /** 受け取る相手のXUID */
  to: string;

  /** 金額 */
  money: number;

  /** トランザクションの実行を行った日付 */
  time: string;

  /** 備考欄 */
  note: string;
}

/** 経済システムAPI */
declare namespace money {
  /**
   * プレイヤーの所持金を設定します
   * @param xuid 操作対象のプレイヤーのXUID
   * @param money 設定金額
   * @returns {boolean} 成功したかどうか
   */
  function set(xuid: string, money: number): boolean;

  /**
   * プレイヤーの所持金を取得する
   * @param xuid 所得するプレイヤーのXUID
   * @returns {number} プレイヤーの所持金
   */
  function get(xuid: string): number;

  /**
   * プレイヤーの所持金を増加させる
   * @param xuid 操作対象のプレイヤーのXUID
   * @param money 増加させる金額
   */
  function add(xuid: string, money: number): boolean;

  /**
   * プレイヤーの所持金を減少させる
   * @param xuid 操作対象のプレイヤーのXUID
   * @param money 減少させる金額
   */
  function reduce(xuid: string, money: number): boolean;

  /**
   * 送金する
   * @param xuid_1 支払うプレイヤーのXUID
   * @param xuid_2 受け取るプレイヤーのXUID
   * @param money 送金する金額
   * @param note オプション: 備考欄
   * @returns {boolean} 送金は成功したかどうか
   */
  function trans(
    xuid_1: string,
    xuid_2: string,
    money: number,
    note?: string
  ): boolean;

  /**
   * トランザクション履歴を照会する
   * @param xuid 照会するプレイヤーのXUID
   * @param time 何秒前の履歴を確認するか
   * @returns {Array<Object>} 照会結果オブジェクトの配列
   */
  function getHistory(xuid: string, time: number): Array<record>;

  /**
   * トランザクション履歴を削除する
   * @param time 何秒前の履歴を削除するか
   * @returns {boolean}
   */
  function clearHistory(time: number): boolean;
}
