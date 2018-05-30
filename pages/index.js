import { Component } from 'react'
import styled, { hydrate, keyframes, css, injectGlobal } from 'react-emotion'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Head from 'next/head'
import SingleImmutableTree from '../lessons/javascript-redux-the-single-immutable-state-tree.md'
import StateChangesWithActions from '../lessons/javascript-redux-describing-state-changes-with-actions.md'
import PureAndImpureFunctions from '../lessons/javascript-redux-pure-and-impure-functions.md'
import ReducerFunction from '../lessons/javascript-redux-the-reducer-function.md'
import CounterReducer from '../lessons/javascript-redux-writing-a-counter-reducer-with-tests.md'
import DispatchAndSubscribe from '../lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe.md'
import ImplementStore from '../lessons/javascript-redux-implementing-store-from-scratch.md'
import CounterExample from '../lessons/javascript-redux-react-counter-example.md'
import AvoidingArrayMutations from '../lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread.md'
import AvoidingObjectMutations from '../lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread.md'
import TodoListReducerAddTodo from '../lessons/javascript-redux-writing-a-todo-list-reducer-adding-a-todo.md'
import TodoListReducerToggleTodo from '../lessons/javascript-redux-writing-a-todo-list-reducer-toggling-a-todo.md'
import ReducerCompositionArrays from '../lessons/javascript-redux-reducer-composition-with-arrays.md'
import ReducerCompositionObjects from '../lessons/javascript-redux-reducer-composition-with-objects.md'
import ReducerCompositionCombine from '../lessons/javascript-redux-reducer-composition-with-combinereducers.md'
import ImplementCombineReducers from '../lessons/javascript-redux-implementing-combinereducers-from-scratch.md'
import AddTodo from '../lessons/javascript-redux-react-todo-list-example-adding-a-todo.md'
import ToggleTodo from '../lessons/javascript-redux-react-todo-list-example-toggling-a-todo.md'
import FilteringTodos from '../lessons/javascript-redux-react-todo-list-example-filtering-todos.md'
import ExtractPresentationalTodoList from '../lessons/javascript-redux-extracting-presentational-components-todo-todolist.md'
import ExtractPresentationalFilterLink from '../lessons/javascript-redux-extracting-presentational-components-addtodo-footer-filterlink.md'
import ExtractContainerFilterLink from '../lessons/javascript-redux-extracting-container-components-filterlink.md'
import ExtractContainerAddTodo from '../lessons/javascript-redux-extracting-container-components-visibletodolist-addtodo.md'
import PassStoreViaProps from '../lessons/javascript-redux-passing-the-store-down-explicitly-via-props.md'
import PassStoreViaContext from '../lessons/javascript-redux-passing-the-store-down-implicitly-via-context.md'
import PassStoreViaProvider from '../lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux.md'
import GenerateWithConnectTodoList from '../lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist.md'
import GenerateWithConnectAddTodo from '../lessons/javascript-redux-generating-containers-with-connect-from-react-redux-addtodo.md'
import GenerateWithConnectFooter from '../lessons/javascript-redux-generating-containers-with-connect-from-react-redux-footerlink.md'
import ExtractActionCreators from '../lessons/javascript-redux-extracting-action-creators.md'

let ReactGA
if (process.browser) {
  ReactGA = require('react-ga') // eslint-disable-line global-require
}

if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    padding: 3rem 1rem;
    margin: 0;
    background: papayawhip;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
  }
  img {
    max-width: 800px;
  }
  pre {
    background: #fafafa;
    padding: 25px;
  }
  .hljs-comment,
  .hljs-quote {
    color: #969896;
  }

  /* Tomorrow Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: #cc6666;
  }

  /* Tomorrow Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-meta,
  .hljs-link {
    color: #de935f;
  }

  /* Tomorrow Yellow */
  .hljs-attribute {
    color: #f0c674;
  }

  /* Tomorrow Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #b5bd68;
  }

  /* Tomorrow Blue */
  .hljs-title,
  .hljs-section {
    color: #81a2be;
  }

  /* Tomorrow Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #b294bb;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    background: #1d1f21;
    color: #c5c8c6;
    padding: 0.5em;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    if (process.browser) {
      ReactGA.initialize('UA-36512724-5')
    }
  }

  componentDidMount() {
    const page = window.location.pathname
    ReactGA.set({ page })
    ReactGA.pageview(page)
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="google-site-verification" content="IIrF63zU-1tJ9wTakA176fZd_hNrbW1QD_5oticuUv0" />
          <meta
            name="description"
            content="Learn how to use Redux in your React apps in the tutorial from the creator of Redux, Dan Abramov."
          />
          <title>Learn Redux with Dan Abramov</title>
        </Head>

        <h1>Learn Redux with Dan Abramov</h1>
        <p>
          <a href="https://egghead.io/lessons/react-redux-the-single-immutable-state-tree?utm_source=microsite">
            watch the screencasts on egghead.io
          </a>
        </p>
        <div style={{ maxWidth: '825px' }}>
          <SingleImmutableTree />
          <StateChangesWithActions />
          <PureAndImpureFunctions />
          <ReducerFunction />
          <CounterReducer />
          <DispatchAndSubscribe />
          <ImplementStore />
          <CounterExample />
          <AvoidingArrayMutations />
          <AvoidingObjectMutations />
          <TodoListReducerAddTodo />
          <TodoListReducerToggleTodo />
          <ReducerCompositionArrays />
          <ReducerCompositionObjects />
          <ReducerCompositionCombine />
          <ImplementCombineReducers />
          <AddTodo />
          <ToggleTodo />
          <FilteringTodos />
          <ExtractPresentationalTodoList />
          <ExtractContainerFilterLink />
          <ExtractContainerFilterLink />
          <ExtractContainerAddTodo />
          <PassStoreViaProps />
          <PassStoreViaContext />
          <PassStoreViaProvider />
          <GenerateWithConnectTodoList />
          <GenerateWithConnectAddTodo />
          <GenerateWithConnectFooter />
          <ExtractActionCreators />
        </div>
      </div>
    )
  }
}

export default App
