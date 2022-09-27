import React, { useState, useMemo, useEffect,createContext } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import axios from "axios";
import { v4 as uuid } from 'uuid'
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Task from './pages/Task.jsx'
import Users from "./pages/Users.jsx"
import User from "./pages/User.jsx";
import AddUser from "./pages/AddUser.jsx";
import './App.css'
import useToggle from "./hooks/useToggle";

// add context api
export const UserContext = createContext()

function App() {
  const [isEnabled, toggle] = useToggle(true);
  const [users, setUsers] = useState();

  // useMemo hook
  const usersAboveThirty = useMemo(() => {
    return users?.filter((user) => {
      console.log("RECALCULATION");
      return user.age > 30;
    }).length;
  }, [users]);

  // useEffect to cleanup when the component unamount
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
    return () => {
      localStorage.removeItem("user");
    };
  }, []);

  const incrementUserAge = (userId) => {
    // const newuser ={id:uuid(),name:'steven',age:19};
    // const currentUsers=[...users];
    // currentUsers.push(newuser);
    // setUsers(currentUsers);
    // console.log(users)
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId ? { ...user, age: user.age + 1 } : user
      )
    );
  };

  const addUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUsers((currentUsers) => [
      ...currentUsers,
      { ...user, age: +user.age, id: uuid() },
    ]);
  };

  const contextValue = useMemo(
    () => ({
      users,
      isEnabled,
      toggle,
      usersAboveThirty,
      addUser,
      incrementUserAge,
    }),
    [isEnabled, toggle, usersAboveThirty, addUser, incrementUserAge,users]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <UserContext.Provider value={contextValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="task" element={<Task />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
            <Route path="users/add" element={<AddUser />} />
            {/* add no match path */}
            <Route path="*" element={<div>404 - Not Found </div>} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
