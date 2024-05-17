import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
height: 90vh;


h1{
    color: #171717;
    font-size: 40px;
    font-weight: 600;
}

hr{
    width: 200px;
    height: 6px;
    border-radius: 10px;
    background: #5F3616;
}

.popular-item{
    
    margin-top: 50px;
    display: flex;
    gap: 30px;
}
`;

export default Wrapper;