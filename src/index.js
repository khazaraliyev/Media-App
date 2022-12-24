import './input.css';
import React from "react";
import { createRoot} from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './App';

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

export * from './store/thunks/fetchUsers';