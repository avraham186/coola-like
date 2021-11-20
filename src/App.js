import './assets/main.scss';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {routes} from './routes';
import {AppNav} from './cmps/AppNav'
import {AdminNav} from './cmps/AdminNav'
import {AppFooter} from './cmps/AppFooter'
import LinearProgress from '@mui/material/LinearProgress';


export function App(location) {

    const [isAdmin, setIsAdmin] = useState(false); // data updated from store


    return (
//  <LinearProgress color="secondary" />

        <div className="main-layout">
            <Router>
                {isAdmin ?
                (!<AdminNav/>?<LinearProgress color="secondary" />:<AdminNav/>) 
                :
                (!<AppNav/>?<LinearProgress color="secondary" />:<AppNav/>)
                }
                <Switch>
                    {
                        routes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    exact
                                    component={route.component}
                                    path={route.path}
                                />
                            )
                        })
                    }
                </Switch>
                <AppFooter/>
            </Router>
        </div>
    );
}
