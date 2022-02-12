import { Scoreboard } from "./Scoreboard.js";
import { MobileControls } from "./Mobile-controls.js";

export class Game extends Phaser.Scene {

    constructor() {
        super({key:'game'});
    }

    init(){
        this.Scoreboard = new Scoreboard(this);
        this.mobileControls = new MobileControls(this);
    }

    preload() {
        this.load.image('background','images/background.png');
        this.load.image('gameover', 'images/gameover.png');
        this.load.image('platform','images/platform.png');
        this.load.image('ball','images/ball.png');
        this.load.image('rightbutton', '/images/right.png');
        this.load.image('leftbutton', '/images/left.png');
    }

    create() {
        this.physics.world.setBoundsCollision(true,true,true,false);

        this.add.image(400, 250, 'background');

        this.gameoverImage = this.add.image(400, 90, 'gameover');

        this.gameoverImage.visible=false;

        this.Scoreboard.create();

        this.platform=this.physics.add.image(400,460,'platform').setImmovable();

        this.platform.body.allowGravity=false;

        this.ball=this.physics.add.image(400,30,'ball');
        this.ball.setCollideWorldBounds(true);

        let velocity = 100 * Phaser.Math.Between(1.3,2);
        if(Phaser.Math.Between(2,10)>5){
            velocity = 0 - velocity;
        }
        this.ball.setVelocity(velocity,10);
        this.physics.add.collider(this.ball,this.platform,this.platformImpact,null,this);

        this.ball.setBounce(1);
        this.mobileControls.create();

        this.cursors = this.input.keyboard.createCursorKeys();
    }


    platformImpact(){
        this.Scoreboard.incrementPoints(1);
    }

    update(){
        
        if(this.cursors.left.isDown||this.mobileControls.left.isDown){
            this.platform.setVelocityX(-700);
        }
        else if(this.cursors.right.isDown||this.mobileControls.right.isDown){
            this.platform.setVelocityX(700);
        }
        else{
            this.platform.setVelocityX(0);
        }

        if (this.ball.y > 500){
            this.gameoverImage.visible=true;
            this.scene.pause();
        }
    }
} 