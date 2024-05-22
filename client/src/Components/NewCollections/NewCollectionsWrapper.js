import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-bottom: 100px;


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

.collections{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 50px;
    gap: 30px;
}

@media(max-width: 1280px){
   
    

    hr{
        width: 160px;
        height: 4px;
    }
    .collections{
        gap: 20px;
        margin-top: 30px;
    }
}

@media(max-width: 1024px){
   
    
    h1{
        font-size: 30px;
    }
    hr{
        width: 120px;
        height: 3px;
    }

    .collections{
        gap: 15px;
        margin-top: 20px;
    }
}

@media(max-width: 800px){
   
    
    h1{
        font-size: 20px;
    }
    hr{
        width: 100px;
    }

    .collections{
        gap: 5px;
    }
}

@media(max-width: 500px){
   
    gap: 6px;
    .collections{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}


`;

export default Wrapper;