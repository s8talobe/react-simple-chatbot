import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    trigger: '2'
  },
  {
    id: '2',
    message: 'What the hell?',
    trigger: '3'
  },
  {
    id: '3',
    options: [
      {value: '1', label: 'What is it?', trigger: '4'},
      {value: '2', label: 'Wait what?', trigger: '5'}
    ]
  },
  {
    id: '4',
    message: 'Shit',
    trigger: '6'
  },
  {
    id: '5',
    message: 'Eat shit!',
    trigger: '6'
  },
  {
    id: '6',
    message: 'Hello World',
    trigger: '7'
  },
  {
    id: '7',
    message: 'Hello World oh you beautiful world, what are you doing to me? Hello again its me what are you lookin for?',
    trigger: '8'
  },
  {
    id: '8',
    message: 'Hello World',
    trigger: '9'
  },
  {
    id: '9',
    message: 'Hello World',
    trigger: '10'
  },
  {
    id: '10',
    message: 'Hello World',
    end: true
  }
];


const ThemedExample = () => {

  return (
    <ThemeProvider theme={otherFontTheme}>
      <React.StrictMode>
          <ChatBot steps={steps} />
      </React.StrictMode>
    </ThemeProvider>
  )
};

export default ThemedExample;
