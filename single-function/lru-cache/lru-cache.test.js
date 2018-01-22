const LRUCache = require('./submission');

describe('isValidParentheses', () => {

  it('LRUCache should be defined', () => {
    expect(LRUCache).toBeDefined();
  });

  it('LRUCache should return value for existing item, prior to any evictions', () => {
    const cache = new LRUCache(2);
    cache.set('a', 1);
    cache.set('b', 2);

    expect(cache.get('a')).toEqual(1);
    expect(cache.get('b')).toEqual(2);
  });

  it('LRUCache should return null for an evicted item', () => {
    const cache = new LRUCache(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.get('a');
    cache.set('c', 3); // eviction of least-recently-used item, which is 'b'

    expect(cache.get('b')).toEqual(null);
    expect(cache.get('a')).toEqual(1);
    expect(cache.get('c')).toEqual(3);
  });

  it('LRUCache should evict the least-recently-used item', () => {
    const cache = new LRUCache(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);

    expect(cache.get('a')).toEqual(null);
    expect(cache.get('b')).toEqual(2);
    expect(cache.get('c')).toEqual(3);
  });

});
