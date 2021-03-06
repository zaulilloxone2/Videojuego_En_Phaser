export class MobileControls {
    constructor(scene) {
      this.relatedScene = scene;
      this.right = {isDown: false};
      this.left = { isDown: false };
    }
    
    create() {
      this.leftButton = this.relatedScene.add.image(260, 320, 'leftbutton').setScale(1.3).setInteractive({ draggable: true });
      this.rightButton = this.relatedScene.add.image(750, 320, 'rightbutton').setScale(1.3).setInteractive({ draggable: true });
  
      this.leftButton.on('pointerdown', () => {
        this.left.isDown = true;
        this.right.isDown = false;
        this.launch.isDown = false;
      });
      this.leftButton.on('pointerup', () => {
        this.left.isDown = false;
      });
      this.leftButton.on('dragend', () => {
        this.left.isDown = false;
      });
  
      this.rightButton.on('pointerdown', () => {
        this.right.isDown = true;
        this.left.isDown = false;
        this.launch.isDown = false;
      });
      this.rightButton.on('pointerup', () => {
        this.right.isDown = false;
      });
      this.rightButton.on('dragend', () => {
        this.right.isDown = false;
      });
    }
  }