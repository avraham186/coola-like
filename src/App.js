import './assets/main.scss';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import {routes} from './routes';
import {AdminNav} from './cmps/AdminNav'
import {AppFooter} from './cmps/AppFooter'
import { useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'


export function App() {

    const [isAdmin, setIsAdmin] = useState(false)
    const location = useLocation();

    return (
        <div className="main-layout">
            {
                location.pathname !== '/login' && <AdminNav/>
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
            {
                location.pathname !== '/login' && <AppFooter/>
            }
        </div>
    );
}
