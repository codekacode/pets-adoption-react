import styled from "styled-components";
import userelipse from "../assets/userelipse.png";

const Perfil = () => {
  return (
    <DivPerfil>
      <h2>Perfil</h2>
      <div>
        <img src={userelipse} />
        <p>Juan Mendez</p>
        <a>Editar Cuenta</a>
      </div>
      <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Apellido</label>
        <input type="text" />
        <label>Correo</label>
        <input type="email" />
        <button type="submit">Guardar</button>
      </form>
    </DivPerfil>
  )
};

const DivPerfil = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 90%;
  div{
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top:20px;
    input {
      border-radius: 8px;
      height: 35px;
      border: 1px solid black;
    }
    button {
      width: 100%;
      margin-top: 15px;
      height: 40px;
    }
  }
`
export default Perfil