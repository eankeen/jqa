import $ from 'jquery'

import { Jqa as $$ } from '../src/jqa'

describe('test attributes', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <main>
      <div id="item" class="outer has-this-class"
        <p class="inner">content</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="has-this-class"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    </main>`;
  })

  describe('addClass()', () => {
    ['main', '.outer', 'svg'].forEach((el) => {
      test(`on ${el}`, () => {
        $$(el).addClass('cool');

        let outerEl = $(el);
        expect(outerEl.hasClass('cool')).toBe(true);
      });
    })
  })


  test('attr()', () => {
    const myAttr = $$('.outer').attr('id')
    const attr = $('.outer').attr('id')

    expect(myAttr).toBe(attr)
  })

  describe('hasClass()', () => {
    ['div', 'svg'].forEach(el => {
      test(`on ${el}`, () => {
        const myDoesHaveClass = $$(el).hasClass('has-this-class');
        const doesHaveClass = $(el).hasClass('has-this-class');

        expect(myDoesHaveClass).toBe(doesHaveClass);
      })
    })
  })

  describe.skip('html()', () => {
    ['.outer', 'circle'].forEach(el => {
      test(`on ${el}`, () => {

      })
    })
  })

  describe('prop()', () => {
    test.skip('regular', () => {
      const myProp = $$('svg').prop('stroke');
      const prop = $('svg').prop('stroke');

      expect(myProp).toBe(prop);
    })
  })

  describe.skip('removeAttr()', () => {
    test('')
  })

  test('removeClass()', () => {
    ['div', 'svg'].forEach(el => {
      $$(el).removeClass('has-this-class')

      expect($(el).hasClass('has-this-class')).toBe(flse)
    })
  })

  test.skip('removeProp()', () => {

  })

  // test('toggleClass()', () => {
  //   ['div']
  // })

  test('.text()', () => {
    const myText = $$('.outer').text();
    const text = $('.outer').text();

    expect(myText).toBe(text);
  });
})
