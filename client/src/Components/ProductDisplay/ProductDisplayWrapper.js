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
    margin-top: 55px;
}

.productdisplay-right-size{
    color: #656565;
    font-size: 16px;
    font-weight: 600;
}

.productdisplay-right-sizes{
    display: flex;
    margin: 0px 0px;
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

@media(max-width: 1280px){
    margin: 0px 60px;

    .productdisplay-left{
        gap: 10px;
    }

    .productdisplay-img-list{
        gap: 10px;
    }

    .productdisplay-img-list img{
        height: 120px;
    }

    .productdisplay-img img{
        width: auto;
        height: 510px;
    }

    .productdisplay-right{
        margin: 0px 30px;
    }

    .productdisplay-right h1{
        font-size: 22px;
    }

    .productdisplay-right-stars{
        gap: 3px;
        font-size: 13px;
    }

    .productdisplay-right-prices{
        margin: 10px 0px;
        font-size: 18px;
    }

    .productdisplay-right-description{
        font-size: 13px;
    }

    .productdisplay-right-size h1{
        font-size:20px;
        margin-top: 20px;
    }

    .productdisplay-right-sizes{
        padding: 14px 20px;
    }

    .productdisplay-right button{
        width: 150px;
        padding: 15px 0px;
        margin-bottom: 20px;
    }

    .productdisplay-right-category{
        margin-top: 5px;
        font-size: 14px;
    }
}

@media(max-width: 1024px){
    margin: 0px 30px;

    .productdisplay-left{
        gap: 5px;
    }

    .productdisplay-img-list img{
        height: 80px;
    }

    .productdisplay-img img{
        height: 350px;
    }

    .productdisplay-right h1{
        font-size: 18px;
    }

    .productdisplay-right-star img{
        width: 15px
    }

    .productdisplay-right-description{
        font-size: 12px;
    }


    .productdisplay-right-sizes{
        margin: 0px 0px;
    }

    .productdisplay-right-sizes div{
        padding: 10px 16px;
        font-size:12px;
    }

    .productdisplay-right button{
        width: 120px;
        padding: 10px 0px;
        margin-bottom: 10px;
        font-size: 14px;
        margin: 0px 0px;

    }

    .productdisplay-right-category{
        font-size: 12px;
    }
}

@media(max-width: 800px){
    margin: 0px 10px;

    .productdisplay-left{
        gap: 0px;
        flex-direction: column-reverse;
        align-items: center;
    }

.productdisplay-img-list{
    flex-direction: row;
}
    .productdisplay-img-list img{
        height: 70px;
    }

    .productdisplay-img img{
        height: 300px;
    }

    .productdisplay-right h1{
        font-size: 14px;
    }

    .productdisplay-right-star img{
        width: 13px
    }

    .productdisplay-right-description{
        font-size: 10px;
    }
.productdisplay-right-size h1{
    margin-top: 10px;
}

    .productdisplay-right-sizes{
        margin-top: 10px;
        padding: 10px 0px;
        gap: 5px;     
    }

    .productdisplay-right-sizes div{
        padding: 4px 11px;
    }

    .productdisplay-right button{
        width: 100px;
        font-size: 12px;
        margin: 10px 0px;
    }

    .productdisplay-right-category{
        font-size: 10px;
    }
}

@media(max-width: 500px){
    flex-direction: column;

    .productdisplay-left{
        gap: 10px;
        flex-direction: row;
        margin: auto;
    }

    .productdisplay-img-list{
        flex-direction: column;
        gap: 8px;
    }

    .productdisplay-img-list img{
        height: 75px;
    }

    .productdisplay-img img{
        height: 330px;
    }

    .productdisplay-right{
        margin: 5px;
    }

    .productdisplay-right h1{
        margin-top: 15px;
        font-size: 20px;
        font-weight: 500;
    }

    .productdisplay-right-stars img{
        width: 15px;
    }

    .productdisplay-right-sizes{
        gap: 10px;
        margin: 20px 0px;
    }

    .productdisplay-right-sizes div{
        padding: 10px 16px;
        font-size: 14px;
    }

    .productdisplay-right button{
        width: 130px;
        font-size: 15px;
        padding: 12px 0px;
    }

    .productdisplay-right-category{
        font-size: 16px;
    }
}
`;

export default Wrapper;