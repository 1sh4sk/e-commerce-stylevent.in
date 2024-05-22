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
    align-items: center;
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

@media(max-width: 1280px){
    width: 220px;
    font-size: 14px;

    .img-div{
        height: 280px;
    }

.item-price-new{
    font-size: 18px;
}
    .item-price-old{
        font-size: 14px;
    }
}

@media(max-width:1024px){
    width: 160px;
    font-size: 13px;
    .img-div{
        height: 210px;
    }
    .item-price-old{
        font-size: 13px;
    }
}

@media(max-width:800px){
    width: 120px;
    font-size: 12px;
    .img-div{
        height: 150px;
    }
    .item-price-new{
        font-size: 16px;
    }
    .item-price-old{
        font-size: 12px;
    }
}

@media(max-width:500px){
    width: 160px;
    font-size: 12px;
    .img-div{
        height: 220px;
    }
    .item-price-new{
        font-size: 16px;
    }
    .item-price-old{
        font-size: 12px;
    }
}



`;

export default Wrapper;