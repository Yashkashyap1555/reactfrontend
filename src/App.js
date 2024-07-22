// import logo from './logo.svg';
import "./App.css";
import NewUserForm from "./inputpages/newuserform";
// import NewUser2 from "./inputpages/newuser2";
import Header from "./header/header";
// import ObjectInputForm from "./inputpages/objectinputform";
// import ProductForm from './inputpages/productform';
// import SingleInputForm from './inputpages/singleinputform';
// import Test from './props and state/component/test';
// import Props1 from './props and state/component/props1';
// import Props3 from './props and state/component/props3';
// import {SimpleProps} from './props and state/component/simpleprops';
// import Counter from './props and state/pages/counter';
import { Route, Routes } from "react-router-dom";
// import ProductForm from "./inputpages/productform";
// import FirstRegistration from "./practicepage/firstregistration";

function App() {
  return (
    <div className="App">
     
      <Header />
      <Routes>
        <Route path="/" element={""} />
        <Route path="/user" element={<ObjectInputForm />} />
        <Route path="/product" element={<ProductForm />} />
      </Routes>
      <FirstRegistration />
      <NewUser2 />
      <NewUserForm />
      
    </div>
  );
}

export default App;
