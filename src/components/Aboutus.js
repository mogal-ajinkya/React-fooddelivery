import { Link, Outlet } from "react-router-dom";
import ProfileInfo from "./Profileclass";
import React from "react";


// const About = () =>
// {
//     return (
//         <>
//         <h1> this is about us page of react </h1>
//         <li><Link to="profile">this is a way to profile</Link></li>
//         <ProfileInfo/>
//         <Outlet/>
//         </>
//     )
// }


class About extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("Parent -- consturctor");
    }

 componentDidMount()
    {
        console.log("Parent -- componenet mount");
      

    }

    render()
    {
        console.log("Parent -- Render")
        return (
            <>
            <h1> this is about us page of react </h1>
            <li><Link to="profile">this is a way to profile</Link></li>
            {/* <Outlet/> */}
            <ProfileInfo name="first"/>
            <ProfileInfo name="second"/>
            </>
        )
    }
}

export default About; 