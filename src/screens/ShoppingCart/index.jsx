import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {Wrapper, CartContainer,SummaryContainer} from './../../styles/ShoppingCart.styles';

const ShoppingCart = () => {

    const dispatch = useDispatch();
    const { orderCart, favorites } = useSelector((state) => state);

    const onLike = (product) => {
        if(favorites.find(x=>x.id===product.id))
        {
          dispatch({type: 'REMOVE_FROM_FAVORITES', payload: product});
        }
        else{
          dispatch({type: 'ADD_TO_FAVORITES', payload: product});
        }
        
      }
    
      const onDelete = (product) => {
        if(orderCart.find(x=>x.id===product.id))
        {
          dispatch({type: 'REMOVE_FROM_CART', payload: product});

        }
        
      }

    return (
        <Wrapper>
        <CartContainer>
            <div className='top'>
            <span>Sepetim ({orderCart.length} Ürün)</span>
            <span className='back-link'><Link to="/">&lt; Alışverişe devam et</Link></span>
            </div>
          
          {
            orderCart.length > 0 ?
              orderCart.map(product => {
                return <div className='cart-item' key={product.id}>
                  <div className='cart-image'>
                    <img src={product.image} alt={`product_${product.id}`} />
                  </div>
                  <div className='mid-col'>
                    <span className='name'>{product.name}</span>
                    <span className='code'>W1CE95Z8 - 998</span>
                    <span className='size'>Beden: <b>{product.size}</b></span>
                    <span className='color'>Renk: <b>Gri melanj baskı</b></span>
                  </div>
                  <div className='end-col'>
                    <span className='old-price'>{(product.price * 1.23).toFixed(2)} TL</span>
                    <span className='price'>{product.price} TL</span>
                    <div className='button-group'>
                    <div className='button' onClick={() => onDelete(product)}>
                        <img src='/assets/icons/delete.svg' alt='remove' />
                    </div>
                    <div className='button' onClick={() => onLike(product)}>
                      <img src={favorites.find(x => x.id === product.id) ? '/assets/icons/favorite.svg' : '/assets/icons/favorite_border.svg'} alt='favorite' />
                    </div>
                    </div>
    
                    <div className='button-count' onClick={() => onLike(product)}>
                      <span className="sub">-</span><span className="text">1</span><span className="sub">+</span>
                    </div>
                  </div>
                </div>
              }) :
              <div className='empty-list'>
                Alışveriş sepetiniz boş.
              </div>
          }

        </CartContainer>
        <SummaryContainer>
          <span className='summary-title bold'>Sipariş Özeti</span>
          <div className='summary-row'>
              <span>Ürün Toplam</span>
              <span>{orderCart.reduce(function(a, b){return a.price*1.27+b.price*1.27}).toFixed(2)} TL</span>
          </div>
          <div className='summary-row bold'>
              <span>İndirimler</span>
              <span>{orderCart.reduce(function(a, b){return a.price*0.27+b.price*0.27}).toFixed(2)} TL</span>
          </div>
          <div className='summary-row'>
              <span>Ara Toplam</span>
              <span>{orderCart.reduce(function(a, b){return a.price+b.price})} TL</span>
          </div>
          <div className='summary-row bold'>
              <span>Kargo Ücreti</span>
              <span>Ücretsiz</span>
          </div>
          <div className='summary-row summary-total bold'>
              <span>Genel Toplam</span>
              <span>{orderCart.reduce(function(a, b){return a.price+b.price})} TL</span>
          </div>
        </SummaryContainer>
        </Wrapper>

    )
}

export default ShoppingCart