import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 155px;
  padding-top: 35px;
  padding-inline: 44px;
  background-color: #ffffff;
  z-index: 600;
  box-shadow: 0px 9px 18px #00000029;
  & > a {
    text-decoration: none;
  }
`;

export const TopMenu = styled.ul`
  display: flex;
`

export const BottomMenu = styled.ul`
  list-style-type: none;
  & > li {
    display: inline;
    margin-right: 5px;
    padding: 5px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: #ececec;
  }
  & > li a {
    padding: 0 20px 0 0;
    color: #fff;
    text-decoration: none;
    border: 1px solid white;
    background: transparent;
    text-transform: uppercase;
    color: white;
    padding: 5px 10px;
    outline: none;
    overflow: hidden;
    position: relative;
    border-radius: 3px;
    box-shadow: inset 0px 0px 2px 0px #fffcfc;
    :hover {
      border: 1px solid #fffcfc;
      box-shadow: inset 0px 0px 6px 1px #fffcfc;
    },
  }
`;

export const Title = styled.div`
  & > a > img {
    width: 300px;
    height: 42px;
  }
  `;

  export const FavoriteButton = styled.div`
    padding: 5px;
    background: transparent url('assets/icons/favorite_border.svg') 50% 0% no-repeat padding-box;
    margin-left: auto;
    padding-top: 30px;
    cursor: pointer;
    &:hover {
      background-color: #fbfbfb;
      box-shadow: 0px 3px 6px #00000029;
    }
  `;

  export const BasketButton = styled.div`
  padding: 5px;
    background: transparent url('assets/icons/shopping_bag.svg') 50% 0% no-repeat padding-box;
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 30px;
    cursor: pointer;
    &:hover {
      background-color: #fbfbfb;
      box-shadow: 0px 3px 6px #00000029;
    }
  `;

  export const MenuItem = styled.li`
  text-transform: uppercase;
  padding-inline: 5px;
  font-size: 26px;
  color: #61666A;
`;
  