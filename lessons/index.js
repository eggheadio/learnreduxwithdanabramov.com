import SingleImmutableTree from './javascript-redux-the-single-immutable-state-tree.md'
import StateChangesWithActions from './javascript-redux-describing-state-changes-with-actions.md'
import PureAndImpureFunctions from './javascript-redux-pure-and-impure-functions.md'
import ReducerFunction from './javascript-redux-the-reducer-function.md'
import CounterReducer from './javascript-redux-writing-a-counter-reducer-with-tests.md'
import DispatchAndSubscribe from './javascript-redux-store-methods-getstate-dispatch-and-subscribe.md'
import ImplementStore from './javascript-redux-implementing-store-from-scratch.md'
import CounterExample from './javascript-redux-react-counter-example.md'
import AvoidingArrayMutations from './javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread.md'
import AvoidingObjectMutations from './javascript-redux-avoiding-object-mutations-with-object-assign-and-spread.md'
import TodoListReducerAddTodo from './javascript-redux-writing-a-todo-list-reducer-adding-a-todo.md'
import TodoListReducerToggleTodo from './javascript-redux-writing-a-todo-list-reducer-toggling-a-todo.md'
import ReducerCompositionArrays from './javascript-redux-reducer-composition-with-arrays.md'
import ReducerCompositionObjects from './javascript-redux-reducer-composition-with-objects.md'
import ReducerCompositionCombine from './javascript-redux-reducer-composition-with-combinereducers.md'
import ImplementCombineReducers from './javascript-redux-implementing-combinereducers-from-scratch.md'
import AddTodo from './javascript-redux-react-todo-list-example-adding-a-todo.md'
import ToggleTodo from './javascript-redux-react-todo-list-example-toggling-a-todo.md'
import FilteringTodos from './javascript-redux-react-todo-list-example-filtering-todos.md'
import ExtractPresentationalTodoList from './javascript-redux-extracting-presentational-components-todo-todolist.md'
import ExtractPresentationalFilterLink from './javascript-redux-extracting-presentational-components-addtodo-footer-filterlink.md'
import ExtractContainerFilterLink from './javascript-redux-extracting-container-components-filterlink.md'
import ExtractContainerAddTodo from './javascript-redux-extracting-container-components-visibletodolist-addtodo.md'
import PassStoreViaProps from './javascript-redux-passing-the-store-down-explicitly-via-props.md'
import PassStoreViaContext from './javascript-redux-passing-the-store-down-implicitly-via-context.md'
import PassStoreViaProvider from './javascript-redux-passing-the-store-down-with-provider-from-react-redux.md'
import GenerateWithConnectTodoList from './javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist.md'
import GenerateWithConnectAddTodo from './javascript-redux-generating-containers-with-connect-from-react-redux-addtodo.md'
import GenerateWithConnectFooter from './javascript-redux-generating-containers-with-connect-from-react-redux-footerlink.md'
import ExtractActionCreators from './javascript-redux-extracting-action-creators.md'

export default [
  {
    component: SingleImmutableTree,
    title: 'The Single Immutable State Tree in Redux',
    slug: 'javascript-redux-the-single-immutable-state-tree',
    summary: 'How is Redux different from Backbone or Flux? Learn the first principle of Redux—the single immutable state tree.'
  },
  {
    component: StateChangesWithActions,
    title: 'Describing State Changes with Redux Actions',
    slug: 'javascript-redux-describing-state-changes-with-actions',
    summary: 'You will learn how Redux asks you to describe every change in the application state as a plain JavaScript object called “action”.'
  },
  {
    component: PureAndImpureFunctions,
    title: 'Pure and Impure Functions in Redux',
    slug: 'javascript-redux-pure-and-impure-functions',
    summary: 'Some functions are more predictable than others. You will learn the difference between the pure and impure functions. Understanding this difference is essential for writing Redux applications.'
  },
  {
    component: ReducerFunction,
    title: 'The Redux render function',
    slug: 'javascript-redux-the-reducer-function',
    summary: 'There is something in common between all Redux applications. They have to implement the reducer: a function that calculates the next state tree based on the previous state tree and the action being dispatched.'
  },
  {
    component: CounterReducer,
    title: 'Writing a counter reducer for Redux with tests',
    slug: 'javascript-redux-writing-a-counter-reducer-with-tests',
    summary: 'You will learn how to write the reducer for the counter application in a test driven development way, as well as the conventions in implementing reducers.'
  },
  {
    component: DispatchAndSubscribe,
    title: 'Redux Store methods getState, dispatch, and subscribe',
    slug: 'javascript-redux-store-methods-getstate-dispatch-and-subscribe',
    summary: 'We will learn about the Redux Store and demonstrate how its three methods let us implement a counter application.'
  },
  {
    component: ImplementStore,
    title: 'Implementing Redux store from scratch',
    slug: 'javascript-redux-implementing-store-from-scratch',
    summary: 'Learn how to build a reasonable approximation of the Redux Store in 20 lines. No magic!'
  },
  {
    component: CounterExample,
    title: 'Redux Counter Example',
    slug: 'javascript-redux-react-counter-example',
    summary: 'Before you use the React Redux bindings, learn how to create a complete simple application with just React and Redux.'
  },
  {
    component: AvoidingArrayMutations,
    title: 'Avoiding Array Mutations with concat, slice, and spread',
    slug: 'javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread',
    summary: 'Learn how to avoid mutating arrays using concat(), slice(), and the ES6 array spread operator.'
  },
  {
    component: AvoidingObjectMutations,
    title: 'Avoiding object mutations with object assign and spread',
    slug: 'javascript-redux-avoiding-object-mutations-with-object-assign-and-spread',
    summary: 'Learn how to use Object.assign() and the spread operator proposed for ES7 to avoid mutating objects.'
  },
  {
    component: TodoListReducerAddTodo,
    title: 'Writing a todo list reduce in redux: Adding a todo',
    slug: 'javascript-redux-writing-a-todo-list-reducer-adding-a-todo',
    summary: 'Learn how to implement adding a todo in a todo list application reducer.'
  },
  {
    component: TodoListReducerToggleTodo,
    title: 'Writing a todo list reduce in redux: Toggling a todo',
    slug: 'javascript-redux-writing-a-todo-list-reducer-toggling-a-todo',
    summary: 'Learn how to implement toggling a todo in a todo list application reducer.'
  },
  {
    component: ReducerCompositionArrays,
    title: 'Redux reducer composition with Arrays',
    slug: 'javascript-redux-reducer-composition-with-arrays',
    summary: 'Learn the fundamental pattern of building maintainable Redux applications: the reducer composition, and how it can be used to update items in an array.'
  },
  {
    component: ReducerCompositionObjects,
    title: 'Redux Reducer composition with objects',
    slug: 'javascript-redux-reducer-composition-with-objects',
    summary: 'Learn the fundamental pattern of building maintainable Redux applications: reducer composition, and how it can be used to update properties of an object.'
  },
  {
    component: ReducerCompositionCombine,
    title: 'Redux reducer composition with combineReducers',
    slug: 'javascript-redux-reducer-composition-with-combinereducers',
    summary: 'Learn how to use combineReducers() utility function to generate a reducer from several other reducers instead of writing it by hand.'
  },
  {
    component: ImplementCombineReducers,
    title: 'Implement redux combineReducers from scratch',
    slug: 'javascript-redux-implementing-combinereducers-from-scratch',
    summary: 'Learn how to build a reasonable approximation of the combineReducers() utility in 15 lines. No magic!'
  },
  {
    component: AddTodo,
    title: 'Redux Example: Adding a Todo to a List',
    slug: 'javascript-redux-react-todo-list-example-adding-a-todo',
    summary: 'Learn how to create a React todo list application using the reducers we wrote before.'
  },
  {
    component: ToggleTodo,
    title: 'Redux Example: Toggling a Todo in the List',
    slug: 'javascript-redux-react-todo-list-example-toggling-a-todo',
    summary: 'Learn how to create a React todo list application using the reducers we wrote before.'
  },
  {
    component: FilteringTodos,
    title: 'Redux Example: Filtering Todos in a List',
    slug: 'javascript-redux-react-todo-list-example-filtering-todos',
    summary: 'Learn how to create a React todo list application using the reducers we wrote before.'
  },
  {
    component: ExtractPresentationalTodoList,
    title: 'Extracting a Redux Presentational Component for the Todo List',
    slug: 'javascript-redux-extracting-presentational-components-todo-todolist',
    summary: 'Learn how to separate the looks from the behavior by extracting presentational components.'
  },
  {
    component: ExtractPresentationalFilterLink,
    title: 'Extracting a Redux Presentational Component for the AddTodo, Footer, and FilterLink',
    slug: 'javascript-redux-extracting-presentational-components-addtodo-footer-filterlink',
    summary: 'Learn how to separate the looks from the behavior by extracting presentational components.'
  },
  {
    component: ExtractContainerFilterLink,
    title: 'Extracting a Redux Container Component for FilterLink',
    slug: 'javascript-redux-extracting-container-components-filterlink',
    summary: 'Learn how to avoid the boilerplate of passing the props down the intermediate components by introducing more container components.'
  },
  {
    component: ExtractContainerAddTodo,
    title: 'Extracting a Redux Container Component for VisibleTodoList and AddTodo',
    slug: 'javascript-redux-extracting-container-components-visibletodolist-addtodo',
    summary: 'Learn how to avoid the boilerplate of passing the props down the intermediate components by introducing more container components.'
  },
  {
    component: PassStoreViaProps,
    title: 'Passing the Redux store down explicitly via props',
    slug: 'javascript-redux-passing-the-store-down-explicitly-via-props',
    summary: 'Learn how to pass store down as a prop to container components instead of declaring a top-level variable to prepare for easier testing and server rendered applications.'
  },
  {
    component: PassStoreViaContext,
    title: 'Passing the Redux Store Implicitly via Context',
    slug: 'javascript-redux-passing-the-store-down-implicitly-via-context',
    summary: 'Learn how to make the store object available to all components by using the advanced React feature called “context”.'
  },
  {
    component: PassStoreViaProvider,
    title: 'Passing the Redux Store Down with Provider from react-redux',
    slug: 'javascript-redux-passing-the-store-down-with-provider-from-react-redux',
    summary: 'Learn how to use the Provider that comes with React Redux instead of the hand-rolled implementation from the previous lesson.'
  },
  {
    component: GenerateWithConnectTodoList,
    title: 'Generating redux containers with connect from react-redux for VisibleTodoList',
    slug: 'javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist',
    summary: 'Learn how to write mapStateToProps() and mapDispatchToProps() functions and use connect() from React Redux library to generate container components.'
  },
  {
    component: GenerateWithConnectAddTodo,
    title: 'Generating redux containers with connect from react-redux for AddTodo',
    slug: 'javascript-redux-generating-containers-with-connect-from-react-redux-addtodo',
    summary: 'Learn how to inject dispatch() as a prop into a React component by using connect() from React Redux library.'
  },
  {
    component: GenerateWithConnectFooter,
    title: 'Generating redux containers with connect from react-redux for FooterLink',
    slug: 'javascript-redux-generating-containers-with-connect-from-react-redux-footerlink',
    summary: 'Learn how to use container’s own props inside the mapStateToProps() and mapDispatchToProps() functions.'
  },
  {
    component: ExtractActionCreators,
    title: 'Extracting Redux Action Creators',
    slug: 'javascript-redux-extracting-action-creators',
    summary: 'Learn how to keep code maintainable and self-documenting by extracting action creators from the components.'
  }
]
