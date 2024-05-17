import Wrapper from "./HeroWrapper"

import HeroBg from '../../assets/hero-bg.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
    return (
        <Wrapper className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src="" alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    latest collection
                    <FaArrowRightLong />
                </div>
            </div>
            <div className="hero-right">
                <img src={HeroBg} alt="" />
            </div>
        </Wrapper>
    )
}
export default Hero