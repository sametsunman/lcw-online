import styled from 'styled-components';
import device from '../../utils/Breakpoints'

export const Wrapper = styled.div`
  padding-top:  140px;

  @media ${device.desktop} { 
    padding-top:  160px;
  }
`;