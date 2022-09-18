import { Component } from 'react'
// import '../styles/Task.module.css'
import classes from "../styles/Task.module.css";

class Task extends Component{
    constructor(props){
        super(props)

        this.state={
            title:'Read the docs',
            deadline:2
        }
    }
    // state={
    //     title:'Read the docs',
    //     deadline:2
    // }

    // componentDidMount(){
    //     console.log('DID MOUNT')
    // }

    // componentDidUpdate(){
    //     console.log('DID UPDATE')
    // }

    // componentWillUnmount(){
    //     alert('UNMOUNT');
    // }

    // shouldComponentUpdate(){
    //     console.log('SHOULD UPDATE');
    //     return true;
    // }
    render(){
        const { title,deadline}=this.state
        return ( 
        <>
            <div>
            Task {title} with deadline in {deadline}
            </div>
            <button className={classes.btn} onClick={()=>this.setState((oldState)=>({deadline: oldState.deadline - 1}))}>Decrement Deadline</button>
        </>
        );
    }
}

export default Task; 