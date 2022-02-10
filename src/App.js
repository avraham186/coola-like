import './assets/main.scss';
import { Route, Switch, useLocation } from 'react-router-dom'
import { routes } from './routes';
import { AdminNav } from './cmps/AdminNav'
import { AppFooter } from './cmps/AppFooter'
import { AppNav } from './cmps/navbar/AppNav'

export function App() {

    const location = useLocation();
    const isFooter = () => {
        return !(location.pathname === '/login' ||
            location.pathname.includes('/profile') ||
            location.pathname.includes('/projects'));
    }
    return (
        <div className="main-layout">

            {
                location.pathname !== '/login' && <AdminNav location={location.pathname}/>
            }
            <Switch>
                {
                    routes.map((route, index) => {

                        if (route.path !== '/profile') {
                            return (<Route
                                key={index}
                                exact
                                component={route.component}
                                path={route.path}
                            />
                            )
                        } else {
                            return (<Route
                                key={index}
                                component={route.component}
                                path={route.path}
                            />)
                        }
                    })
                }
            </Switch>

            {
                isFooter() && <AppFooter />
            }

        </div>
    );
}