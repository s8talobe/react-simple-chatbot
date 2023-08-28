import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from './components/Example';

const root  = createRoot(document.getElementById('root'));
root.render(<Example />)
