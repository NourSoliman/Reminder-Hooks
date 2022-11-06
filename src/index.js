import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import {createRoot} from 'react-dom/client'
import App from './component/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers';
import { Provider } from 'react-redux';
const container = document.getElementById(`root`)
const store = configureStore({reducer})
const root = createRoot(container);
root.render(
    <Provider store={store}>
    <App />
    </Provider>
)