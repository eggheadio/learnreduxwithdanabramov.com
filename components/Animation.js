import { Component } from 'react'
import styled, { keyframes } from 'react-emotion'
import { css, cx } from 'emotion'

const aniContainer = keyframes`
  from {
    transform: rotate(-30deg);
  }
  to {
    transform: rotate(-220deg);
  }
`
const aniBitColor = keyframes`
  from {
    background-image: linear-gradient(-177deg, #56C3F6 0%, #1A93D6 100%);
    transform: rotateZ(0deg);    
    transform: scale(1);
    transform: rotate(0);
  }
  30% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.5);
  }
  90% {
    transform: scale(1);
  }
  to {
    background-image: linear-gradient(-177deg, #7B5DC9 0%, #5F3DA0 100%);
    transform: scale(1);
  }
  100% {
    transform: rotateZ(360deg);
  }
`
const aniBitRotation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1000deg);
  }
`
const aniBitDismiss = keyframes`
from, 0% {
  opacity: 1;
  transform: translate(80px, 50px);
}
45% {
  opacity: 1;
}
50% {
  transform: translate(0, 0);
  opacity: 0;
}
to, 100% {
  opacity: 0;
}
`
const aniBitDismiss2 = keyframes`
from, 0% {
  opacity: 1;
  transform: translate(20px, -100px); 
}
45% {
  opacity: 1;
}
50% {
  transform: translate(0, 0);
  opacity: 0;
}
to, 100% {
  opacity: 0;
}
`
const aniGlow = keyframes`
from, 0% {
  background-color: rgba(233,216,255,0);
}
40% {
  background-color: rgba(233,216,255,0);
  filter: blur(10px);
}
50% {
  background-color: rgba(233,216,255,0.85);
  filter: blur(20px);
}
60% {
  filter: blur(20px);
  background-color: rgba(233,216,255,0.85);
}
to, 100% {
  filter: blur(10px);
  background-color: rgba(233,216,255,0);
}
`

export default ({ speed }) => 
    { 
    const Speed = '6s'

return ( 
  <div className={css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    `}>
  <div className={css`
    animation: ${aniContainer} ${speed} linear infinite;
    transform-origin: center;
    width: 410px;
    height: 410px;
    background: transparent;
    position: absolute;
    top: 0;
    margin-top: -285px;
    z-index:1;
    `}>
    <div className={css`
        animation: ${aniBitRotation} ${speed} linear infinite;
        position: absolute;
        `}> 
        <div className={css`
          animation: ${aniBitColor} ${speed} linear infinite;
          background-image: linear-gradient(-177deg, #56C3F6 0%, #1A93D6 100%);
          transform-origin: center;
          border-radius: 3px;
          width: 25px;
          height: 25px;
          transform: translate(20px 10px);
          box-shadow: 0 0 14px -4px rgba(0,0,0,0.31);
          filter: contrast(1.4);
          `}>
          <div className={css`
            animation: ${aniBitDismiss} ${speed} linear infinite;
            background-image: linear-gradient(-177deg, #56C3F6 0%, #1A93D6 100%);
            transform-origin: right top;
            border-radius: 3px;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 0;
            transform: rotate(-50deg);
            box-shadow: 0 0 14px -4px rgba(0,0,0,0.31);
            filter: contrast(1.4);
            `}>
            </div> 
          <div className={css`
            animation: ${aniBitDismiss2} ${speed} linear infinite;
            background-image: linear-gradient(-177deg, #56C3F6 0%, #1A93D6 100%);
            transform-origin: left bottom;
            border-radius: 3px;
            width: 14px;
            height: 14px;
            position: absolute;
            top: 0;
            transform: rotate(30deg);
            box-shadow: 0 0 14px -4px rgba(0,0,0,0.31);
            filter: contrast(1.4);
            `}>
            </div>
          </div>
        </div>    
  </div>
  <div className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      max-width: 520px;
      padding: 0 2rem;
      `}>

    <div className={css`
      animation: ${aniGlow} ${speed} linear infinite;
      width: 50px;
      height: 100px;
      filter: blur(10px);
      background-color: rgba(233,216,255,1);
      position: absolute;
      z-index: 10;
      top: 0;
      margin-top: -20px;
      border-radius: 50px;
      `}></div>
    <div className={css`
      animation: ${aniGlow} ${speed} linear infinite;
      width: 70px;
      height: 20px;
      filter: blur(10px);
      background-color: rgba(233,216,255,1);
      position: absolute;
      z-index: 10;
      top: 0;
      margin-top: 230px;
      border-radius: 50px;
      `}></div>

    <img src="/static/redux.svg" width="300" 
      className={css`
        position: absolute;
        top: 0;
        margin-top: -140px;
        filter: contrast(1.25);
        z-index: 5;
      `} />
    <img src="/static/path.svg" width="16"
        className={css`
        position:absolute;
        top:0;
        margin-top: 147px;
        margin-left: -120px;
        filter: contrast(1.15);
        z-index: 0;
      `}
      />
    </div>
</div>
)}
