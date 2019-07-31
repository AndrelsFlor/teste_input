import React from "react";
import { Container, MainText, Input } from "./styles";

const App = () => {
  return (
    <Container>
      <MainText>Para começar vamos precisar do seu RG. Ok?</MainText>
      <Input autoFocus />
    </Container>
  );
};

export default App;
