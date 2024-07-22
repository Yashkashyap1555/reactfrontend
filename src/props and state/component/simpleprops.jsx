import { useState } from "react"
import SecondSimple from "./secondsimple"

export const SimpleProps = () =>{

const [change, setChange] = useState("aman")

const Baretha = (data) =>{
console.log(data,"456")
//setChange isly use kiya kyu ki usse value UI pe set karva di hai//
setChange(data)
}

    return(
        <div>
            {change}
            <SecondSimple  Baretha = {Baretha}/>
        </div>
    )
}
// export default SimpleProps