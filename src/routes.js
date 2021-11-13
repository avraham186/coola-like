import TaskList from './cmps/project_page/TaskList';
import HomePage from './pages/HomePage'
import ProjectPage from "./pages/ProjectPage";
import EventsPage from './pages/EventsPage';
import NewTask from './cmps/tasks/NewTask'

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
