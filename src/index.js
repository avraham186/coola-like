import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store'
import {App} from './App';
import configureStore from "./store/configureStore";
import StoreContext from "./contexts/storeContext";

const store2 = configureStore();


ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store2}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StoreContext.Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

