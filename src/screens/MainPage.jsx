import React from 'react'
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { Wrapper, Breadcrumb, Title, Menu, Products, ProductItem, Description, FavoriteButton } from './../styles/MainPage.styles';


const MainPage = () => {

    const { products } = useSelector((state) => state);

    return (
        <Wrapper>
            <Breadcrumb>
                <li>Ana sayfa</li>
                <li>Erkek</li>
                <li>Sweatshirt</li>
            </Breadcrumb>
            <Title>Erkek Sweatshirt Modelleri</Title>
            <Menu>
                <span className='product-count'>1234 ürün</span>
                <span className='sort'><img src='/assets/icons/sort.svg' alt='sorting' /> Sırala</span>
            </Menu>
            <Products>
                <Grid container spacing={3}>
                    {
                        products.map(product => {
                            return <Grid key={product.id} item xs={3}>
                            <ProductItem>
                                <img src={product.image} alt={`product_${product.id}`} />
                                <Description>
                                <span className='name'>{product.name}</span>
                                <span className='price'>{product.price} TL</span>
                                <div>
                                    {
                                        product.colors.map((color,index) => {
                                            return <span className='color' key={index} style={{background:color}}></span>
                                        })
                                    }
                                    <span className='colorCount'>{product.colors.length} Renk</span>
                                </div>
                                </Description>
                                <FavoriteButton>
                                    <img src={product.isFavorited ? '/assets/icons/favorite.svg' : '/assets/icons/favorite_border.svg'} alt='favorite' />
                                </FavoriteButton>
                            </ProductItem>
    
                        </Grid>
                        })
                    }
                </Grid>
            </Products>
        </Wrapper>
    )
}

export default MainPage
