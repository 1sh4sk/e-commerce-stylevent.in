import Wrapper from "./NavbarWrapper"

import logo from '../../assets/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <Wrapper>
            <div className="nav-logo">
                <img src={logo} alt="" className="logo-img" />
                {/* <p>Stylevent.in</p> */}
            </div>

            <div onClick={toggle}><GiHamburgerMenu className="nav-toggle-icon" /></div>

            <ul ref={menuRef} className="nav-menu">
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
                    {getTotalCartItems()}
                </div>
            </div>
        </Wrapper>
    )
}
export default Navbar