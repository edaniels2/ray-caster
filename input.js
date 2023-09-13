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
          ['w', 'a', 's', 'd'].forEach(key => Input.downKeys.delete(key));
        }
        Input.downKeys.add(e.key);
      } else if (e.type === 'keyup') {
        if (!e.shiftKey) {
          ['W', 'A', 'S', 'D', 'Q', 'E'].forEach(key => Input.downKeys.delete(key));
        }
        Input.downKeys.delete(e.key);
      }
      this.turningLeft = Input.downKeys.has('a') || (e.shiftKey && Input.downKeys.has('Q'));
      this.turningRight = Input.downKeys.has('d') || (e.shiftKey && Input.downKeys.has('E'));
      this.strafeLeft = e.shiftKey && Input.downKeys.has('A');
      this.strafeRight = e.shiftKey && Input.downKeys.has('D');
      this.movingFwd = Input.downKeys.has('w') || Input.downKeys.has('W');
      this.movingBack = Input.downKeys.has('s') || Input.downKeys.has('S');
    }
  }
}
