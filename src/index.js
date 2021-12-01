import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import configureStore from "./store/configureStore";
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const mainStore = configureStore();
const persist = persistStore(mainStore);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={mainStore}>
            <PersistGate loading={null} persistor={persist}>
                <HashRouter>
                    {/* <BrowserRouter> */}
                    <App />
                    {/* </BrowserRouter> */}
                </HashRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

