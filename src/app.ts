import { lego, legoLogger } from "@armathai/lego";
import "phaser";
import "phaser/plugins/spine/dist/SpinePlugin";
import IntroScene from "./app/scenes/IntroScene";
import MainScene from "./app/scenes/MainScene";
import PreloadScene from "./app/scenes/PreloadScene";

const config = {
    transparent: false,
    antialiasGL: false,
    type: Phaser.WEBGL,
    width: 720,
    height: 1280,
    input: {
        mouse: {
            preventDefaultWheel: false,
        },
    },
    scale: {
        parent: "phaser-game",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
    },
    plugins: {
        scene: [
            {
                key: "SpinePlugin",
                plugin: window.SpinePlugin,
                mapping: "spine",
            },
        ],
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
    antialias: true,
    scene: [PreloadScene, IntroScene, MainScene],
};
window.addEventListener("load", () => {
    legoLogger.start(lego, Object.freeze({}));
    new Phaser.Game(config);
});
