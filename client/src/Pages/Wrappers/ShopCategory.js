import styled from 'styled-components'

const Wrapper = styled.div`
.shop-category-banner{
    display: block;
    margin: 30px auto;
    width: 82%;
}

.shopcategory-indexSort{
    display: flex;
    margin: 0px 140px;
    justify-content: space-between;
    align-items: center;

}

.shopcategory-sort{
    padding: 10px 20px;
    border-radius: 40px;
    border: 1px solid #888;
}

.shopcategory-sort p span{
    font-weight: 600;

}

.shop-category-products{
    margin: 20px 170px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 80px;
}

.shopcategory-loadmore{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 150px auto;
    width: 233px;
    height: 69px;
    border-radius:75px;
    background: #ededed;
    color: #787878;
    font-size: 18px;
    font-weight: 500;
}

@media(max-width: 1280px){
    .shop-category-banner{
        margin: 20px auto;
        width: 90%;
    }

    .shopcategory-indexSort{
        width: 90%;
        margin: auto;
    }

    .shopcategory-sort{
        padding: 5px 10px;
        font-size: 12px;
    }

    .shopcategory-sort p{
        font-size: 12px;
    }

    .shop-category-products{
        width: 90%;
        margin: 10px auto;
        row-gap: 40px;
    }

    .shop-category-products .item{
        margin: auto;
    }

    .shopcategory-loadmore{
        margin : 100px auto;
        width: 200px;
        height: 60px;
        font-size: 16px;
    }
}

@media(max-width: 800px){
    .shop-category-banner{
        width: 95%;
    }

    .shop-category-products{
        width: 95%;
    }

    .shopcategory-loadmore{
        margin: 60px auto;
        width: 150px;
        height: 40px;
        font-size: 13px;
    }
}

@media(max-width: 500px){
    .shop-category-products{
        grid-template-columns: 1fr 1fr;
    }
}
`;

export default Wrapper;