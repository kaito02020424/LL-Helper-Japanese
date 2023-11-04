declare namespace data {
  /**
   * プレイヤー名からXUIDを取得する
   * @param name 検索するプレイヤー名
   * @returns {string | null} プレイヤーのXUIDまたはnull
   */
  function name2xuid(name: string): string | null;

  /**
   * プレイヤー名からXUIDを取得する
   * @param xuid 検索するプレイヤーのXUID
   * @returns {string | null} プレイヤー名またはnull
   */
  function xuid2name(xuid: string): string | null;

  /**
   * プレイヤー名からUUIDを取得する
   * @param name 検索するプレイヤー名
   * @returns {string | null} プレイヤーのUUIDまたはnull
   */
  function name2uuid(name: string): string | null;

  /**
   * XUIDからUUIDを取得する
   * @param xuid 検索するプレイヤーのXUID
   * @returns {string | null} プレイヤーのUUIDまたはnull
   */
  function xuid2uuid(xuid: string): string | null;

  function getAllPlayerInfo(): { name: string, xuid: string, uuid: string }[]

}
