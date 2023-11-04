/// <reference path="../../index.d.ts" />

/**
 * ### 📱 デバイス情報オブジェクト
 *
 * LLSEでは、「デバイス情報オブジェクト」を使用して、特定のプレイヤーが使用しているゲームデバイスに関連する情報を操作および取得します。
 *
 * このクラスには**コンストラクタはありません**。{@linkcode Player.getDevice()} を使用して作成してください。
 *
 * **注意**：デバイス情報オブジェクトを**長期間保存しないでください**。
 * デバイスに関連付けられたプレイヤーがゲームを終了すると、対応するオブジェクトは無効になります。
 * したがって、特定のオブジェクトに長期間アクセスする必要がある場合は、前述の方法でリアルタイムのデバイス情報オブジェクトを取得してください。
 *
 * @see [📱 デバイス情報オブジェクト API](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Device)
 */
declare class Device {
  /** プレイヤーデバイスのIPアドレス */
  readonly ip: string;

  /** プレイヤーの平均ネットワーク遅延時間（ミリ秒） */
  readonly avgPing: number;

  /** プレイヤーの平均ネットワークパケットロス率（%） */
  readonly avgPacketLoss: number;

  /** プレイヤーのネットワーク遅延時間（ミリ秒） */
  readonly lastPing: number;

  /** プレイヤーのネットワークパケットロス率（%） */
  readonly lastPacketLoss: number;

  /**
   * ### プレイヤーデバイスのオペレーティングシステムタイプ
   *
   * プレイヤーデバイスのオペレーティングシステムを表す文字列を返します。返される可能性のある値は次のとおりです。
   *
   * | dv.osの返り値 | プレイヤーデバイスのオペレーティングシステム |
   * | --------------- | --------------------- |
   * | `Android`       | スマートフォン用のGoogle Android       |
   * | `iOS`           | スマートフォンのApple iOS / タブレットのiPadOS           |
   * | `OSX`           | Apple macOS搭載のコンピュータ           |
   * | `Amazon`        | タブレット/テレビのAmazon FireOS                |
   * | `GearVR`        | サムスンGearVR用のヘッドセット                |
   * | `Hololens`      | Microsoft HoloLens用のヘッドセット              |
   * | `Windows10`     | Microsoft Windowsを搭載したコンピュータ         |
   * | `Win32`         | Microsoft Win32を搭載したコンピュータ（教育版？） |
   * | `TVOS`          | テレビ向けのApple tvOS                  |
   * | `PlayStation`   | ソニーPlayStation用のゲーム機       |
   * | `Nintendo`      | 任天堂Switch用の携帯ゲーム機          |
   * | `Xbox`          | Microsoft Xbox用のゲーム機              |
   * | `WindowsPhone`  | Microsoft Windows Mobileを搭載したスマートフォン     |
   * | `Unknown`       | 不明なOS              |
   */
  readonly os:
    | `Android`
    | `iOS`
    | `OSX`
    | `Amazon`
    | `GearVR`
    | `Hololens`
    | `Windows10`
    | `Win32`
    | `TVOS`
    | `PlayStation`
    | `Nintendo`
    | `Xbox`
    | `WindowsPhone`
    | `Unknown`;

  /** プレイヤーの接続アドレス */
  readonly serverAddress: string;

  /** プレイヤークライアントの識別ID */
  readonly clientId: string;

  /** 入力モード */
  readonly inputMode: number

  /** プレイモード */
  readonly playMode: number
}

declare class LLSE_Device extends Device{}
