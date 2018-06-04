import styled from 'react-emotion'
import { css, cx } from 'emotion'
import lessons from '../lessons'
import capitalize from 'chicago-capitalize'
import Button from './Button'

const WatchButton = styled('div')`${Button}`

const LessonWrapper = styled('div')`
  flex: 1 1;
  max-width: 800px;
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


export default () => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    `}
  >
  <div className={css`
  max-width: 800px;
  `}>
     <h4>Table of Contents</h4>
    <div>
      <ul
        className={css`
          list-style-type: none;
          column-count: 1;
          ${mq.medium(css`
            column-count: 2;
            column-fill: balance;
          `)};
        `}
      >
        {lessons.map((lesson, index) => (
          <a
          className={css`
            text-decoration: none;
            color: inherit;
            font-size: 0.8rem;
          `}
          href={`#${lesson.slug}`}
          key={lesson.title}
        >
          <li className={css`
          transition: all 250ms ease-in;
          line-height: 1.2rem;
          padding: 10px;
          &:hover {
            transition: all 250ms ease-out;
            box-shadow: 0 5px 20px -5px rgba(0,0,0,0.1);
            color: #6A30F2;
          }
          `}>            
              <span className={css`opacity: 0.6; font-size: 0.65rem;`}>{index < 10 && '0'}
              {index}.</span> {capitalize(lesson.title)}
          </li>
          </a>
          
        ))}
      </ul>
    </div> 
    </div>
    <hr/>
    {lessons.map((lesson, index) => {
      const Lesson = lesson.component
      return (
        <article
          id={lesson.title}
          key={lesson.slug}
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 50px 1rem 0 1rem;
            max-width: 800px;
          `}
        >
          <div
              className={css`
              display: column;
              flex-direction: row;
              ${mq.medium(css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              `)};
            `}
          >
              <h2 id={lesson.slug} className={css`line-height: 2.2rem; max-width: 580px;`}>
                <span
                  className={css`
                    color: #6A30F2;
                  `}
                >
                  {index}.
                </span>{' '}
                {capitalize(lesson.title)}
              </h2>
              <a
                className={css`
                  text-decoration: none;
                  
                `}
                target="_blank"
                href={`https://egghead.io/lessons/${lesson.slug}??utm_source=microsite`}
              > 
              <div>
                <WatchButton>
                <span className={css`
                padding-left: 10px;
                `}>
                Watch this lesson
                </span>
                </WatchButton>
                </div>
              </a>
          
          </div>
          
          <LessonWrapper>
            <Lesson/>
          </LessonWrapper>
          
        </article>
      )
    })}
  </div>
)
