import styled, { keyframes } from 'react-emotion'

const buttonAnimation = keyframes`
  from, 0% {
    opacity: 0.5;
    transform: scale(0);
  }
  to, 100% {
    opacity: 0;
    transform: scale(2);
  }
`

export default `
    display: flex;
    font-weight: 400;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 15px;
    text-decoration: none;
    padding: 15px 20px;
    background-image: linear-gradient(-177deg, #7B5DC9 0%, #5F3DA0 100%);
    box-shadow: 0 0 14px -4px rgba(0,0,0,0.31);  
    filter: contrast(1.8);
    transition: all 250ms ease-in-out;
    border-radius: 3px;
    ::before {
      content: '';
      background-image: url(../static/play.svg);
      background-repeat: no-repeat;
      background-size: 14px 14px;
      background-position: center;
      width: 30px;
      height: 30px;
      display: inline-block;
      left: 0;
    }
    ::after{
      content: '';
      background-image: url(../static/play.svg);
      background-repeat: no-repeat;
      background-size: 14px 14px;
      background-position: center 30px;
      width: 30px;
      height: 30px;
      margin-left: 20px;
      display: inline-block;
      position: absolute;
      left: 0;
    }
    :hover {
    transform: scale(1.05);
    transition: all 250ms ease-in-out;
    filter: contrast(2);
    ::before {
      transition: all 550ms cubic-bezier(1, 0, 0, 1);
      background-position: center -30px;
    }
    ::after {
      transition: all 550ms cubic-bezier(1, 0, 0, 1);
      background-position: center;
    }
    span::before {
      content: '';
      background: white;
      border-radius: 100%;
      filter: blur(5px);
      width: 20px;
      height: 20px;
      opacity: 0;
      animation: ${buttonAnimation} 450ms ease 1;
      display: inline-block;
      margin-left: 25px;
      left: 0;
      position: absolute;
    }
    }
    `
