import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px;
  color: #61666a;
`;

export const Breadcrumb = styled.ul`
list-style-type: none;
& > li {
  display: inline;
  margin-right: 5px;
  font-size: 18px;
}
& > li+li:before {
  padding: 8px;
  color: black;
  content: ">";
}
`;

export const Title = styled.span`
  font-size: 28px;
  padding-inline: 20px;
`;

export const Menu = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
& > span.product-count {
  font-size: 18px;
  font-weight: 600
}
& > span.sort {
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  :hover {
    box-shadow: inset 0px 0px 2px 1px #9c9c9c;
  },
}
`;

export const Products = styled.div`
  padding: 10px;
`;

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #DFE2E6;
  & > div {
    display: flex;
  }
  & > div:hover > .add-to-cart {
    display: unset;
  }
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
  padding: 15px;
  & > span.name {
    font-size: 20px;
  }
  & > span.price {
    font-size: 24px;
    color: #0047BA;
    font-weight: 600;
  }
  & > div {
    display: flex;
    padding-left: 15px;
  }
  & > div > span.color {
    width: 32px;
    height: 32px;
    border: 0px solid #fff;
    border-radius: 50%;
    margin-left: -15px;

  }
  & > div > span.colorCount {
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const FavoriteButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 48px;
  height: 48px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  display: grid;
  justify-items: center;
  align-content: center;
  cursor: pointer;
`;

export const AddToCart = styled.div`
  position: absolute;
  bottom: 20px;
  right: 15px;
  display: none;
  & > .MuiButton-root {
    color: #0047BA;
  }
  
`;