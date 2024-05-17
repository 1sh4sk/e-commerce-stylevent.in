import styled from "styled-components";

const Wrapper = styled.div`
width: 280px;
.img-div{
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    background:#E0D1D1;
    margin-bottom: 6px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.item p{
    margin: 6px 0px;
}
.item-prices{
    display: flex;
    gap: 20px;
}
.item-price-new{
    color: #374151;
    font-size: 18px;
    font-weight: 600;
}
.item-price-old{
    color: #8c8c8c;
    font-size: 18px;
    font-weight: 500;
    text-decoration: line-through;
}
&:hover{
    transform: scale(1.05);
    transition: 0.6s;
}
`;

export default Wrapper;