import Styled from 'styled-components'

const Wrapper = Styled.div`
display: flex;
justify-content: space-around;
padding: 10px 16px; 
box-shadow: 0 1px 3px -2px black;
.nav-logo{
    display: flex;
    align-items: center;
    gap: 10px;
    
}

.nav-logo p{
        color: #5F3616;
        font-size: 38px;
        font-weight:  600;
    }

.logo-img{
    width: 70px;
    height: 70px;
    border-radius: 100%; 
}

.nav-menu{
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
    color: #191919;
    font-size: 18px;
    font-weight: 400;
}

.nav-menu li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
}
.nav-menu hr{
    border: none;
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background : #5F3616;
    margin: 0px;
}

.nav-login-cart{
    display: flex;
    align-items: center;
    gap: 45px;
}
.nav-login-cart button{
    width: 150px;
    height: 50px;
    outline: none;
    border: 1px solid #7a7a7a;
    border-radius: 75px;
    color: #515151;
    font-size: 20px;
    font-weight: 500;
    background: white;
    cursor: pointer;
}
.nav-login-cart button:active{
    background: #f3f3f3;
}
.cart-icon{
    font-size: 30px;
}
.nav-cart-count{
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    border-radius: 11px;
    font-size:14px;
    background: red;
    color: white;
}
`;

export default Wrapper;