const Queue = require('./index');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const newQ = new Queue();
  expect(() => {
    newQ.add(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const newQ = new Queue();
  expect(() => {
    newQ.add(1);
    newQ.remove();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const newQ = new Queue();
  newQ.add(1);
  newQ.add(2);
  newQ.add(3);
  expect(newQ.remove()).toEqual(1);
  expect(newQ.remove()).toEqual(2);
  expect(newQ.remove()).toEqual(3);
  expect(newQ.remove()).toEqual(undefined);
});