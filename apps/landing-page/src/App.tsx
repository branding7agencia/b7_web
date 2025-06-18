import Hero from "./pages/Hero";
import { GlobalStyle } from "./styles/GlobalStyles";
import Carrossel from "./components/layout/Carrossel";
import QuemSomos from "./pages/Quem-somos";
import NossoServico from "./pages/Nosso-servicos";
import Motivos from "./pages/Motivos";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Carrossel />
      <QuemSomos />
      <NossoServico />
      <Motivos />
    </>
  );
}

export default App;
