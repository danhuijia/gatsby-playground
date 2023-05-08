import React, { useEffect, useState, useReducer } from "react"
import { container } from './problem.module.css'

const _ = require('lodash')

// Write a script that processes the CSV file below
// Randomly assign givers to receivers
// Print each person's email followed by the email of the person they're assigned to (see expected output below)

// Notes:
// A person cannot give a gift to themselves
// Ensure everyone gives only one gift, and receives only one gift

// It should be random - if we run the script multiple times we should get different results.

// Name,Email
// Alex,turner_it_around@hotmail.com
// Sahana,spatel76@gmail.com
// Ahmed Yahya,ahmed@live.ca



const Problem = (props) => {
    console.log('%cSolving starts here ...', "color: orange")
    const { data } = props
    const [displayData, setDisplayData] = useState([])


    const onGetResult = () => {
        if(!data || _.isEmpty(data)) return
        let receiverArr = [];
        let useData = _.map(data, (d, index) => {
            receiverArr.push(index);
            return _.assign(d, {
                id: index,
                receiverId: null,
            })
        })
        _.forEach(useData, (giver, index) => {
            let filteredReceiver = _.filter(receiverArr, r => r != giver.id)  // filters out giver
            const receiverId = filteredReceiver[_.random((0, filteredReceiver.length - 1))]

            // check if no receiver left
            if (filteredReceiver.length === 0) {
                console.log("%cDoesnt work, do sawp ", 'color:red')
                // swap with the giver in front
                let swapper = _.find(useData, { id: index - 1 });
                _.assign(giver, { receiverId: swapper.receiverId })
                _.assign(swapper, { receiverId: giver.id })
            } else {
                _.assign(useData[index], { receiverId, })
                receiverArr = _.filter(receiverArr, r => r != receiverId) // filters out the receiver chosen
            }
        })

        _.map(useData, d => {
            console.log("%c" + `${d.email} -> ${_.find(useData, { id: d.receiverId }).email}`, 'color:green')
        })
        setDisplayData(useData)
    }

    return <div className={container}>
        {_.map(displayData, d => {
            return <div key={d.id}>{`${d.email} -> ${_.find(displayData, { id: d.receiverId }).email}`}</div>
        })}
        <button onClick={onGetResult}> Refresh Results</button>


    </div>
}
export default Problem;