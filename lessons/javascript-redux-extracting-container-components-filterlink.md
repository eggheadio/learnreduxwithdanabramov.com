In the previous lesson, we separated the **presentational components** from the main **container component**. The `TodoApp` specifies the behaviors, which is what happens when add button, how the `todos` are selected, what happens when a single todo is being clicked, and what happens when a `FooterLink` is clicked.

The components, such as `AddTodo`, the `TodoList`, the `Todo` itself, the `Footer`, and the `FilterLink`, they don't dispatch actions. They call their callbacks in the props. They are only responsible for the looks but not for the behavior.

The downside of this approach is that I have to pass a lot of props down the tree even when the intermediate components don't really use them.

For example, the `FilterLink` needs to know the `currentFilter` so that it can choose a different appearance when it is active.

``` javascript
const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
}
```
However, in order to receive the `currentFilter`, it has to be passed down from the top. This is why the `Footer` has to accept `visibilityFilter` as a prop, so it can pass it down as a `currentFilter` to the `FilterLink`.

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
)
```
In a way, this breaks encapsulation because the parent components need to know too much about what data the child components need. To solve this, we're going to extract a few more container components, just like we extracted the presentation components in the previous lesson.

The first component I'm going to refactor is the `Footer` component. 

```javascript
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
Currently, it accepts two props -- the `visibilityFilter`, and the on `onFilterClick`. But it doesn't actually use either of them. It just passes them down to the filter link. This seems like a good opportunity for simplification.

We can only do this because we know that the `Footer` component doesn't care about the values of these props. They only exist to be passed down to the `FilterLink` that cares about them.

```javascript
<FilterLink
  filter='SHOW_ALL'
  currentFilter={visibilityFilter}
  onClick={onFilterClick}
>
```
I am removing the props definition, and I'm removing these props from the `FilterLink` usage. It might start to seem a lot like the the code before separating the presentational component. However, what I want to do here is a little bit different.

``` javascript
const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_ACTIVE'
    >
      Active
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_COMPLETED'
    >
      Completed
    </FilterLink>
  </p>
);
```
The `FilterLink` does not currently specify the behavior for clicking on the link. It also needs the `currentFilter` to tell whether it should be rendered as active.

Therefore, it's a bit dishonest to say that `FilterLink` is a presentational component because it is inseparable from its behavior. The only reasonable reaction to clicking on it is setting the `visibilityFilter` by dispatching an action.

This is why I'm changing it to a different presentational component I'm going to call, `Link` I will create another `FilterLink` component as a container that uses it for rendering. The `Link` component doesn't know anything about the `filter`. It only accepts the active prop, and it calls its own click handler. It is only concerned with rendering.

``` javascript
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
However, I'm also creating another component, called `FilterLink` It is going to be a `class` this time that is going to render the `Link` with the current data from this store. It's going to read the component `props`, and it's going to read the `state`. But I don't mean react state. I mean the Redux store state it gets by calling, `store.getState`

``` javascript
class FilterLink extends Component {
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter ===
          state.visibilityFilter
        }
      >
      </Link>
    );
  }
}
```

As a container component, the `FilterLink` doesn't have its own markup. It delegates rendering to the `Link` presentational component. In this case, it calculates its active prop by comparing its own `filter` prop with the `visibilityFilter` in the Redux store state. The `filter` prop is the one that is passed to the `FilterLink` from the `Footer`. The `visibilityFilter` corresponds to the currently chosen `visibilityFilter` that is held in Redux store state. If they match, we want the link to appear active.

The container component also needs to specify the behavior. In this case, the `FilterLink` specifies that when this particular `Link` is clicked, we should dispatch the action with the type set `visibilityFilter` and the `filter` value that we take from the props.

``` javascript
class FilterLink extends Component {
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link
        active={ ... }
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
The `FilterLink` may accept children which are used as the contents of the `Link`, so we're going to pass the children down to the `Link` component. We're just going to render them inside the `<a>` tag.

There is a small problem with this implementation of `FilterLink`. Inside the `render` method, it reads the current state of the Redux store. However, it does not subscribe to this store. If the parent component does not update when this store is updated, it's going to render this stale value.

Currently, we rerender the whole application when the state changes. However, this is not very efficient. In future, we will instead move subscription to this store, to the lifecycle methods of the container components.

``` javascript
class FilterLink extends Component {
  componentDidMount() {
    store.subscribe(() =>
      this.forceUpdate()
  );
  }
}

render() { ... }
```
React provides a special `forceUpdate` method on the component instances to force their re-rendering. We're going to use it together with `store.subscribe` method so that any time the store state changes, we force update the container components.

We perform the subscription inside the `componentDidMount` lifecycle method. So it's important to unsubscribe inside the `componentWillUnmount` method. Note that we don't actually have the unsubscribe function, but this is the return value of the store subscribe method, so we can keep it, and then call it inside `componentWillUnmount`.

``` javascript
class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
}
render() { ... }
```
Let's recap this part. The `FilterLink` component subscribes to this store, calling `forceUpdate` any time this store changes so it can render the current state of this store. It saves the reference through the `unsubscribe` function returned by `store.subscribe`. It invokes it when the component is about to unmount to clean up the subscription.

Let's recap the relationship between the `FilterLink` container component and the `Link` presentational component. The `Link` component only specifies the appearance of the the link, when it is active or inactive, but it doesn't know about the behavior. The `FilterLink` component is a container, so it provides the data and the behavior for the presentational component.

When it mounts, it subscribes to this store, so it independently re-renders when the store state changes because it needs to use this store current state inside its `render` method.

Instead of specifying the DOM tree, it delegates all the rendering to the `Link` presentational component. Its only job is to calculate the props based on the `FilterLink`'s own props and the current state of the Redux store. It also specifies the callbacks that are going to dispatch the actions on this store.

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

After the action is dispatched, this store will remember the new state returned by the reducer and will call every subscriber to this store. In this case, every `FilterLink` component instance is subscribed to this store, so they will all have their `forceUpdate` methods called on them. They will re-render according to the current store state.

The `FilterLink` is a container component, so it is completely self-sufficient and can be used inside the 
presentational components, such a `Footer`, without passing additional props to get the data from this store and specify the behavior. This lets us keep the `Footer` component simple and decoupled from the behavior and the data that its child components need.
