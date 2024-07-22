//** ye second page hai single single component ka props drilling **//
const Props2 = (props) =>{
// console.log(props, "4620")


//** yase props ki help se data aur setdata ko destructure kiya hai  **//
//** data is variable and setData is function **//
const {data, setData} = props
console.log(props, "5456")


//** ye function se humne UI page data ko change kiya hai **//
const Swipe = () =>{
    setData("yash")
}

    return(
        <div>
            <button onClick={Swipe}>hitt me</button>
        </div>
    )
}
export default Props2