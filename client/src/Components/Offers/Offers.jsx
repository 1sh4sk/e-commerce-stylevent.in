import Wrapper from "./OffersWrapper"
import exclusive_img from '../../assets/hero-bg.png'
const Offers = () => {
    return (
        <Wrapper className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY THE BEST SELLER PRODUCT</p>
                <button>Check now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_img} alt="" />
            </div>
        </Wrapper>
    )
}
export default Offers