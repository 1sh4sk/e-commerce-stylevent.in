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


`;

export default Wrapper;