import { lego } from "@armathai/lego";
import { assets } from "../../assets/assetsNames/assets";
import { audioAssets } from "../../assets/assetsNames/audio";
import { spines } from "../../assets/assetsNames/spines";
import { spriteSheets } from "../../assets/assetsNames/spriteSheets";
import { SceneNames } from "../enums/Scenes";
import { initModelsCommand, mapCommands } from "../commands/EventCommandPairs";

export default class PreloadScene extends Phaser.Scene {
    public constructor() {
        super({ key: SceneNames.Preload });
    }

    private preload(): void {
        console.log("Starting Asset loading");
        this.loadAssets();
        this.loadSpriteSheets();
        this.loadAudio();
        this.loadSpines();
    }

    private init(): void {
        //
    }

    private create(): void {
        console.log("Asset loading is completed");
        lego.command.execute(mapCommands);
        this.scene.start(SceneNames.Intro);
        lego.command.execute(initModelsCommand);
    }

    private loadAssets(): void {
        if (assets.length === 0) return;
        assets.forEach((el) => {
            const { name, path } = el;
            this.load.image(name, path);
        });
    }

    private loadSpriteSheets(): void {
        if (spriteSheets.length === 0) return;
        spriteSheets.forEach((el) => {
            this.load.atlas(el, `./assets/spriteSheets/${el}.png`, `./assets/spriteSheets/${el}.json`);
        });
    }

    private loadAudio(): void {
        if (audioAssets.length === 0) return;
        audioAssets.forEach((el) => {
            const { name, path } = el;
            this.load.audio(name, path);
        });
    }

    private loadSpines(): void {
        if (spines.length === 0) return;
        spines.forEach((el) => {
            const { key, atlasURL, jsonURL, preMultipliedAlpha } = el;
            this.load.spine(key, jsonURL, atlasURL, preMultipliedAlpha);
        });
    }
}
