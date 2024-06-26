import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction:  column;
justify-content: center;
align-items: center;
gap: 50px;
margin-top: 50px;

.footer-logo{
    display: flex;
    align-items: center;
    gap: 20px;
}
.footer-logo img{
    width: 80px;
    height: 80px;
    border-radius: 100%;
}
.footer-logo p{
    color: #383838;
    font-size: 46px;
    font-weight: 700;
}

.footer-links{
    display: flex;
    list-style: none;
    gap: 50px;
    color: #252525;
    font-size: 20px;
}

.footer-links li{
    cursor: pointer;
}
.footer-social-icon{
    display: flex;
    gap: 20px;
}
.footer-icons-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    padding-bottom: 6px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    font-size: 25px;
}
.footer-copyright{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin-bottom:30px;
    color: #1a1a1a1a;
    font-size:20px;
}
.footer-copyright hr{
    width: 80%;
    border: none;
    border-radius: 10px;
    height: 3px;
    background: #c7c7c7;
}

@media(max-width: 800px){
    gap: 20px;
    .footer-logo{
        gap: 10px;
        align-items: end;
    }

    .footer-logo img{
        width: 40px;
        height: 40px;
    }

    .footer-logo p{
        font-size: 25px;
    }

    .footer-links{
        font-size: 14px;
        gap: 10px;
    }

    .footer-icons-container{
        font-size: 20px;
    }

    .footer-copyright{
        font-size: 13px;
    }
}
`;

export default Wrapper;