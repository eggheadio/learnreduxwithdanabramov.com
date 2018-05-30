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
          <div>
            <h3>{capitalize(lesson.title)}</h3>
          </div>
          <LessonWrapper>
            <Lesson />
          </LessonWrapper>
        </div>
      )
    })}
  </div>
)
