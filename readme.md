# Jqa

Contains a stripped subset of the jQuery api, designed to be easy to use with vanilla JavaScript. For people that know a little bit of jQuery, and want to transition to vanilla JavaScript easier

## Browser Support

TODO

## Usage

```sh
// via npm
pnpm i -D jqa

// via browser
// TODO:
```

## Contributing

```sh
git clone https://github.com/eankeen/jqa
cd jqa
pnpm i
pnpm run test
```

## Interface Compatability

```sh
Jqa will / supports the following query methods

- Attributes
   - attr()
   - html()
   - prop()
   - removeAttr()
   - removeProp()
   - val()

- Manipulation
  - unwrap()
  - wrap()
  - wrapAll()
  - wrapInner()
  - append()
  - appendTo()
  - prepend()
  - prependTo()
  - text()
  - after()
  - insertAfter()
  - before()
  - insertBefore()
  - detach()
  - empty()
  - remove()
  - replaceAll()
  - replaceWith()

- Css
  - addClass()
  - css()
  - hasClass()
  - escapeSelector()
  - removeClass()
  - toggleClass()

- Offset
  - offset
  - offsetParent()
  - position()
  - scrollLeft()
  - scrollTop()

- Dimensions
  - innerHeight()
  - height()
  - outerHeight()
  - innerWidth()
  - width()
  - outerWidth()

- Effects
  - fadeIn()
  - fadeOut()
  - fadeToggle()
  - show()
  - hide()
  - toggle()

- Util
  -  isWindow()
  -  isXMLDoc()

- Events
  - bind()
  - blur()
  - change()
  - click()
  - contextmenu()
  - dblclick()
  - error()
  - focus()
  - focusin()
  - focusout()
  - hover()
  - keydown()
  - keypress()
  - keyup()
  - load()
  - mousedown()
  - mouseenter()
  - mouseleave()
  - mousemove()
  - mouseout()
  - mouseover()
  - mouseup()
  - off()
  - on()
  - resize()
  - scroll()
  - select()
  - submit()
  - unbind()
  - unload()
```
