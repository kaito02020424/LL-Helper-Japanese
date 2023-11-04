/**
 * ロールのインスタンス
 */
declare class Role {
    /**
     * ロールを作成します。
     * @param name ロール名、一意である必要があり、@#[]{}<>()/|$%^&*!~`"'+=?\n\t\r\f\v を含めてはいけません
     * @param displayName ロールの表示名（デフォルトはnameと同じ）
     */
    constructor(name: string, displayName?: string);

    /** ロールの名前 */
    name: string;

    /** ロールの表示名 */
    displayName: string;

    /** ロールの優先度、値が大きいほど優先度が高い */
    priority: number;

    /** ロールが持つ権限 */
    permissions: Array<{ name: string, enabled: boolean, extra: object }>;

    /** ロールのメンバーのXuid */
    members: Array<string>;

    /**
     * ロールインスタンスが有効かどうかを確認します。
     * @returns {boolean} 有効な場合はtrue
     */
    isValid(): boolean;

    /**
     * ロールに指定したメンバーがいるかどうかを確認します。
     * @param xuid メンバー（プレイヤー）のXuid
     * @returns {boolean} メンバーがいる場合はtrue
     */
    hasMember(xuid: string): boolean;

    /**
     * ロールにメンバーを追加します。
     * @param xuid メンバー（プレイヤー）のXuid
     */
    addMember(xuid: string): void;

    /**
     * ロールからメンバーを削除します。
     * @param xuid メンバー（プレイヤー）のXuid
     */
    removeMember(xuid: string): void;

    /**
     * ロールが指定した権限を持っているかどうかを確認します。
     * @param name 権限名
     * @returns {boolean} その権限を持っている場合はtrue
     */
    hasPermission(name: string): boolean;

    /**
     * ロールの権限を設定します。
     * @param name 権限名、PermInfoListに既に登録されている必要があります
     * @param enabled 権限が有効かどうか
     * @param extraData 権限の追加データ
     */
    setPermission(name: string, enabled: boolean, extraData?: object): void;

    /**
     * ロールから権限を削除します。
     * @param name 権限名
     */
    removePermission(name: string): void;

    /**
     * 権限がロールに存在するかどうかを確認します。
     * @param name 権限がロールに既に存在するかどうか
     * 注意: hasPermissionと異なり、このメソッドは権限が存在する場合にtrueを返しますが、権限が必ずしも有効であるわけではありません。
     * @returns {boolean} 権限が存在する場合はtrue
     */
    permissionExists(name: string): boolean;
}

declare namespace Permission {
    /**
     * ロールを取得します。
     * @param name ロール名
     * @returns {Role} ロールのインスタンス
     */
    function getRole(name: string): Role;

    /**
     * ロールを取得または作成します。
     * @param name ロール名、一意である必要があり、@#[]{}<>()/|$%^&*!~`"'+=?\n\t\r\f\v を含めてはいけません
     * @returns {Role} ロールのインスタンス
     */
    function getOrCreateRole(name: string): Role;

    /**
     * ロールが存在するかどうかを確認します。
     * @param name ロール名
     * @returns {boolean} ロールが存在する場合はtrue
     */
    function roleExists(name: string): boolean;

    /**
     * ロールを削除します。
     * @param name ロール名
     */
    function deleteRole(name: string): void;

    /**
     * 権限を登録します。
     * @param name 権限名、一意であり、スペースまたは\t\n\r\f\vを含んではいけない、namespace:nameのような形式である必要があります（少なくとも1つの「:」を含む）
     * @param desc 権限の説明
     */
    function registerPermission(name: string, desc: string): void;

    /**
     * 権限が存在するかどうかを確認します。
     * @param name 権限名
     * @returns {boolean} 権限が存在する場合はtrue
     */
    function permissionExists(name: string): boolean;

    /**
     * プレイヤーが指定した権限を持っているかどうかを確認します。
     * @param xuid プレイヤーのXuid
     * @param permName 権限名
     * @returns {boolean} プレイヤーが権限を持っている場合はtrue
     */
    function checkPermission(xuid: string, permName: string): boolean;

    /**
     * プレイヤーが指定したロールのメンバーかどうかを確認します。
     * @param xuid プレイヤーのXuid
     * @param roleName ロール名
     * @returns {boolean} プレイヤーがロールのメンバーである場合はtrue
     */
    function isMemberOf(xuid: string, roleName: string): boolean;

    /**
     * プレイヤーのロールのリストを取得します。
     * @param xuid プレイヤーのXuid
     * @returns {Array<Role>} このプレイヤーのロールのリスト
     */
    function getPlayerRoles(xuid: string): Array<Role>;

    /**
     * プレイヤーの権限リストを取得します。
     * @param xuid プレイヤーのXuid
     */
    function getPlayerPermissions(xuid: string): Array<object>;

    /**
     * データを保存します。
     */
    function saveData(): void;
}
