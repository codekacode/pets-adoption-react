const PetDetail = () => {
  <PetDetailCard>
    <img />
    <PetDetail>
      <div>
        <h1>Rocky</h1>
        <LikeBtn></LikeBtn>
      </div>
      <Caract>
        <div>
          <img />
          Rottweiler
        </div>
      </Caract>
      <div>
        4140 Parker Rd. Allentown, 
        New Mexico 31134
      </div>

    </PetDetail>
    <Personalities>
      <Personality>
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
      <img></img>
      <div>
        <p>Publicado por</p>
        <p>MAria Dolores</p>
      </div>
      <ContactBtn>
        Contactar
      </ContactBtn>
    </PubliBy>
  </PetDetailCard>
};


export default PetDetail;