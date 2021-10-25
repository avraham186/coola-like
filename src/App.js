import './assets/main.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes';
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'

export function App() {
  return (
    <div className="main-layout">
      <Router>
        <AppHeader />
        <Switch>
          {routes.map(route => {
            return <Route key={route.path} exact component={route.component} path={route.path} />
          })}
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}
