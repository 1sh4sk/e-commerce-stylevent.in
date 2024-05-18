import Wrapper from "./ItemWrapper"
import { Link } from "react-router-dom"

const Item = (props) => {
    return (
        <Wrapper className="item">
            <div className="img-div">
                <Link to={`/product/${props.id}`}>
                    <img src={props.image} alt="" onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }} />
                </Link>
            </div>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ₹{props.new_price}
                </div>
                <div className="item-price-old">
                    ₹{props.old_price}
                </div>
            </div>
        </Wrapper>
    )
}
export default Item