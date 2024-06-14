import { useContext } from "react"
import Wrapper from "./Wrappers/ShopCategory"
import { ShopContext } from "../Context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <Wrapper className="shop-category">
            <img className="shop-category-banner" src={props.banner} alt="" />

            <div className="shopcategory-indexSort">
                <p>
                    <span>showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <RiArrowDropDownLine />
                </div>
            </div>

            <div className="shop-category-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore More
            </div>

        </Wrapper>
    )
}
export default ShopCategory