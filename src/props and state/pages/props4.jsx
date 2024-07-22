const Props4 = (props) =>{
console.log(props, "4556")
                        // This is Child file //
/******************************************************************************/


//** yaha maine props ki help se data to nikala hai or destructure kiya hai **//
const {userdata , setUserdata, data , setData} = props

// ye first function hai jo setUserdata ki value ko update kar raha hai//
const NameChange = () =>{
    setUserdata("prajapati")
}

// ye second function hai jo setData ki value ko upadate kar raha hai//
const NameSwipe = () =>{
    setData("singh")

}

    return(
        <>
        {/* ye dono button hai jo value change kar rahe hai {UI} pe */}
        <div>
            <button onClick={NameChange}>hitt me again</button>
        </div>
            <button onClick={NameSwipe}>click me</button>      
        </>
    )
}
export default Props4