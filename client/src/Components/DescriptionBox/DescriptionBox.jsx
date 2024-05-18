import Wrapper from "./DescriptionBoxWrapper"

const DescriptionBox = () => {
    return (
        <Wrapper className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>

            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis repellat iusto ea! Rerum exercitationem, dolorem, porro sint eos asperiores quia expedita, similique voluptates possimus quo explicabo id dicta repellat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita quam asperiores totam aperiam, provident ipsa illo sequi quod! Illum nemo vero neque sequi. Recusandae architecto deleniti quod eos aperiam?
                </p>
            </div>
        </Wrapper>
    )
}
export default DescriptionBox