declare namespace mc {
    /**
     * BDS サーバーバージョンを取得
     * @returns {string} サーバーバージョン文字列、フォーマットは `v1.17.10` のような形式です
     */
    function getBDSVersion(): string;

    /**
     * BDS サーバープロトコルバージョンを取得
     * @returns {number} サーバープロトコルバージョン
     */
    function getServerProtocolVersion(): number;

    /**
     * サーバーの MOTD 文字列を設定
     * @param motd 目標の MOTD 文字列
     * @returns {boolean} 設定が成功したかどうか
     */
    function setMotd(motd: string): boolean;

    /**
     * サーバーの最大プレイヤー数を設定
     * @param num 最大プレイヤー数
     * @returns {boolean} 設定が成功したかどうか
     */
    function setMaxPlayers(num: number): boolean;
}  