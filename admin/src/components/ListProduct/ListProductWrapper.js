import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 740px;
padding: 10px 50px;
margin: 30px;
border-radius: 6px;
background: #fff;

.listproduct-format-main{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    width: 100%;
    padding: 20px 0px;
    color: #454545;
    font-size: 15px;
    font-weight: 600;
}

.listproduct-allproducts{
    width:100%;
    overflow-y: auto;
}

.listproduct-format{
    align-items: center;
    font-weight: 500;
}

.listproduct-product-icon{
    height: 80px;
}



.listproduct-remove-icon{
    cursor: pointer;
    margin: auto;
}

@media(max-width: 800px){
    box-sizing: border-box;
    width: 95%;
    height:100%;
    padding:  10px 30px;
    margin: 20px auto;

    .listproduct-format-main{
        padding: 15px 0px;
        color: #454545;
        font-size: 12px;
    }

    ..listproduct-product-icon{
        height: 60px;
    }
}
`;

export default Wrapper;