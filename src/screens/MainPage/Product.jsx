import React, {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { ProductItem, Description, FavoriteButton, AddToCart } from '../../styles/MainPage.styles';
import { Button } from '@mui/material/';
import Toast from './../../components/Common/Toast';


const Product = ({ product }) => {

    const {favorites} = useSelector((state) => state);
    const [successAlertShow, setSuccessAlertShow] = useState("");
    const dispatch = useDispatch();

    const onLike = () => {
        if(favorites.find(x=>x.id===product.id))
        {
          dispatch({type: 'REMOVE_FROM_FAVORITES', payload: product});
        }
        else{
          dispatch({type: 'ADD_TO_FAVORITES', payload: product});
        }
        
      }
    
      const onBasket = () => {
          dispatch({type: 'ADD_TO_CART', payload: product});
          setSuccessAlertShow("Ürün sepete eklendi!");
      }

    return (
        <ProductItem>
            <img src={product.image} alt={`product_${product.id}`} />
            <FavoriteButton onClick={()=>onLike()}>
                <img src={favorites.find(x=>x.id===product.id) ? '/assets/icons/favorite.svg' : '/assets/icons/favorite_border.svg'} alt='favorite' />
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
                    <Button variant="outlined" onClick={()=>onBasket()}><img src='/assets/icons/shopping_bag.svg' alt='add_to_cart' /> Sepete Ekle</Button>
                </AddToCart>
            </div>
            <div className="toast-container">
            <Toast show={successAlertShow!==""} onClose={() => setSuccessAlertShow("")} content={successAlertShow} />
            </div>
        </ProductItem>

    )
}

export default Product