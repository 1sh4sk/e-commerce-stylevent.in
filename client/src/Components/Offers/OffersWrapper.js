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

@media(max-width: 1280px){
    padding: 0px 80px;
    margin-bottom: 120px;

    .offers-left h1{
        font-size: 40px;
    }

    .offers-left p{
        font-size: 18px;
    }
.offers-left button{
    width: 220px;
    height: 50px;
    font-size: 18px;
}

}

@media(max-width: 1024px){
    padding: 0px 60px;
    margin-bottom: 80px;
    height: 40vh;

    .offers-left h1{
        font-size: 30px;
    }

    .offers-left p{
        font-size: 16px;
    }
.offers-left button{
    width: 160px;
    height: 40px;
    font-size: 16px;
}

}

@media(max-width: 800px){
    margin-bottom: 60px;

    .offers-left h1{
        font-size: 22px;
    }

    .offers-left p{
        font-size: 13px;
    }
.offers-left button{
    width: 140px;
    height: 30px;
    font-size: 12px;
}

}

@media(max-width: 500px){
    height: 25vh;
    margin-bottom: 50px;

    .offers-left h1{
        font-size: 15px;
    }

    .offers-left p{
        font-size: 10px;
    }

    .offers-left button{
    width: 120px;
    height: 25px;
    font-size: 10px;
    margin-top: 12px;
}

}
`;

export default Wrapper;