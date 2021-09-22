import styled from 'styled-components';
import device from '../utils/Breakpoints'

export const Wrapper = styled.div `
  padding-inline: 100px;
  padding-bottom: 100px;
  display: flex;
  & > .toast-container {
    position: fixed;
    top: 200px;
    right: 50px;
  }
`

export const CartContainer = styled.div `
font-family: Rubik;
  padding: 20px;
  flex: 4;
    & > .empty-list {
      padding: 10px;
      font-size: 18px;
      @media ${device.desktop} { 
        font-size: 20px;
      }
    }
    & > .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    & > .top > span {
      font-size: 22px;
      @media ${device.desktop} { 
        font-size: 24px;
      }
      font-weight: 600;
      padding: 5px;
    }
    & > .top > .back-link > a {
      color: #0047ba;
      text-decoration: none;
    }
    & > .cart-item {
      display: flex;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 3px solid #ececec;
      & > .cart-image > img {
        width: 160px;
        height: 220px;
        @media ${device.desktop} { 
          width: 180px;
          height: 240px;
        }
        object-fit: cover;
      }
      & > .mid-col {
        display: flex;
        flex: auto;
        flex-direction: column;
        padding-inline: 20px;
      }
      & > .mid-col > .name {
        font-size: 20px;
        @media ${device.desktop} { 
          font-size: 24px;
        }
        margin-bottom: 10px;
      }
      & > .mid-col > .code {
        font-size: 16px;
        margin-bottom: 70px;
        @media ${device.desktop} { 
          font-size: 18px;
        }
      }
      & > .mid-col > .size {
        font-size: 20px;
        @media ${device.desktop} { 
          font-size: 22px;
        }
      }
      & > .mid-col > .color {
        font-size: 20px;
        @media ${device.desktop} { 
          font-size: 22px;
        }
      }
      & > .end-col {
        display: flex;
        flex-direction: column;
        padding-inline: 10px;
        min-width: 170px;
      }
      & > .end-col > .old-price {
        font-size: 20px;
        text-decoration: line-through;
        @media ${device.desktop} { 
          font-size: 22px;
        }
      }
      & > .end-col > .price {
        color: #0047ba;
        font-size: 26px;
        @media ${device.desktop} { 
          font-size: 32px;
        }
        font-weight: 700;
        margin-bottom: 40px;
      }
      & > .end-col > .button-group {
        display: flex;
        margin-bottom: 30px;
      }
      & > .end-col > .button-group > .button {
        width: 35px;
        height: 35px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 8px;
        display: grid;
        justify-items: center;
        align-content: center;
        cursor: pointer;
        margin-inline: 10px;
        @media ${device.desktop} { 
          width: 48px;
          height: 48px;
        }
      }
      & > .end-col > .button-count {
        width: 120px;
        height: 35px;
        @media ${device.desktop} { 
          width: 150px;
          height: 48px;
        }
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      & > .end-col > .button-count > .sub {
        width: 35px;
        height: 35px;
        @media ${device.desktop} { 
          width: 48px;
          height: 48px;
        }
        display: grid;
        justify-content: center;
        align-content: center;
        cursor: pointer;
        
      }
      & > .end-col > .button-count > .text {
        font-size: 25px;
        font-weight: 600;
        color: #0047ba;
        @media ${device.desktop} { 
          font-size: 28px;
        }
      }
      
    }

`;

export const SummaryContainer = styled.div `
  font-family: Rubik;
  background-color: #F8F8F8;
  height: 327px;
  color: #61666a;
  flex: 2;
  padding: 30px;
  & > .summary-title  {
    font-size: 27px;
    margin-bottom: 30px;
    @media ${device.desktop} { 
      font-size: 32px;
    }
  }
  & > .summary-row  {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 10px;
    @media ${device.desktop} { 
      font-size: 22px;
    }
  }
  & > .bold  {
   font-weight: 600
  }
  & > .summary-total  {
    font-size: 25px;
    color: #0047ba;
    @media ${device.desktop} { 
      font-size: 28px;
    }
   }
`

export const ModalBox = styled.div `
    & > span  {
      font-family: Rubik;
      margin: 20px;
    }
`

export const ModalButtons = styled.div `
   display: flex;
   marginTop: 20px;
   justify-content: center;
   & > .button-delete  {
    margin: 10px;
    color: #0047ba;
    text-transform: unset;
   }
   & > .button-favorite  {
    margin: 10px;
    color: #ffffff;
    background-color: #0047ba;
    text-transform: unset;
   }
   
`