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
`;

export default Wrapper;