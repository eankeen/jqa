import _ from 'lodash'

class JqaClass {
  constructor(domElement) {
    if (domElement instanceof HTMLElement) {
      this.el = domElement
    } else {
      this.el = document.querySelector(domElement)
    }
  }

  attr(attributeName) { return this.el.getAttribute(attributeName) }
  html() { return this.el.children }
  prop() { return this.el[propName] }
  removeAttr (attributeName) {}
  removeProp (propName) {}
  val() { this.el.value }
  addClass(className) { return this.el.classList.add(className) }
  css() {}
  hasClass(className) { return this.el.classList.contains(className) }
  removeClass(className) { return this.el.classList.remove(className) }
  toggleClass(className) { return this.el.classList.toggle(className) }

  // offset
  offset() {}
  offsetParent() {}
  position() {}
  scrollLeft() {}
  scrollTop() {}

  // dimensions
  innerHeight(newWidth) {
    let computedStyle = window.getComputedStyle(el);
    console.log(el);
    return (
      this.el.getBoundingClientRect().height -
      computedStyle.borderTop -
      computedStyle.borderBottom
    );
  }
  height(newHeight) {
    return window.getComputedStyle(el).height;
  }
  outerHeight(newHeight) {
    return this.el.getBoundingClientRect().height;
  }
  innerWidth(newWidth) {
    let computedStyle = window.getComputedStyle(el);
    return (
      this.el.getBoundingClientRect() -
      computedStyle.borderLeft -
      computedStyle.borderRight
    );
  }
  width(newWidth) {
    return window.getComputedStyle(el).width;
  }
  outerWidth(newWidth) {
    return this.el.getBoundingClientRect().width;
  }

  // effects
  fadeIn() {}

  click(firstArg, secondArg) {
    if (_.isFunction(firstArg)) return this.el.addEventListener('click', firstArg);
    if (_.isObject(firstArg))
      return this.el.addEventListener('click', () => secondArg(firstArg));
    if (_.isUndefined(firstArg)) this.el.click();
  }
  text() {
    return this.el.textContent;
  }

  // dimensions
  height(newHeight) {
    if (_.isFunction(newHeight)) {
      this.el.style.height = newHeight(this.el.getClientRects().clientHeight);
    }
    if (newHeight) {
      this.el.style.height = newHeight;
    } else {
      this.el.getClientRects().clientHeight;
    }
  }

  // effect
  hide() {}
  show() {}
  toggle() {}

  // events
  blur(fn) { this.el.addEventListener('blur', fn) }
  change(fn) { this.el.addEventListener('change', fn) }
  bind(fn) { this.el.addEventListener('bind', fn) }
  blur(fn) { this.el.addEventListener('blur', fn) }
  change(fn) { this.el.addEventListener('change', fn) }
  click(fn) { this.el.addEventListener('click', fn) }
  contextmenu(fn) { this.el.addEventListener('contextmenu', fn) }
  dblclick(fn) { this.el.addEventListener('dblclick', fn) }
  error(fn) { this.el.addEventListener('error', fn) }
  focus(fn) { this.el.addEventListener('focus', fn) }
  focusin(fn) { this.el.addEventListener('focusin', fn) }
  focusout(fn) { this.el.addEventListener('focusout', fn) }
  hover(fn) { this.el.addEventListener('hover', fn) }
  keydown(fn) { this.el.addEventListener('keydown', fn) }
  keypress(fn) { this.el.addEventListener('keypress', fn) }
  keyup(fn) { this.el.addEventListener('keyup', fn) }
  load(fn) { this.el.addEventListener('load', fn) }
  mousedown(fn) { this.el.addEventListener('mousedown', fn) }
  mouseenter(fn) { this.el.addEventListener('mouseenter', fn) }
  mouseleave(fn) { this.el.addEventListener('mouseleave', fn) }
  mousemove(fn) { this.el.addEventListener('mousemove', fn) }
  mouseout(fn) { this.el.addEventListener('mouseout', fn) }
  mouseover(fn) { this.el.addEventListener('mouseover', fn) }
  mouseup(fn) { this.el.addEventListener('mouseup', fn) }
  off(fn) { this.el.addEventListener('off', fn) }
  on(fn) { this.el.addEventListener('on', fn) }
  resize(fn) { this.el.addEventListener('resize', fn) }
  scroll(fn) { this.el.addEventListener('scroll', fn) }
  select(fn) { this.el.addEventListener('select', fn) }
  submit(fn) { this.el.addEventListener('submit', fn) }
  unbind(fn) { this.el.addEventListener('unbind', fn) }
  unload(fn) { this.el.addEventListener('unload', fn) }

  // static methods
  static cssNumber = function() {}
  static escapeSelector = (selector) => CSS.escape(selector)
}

const Jqa = (domElement) => new JqaClass(domElement)

export { Jqa }
