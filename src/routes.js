import TaskList from './cmps/project_page/TaskList.jsx';
import HomePage from './pages/HomePage.jsx'
import ProjectPage from "./pages/ProjectPage.jsx";
import EventsPage from './pages/EventsPage.jsx';
import NewTask from './cmps/tasks/NewTask.jsx'
import LoginPage from './pages/LoginPage.jsx'

export const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/projects',
        component: ProjectPage
    },
    {
        path: "/projects/task/new-task/:projectId",
        component: NewTask,
    },
    {
        path: '/events',
        component: EventsPage
    },
    {
        path: "/projects/task/:projectId",
        component: TaskList,
    }

]