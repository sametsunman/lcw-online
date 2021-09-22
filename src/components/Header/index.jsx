import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteList from './FavoriteList';
import { Wrapper, Title, TopMenu, BottomMenu, MenuItem, BasketButton } from './index.styles';
import { Badge } from '@mui/material/';
import { useSelector } from 'react-redux';

const Header = () => {

  const { orderCart } = useSelector((state) => state);

  return (
    <Wrapper>
      <TopMenu>
        <Title>
          <Link to="/">
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
        </Title>
        <FavoriteList  />
        <Link to="/shopping-cart">
        <BasketButton>
        <Badge badgeContent={orderCart.length} color="error">
            Sepetim
            </Badge>
          </BasketButton>
        </Link>
      </TopMenu>

      <BottomMenu>
        <MenuItem>
          Kadın
        </MenuItem>
        <MenuItem>
          Erkek
        </MenuItem>
        <MenuItem>
          Çocuk
        </MenuItem>
        <MenuItem>
          Bebek
        </MenuItem>
        <MenuItem>
          Lcw Home
        </MenuItem>
      </BottomMenu>
    </Wrapper>
  );
};

export default Header;