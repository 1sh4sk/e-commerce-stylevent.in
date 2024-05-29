import styled from "styled-components";

const Wrapper = styled.div`
box-sizing: border-box;
width: 100%;
max-width: 800px;
padding: 30px 50px;
margin: 20px 30px;
border-radius: 6px;
background: white;

.addproduct-item-field{
    width: 100%;
    color: #7b7b7b;
    font-size: 16px; 
}

.addproduct-item-field input{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    padding-left: 15px;
    border: 1px solid #c3c3c3;
    outline: none;
    color: #7b7b7b;
    font-family: 'Poppins';
    font-size: 14px;
}

.addproduct-price{
    display: flex;
    gap: 40px;
}

.addproduct-selector{
    padding: 10px;
    width: 200px;
    height: 50px;
    font-size: 14px;
    color: #7b7b7b;
    border: 1px solid #7b7b7b8d;
    border-radius: 4px;
}

.addproduct-thumbnail-img{
    height: 120px;
    width: 120px;
    border-radius: 10px;
    object-fit: contain;
    margin: 10px 0px;
}

.addproduct-btn{
    margin-top: 20px;
    width: 160px;
    height: 50px;
    border-radius: 6px;
    background: #6079ff;
    border:none;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}

@media(max-width: 800px){
    .add-product{
        width: auto;
        padding: 30px;
        margin: 20px;
    }
}

`;

export default Wrapper;