/// <reference path="../../index.d.ts" />

/**
 * ### コマンド実行に必要な権限の列挙型
 *
 * @see [トップレベルコマンドの登録](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Command?id=%e6%b3%a8%e5%86%8c%e4%b8%80%e6%9d%a1%e9%a1%b6%e5%b1%82%e5%91%bd%e4%bb%a4)
 * @see {@linkcode mc.newCommand()}
 * @see https://github.com/LiteLDev/LiteLoaderBDS/blob/main/LiteLoader/Header/MC/Command.hpp#L17
 */
declare enum PermType {
  /** 任意のユーザーがこのコマンドを実行できます */
  Any = 0,

  /** OPのみがこのコマンドを実行できます（デフォルト値） */
  GameMasters = 1,

  Admin = 2,

  HostPlayer = 3,

  /** コンソールのみがこのコマンドを実行できます */
  Console = 4,

  Internal = 5,
}

/**
 * ### コマンドパラメータの型
 *
 * @see [有効なコマンドパラメータとその解説](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Command?id=%e6%9c%89%e6%95%88%e7%9a%84%e5%91%bd%e4%bb%a4%e5%8f%82%e6%95%b0%e7%b1%bb%e5%9e%8b%e5%8f%8a%e8%a7%a3%e9%87%8a)
 * @see [`Command.mandatory()`](Command.d.ts)
 * @see [`Command.optional()`](Command.d.ts)
 */
declare enum ParamType {
  /** `boolean` - ブール値パラメータ */
  Bool,

  /** `number` - 整数パラメータ */
  Int,

  /** `number` - 浮動小数点数パラメータ */
  Float,

  /** `string` - 文字列パラメータ */
  String,

  /** {@linkcode Entity} - エンティティターゲットセレクターパラメータ */
  Actor,

  /** {@linkcode Player} - プレイヤーターゲットセレクターパラメータ */
  Player,

  /** {@linkcode IntPos} - 整数座標パラメータ */
  BlockPos,

  /** {@linkcode FloatPos} - 浮動小数点数座標パラメータ */
  Vec3,

  /** `string` - 生の文字列パラメータ（コンマやスペースなどの特殊文字を含むことができます） */
  RawText,

  /** `string` - メッセージタイプパラメータ（`/say` コマンドのようなパラメータで、ターゲットセレクターなどが自動的に展開されます） */
  Message,

  /** `string` - `Json`文字列パラメータ */
  JsonValue,

  /** [`Item`](../Item.d.ts) - アイテムタイプパラメータ */
  Item,

  /** [`Block`](../Block/Block.d.ts) - ブロックタイプパラメータ */
  Block,

  /** `string` - エフェクトタイプパラメータ */
  Effect,

  /** `string` - 列挙型パラメータ */
  Enum,

  /** `string` - 可変列挙型パラメータ */
  SoftEnum,

  /** `string` - エンティティタイプパラメータ */
  ActorType,

  /** `string` - コマンド名パラメータ（テスト用） */
  Command,

  /** `null` - WildcardCommandSelector\<Actor\> */
  WildcardSelector,
}

/**
 * ### コマンド実行主体の型
 *
 * @see [引数 origin: コマンドの実行者](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Command?id=%e5%8f%82%e6%95%b0-origin-%ef%bc%9a%e5%91%bd%e4%bb%a4%e7%9a%84%e6%89%a7%e8%a1%8c%e8%80%85)
 * @see {@linkcode CommandOrigin.type}
 * @see https://github.com/LiteLDev/LiteLoaderBDS/blob/main/LiteLoader/Header/MC/Command.hpp#L22
 */
declare enum OriginType {
  Player = 0,
  Block = 1,
  MinecartBlock = 2,
  DevConsole = 3,
  Test = 4,
  AutomationPlayer = 5,
  ClientAutomation = 6,
  Server = 7,
  Actor = 8,
  Virtual = 9,
  GameArgument = 10,
  ActorServer = 11,
  Precompiled = 12,
  GameDirectorEntity = 13,
  Script = 14,
  ExecuteContext = 15,

  DedicatedServer = 7, // Server
}

/**
 * @see https://github.com/LiteLDev/LiteLoaderBDS/blob/main/ScriptEngine/API/CommandAPI.cpp#L32
 * @see https://github.com/LiteLDev/LiteLoaderBDS/blob/main/LiteLoader/Header/MC/CommandParameterData.hpp#L29
 */
declare enum ParamOption {
  None = 0,

  EnumAutocompleteExpansion = 1,

  /** ブロックまたはアイテム名の列挙型で使用 */
  HasSemanticConstraint = 2,

  /** NewExecuteCommandで使用 */
  EnumAsChainedCommand = 4,
}
