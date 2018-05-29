In the previous lesson, I separated the `Link` **presentational components** from the `FilterLink` **container components** that is subscribed to the Redux store and that provides the data and the behavior for the `Link` component it renders.

While it makes the data flow a little bit less explicit, it makes it easy to use `FilterLink` in any component without worrying about passing additional data to the `FilterLink` or to the component that contains it. In this lesson we'll continue extracting the container components from the top level container component. The first candidate is the `TodoList` component.

I actually want to keep the `TodoList` presentational component. However, I want to encapsulate within the currently visible todos this into a separate container components that connects the `TodoList` to the Redux store. I'm going to call this component the `VisibleTodoList`.

``` javascript
class VisibleTodoList extends Component {

}
```
Just like when declaring the `FilterLink` component in the previous lesson, I calculate the data from the current component by using the current state which is the state from the Redux store. I'm using the `getVisibleTodos` function to calculate the currently visible todos based on all the todos from the Redux store and the current `visibilityFilter` from the Redux store state. I'm specifying the behavior as well. I'm saying that when the todo is clicked, we should dispatch an action with the type `TOGGLE_TODO` and the `id` of the todo being clicked.

``` javascript
class VisibleTodoList extends Component {
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dipatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}
```
All container components are similar. Their job is to **connect a presentational components to the Redux store** and specify the data and the behavior that it needs. I'm scrolling up to the `FilterLink` container components I wrote in the previous lesson to copy-paste this store subscription logic.

``` javascript
componentDidMount() {
  this.unsubscribe = store.subscribe(() =>
    this.forceUpdate()
  );
}

componentWillUnmount() {
this.unsubscribe();
}

render() { ... }
```
Just like the `FilterLink`, the `VisibleTodoList` is going to subscribe to this store and force an update any time this store state changes because it uses this state in its `render` method. Now that the `VisibleTodoList` is connected to the Redux store, we can use it instead of the `TodoList`. We no longer have to pass all the props from the top.

``` javascript
const TodoApp = ({
  todos,
  visibilityFilter
}) => (
  <div>
    <AddTodo ... />
    <VisibleTodoList />
    <Footer />
  </div>
);
```
Finally, in the previous lesson, I made `AppTodo` a presentational components, but I'm going to backtrack on this now. I will copy-paste the dispatch call back in line into the `onClick` handler inside the component because there isn't really a lot of presentation or behavior here.

It's easier to keep them together until we figure out how to split the presentation. For example, if in the future, we're going to have something like a form component, we may split it, but for now we'll keep them together.

``` javascript
const AddTodo = () => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
```
I'm scrolling down to my `TodoApp` component. I'm removing the `onAddClick` prop. I just noticed that none of the containers actually need any props from this state. I can remove the props of the `TodoApp` component. I can remove the `render` function that renders the `TodoApp` component with the current state of this store because I can just call it once, remove all the props that are related to this state and just render it as is because the container components that I render are going to subscribe to this store themselves and are going to update themselves when this store state changes.

``` javascript
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
```
Let's recap the data flow after separating the presentational and the container components. There is just one `reactDOM.render` call at the very end. We don't render again when this store state changes because the container components take care of that.

```javascript
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
```
The first component I'm looking at is called `AddTodo`. Frankly, I can't classify it either as a presentational components or as a container components because it doesn't fit either category. The input and the button are the presentational part, but dispatching an action `onClick` is the behavior which is usually specified by the container.

```javascript
const AddTodo = () => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
```
However, in this case, I'd rather keep them together because there isn't any state, the UI is very simple. It's hard to imagine any other behavior other than dispatching the `ADD_TODO` action.

The second component are rendering inside the at `TodoApp` is called the `VisibleTodoList` . This time, it is a proper container components that subscribes to this store and re-renders the `TodoList` any time this store state changes. It calculates the visible todos from the current Redux store state, the todos and the 
`visibilityFilter` fields. It passes them as the todos.
When the todos are clicked, it's going to dispatch an action with the type `TOGGLE_TODO` and the `id` of the respective todo.

```javascript
class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const props = this.props;
    const state = store.getState();
    
    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })            
        }
      />
    );
  }
}
```
The actual rendering here is performed by the `TodoList` component that just renders the todos passed through it as prop and binds their clicks through the on `onTodoClick` prop.

Finally, the last component `TodoApp` renders is the `Footer`. The `Footer` is just a presentational component rendering three different `FilterLink`. 

``` javascript
const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>

    ...

  </p>
);
```
The `FilterLink` is a container component. It subscribes to this store and it renders the presentational component called, `Link`, calculating whether it should be active based on its props and the current Redux store state and specifies the behavior what happens when it's clicked.

```javascript
class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const props = this.props;
    const state = store.getState();
    
    return (
      <Link
        active={
          props.filter ===
          state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}
```
Finally, the `Link` component is just a presentational component that render `<a>` tag. Separating the container and the presentational component is often a good idea, but you shouldn't take it as a dogma. Only do this when it truly reduces the complexity of your code base.

```javascript
const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};
```
In general, I suggest first trying to extract the presentational component. If there is too much boilerplate passing the props through them, then you can create the containers around them that load the data and specify the behavior.
