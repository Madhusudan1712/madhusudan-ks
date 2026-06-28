import Home from "../../pages/home/HomePage";
import Stream from "../../pages/stream/StreamPage";
import Projects from "../../pages/projects/ProjectsPage";
import Experience from "../../pages/experience/ExperiencePage";

export const tabsData = [
  {
    key: "home",
    label: "Home",
    component: Home,
    path: "/home",
    icon: "ph:house"
  },
  {
    key: "stream",
    label: "Stream",
    component: Stream,
    path: "/stream",
    icon: "ph:newspaper"
  },
  {
    key: "projects",
    label: "Projects",
    component: Projects,
    path: "/projects",
    icon: "ph:code"
  },
  {
    key: "experience",
    label: "Experience",
    component: Experience,
    path: "/experience",
    icon: "ph:briefcase"
  }
];
