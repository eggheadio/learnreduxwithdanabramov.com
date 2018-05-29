In this lesson, I use `expect` Library to make test assertions, and `deep-Freeze` to make sure that my code is free of mutations.

Let's say that I want to implement a count release application. I would need to write a few functions that operate on its state, and its state is an array of JavaScript numbers representing the individual counters.

The first function I want to write is called `addCounter`, and all it should do is to append a `0` at the end of the past array.

``` javascript
const addCounter = (list) => {

};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed');
```

At first, I use the array `push` method to add a new item at the end of the array, and it works.

``` javascript
const addCounter = (list) => {
  list.push(0);
  return list;
};
```

However, we need to learn to avoid mutations in Redux, and I'm enforcing this by calling `deepFreeze` on the original array.

``` javascript
deepFreeze(listBefore);
```

Now my attempt to `push` does not work. It cannot add a new property to a frozen object. Instead of `push`, I'm going to use the `concat` method, which does not modify the original array.

``` javascript
const addCounter = (list) => {
  return list.concat([0]);
};
```

Now the tests pass without mutations, and I can also use the new [ES6 array spread operator](https://egghead.io/lessons/ecmascript-6-using-the-es6-spread-operator) to write the same code in a more concise way.

``` javascript
const addCounter = (list) => {
  return [...list, 0];
};
```

My next function is called `removeCounter`, and it accepts two arguments, an array of numbers, and the `index` of the number to skip from the array.

``` javascript
const removeCounter = (list, index) => {

};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};
```

If I've got three numbers and I'm passing one as the second argument, I expect to receive an array with two numbers with the second item skipped in the result array.

Usually, to delete an item from the array, I would use the `splice` method. However, `splice` is a mutating method, so you can't use it in Redux.

``` javascript
const removeCounter = (list, index) => {
  list.splice(index, 1);
  return list;
};
```

I'm going to `deepFreeze` the array object, and now I need to figure out a different way to remove an item from the array without mutating it.

I'm using a method called `slice` here, and it doesn't have anything to do with `splice`. It is not mutating, and it gives me a part of the array from some beginning to some end index.

``` javascript
const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};
```

What Im doing is that Im taking the parts before the `index` I want to skip and after the `index` I want to skip, and I concatenate them to get a new array.

Finally, instead of writing it as a method chain with `concat` calls, I can use the ES6 array spread operator to write it more concisely.

Now that we implemented adding and removing counters, let's implement increment in the counter. The `incrementCounter` function takes two arguments, the array and the `index` of the counter that should be incremented, so the return value has the same count of items, but one of them is incremented.

``` javascript
const incrementCounter = (list, index) => {

};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter)
};
```

Directly setting the array value at index works, but this is a mutation. If we add a `deepFreeze` call, it's not going to work anymore, so how do we replace a single value in the array without mutating it?

``` javascript
const incrementCounter = (list, index) => {
  list[index]++;
  return list;
};
```

It turns out that the answer is really similar to how we remove an item. We want to take the `slice` before the index, `concat` it with a single item array with a new value, and then `concat` it with the rest of the original array.

``` javascript
const incrementCounter = (list, index) => {
  return [
    ...list.slice(0,index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};
```

Finally, with the ES6 spread operator, we can spread over the left part of the array, specify the new item, and then spread over the right part of the original array, and this looks much nicer.

In this lesson, you learned how to use the `concat` method or the spread operator, and the `slice` method to add, remove, and change items in arrays without mutating them, and how to protect yourself with `deepFreeze` from mutation in your tests.
