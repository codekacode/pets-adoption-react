import styled from '@emotion/styled';
import next1 from '../assets/next1.svg';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

function Step1() {
  return(
    <StepWrapper>
      <StepImg src={next1} alt="Animals image" />
      <StepInfo>
        <h3>Encuentra tu amigo fiel</h3>
        <p>Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. 
          Si estás pensando en tener un nuevo integrante en tu familia; 
          ¡estás en el lugar correcto!
        </p>
      </StepInfo>
      <Link to="/step2">
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

export default Step1;