import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLaout/MainLayout";
import Home from "../Home/Home";


const MyCreateRoute =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default MyCreateRoute;