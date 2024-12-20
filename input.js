import { JUMP_TIME } from './constants.js';

/**
 * Handle user input.
 * TODO: add touch/pointer input handling
 */
export class Input {
  static downKeys = new Set;

  static init(camera) {
    document.addEventListener('keyup', handleInput.bind(camera));
    document.addEventListener('keydown', handleInput.bind(camera));

    function handleInput (/** @type {KeyboardEvent} */e) {
      if (e.type === 'keydown') {
        if (e.key === ' ' && this.jumpTime <= 0) {
          this.jumpTime = JUMP_TIME;
        }
        if (e.shiftKey) {
          ['w', 'a', 's', 'd', 'q', 'e'].forEach(key => Input.downKeys.delete(key));
        }
        Input.downKeys.add(e.key);
      } else if (e.type === 'keyup') {
        if (!e.shiftKey) {
          ['W', 'A', 'S', 'D', 'Q', 'E'].forEach(key => Input.downKeys.delete(key));
        }
        Input.downKeys.delete(e.key);
      }
      this.turningLeft = Input.downKeys.has('q') || (e.shiftKey && Input.downKeys.has('A'));
      this.turningRight = Input.downKeys.has('e') || (e.shiftKey && Input.downKeys.has('D'));
      this.strafeLeft = Input.downKeys.has('a');
      this.strafeRight = Input.downKeys.has('d');
      this.movingFwd = Input.downKeys.has('w') || Input.downKeys.has('W');
      this.movingBack = Input.downKeys.has('s') || Input.downKeys.has('S');
    }
  }
}
