import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const appContainer = document.getElementById('app');
const rootComponent = createRoot(appContainer);
rootComponent.render(<App />);
