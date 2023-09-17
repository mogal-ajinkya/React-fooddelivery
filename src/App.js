import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/Aboutus";
import Contact from "./components/Contactus";
import RestaurantDetails from "./components/RestaurantDetails";
import Error from "./components/Error";
import ProfileInfo from "./components/Profileclass";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {lazy } from "react";
import ShimmerHome from "./components/Shimmer";
const Instamart = lazy( ()=> import("./components/Instamart"))
const root = ReactDOM.createRoot(document.getElementById("root"));
// import Instamart from "./components/Instamart";
/*src\components\Shimmer.js
header  
    - logo
    - home 
    - about us
    - contact us
body
    -search bar
    - restaurant card

footer
    - important links
*/

const Applayout = () => {
  return (
    < >
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        
      },
      {
        path: "Aboutus",  
        element: <About/>,
        children:[               //will be inserted inside outlet outlet must be in aboutus 
          {
            path:"profile",           // parentPath/{path}
            element: <ProfileInfo name="ajinkya"/>
          }
        ]
      },
      {
        path: "Contactus",
        element: <Contact />,
      },
      {
        path: "More",
        element: <></>,
      }
      ,
      {
        path: "Instamart",
        element: (
          <Suspense fallback={<ShimmerHome/>}>
            <Instamart/>
          </Suspense>)
        ,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);




// root.render(<Applayout/>);
root.render(<RouterProvider router={AppRouter} />);
