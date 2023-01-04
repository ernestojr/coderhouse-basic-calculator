import { expect } from 'chai'

import {
  addition,
  subtraction,
  multiplication,
  division,
} from '../app.js'

describe('Basic calculator', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(addition(1, 2)).to.equal(3)
  })
  
  it('subtraction 3 - 1 to equal 2', () => {
    expect(subtraction(3, 1)).to.equal(2)
  })
  
  it('multiplication 2 * 2 to equal 4', () => {
    expect(multiplication(2, 2)).to.equal(4)
  })
  
  it('division 10 / 2 to equal 5', () => {
    expect(division(10, 2)).to.equal(5)
  })
});
