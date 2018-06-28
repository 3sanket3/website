import React from 'react';
import TypingText from './TypingText';
import { css } from 'emotion';
import mq from '../shared/MediaQuery';

const centeredFlex = css({
    display: 'flex',
    justifyContent : 'center',
    alignItems: 'center'
  },
  mq({
    minHeight: ['10em','15em','20em']
  })
);

export const Header = ()=><div className={css`${centeredFlex}`}> <TypingText text="Hi, I'm Sanket Patel" /></div>;