In the previous two lessons, we were working on creating the user interface for the todo list application that displays the todos, lets us add new todos, and toggle them on click. We implemented that by dispatching `ADD_TODO` and `TOGGLE_TODO` actions that we already know how to handle in our reducers.

In this lesson, we're going to dispatch `SET_VISIBILITY_FILTER` reaction and use the `visibilityFilter` field to only show the todos the user wants to see -- either the `completed` todos, `active` todos, or `all` todos in the current state.

I'm starting by creating a new functional component called, `FilterLink` that the user needs to click to switch the current visible todos. The `FilterLink` accepts the `filter` prop, which is just a string, and the `children`, which is the contents of the link. It's going to be a simple `<a>` tag that doesn't really link anywhere. It's going to prevent the navigation when clicked.

``` javascript
const FilterLink = ({
  filter,
  children
}) => {
  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
         })
       }}
    >
      {children}
    </a>
  );
};
```
It's going to dispatch an action, the type, `SET_VISIBILITY_FILTER`, and pass in the `filter` prop so that the reducer knows which filter is being clicked. I will pass the `children` down to the `<a>` tag, so the consumer can specify the text of the link. Now I can use it in my `TodoApp` component.

Just below the todo list, I am adding a paragraph where I'm going to offer the user the choice as to which todos should be currently visible by using the filter link component I just created.

``` html
<ul>
  {this.props.todos.map(todo =>
  <li key={todo.id}
      onClick={() => { store.dispatch({ ... });}}
      style={{ ... }}>
      {todo.text}
  </li>
  )}
</ul>
  <p>
    Show:
  </p>
```
The `filter` prop is one of the three possible values, such as `SHOW_ALL`, which corresponds to showing every todo in the state, `SHOW_ACTIVE`, which means just show the todos that are not completed yet, and `SHOW_COMPLETED`, which means show the completed todos. I'm copy-pasting the filter link, and I'm changing the labels and the filters corresponding to it.

``` javascript
<p>
  Show:
  {' '}
  <FilterLink
    filter='SHOW_ALL'
  >
    ALL
  </FilterLink>
  {' '}
  <FilterLink
    filter='SHOW_ACTIVE'
  >
    Active
  </FilterLink>
  {' '}
  <FilterLink
    filter='SHOW_COMPLETED'
  >
    Completed
  </FilterLink>
</p>
```
Running this code will give me three different things under the list of todos. Clicking on them will change the state `visibilityFilter` field. However, it doesn't have any effect yet because we don't interpret the value of the `visibilityFilter`.

I am creating a new function that is going to help me filter the todos according to the filter value. It's called, `getVisibleTodos`. It accepts two arguments, the `todos` and the `filter`. It switches on the current `filter` value.

``` javascript
const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
}
```
If the filter is `SHOW_ALL`, it's going to return all of the todos. But if the filter is `SHOW_COMPLETED`, it's going to call `todos.filter`, that is array `filter` method, to only return those todos that have completed set to true. `SHOW_ACTIVE` is going to the opposite of that. It's going to return only those todos where a `completed` field is `false`.

Now I need to call this function to filter the todos before rendering them. In the `render` function of the `TodoApp` component, I get the visible todos by calling `getVisibleTodos` with the todos and the `visibilityFilter` values from my props. 


``` javascript
render() {
  const visibleTodos = getVisibleTodos(
    this.props.todos,
    this.props.visibilityFilter
  );
  return ( ... );
}
```
I'm going to use the `visibleTodos` instead of `this.props.todos` when I enumerate them for rendering.

``` html
<ul>
  {visibilityTodos.map(todo =>
  <li key={todo.id}
      onClick={() => { store.dispatch({ ... });}}
      style={{ ... }}>
      {todo.text}
  </li>
  )}
</ul>
```
Finally, I now use the `visibilityFilter` inside my `TodoApp` component, so I need to pass it as a prop.

I could do this explicitly, but actually it's easier for me just to [spread](https://egghead.io/lessons/ecmascript-6-using-the-es6-spread-operator) over all the state fields. So every state field inside the state object is passed as a prop to the `TodoApp` component. This way, it receives the `visibilityFilter`. If I add some todo items and then click on them, so I change their completed fields, and then click on the `visibilityFilter` links, the currently visible todos are rendered according to the chosen `visibilityFilter`.

``` javascript
<TodoApp
  {...store.getState()}
/>
```

![Filters Applied](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/FiltersApplied.png)

The links look all the same right now, but we want to highlight the chosen one. To implement this, we're going to need the `visibilityFilter` prop which says which is the current one.

I'm changing the beginning of the `render` method to destructure the todos and the `visibilityFilter` from the props, so I can access them directly now without typing `this.props` every time. 

``` javascript
const {
  todos,
  visibilityFilter
} = this.props;
const visibleTodos = getVisibleTodos(
  todos,
  visibilityFilter
);
```
I'm going to pass the `visibilityFilter` to every `<FilterLink>`, so it can know which filter is the current one and apply different styling if the `currentFilter` matches the filter links' own filter.

``` javascript
<FilterLink
  filter='SHOW_ALL'
  currentFilter={visibilityFilter}
>
```
After passing the `currentFilter` prop to every filter link, I go back to the `FilterLink` declaration. I'm adding `currentFilter` as a prop to it, and I'm adding a condition that says that when the `filter` is the `currentFilter`, that is, when the link is active, I want to return a `<span>` instead of a link because I don't want it to be clickable. I want it to be static text.

``` javascript
if (filter === currentFilter) {
  return <span>{children}</span>;
}
```
This completes the user interface of our todo list example. It lets us add items. It lets us view items, toggle them as completed. When we switch the `visibilityFilter`, it displays only relevant todos, and it also updates the link appearance, so we see which link is active.

![Updated Link Appearance](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/UpdatedLinkAppearance.png)

Let's recap how a change in the `visibilityFilter` works. It starts with a dispatch code with an action of the type `SET_VISIBILITY_FILTER`. It passes `filter`, which is a prop, to the link component, so every one of those three links is going to have a different `filter` prop it passes in the action.

``` javascript
<a href='#'
  onClick{e => {
    e.preventDefault();
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  }}
>
```
The store dispatch function will call our root reducer with the state and the action which in turn will call the `visibilityFilter` reducer with the part of the `state` and the `action`.

Note that when the `action.type` is set `visibilityFilter`, it doesn't care for the previous state, it just returns the `action.filter` as the next value, the next state, of the `visibilityFilter` reducer.

```javascript 
const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
```
The root reducer will use this new field as part of its new state object.

Because the `render` function is subscribed to the stored changes, it's going to get this new state object and pass all its keys as props to the `TodoApp` component.

```javascript
const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')
  );
}; 
```
The `TodoApp` component will receive the todos and the updated `visibilityFilter` as its props.

Both these props are passed through the `getVisibleTodos` function, which calculates the currently visible todos according to a list of all todos and the `visibilityFilter`.

```javascript
const {
  todos,
  visibilityFilter
} = this.props;
const visibleTodos = getVisibleTodos(
  todos,
  visibilityFilter
);
```
The filter is just a string saying `SHOW_ALL`, completed, or active. The return value is a new array of todos that in some cases, filters them and, in some cases, returns as is. The show completed and show active are only different in their predicates.

```javascript 
case 'SHOW_ALL':
  return todos;
case 'SHOW_COMPLETED':
  return todos.filter(
    t => t.completed
  );
case 'SHOW_ACTIVE':
  return todos.filter(
    t => !t.completed
  );
```
The return value is the array of visible todos. It is used in the `render` function to actually enumerate every todo and render it.

The `visibilityFilter` field is also used by the `<FilterLink>` as the `currentFilter` because the `<FilterLink>` wants to know whether its filter is the current one in order to render a span instead of a link. This is how clicking a link makes it appear selected and changes the currently displayed items in the list.

``` javascript
<p>
  Show:
  {' '}
  <FilterLink
    filter='SHOW_ALL'
    currentFilter={visibilityFilter}
  >
    All
  </FilterLink>
```