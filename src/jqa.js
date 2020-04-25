import _ from 'lodash'

function Jqa(domElement) {
  let el
  if (domElement instanceof HTMLElement) {
    el = domElement
  } else {
    el = document.querySelector(domElement)
  }

  return {
    // attributes class
    addClass(className) {
      if (_.isString(className)) return el.classList.add(className);
      throw new Error('pass in classname as string to addClass');
    },
    attr(attributeName) {
      return el.getAttribute(attributeName);
    },
    hasClass(className) {
      return el.classList.contains(className);
    },
    // TODO: fix
    html: () => el.children,
    prop(propName) {
      return el[propName];
    },
    removeAttr() {},
    removeClass(className) {
      if (_.isString) return el.classList.remove(className);
    },
    removeProp(propName) {},
    toggleClass: (className) =>
      this.hasClass(className)
        ? this.addClass(className)
        : this.removeClass(classname),
    val() {
      return el.value;
    },

    click(firstArg, secondArg) {
      if (_.isFunction(firstArg))
        return el.addEventListener('click', firstArg);
      if (_.isObject(firstArg))
        return el.addEventListener('click', () => secondArg(firstArg));
      if (_.isUndefined(firstArg)) el.click();
    },
    get(num) {
      if (_.isFunction()) return '';
    },
    text() {
      return el.textContent;
    },

    // manipulation


    // css
    css() {

    },

    // data?

    // dimensions
    height(newHeight) {
      if (_.isFunction(newHeight)) {
        el.style.height = newHeight(el.getClientRects().clientHeight)
      }
      if (newHeight) {
        el.style.height = newHeight
      } else {
        el.getClientRects().clientHeight
      }
    },
    innerHeight() {

    },
    outerHeight() {

    },
    width(newWidth) {
      if (newWidth) {
        el.style.width = newWidth;
      } else {
        el.getClientRects().clientWidth;
      }
    },
    innerWidth() {

    },
    outerWidth() {

    },

    // effect
    hide() {

    },
    show() {

    },
    toggle() {

    }

    // events (some common ones)

  };
}
Jqa.cssNumber = function() {}
Jqa.escapeSelector = function() {}

export { Jqa }
