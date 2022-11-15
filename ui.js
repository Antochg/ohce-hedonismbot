const prompt = require('prompt-sync')()
const reverse = require('./ohce').reverse

class ConsoleInteractor {
  readInput () {
    return prompt('')
  }

  printMessage (message) {
    console.log(message)
    return message
  }
}

class UI {
  constructor () {
    this.interactor = new ConsoleInteractor()
  }

  mainLoop () {
    const res = [];
    while (true) {
      const input = this.interactor.readInput()
      if (input === 'quit') {
        break
      }
      const reversed = reverse(input)
      res.push(this.interactor.printMessage(reversed))
      if (input === reversed) {
        res.push(this.interactor.printMessage('That was a palindrome!'))
      }
    }
    return res;
  }
}

module.exports = { UI }
