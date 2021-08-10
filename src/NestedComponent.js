import React from 'react'
function NestedComponent(){
    return(
        <div>
            <h1>This is the parent component</h1>
            <Child/>{/*i have called the child component*/}
        </div>
    )
}
const Child=()=>{//this is the child component function
    return(
        <div>
<h3>I am the kid</h3>
        </div>
    )
}

export default NestedComponent
    