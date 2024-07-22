import { useState } from "react";
                    // THIS IS INPUTFORM //
//** ye inputform me single single value store karane ka hai **//
//**************************************************************// 

const SingleInputForm = () => {

//single single state use karke name aur password set karvaya hai//
    const [name, setName] = useState()
    console.log(name, "5465")

    const [password, setPassword] = useState()
    console.log(password, "4562")

// ye {*e*} event me se value target karke nikalene ke liye hai //

    // const handleChange = (e) =>{
    //     const {value} = e.target
    //     setName(value)
    //     setPassword(value)
    // }

// ye value set karvane ke liye hai vo bhi localstorage me  //
    const handleSubmit = () =>{
        localStorage.setItem("name", name)
        localStorage.setItem("password", password)
    }

  return (
    <div>
        <h1>Simple input form for single single value store</h1>
        <form onSubmit={handleSubmit} >
            <div>

            <label>Enter your name</label>
            <input type="text" placeholder="Enter your name" onChange={(e)=> setName (e.target.value)} />

            </div>
            <div>

            <label>Enter your password</label>
            <input type="text" placeholder="Enter your name" onChange={(e)=> setPassword (e.target.value)}/>
                
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
};
export default SingleInputForm;
