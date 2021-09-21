import styled from 'styled-components';

export const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5em 1em;
  background-color: #ffffff;
  color: #61666a;
`;

export const ButtonBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  height: 72px;
  & > div > span {
    margin-right: 20px
  }
  & > div > img {
    margin-inline: 5px
  }
`;

export const LinkBar = styled.div`
  height: 432px;
  display: flex;
  justify-content: space-around;
  & > ul {
    list-style-type: none;
    margin-left: 110px;
  }
  & > ul > li:first-child {
    font-weight: 600;
  }
  & > ul > li {
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px; 
  }
  & > ul > li.button {
    width: 446px;
    height: 60px;
    padding: 8px;
    border: 1px solid #0047ba;
    border-radius: 8px;
    color: #0047BA;
    text-align: center;
    font-size: 18px;
    font-weight: 600;

    }
`;