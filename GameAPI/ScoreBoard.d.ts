/// <reference path="../index.d.ts" />

declare class Objective {
  /** Objectiveの名前 */
  readonly name: string;

  /** Objectiveの表示名 */
  readonly displayName: string;

  /**
   * 特定の対象のスコアを取得
   * @param target スコアを取得したい対象、プレイヤーオブジェクトまたは任意の文字列を渡すことができます
   * @returns {number} このObjectiveでの対象/プレイヤーのスコア
   */
  getScore(target: Player | string): number;

  /**
   * 特定の対象のスコアを設定
   * @param target スコアを設定したい対象、プレイヤーオブジェクトまたは任意の文字列を渡すことができます
   * @param score 設定したいスコア
   * @returns {number|null} 操作後の対象のスコア
   */
  setScore(target: Player | string, score: number): number | null;

  /**
   * 特定の対象のスコアを追加
   * @param target スコアを追加したい対象、プレイヤーオブジェクトまたは任意の文字列を渡すことができます
   * @param score 追加したいスコア
   * @returns {number|null} 操作後の対象のスコア
   */
  addScore(target: Player | string, score: number): number | null;

  /**
   * 特定の対象のスコアを減少
   * @param target 減少させたい対象、プレイヤーオブジェクトまたは任意の文字列を渡すことができます
   * @param score 減少させたいスコア
   * @returns {number|null} 操作後の対象のスコア
   */
  reduceScore(target: Player | string, score: number): number | null;

  /**
   * 特定の対象のスコアを削除
   * @param target 削除したい対象、プレイヤーオブジェクトまたは任意の文字列を渡すことができます
   * @returns {boolean} 削除が成功したかどうか
   */
  deleteScore(target: Player | string): boolean;

  /**
   * Objectiveの表示設定
   * @param slot 表示スロット名、"sidebar" / "belowname" / "list" である必要があります
   * @param sortOrder （オプション）ソート順序、0（昇順）または1（降順）で、デフォルトは0です
   * @returns {boolean} 設定が成功したかどうか
   */
  setDisplay(
    slot: "sidebar" | "belowname" | "list",
    sortOrder?: number | sidebar
  ): boolean;
}

declare namespace mc {
  /**
   * 新しいスコアObjectiveを作成
   * @param name Objectiveの名前
   * @param displayName Objectiveの表示名
   * @returns {Objective|null} 新しく作成されたスコアObjectiveのオブジェクト
   */
  function newScoreObjective(
    name: string,
    displayName: string
  ): Objective | null;

  /**
   * 既存のスコアObjectiveを取得
   * @param name 取得したいスコアObjectiveの名前
   * @returns {Objective|null} 対応するスコアObjectiveのオブジェクト
   */
  function getScoreObjective(name: string): Objective | null;

  /**
   * すべてのスコアObjectiveを取得
   * @returns {Array<Objective>} スコアボードシステムに記録されているすべてのスコアObjectiveオブジェクト
   */
  function getAllScoreObjectives(): Array<Objective>;

  /**
   * 表示中のスコアObjectiveを取得
   * @param slot 取得する表示スロット名、"sidebar" / "belowname" / "list" である必要があります
   * @returns {Objective|null} 表示中のObjective
   */
  function getDisplayObjective(
    slot: "sidbar" | "belowname" | "list"
  ): Objective | null;

  /**
   * 既存のスコアObjectiveを削除
   * @param name Objectiveの名前
   * @returns {boolean} 削除が成功したかどうか
   */
  function removeScoreObjective(name: string): boolean;

  /**
   * スコアObjectiveの表示をクリア
   * @param slot 表示スロット名、"sidebar" / "belowname" / "list" である必要があります
   * @returns {boolean} クリアが成功したかどうか
   */
  function clearDisplayObjective(
    slot: "sidebar" | "belowname" | "list"
  ): boolean;

  /**
   * プレイヤーのスコアObjectiveのスコアを取得
   * （オフラインプレイヤーのスコアボードも取得可能）
   * 
   * @param uuid プレイヤーのUUID
   * @param name Objectiveの名前
   * @returns {number} 計分ボード上の値
   */
  function getPlayerScore(uuid: string, name: string): number;

  /**
   * プレイヤーのスコアObjectiveのスコアを設定
   * （オフラインプレイヤーのスコアボードも変更可能）
   * @param uuid プレイヤーのUUID 
   * @param name Objectiveの名前  
   * @param value 設定したい値
   * @returns {boolean} 設定が成功したかどうか
   */
  function setPlayerScore(uuid: string, name: string, value: number): boolean;

  /**
   * プレイヤーのスコアObjectiveのスコアを増加
   * （オフラインプレイヤーのスコアボードも変更可能）
   * @param uuid プレイヤーのUUID 
   * @param name Objectiveの名前  
   * @param value 増加したい値
   * @returns {boolean} 増加が成功したかどうか
   */
  function addPlayerScore(uuid: string, name: string, value: number): boolean;

  /**
   * プレイヤーのスコアObjectiveのスコアを減少
   * （オフラインプレイヤーのスコアボードも変更可能）
   * @param uuid プレイヤーのUUID 
   * @param name Objectiveの名前  
   * @param value 減少させたい値
   * @returns {boolean} 減少が成功したかどうか
   */
  function reducePlayerScore(uuid: string, name: string, value: number): boolean;
}

declare class LLSE_Objective extends Objective{}