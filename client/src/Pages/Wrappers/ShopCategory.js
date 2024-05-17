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
`;

export default Wrapper;