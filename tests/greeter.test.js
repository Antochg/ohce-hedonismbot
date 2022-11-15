const test = require('tape')
const Greeter = require('../greeter').Greeter

test('should say "good night" at midnight', (t) => {
  const greeter = new Greeter(0);
  
  t.equal(greeter.greet(), 'Good night', 'Greeting message "good night" at midnight');
  t.end()
})

test('should never return undefined', (t) => {
  // TODO : for each hour from 0 to 23, check that Greeter.greet()
  // never returns undefined

  const hours = Array.from(Array(24).keys());

  hours.forEach((h) => {
    const greeter = new Greeter(h);
    t.notEqual(greeter.greet(), undefined, 'Greeting message not undefined');
  })

  t.end()
})

test('should say "Good morning" at 10 AM', (t) => {
  const greeter = new Greeter();
  
  t.equal(greeter.greet(), 'Good morning', 'Greeting message "Good morning" at 10AM');
  t.end()
})