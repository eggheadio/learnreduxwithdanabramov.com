In the simplest counter example, I update the document body manually any time this tool state changes. But, of course, this approach does not scale to complex applications. Instead of manually updating the DOM, I'm going to use React.

I'm adding two scripts corresponding to React and react-dom packages and a root `<div/>` to render to. Now I can call the `ReactDOM.render` with my `root` component. The `render` function is called any time this store state changes, so I can safely pass the current state of this store as a `prop` to my `root` component.

``` javascript
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />
    document.getElementById('root')
  );
}
```

Since this `state` is held inside the Redux Store, the `Counter` component can be a simple function, which is a supported way of declaring components since React 14.

``` javascript
const Counter = ({value}) => (
  <h1>{value}</h1>
);
```

I want to add, `DECREMENT`, and `INCREMENT` buttons to the component, but I don't want to hard-code the Redux dependency into the component. So I just add `onIncrement` and `onDecrement` props as callbacks. In my `render` method, I pass the callbacks that call `store.dispatch` with appropriate actions. Now the application state is updated when I click the buttons.

``` javascript
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

<Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'           
        })            
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'           
        })            
      }
    />
```

Let's recap how this application works. The `counter component` is what I call a **dumb component**. It does not contain any **business logic**. It only specifies how the current application state transforms into renderable output and how the callbacks, passed via props, are bound to the event handlers.

![Counter Example](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/CounterExample.png)

When we render a counter, we specify that its value should be taken from the Redux Store current state. When the user presses `INCREMENT` or `DECREMENT`, we dispatch corresponding action to the Redux Store. Our reducer specifies how the next state is calculated based on the current state and the action being dispatched.

Finally, we `subscribe` to the Redux Store, so our `render` function runs anytime the state changes, so the counter gets the current state.
