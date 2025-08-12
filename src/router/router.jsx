import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layout/rootLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Achievements from "../pages/Achievements";
import ProjectDetail from "../pages/ProjectDetail";


export const router = createBrowserRouter([
    {   
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/projects/:id",
                element: <ProjectDetail></ProjectDetail>
            },
            {
                path: "/achievements",
                element: <Achievements></Achievements>
            }
        ]
    },
]);

