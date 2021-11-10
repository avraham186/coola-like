import TaskList from './cmps/project_page/TaskList';
import HomePage from './pages/HomePage'
import ProjectPage from "./pages/ProjectPage";

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
        path: '/projects/task',
        component: TaskList
    },

]
