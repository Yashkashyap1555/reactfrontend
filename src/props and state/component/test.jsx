import Test2 from "./test2";

const { useState } = require("react");

const Test = () =>{

const [data, setData] = useState("hello boys")
console.log(data)
// const a = () =>{
//     setData("yash")
// console.log(a)
// }
return(
    <div>
        {data}
        <br/>
        <Test2  data = {data} setData = {setData}/>
        {/* <button onClick={a}>click</button> */}
    </div>
)
}
export default Test 
