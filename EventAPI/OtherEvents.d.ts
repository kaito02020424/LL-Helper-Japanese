/// <reference path="../index.d.ts" />

declare namespace mc {
  /** プレイヤーのスコアボードの値が変更されたときに発生します。 */
  function listen(
    event: "onScoreChanged",
    listener: (player: Player, num: number, name: string, disName: string) => void
  ): boolean;

  /** 各ゲームティックごとに発生します。 */
  function listen(
    event: "onTick",
    listener: () => boolean | void
  ): boolean;


  /** サーバーが起動し終わったときに発生します。 */
  function listen(
    event: "onServerStarted",
    listener: () => void
  ): boolean;

  /** サーバーコンソールがバックグラウンドでコマンドを実行したときに発生します。 */
  function listen(
    event: "onConsoleCmd",
    listener: (cmd: string) => boolean | void
  ): boolean;

  /** コンソールがコマンドを実行した結果を出力したときに発生します。 */
  function listen(
    event: "onConsoleOutput",
    listener: (output: string) => boolean | void
  ): boolean;
}
