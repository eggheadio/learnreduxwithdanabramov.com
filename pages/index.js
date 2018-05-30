import { Component } from 'react'
import styled, { hydrate, injectGlobal } from 'react-emotion'
import { css } from 'emotion'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Head from 'next/head'
import Lessons from '../components/Lessons'
import codeStyles from '../components/CodeStyles'
import CourseDescription from '../components/CourseDescription.md'

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
    background: white;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
  }
  img {
    max-width: 100%;
  }
  pre {
    background: #fafafa;
    padding: 25px;
  }
  ${codeStyles}
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
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <div>
            <h1>Learn Redux with Dan Abramov</h1>
          </div>
          <div>
            <h3>Redux presents a sane and scalable way to manage complex state in your React applications.</h3>
          </div>

          <div
            className={css`
              padding: 30px;
            `}
          >
            <a
              className={css`
                background: black;
                color: white;
                font-size: 14px;
                text-decoration: none;
                padding: 10px;
              `}
              href="https://egghead.io/lessons/react-redux-the-single-immutable-state-tree?utm_source=microsite"
            >
              watch the screencasts on egghead.io
            </a>
          </div>
          <div
            className={css`
              flex: 1 1 320px;
              max-width: 800px;
              padding-top: 50px;
            `}
          >
            <CourseDescription />
          </div>
        </div>

        <Lessons />
      </div>
    )
  }
}

export default App
