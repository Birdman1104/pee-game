export class GameView extends Phaser.GameObjects.Container {
    private bkg: Phaser.GameObjects.Sprite;

    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        // const { width, height } = this.scene.scale.gameSize;

        // const balls = this.scene.physics.add.group({
        //     active: false,
        //     bounceX: 1,
        //     bounceY: 1,
        //     collideWorldBounds: true,
        //     frame: "drop.png",
        //     key: "game-components",
        //     quantity: 100,
        //     setXY: { x: width / 2, y: height },
        // });

        // console.log(balls);

        // const target = this.scene.physics.add.image(width / 2, 950, "game-components", "pee.png");
        // target.setImmovable(true);

        // this.scene.time.addEvent({
        //     delay: 75,
        //     startAt: 0,
        //     repeat: balls.getLength() - 1,
        //     callback: () => {
        //         const ball = balls.getFirstDead();
        //         ball.setActive(true);
        //         this.scene.physics.velocityFromAngle(-90, 300, ball.body.velocity);
        //     },
        // });

        // this.scene.physics.add.overlap(target, balls, (target, ball) => {
        //     this.scene.tweens.add({
        //         targets: ball,
        //         scaleX: 0,
        //         scaleY: 0,
        //         x: target.x,
        //         y: target.y - 10,
        //         duration: 200,
        //         ease: "Linear",
        //     });
        //     ball.disableBody();
        // });

        this.initBkg();
    }

    private initBkg(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.bkg = this.scene.add.sprite(width / 2, height / 2, "intro.jpg");
        this.bkg.setInteractive();
        // this.bkg.on(Phaser.Input.Events.POINTER_UP, this.handleBkgClick, this);
        this.add(this.bkg);
    }
}
