import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { ReactLocation, Router } from 'react-location';
import { App } from './App/App';
import { Auth0ProviderWithHistory } from './auth0/Auth0ProviderWithHistory';
import { Auth0TokenWrapper } from './auth0/Auth0TokenWrapper';

const location = new ReactLocation();

ReactDOM.render(
    <React.StrictMode>
        <Router
            location={location}
            routes={[
                {
                    path: '/*',
                    element: (
                        <Auth0ProviderWithHistory>
                            <Auth0TokenWrapper>
                                <App />
                            </Auth0TokenWrapper>
                        </Auth0ProviderWithHistory>
                    ),
                },
            ]}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
