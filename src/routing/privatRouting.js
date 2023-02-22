import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Friends from "../pages/Friends/Friends";
import MyProfile from "../pages/MyProfile/MyProfile";
import NotFound from "../pages/NotFound/NotFound";
import Notifications from "../pages/Notifications/Notifications";
import Home from "../pages/Home/Home";

const PrivateRouting = () => {
    return (
       <Routes>
           <Route path='/' element={<Layout />}>
               <Route path={''} element={<Home/>}/>
               <Route path='myProfile' element={<MyProfile />} />
               <Route path='friends' element={<Friends />} />
               <Route path={'notifications'} element={<Notifications/>}/>
           </Route>
           <Route path='*' element={<NotFound />} />
       </Routes>
    );
};

export default PrivateRouting;