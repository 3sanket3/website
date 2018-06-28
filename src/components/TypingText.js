import React from 'react';
import { css } from 'react-emotion';
import mq from '../shared/MediaQuery';

const typewriter = css`
/* DEMO-SPECIFIC STYLES */
& h1 {
    color: #333;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .10em; /* Adjust as needed */
    font-wight: bold;
    animation: 
      typing 3.5s steps(30, end),
      blink-caret .5s step-end infinite;
  }
  
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
  }

  
`;

const dynamicFontSize = css(
  mq({
    fontSize: ['1.17em','1.17em','2em']
  })
);

const TypingText = (props)=> <div className={typewriter}> <h1 className={dynamicFontSize}>{props.text}</h1></div>;

export default TypingText;
