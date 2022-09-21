import React from 'react';
import { useState,useEffect } from 'react'

const AddNewUser = (props) => {
    const{addUser , isEnabled} =props
    const [user,setUser]= useState({name:'',age:''})
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser(currentUser=>({...currentUser,[name]:value }))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        addUser(user)
        setUser({name:"",age:''})
    }
    useEffect(()=>{
        if(!isEnabled){
            setUser({name:'',age:''})
        }
    },[isEnabled])

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange}/>
        <input type="number" name="age" value={user.age} onChange={handleChange  } />
        <input type="submit" value='Add User' disabled={!isEnabled} />
    </form>
    );
};

export default AddNewUser;