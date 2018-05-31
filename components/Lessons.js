import styled from 'react-emotion'
import { css } from 'emotion'
import lessons from '../lessons'
import capitalize from 'chicago-capitalize'

const LessonWrapper = styled('div')`
  flex: 1 1;
  max-width: 800px;
`

export default () => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 50px;
    `}
  >
    <h4>Table of Contents</h4>
    <div>
      <ul
        className={css`
          list-style-type: none;
        `}
      >
        {lessons.map((lesson, index) => (
          <li>
            <a
              className={css`
                text-decoration: none;
              `}
              href={`#${lesson.slug}`}
            >
              {index}. {capitalize(lesson.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {lessons.map((lesson, index) => {
      const Lesson = lesson.component
      return (
        <article
          key={lesson.slug}
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 50px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            `}
          >
            <div>
              <h3 id={lesson.slug}>
                <span
                  className={css`
                    color: darkgrey;
                  `}
                >
                  {index}.
                </span>{' '}
                {capitalize(lesson.title)}
              </h3>
            </div>
            <div
              className={css`
                padding: 30px;
              `}
            >
              <a
                className={css`
                  text-decoration: none;
                `}
                target="_blank"
                href={`https://egghead.io/lessons/${lesson.slug}??utm_source=microsite`}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background: black;
                    color: white;
                    font-size: 14px;
                    text-decoration: none;
                    padding: 10px;
                  `}
                >
                  <img
                    className={css`
                      width: 24px;
                      height: 24px;
                      padding-right: 7px;
                    `}
                    src="/static/eggo.svg"
                    alt="egghead logo"
                  />{' '}
                  watch this lesson
                </div>
              </a>
            </div>
          </div>
          <LessonWrapper>
            <Lesson />
          </LessonWrapper>
        </article>
      )
    })}
  </div>
)
