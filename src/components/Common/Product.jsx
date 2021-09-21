import React from 'react';
import { ProductItem, Description, FavoriteButton, AddToCart } from '../../styles/MainPage.styles';
import { Button } from '@mui/material/';


const Product = ({ product }) => {
    return (
        <ProductItem>
            <img src={product.image} alt={`product_${product.id}`} />
            <FavoriteButton>
                <img src={product.isFavorited ? '/assets/icons/favorite.svg' : '/assets/icons/favorite_border.svg'} alt='favorite' />
            </FavoriteButton>
            <div>
                <Description>
                    <span className='name'>{product.name}</span>
                    <span className='price'>{product.price} TL</span>
                    <div>
                        {
                            product.colors.map((color, index) => {
                                return <span className='color' key={index} style={{ background: color }}></span>
                            })
                        }
                        <span className='colorCount'>{product.colors.length} Renk</span>
                    </div>
                </Description>
                <AddToCart className='add-to-cart'>
                    <Button variant="outlined"><img src='/assets/icons/shopping_bag.svg' alt='add_to_cart' /> Sepete Ekle</Button>
                </AddToCart>
            </div>
        </ProductItem>

    )
}

export default Product
