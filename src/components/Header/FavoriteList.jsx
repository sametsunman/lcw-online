import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popover } from '@mui/material/';
import { FavoriteButton, FavoriteContainer } from './index.styles';


const FavoriteList = () => {

  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  const [favoritePopAnchorEl, setFavoritePopAnchorEl] = React.useState(null);

  const onClickFavoritePop = (event) => {
    setFavoritePopAnchorEl(event.currentTarget);
  };

  const onCloseFavoritePop = () => {
    setFavoritePopAnchorEl(null);
  };

  const favoritePopId = Boolean(favoritePopAnchorEl) ? 'favorite-pop-popover' : undefined;

  const onLike = (product) => {
    if (favorites.find(x => x.id === product.id)) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
    }
    else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
    }

  }

  return (

    <FavoriteButton aria-describedby={favoritePopId} onClick={onClickFavoritePop}>
      Favorilerim
      <Popover
        id={favoritePopId}
        open={Boolean(favoritePopAnchorEl)}
        anchorEl={favoritePopAnchorEl}
        onClose={onCloseFavoritePop}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <FavoriteContainer>
          <span>Favorilerim ({favorites.length} Ürün)</span>
          {
            favorites.length > 0 ?
              favorites.map(product => {
                return <div className='favorite-item'>
                  <div className='favorite-image'>
                    <img src={product.image} alt={`product_${product.id}`} />
                  </div>
                  <div className='mid-col'>
                    <span className='name'>{product.name}</span>
                    <span className='size'>Beden: <b>{product.size}</b></span>
                    <span className='color'>Renk: <b>Gri melanj baskı</b></span>
                  </div>
                  <div className='end-col'>
                    <span className='old-price'>{(product.price * 1.23).toFixed(2)} TL</span>
                    <span className='price'>{product.price} TL</span>
                    <div className='button' onClick={() => onLike(product)}>
                      <img src={favorites.find(x => x.id === product.id) ? '/assets/icons/favorite.svg' : '/assets/icons/favorite_border.svg'} alt='favorite' />
                    </div>
                  </div>
                </div>
              }) :
              <div className='empty-list'>
                Favori listeniz boş
              </div>
          }

        </FavoriteContainer>
      </Popover>
    </FavoriteButton>

  );
};

export default FavoriteList;