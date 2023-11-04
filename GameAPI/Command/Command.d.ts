/// <reference path="../../index.d.ts" />

/**
 * ### 🎯 コマンドオブジェクト
 *
 * BDSの組み込みコマンドシステムに対応し、プレイヤー、コンソール、コマンドブロック、NPCなど、ゲーム内でコマンドを実行できるオブジェクトからの登録されたコマンドを使用できます。\
 * アドオンでは、ここで登録されたコマンドを使用することもできます。
 *
 * コマンドオブジェクトを使用することで、このコマンドにさまざまな形式や機能を登録できます。
 *
 * このクラスには**コンストラクタが存在しません**。{@linkcode mc.newCommand()}を使用して作成してください。
 *
 * @see [🎯 コマンド登録API](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Command)
 */
declare class Command {
  readonly name: string;

  readonly registered: boolean;

  /**
   * ### コマンドのエイリアスを設定
   *
   * @param alias エイリアスの名前
   *
   * @returns 設定に成功したかどうか
   */
  setAlias(alias: string): boolean;

  /**
   * ### コマンド列挙オプションを追加
   *
   * @param name 列挙名、パラメータを区別するために使用
   * @param values 列挙の有効な値
   *
   * @returns 設定に成功したかどうか
   */
  setEnum(name: string, values: Array<string>): boolean;

  /**
   * ### 必須パラメータを追加
   *
   * @param name パラメータの名前、コマンドを実行する際にパラメータを識別するために使用
   * @param type コマンドパラメータの型
   * @param enumName 列挙名（`ParamType` が `Enum` の場合のみ有効、列挙オプションを区別するために使用）
   * @param identifier パラメータ識別子、特定の状況でパラメータを一意に識別するために使用され、通常は`enumName`または`name`で代用できます
   * @param enumOptions パラメータのオプション、`1`に設定するとコマンドヒントで列挙オプションを展開できます。例: `<action : TagChangeAction>` が `<add|remove>` に変わります
   *
   * @returns 設定に成功したかどうか
   */
  mandatory(
    name: string,
    type: ParamType,
    enumName?: string,
    enumOptions?: number
  ): boolean;

  mandatory(
    name: string,
    type: ParamType,
    enumName?: string,
    identifier?: string,
    enumOptions?: number
  ): boolean;

  /**
   * ### オプションパラメータを追加
   *
   * @param name パラメータの名前、コマンドを実行する際にパラメータを識別するために使用
   * @param type コマンドパラメータの型
   * @param enumName 列挙名（`ParamType` が `Enum` の場合のみ有効、列挙オプションを区別するために使用）
   * @param identifier パラメータ識別子、特定の状況でパラメータを一意に識別するために使用され、通常は`enumName`または`name`で代用できます
   * @param enumOptions パラメータのオプション、`1`に設定するとコマンドヒントで列挙オプションを展開できます。例: `<action : TagChangeAction>` が `<add|remove>` に変わります
   *
   * @returns 設定に成功したかどうか
   */
  optional(
    name: string,
    type: ParamType,
    enumName?: string,
    identifier?: string,
    enumOptions?: number
  ): boolean;

  setSoftEnum(arg1: string, arg2: Array<string>): string;

  addSoftEnumValues(arg1: string, arg2: Array<string>): boolean;

  removeSoftEnumValues(arg1: string, arg2: Array<string>): boolean;

  getSoftEnumValues(arg1: string): Array<string>;

  getSoftEnumNames(): Array<string>;

  /**
   * ### コマンドオーバーロードを追加
   *
   * **注**: {@linkcode Command.setup()}を呼び出す前にこの関数を呼び出す必要があります。それ以外の場合はエラーが発生します。
   *
   * コマンドオーバーロードは、異なるコマンド形式を区別するためのBDSの方法で、異なるコマンド形式ごとに1つのオーバーロードが対応します。
   *
   * 提供されたパラメータ名は新しいコマンド形式を構成します。
   *
   * @param params オーバーロードに使用するパラメータリスト、パラメータ識別子、列挙名、パラメータ名を使用できます。
   *
   * 一意のパラメータを区別できない識別子は使用できないことに注意してください。たとえば、2つのパラメータがともに「action」という名前でも、列挙オプションが異なる場合は、パラメータ名の代わりに列挙名を使用する必要があります。
   *
   * @returns 設定に成功したかどうか
   */
  overload(params?: Array<string>): boolean;

  /**
   * ### コマンドコールバックを設定
   *
   * @param callback このコマンドが実行されたときに自動的に呼び出されるコールバック関数。
   *
   * @returns 設定に成功したかどうか
   */
  setCallback(
    callback: (
      cmd: Command,
      origin: CommandOrigin,
      output: CommandOutput,
      result: any
    ) => void
  ): boolean;

  /**
   * ### コマンドをセットアップ
   *
   * **注**: {@linkcode Command.overload()}を呼び出す前にこの関数を呼び出す必要があります。それ以外の場合はエラーが発生します。
   *
   * @returns セットアップに成功したかどうか
   */
  setup(): boolean;
}
