import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material/';
import { Wrapper, Breadcrumb, Title, Menu, Products } from './../../styles/MainPage.styles';
import Product from './Product';
import Sorting from './Sorting';

const MainPage = () => {

    const { products } = useSelector((state) => state);
    const [sortingValue, setSortingValue] = useState("default");

    return (
        <Wrapper>
            <Breadcrumb>
                <li>Ana sayfa</li>
                <li>Erkek</li>
                <li>Sweatshirt</li>
            </Breadcrumb>
            <Title>Erkek Sweatshirt Modelleri</Title>
            <Menu>
                <span className='product-count'>{products.length} ürün</span>
                <Sorting sortingValue={sortingValue} setSortingValue={setSortingValue} />
            </Menu>
            <Products>
                <Grid container spacing={3}>
                    {
                        products.sort((a, b) => sortingValue==='default' ? a.id - b.id : (sortingValue==='asc' ? a.price - b.price : b.price - a.price ))
                        .map(product => {
                            return <Grid key={product.id} item xs={3}>
                                <Product product={product} />
                            </Grid>
                        })
                    }
                </Grid>
            </Products>
                
        </Wrapper>
    )
}

export default MainPage
