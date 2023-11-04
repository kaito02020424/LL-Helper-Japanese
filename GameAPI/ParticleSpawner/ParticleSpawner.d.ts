/// <reference path="../../index.d.ts" />
/**
 * ### ✨ パーティクル生成クラス
 * 
 * このクラスには**コンストラクタ**が存在しません。  
 * クラスのオブジェクトを取得するには {@linkcode mc.newParticleSpawner()} を使用してください。
 * 
 * @see [✨ ParticleSpawner オブジェクト](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Particle)
 */
declare class ParticleSpawner {
    /** パーティクルの表示半径 */
    displayRadius: number;

    /** 高詳細なラインを描画する必要があるかどうか */
    highDetail: boolean;

    /** 両面パーティクルが必要かどうか */
    doubleSided: boolean;

    /**
     * ### 指定した名前のパーティクルを生成
     * 
     * @param pos 浮動小数点座標または整数座標。整数座標の場合、ブロックの中心座標が使用されます。
     * @param name パーティクルの名前
     */
    spawnParticle(pos: FloatPos | IntPos, name: string): boolean;


    /**
     * ### ポイントパーティクルを生成
     * 
     * @param pos 浮動小数点座標または整数座標。整数座標の場合、ブロックの中心座標が使用されます。
     * @param pointSize サイズオプション：1、2、4、8、16から選択（デフォルト：4）
     * @param color パーティクルの色（デフォルト：ParticleColor.White）
     */
    drawPoint(pos: FloatPos | IntPos, pointSize?: 1 | 2 | 4 | 8 | 16, color?: ParticleColor): boolean;


    /**
     * ### 数字パーティクルを生成
     * 
     * @param pos 浮動小数点座標または整数座標。整数座標の場合、ブロックの中心座標が使用されます。
     * @param num 数字（Number型：0〜16までまたはString型："0"〜"16"または"A"〜"F"）
     * @param color パーティクルの色（デフォルト：ParticleColor.White）
     */
    drawNumber(pos: FloatPos | IntPos, num: number | string, color?: ParticleColor): boolean;


    /**
     * ### 軸方向のラインパーティクルを生成
     * 
     * @param pos 開始位置（浮動小数点座標または整数座標。整数座標の場合、ブロックの中心座標が使用されます）
     * @param direction 方向（Direction列挙体を使用）
     * @param length 任意の実数
     * @param color パーティクルの色（デフォルト：ParticleColor.White）
     */
    drawAxialLine(pos: FloatPos | IntPos, direction: Direction, length: number, color?: ParticleColor): boolean;


    /**
     * ### 方向付きのラインパーティクルを生成
     * 
     * @param start 開始位置（浮動小数点座標または整数座標。整数座標の場合、ブロックの中心座標が使用されます）
     * @param end 終了位置（浮動小数点座標または整数座標。整数座標の場合、ブロックの中心座標が使用されます）
     * @param lineWidth サイズオプション：1、2、4、8、16から選択（デフォルト：4）
     * @param minSpacing 任意の実数（ラインセグメント間の最小スペース、デフォルト：1）
     * @param maxParticlesNum 整数（ラインの最大パーティクル数、達成後、自動的に間隔が増加します、デフォルト：64）
     * @param color パーティクルの色（デフォルト：ParticleColor.White）
     */
    drawOrientedLine(
        start: FloatPos | IntPos,
        end: FloatPos | IntPos,
        lineWidth?: 1 | 2 | 4 | 8 | 16,
        minSpacing?: number,
        maxParticlesNum?: number,
        color?: ParticleColor
    ): boolean;

    /**
     * ### 円を生成
     * @param pos 円の中心位置（浮動小数点座標または整数座標。整数座標の場合、ブロックの中心座標が使用されます）
     * @param facing 方向（Direction列挙体を使用）
     * @param radius 任意の実数（半径）
     * @param lineWidth サイズオプション：1、2、4、8、16から選択（デフォルト：4）
     * @param minSpacing 任意の実数（ラインセグメント間の最小スペース、デフォルト：1）
     * @param maxParticlesNum 整数（ラインの最大パーティクル数、達成後、自動的に間隔が増加します、デフォルト：64）
     * @param color パーティクルの色（デフォルト：ParticleColor.White）
     */
    drawCircle(
        pos: FloatPos | IntPos,
        facing: Direction,
        radius: number,
        lineWidth?: 1 | 2 | 4 | 8 | 16,
        minSpacing?: number,
        maxParticlesNum?: number,
        color?: ParticleColor
    ): boolean;

    /**
     * ### 立方体を生成
     * @param pos 開始位置（浮動小数点座標または整数座標。整数座標の場合、ブロックの角の底部位置が使用されます。1つの座標の場合、1×1×1の立方体が描画されます）
     * @param pos2 終了位置（浮動小数点座標または整数座標。整数座標の場合、ブロックの角の上部位置が使用されます。posからpos2までの立方体が描画されます）
     * @param color パーティクルの色（デフォルト：ParticleColor.White）
     */
    drawCuboid(pos: FloatPos | IntPos, pos2?: FloatPos | IntPos, color?: ParticleColor): boolean;


}

/**
 * パーティクルの色の列挙型
 */
declare enum ParticleColor {
    Black,
    Indigo,
    Lavender,
    Teal,
    Cocoa,
    Dark,
    Oatmeal,
    White,
    Red,
    Apricot,
    Yellow,
    Green,
    Vatblue,
    Slate,
    Pink,
    Fawn
}

/**
 * 方向の列挙型
 */
declare enum Direction {
    NEG_Y,
    POS_Y,
    NEG_Z,
    POS_Z,
    NEG_X,
    POS_X
}  
