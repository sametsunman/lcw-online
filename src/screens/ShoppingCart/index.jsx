import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, CartContainer, SummaryContainer, ModalBox, ModalButtons } from './../../styles/ShoppingCart.styles';
import Toast from './../../components/Common/Toast';
import { Modal, Button, Box } from '@mui/material/';

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const { orderCart, favorites } = useSelector((state) => state);

  const [successAlertShow, setSuccessAlertShow] = useState("");
  const [openModal, setOpenModal] = React.useState(null);

  const onLike = (product) => {
    if (favorites.find(x => x.id === product.id)) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
    }
    else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
    }

  }

  const onUpdateCart = (product, type) => {
    if (type === "inc") {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    else {
      if (type === "delete" || product.count === 1) {
        setOpenModal(product);
      }
      else if (type === "desc") {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
      }
    }
  }

  const onDeleteCart = (addFavorite) => {

    if (addFavorite) {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: openModal });
      dispatch({ type: 'DELETE_CART', payload: openModal });
      setSuccessAlertShow("Ürün sepetten kaldırıldı ve favorilere eklendi!");
    }
    else {
      dispatch({ type: 'DELETE_CART', payload: openModal });
      setSuccessAlertShow("Ürün sepetten kaldırıldı!");
    }

    setOpenModal(null);

  }

  const calculatePrice = (orderCart, factor) => {
    if(orderCart.length > 1 )
      return orderCart.reduce(function (a, b) { return a.price*a.count * factor + b.price*b.count * factor }).toFixed(2)
    else if(orderCart.length === 1)
      return (orderCart[0].price*orderCart[0].count * factor).toFixed(2) 
    else 
      return 0;
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
                    <div className='button' onClick={() => onUpdateCart(product, "delete")}>
                      <img src='/assets/icons/delete.svg' alt='remove' />
                    </div>
                    <div className='button' onClick={() => onLike(product)}>
                      <img src={favorites.find(x => x.id === product.id) ? '/assets/icons/favorite.svg' : '/assets/icons/favorite_border.svg'} alt='favorite' />
                    </div>
                  </div>

                  <div className='button-count' >
                    <span className="sub" onClick={() => onUpdateCart(product, "desc")}>-</span><span className="text">{product.count}</span><span className="sub" onClick={() => onUpdateCart(product, "inc")}>+</span>
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
          <span>{calculatePrice(orderCart,1.27)} TL</span>
        </div>
        <div className='summary-row bold'>
          <span>İndirimler</span>
          <span>{calculatePrice(orderCart,0.27)} TL</span>
        </div>
        <div className='summary-row'>
          <span>Ara Toplam</span>
          <span>{calculatePrice(orderCart,1)} TL</span>
        </div>
        <div className='summary-row bold'>
          <span>Kargo Ücreti</span>
          <span>Ücretsiz</span>
        </div>
        <div className='summary-row summary-total bold'>
          <span>Genel Toplam</span>
          <span>{calculatePrice(orderCart,1)} TL</span>
        </div>
      </SummaryContainer>
      <Modal
        open={Boolean(openModal)}
        onClose={() => setOpenModal(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '1px solid #fff',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
        }}>
        <ModalBox>
          <span>Ürünü sepetinizden sildikten sonra favorilerinizde saklamak ister misiniz?</span>
          <ModalButtons>
            <Button className="button-delete" variant="outlined" onClick={() => onDeleteCart(false)}>Sil</Button>
            <Button className="button-favorite" variant="contained" onClick={() => onDeleteCart(true)}>Sil ve Favorilere Ekle</Button>
          </ModalButtons>
        </ModalBox>
        </Box>
      </Modal>
      <div className="toast-container">
        <Toast show={successAlertShow !== ""} onClose={() => setSuccessAlertShow("")} content={successAlertShow} />
      </div>
    </Wrapper>

  )
}

export default ShoppingCart