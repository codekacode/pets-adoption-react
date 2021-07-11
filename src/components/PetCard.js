import pet1 from "../assets/pet1.png"
import styled from "styled-components"

const PetCard = () => {
  return (
    <CardDiv>
      <div>
        <span>
          <p>Rocky</p>
          <p>Rottweiler</p>
        </span>
      </div>
    </CardDiv>
  )
}

const CardDiv = styled.div`
  height: 210px;
  width: 156px;
  align-items: flex-start;
  margin-top:5px;
  div {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${pet1}) ;
    background-size: contain;
    background-repeat: no-repeat;
    clear: both;
    width: 100%;
    height: 100%;
    margin: 0;
    position: relative;
    border-radius: 8px;
    padding: 5px;
    span {
      display: flex;
      flex-direction: column;
      bottom: 0;
      position: relative;
      top: 75%;
      left: 5%;
    }
    p {
      padding:0;
      color: #fff;
      margin: 0;
      /* position: absolute;
      bottom: 10px; */
   }
   p:first-child {
      font-weight: bold;
   }
  }
`

export default PetCard;