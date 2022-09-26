import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
    <>
        <div style={{display:'flex',justifyContent:'space-around'}}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="task">Task</Link>
        <Link to="users">Users</Link>
        <Link to="users/add">Add User</Link>
        </div>
    </>
    );
};

export default Navbar;
