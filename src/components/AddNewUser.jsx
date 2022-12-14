import React from 'react';
import { useState,useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewUser = (props) => {
    const{addUser , isEnabled} =props
    const [user,setUser]= useState({name:'',age:''})
    const inpuEl=useRef(null); 
    const navigate=useNavigate( )

    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser(currentUser=>({...currentUser,[name]:value }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        addUser(user)
        setUser({name:"",age:''})
        navigate('/users')
    }

    // useEffect hook with array of adependancies 
    useEffect(()=>{
        if(!isEnabled){
            setUser({name:'',age:''})
        }
    },[isEnabled])

    //simulate componentDidMount
    useEffect(()=>{
        inpuEl.current?.focus();        
    },[])

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} ref={inpuEl}/>
        <input type="number" name="age" value={user.age} onChange={handleChange  } />
        <input type="submit" value='Add User' disabled={!isEnabled} />
    </form>
    );
};

export default AddNewUser;