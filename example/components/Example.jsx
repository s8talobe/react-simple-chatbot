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
      {value: '1', label: 'Whats is it?', trigger: '4'},
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
    end: true
  }
];


const ThemedExample = () => {

  const [showBot, setShowBot] = useState(true);

  const handleBot = () => {
    setShowBot(!showBot)
  }

  return (
    <ThemeProvider theme={otherFontTheme}>
      <React.StrictMode>
        {showBot &&
          <ChatBot steps={steps} />
        }
        <button onClick={handleBot}>Mount/Unmount</button>
      </React.StrictMode>
    </ThemeProvider>
  )
};

export default ThemedExample;
