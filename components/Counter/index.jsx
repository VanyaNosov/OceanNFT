import React from "react";

function Counter () {
    let state = 0
    return(
        <div>
            <button>{state}</button>
            <button>{state}</button>
        </div> 
    )
}

export default Counter;