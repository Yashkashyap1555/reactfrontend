import { useState } from "react";
import "./newuser2.css";

const InitialState = {
    name : "",
    email : "",
    password : "",
    confirmpassword : "",
    address : "",
}

const NewUser2 = () => {
    const [newuser, setNewUser] = useState(InitialState)
    console.log(newuser, "newuser")
  return (
    <form className="box">
      <h2>New User Registration Form</h2>

      <div >
        <label className="label">Name</label>
        <input type="text" placeholder="enter your name" />
      </div>
      <div>
        <label className="label">Email</label>
        <input type="text" placeholder="enter your email" />
      </div>
      <div>
        <label className="label">Password</label>
        <input type="text" placeholder="enter your password" />
      </div>
      <div>
        <label className="label">Confirm Password</label>
        <input type="text" placeholder="enter your confirm password" />
      </div>
      <div>
        <label className="label">Address</label>
        <input type="text" placeholder="enter your address" />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default NewUser2;
