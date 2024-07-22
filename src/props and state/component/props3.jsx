import { useState } from "react";
import Props4 from "../pages/props4";
                        // This is Parent file //
/********************************************************************/ 
    //** important data humesha parent to child hi flow hota hai**//


//** we are used to props drilling method with the help of state **//
//** In multiple component and state in used **//

const Props3 = () => {
    //* multiple state use *//
  const [userdata, setUserdata] = useState("yash");
  const [data, setData] = useState("monu")
//   console.log(userdata, "4563");


  return (
    <>
      <div>
        <h1>This is multiple props drilling method</h1>
         {/* yaha se UI pe data show kiya hai */}
        {userdata}

        <div>
        {/* yaha se UI pe data show kiya hai */}
            {data}

        </div>
      </div>

      {/* yaha se data pass kiya hai maine dono state ka */}
      <Props4  userdata = {userdata} setUserdata = {setUserdata} data = {data} setData = {setData}/>
    </>
  );
};
export default Props3;
