import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title, TopMenu, BottomMenu,MenuItem, FavoriteButton, BasketButton } from './index.styles';


const Header = () => {
  return (
    <Wrapper>
      <TopMenu>
        <Title>
        <Link to="/">
          <img src="/assets/logo.svg" alt="logo" />
          </Link>
        </Title>
      <FavoriteButton>
        Favorilerim
      </FavoriteButton>
      <BasketButton>
        Sepetim
      </BasketButton>
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