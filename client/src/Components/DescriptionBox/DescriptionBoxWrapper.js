import styled from "styled-components";

const Wrapper = styled.div`
margin: 120px 170px;

.descriptionbox-navigator{
    display: flex;
}

.descriptionbox-nav-box{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    width:171px;height: 70px;
    border: 1px solid #d0d0d0;
}

.fade{
    background: #fbfbfb;
    color: #555; 
}

.descriptionbox-description{
    display: flex;
    flex-direction: column;
    gap: 25px;
    border: 1px solid #d0d0d0;
    padding: 48px;
    padding-bottom: 70px;
}

@media(max-width: 1280px){
    margin: 60px;
}

@media(max-width: 800px){
    margin: 60px 20px;

    .descriptionbox-description{
        font-size: 14px;
    }
}
`;

export default Wrapper;