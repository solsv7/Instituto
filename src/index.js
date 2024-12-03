import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './components/functionalComponent/UserContext/UserContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider> {/* Envolver en UserProvider */}
            <BrowserRouter> {/* Envolver en BrowserRouter */}
                <App />
            </BrowserRouter>
        </UserProvider>
    </React.StrictMode>
);