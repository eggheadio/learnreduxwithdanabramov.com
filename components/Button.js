import styled from 'react-emotion'
import { css } from 'emotion'

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
      filter: blur(10px);
    }
    ::after {
      transition: all 550ms cubic-bezier(1, 0, 0, 1);
      background-position: center;
    }
    }
    `
