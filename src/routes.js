import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import TaskList from "./cmps/project_page/TaskList";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/projects",
    component: ProjectPage,
  },
  {
    path: "/task/:projectId",
    component: TaskList,
  },
];
