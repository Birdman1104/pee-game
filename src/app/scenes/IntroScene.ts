import { SceneNames } from "../enums/Scenes";

export default class IntroScene extends Phaser.Scene {
    private playBtn: Phaser.GameObjects.Sprite;
    public constructor() {
        super({ key: SceneNames.Intro });
    }

    public preload(): void {
        //
    }

    private init(): void {
        const { width, height } = this.scale.gameSize;
        this.playBtn = this.add.sprite(0, 0, "game-ui", "playButton.png");
        this.add.existing(this.playBtn);
        this.playBtn.setPosition(width / 2, height / 2);
        this.playBtn.setInteractive();
        this.playBtn.once(Phaser.Input.Events.POINTER_UP, () => {
            this.time.addEvent({
                delay: 200,
                callback: () => {
                    this.scene.start(SceneNames.Main);
                },
            });
        });
    }

    private create(): void {
        //
    }
}
