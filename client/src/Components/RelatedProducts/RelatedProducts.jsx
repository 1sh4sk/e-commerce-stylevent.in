import Wrapper from "./RelatedProductsWrapper"
import data_product from '../../assets/Assets/data'
import Item from '../Items/Item'

const RelatedProducts = () => {
    return (
        <Wrapper className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {
                    data_product.map((item, i) => {
                        return <Item key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} />
                    })
                }
            </div>
        </Wrapper>
    )
}
export default RelatedProducts