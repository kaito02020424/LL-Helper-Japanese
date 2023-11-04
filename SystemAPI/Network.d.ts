/// <reference path="../index.d.ts" />

declare namespace network {
  /**
   * 非同期HTTP(s) GETリクエストを送信します。
   * @param url - リクエストの対象URL（GETリクエストに含まれるパラメータを含む）
   * @param callback - リクエストが戻ったときに呼び出されるコールバック関数、HTTP(s)の応答結果を返すために使用されます.
   * @returns {boolean} - リクエストの送信に成功したかどうか {boolean}
   */
  function httpGet(url: string, callback: (status: number, result: string) => void): boolean;

  /**
   * 非同期HTTP(s) GETリクエストを送信します。
   * @param url - リクエストの対象URL（GETリクエストに含まれるパラメータを含む）
   * @param header - リクエストヘッダ（GETリクエストのリクエストヘッダを含む）
   * @param callback - リクエストが戻ったときに呼び出されるコールバック関数、HTTP(s)の応答結果を返すために使用されます.
   * @returns {boolean} - リクエストの送信に成功したかどうか {boolean}
   */
  function httpGet(url: string, header: any, callback: (status: number, result: string) => void): boolean;

  /**
   * 非同期HTTP(s) POSTリクエストを送信します。
   * @param url - リクエストの対象URL
   * @param data - 送信するデータ
   * @param type - 送信するPOSTデータのタイプ、例: `text/plain`, `application/x-www-form-urlencoded` など.
   * @param callback - リクエストが戻ったときに呼び出されるコールバック関数、HTTP(s)の応答結果を返すために使用されます.
   * @returns {boolean} - リクエストの送信に成功したかどうか {boolean}
   */
  function httpPost(url: string, data: string, type: string, callback: (status: number, result: string) => void): boolean;

  /**
   * 非同期HTTP(s) POSTリクエストを送信します。
   * @param url - リクエストの対象URL
   * @param header - リクエストヘッダ（POSTリクエストのリクエストヘッダを含む）
   * @param data - 送信するデータ
   * @param type - 送信するPOSTデータのタイプ、例: `text/plain`, `application/x-www-form-urlencoded` など.
   * @param callback - リクエストが戻ったときに呼び出されるコールバック関数、HTTP(s)の応答結果を返すために使用されます.
   * @returns {boolean} - リクエストの送信に成功したかどうか {boolean}
   */
  function httpPost(url: string, header: any, data: string, type: string, callback: (status: number, result: string) => void): boolean;
}

declare type WSClientType = number;
declare class WSClient {
  /** 正常な接続中 */
  Open: WSClientType;

  /** 切断中 */
  Closing: WSClientType;

  /** 未接続 */
  Closed: WSClientType;

  /** 現在の接続状態 */
  readonly status: WSClientType;

  /**
   * 接続を作成します。
   * @param target - 接続する対象アドレス
   * @returns {boolean} - 接続が成功したかどうか {boolean}
   */
  connect(target: string): boolean;

  /**
   * 非同期で接続を作成します。
   * @param target - 接続する対象アドレス
   * @param callback - 接続が成功または失敗した場合に実行されるコールバック関数。
   * @returns {boolean} - 接続を試みるのに成功したかどうか {boolean}
   */
  connectAsync(target: string, callback: (success: boolean) => void): boolean;

  /**
   * テキストまたはバイナリメッセージを送信します。
   * @param msg - 送信するテキストまたはバイナリデータ
   * @returns {boolean} - 送信が成功したかどうか {boolean}
   */
  send(msg: string | ByteBuffer): boolean;

  /**
   * WebSocketイベントを監視します。
   * @param event - 監視するイベント名
   * @param callback - 登録されたリスナーファンクション
   * @returns {boolean} - イベントの監視に成功したかどうか {boolean}
   */
  listen(event: "onTextReceived", callback: (msg: string) => void): boolean;

  /**
   * WebSocketイベントを監視します。
   * @param event - 監視するイベント名
   * @param callback - 登録されたリスナーファンクション
   * @returns {boolean} - イベントの監視に成功したかどうか {boolean}
   */
  listen(
    event: "onBinaryReceived",
    callback: (data: ByteBuffer) => void
  ): boolean;

  /**
   * WebSocketイベントを監視します。
   * @param event - 監視するイベント名
   * @param callback - 登録されたリスナーファンクション
   * @returns {boolean} - イベントの監視に成功したかどうか {boolean}
   */
  listen(event: "onError", callback: (msg: string) => void): boolean;

  /**
   * WebSocketイベントを監視します。
   * @param event - 監視するイベント名
   * @param callback - 登録されたリスナーファンクション
   * @returns {boolean} - イベントの監視に成功したかどうか {boolean}
   */
  listen(event: "onLostConnection", callback: (code: number) => void): boolean;

  /**
   * 接続を閉じます。
   * @returns {boolean} - 接続を閉じるのに成功したかどうか {boolean}
   * @tips - 閉じている状態でこのクライアントオブジェクトを使用しないでください！
   */
  close(): boolean;

  /**
   * 接続を強制的に切断します。
   * @returns {boolean} - 接続を強制的に切断したかどうか {boolean}
   */
  shutdown(): boolean;

  /**
   * エラーコードを取得します。
   * @returns {number} - 直近のエラーによって生成されたエラーコード {number}
   */
  errorCode(): number;
}

declare class HttpRequest {
  /** リクエストメソッド */
  readonly method: string;

  /** リクエストパス */
  readonly path: string;

  /** リクエストクエリパラメータ */
  readonly query: any;

  /** リクエストクエリパラメータ (同上) */
  readonly params: any;

  /** リクエストヘッダー */
  readonly headers: any;

  /** リクエストボディ */
  readonly body: string;

  /** リクエスト元のアドレス */
  readonly remoteAddr: string;

  /** リクエスト元のポート番号 */
  readonly remotePort: number;

  /** リクエストバージョン */
  readonly version: string;

  /** リクエストパスの正規表現一致結果 */
  readonly matches: Array<any>;

  /**
   * 指定されたリクエストヘッダーの値を取得します。
   * @param name - リクエストヘッダー名
   * @returns {Array<string>} - リクエストヘッダーの値の配列 (指定されたヘッダーが存在しない場合、`[]` 空の配列が返ります)
   */
  getHeader(name: string): Array<string>;
}

declare class HttpResponse {
  /** レスポンスのステータスコード */
  status: number;

  /** レスポンスヘッダー */
  header: any;

  /** レスポンスボディ */
  body: string;

  /** レスポンスのバージョン */
  version: string;

  /** エラーの理由 */
  reason: string;

  /**
   * 指定されたレスポンスヘッダーの値を取得します。
   * @param name - レスポンスヘッダー名
   * @returns {Array<string>} - レスポンスヘッダーの値の配列 (指定されたヘッダーが存在しない場合、`[]` 空の配列が返ります)
   */
  getHeader(name: string): Array<string>;

  /**
   * 指定されたレスポンスヘッダーの値を設定します。
   * @param name - レスポンスヘッダー名
   * @param value - レスポンスヘッダーの値
   * @returns {HttpResponse} - 処理が完了したレスポンスオブジェクト
   */
  setHeader(name: string, value: any): HttpResponse;

  /**
   * レスポンスボディにコンテンツを書き込みます。
   * @param content - レスポンスのコンテンツ
   * @returns {HttpResponse} - 処理が完了したレスポンスオブジェクト
   */
  write(...content: any[]): HttpResponse;
}

declare class HttpServer {
  /**
   * GETリクエストをリッスンします。
   * @param path - リクエストディレクトリ、`/`で始まり、正規表現を含むことができます。例: `/test/(.+)`
   * @param callback - マッチするpathのGETリクエストが到着した際に呼び出されるコールバック関数
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onGet(
    path: string,
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * PUTリクエストをリッスンします。
   * @param path - リクエストディレクトリ、`/`で始まり、正規表現を含むことができます。例: `/test/(.+)`
   * @param callback - マッチするpathのPUTリクエストが到着した際に呼び出されるコールバック関数
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onPut(
    path: string,
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * POSTリクエストをリッスンします。
   * @param path - リクエストディレクトリ、`/`で始まり、正規表現を含むことができます。例: `/test/(.+)`
   * @param callback - マッチするpathのPOSTリクエストが到着した際に呼び出されるコールバック関数
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onPost(
    path: string,
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * PATCHリクエストをリッスンします。
   * @param path - リクエストディレクトリ、`/`で始まり、正規表現を含むことができます。例: `/test/(.+)`
   * @param callback - マッチするpathのPATCHリクエストが到着した際に呼び出されるコールバック関数
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onPatch(
    path: string,
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * DELETEリクエストをリッスンします。
   * @param path - リクエストディレクトリ、`/`で始まり、正規表現を含むことができます。例: `/test/(.+)`
   * @param callback - マッチするpathのDELETEリクエストが到着した際に呼び出されるコールバック関数
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onDelete(
    path: string,
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * OPTIONSリクエストをリッスンします。
   * @param path - リクエストディレクトリ、`/`で始まり、正規表現を含むことができます。例: `/test/(.+)`
   * @param callback - マッチするpathのOPTIONSリクエストが到着した際に呼び出されるコールバック関数
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onOptions(
    path: string,
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * PreRoutingプリルーティングイベントをリッスンします。
   * @param callback - リクエストが到着したときに呼び出されます。コールバック内でレスポンスを変更でき、`false`を返すと指定されたパスのコールバック関数にはルーティングされませんが、PostRoutingイベントは引き続きトリガーされます。
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onPreRouting(
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * PostRoutingポストルーティングイベントをリッスンします。
   * @param callback - 指定されたディレクトリのコールバック関数（またはPreRoutingイベント）が実行された後に呼び出され、レスポンスを変更できます。
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onPostRouting(
    callback: (req: HttpRequest, resp: HttpResponse) => void
  ): HttpServer;

  /**
   * エラーエラーイベントをリッスンします。
   * @param callback - エラー（ステータスコードが400以上）が発生したときに呼び出されます。
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onError(callback: (req: HttpRequest, resp: HttpResponse) => void): HttpServer;

  /**
   * 例外例外イベントをリッスンします。
   * @param callback - ハンドラ内で例外がスローされた場合に呼び出され、引数3は例外情報です。
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  onException(
    callback: (req: HttpRequest, resp: HttpResponse, error: string) => void
  ): HttpServer;

  /**
   * ポートをリッスンし、サーバーを開始します。
   * @param addr - リッスンするアドレス、IPアドレスまたはドメイン名で指定できます
   * @param port - リッスンするポート
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  listen(addr: string, port: number): HttpServer;

  /**
   * ポートをリッスンし、サーバーを開始します。
   * @param addr - リッスンするアドレス、IPアドレスまたはドメイン名で指定できます
   * @param port - リッスンするポート
   * @returns {HttpServer} - 処理が完了したサーバーオブジェクト（他の操作を連鎖的に実行するため）
   */
  startAt(addr: string, port: number): HttpServer;

  /**
   * サーバーを停止します。
   */
  stop(): void;

  /**
   * サーバーが実行中かどうかを取得します。
   * @returns {boolean} - サーバーが実行中の場合はtrue、それ以外の場合はfalse
   */
  isRunning(): boolean;
}
