// import ObjectInputForm from "../inputpages/objectinputform"
// import ProductForm from "../inputpages/productform"

import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div>
            <Link to={"/user"}>ObjectInputForm</Link>
            <Link to={"/product"}>productform</Link>
            <Link to={"/"}>Home</Link>
          {/* <ObjectInputForm /> */}
          {/* <ProductForm /> */}
        </div>
    )
}
export default Header