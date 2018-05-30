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
    `}
  >
    {lessons.map(lesson => {
      const Lesson = lesson.component
      return (
        <div
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
              <h3>{capitalize(lesson.title)}</h3>
            </div>

            <div>
              <a
                className={css`
                  background: black;
                  color: white;
                  font-size: 14px;
                  text-decoration: none;
                  padding: 10px;
                `}
                href={`https://egghead.io/lessons/${lesson.slug}??utm_source=microsite`}
              >
                watch this lesson
              </a>
            </div>
          </div>
          <LessonWrapper>
            <Lesson />
          </LessonWrapper>
        </div>
      )
    })}
  </div>
)
