/// <reference path="../../index.d.ts" />

declare namespace mc {
  /**
   * ### ブロックを座標から取得
   *
   * この関数を使用してオブジェクトを手動で生成します。
   *
   * **注意**: 取得しようとするブロックはすでにロードされた領域にある必要があります。そうでない場合、問題が発生します。
   *
   * @param pos ブロックの位置
   *
   * @returns ブロックオブジェクト
   */
  function getBlock(pos: IntPos): Block | null;

  /**
   * ### ブロックを座標から取得
   *
   * この関数を使用してオブジェクトを手動で生成します。
   *
   * **注意**: 取得しようとするブロックはすでにロードされた領域にある必要があります。そうでない場合、問題が発生します。
   *
   * @param x ブロックのx座標
   * @param y ブロックのy座標
   * @param z ブロックのz座標
   * @param dimId ブロックのディメンションID
   *
   * @returns ブロックオブジェクト
   */
  function getBlock(
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2
  ): Block | null;

  /**
   * ### 指定位置のブロックを設定
   *
   * この関数を使用して、座標に対応するブロックを別のブロック、`minecraft:stone`のような標準のブロックタイプ、またはブロックNBTデータに設定します。
   * これはコマンド `/setblock` と同様の動作です。
   *
   * @param pos ターゲットのブロック位置
   * @param block 設定するブロックオブジェクト、標準のブロックタイプ名（例: `minecraft:stone`）、またはブロックNBTデータ
   * @param tileData ブロック状態値、標準のブロックタイプ名でブロックを設定する場合のみ有効（デフォルトは`0`）
   *
   * @returns 設定に成功したかどうか
   */
  function setBlock(
    pos: IntPos,
    block: Block | string | NbtCompound,
    tileData: number
  ): boolean;

  /**
   * ### 指定位置のブロックを設定
   *
   * この関数を使用して、座標に対応するブロックを別のブロック、`minecraft:stone`のような標準のブロックタイプ、またはブロックNBTデータに設定します。
   * これはコマンド `/setblock` と同様の動作です。
   *
   * @param x ブロックのx座標
   * @param y ブロックのy座標
   * @param z ブロックのz座標
   * @param dimId ブロックのディメンションID
   * @param block 設定するブロックオブジェクト、標準のブロックタイプ名（例: `minecraft:stone`）、またはブロックNBTデータ
   * @param tileData ブロック状態値、標準のブロックタイプ名でブロックを設定する場合のみ有効（デフォルトは`0`）
   *
   * @returns 設定に成功したかどうか
   */
  function setBlock(
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2,
    block: Block | string | NbtCompound,
    tileData: number
  ): boolean;

  /**
   * ### 指定位置にパーティクルエフェクトを生成
   *
   * パーティクルエフェクトの名前は[Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/%E7%B2%92%E5%AD%90?variant=zh#.E7.B1.BB.E5.9E.8B)で確認できます。
   * パラメータを渡す際、名前空間のプレフィックスを忘れないようにしてください。例: `minecraft:heart_particle`
   *
   * @param pos 生成位置
   * @param type 生成するパーティクルエフェクトの名前（Wikiで確認可能）
   *
   * @returns 生成に成功したかどうか
   */
  function spawnParticle(pos: IntPos | FloatPos, type: string): boolean;

  /**
   * ### 指定位置にパーティクルエフェクトを生成
   *
   * パーティクルエフェクトの名前は[Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/%E7%B2%92%E5%AD%90?variant=zh#.E7.B1.BB.E5.9E.8B)で確認できます。
   * パラメータを渡す際、名前空間のプレフィックスを忘れないようにしてください。例: `minecraft:heart_particle`
   *
   * @param x x座標
   * @param y y座標
   * @param z z座標
   * @param dimId ディメンション
   * @param type 生成するパーティクルエフェクトの名前（Wikiで確認可能）
   *
   * @returns 生成に成功したかどうか
   */
  function spawnParticle(
    x: number,
    y: number,
    z: number,
    dimId: 0 | 1 | 2,
    type: string
  ): boolean;
}
