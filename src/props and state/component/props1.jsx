import { useState } from "react"
import Props2 from "../pages/props2"

//** This is props drilling method with the help of state.**//
//** In single single component to used **/ 


const Props1 = () =>{
    
//* single state use *//
const [data, setData] = useState ("monu")
// console.log(data, "0123")

//** line 14 me maine check kiya tha ki ye function work ho raha hai is page pe. **/
// const change = () => {
//     setData("singh")
// }

    return(
        <div>
            <h1>This is props practices</h1>
            {data}
            
            <div>
            {/* <button onClick ={change}>hit me</button> */}
                
            </div>

        {/** yaha se pass kiya hai data in another page pe **/}
        <Props2 data ={data} setData ={setData}/>
        </div>
    )
}
export default Props1