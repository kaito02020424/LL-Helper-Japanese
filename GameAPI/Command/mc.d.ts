/// <reference path="../../index.d.ts" />

declare namespace mc {
  /**
   * ### コマンドを実行します
   *
   * @param cmd 実行するコマンド
   *
   * @returns 実行が成功したかどうか
   */
  function runcmd(cmd: string): boolean;

  /**
   * ### 強化版のコマンドを実行します
   *
   * **注意**: `runcmdEx`は通常の {@linkcode runcmd} とは大きく異なり、Exバージョンには**非表示の実行**メカニズムが備わっており、
   * 実行結果はコンソールに出力されません。そのため、必要であれば結果を手動で {@linkcode log} 関数を使用して出力する必要があります。
   *
   * @param cmd 実行するコマンド
   *
   * @returns コマンドの実行結果
   */
  function runcmdEx(cmd: string): {
    /** 実行が成功したかどうか */
    success: boolean;

    /** BDSがコマンドを実行した後の出力結果 */
    output: string;
  };

  /**
   * ### コンソールコマンドの出力をシミュレートします
   *
   * @param output 出力内容
   *
   * @returns 成功したかどうか
   */
  function sendCmdOutput(output: string): boolean;

  /**
   * ### トップレベルのコマンドを登録します
   *
   * ここではカスタムコマンドの登録インターフェースが提供されています。
   *
   * BDSの組み込みのコマンドシステムに接続し、登録したコマンドはプレイヤー、コンソール、コマンドブロック、NPCなど、ゲーム内でコマンドを実行できるさまざまなオブジェクトから使用できます。
   * また、アドオン内でもここで登録したコマンドを使用できます。
   *
   * @see {@linkcode Command}
   * @see [🎯 コマンド登録API](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Command)
   *
   * @param cmd 登録するコマンド
   * @param description コマンドの説明文
   * @param permission コマンドの実行に必要な権限。デフォルトは{@linkcode PermType.GameMasters}
   * @param flag デフォルト値は `0x80` ですが、現在はそのまま使用してください。後で変更される予定です
   * @param alias コマンドのエイリアス
   *
   * コマンドに複数のエイリアスを設定でき、実行時には同じコマンドがトリガーされます
   * （ここでは1つしか設定できず、{@linkcode Command.setAlias()}を使用することをお勧めします）
   *
   * @returns コマンドオブジェクト
   */
  function newCommand(
    cmd: string,
    description: string,
    permission?: PermType,
    flag?: number,
    alias?: string
  ): Command;

  /**
   * @deprecated
   *
   * ### 新しいプレイヤーコマンド（フェイクコマンド）を登録します
   *
   * **警告**:
   *
   * ここで提供されているフェイクコマンドAPIは**下位互換性のため**に保持されており、できる限り真のコマンドAPIを使用することをお勧めします。
   *
   * それは見かけによらず、フェイクコマンドにはプレイヤーやコンソールにしか実行できないという重要な制約があり、
   * 他のオブジェクト（コマンドブロック、NPCなど）では実行できず、すべてのパラメータデータを自分で解析する必要があります。
   *
   * @see {@linkcode mc.newCommand()}
   *
   * @param cmd 登録するコマンド
   * @param description コマンドの説明文
   * @param callback 登録されたコマンドが実行されたときにインターフェースが自動的に呼び出されるコールバック関数
   * @param level コマンドの登録レベル。デフォルトは `0` で、誰でも実行できます。コマンドの登録レベルを `1` に設定すると、OPのみがこのコマンドを実行できます
   *
   * @returns 登録に成功したかどうか
   */
  function regPlayerCmd(
    cmd: string,
    description: string,
    callback: (player: Player, args: Array<string>) => void,
    level?: number
  ): boolean;

  /**
   * @deprecated
   *
   * ### 新しいコンソールコマンド（フェイクコマンド）を登録します
   *
   * **警告**:
   *
   * ここで提供されているフェイクコマンドAPIは**下位互換性のため**に保持されており、できる限り真のコマンドAPIを使用することをお勧めします。
   *
   * それは見かけによらず、フェイクコマンドにはプレイヤーやコンソールにしか実行できないという重要な制約があり、
   * 他のオブジェクト（コマンドブロック、NPCなど）では実行できず、すべてのパラメータデータを自分で解析する必要があります。
   *
   * @see {@linkcode mc.newCommand()}
   *
   * @param cmd 登録するコマンド
   * @param description コマンドの説明文
   * @param callback 登録されたコマンドが実行されたときにインターフェースが自動的に呼び出されるコールバック関数
   *
   * @returns 登録に成功したかどうか
   */
  function regPlayerCmd(
    cmd: string,
    description: string,
    callback: (args: Array<string>) => void
  ): boolean;
}
