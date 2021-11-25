import './assets/main.scss';
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom'
import {useState} from 'react'
import {routes} from './routes';
import {AdminNav} from './cmps/AdminNav'
import {AppNav} from './cmps/AppNav'
import {AppFooter} from './cmps/AppFooter'
import HomePage from "./pages/HomePage";



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
