import { useEffect, useState } from "react";
import axios from "axios";
import "./newuser.css";

const NewUserForm = () => {
  const InitialState = {
    name: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(InitialState);
  console.log(userData, "userdata");
  const [userDetail, setUserDetail] = useState([]);
  //   console.log(userDetail, "userDetail");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const apiuser = await axios.post(
        "http://localhost:5000/newuser/newuserregister",
        userData
      );
      console.log(apiuser, "api");
      if (apiuser.status === 201) {
        alert("user register successful");
        getAllDetail();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllDetail = async () => {
    try {
      const getapidetail = await axios.get(
        "http://localhost:5000/newuser/getalluser"
      );
      console.log(getapidetail, "getapi");

      const { data, status } = getapidetail;

      if (status === 200) {
        const { data } = getapidetail.data;
        console.log(data, "datav1");
        setUserDetail(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllDetail();
  }, []);

  const handledelete = async (data) => {
    try {
      const apidelete = await axios.delete(
        `http://localhost:5000/newuser/userdelete/${data}`
      );
      if (apidelete.status === 200) {
        alert("your data deleted successful");
        getAllDetail();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { name, email, password } = userData;
  return (
    <>
      <form onSubmit={handlesubmit} className="form-box">
        <h2>Registration Form</h2>
        <div>
          <label className="label">Name</label>
          <input 
            name="name"
            value={name}
            type="text"
            placeholder="enter your name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">Email</label>
          <input
            name="email"
            value={email}
            type="text"
            placeholder="enter your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">Password</label>
          <input
            name="password"
            value={password}
            type="text"
            placeholder="enter your password"
            onChange={handleChange}
          />
        </div>
        <button>submit</button>
      </form>

      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>

          {userDetail?.map((value, i) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <button onClick={() => handledelete(value?._id)}>delete</button>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default NewUserForm;
