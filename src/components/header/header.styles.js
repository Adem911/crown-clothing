import styled /* css */ from "styled-components";
import { Link } from "react-router-dom";

// this styles can be shared like the example below
/*const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  margin: 0 5px;
`;*/

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #e6e6e6;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px 30px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const OptionLink = styled(Link)`
  padding: 24.5px 15px;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    background-color: white;
  }
`;
// we can render <OptionLink as='div'> and it will give us a div with same style as OtionLink
// example in header.component

/*export const OptionDiv = styled.div` 
  ${OptionContainerStyles}
`;*/

// this is called css in js
