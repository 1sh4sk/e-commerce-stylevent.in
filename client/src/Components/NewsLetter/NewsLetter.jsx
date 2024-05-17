import Wrapper from "./NewsLetterWrapper"

const NewsLetter = () => {
    return (
        <Wrapper className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter to stay updated</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </Wrapper>
    )
}
export default NewsLetter