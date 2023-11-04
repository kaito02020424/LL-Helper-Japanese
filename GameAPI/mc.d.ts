/// <reference path="../index.d.ts" />
declare namespace mc {
    /**
     * サーバーゲーム時間を取得します。
     * @param TimeID 取得したい時間 (0 は昼間を表し、1 はゲーム時間を表し、2 は日付を表します)
     * @returns 取得した時間
     */
    function getTime(TimeID: 0 | 1 | 2): number;

    /**
     * サーバーの時間を設定します。
     * @param tick 設定したい時間
     * @returns 設定が成功したかどうか
     */
    function setTime(tick: number): boolean;

    /**
     * サーバーの天気を取得します。
     * @returns 現在の天気 (0 は晴れ、1 は雨、2 は雷雨を表します)
     */
    function getWeather(): 0 | 1 | 2;

    /**
     * サーバーの天気を設定します。
     * @param WeatherID 設定したい天気 (0 は晴れ、1 は雨、2 は雷雨を表します)
     * @returns 設定が成功したかどうか
     */
    function setWeather(WeatherID: 0 | 1 | 2): boolean;
}
