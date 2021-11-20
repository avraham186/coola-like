import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './App';
import configureStore from "./store/configureStore";
import CircularProgress from '@mui/material/CircularProgress';


const mainStore = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={mainStore}>
            {!mainStore?<CircularProgress color="secondary" /> : <App/>}
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

