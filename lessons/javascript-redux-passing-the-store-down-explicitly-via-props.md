In the previous lessons, we used this `store` top-level variable to refer to the Redux store. The components that access this store, such as the **container components**, read this state from it, subscribe to this store, and dispatch actions on this store using this store top-level variable.

This approach works fine for JS bin example where everything is in a single file. However, it doesn't scale to real applications for several reasons.

First of all, it makes your container components harder to test because they reference a specific store, but you might want to supply a different mock store in the test. Secondly, it makes it very hard to implement universal replications that are rendered on the server, because on the server, you want to supply a different store instance for every request because different requests have different data.

I'm going to start by moving this store creation code to the bottom of the file where I render my React components. I'm going to change it slightly. Instead of creating this store top-level variable, I will pass this store I create as a prop to the top-level component, so it is completely injectable into it.

``` javascript
ReactDOM.render(
  <TodoApp store={createStore(todoApp)} />,
  document.getElementById('root')
);
```
Every container component needs a reference to this store so unfortunately, we have to pass it down to every component as a prop. It's less effort than passing different data through every component, but it's still inconvenient. So, don't worry, we'll find a better solution later, but for now, we need to see the problem.

``` javascript
const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);
```
The problem is that the **container components need to have this store instance to get this state from a dispatch actions and subscribe to the changes**. This time, I'm changing the container component to take this store from the props using the [ES6 destruction](https://egghead.io/lessons/ecmascript-6-destructuring-assignment) syntax, which just means "store equals props does store."

I'm doing the same here. I'm just taking this store from the props so I can call dispatch on it.

``` javascript
class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() { ... }
  render() {
    const props = this.props;
    const { store } = props;
    const state = store.getState();

    return (
      <TodoList ... />
    );
  }
}
```
I need to make similar changes to other container components. In this case, I have this `AddTodo` component, which is not exactly a container component, but it still needs its store to dispatch the `ADD_TODO` action, so I added it as a prop. I'm also going to add this store to the `Footer` component because, unfortunately, `FilterLink` needs it.

``` javascript
const Footer = ({ store }) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      store={store}
    >
      All
    </FilterLink>
    
    ... 

  </p>
);
```
The `Footer` component renders `FilterLink`. This is not convenient, but as I said, we'll figure out a way to avoid this later. For now, we need to pass this store down so that every container component, such as `FilterLink`, can use it to subscribe to the changes, to read this state and to dispatch actions without relying on a top-level variable being available.

``` javascript
class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = props;
    const state = store.getState();

    return ( ... );
  }
}
```
I'm changing the `render` method to read this store from the props. Now, all containers read this store instance from the props, and don't rely on a top-level variable that I removed.

```javascript
render() {
    const props = this.props;
    const { store } = props;
    const state = store.getState();
}
```
Note that this change did not change the behavior or the data flow of this application. The container components subscribe to this store, just like before, and update their state in response to its changes.

However, what changed is how they access this store. Previously, they would access a top-level variable, but this approach does not scale to real-world applications. This is why, right now, I'm passing down this store as a prop, so the container components can subscribe to it.

In the future lessons, we will see how to pass this store down to the container components implicitly without introducing the top-level variable.