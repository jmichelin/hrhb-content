const LRUCache = require('./submission');

describe('isValidParentheses', () => {

  it('LRUCache should be defined', () => {
    expect(LRUCache).toBeDefined();
  });

  it('LRUCache should return 1', () => {
    const cache = new LRUCache(2);
    cache.set(1,1);
    cache.set(2,2);
    expected = 1;
    expect(cache.get(1)).toEqual(expected);
  });

  it('LRUCache should return -1', () => {
    const cache = new LRUCache(2);
    cache.set(1, 1);
    cache.set(2, 2);
    cache.get(1);
    cache.set(3, 3);
    cache.get(2);
    expected = -1;
    expect(cache.get(2)).toEqual(expected);
  });

  it('LRUCache should return 4', () => {
    const cache = new LRUCache(2);
    cache.set(1, 1);
    cache.set(2, 2);
    cache.get(1);
    cache.set(3, 3);
    cache.get(2);
    cache.set(4, 4);
    cache.get(1);
    cache.get(3);
    expected = 4;
    expect(cache.get(4)).toEqual(expected);
  });

});
