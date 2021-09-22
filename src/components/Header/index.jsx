import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteList from './FavoriteList';
import { Wrapper, Title, TopMenu, BottomMenu, MenuItem, BasketButton } from './index.styles';


const Header = () => {

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
            Sepetim
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