import {Game} from './game.js';
const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    scene: [Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    
}
var game=new Phaser.Game(config);
