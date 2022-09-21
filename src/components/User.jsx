import { useEffect } from 'react'
import { useCallback } from 'react'
import propTypes from 'prop-types'
// import '../styles/User.css'
import classes from '../styles/User.module.css'


const User=(props)=>{
    const {name,age,id,onIncrement}=props
    useEffect(()=>{
        console.log('EVERY RENDER')
    })

    //simulate componentDidMount 
    useEffect(()=>{
        console.log('FIRST MOUNT ONLY')
    },[])
    console.log('RENDER');

// useCalback hook 
    const handleClick=useCallback((e)=>{
        console.log(e);
        onIncrement(id);
    },[id,onIncrement])
    return (
    <div className={classes.user}>
        <div>
        User {name} with age {age} years old{" "}
        </div>
        <button className={classes.btn} onClick={handleClick}>Increment Age</button>
    </div>
    );
}

User.propTypes={
    id:propTypes.string.isRequired,
    name:propTypes.string,
    age:propTypes.number,
    onIncrement:propTypes.func.isRequired
}

User.defaultProps={
    name:'ANONYMOUS USER',
    age:18
}
// To make it a pure component 
// export default memo (User);
export default User;