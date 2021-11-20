import './assets/main.scss';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {routes} from './routes';
import {AppNav} from './cmps/AppNav'
import {AdminNav} from './cmps/AdminNav'
import {AppFooter} from './cmps/AppFooter'

export function App(location) {

    const [isAdmin, setIsAdmin] = useState(false)


    return (


        <div className="main-layout">
            <Router>
                {!isAdmin ? <AdminNav/> : <AppNav/>}
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
