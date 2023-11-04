/**
 * 国際化API
 */
declare namespace i18n {
    /**
     * 翻訳データを読み込みます。
     * @param path - 翻訳データの場所（ファイルまたはディレクトリ）
     * @param defaultLocaleName - デフォルトの言語名、例: zh_CN または en。空の文字列を渡すと、システムの言語に従います。
     * @param defaultLangData - このパラメータは翻訳ファイルを補完または作成するために使用されます。
     */
    function load(path: string, defaultLocaleName: string, defaultLangData: object): void;

    /**
     * 指定した言語のテキスト翻訳を取得します。
     * @param key - テキストまたはID
     * @param localeName - ターゲットの言語。デフォルトはi18n.loadで渡されたdefaultLocaleNameです。
     * @returns 翻訳内容（複数のフォールバックを経ても翻訳が見つからない場合、keyが返されます）
     */
    function get(key: string, localeName?: string): string;

    /**
     * 指定した言語でテキストを翻訳し、フォーマットします。
     * @param localeName - ターゲットの言語
     * @param key - テキストまたはID
     * @param info - フォーマットパラメータ
     * @returns 翻訳およびフォーマットされたテキスト
     */
    function trl(localeName: string, key: string, ...info: any[]): string;

    /**
     * デフォルトの言語でテキストを翻訳し、フォーマットします。
     * @param key - テキストまたはID
     * @param info - フォーマットパラメータ
     * @returns 翻訳およびフォーマットされたテキスト
     */
    function tr(key: string, ...info: any[]): string;
}
