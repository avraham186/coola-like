import HomePage from './pages/HomePage'
import ProjectPage from "./pages/ProjectPage";
import JobsPage from './pages/JobsPage';
// import { ToyDetails } from './pages/ToyDetails'
// import {ToyEdit} from './pages/ToyEdit'

export const routes = [
    // {
    //     path: '/toy/edit/:toyId?',
    //     component: ToyEdit
    // },
    // {
    //     path: '/toy/details/:toyId',
    //     component: ToyDetails
    // },
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/projects',
        component: ProjectPage
    },

    {
        path: '/jobs',
        component: JobsPage
    }
]
