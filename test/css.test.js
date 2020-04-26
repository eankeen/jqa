import fs from 'fs';
import path from 'path';
import $ from 'jquery';

import { Jqa as $$ } from '../src/jqa';

const htmlMock = fs.readFileSync(
  path.join(__dirname, 'mocks/css.html'),
  { encoding: 'utf8' }
);
beforeEach(() => {
  document.body.innerHTML = htmlMock;
});

test(`addClass()`, () => {
  $$('.box3').addClass('secondary');

  let outerEl = $('.box3');
  expect(outerEl.hasClass('secondary')).toBe(true);
});

// cypress
// test('css()', () => {

// })

test(`hasClass()`, () => {
  const myDoesHaveClass = $$('.box1').hasClass('has-class');
  const doesHaveClass = $('.box1').hasClass('has-class');

  expect(myDoesHaveClass).toBe(doesHaveClass);
});

// cypress
// describe('escapeSelector()', () => {
//   const myEscapedSelector = $$.escapeSelector('#thing')
//   const escapedSelector = $.escapeSelector('#thing')

//   expect(myEscapedSelector).toBe(escapedSelector)
// })

test('removeClass()', () => {
  $$('.box1').removeClass('has-class');
  let hasClass = $('.box1').hasClass('has-class');

  expect(hasClass).toBe(false);
});

test('toggleClass()', () => {
  const className = 'initially-nonexisting-class'

  let hasClass = () => $('.box1').hasClass(className);

  $$('.box1').toggleClass(className)
  expect(hasClass()).toBe(true)

  $$('.box1').toggleClass(className)
  expect(hasClass()).toBe(false)
})
