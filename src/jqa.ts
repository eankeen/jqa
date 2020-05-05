// TODO: golf
function isFunction(value: any) {
  typeof value === 'function';
}

function isObject(value: any) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

function isUndefined(value: any) {
  return value === undefined
}

interface JqaClass {
  el: Element | NodeListOf<Element> | HTMLElement
}

type cb = (ev?: EventTarget) => any | void

class JqaClass {
  constructor(domElement: HTMLElement | string) {
    this.el

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
  attr(attributeName: string) { return this.el.getAttribute(attributeName) }
  html() { return this.el.children }
  prop(propName: string) { return this.el[propName] }
  removeAttr (attributeName: string) {}
  removeProp (propName: string) {}
  // val(value) { this.el.value }

  // manipulation


  // css
  addClass(className: string) { return this.el.classList.add(className) }
  css() {}
  hasClass(className: string) { return this.el.classList.contains(className) }
  removeClass(className: string) { return this.el.classList.remove(className) }
  toggleClass(className: string) { return this.el.classList.toggle(className) }

  // offset
  offset() {}
  offsetParent() {}
  position() {}
  scrollLeft() {}
  scrollTop() {}

  // dimensions
  innerHeight(newWidth: string) {
    let computedStyle = window.getComputedStyle(this.el);
    return (
      this.el.getBoundingClientRect().height -
      parseInt(computedStyle.borderTop) -
      parseInt(computedStyle.borderBottom)
    );
  }
  height(newHeight: string) {
    return window.getComputedStyle(this.el).height;
  }
  outerHeight(newHeight: string) {
    return this.el.getBoundingClientRect().height;
  }
  innerWidth(newWidth: string) {
    let computedStyle = window.getComputedStyle(this.el);
    return (
      this.el.getBoundingClientRect().width -
      parseInt(computedStyle.borderLeft) -
      parseInt(computedStyle.borderRight)
    );
  }
  width(newWidth: string) {
    return window.getComputedStyle(this.el).width;
  }
  outerWidth(newWidth: string) {
    return this.el.getBoundingClientRect().width;
  }

  // effect
  hide() {}
  show() {}
  toggle() {}

  // util
  static isWindow(obj: any) {
    return obj != null && obj === obj.window;
  }
  static isXMLDoc(elem: any) {
		let namespace = elem.namespaceURI,
			docElem = (elem.ownerDocument || elem).documentElement;
		return !/HTML$/i.test( namespace || docElem && docElem.nodeName || "HTML" );
	}

  // events
  blur(fn: cb) { this.el.addEventListener('blur', fn) }
  bind(fn: cb) { this.el.addEventListener('bind', fn) }
  change(fn: cb) { this.el.addEventListener('change', fn) }
  click(fn: cb) { this.el.addEventListener('click', fn) }
  contextmenu(fn: cb) { this.el.addEventListener('contextmenu', fn) }
  dblclick(fn: cb) { this.el.addEventListener('dblclick', fn) }
  error(fn: cb) { this.el.addEventListener('error', fn) }
  focus(fn: cb) { this.el.addEventListener('focus', fn) }
  focusin(fn: cb) { this.el.addEventListener('focusin', fn) }
  focusout(fn: cb) { this.el.addEventListener('focusout', fn) }
  hover(fn: cb) { this.el.addEventListener('mouseenter', fn); this.el.addEventListener(
    'mouseleave', fn); }
  keydown(fn: cb) { this.el.addEventListener('keydown', fn) }
  keypress(fn: cb) { this.el.addEventListener('keypress', fn) }
  keyup(fn: cb) { this.el.addEventListener('keyup', fn) }
  load(fn: cb) { this.el.addEventListener('load', fn) }
  mousedown(fn: cb) { this.el.addEventListener('mousedown', fn) }
  mouseenter(fn: cb) { this.el.addEventListener('mouseenter', fn) }
  mouseleave(fn: cb) { this.el.addEventListener('mouseleave', fn) }
  mousemove(fn: cb) { this.el.addEventListener('mousemove', fn) }
  mouseout(fn: cb) { this.el.addEventListener('mouseout', fn) }
  mouseover(fn: cb) { this.el.addEventListener('mouseover', fn) }
  mouseup(fn: cb) { this.el.addEventListener('mouseup', fn) }
  off(event: Event, fn: cb) { this.el.removeEventListener(event, fn); }
  on(event: Event, fn: cb) { this.el.addEventListener(event, fn) }
  resize(fn: cb) { this.el.addEventListener('resize', fn) }
  scroll(fn: cb) { this.el.addEventListener('scroll', fn) }
  select(fn: cb) { this.el.addEventListener('select', fn) }
  submit(fn: cb) { this.el.addEventListener('submit', fn) }
  unbind(fn: cb) { this.el.addEventListener('unbind', fn) }
  unload(fn: cb) { this.el.addEventListener('unload', fn) }

  // static methods
  static cssNumber = function() {}
  static escapeSelector = (selector: string) => CSS.escape(selector)
}


// TODO ?.
export const Jqa = (domElement: HTMLElement | string) => new JqaClass(domElement)
