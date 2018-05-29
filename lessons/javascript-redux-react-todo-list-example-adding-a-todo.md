In the previous lessons, we learned how to split the root reducer into many smaller reducers that manage parts of the state tree.

We have a ready `todoApp` reducer that handles all the actions of our simple todo application. Now it's trying to implement the View layer. I'm going to use React in this example.

I'm adding `react` and `react-dom` packages from the Facebook CDN. I'm also adding a div with the `id='root'`, which is where I'm going to render my react application.

```html
<body>
  <div id='root'></div>
</body>
```
Similar to the react counter-example from the eighth lesson, I declare a `render` function that is going to update dom in response to the current application state. I'm going to subscribe to these core changes and call `render` whenever the store changes and wants to render the initial state.

``` javascript
const render = () => {

};

store.subscribe(render);
render();
```
The implementation of the render method is going to use react, so it's called `ReactDOM.render` for some `todoApp` component I haven't written yet. It renders it into the div I created inside the HTML. It's div with the id called `root`.

``` javascript
const render = () => {
  ReactDOM.render(
    <todoApp />,
    document.getElementById('root')
  );
};
```
React provides a base class for all components. I'm grabbing from the react object called `reactComponent`. I'm declaring my own `todoApp` component that extends the react-based `Component`. This component is only going to have a `render` function and is going to return a `div`. Inside the div, I'm going to place a button saying add todo them.

``` javascript
const { Component } = React;

class todoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => { }}>
          Add todo
        </button>
      </div>
    );
  }
}
```
I don't want to add an input field yet to keep the example simple at first. I'm dispatching the `ADD_TODO` action, and I'm going to put a `Test` as my checks for the action. It's going to keep adding to this with the products test.

``` javascript
<button onClick={() => {
  store.dispatch({
    type: 'ADD_TODO',
    text: 'Test',
    id: nextTodoId++
  });
}}>
```
The ID, I need to specify a sequential ID. This is why I'm declaring an global variable called `NextToID`, and I'm going to keep in command in it. Every time, it's going to emit a new id.

``` javascript
let nexttodoId = 0;
```
I also want to display a list of the todo list. Assuming that I have the todos inject as `todos` prop, I'll call `map` and for every todo item, I'm going to show a list item show in the text of that particular `todo`.

``` javascript
<ul>
  {this.props.todos.map(todo =>
    <li key={todo.id}>
      {todo.text}
    </li>
   )}
</ul>
```
Finally, because I need to the `todos` as a prop, I'm going to pass it to the `todoApp` by reading the currents stores state and written its `todo` field.

``` javascript
  <todoApp todos={store.getState().todos} />
```

![Adding todos](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/Addtodos.png)

You can see that there is a button `add todo` and anytime I press it, I see a new todo with a test text. I'm going to add an input inside my `render` function, and I'm using the react callback `ref` API where `ref` is a function, it gets the `node` corresponding to the `ref`, and I'm saving that `node` with some name. In this case, `this.input`.

``` javascript
<input ref={node => {
  this.input = node;
}} />
```
I'm able to read the value of the input inside my event handler. I'm reading this `this.input.value`. I'm also able to reserve the value after dispatching the action so that the field is cleared. 

``` javascript
<button onClick={() => {
  store.dispatch({
    type: 'ADD_TODO',
    text: this.input.value,
    id: nextTodoId++
  });
  this.input.value = '';
}}>
```
If I try write something to build and press `Add Todo`, the `ADD_TODO` action is dispatched and the field is cleared.

![Adding todos with this.input](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/AddtodoThisInput.png)

Let's take a moment to recap how this application works. It starts with a `todoApp` react component. This component is not aware of how exactly todos are being added. However, it can express its desire to mutate the state by dispatching an action with the type `ADD_TODO`.

```javascript
<button onClick={ () => {
  store.dispatch({
    type: 'ADD_TODO',
    text: this.input.value,
    id: nextTodoId++
  });
  this.input.value = '';
}}>
```
For the text field, it uses the current input value and it passes an incrementing id as the id of todo. Every todo needs its own id, and in this approach, we're just going to increment the counter, so it always gives us the next integer as id.

It is common for react components to dispatch actions in Redux apps. However, it is equally important to be able to render the current state. My `todoApp` component assumes that it's going to receive `todos` as a prop, and it maps over the todo list to display a list of them using the `todo.id` as a key.

```html
<ul>
  {this.props.todos.map(todo =>
    <li key={todo.id}>
      {todo.text}
    </li>
  )}
</ul>
```
This component is being rendered in the `render` function that runs any time the store state changes and initially. The `render` function reads the current state of this store and passes the `todos` array that it gets from the current state of this store to do to the app component as a prop.

```javascript
const render = () => {
  ReactDOM.render(
    <todoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
};
```
The `render` function is called on every store change so the `todos` prop is always up to date. This was the rendering part of the redux flow. Let's recap how mutations work in Redux.

Any state change is caused by a `store.dispatch` call somewhere in the component. When an action is dispatched, this store calls the `reducer` it was created with, with the current state and the action being dispatched.

In our case, this is the `todoApp` reducer, which we obtained by combining `visibilityFilter` and the `todos` reducer.

It matches the action type and the `switch` statement. If the action type is `ADD_TODO` and indeed, it is equal to `ADD_TODO` string. In this case, it will call the child `todo` reducer, passing it `undefined`, because this is no state for a new todo that it can pass in the `action`.

```javascript 
case 'ADD_TODO':
  return [
    ...state,
    todo(undefined, action)
  ];
```
We have a similar `switch` statement inside the `todo` reducer and the action type is `ADD_TODO` returns the initial state of the `todo`. With the id and text from the `action` and the `completed` field set to `false`.

``` javascript 
case 'ADD_TODO':
  return {
    id: action.id,
    text: action.text,
    completed: false
  };
```
The `todos` reducer that called it was returned a new array with all existent items and the new item added at the very end. It adds a need to do to the current state.

Finally, the combined producer called `todoApp` will use this new array as the new value for the `todos` field in the global state object. It's going to return a new state object where the `todos` field corresponds to the array with the newly-added todo item.

``` javascript
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
```
The `todoApp` reducer is the root reducer in this application. It is the one the store was created with. Its next state is a next state of the Redux store, and all the listeners are notified.

The `render` function is subscribed to the store changes so it is called again, and it gets the fresh state by call and `getState` and it passes the fresh todos to the component, re-rendering it with the new data.

``` javascript
const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
```