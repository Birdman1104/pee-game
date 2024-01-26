export class GameView extends Phaser.GameObjects.Container {
    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.initBkg();
    }

    private initBkg(): void {
        //
    }
}
