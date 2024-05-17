import styled from "styled-components";

const Wrapper = styled.div`
width: 80%;
height: 60vh;
display: flex;
margin: auto;
padding: 0px 140px;
margin-bottom: 150px;
background: linear-gradient(180deg,#fde1ff 0%,#e1ffea22 60%);

.offers-left{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.offers-left h1{
    color: #171717;
    font-size: 80px;
    font-weight: 600;
}

.offers-left p{
    color: #171717;
    font-size: 22px;
    font-weight: 600;
}


.offers-left button{
    width: 280px;
    height: 70px;
    border-radius: 35px;
    background: #ff4141;
    border: none;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
}

.offers-right{
    ${'' /* flex: 1; */}
    display: flex;
    justify-content: center;
}
`;

export default Wrapper;