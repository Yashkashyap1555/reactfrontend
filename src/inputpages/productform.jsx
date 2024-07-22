import { useEffect, useState } from "react";
import React from "react";
import "./product.css";
import axios from "axios";

const ProductForm = () => {
  const InitialState = {
    name: "",
    amount: "",
    description: "",
  };

  const [prodetail, setProDetail] = useState(InitialState);
  // console.log(prodetail, "pro");
  const [show, setShow] = useState([]);
  // console.log(show, "show data");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProDetail({
      ...prodetail,
      [name]: value,
    });
  };
  console.log(prodetail, "0988");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setProDetail(prodetail)

    try {
      const apiProduct = await axios.post(
        "http://localhost:5000/product/productuser",
        prodetail
      );
      console.log(apiProduct, "apiwork");
      if (apiProduct.status === 201) {
        alert("your product form succesfully register");
      }
    } catch (error) {
      console.log(error.message);
    }
    setShow([...show, prodetail]);
  };

  const handleGetAllUserDetail = async () => {
    try {
      const apiUser = await axios.get(
        "http://localhost:5000/product/allproduct"
      );
      if (apiUser.status === 200) {
        const { data } = apiUser.data;
        setShow(data);

        //niche wala setShow apiUser me se data ko find karke set karva raha hai UI pe//
        // setShow(apiUser?.data?.data)
        alert("your user data successfully retrived");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetAllUserDetail();
  }, []);

  const handleDelete = async (data) => {
    const payload = {
      name: data,
    };

    try {
      const apiProduct = await axios.delete(
        "http://localhost:5000/product/productdelete",
        { data: payload }
      );
      console.log(apiProduct, "delete");
      if (apiProduct.status === 200) {
        alert("your data delete successfully");
        handleGetAllUserDetail();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleProfile = async (data) => {
    // console.log(data ,"data")
    try {
      const apiProfileId = await axios.get(
        "http://localhost:5000/product/productId", {data : data}
      );
      console.log(apiProfileId, "apiProfile");
      if (apiProfileId.status === 201) {
        alert("your productid is founded");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { name, amount, description } = prodetail;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Product Detail</h1>
        </div>
        <label>Name</label>
        <div>
          <input
            required
            name="name"
            value={name}
            type="text"
            placeholder="enter your name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amount</label>

          <input
            required
            name="amount"
            value={amount}
            type="number"
            placeholder="enter a amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>

          <input
            required
            name="description"
            value={description}
            type="text"
            placeholder="enter a description"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
        {/* <button onClick={handleGetAllDetail}>detail</button> */}
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Description</th>
        </tr>

        {show?.map((value, i) => (
          <tr key={i}>
            <td>{value.name}</td>
            <td>{value.amount}</td>
            <td>{value.description}</td>
            <button onClick={() => handleDelete(value?.name)}>Delete</button>
            <button onClick={handleProfile}>Profile</button>

            
          </tr>
        ))}
              
      </table>

    </>
  );
};
export default ProductForm;
