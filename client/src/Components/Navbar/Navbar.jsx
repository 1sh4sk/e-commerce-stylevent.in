import Wrapper from "./NavbarWrapper"

import logo from '../../assets/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <Wrapper>
            <div className="nav-logo">
                <img src={logo} alt="" className="logo-img" />
                {/* <p>Stylevent.in</p> */}
            </div>

            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/' style={{ textDecoration: "none", color: "#191919" }}>Shop</Link>
                    {menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("hijabs") }}>
                    <Link to='/hijabs' style={{ textDecoration: "none", color: "#191919" }}>Hijabs</Link>
                    {menu === "hijabs" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("abaya") }}><Link to='/abaya' style={{ textDecoration: "none", color: "#191919" }}>Abaya</Link>
                    {menu === "abaya" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("namaz-khimar") }}>
                    <Link to='namaz-khimar' style={{ textDecoration: "none", color: "#191919" }}>Namaz Khimar</Link>
                    {menu === "namaz-khimar" ? <hr /> : null}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login' style={{ textDecoration: "none" }}><button>Login</button></Link>
                <Link to='/cart' style={{ textDecoration: "none", color: "#515151" }}><FaCartShopping className="cart-icon" /></Link>
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </Wrapper>
    )
}
export default Navbar