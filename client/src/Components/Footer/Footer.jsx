import Wrapper from "./Footerwrapper"
import footer_logo from '../../assets/logo.png'

import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <Wrapper className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Stylevent.in</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <FaInstagram />
                </div>
                <div className="footer-icons-container">
                    <AiOutlineYoutube />
                </div>
                <div className="footer-icons-container">
                    <IoMailOutline />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved</p>
            </div>
        </Wrapper>
    )
}
export default Footer