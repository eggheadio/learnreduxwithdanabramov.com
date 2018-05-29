In the previous lesson, we got rid of the top level store variable and instead starting passing this store as a prop to the `TodoApp` component. So every component below receives this `store` as a prop. We even have to do this for **presentational components** because sometimes they contain **container components** that need this `store` to subscribe to the changes.

We have to write a lot of boiler plate code to pass this `store` down as a prop. But there is another way, using the advanced React feature called **context**.

I'm creating a new component called `Provider`. From its `render` method, it just returns whatever its child is. We can wrap any component in a `Provider`, and it's going to render that component.

``` javascript
class Provider extends Component {
  render() {
    return this.props.children;
  }
}
```

I'm changing the render call to render a `TodoApp` inside the `Provider`. I'm moving this `store` prop from the `TodoApp` to the `Provider` component. The `Provider` component will use the React advanced context feature to make this store available to any component inside it, including grandchildren.

``` javascript
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
```

To do this, it has to define a special method `getChildContext` that will be called by React by using `this.props.store` which corresponds to this `store` that is passed to the `Provider` as a prop just once.

``` javascript
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}
```
This `store` will be part of the context that the `Provider` specifies for any of its children and grandchildren. The `TodoApp` is going to receive this context, and any component inside `TodoApp` is also going to receive this context object with this `store` inside it.

However, there is an important condition for the context to work. This condition is that you have to specify `childContextTypes` on the component that defines `getChildContext`. These are just `React.PropTypes` definition, but unlike prop types, the child context types are essential for the context to be turned on. If you don't specify them, no child components will receive this context.

``` javascript
class Provider extends Component {
  getChildContext() { ... }

  Provider.childContextTypes = {
    store: React.PropTypes.object
  };

  render() { ... }
}
```
The container components currently access tool by props, but we're going to change this to read this store from React context. To do that, we just wrap it to `this.context`. Similarly, in the `render` method, I'm also going to read this `store` from the context instead of the props.

Finally, the context is opt-in for the receiving components too, so you have to specify a special field called `contextTypes`, which are similar to `childContextType`. But, in this case, we are specifying which context we want to receive and not pass down. If you forget to declare the `contextTypes`, the component will not receive the relevant context, so it is essential to remember to declare them.

``` javascript
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};
```
What about the functional components that don't have this? It turns out that they also receive the context but as a second argument after the props. I'm [destructuring](https://egghead.io/lessons/ecmascript-6-destructuring-assignment) the second argument and getting this `store` from there. The second argument is the context.

``` javascript
const AddTodo = (props, { store }) => { ... }
```
Just like with the `class` components, I still have to add a property called, `contextTypes` that specifies which context I want to receive. In this case, I want to receive the `store` from the `Provider`. If I forget to declare the `contextTypes`, my functional component will not receive the relevant context as a second argument. It's important to remember to declare them any time you use the context.

``` javascript
AddTodo.contextTypes = {
  store: React.PropTypes.object
};
```
Finally, I'm replacing the props with the context when getting this `store` for the `FilterLink`. I'm adding the `contextType` declaration to the `FilterLink` so it receives the relevant context from the `Provider`.

``` javascript
FilterLink.contextTypes = {
  store: React.PropTypes.object
};
```
Now that the `FilterLink` receives this `store` by context, I no longer need to pass it as a prop, so I'm removing its usage. I'm also removing the `store` prop from the `Footer` because it doesn't need to pass it down anymore. 

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

    ...

  </p>
)
```
I'm also removing this store prop from the `TodoApp` component because I no longer need to pass it down to the containers.

``` javascript
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
```
Now, instead of explicitly passing this `store` down by props, we pass it implicitly by context.

Let's recap how we use the context to pass this store down. We start by rendering the `TodoApp` inside the `Provider` component we defined above. The `Provider` component just renders whatever you pass through it. In this case, it renders its children or the `TodoApp` component. However, it also provides the context to any components inside it including grandchildren.

The context contains just one key called the `store`. It corresponds to the `store` we passed as a prop to the `Provider` component.

```javascript
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }; 
  }

  render() {
    return this.props.children;
  }
}
```
We pass this `store` to the `Provider` component in our `render` call and make it available to child components by defining the `getChildContext` with the `store` key pointing to that prop.

``` javascript
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
  <TodoApp />
  </Provider>,
  document.getElementById('root')
);
```
It is essential that the `getChildContext` is matched by `childContextTypes` where we specify that the `store` key has `propType` of `object`. Note that the `childContextTypes` definition is absolutely required if you want to pass the context down the tree.

```javascript
Provider.childContextTypes = {
  store: React.PropTypes.object
};
```
The benefit is that we don't need to pass this `store` through the intermediate components. Instead, we can declare the context types on the container components that need access to the `store` so that they can retrieve it from the context instead of retrieving it from the props.

The context creates something like a wormhole between the `VisibleTodoList` component that reads the context and the `Provider` that provides the context. This wormhole is only enabled because the context types declared on the `VisibleTodoList` include this `store` that is defined in child context types of the `Provider` component.

``` javascript
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};
```
The `AddTodo` is another component that needs access to this `store`. It also opts into receiving it in the context by specifying the context types. This is why, in addition to `props`, it receives a second argument, which is the context. I'm using the destruction syntax to grab this `store` from the context here.

```javascript
AddTodo.contextTypes = {
  store: React.PropTypes.object
};
```
The context works at any depth, so it is not necessary to put context types on the `Footer`. The `FilterLink` is the component that directly uses the context, so this is the component that has to specify the context types so that it can use this store by reading it from the context.

Context is a powerful feature, but in a way it contradicts the React philosophy of the explicit data flow. The context essentially allows global variables across the component tree. But global variables are usually a bad idea. Unless you're using it for dependency injection, like here when we need to make a single object available to all components, then probably you shouldn't use context.

Finally, the context API is **not stable** in React. It has changed before, and it is likely to change again. Try your best not to rely on it too much.