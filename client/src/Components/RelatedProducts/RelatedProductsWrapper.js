import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
height: 90vh;

h1{
    color: #171717;
    font-size: 50px;
    font-weight: 600;
}

hr{
    width: 200px;
    height: 6px;
    border-radius: 10px;
    background: #252525;
}

.relatedproducts-items{
    display: flex;
    margin-top: 50px;
    gap: 30px;
}
`;

export default Wrapper;