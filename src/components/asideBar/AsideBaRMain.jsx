import React from 'react';
import {NavLink} from "react-router-dom";
import {Icon} from "@chakra-ui/react";
import {FaUserFriends} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
const AsideBaRMain = () => {
    return (
        <aside className={'aside'}>
            <div className={'aside__cont'}>
                <Icon as={CgProfile}/>
                <NavLink to={'/myProfile'}>My Profile</NavLink>
            </div>
            <div className={'aside__cont'}>
                <Icon as={FaUserFriends}/>
                 <NavLink to={'/friends'}>Friends</NavLink>
            </div>

        </aside>
    );
};

export default AsideBaRMain;