export class Input {
  static init(camera) {
    document.addEventListener('keyup', handleInput.bind(camera));
    document.addEventListener('keydown', handleInput.bind(camera));

    function handleInput (/** @type {KeyboardEvent} */e) {
      const keyDown = e.type === 'keydown';
      switch(e.key) {
        case 'a':
          this.turningLeft = keyDown;
          break;
        case 'd':
          this.turningRight = keyDown;
          break;
        case 'w':
          this.movingFwd = keyDown;
          break;
        case 's':
          this.movingBack = keyDown;
          break;
        case ' ':
          if (!this.jumpCounter) {
            this.jumpCounter = 24;
          }
      }
    }
  }
}
