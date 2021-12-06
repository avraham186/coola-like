import TaskList from './cmps/project_page/TaskList.jsx';
import HomePage from './pages/HomePage.jsx'
import ProjectPage from "./pages/ProjectPage.jsx";
import EventsPage from './pages/EventsPage.jsx';
import NewTask from './cmps/tasks/NewTask.jsx'
import LoginPage from './pages/LoginPage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import {LinkedInCallback} from "react-linkedin-login-oauth2";
import ProfilePage from "./pages/ProfilePage";

export const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: '/linkedin',
        component: LinkedInCallback
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/projects',
        component: ProjectPage
    },
    {
        path: '/events',
        component: EventsPage
    },
    {
        path: "/projects/task/new-task/:projectId",
        component: NewTask,
    },
    {
        path: "/projects/task/:projectId",
        component: TaskList,
    },
    {
        path: "/jobs",
        component: JobsPage,
    }

]
