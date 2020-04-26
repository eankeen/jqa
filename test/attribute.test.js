import fs from 'fs'
import path from 'path'
import $ from 'jquery'

import { Jqa as $$ } from '../src/jqa'

const htmlMock = fs.readFileSync(path.join(__dirname, 'mocks/attributes.html'), { encoding: 'utf8' })
beforeEach(() => {
  document.body.innerHTML = htmlMock;
});

describe('test attributes', () => {
  test('attr()', () => {
    const myAttr = $$('.outer').attr('id')
    const attr = $('.outer').attr('id')

    expect(myAttr).toBe(attr)
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



  test.skip('removeProp()', () => {

  })



  test('.text()', () => {
    const myText = $$('.outer').text();
    const text = $('.outer').text();

    expect(myText).toBe(text);
  });
})
