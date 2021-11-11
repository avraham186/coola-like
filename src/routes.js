import TaskList from './cmps/project_page/TaskList';
import HomePage from './pages/HomePage'
import ProjectPage from "./pages/ProjectPage";
import EventsPage from './pages/EventsPage';
// import { ToyDetails } from './pages/ToyDetails'
// import {ToyEdit} from './pages/ToyEdit'

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/projects',
        component: ProjectPage
    },
    {
        path: "/projects/task/:projectId",
        component: TaskList,
    },

]
