import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from 'react-i18next'
import {ThemeProvider} from 'styled-components'
import {Theme} from 'aida-ui'
import i18n from './languages/i18n'


ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}/>
        <ThemeProvider theme={Theme.aidaSuite}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
