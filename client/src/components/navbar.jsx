import React from 'react';
import {
    Link
} from "react-router-dom";

const NavBar = () => (
    <div>
        <Link to='/login'>login</Link>
        <Link to='/home'>home</Link>
        <Link to='/course/123'>course</Link>
    </div>
);

export default NavBar;