import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;
background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
display: flex;

.hero-left{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-left: 180px;
    line-height: 1.1; 
}
.hero-left h2{
    color: #090909;
    font-size: 26px;
    font-weight: 600;
}

.hero-left p{
    color: #171717;
    font-size: 80px;
    font-weight:600; 
}

.hero-hand-icon{
    display: flex;
    align-items: center;
    gap: 20px;
}
.hero-hand-icon img{
    width: 105px;
}

.hero-latest-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 310px;
    height: 70px;
    border-radius: 75px;
    margin-top: 30px;
    background: #ff4141;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
}

.hero-right{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 40%;
        height: 70%;
    }
}

@media(max-width:1290px){
    .hero-left{
        padding-left: 100px;
    }

    .hero-left h2{
        font-size: 22px;
    }

    .hero-left p{
        font-size: 60px;
    }

    .hero-latest-btn{
        gap: 10px;
        width: 250px;
        height: 60px;
        margin-top: 20px;
        font-size: 18px;
    }

    ${'' /* .hero-right img{
        width: 500px;
    }
} */}

@media(max-width:1024px){
    .hero-left{
        padding-left: 80px;
    }

    .hero-left h2{
        font-size: 20px;
    }

    .hero-left p{
        font-size: 50px;
    }

    .hero-latest-btn{
        width: 220px;
        height: 50px;
        font-size: 16px;
    }

}

@media(max-width:800px){
    .hero-left{
        padding-left: 30px;
    }

    .hero-left h2{
        font-size: 16px;
    }

    .hero-left p{
        font-size: 40px;
    }

    .hero-latest-btn{
        width: 175px;
        height: 40px;
        font-size: 13px;
    }

}

@media(max-width:500px){
    flex-direction: column;
    .hero-left h2{
        font-size: 18px;
    }

    .hero-left p{
        font-size: 50px;
    }

    .hero-latest-btn{
        width: 200px;
        height: 45px;
        font-size: 14px;
    }

    .hero-right{
        display: none;
    }

}


`;

export default Wrapper;