The second principle of **Redux** is that the **state tree is read only**. You cannot modify or write to it. Instead, anytime you want to change the state, you need to dispatch an action.

An **action** is a **plain JavaScript object** describing the change. Just like the state is the minimal representation of the data in your app, the action is the minimal representation of the change to that data.

![Describing Actions](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/DescribingActions.png)

The structure of the action object is up to you. The only requirement is that it has a `type` property, which is not `undefined`. We suggest using strings, because they are serializable.

In different apps, you're going to have different types of actions. For example, in a `counter` app we only have `INCREMENT` and `DECREMENT` actions. We don't pass any additional information, because this is all that is needed to describe these changes.

But say, for a counter list example, we have more actions. We have `ADD_COUNTER` action, we have a `REMOVE_COUNTER` action, and anytime I change the individual counter, you can see that the `INCREMENT` and the `DECREMENT` actions now have index. Because we need to describe which particular counter was changed.

![Multiple Actions](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/MultipleActions.png)

This approach scales well to medium and complex applications. Anytime I add a todo, the components don't really know how exactly it's been added. All they know is that they need to dispatch an action with a type, `ADD_COUNTER`, and the `text` of the todo and a sequential `id`.

If I toggle a todo, again, the components don't know how it happens. All they need to do is to dispatch an action with a type, `TOGGLE_TODO` and pass in the `id` of the todo I want to toggle.

![Complex Example](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/getting-started-with-redux/ComplexExample.png)

The same is true for the `visibilityFilter`. Anytime I click on this control to change the currently visible todos, what really happens is this component dispatches an action with a type, `SET_VISIBILITY_FILTER`, and pass in the desired filter string, `filter` field.

But these are all plain objects, describing what happens in a app.

Now you know the second principle of Redux -- the state is read only. The only way to change the state tree is by dispatching an action. An action is a plain JavaScript object, describing in the minimal way what changed in the application. Whether it is initiated by a network request or by user interaction, any data that gets into the Redux application gets there by actions.
