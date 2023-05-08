import * as React from "react"
import  Problem  from "../components/Problem"
const _ = require('lodash')

const IndexPage = () => {
  console.log('%cNice you meet you :D', "color: orange")

  return (
    <main>
      <h3>Hi Karina! This is Lily, I look forward to solving some fun problems with you! :D</h3>
      <Problem></Problem>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
