import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Nav from './Nav';
import './index.css';
import { store, persistor } from './redux/store';


const Main = () => {
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Nav />
        </PersistGate>
    </Provider>
}

export default Main