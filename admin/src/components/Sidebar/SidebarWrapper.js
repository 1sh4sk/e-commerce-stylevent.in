import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 30px;
gap: 20px;
width:100%;
max-width: 250px;
height: 100ch;
background: white;

.sidebar-item{
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    padding: 5px 10px;
    border-radius: 6px;
    background: #f6f6f6;
    gap: 20px;
    cursor: pointer;
}

@media(max-width: 800px){
    padding: 30px 0px;
    flex-direction: row;
    width: 100%;
    max-width: none;
    height: auto;
    justify-content: center;

    .sidebar-item{
        margin: 0;
    }
}
`;

export default Wrapper;