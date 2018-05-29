Finally, let's take a look at the `FilterLink` **container component** that renders a `Link` with an active property and a click handler. First, I will write the `mapStateToProps` function, which I'll call, `mapStateToLinkProps`, because I have everything in a single file.

```javascript
const mapStateToLinkProps = (
  state
) => {

};
```
It's going to accept the state of the Redux store and return the props that should be passed to the `Link`. We only have a single such prop called, `active` that determines whether the `Link` displays the current `Visibility Filter`.

``` javascript
const mapStateToLinkProps = (
  state
) => {
  return {
    active:
      props.filter ===
      state.visibilityFilter
  }
};
```
When I paste this expression from the `render` method, I see that it references the `filter` prop of the `FilterLink` component. To tell whether a `Link` is `active`, we need to compare this prop with the `visibilityFilter` value from the Redux store `state`.

It is fairly common to use the container props when calculating the child props, so this is why props are passed as a second argument to `mapStateToProps` I will rename it to `ownProps` to make it clear we are talking about the container component's `ownProps` and not the props that are passed through the child, which is the return value of `mapStateToProps`

``` javascript
const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  }
};
```
The second function I'm writing here is `mapDispatchToProps` or, to avoid name clashes in this JS bin, `mapDispatchToLinkProps` The only argument so far is the `dispatch` function. I'm going to need to look at the container component I wrote by hand to see what props depend on the `dispatch` function.

``` javascript
const mapDispatchToLinkProps= (
  dispatch
) => {
  retrun {

  };
}
```
In this case, this is just the click handler where I dispatch the `SET_VISIBLITY_FILTER` direction. The only prop I'm passing down is called, `onClick` I declare it as an arrow function with no arguments, and I paste the `dispatch` code. But it references the props again, so I need to add `ownProps` as an argument, the second argument, to `mapStateToLinkProps` function too.

``` javascript
const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  onClick: () => {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: ownProps.filter
    })
  };
}
```
Finally, I will call the `connect` function from `ReactRedux` library to generate the `FilterLink` container component. I pass the relevant `mapStateToLinkProps` function as the first argument, the `mapDispatchToLinkProps` as the second argument, and I call the function again with a `Link` component which should be rendered. Now I can remove the old `FilterLink` implementation.

``` javascript
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);
```
Let's recap the data flow in this example. The `Footer` component renders three `FilterLink`, and each of them has a different `filter` prop that specifies which `filter` it corresponds to. 

``` javascript
const Footer = () => {
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>

    ...

  </p>
}
```
This prop will be available on the `ownProps` object that both `mapDispatchToLinkProps` and `mapStateToLinkProps` will receive as the second argument.

``` javascript
const mapStateToLinkProps = (
  state,
  ownProps
) => {...};
const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {...}
```
We pass these two functions through the `connect` call, which will return a container component called, `FilterLink`. 

``` javascript
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);
```
The `FilterLink` will take the props that will return from the `mapDispatchToProps` and `mapStateToProps` and pass them as props to the `Link` component that it wraps.

We can now use the `FilterLink` container component and specify just the filter, but the underlying `Link` component will have received the calculated `active` and `onClick` values.
