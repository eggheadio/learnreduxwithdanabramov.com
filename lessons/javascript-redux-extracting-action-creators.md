So far we have covered the **container components**, the **presentational components**, the **reducers**, and the **store**. But we have not covered the concept of **action creators**, which you might see in the Redux talks and examples.

Let's consider the following example. I dispatched the `ADD_TODO` action from inside the button `onClick` handler. This is fine. However, it references the `nextTodoId` variable, which added there alongside the `AddTodo` component.

```javascript 
let nextTodoId = 0;
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch({
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
Normally, it would be local. However, what if another component wants to dispatch the `ADD_TODO` action? It would need to have the access to `nextTodoId` somehow. While I could make this variable global, it's not a very good idea.

Instead, it would be best if the components dispatching the `ADD_TODO` action did not have to worry about specifying the `id`. Because the only information they really pass is the text of the todo being added.

I don't want to generate the `id` inside the reducer, because that would make it non-deterministic. However, I can extract this code generating the action object into a function I will call `addTodo`.

``` javascript
<button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
```
I pass the input value to `addTodo`. `addTodo` is just the function that takes the `text` of the `todo` and constructs an action object representing `ADD_TODO` action. It has the type, `ADD_TODO`, it takes care of generating the unique `id` and it includes the text.

``` javascript
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++
    text
  };
};
```
Although extraction such functions is not required, it is very common pattern in Redux applications to keep them maintainable, so, like all these functions, action creators, and we usually place them separately from components or from reducers.

I will now extract other action creators from the components. I see that I have `setVisibilityFilter` dispatch here, so I will change this to call this `setVisibilityFilter` action creator with `ownProps.filter` as the argument and is going to return the action that needs to be dispatched, so I'm declaring this `setVisiblityFilter` function.

``` javascript
const mapDispatchToLinkProps = ( ... ) => {
  onClick: () => {
    dispatch(
      setVisibilityFilter(ownProps.filter)
    );
  }
}
```
This is what I call an action creator, because it takes the arguments about the action and it returns the action object with the type `SET_VISIBILITY_FILTER` and the `filter` itself.

``` javascript
const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
```
You might think that this kind of code is boilerplate and you'd rather dispatch the action in line inside the component. However, don't underestimate how action creators document your software, because they tell your team what kinds of actions the components can dispatch, and this kind of information can be invaluable in large applications.

I will now scroll down to the last place where I call `dispatch` with an inline action object. I will now extract that to `toggleTodo` action creator, to which I pass the `id` of the todo as the argument.

```javascript
const mapDispatchToTodoListProps = (
  dispatch
) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};
```
I'm now scrolling up to my action creators and I will add a new one that I call `toggleTodo`. It accepts the `id` as the argument and it returns the action of the type, `TOGGLE_TODO`, and this `id`.

```javascript
const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
```
Let's take a moment to consider how convenient it is to have all the action creators in a single place so that I can use them from components and tests without worrying about the action's internal structure.

Know that whether you use action creators or not, the data flow is exactly the same, because I just call the action creator to get the action object and then I call `dispatch` just like I did before, passing the action.