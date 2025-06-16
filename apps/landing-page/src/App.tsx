import Button from "./components/ui/Button/index";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button text="ENTRAR EM CONTATO" isActive={true}/>
    </>
  );
}

export default App;
