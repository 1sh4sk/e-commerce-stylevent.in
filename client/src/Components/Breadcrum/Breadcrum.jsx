import Wrapper from "./BreadcrumWrapper"
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <Wrapper className="breadcrum">
            HOME <MdKeyboardArrowRight /> SHOP <MdKeyboardArrowRight /> {product.category} <MdKeyboardArrowRight /> {product.name}
        </Wrapper>
    )
}
export default Breadcrum;