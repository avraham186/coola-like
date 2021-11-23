import './assets/main.scss';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import {routes} from './routes';
import {AdminNav} from './cmps/AdminNav'
import {AppNav} from './cmps/AppNav'
import {AppFooter} from './cmps/AppFooter'



export function App() {


    const [isAdmin, setIsAdmin] = useState(false)
    const currentURL = window.location.href
    const baseURL = process.env.REACT_APP_BASE_URL

    return (
        <div className="main-layout">
            
            {
                currentURL !== baseURL + '/#/login' && <AdminNav />
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
                currentURL !== baseURL + '/#/login' && <AppFooter/>
            }
            
        </div>
    );
}
