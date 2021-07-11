import styled from '@emotion/styled';
import next2 from '../assets/next2.png';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

function Step2() {
  return(
    <StepWrapper>
      <StepImg src={next2} alt="Animals image" />
      <StepInfo>
        <h3>Crea una nueva historia</h3>
        <p>Adoptar puede ser una de las experiencias más grandiosas 
          de tu vida, donde compartirás bellos momentos con estos 
          amiguitos fieles, tiernos y llenos de amor para regalar.
        </p>
      </StepInfo>
      <Link to="/categories">
        <StepBtn>
          Siguiente
        </StepBtn>
      </Link>
    </StepWrapper>
  )
}

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StepImg = styled.img`
  width: 250px;
`;

const StepInfo = styled.div`
  text-align: center;
  margin-top: -100px;
`;

const StepBtn = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  color: white;
  width: 200px;
  height: 30px;
  background: rgb(14, 23, 44);
  cursor: pointer;
`;

export default Step2;