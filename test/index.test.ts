import { describe, it, expect, beforeEach, afterEach } from 'bun:test'
import { jsonParse, resetBigInt, betterBigInt } from '../src'

describe('before enable', () => {
  it('JSON.parse default export for escape hatch', () => {
    expect(jsonParse).toBe(JSON.parse)
  });
  it('disables successfully', () => {
    betterBigInt();
    const src = {
      test: 100000000000000000000000000000000000000000000000n,
    };
    expect(() => {
      return JSON.stringify(src);
    }).pass()
    resetBigInt();
    expect(() => {
      return JSON.stringify(src);
    }).toThrow()
  });
});

describe('after enable', () => {
  beforeEach(() => {
    betterBigInt(); // enable feature
  });
  it('JSON.stringify encodes BigInt', () => {
    const src = {
      test: 100000000000000000000000000000000000000000000000n,
    };
    const encode = JSON.stringify(src);
    expect(encode).toBe("{\"test\":\"100000000000000000000000000000000000000000000000n\"}");
  });
  it('JSON.parse decodes BigInt', () => {
    const src = "{\"test\":\"100000000000000000000000000000000000000000000000n\"}";
    const decode = JSON.parse(src);
    expect(decode.test).toBe(100000000000000000000000000000000000000000000000n);
  });
  afterEach(() => {
    resetBigInt(); // disable feature
  });
});
