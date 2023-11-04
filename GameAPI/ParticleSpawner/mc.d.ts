/// <reference path="../../index.d.ts" />
declare namespace mc {
    /**
     * ### パーティクル生成オブジェクトを生成します
     * 
     * @param displayRadius デフォルト値：4294967295
     * @param highDetail デフォルト値：true
     * @param doubleSided デフォルト値：true
     */
    function newParticleSpawner(displayRadius?: number, highDetail?: boolean, doubleSided?: boolean): ParticleSpawner;
}  