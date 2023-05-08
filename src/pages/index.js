import React, { useState, } from "react"
import Problem from "../components/Problem"
import UserInput from "../components/UserInput"
//import dataCsv from "../data/data.csv"
const _ = require('lodash')

let mockData = [
  { name: 'Alex', email: 'turner_it_around@hotmail.com' },
  { name: 'Sahana', email: 'spatel76@gmail.com' },
  { name: 'Ahmed Yahya', email: 'ahmed@live.ca' },
]


const IndexPage = () => {
  const [users, setUsers] = useState([])
  const onUpdateUsers = (user) => {
    let cloneUsers = _.cloneDeep(users)
    cloneUsers.push(user)
    setUsers(cloneUsers)
  }


  return (
    <main>
      <h3>Gift Exchange</h3>
      < UserInput
        onUpdateUsers={onUpdateUsers}
        users={users}
      >
      </ UserInput>
      <Problem
        data={users}
      >

      </Problem>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
