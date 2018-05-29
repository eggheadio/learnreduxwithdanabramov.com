In the previous session, we implemented the `Provider` component that uses the **react advanced context feature** to make this tool from the props available to every component in our app.

If we pass it through the `Provider`, we can read it in any other component from the context, which is really convenient for the **container components**. In fact, this is so convenient that you don't need to actually write the `Provider` yourself, because it is included in a special library called **React-Redux**.

Note that it is **not the same as Redux**. This is a different library. These are react bindings to the Redux library. You can import the `Provider` by [destructuring](https://egghead.io/lessons/ecmascript-6-destructuring-assignment) the react-redux global object in JS bin, or if you use Babel, and something like NPM, you can import `Provider` with the braces, because it's a named expert from React-Redux package. Or if you write ES5 code, you can write `var Provider = require('react-redux').Provider;`

``` javascript
const { Provider } = ReactRedux;
// import { Provider } from 'react-redux';
// var Provider = require('react-redux').Provider;
```
Just like the `Provider` we wrote before, the `Provider` that comes with react-redux exposes this `store` you passed through. There's a prop on the context so the components can specify the `contextTypes`, and then use this context `store` to subscribe to the `store` updates and dispatch actions.