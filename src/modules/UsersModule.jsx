import React, { useState, useMemo, useEffect, createContext } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import useToggle from "../hooks/useToggle";
import { Routes,Route } from 'react-router-dom'
import User from "../pages/User";
import Users from "../pages/Users";
import AddUser from "../pages/AddUser";

// add context api
export const UserContext = createContext();
const UsersModule = () => {
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
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
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
    [isEnabled, toggle, usersAboveThirty, addUser, incrementUserAge, users]
    );

    return (
        <UserContext.Provider value={contextValue}>

        <Routes>
            <Route index element={<Users />} />
            <Route path=":id" element={<User />} />
            <Route path="add" element={<AddUser />} />
        </Routes>
        </UserContext.Provider>
    );
};

export default UsersModule;