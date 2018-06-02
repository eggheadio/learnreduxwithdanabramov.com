import styled from 'react-emotion'
import { css } from 'emotion'

export default ({ }) =>     { 
    
    const SocialLink = css`
    cursor:pointer;
    padding: 5px;
    border-radius: 3px;
    text-decoration: none;
    color: rgba(0,0,0,0.5);
    font-size: 0.8rem;
    border: 1px solid #f1f1f1;
    display: inline-flex;
    align-items: center;
    transition: all 200ms ease;
    margin: 3px;
    &:hover {
      color: rgba(0,0,0,1);
      box-shadow: 0 5px 25px -2px rgba(0,0,0,0.1);
      border: 1px solid white;
      img {
        opacity:1;
        transition: all 200ms ease;
      }
    }
    img {
    opacity: 0.5; 
   
  }
    span {
      padding: 0 4px 0 6px;
      
    }
    `

return ( 
<div className={css``}>
    <a href="https://github.com/gaearon" 
                target="_blank" 
                className={SocialLink}>
              <img 
                src="../static/github.svg"
                width="20px" height="20px" 
                alt="Dan Abramov Github" />
                <span>GitHub</span>
            </a>
            <a href="https://twitter.com/dan_abramov" 
            target="_blank" 
            className={SocialLink}>
          <img 
            src="../static/twitter.svg"
            width="20px" height="20px" 
            alt="Dan Abramov Github" />
            <span>Twitter</span>
        </a>
        </div>
)}