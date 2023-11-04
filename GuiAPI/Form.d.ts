/// <reference path="../index.d.ts" />

declare class SimpleForm {
  /**
   * フォームのタイトルを設定します。
   * @param {string} title - フォームのタイトル
   * @returns {SimpleForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {SimpleForm}
   */
  setTitle(title: string): SimpleForm;

  /**
   * フォームの内容を設定します。
   * @param {string} content - フォームの内容
   * @returns {SimpleForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {SimpleForm}
   */
  setContent(content: string): SimpleForm;

  /**
   * フォームにボタンを追加します。
   * @param {string} text - ボタンのテキスト文字列
   * @param {string} image （オプション） - ボタンの画像のファイルパス
   * @returns {SimpleForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {SimpleForm}
   */
  addButton(text: string, image?: string): SimpleForm;
}

declare class CustomForm {
  /**
   * フォームのタイトルを設定します。
   * @param {string} title - フォームのタイトル
   * @returns {CustomForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {CustomForm}
   */
  setTitle(title: string): CustomForm;

  /**
   * フォームにテキストラベルを追加します。
   * @param {string} text - 1行のテキスト
   * @returns {CustomForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {CustomForm}
   */
  addLabel(text: string): CustomForm;

  /**
   * フォームに入力欄を追加します。
   * @param {string} title - 入力欄の説明テキスト
   * @param {string} placeholder （オプション） - 入力欄内のプレースホルダー文字列
   * @param {string} _default （オプション） - 入力欄のデフォルトの内容
   * @returns {CustomForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {CustomForm}
   */
  addInput(title: string, placeholder?: string, _default?: string): CustomForm;

  /**
   * フォームにスイッチオプションを追加します。
   * @param {string} title - スイッチオプションの説明テキスト
   * @param {boolean} _default （オプション） - スイッチのデフォルトの状態（オン / オフ）
   * @returns {CustomForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {CustomForm}
   */
  addSwitch(title: string, _default?: boolean): CustomForm;

  /**
   * フォームにドロップダウンメニューを追加します。
   * @param {string} title - ドロップダウンメニューの説明テキスト
   * @param {Array<string>} items - ドロップダウンメニュー内の選択肢のテキストリスト
   * @param {number} _default （オプション） - ドロップダウンメニューのデフォルトで選択される項目のインデックス
   * @returns {CustomForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {CustomForm}
   */
  addDropdown(title: string, items: Array<string>, _default?: number): CustomForm;

  /**
   * フォームにスライダーコントロールを追加します。
   * @param {string} title - スライダーコントロールの説明テキスト
   * @param {number} min - スライダーコントロールの最小値
   * @param {number} max - スライダーコントロールの最大値
   * @param {number} step （オプション） - スライダーコントロールの最小ステップ値、デフォルトは1
   * @param {number} _default （オプション） - スライダーコントロールの初期値、最小値と最大値の間の数値である必要があります。
   * @returns {CustomForm} - 処理が完了したフォームオブジェクト（他の操作を連鎖できるように）: {CustomForm}
   */
  addSlider(
    title: string,
    min: number,
    max: number,
    step?: number,
    _default?: number
  ): CustomForm;

  /**
   * フォームにステップスライダーコントロールを追加します。
   * @param {string} title - ステップスライダーコントロールの説明テキスト
   * @param {Array<string>} items - ステップスライダーの選択肢のテキストリスト
   * @param {number} _default （オプション） - ステップスライダーコントロールの初期選択肢のインデックス（0から開始）
   */
  addStepSlider(
    title: string,
    items: Array<string>,
    _default?: number
  ): CustomForm;
}

declare namespace mc {
  /**
   * 新しい空白のSimpleFormオブジェクトを作成します。
   * @returns {SimpleForm} - 新しいSimpleFormオブジェクト: {SimpleForm}
   */
  function newSimpleForm(): SimpleForm;

  /**
   * 新しい空白のCustomFormオブジェクトを作成します。
   * @returns {CustomForm} - 新しいCustomFormオブジェクト: {CustomForm}
   */
  function newCustomForm(): CustomForm;
}
declare class LLSE_SimpleForm extends SimpleForm {}
declare class LLSE_CustomForm extends CustomForm {}
