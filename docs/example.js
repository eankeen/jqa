import { Jqa as $ } from './jqa.js'

let blue = (message) => console.log(`%c ${message}`, 'color: dodgerblue');
let green = (message) => console.log(`%c ${message}`, 'color: mediumseagreen');
let red = (message) => console.log(`%c ${message}`, 'color: orangered');

globalThis.total = 0
globalThis.register = ''
globalThis.operation = ''
globalThis.justPressedEnter = true

let update = () => {
  $('.text-wrapper').raw().innerHTML = globalThis.total
  globalThis.register = ''
}

let log = () => {
  green(`register: ${globalThis.register}`)
  green(`total: ${globalThis.total}`)
  green(`operation: ${globalThis.operation}`)
  green(`justPressedEnter: ${globalThis.justPressedEnter}`)
  red('---')
}


// note if you defer execution of scripts you don't
// need to worry about DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  update();

  $('.plus').click(ev => {
    globalThis.operation = 'plus'
  })

  $('.minus').click(ev => {
    globalThis.operation = 'minus'
  })

  $('.times').click(ev => {
    globalThis.operation = 'times';
  })

  $('.divide').click(ev => {
    globalThis.operation = 'divide';
  })

  $('.button-operation').raw().forEach(el => {
    $(el).click(ev => {
      globalThis.justPressedEnter = false
    })
  })

  $('.enter').click(ev => {
    if (!globalThis.register) return

    globalThis.justPressedEnter = true;
    switch (globalThis.operation) {
      case 'plus':
        globalThis.total += parseInt(globalThis.register);
        update();
        break;
      case 'minus':
        globalThis.total -= parseInt(globalThis.register);
        update();
        break;
      case 'times':
        globalThis.total *= parseInt(globalThis.register);
        update();
        break;
      case 'divide':
        globalThis.total /= parseInt(globalThis.register);
        update();
        break;
      // no operation selected ('')
      default:
        globalThis.total = parseInt(globalThis.register);
        update()
        break;
    }
  })

  $('.button-number').raw().forEach(el => {
    $(el).click(ev => {
      let number = ev.target.innerHTML;

      if(globalThis.justPressedEnter) {
        globalThis.total = parseInt(globalThis.total + '' + number)
        update()
      } else {
        globalThis.register += number;
      }
    })
  })

  $('.button').raw().forEach(el => {
    $(el).click(ev => {
      log();
      blue(`button ${ev.target.innerHTML} clicked`)
    })
  })
})
