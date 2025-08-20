import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext';
import App from './App.jsx';
import './index.css';
import CustomCursor from './components/common/CustomCursor';
import MouseFollower from './components/common/MouseFollower.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CursorProvider>
          <MouseFollower />
          <CustomCursor />
          <ScrollToTop />
          <App />
        </CursorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);