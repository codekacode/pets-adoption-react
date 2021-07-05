import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import home from "../assets/home.svg";
import message from "../assets/message-circle.png";
import heart from "../assets/heart.png";
import account from "../assets/user.png";

function Navbar() {
  return(
    <Nav>
      <div>
        <Link>
          <BtnHome><img src={home} />Home</BtnHome>
        </Link>
        <img src={message} />
        <img src={heart} />
        <img src={account} />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10vh;
  background: #fff;
  z-index: 1;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  div {
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 400px;
  }
`;



const BtnHome = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 5px;
  color: #85D1CE;
`
export default Navbar;