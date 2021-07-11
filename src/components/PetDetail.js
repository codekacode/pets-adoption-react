import styled from "styled-components";
import pet1 from "../assets/pet1.png";
import guardado from "../assets/guardado.png";
import raza from "../assets/raza.svg";
import edad from "../assets/edad.svg";
import male from "../assets/male.svg";
import map from "../assets/map-pin.png";
import carinoso from "../assets/carinoso.png"

const PetDetail = () => {
  return (
    <PetDetailTotal>
      <PetIMg>
        <img src={pet1} />
      </PetIMg>
      <DivPet>
        <PetDetailPart>
          <div>
            <h1>Rocky<img src={male}/></h1>
            <img src={guardado} />
          </div>
          <Caract>
            <div>
              <img src={raza} />
              Rottweiler
            </div>
            <div>
              <img src={edad} />
              3 Meses
            </div>
          </Caract>
          <div>
            <img src={map}/>
            4140 Parker Rd. Allentown, 
            New Mexico 31134
          </div>
        </PetDetailPart>
        <Personalities>
          <h3>Peronalidad</h3>
          <Personality>
            <img src={carinoso} />
            Carinoso
          </Personality>
        </Personalities>
        <History>
          <h3>Historia de Rocky</h3>
          <p>
          Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y 
          por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar 
          la familia ideal para él y seguro que tú eres la persona indicada.
          </p>
        </History>
        <PubliBy>
          <img />
          <div>
            <p>Publicado por</p>
            <p>MAria Dolores</p>
          </div>
          <button>
            Contactar
          </button>
        </PubliBy>
      </DivPet>   
    </PetDetailTotal>
  ) 
};

const PetDetailTotal = styled.div`

`

const PetIMg = styled.div`
  height: 50vh;
  overflow: hidden;
  border-radius: 8px;
  img {
    
  }
`

const DivPet = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 0 8px;
`

const PetDetailPart = styled.div`
  background: #fff;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    h1 {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`

const Caract = styled.div`
  box-sizing: border-box;
  div {
    box-sizing: border-box;
    img {
      box-sizing: border-box;
    }
  }
`
const Personalities = styled.div`

`
const Personality = styled.div`
  width: 90px;
  height: 90px;
  padding: 8px;
  border: 2px solid #A786DF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  
  img {
    width: 40px;
    height: 40px;
  }
`

const History = styled.div`
`

const PubliBy = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
`


export default PetDetail;