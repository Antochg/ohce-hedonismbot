const test = require('tape')
const UI = require('../ui').UI

test('main loop', (t) => {
  /* TODO
    Given the following inputs:
    - hello
    - oto
    - quit

    Check that the following messages are printed:
    - olleh
    - oto
    - That was a palindrome!
   */

    const ui = new UI();
    
    const res = ui.mainLoop();
    
    t.equal(res.length, 3, 'printMessage called 3 times');

    t.equal(res[0], 'olleh', 'olleh');
    t.equal(res[1], 'oto', 'oto');
    t.equal(res[2], 'That was a palindrome!', 'That was a palindrome!');

  t.end()
})
