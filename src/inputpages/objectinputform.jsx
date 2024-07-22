import { useEffect, useState } from "react";
import axios  from "axios";
import "./registration.css";

//this is component "ObjectInputForm"//
const ObjectInputForm = () => {
  const InitialState = {
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  };

  //this is usestate to set the object value//
  const [data, setData] = useState(InitialState);
  const [showpop, setShowPop] = useState(false)
const [profileData,setProfileData] = useState()
  // console.log(data, "7865");

  // this is another usestate and it store the value of object in array//
  const [userlist, setUserList] = useState([]);
  console.log(userlist, "userdata");

  //this is handleChange fun to store the value in particular own location//
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // this is handleSubmit fun to set the value in particular own location//
  const handleSubmit = async (event) => {
    event.preventDefault();

    //setUserList is a function and set the value in userlist(variable)//
    //line 38 me [...]me copy le raha hai userlist ki and data ko set kar raha hai//
    setUserList([...userlist, data]);

    //axios se data post kar rahe hai backend me
    //aur postman se url bhi likhna hai kyuki data
    try {
      //this (apiResponse) is  api calling
      const apiResponse = await axios.post(
        "http://localhost:5000/user/register",
        data
      );
      console.log(apiResponse, "api");
      //this is apiresponse
      if (apiResponse.status === 201) {
        setData(InitialState);
        alert("user register successfully");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // this (handleGetAllUserDetail) is another api calling//
  const handleGetAllUserDetail = async () => {
    try {
      const apiUser = await axios.get("http://localhost:5000/user/userdetail");
      if (apiUser.status === 200) {
        // this line to destructured in (apiUser.data) se data ko destructured kiya hai//
        const { data } = apiUser.data;
        // then this line to set the (data) in setUserList because it is an array to store in many object//
        setUserList(data);
        alert("your user data successfully retrived");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // (useEffect) is a hook and it is work on page refresh and inner statement such as function to work automatically//
  useEffect(() => {
    handleGetAllUserDetail();
  }, []);

  const handleDelete = (list) => {
    const useruidata = userlist.filter((value, i) => i !== list);
    setUserList(useruidata);
  };
 

  const handleProfile = async(id) =>{
    console.log(id, "sdsjhbsjhasjcajshdbsddh")
    setShowPop(true)
    try {
      const apiprofile = await axios.get(`http://localhost:5000/user/profile/${ id?._id}`)
      console.log(apiprofile, "apiprofile")
      if(apiprofile.status === 200){
          setProfileData(apiprofile?.data?.data)
        alert("userid founded successfully")
       
      }
      
    } catch (error) {
      console.log(error.message)
      
    }
  }

  const { name, email, phonenumber, password } = data;

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <h1>Registration Form</h1>
          <div>
            <div>
              <lable className="label">Name</lable>
              <br />
              <input
                className="inputbox"
                required
                name="name"
                value={name}
                type="text"
                placeholder="enter your name "
                onChange={handleChange}
              />
            </div>

            <div>
              <lable className="label">Email</lable>
              <br />
              <input
                className="inputbox"
                required
                name="email"
                value={email}
                type="email"
                placeholder="enter your eamil "
                onChange={handleChange}
              />
            </div>

            <div>
              <lable className="label">Phone Number</lable>
              <br />
              <input
                className="inputbox"
                required
                name="phonenumber"
                value={phonenumber}
                type="number"
                placeholder="enter your phonenumber "
                onChange={handleChange}
              />
            </div>

            <div>
              <lable className="label">Password</lable>
              <br />
              <input
                className="inputbox"
                required
                name="password"
                value={password}
                type="password"
                placeholder="enter your password "
                onChange={handleChange}
              />
            </div>
            <button className="btn">submit</button>
          </div>
        </div>
      </form>

      <div style={{marginBottom : "20px"}}>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phonenumber</th>
            <th>Password</th>
          </tr>
          {/* the map function only work in array */}
          {/* userlist is useState but it store the value in array [] because this [] bracket use in the state */}
          {/* (?)this operator does not allow to entry // kab tak jabtak statement me kuch data ho nahi*/}
          {userlist?.map((value, i) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.phonenumber}</td>
              <td>{value.password}</td>
              <button onClick={() => handleDelete(i)}>delete</button>
              <button onClick={() => handleProfile(value)}>Profile</button>
            </tr>
          ))}
        </table>
      </div>

      {/* <div className="profile-box">
        <table>
          <tr>
            <div>
            <th>Name</th>

            </div>
            <div>
            <th>Email</th>

            </div>
            <div>
            <th>Phonenumber</th>

            </div>
            <div>
            <th>Password</th>

            </div>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div> */}
{
  showpop &&

      <div className="box">
          <div>Name : {profileData?.name}</div>
          <div>Email : {profileData?.email}</div>
          <div>Phonenumber : {profileData?.phonenumber}</div>
          <div>Password : {profileData?.password}</div>
      </div>
}
    </>
  );
};
export default ObjectInputForm;
