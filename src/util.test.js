import { plus, minus, multiply, divide } from './util';
import { expect } from 'chai';

describe('加法函数测试', function() {
  it('1 + 1 等于 2', function() {
      expect(plus(1, 1)).to.be.equal(2);
  });
  it('返回值是Number', function() {
      expect(plus(1, 1)).to.be.a('number');
  });
})

describe('减法函数测试', function() {
  it('5 - 1 等于 4', function() {
      expect(minus(5, 1)).to.be.equal(4);
  });
  it('返回值是Number', function() {
      expect(minus(5, 1)).to.be.a('number');
  });
})

describe('乘法函数测试', function() {
  it('5 * 2 等于 10', function() {
      expect(multiply(5, 2)).to.be.equal(10);
  });
  it('返回值是Number', function() {
      expect(multiply(5, 2)).to.be.a('number');
  });
})

describe('除法函数测试', function() {
  it('10 / 2 等于 5', function() {
      expect(divide(10, 2)).to.be.equal(5);
  });
  it('返回值是Number', function() {
      expect(divide(10, 2)).to.be.a('number');
  });
})