import styled from 'styled-components'

const Wrapper = styled.div`

width: 100%;
background: #fce3fe;
padding: 100px 0px;

.loginsignup-container{
    width: 580px;
    height: 600px;
    background: #fff;
    margin: auto;
    padding: 20px 60px;
}

.loginsignup-container h1{
    margin: 20px 0px;
}

.loginsignup-fields{
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
}

.loginsignup-fields input{
    height: 60px;
    width: 100%;
    padding-left: 20px;
    border: 1px solid #c9c9c9;
    outline: none;
    color: #5c5c5c;
    font-size: 18px;
}

.loginsignup-container button{
    width: 460px;
    height: 70px;
    color: white;
    background: #ff4141;
    margin-top: 30px;
    border: none;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
}

.loginsignup-login{
    margin-top: 20px;
    color: #5c5c5c;
    font-size: 14px;
    font-weight: 500;
}
.loginsignup-login span{
    color: #ff4141;
    font-weight:  600;
}

.loginsignup-agree{
    display: flex;
    align-items: center;
    margin-top: 25px;
    gap: 20px;
    color: #5c5c5c;
    font-size: 14px;
    font-weight: 500;
}
`;

export default Wrapper;