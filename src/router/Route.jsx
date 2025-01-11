import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page_1 from "../pages/page_1";
import Page_2 from "../pages/page_2";
import Page_3 from "../pages/page_3";
import Page_4 from "../pages/page_4";
import { Outlet } from 'react-router-dom';
import Mainlayout from "../layout/Mainlayout";


const approuter =  createBrowserRouter([{
    path: "/",
    element: <Mainlayout/>,
    children:[
        {
           index: true,
            element: <Page_1/>
        },
        {
            path: "/web-design",
            element: <Page_2/>
        },
        {
            path: "/contact",
            element: <Page_3/>
        },
        {
            path: "/topics-listing",
            element: <Page_4/>
        },
        
    ]
}]

)
const Approuterr = () => {
  return <RouterProvider router={approuter} />;
};

export default Approuterr;