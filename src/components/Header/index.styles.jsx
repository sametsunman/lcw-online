import styled from 'styled-components';
import device from '../../utils/Breakpoints'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 130px;
  padding-top: 20px;
  padding-inline: 44px;
  background-color: #ffffff;
  z-index: 600;
  box-shadow: 0px 9px 18px #00000029;
  & > a {
    text-decoration: none;
  }

  @media ${device.desktop} { 
    height: 155px;
    padding-top: 35px;
  }

`;

export const TopMenu = styled.ul`
  display: flex;
  margin-bottom: 0px;
  & >  a {
    text-decoration: none;
    color: #61666A
  }
  @media ${device.desktop} { 
    margin-bottom: 1rem;
  }
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
    width: 250px;
    height: 32px;
    
  @media ${device.desktop} { 
    width: 300px;
    height: 42px;
  }
  }
  `;

  export const FavoriteButton = styled.div`
    padding: 3px;
    background: transparent url('assets/icons/favorite_border.svg') 50% 0% no-repeat padding-box;
    margin-left: auto;
    padding-top: 30px;
    cursor: pointer;
    &:hover {
      background-color: #fbfbfb;
      box-shadow: 0px 3px 6px #00000029;
    }

    @media ${device.desktop} { 
      padding: 5px;
    }
    
  `;

  export const FavoriteContainer = styled.div`
  font-family: Rubik;
  padding: 20px;
  width: 740px;
    & > .empty-list {
      padding: 10px;
      font-size: 20px;
    }
    & > span {
      font-size: 24px;
      font-weight: 600;
      padding: 5px;
    }
    & > .favorite-item {
      display: flex;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 3px solid #ececec;
      & > .favorite-image > img {
        width: 100px;
        height: 140px;
        object-fit: cover;
      }
      & > .mid-col {
        display: flex;
        flex-direction: column;
        padding-inline: 10px;
      }
      & > .mid-col > .name {
        font-size: 24px;
        margin-bottom: 10px;
      }
      & > .mid-col > .size {
        font-size: 22px
      }
      & > .mid-col > .color {
        font-size: 22px
      }
      & > .end-col {
        display: flex;
        flex-direction: column;
        padding-inline: 10px;
        min-width: 170px;
      }
      & > .end-col > .old-price {
        font-size: 24px;
        text-decoration: line-through;
      }
      & > .end-col > .price {
        color: #0047ba;
        font-size: 32px;
        font-weight: 700;
      }
      & > .end-col > .button {
        width: 48px;
        height: 48px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 8px;
        display: grid;
        justify-items: center;
        align-content: center;
        cursor: pointer;
      }
    }

  
`;


  export const BasketButton = styled.div`
  padding: 3px;
    background: transparent url('assets/icons/shopping_bag.svg') 50% 0% no-repeat padding-box;
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 30px;
    cursor: pointer;
    &:hover {
      background-color: #fbfbfb;
      box-shadow: 0px 3px 6px #00000029;
    }

    @media ${device.desktop} { 
      padding: 5px;
    }
  `;

  export const MenuItem = styled.li`
  text-transform: uppercase;
  padding-inline: 5px;
  font-size: 20px;
  color: #61666A;

  @media ${device.desktop} { 
    font-size: 26px;
  }
`;
  