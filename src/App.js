import './assets/main.scss';
import { Route, Switch, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { routes } from './routes';
import { AdminNav } from './cmps/AdminNav'
import { AppFooter } from './cmps/AppFooter'


export function App() {

    const [isAdmin, setIsAdmin] = useState(false)
    const location = useLocation();
    const isFooter = () => {
        if (location.pathname === '/login' || location.pathname.includes('/projects')) {
            return false
        } else return true
    }
    return (
        <div className="main-layout">
            {
                location.pathname !== '/login' && <AdminNav />
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
                isFooter() && <AppFooter />
            }
        </div>
    );
}
