import { Component } from 'react'
import styled, { keyframes } from 'react-emotion'
import { css, cx } from 'emotion'
import lessons from './Lessons'
import capitalize from 'chicago-capitalize'
import ToC from './ToC'
import ClickOutside from 'react-click-outside'

const openAnimation = keyframes`
from {
  transform: translate(0px, -20px);
  opacity: 0;
}
to {
  transform: translate(0px, 0px);
  opacity: 1;
}
`

const crossAnimation = keyframes`
from {
  transform: scale(0, 0);
  opacity: 0;
}
to {
  transform: scale(1, 1);
  opacity: 1;
}
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

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.hide = this.hide.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    hide() {
        this.setState(prevState => ({
            isToggleOn: true
          }));
    }

render() {
      return (
        <ClickOutside onClickOutside={this.hide}>
          <div className={css`
          position: fixed; 
          left: 0; 
          top: 0; 
          margin-top: 10px; 
          margin-left: 10px; 
          z-index: 999;
          ${mq.medium(css`margin-left: 20px; margin-top: 20px;`)};
          `}>
          
        <button onClick={this.handleClick} className={css`
        border-radius: 100%;
        box-shadow: 0 0 10px -2px rgba(0,0,0,0.4);
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        outline: none;
        border: 0;
        cursor: pointer;
        ${this.state.isToggleOn ? 'background: white;' : 'background: white;'}
        `}>
          {this.state.isToggleOn ? (<img src="../static/menu.svg" width="16px" height="16px" />) : (<img src="../static/cross.svg" width="16px" height="16px" className={css`animation: ${crossAnimation} 250ms ease 1;`} />)}
        </button>
       

        <div className={css` 
        ${this.state.isToggleOn ? `visibility: hidden;` : 
        `visibility: visible; animation: ${openAnimation} 250ms ease-in-out 1;`}
        `}>

        <ToC />
        
        </div>
        </div>
        </ClickOutside>
      );
    }
  }
  
  export default Toggle
