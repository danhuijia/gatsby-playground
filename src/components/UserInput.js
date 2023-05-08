import React, { useEffect, useState, useReducer } from "react"

const _ = require('lodash')




const UserInput = (props) => {
    const{users} = props
    const [user, setUser] = useState({name:null, email:null})
    console.log('users',users) 
    
    const onUpdateUser = (user) => {
        if(_.isFunction(props.onUpdateUsers)) props.onUpdateUsers(user);
    }

    const onAddUser = (name, email) => {
        onUpdateUser(user)
        setUser({name:'', email:null})
    }

    const onUserChange=(e)=>{
        setUser({name:e.target.value, email:`${e.target.value}@gmail.com'`})
    }
    return <div >
        {_.map(users, user => {
            return <div>{user.name}</div>
        })}
    <input value={user.name} onChange={onUserChange} /> 
    <button onClick={onAddUser} >Add to List</button>



    </div>
}
export default UserInput;