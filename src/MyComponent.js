import React from 'react'

function MyComponent() {
    let catsup = "hell yes!"
    let myFunction1 = () => {
        alert(`from 1 ${catsup}`)
    }
    // let myFunction2 = () => {
    //     alert(`from 2 ${catsup}`)

    // }

    return (
        <div>
            <button onClick={myFunction1}>Click me!1</button>
            <button onClick={() => myFunction2()}>Click me!2</button>
        </div>
    )
}

export default MyComponent
