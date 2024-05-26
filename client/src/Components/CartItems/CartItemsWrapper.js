import styled from 'styled-components'

const Wrapper = styled.div`
margin: 100px 170px;

hr{
    height: 3px;
    background: #e2e2e2;
    border: 0;
}

.cartitem-format-main{
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 75px;
    padding: 20px 0px;
    color: #454545;
    font-size:18px;
    font-weight: 600;
}

.cartitems-format{
    font-size: 17px;
    font-weight: 500;
}

.carticon-product-icon{
    height: 62px;
}

.cartitems-remove-icon{
    width: 15px;
    margin: 0px 40px;
    cursor: pointer;
}

.cartitems-quantity{
    width: 64px;
    height: 60px;
    border: 2px solid #ebebeb;
    background: white;
}

.cartitems-down{
    display: flex;
    margin: 100px 0px;
}

.cartitems-total{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    gap: 40px;
}

.cartitems-total-item{
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
}

.cartitems-total button{
    width: 262px;
    height: 58px;
    outline: none;
    border: none;
    background: #ff5a5a;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

.cartitems-promocode{
    flex: 1;
    font-size: 16px;
    font-weight: 500;
}

.cartitems-promocode p{
    color: #555;
}

.cartitems-promo-box{
    width: 500px;
    margin-top: 15px;
    padding-left: 20px;
    height: 58px;
    background: #eaeaea;
}

.cartitems-promo-box input{
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    width: 330px;
    height: 50px;
}

.cartitems-promo-box button{
    width: 150px;
    height: 58px;
    font-size: 16px;
    background: black;
    color: white;
    cursor: pointer;
}

@media(max-width: 1280px){
    margin: 60px 50px;

    .cartitem-format-main{
        grid-template-columns: 0.5fr 3fr 0.5fr 0.5fr 0.5fr 0.5fr;
        gap: 20px;
        padding: 15px 0px;
        font-size: 15px;
    }

    .carticon-product-icon{
        height: 50px;
    }

    .cartitems-remove-icon{
        margin: auto;
    }

    .cartitems-quantity{
        width: 40px;
        height: 30px;
    }

    .cartitems-down{
        margin: 80px 0px;
        flex-direction: column;
        gap: 80px;
    }

    .cartitems-total{
        margin: 0px;
    }

    .cartitems-total button{
        max-width: 200px;
        height: 45px;
        font-size:13px;
    }

    .cartitems-promo-box{
        width: auto;
        max-width: 500px;
    }

    .cartitems-promo-box input{
        width: 100%;
    }

    .cartitems-promo-box button{
        width:120px;
        margin-left: -120px;
    }
}

@media(max-width: 500px){
    .cartitem-format-main{
        display:none;
        grid-template-columns: 0.5fr 3fr 0.5fr;
        gap: 10px;
    }

    .cartitems-format{
        display: grid;
    }
}

`;

export default Wrapper;