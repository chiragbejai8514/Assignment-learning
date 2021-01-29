import React, { useState, useEffect, useContext, useRef } from 'react';


import { UserContext } from './App'




// class FormA extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <UserConsumer>
//                     {
//                         (name) => {
//                             return <div>here  {name}</div>
//                         }
//                     }
//                 </UserConsumer>
//             </React.Fragment>

//         )
//     }
// }

const FormA = () => {


    const inputRef = useRef(null)
    const count = useRef(0)

    const [myArray, setMyArray] = useState([{ id: 1, name: 'Chirag' }])

    const user = useContext(UserContext)

    console.log(user)


    useEffect(() => {
        inputRef.current.value = "1"
        console.log(inputRef.current.focus())
    }, [myArray])

    return (
        <React.Fragment>
            <input ref={inputRef} />
            <div>{count.current}</div>
            <button onClick={() => (count.current.value + 1)}>ref</button>
            {/* <UserContext.Consumer>{
                (name) => {
                    console.log(name)
                }
            }
            </UserContext.Consumer> */}
            <button onClick={() => {
                // const newArray = [...myArray]
                // newArray.push(1, 2, 2, 3)
                for (let i = 0; i < 3; i++) {
                    setMyArray(prevState =>
                        [...prevState, {
                            id: ++myArray.length,
                            name: `chirag ${myArray.length}`
                        }]
                    )
                }
            }}> click me</button >
        </React.Fragment>
    )
}



export default FormA