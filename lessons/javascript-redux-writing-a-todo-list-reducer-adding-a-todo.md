Just like in the previous two lessons, I'm using `expect` library to make test assertions and `deep-freeze` library to prevent accidental mutations in my code. In this lesson, I will create the reducer for a todo list application whose state is described an array of `todos`.

Just to remind you what a **reducer** is, it's a **pure function** you write to implement the **update logic** of your application -- that is, how the next `state` is calculated given the current state and the action being dispatched.

``` javascript
const todos = (state = [], action) => {

};
```
Before writing a reducer, I want to have a way of knowing whether its code is correct, so I'm starting by writing a test for it. I'm declaring two variables, the `stateBefore`, which is an empty array, and the `action` being dispatched, which is an action describing user adding any todo with some ID and a text.

``` javascript
const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];
};
```
I am also declaring the state I expect to get after calling the reducer. Like state before, it is an array, but this time, it has a single element representing the `todo` that was just added. So it has the same `id` and the text as the action object. It also has an additional field called, `completed`, that I want to be initialized to be `false`.

``` javascript
const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];
};
```
We want to make sure that the reducer is a pure function, so I'm calling `deepFreeze` both on the `stateBefore` and the `action`. 

``` javascript
deepFreeze(stateBefore);
deepFreeze(action);
```
Finally, I am ready to use the `expect` library to verify that if I call the todo reducer with the `stateBefore` and the `action` object, I'm going to get the result that is deeply equal to the `stateAfter` I just declared.

``` javascript
expect(
  todos(stateBefore, action)
).toEqual(stateAfter);
```
This concludes my first test. Now I can call it just like a regular JavaScript function. If it doesn't throw an the expect call, I'm going to see a message saying that the tests have passed.

Of course, it fails because the reducer is not implemented yet. It's an empty function. So it returns `undefined` instead of the array with a single item that I expect in the test.

To fix this, I would need my reducer to take a look at the `action.type` property, which is a string. When it matches the `ADD_TODO` string, which I specify as the `action.type` in my test, to satisfy the test I need to return a new array which includes all items from the original array but also a new todo item that has its `id` and text copied from the action object and a `completed` field set to `false`.

``` javascript
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      default:
        return state;
  }
};
```
Finally, I add a default case to my `switch` statement because every reducer has to return the current state for any unknown action.

Now the test runs successfully. Let's recap the data flow in this example to see why.

First, I create the state array, which is an empty array, and the action object inside my test function. I'm passing them as arguments to my `reducer` function, called, `todos`. 

``` javascript
const testAddTodo = () => {
  const stateBefore = [];
  const action = { ... };
  const stateAfter = [ ... ];
};

expect(
  todos(stateBefore, action)
  ).toEqual(stateAfter);
```
The `todos reducer` accepts the state and the action as arguments and takes a look at the `action.type`.

``` javascript
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};
```
In this case, the `action.type` is a string saying, `ADD_TODO`, so it matches the switch case inside the reducer. The reducer returns a new array which contains the items from the old array and the new item representing the added todo.

However, the state we passed from the test was actually an empty array, so, at the end, we're going to get an array with a single item, which is the new todo.

Finally, we compare the return value to an array with a single todo item to make sure that the reducer works as intended. The equality check passes. This makes the test successful.
