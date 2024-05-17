import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
margin: 0px 170px;
.productdisplay-left{
    display: flex;
    gap: 16px;
}
.productdisplay-img-list{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.productdisplay-img-list img{
    height: 163px;
}

.productdisplay-img img{
    width: 586px;
    height:700px;
}

.productdisplay-right{
    margin-left: 40px;
    display: flex;
    flex-direction: column;
}

.productdisplay-right h1{
    color: #3d3d3d;
    font-size: 38px;
    font-weight: 600;
}

.productdisplay-right-stars{
    display: flex;
    align-items: center;
    margin-top: 13px;
    gap: 5px;
    color: #1c1c1c;
    font-size: 16px;
}

.productdisplay-right-prices{
    display: flex;
    margin: 40px 0px;
    gap: 30px;
    font-size: 24px;
    font-weight: 700;
}

.productdisplay-right-price-old{
    color: #818181;
    text-decoration: line-through;
}

.productdisplay-right-price-new{
    color: #ff4141;
}

.productdisplay-right-description{
    font-size: 14px;
    font-weight: 400;
}

.productdisplay-right-size h1{
    font-size: 26px;
}

.productdisplay-right-size{
    margin-top: 55px;
    color: #656565;
    font-size: 16px;
    font-weight: 600;
}

.productdisplay-right-sizes{
    display: flex;
    margin: 0px 0;
    gap: 20px;
}


.productdisplay-right-sizes div{
    padding: 12px 20px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;
}

.productdisplay-right button{
    padding: 20px 40px;
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: #ff4141;
    margin: 20px 0px;
    border: none;
    outline: none;
    cursor: pointer;
}

.productdisplay-right-category{
    font-size:14px;
    margin-top: 5px;
}

.productdisplay-right-category span{
    font-weight: 600;
}
`;

export default Wrapper;