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

@media(max-width: 1280px){
   
        height: 75vh;
    

    hr{
        width: 160px;
        height: 4px;
    }
    .popular-item{
        gap: 20px;
        margin-top: 30px;
    }
}

@media(max-width: 1024px){
   
        height: 65vh;
    
    h1{
        font-size: 30px;
    }
    hr{
        width: 120px;
        height: 3px;
    }

    .popular-item{
        gap: 15px;
        margin-top: 20px;
    }
}

@media(max-width: 800px){
   
    height: 50vh;
    gap: 6px;
    
    h1{
        font-size: 20px;
    }
    hr{
        width: 100px;
    }

    .popular-item{
        gap: 5px;
    }
}

@media(max-width: 500px){
   
    height: 100vh;
    gap: 6px;
    .popular-item{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}


`;

export default Wrapper;