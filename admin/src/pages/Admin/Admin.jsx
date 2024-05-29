import AddProduct from "../../components/AddProduct/AddProduct"
import ListProduct from "../../components/ListProduct/ListProduct"
import Sidebar from "../../components/Sidebar/Sidebar"
import Wrapper from "./AdminWrapper"
import { Routes, Route } from 'react-router-dom'

const Admin = () => {
    return (
        <Wrapper className="admin">
            <Sidebar />
            <Routes>
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/listproduct" element={<ListProduct />} />
            </Routes>
        </Wrapper>
    )
}
export default Admin