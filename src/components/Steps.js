import styled from '@emotion/styled';
import next1 from '../assets/next1.svg';

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepImg = styled.img`
  width: 170px;
`;

const StepInfo = styled.div`

`;

const StepBtn = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  color: white;
  background: rgb(14, 23, 44);
`;

function Steps() {
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
      <StepBtn>Siguiente</StepBtn>
    </StepWrapper>
  )
}

export default Steps;