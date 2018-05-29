In this lesson, we will continue creating the reducer for todo list application. The only action that this reducer currently handles is called `ADD_TODO`. We also created a test that makes sure that when the `reducer` is called with an empty array as a state and the `ADD_TODO` action, it returns an array with a single to do element.

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
In this lesson, we will follow the same approach to implement another action called `TOGGLE_TODO`. We're going to start with a test again. This time, we're testing a different action and we have a different initial state. The state before calling the `reducer` now includes two different `todos` with `id: 0` and `1`. Notice how both of them have their `completed` fields set to `false`.

``` javascript
const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ];
};
```
Next, I declare the `action`. The `action` is an object with the type property which is a `TOGGLE_TODO` string and the `id` of the todo that I want to be toggled. I declare the `state` that I expect to receive after calling the `reducer`. It's pretty much the same as before calling the `reducer`. However, I expect the `todo` with the `id` specified in the action or `1` in this case. The change is `completed` field.

``` javascript
const action = {
  type: 'TOGGLE_TODO',
  id: 1
};
const stateAfter = [
  {
    id: 0,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 1,
    text: 'Go shopping',
    completed: true
  }
];
```
The reducer must be a pure function. As a matter of precaution, I called `deepFreeze` on the `state` and the `action`. Finally, just like in the previous lesson, I'm asserting that the result of calling my `reducer` with the `stateBefore` and the `action` is going to be deeply equal to the `stateAfter`.

``` javascript
deepFreeze(stateBefore);
deepFreeze(action);

expect(
  todos(stateBefore, action)
).toEqual(stateAfter);
```
My test is a function, so I need to call it at the end of the file. If I run it, it fails because I have not implemented handling this action yet.

I'm adding a new switch `case` to my reducer. I remember that I shouldn't change the original array, so I'm using the array `map` method to produce a new array.

The function I pass as an argument will be called for every `todo`. If it's not a `todo` I'm looking for, I don't want to change it. I just return it as is. However, if the `todo` is the one we want to toggle, I'm going to return a new object that has all the properties of the original todo object thanks to the object's spread operator, but also an inverted value of the completed field.


``` javascript
case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
```
Now both of our tests run successfully. We have an implementation of the reducer that can add and toggle todos.
