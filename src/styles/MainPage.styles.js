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
`;

export const Menu = styled.div`
display: flex;
justify-content: space-between;
& > span.product-count {
  font-size: 18px;
  font-weight: 600
}
& > span.sort {
  font-size: 22px;
  font-weight: 600
}
`;

export const Products = styled.div`

`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #DFE2E6;
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
  }
  & > div > span.color {
    width: 32px;
    height: 32px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  & > div > span.colorCount {
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const FavoriteButton = styled.div`

`;