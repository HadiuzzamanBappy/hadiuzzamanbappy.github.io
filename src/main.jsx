import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext'; // Import CursorProvider
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* Wrap the entire App with CursorProvider */}
        <CursorProvider>
          <App />
        </CursorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);