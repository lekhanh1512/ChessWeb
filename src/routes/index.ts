
import { lazy } from "react";
import ViewCoursePage from "../pages/CoursePage";
const coreRoutes = [
  {
    path: "/training/view-program",
    title: "Training",
    component: ViewCoursePage,
  },
  {
    path: "/training/view-program/:id",
    title: "Training",
    component: ViewCoursePage,
  },
  {
    path: "/training/create-training",
    title: "Create Training",
    component: ViewCoursePage,
  },
  {
    path: "/user/list-user",
    title: "User",
    component: ViewCoursePage,
  },
  {
    path: "/syllabus/view-syllabus",
    title: "View Syllabus",
    component: ViewCoursePage,
  },
  {
    path: "/syllabus/create-syllabus",
    title: "Create Syllabus",
    component: ViewCoursePage,
  },
  {
    path: "/class/view-class",
    title: "ViewClass",
    component: ViewCoursePage,
  },
  {
    path: "/class/create-class",
    component: ViewCoursePage,
  },
  {
    path: "/class/create-class-add-info",
    component: ViewCoursePage,
  },
  {
    path: "/class/create-class-add-training",
    component: ViewCoursePage,
  },
  {
    path: "/user/permission",
    title: "Permission",
    component: ViewCoursePage,
  },
  {
    path: "/training-calendar",
    title: "Calendar",
    component: ViewCoursePage,
  },
];

const routes = [...coreRoutes];
export default routes;