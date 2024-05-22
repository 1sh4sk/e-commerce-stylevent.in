import styled from "styled-components";

const Wrapper = styled.div`
width: 65%;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
padding: 0px 140px;
margin-bottom: 100px;
background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
gap: 30px;

h1{
    color: #454545;
    font-size: 40px;
    font-weight: 600;
}
p{
    color:#454545;
    font-size: 20px;
}
div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    width: 730px;
    height: 70px;
    border-radius: 80px;border: 1px solid #e3e3e3;
}

input{
    width: 500px;
    margin-left: 20px;
    border: none;
     outline: none;
     color: #616161;
     font-family: Poppins;
     font-size: 16px;
}

button{
    width: 210px;
    height: 70px;
    border-radius: 80px;
    background: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

@media(max-width: 1280px){
    padding: 0px 80px;
    margin-bottom: 120px;
    gap: 20px;

    h1{
        font-size: 36px;
    }

    p{
        font-size:16px;
    }

    div{
        width: 600px;
        height: 60px;
    }

   div input{
        width: 400px;
    }

    div button{
        width: 160px;
        height: 60px;

    }
}

@media(max-width: 1024px){
    margin-bottom: 60px;

    h1{
        font-size: 28px;
    }

    p{
        font-size:14px;
    }

    div{
        width: 500px;
        height: 50px;
    }

   div input{
        width: 300px;
        font-size: 14px;
    }

    div button{
        width: 120px;
        height: 50px;
        font-size: 14px;
    }
}

@media(max-width: 800px){
    margin-bottom: 30px;
    height: 35vh;

    h1{
        font-size: 18px;
    }

    p{
        font-size:12px;
    }

    div{
        width: 400px;
        height: 40px;
    }

   div input{
        width: 200px;
        font-size: 13px;
    }

    div button{
        width: 100px;
        height: 40px;
        font-size: 13px;
    }
}


@media(max-width: 500px){
    height: 25vh;
    width: 100%;
    padding: 0px;
    gap: 15px;

    h1{
        font-size: 16px;
    }

    p{
        font-size:13px;
        max-width: 200px;
        text-align: center;
    }

    div{
        width: 290px;
        height: 40px;
    }

   div input{
        width: 130px;
    }
}
`;

export default Wrapper;