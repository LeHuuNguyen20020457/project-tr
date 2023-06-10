import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './style/index.scss';
import { GlobalStyles } from './style/GlobalStyle';
import { theme } from './constrants/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles></GlobalStyles>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
