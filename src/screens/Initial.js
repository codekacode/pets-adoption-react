import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import logo from "../assets/logo.svg";

function Initial() {
  return(
  <Wrapper>
    <Link to="/step1">
      <Logo src={logo} alt="Leonidas Esteban Logo" /></Link>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgb(251, 199, 215); */
  height: 100vh;
`;

const Logo = styled.img`
  width: 170px;
`;

export default Initial;