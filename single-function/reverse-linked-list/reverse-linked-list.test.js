const reverseLinkedList = require('./reference-solution');

describe('reverseLinkedList', () => {
  it('reverseLinkedList should be defined', () => {
    expect(reverseLinkedList).toBeDefined();
  });

  it('should accept 1->2->3 and return 3->2->1', function () {
    const testList = { val: 1, next: { val: 2, next: { val: 3, next: null, }, },};
    const expected = { val: 3, next: { val: 2, next: { val: 1, next: null, }, },};
    expect(reverseLinkedList(testList)).toEqual(expected);
  });

  it('should accept 1-> and return 1->', function () {
    const testList = { val: 1, next: null};
    const expected = { val: 1, next: null};
    expect(reverseLinkedList(testList)).toEqual(expected);
  });

});

