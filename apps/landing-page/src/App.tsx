import Hero from "./pages/Hero";
import { GlobalStyle } from "./styles/GlobalStyles";
import Carrossel from "./components/layout/Carrossel";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Carrossel />
    </>
  );
}

export default App;
