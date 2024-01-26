import { lego } from "@armathai/lego";

export class GameView extends Phaser.GameObjects.Container {
    private bkg: Phaser.GameObjects.Sprite;
    private score = 0;
    private scoreLabel: Phaser.GameObjects.Text;

    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.initBkg();
    }

    private initBkg(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.bkg = this.scene.add.sprite(width / 2, height / 2, "bkg.jpg");
        this.bkg.setInteractive();
        this.bkg.on(Phaser.Input.Events.POINTER_UP, this.handleBkgClick, this);
        this.add(this.bkg);
    }

    private handleBkgClick(): void {
        lego.event.emit("BkgClick");
    }
}
