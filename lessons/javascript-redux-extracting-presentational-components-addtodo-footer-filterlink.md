In the previous lesson, I extracted the `Todo` and `TodoList` components from the `TodoApp` component. In this lesson, I will continue extracting other **presentational components** to separate the looks from the behavior.

Now I want to extract the `input` and the `button` into a separate component called, `AddTodo` I'm declaring `AddTodo` as a functional component that doesn't accept any props. I'm going to return these copy pasted `input` and `button`, but I'm wrapping them in a `div` because a component needs to have a single root element.

``` javascript
const AddTodo = () => {
  return (
    <div>
      <input ref={node => {
        this.input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: this.input.value,
          id: nextTodoId++
        });
        this.input.value = '';
      }}>
      Add Todo
      </button>
    </div>
  );
};
```
The functional components don't have instances. However, instead of using `this`, I can use a local variable called, `input`, that I'm going to close over so I can write to it in the callback ref and I can read from it in the event handler.

``` javascript
const AddTodo = () => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => { ... }}>
      Add Todo
      </button>
    </div>
  );
};
```
Like previously, I want it to be a presentational component and not specify behavior, so I just called the function called, `onAddClick` passing the current input value. I make `onAddClick` a prop so that the component that uses `AddTodo` can specify what happens when that button is clicked.

``` javascript
const AddTodo = ({
  onAddClick
}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        onAddClick(input.value);
        input.value = '';
      }}>
      Add Todo
      </button>
    </div>
  );
};
```
Again, the `TodoApp` component acts as a **container component** for the `AddTodo`. It specifies that when add button is clicked, we should dispatch an action with the type `ADD_TODO`, the corresponding text, and the next todo `id`.

``` javascript
<AddTodo
  onAddClick={id =>
    store.dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    })
  } />
```
The last component I want to extract today is the `Footer`, which contains all these three filter links. I'm creating a new functional component called, `Footer`. I'm not sure which props it needs, so I skip them. I paste the markup. It seems that the `FilterLink` need the `visibilityFilter`, so I add it as a prop.

``` javascript
const Footer = ({
  visibilityFilter
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      currentFilter={visibilityFilter}
    >
      All
    </FilterLink>

    ...

  </p>
)
```
I would like the `Footer` and the `FilterLink` to be presentational components. However, the `FilterLink` includes a short dispatch call. I am replacing it with an `onClick` call. I pass the filter as the single parameter for the calling component's convenience. I add `onClick` to the props.

``` javascript
const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
     >
      {children}
     </a>
  );
};

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    
    ...

  </p>
);

```
Now I need to specify it every time `FilterLink` is used. I add `onFilterClick` to the `Footer`. I pass `onClick={onFilterClick}` for every `FilterLink` in the `Footer`, so whatever we pass to the `Footer` as `onFilterClick` prop is going to end up in the `Filter` link as `onClick`.

Now I can use the `Footer` component I just defined inside my `TodoApp` component. I need to pass to props, one of them is the `visibilityFilter` so it can highlight the `active` link. Another prop is `onFilterClick` where I say that whenever a `filter` is clicked, I want to dispatch an action with a type set `visibilityFilter` and the filter being clicked.

``` javascript
<Footer
  visibilityFilter={visibilityFilter}
  onFilterClick={filter =>
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
  }
/>
```

Finally, I just noticed that the `TodoApp` component doesn't actually have to be a class. I can turn it into a function. I prefer to do that when possible.

Instead of [destructuring](https://egghead.io/lessons/ecmascript-6-destructuring-assignment) the props inside the `render` method, I am now doing it inside the argument. I can remove now the destructuring. I'm also going to remove the `render` method declaration. The `visibleTodos` are only used in a single place, so I'm moving the `getVisibleTodos` call to the `TodoList` `todos` prop declaration. Now the body of my function is just a single expression, so I can get rid of the return statement and unindent code to make it look nicer.

``` javascript
const TodoApp = ({
  todos,
  visibilityFilter
}) => (
  <div>
    <AddTodo ... />
    <TodoList
      todos={
        getVisibleTodos(
          todos,
          visibilityFilter
        )
      }
      onTodoClick={ ... }
    />
    <Footer ... />
  </div>
);
```

This concludes the initial refactoring of the todo list application into a single container component called `TodoApp` and many presentational components that are only concerned with how things look.

Let's recap the data flow in this example.

We have a single container component called `TodoApp`. We re-render it any time the store changes. It receives the keys of the global state object as the props, so it receives the `todos` and the `visibilityFilter` values.

The first component it renders is called `AddTodo`.

```javascript 
<AddTodo
  onAddClick={text =>
    store.dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    })
  }
/>
```

`AddTodo` is a presentational component that renders an `input` and a `button`. When the button is clicked, it passes the current `input.value` to the `onAddClick` function.

``` javascript
const AddTodo = ({
  onAddClick
}) => {
  let input;

  return (
      <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        onAddClick(input.value);
        input.value = '';
      }}>
      Add Todo
      </button>
    </div>
  );
}
```
`onAddClick` function is a prop for the `AddTodo` component. In this case, it is specified by the `TodoApp`, which says that when the button is clicked, it should dispatch an action containing the current text in the action object. Dispatching the `AddTodo` action will call our reducer, update this store state with the new todos, and re-render the `TodoApp` component with the new todos.

The todos themselves are rendered by the `TodoList` presentational component that receives two props, the currently visible todos and the `onTodoClick` callback.

``` javascript
 <TodoList
      todos={
        getVisibleTodos(
          todos,
          visibilityFilter
        )
      }
      onTodoClick={
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      }
    />
```
The `TodoList` component receives an array of todos, and it maps over them, rendering individual `Todo` components. It uses the [spread operator](https://egghead.io/lessons/ecmascript-6-using-the-es6-spread-operator) to pass every property of the todo object as a prop to   `Todo` component. It specifies the `onClick` handler as calling `onTodoClick` with the `id` of the particular `todo`.

```javascript
const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);
```
The `Todo` component is defined above. It is also a presentational component so it doesn't specify the behavior. It says that when a list item is clicked, it should call the on click handler. Being a presentational component it specifies how the component looks in different circumstances. In this case, it uses the `completed` prop to choose between two different styles of the todo item.

```javascript
const Todo = ({
  onClick,
  completed,
  text
}) => (
<li
  onClick={onClick}
  style={{
    textDecoration:
      completed ?
        'line-through' :
        'none'
  }}
>
);
```

The `TodoList` is also presentational component. It delegates actually handling the click to `onTodoClick` prop. It passes the `id` of the todo being clicked.

``` javascript
const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick{() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)
```
Finally, the `TodoApp` component reacts to it by dispatching an action containing the `id` of the todo clicked and the type `TOGGLE_TODO`.

```javascript
onTodoClick={id =>
store.dispatch({
  type: 'TOGGLE_TODO',
  id
})
}
```
The store will call our reducer and update the state of the application, re-rendering the `TodoApp` component with the new todos.

The `Footer` component receives the current `visibilityFilter` as a prop and also receives the `onFilterClick` callback that sets the current `visibilityFilter`. 

``` javascript
<Footer
  visibilityFilter={visibilityFilter}
  onFilterClick={filter =>
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
  }
/>
```
The `Footer` component renders three `FilterLinks`, passing down their respective filter values, the `onClick` handler, and the current `visibilityFilter`.

``` javascript
const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    
    ...

  </p>
);
```
The `FilterLink` component being a presentational component doesn't know what to do when it's clicked, so it calls the `onClick` callback, passing the `filter`, which is different for each of those links, as an argument. The `Footer` delegates handling the click of the `FilterLink` to its own prop, called `onFilterClick`.

Finally, the `TodoApp` component being the container component in our application specifies the behavior, which in this case means that when the `FilterLink` is clicked, it should dispatch an action with the type `SET_VISIBILITY_FILTER`, and the new `filter`.

Separation of the presentational components is not required in Redux, but I recommend this pattern because it decouples your rendering from Redux. So if you later choose to move your project to another framework, such as Relay, you will not have to change all your components because you can keep the presentational components exactly the same.

This approach also has downsides, such as that you have to thread a lot of props through the components to get them to the leaf components, including the callbacks. This problem can be easily solved by introducing many intermediate container components as we will see in the next lesson.
