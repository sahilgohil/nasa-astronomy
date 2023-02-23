import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";
import { ThemeContextProvider } from './components/ThemeContext';
import { NasaContextProvider } from './components/NasaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeContextProvider>
            <NasaContextProvider>
                        <App />
            </NasaContextProvider>
        </ThemeContextProvider>
    </BrowserRouter>

);


reportWebVitals();
