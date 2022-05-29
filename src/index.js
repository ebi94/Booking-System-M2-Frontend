import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import themeBasicM2 from './themeBasicM2'
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <ThemeProvider theme={themeBasicM2}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

reportWebVitals();
