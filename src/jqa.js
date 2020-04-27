// TODO: golf
function isFunction(value) {
  typeof value === 'function';
}

function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

function isUndefined(value) {
  return value === undefined
}

class JqaClass {
  constructor(domElement) {
    if (domElement instanceof HTMLElement) {
      this.el = domElement
    } else {
      let f = document.querySelectorAll(domElement)
      this.el = f.length === 1 ? f[0] : f
    }
  }

  // custom
  raw() { return this.el }

  // attributes
  attr(attributeName) { return this.el.getAttribute(attributeName) }
  html() { return this.el.children }
  prop() { return this.el[propName] }
  removeAttr (attributeName) {}
  removeProp (propName) {}
  val() { this.el.value }

  // manipulation


  // css
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

  // effect
  hide() {}
  show() {}
  toggle() {}

  // util
  static isArrayLike(value) {
    return value != null && typeof value !== 'function' && isLength(value.length)
  }
  static isFunction(value) {
    return typeof value === 'function';
  }
  static isNumeric() {
    return (
      typeof value === 'number' ||
      (isObjectLike(value) && getTag(value) == '[object Number]')
    );
  }
  static isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) != '[object Object]') {
      return false
    }
    if (Object.getPrototypeOf(value) === null) {
      return true
    }
    let proto = value
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(value) === proto
  }
  static isWindow(obj) {
    return obj != null && obj === obj.window;
  }
  static isXMLDoc(elem) {
		let namespace = elem.namespaceURI,
			docElem = (elem.ownerDocument || elem).documentElement;
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	}

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
  hover(fn) { this.el.addEventListener('mouseenter', fn); this.el.addEventListener(
    'mouseleave', fn); }
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
  off(event, fn) { this.el.removeEventListener(event, fn); }
  on(event, fn) { this.el.addEventListener(event, fn) }
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


// TODO ?.
export const Jqa = (domElement) => new JqaClass(domElement)
