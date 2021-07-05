import styled from "styled-components"
import perro from "../assets/perros.png";
import gato from "../assets/gatos.png";
import Navbar from "../components/Navbar"

const Categories = () => {
  return (
    <CategoriesDiv>
      <h2>Adopta una adorable mascota</h2>
      <p>Categorías de mascotas</p>
      <div>
        <Category>
          <div>
            <img src= {perro} />
          </div>
          <p>Perros</p>
        </Category>
        <Category>
          <div>
            <img src= {gato} />
          </div>
          <p>Gatos</p>
        </Category>
      </div>
      <Navbar />
    </CategoriesDiv>
  )
}

const CategoriesDiv = styled.div`
  div{
    display: flex;
    justify-content: space-between;
  }
`

const Category = styled.div`
  border-radius: 5px;
  background: rgb(14, 23, 44);
  color: #fff;
  display: flex;
  gap: 15px;
  padding: 5px 18px;
  div{
    border-radius:50%;
    background: #85D1CE;
    display: flex;
    justify-content:center;
    align-items: center;
    width:50px;
  }
  img{
    height:40px;
  }

`

export default Categories;