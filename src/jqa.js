import _ from 'lodash'

function Jqa(domElement) {
  let el
  if (domElement instanceof HTMLElement) {
    el = domElement
  } else {
    el = document.querySelector(domElement)
  }

  return {
    // attributes
    attr(attributeName) {
      return el.getAttribute(attributeName);
    },
    html: () => el.children,
    prop(propName) {
      return el[propName];
    },
    removeAttr() {},
    removeProp(propName) {},
    val() {
      return el.value;
    },

    // css
    addClass(className) {
      if (_.isString(className)) return el.classList.add(className);
      throw new Error('pass in classname as string to addClass');
    },
    css() {},
    hasClass(className) {
      return el.classList.contains(className);
    },
    removeClass(className) {
      if (_.isString) return el.classList.remove(className);
    },
    toggleClass: (className) => el.classList.toggle(className),

    // offset
    offset() {},
    offsetParent() {},
    position() {},
    scrollLeft() {},
    scrollTop() {},

    // dimensions
    innerHeight(newWidth) {
      let computedStyle = window.getComputedStyle(el);
      console.log(el);
      return (
        el.getBoundingClientRect().height -
        computedStyle.borderTop -
        computedStyle.borderBottom
      );
    },
    height(newWidth) {
      return window.getComputedStyle(el).height;
    },
    outerHeight(newWidth) {
      return el.getBoundingClientRect().height;
    },
    innerWidth(newWidth) {
      let computedStyle = window.getComputedStyle(el);
      return (
        el.getBoundingClientRect() -
        computedStyle.borderLeft -
        computedStyle.borderRight
      );
    },
    width(newWidth) {
      return window.getComputedStyle(el).width;
    },
    outerWidth(newWidth) {
      return el.getBoundingClientRect().width;
    },

    // effects
    fadeIn() {},

    click(firstArg, secondArg) {
      if (_.isFunction(firstArg)) return el.addEventListener('click', firstArg);
      if (_.isObject(firstArg))
        return el.addEventListener('click', () => secondArg(firstArg));
      if (_.isUndefined(firstArg)) el.click();
    },
    text() {
      return el.textContent;
    },

    // dimensions
    height(newHeight) {
      if (_.isFunction(newHeight)) {
        el.style.height = newHeight(el.getClientRects().clientHeight);
      }
      if (newHeight) {
        el.style.height = newHeight;
      } else {
        el.getClientRects().clientHeight;
      }
    },

    // effect
    hide() {},
    show() {},
    toggle() {},

    // events
    blur: (fn) => el.addEventListener('blur', fn),
    change: (fn) => el.addEventListener('change', fn)
    // bind
    // blur
    // change
    // click
    // contextmenu
    // dblclick
    // error
    // focus
    // focusin
    // focusout
    // hover
    // keydown
    // keypress
    // keyup
    // load
    // mousedown
    // mouseenter
    // mouseleave
    // mousemove
    // mouseout
    // mouseover
    // mouseup
    // off
    // on
    // resize
    // scroll
    // select
    // submit
    // unbind
    // unload
  };
}

Jqa.cssNumber = function() {}
Jqa.escapeSelector = (selector) => CSS.escape(selector)

export { Jqa }
