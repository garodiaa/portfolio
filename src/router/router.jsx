import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layout/rootLayout";
import Home from "../pages/Home";


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
                
            }
        ]
    },
]);

