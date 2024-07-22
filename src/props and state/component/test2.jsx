const Test2 = (props) =>{
console.log(props)

const {data, setData} = props
console.log(data)


const change = () =>{
    setData("yash")
}

    return(
        <div>
            <button onClick={change}>click</button>
        </div>
    )
}
export default Test2