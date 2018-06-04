import { Component } from 'react'
import styled, { hydrate, injectGlobal, keyframes } from 'react-emotion'
import { css, cx } from 'emotion'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Head from 'next/head'
import Lessons from '../components/Lessons'
import codeStyles from '../components/CodeStyles'
import CourseDescription from '../components/CourseDescription.md'
import Eggo from '../components/Eggo'
import Animation from '../components/Animation'
import Toggle from '../components/Toggle'
import Scrollspy from 'react-scrollspy'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'


let ReactGA
if (process.browser) {
  ReactGA = require('react-ga') // eslint-disable-line global-require
}

if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    background: white;
    min-height: 100%;
    font-family:  -apple-system, Helvetica, system-ui, Arial, sans-serif;
    font-size: 1rem;
  }
  img {
    max-width: 100%;
  }
  pre {
    background: #fafafa;
    padding: 25px;
    max-width: 90vw;
    overflow-x: auto;
    white-space: pre-wrap;
  }
  pre:focus {
    width: min-content;
  }
  code {
    max-width: 90vw;
    word-wrap: break-word;
  }
  p {
    line-height: 1.8rem;
  }
  h1, h2, h3, h4 {
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    font-weight: 300;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1rem;
    opacity: 0.7;
    line-height: 1.6rem;
  }
  h4 {
    font-weight: 500;
  }
  h5 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.4rem;
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    color: black;
  }
  ${codeStyles}
`

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  tallPhone: '(max-width: 360px) and (min-height: 740px)'
}

const mq = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
    let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
    accumulator[label] = cls =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {}
)

const WatchButton = styled('div')`
${Button}`

const h1 = css`
${mq.medium(css` font-size: 3.2rem; line-height: 4rem; font-weight: 500; `)};
font-size: 2.4rem; line-height: 3.2rem; 
margin-bottom: 0;
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
          <title>Learn Redux with Dan Abramov</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="google-site-verification" content="IIrF63zU-1tJ9wTakA176fZd_hNrbW1QD_5oticuUv0" />
          <meta
            name="description"
            content="Learn how to use Redux in your React apps in the tutorial from the creator of Redux, Dan Abramov."
          />

          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:image" content="/static/og-image.jpg" />
          <meta property="og:image:width" content="279" />
          <meta property="og:image:height" content="279" />
          <meta property="og:title" content="Learn Redux for React with Dan Abramov" />
          <meta
            property="og:description"
            content="Learn how to use Redux in your React apps in the tutorial from the creator of Redux, Dan Abramov."
          />
          <meta property="og:url" content="https://learnreduxwithdanabramov.com/" />
        </Head>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >

        <header 
          className={css`
          background-image: radial-gradient(circle farthest-corner at 50% 50%, #262333, #131119);
          color: white;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          min-height: 640px;
          padding-bottom: 8.5rem;
          overflow: hidden;
          position: relative;
          z-index: 1;
        `}>

        <Animation speed='6s' />

          <div className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            max-width: 520px;
            padding: 0 2rem;
          `}>

          <h1 className={h1}>
            Learn Redux with Dan Abramov
          </h1>

          <h3>
            Redux presents a sane and scalable way to manage complex state in your React applications.
          </h3>

            <a
              className={css`
                margin-top: 2rem;
                text-decoration: none;
              `}
              target="_blank"
              href="https://egghead.io/courses/getting-started-with-redux?utm_source=microsite"
            >
              <WatchButton>
                <span className={css`
                padding-left: 10px;
                `}
                >
                Watch the Screencasts on egghead.io
                </span>
              </WatchButton>
            </a>
         </div>
          </header>

         <div className={css`
         background: white;
         box-shadow: 0 20px 100px -30px rgba(0,0,0,0.3);
         margin-top: -2rem;
         padding: 2rem 1rem 1rem 1rem;
         ${mq.medium(css` padding: 2.5rem 4rem 2.5rem 4rem; `)};
         border-radius: 3px;
         z-index: 2;
         `}>
          <div
            className={css`
              flex: 1 1 320px;
              max-width: 700px;
              &::first-letter {
                initial-letter: 2;
              }
            `}
          >
            <CourseDescription />
          </div>
          </div>
          <div
            className={css`
              margin-top: 3.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              max-width: 800px;
              padding: 0 3rem;
            `}
          >
            <img
              className={css`
                width: 160px;
                height: 160px;
                border-radius: 100%;
                box-shadow: 0 20px 100px -30px rgba(0,0,0,0.5);
              `}
              src="/static/dan-abramov-photo.png"
              alt="Dan Abramov"
            />
            <div
              className={css`
                flex-grow: 2;
                padding: 20px;
              `}
            />
            <div className={css`text-align: center;`}>
            <h4 className={css`
                  margin:0; 
                  padding:0; 
                  font-size: 1.5rem; 
                  line-height: 2rem;
            `}>
                  Dan Abramov works at Facebook on React
            </h4>
            <p className={css`margin: 0.5rem 0 0 0; font-size: 0.9rem; opacity: 0.8;`}>He is the co-author of Redux and Create React App</p>
            <div className={css`
                margin-top: 1rem;
            `}>
            <SocialLinks />
            </div>
            </div>
          </div>
        </div>
        <Toggle />
        <Lessons />
      </div>
    )
  }
}

export default App
