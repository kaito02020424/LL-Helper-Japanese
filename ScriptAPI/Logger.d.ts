/// <reference path="../index.d.ts" />

declare class logger {
    /**
     * ログをコンソールに出力するかどうかを設定します。
     * @param isOpen - ログをコンソールに出力するかどうか
     * @param logLevel （オプション） - コンソールのログ出力レベル（デフォルトは`4`）
     */
    static setConsole(isOpen: boolean, logLevel?: 0 | 1 | 2 | 3 | 4 | 5): void;

    /**
     * ログをファイルに出力するかどうかを設定します。
     * @param filePath - ログを出力するファイルのパス
     * @param logLevel （オプション） - ファイルへの最小ログ出力レベル（デフォルトは`4`）
     */
    static setFile(filePath: string, logLevel?: 0 | 1 | 2 | 3 | 4 | 5): void;

    /**
     * ログを特定のプレイヤーに出力するかどうかを設定します。
     * @param player - ログを出力する対象のプレイヤーオブジェクト
     * @param logLevel （オプション） - プレイヤーへの最小ログ出力レベル（デフォルトは`4`）
     */
    static setPlayer(player: Player, logLevel?: 0 | 1 | 2 | 3 | 4 | 5): void;

    // 通常のテキストを出力
    static log(...data: any[]): void;

    // デバッグ情報を出力
    static debug(...data: any[]): void;

    // 情報メッセージを出力
    static info(...data: any[]): void;

    // 警告メッセージを出力
    static warn(...data: any[]): void;

    // エラーメッセージを出力
    static error(...data: any[]): void;

    // 重大なエラーメッセージを出力
    static fatal(...data: any[]): void;

    /**
     * カスタムログメッセージのヘッダーを設定します。
     * @param title - 設定するカスタムヘッダー
     */
    static setTitle(title: string): void;

    /**
     * ログ出力のレベルを一括で変更します。
     * @param level - ログ出力のレベル（0～5）
     */
    static setLogLevel(level: 0 | 1 | 2 | 3 | 4 | 5): void;
}

