/// <reference path="../index.d.ts" />

declare namespace mc {
  /** プレイヤーの金額が増加する前のイベント */
  function listen(
    event: "beforeMoneyAdd",
    listener: (xuid: string, money: number) => boolean | void
  ): boolean;

  /** プレイヤーの金額が増加したときのイベント */
  function listen(
    event: "onMoneyAdd",
    listener: (xuid: string, money: number) => void
  ): boolean;

  /** プレイヤーの金額が減少する前のイベント */
  function listen(
    event: "beforeMoneyReduce",
    listener: (xuid: string, money: number) => boolean | void
  ): boolean;

  /** プレイヤーの金額が減少したときのイベント */
  function listen(
    event: "onMoneyReduce",
    listener: (xuid: string, money: number) => boolean | void
  ): boolean;

  /** プレイヤー間の金額転送が行われる前のイベント */
  function listen(
    event: "beforeMoneyTrans",
    listener: (xuid: string, money: number) => boolean | void
  ): boolean;

  /** プレイヤー間の金額転送が行われたときのイベント */
  function listen(
    event: "onMoneyTrans",
    listener: (xuid: string, money: number) => boolean | void
  ): boolean;

  /** プレイヤーの金額が設定される前のイベント */
  function listen(
    event: "beforeMoneySet",
    listener: (xuid: string, money: number) => boolean | void
  ): boolean;

  /** プレイヤーの金額が設定されたときのイベント */
  function listen(
    event: "onMoneySet",
    listener: (xuid: string, money: number) => boolean | void
  ): boolean;
}
