/// <reference path="../index.d.ts" />

declare class Time {
	/** 年の数値（4桁） */
	Y: number;
  
	/** 月の数値 */
	M: number;
  
	/** 日の数値 */
	D: number;
  
	/** 時間の数値（24時間制） */
	h: number;
  
	/** 分の数値 */
	m: number;
  
	/** 秒の数値 */
	s: number;
  
	/** ミリ秒の数値 */
	ms: number;
  }
  
  declare namespace system {
	/**
	 * シェルを呼び出して指定されたシステムコマンドを実行します。
	 * @param cmd - 実行するシステムコマンド
	 * @param callback - シェルプロセスが終了した後にデータを返すコールバック関数
	 * @param timeLimit - （オプション）コマンドの最大実行時間（ミリ秒単位）。デフォルトは`-1`で、制限時間がありません。
	 * @returns {boolean} - コマンドの起動に成功したかどうか
	 */
	function cmd(
	  cmd: string,
	  callback: (exitcode: number, output: string) => void,
	  timeLimit?: number
	): boolean;
  
	/**
	 * 指定されたプロセスを実行します。
	 * @param process - 実行するプログラムのパス（およびコマンドライン引数）
	 * @param callback - プログラムプロセスが終了した後にデータを返すコールバック関数
	 * @param timeLimit - （オプション）プログラムプロセスの最大実行時間（ミリ秒単位）。デフォルトは`-1`で、制限時間がありません。
	 * @returns {boolean} - プロセスの起動に成功したかどうか
	 */
	function newProcess(
	  process: string,
	  callback: (exitcode: number, output: string) => void,
	  timeLimit?: number
	): boolean;
  
	/**
	 * 現在の時間文字列を取得します。
	 * @returns {string} - 現在の時間文字列。現地のタイムゾーンと24時間制を使用します。
	 */
	function getTimeStr(): string;
  
	/**
	 * 現在の時間オブジェクトを取得します。
	 * @returns {Time} - 現在の時間オブジェクト
	 */
	function getTimeObj(): Time;
  
	/**
	 * ランダムなGUID（グローバル一意識別子）文字列を生成します。
	 * @returns {string} - ランダムに生成された一意の識別子GUID
	 */
	function randomGuid(): string;
  }
