import { useEffect, useState } from "react"
import Wrapper from "./ListProductWrapper"
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) => {
            console.log(data);
            setAllProducts(data)
        });
    }

    useEffect(() => {
        fetchInfo();
    }, []);


    const removeProduct = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ id: id })
        })

        await fetchInfo();
    }

    return (
        <Wrapper className="list-product">
            <h1>All Products List</h1>

            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>

            <div className="listproduct-allproducts">
                <hr />
                {
                    allProducts.map((product, i) => {
                        return <>
                            <div className="listproduct-format-main  listproduct-format" key={i}>
                                <img className="listproduct-product-icon" src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>{product.old_price}</p>
                                <p>{product.new_price}</p>
                                <p>{product.category}</p>
                                <img className="listproduct-remove-icon" src={cross_icon} alt="" onClick={() => {
                                    removeProduct(product.id);
                                }} />
                            </div>
                            <hr />
                        </>
                    })
                }
            </div>
        </Wrapper>
    )
}
export default ListProduct