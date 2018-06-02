import styled from 'react-emotion'
import { css } from 'emotion'
import lessons from '../lessons'
import capitalize from 'chicago-capitalize'
import Scrollspy from 'react-scrollspy'

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

export default () => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      background-color: white; 
      position: absolute; 
      margin-top: 10px; 
      padding: 20px;  
      box-shadow: 0 0 10px -2px rgba(0,0,0,0.4); 
      max-height: 80vh; 
      overflow-y: scroll;
      border-radius: 5px;
      width: 83vw; 
      ${mq.medium(css`
      width: 360px; 
      `)};

      ::-webkit-scrollbar {
        width: 8px;
        
      }
      /* Track */
      ::-webkit-scrollbar-track {
        background: white; 
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #f1f1f1; 
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: lightgray; 
      }
    `}
  >
    <h4 className={css`text-transform: uppercase; font-size: 0.8rem; margin:0; padding:0; opacity: 0.6;`}>Table of Contents</h4>
      <ul
        className={css`
          list-style-type: none;
          margin: 0;
          padding-top: 10px;
        `}
      >
        {lessons.map((lesson, index) => (
         
          <li className={css`padding:0; margin:0;`} key={lesson.slug}>
            <Scrollspy items={[`${lesson.title}`]} currentClassName={css`color: #6A30F2; text-decoration: underline; text-decoration-color: #D9CAFD;`}>
            <a
              className={css`
                text-decoration: none;
                font-size: 12px;
                color: black;
              `}
              href={`#${lesson.slug}`}
            >
              <span className={css`opacity: 0.5;`}>{index < 10 && '0'}
              {index}.</span> {capitalize(lesson.title)}
            </a>
            </Scrollspy>
          </li>
         
          
        ))}
      </ul>

  </div>
)
