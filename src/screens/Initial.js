import styled from '@emotion/styled';
import logo from "../assets/logo.svg"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(251, 199, 215);
  height: 100vh;
`;

const Logo = styled.img`
  width: 170px;
`;

function Initial() {
  return(
  <Wrapper>
    <Logo src={logo} alt="Leonidas Esteban Logo" />
  </Wrapper>
  );
}

export default Initial;