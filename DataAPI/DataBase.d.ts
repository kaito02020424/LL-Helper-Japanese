/** キー値データベースを作成または開きます。 */
declare class KVDatabase {
    constructor(dir: string);

    /** データベースの保存ディレクトリのパスです。BDSルートディレクトリを基準とします。 */
    dir: string;

    /**
     * データ項目を書き込みます。
     * @param name データ項目の名前
     * @param data 書き込むデータ
     * @returns {boolean} 書き込みが成功したかどうか
     */
    set(name: string, data: any): boolean;

    /**
     * データ項目を読み込みます。
     * @param name データ項目の名前
     * @returns {any|null} データベースに保存されているこの項目のデータ
     */
    get(name: string): any | null;

    /**
     * データ項目を削除します。
     * @param name データベース名
     */
    delete(name: string): boolean;

    /**
     * すべてのデータ項目の名前を取得します。
     * @returns {Array<string>} すべてのデータ項目の名前の配列
     */
    listKey(): Array<string>;

    /**
     * データベースを閉じます。
     * @returns {boolean} 閉じるのに成功したかどうか
     */
    close(): boolean;
}

declare class DataBase_Params {
    /** データベースの場所を指定します。 */
    path: string;

    /** データベースが存在しない場合に自動的に作成するかどうか。 */
    create: boolean;

    /** 読み取り専用モードで開くかどうか。 */
    readonly: boolean;

    /** 読み書きモードで開くかどうか。 */
    readwrite: boolean;
}

/** SQLデータベースセッションを開始します。 */
declare class DBSession {
    /**
     * SQLデータベースセッションを開始します。
     * @param type データベースのタイプ。現在は
     * @param params DataBase_Params 接続パラメータ
     */
    constructor(type: "sqlite3", params: DataBase_Params);

    /**
     * SQLデータベースセッションを開始します。
     * @param str "file:///mydb.db?k=v, mysql://root:password@localhost:3306/db"のような接続文字列
     */
    constructor(str: string);

    /**
     * SQLを実行し、結果セットを取得します。
     * @param sql クエリするSQL文
     * @returns {Array<Array<any>>} クエリの結果（結果セット）
     * @tips 配列の最初の行(`result[0]`)は結果セットのヘッダー（列名）で、残りの行は結果データです。
     */
    query(sql: string): Array<Array<any>>;

    /**
     * SQLを実行しますが、結果を取得しません。
     * @param sql 実行するSQL文
     * @returns {DBSession} 処理が完了したセッションオブジェクト（他の操作を連鎖的に行うのに便利です）
     */
    exec(sql: string): DBSession;

    /**
     * SQLを実行しますが、結果を取得しません。
     * @param sql 実行するSQL文
     * @returns {DBSession} 処理が完了したセッションオブジェクト（他の操作を連鎖的に行うのに便利です）
     */
    execute(sql: string): DBSession;

    /**
     * 現在のセッションがオープン状態かどうかを取得します。
     * @returns {boolean} オープン状態かどうか
     */
    isOpen(): boolean;

    /**
     * データベースセッションを閉じます。
     * @returns {boolean} 閉じるのに成功したかどうか
     */
    close(): boolean;

    /**
     * プリペアドステートメントを準備します。
     * @param sql 準備するSQL文
     * @returns {DBStmt} プリペアドステートメント。失敗した場合にエラーがスローされます
     */
    prepare(sql: string): DBStmt;
}

/** SQLプリペアドステートメント。 */
declare class DBStmt {
    /**
     * SQL文にパラメータをバインドします。
     * @param val バインドする値
     * @tips このオーバーロードは、未バインドの最初のパラメータに値をバインドします
     */
    bind(val: any): void;

    /**
     * SQL文にパラメータをバインドします。
     * @param val バインドする値
     * @tips バインドするオブジェクト、このオブジェクトを反復処理して実行する
     * @tips オブジェクトの場合: bind(val, key) 配列の場合: bind(val)
     */
    bind(val: any | Array<any>): void;

    /**
     * SQL文にパラメータをバインドします。
     * @param val バインドする値
     * @param index バインドするパラメータのインデックス（0から始まります）
     */
    bind(val: any, index: number): void;

    /**
     * SQL文にパラメータをバインドします。
     * @param val バインドする値
     * @param name バインドするパラメータの名前
     */
    bind(val: any, name: string): void;

    /**
     * 次の結果行に進みます。
     * @returns {boolean} 成功したかどうか
     */
    step(): boolean;

    /**
     * 次の結果行に進みます。
     * @returns {boolean} 成功したかどうか
     */
    next(): boolean;

    /**
     * 現在の結果行を取得します。
     * @returns {Object} 現在の結果行、{col1: "value", col2: 2333}のような形式です
     */
    fetch(): { [key: string]: any };

    /**
     * すべての結果行を取得します。
     * @returns {Array<Array<any>>} 結果のすべての行
     * @tips 配列の最初の行(`result[0]`)は結果セットのヘッダー（列名）で、残りの行は結果データです。
     */
    fetchAll(): Array<Array<any>>;

    /**
     * 現在のステートメントの状態を「実行待ち」にリセットします。
     * @returns {DBStmt} 処理が完了したステートメントオブジェクト（他の操作を連鎖的に行うのに便利です）
     * @tips この関数はバインドされたパラメータをクリアしません
     */
    reset(): DBStmt;

    /**
     * プリペアドステートメントを再実行します。
     * @returns {DBStmt} 処理が完了したステートメントオブジェクト（他の操作を連鎖的に行うのに便利です）
     * @tips この関数は`stmt.reset()`および`stmt.execute()`を実行するのと同じです
     */
    reexec(): DBStmt;

    /**
     * すべてのバインドされたパラメータをクリアします。
     * @returns {DBStmt} 処理が完了したステートメントオブジェクト（他の操作を連鎖的に行うのに便利です）
     */
    clear(): DBStmt;
}
