import Wrapper from "./NavbarWrapper"
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <Wrapper>
            <img src={navlogo} alt="" className="nav-logo" />
            <img src={navProfile} alt="" className="nav-profile" />
        </Wrapper>
    )
}
export default Navbar