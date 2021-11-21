import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './App';
import configureStore from "./store/configureStore";
import CircularProgress from '@mui/material/CircularProgress';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

const mainStore = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={mainStore}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

