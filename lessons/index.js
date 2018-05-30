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
    slug: 'javascript-redux-the-single-immutable-state-tree'
  },
  {
    component: StateChangesWithActions,
    title: 'Describing State Changes with Redux Actions',
    slug: 'javascript-redux-describing-state-changes-with-actions'
  },
  {
    component: PureAndImpureFunctions,
    title: 'Pure and Impure Functions in Redux',
    slug: 'javascript-redux-pure-and-impure-functions'
  },
  {
    component: ReducerFunction,
    title: 'The Redux render function',
    slug: 'javascript-redux-the-reducer-function'
  },
  {
    component: CounterReducer,
    title: 'Writing a counter reducer for Redux with tests',
    slug: 'javascript-redux-writing-a-counter-reducer-with-tests'
  },
  {
    component: DispatchAndSubscribe,
    title: 'Redux Store methods getState, dispatch, and subscribe',
    slug: 'javascript-redux-store-methods-getstate-dispatch-and-subscribe'
  },
  {
    component: ImplementStore,
    title: 'Implementing Redux store from scratch',
    slug: 'javascript-redux-implementing-store-from-scratch'
  },
  {
    component: CounterExample,
    title: 'Redux Counter Example',
    slug: 'javascript-redux-react-counter-example'
  },
  {
    component: AvoidingArrayMutations,
    title: 'Avoiding Array Mutations with concat, slice, and spread',
    slug: 'javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread'
  },
  {
    component: AvoidingObjectMutations,
    title: 'Avoiding object mutations with object assign and spread',
    slug: 'javascript-redux-avoiding-object-mutations-with-object-assign-and-spread'
  },
  {
    component: TodoListReducerAddTodo,
    title: 'Writing a todo list reduce in redux: Adding a todo',
    slug: 'javascript-redux-writing-a-todo-list-reducer-adding-a-todo'
  },
  {
    component: TodoListReducerToggleTodo,
    title: 'Writing a todo list reduce in redux: Toggling a todo',
    slug: 'javascript-redux-writing-a-todo-list-reducer-toggling-a-todo'
  },
  {
    component: ReducerCompositionArrays,
    title: 'Redux reducer composition with Arrays',
    slug: 'javascript-redux-reducer-composition-with-arrays'
  },
  {
    component: ReducerCompositionObjects,
    title: 'Redux Reducer composition with objects',
    slug: 'javascript-redux-reducer-composition-with-objects'
  },
  {
    component: ReducerCompositionCombine,
    title: 'Redux reducer composition with combineReducers',
    slug: 'javascript-redux-reducer-composition-with-combinereducers'
  },
  {
    component: ImplementCombineReducers,
    title: 'Implement redux combineReducers from scratch',
    slug: 'javascript-redux-implementing-combinereducers-from-scratch'
  },
  {
    component: AddTodo,
    title: 'Redux Example: Adding a Todo to a List',
    slug: 'javascript-redux-react-todo-list-example-adding-a-todo'
  },
  {
    component: ToggleTodo,
    title: 'Redux Example: Toggling a Todo in the List',
    slug: 'javascript-redux-react-todo-list-example-toggling-a-todo'
  },
  {
    component: FilteringTodos,
    title: 'Redux Example: Filtering Todos in a List',
    slug: 'javascript-redux-react-todo-list-example-filtering-todos'
  },
  {
    component: ExtractPresentationalTodoList,
    title: 'Extracting a Redux Presentational Component for the Todo List',
    slug: 'javascript-redux-extracting-presentational-components-todo-todolist'
  },
  {
    component: ExtractPresentationalFilterLink,
    title: 'Extracting a Redux Presentational Component for the AddTodo, Footer, and FilterLink',
    slug: 'javascript-redux-extracting-presentational-components-addtodo-footer-filterlink'
  },
  {
    component: ExtractContainerFilterLink,
    title: 'Extracting a Redux Container Component for FilterLink',
    slug: 'javascript-redux-extracting-container-components-filterlink'
  },
  {
    component: ExtractContainerAddTodo,
    title: 'Extracting a Redux Container Component for VisibleTodoList and AddTodo',
    slug: 'javascript-redux-extracting-container-components-visibletodolist-addtodo'
  },
  {
    component: PassStoreViaProps,
    title: 'Passing the Redux store down explicitly via props',
    slug: 'javascript-redux-passing-the-store-down-explicitly-via-props'
  },
  {
    component: PassStoreViaContext,
    title: 'Passing the Redux Store Implicitly via Context',
    slug: 'javascript-redux-passing-the-store-down-implicitly-via-context'
  },
  {
    component: PassStoreViaProvider,
    title: 'Passing the Redux Store Down with Provider from react-redux',
    slug: 'javascript-redux-passing-the-store-down-with-provider-from-react-redux'
  },
  {
    component: GenerateWithConnectTodoList,
    title: 'Generating redux containers with connect from react-redux for VisibleTodoList',
    slug: 'javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist'
  },
  {
    component: GenerateWithConnectAddTodo,
    title: 'Generating redux containers with connect from react-redux for AddTodo',
    slug: 'javascript-redux-generating-containers-with-connect-from-react-redux-addtodo'
  },
  {
    component: GenerateWithConnectFooter,
    title: 'Generating redux containers with connect from react-redux for FooterLink',
    slug: 'javascript-redux-generating-containers-with-connect-from-react-redux-footerlink'
  },
  {
    component: ExtractActionCreators,
    title: 'Extracting Redux Action Creators',
    slug: 'javascript-redux-extracting-action-creators'
  }
]
