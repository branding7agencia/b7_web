import Button from "./components/ui/Button/index";
import CardService from "./components/ui/Card-service";
import { GlobalStyle } from "./styles/GlobalStyles";
import service from "./assets/images/service.png"
import CardPlans from "./components/ui/Card-planos";
import CardFeedback from "./components/ui/Card-feedback";
import perfil from "./assets/images/profile.jpg"

const items = ['Social media', 'Tráfego pago', 'Criação de conteúdo', 'Posicionamento digital']

function App() {
  return (
    <>
      <GlobalStyle />
      <Button text="ENTRAR EM CONTATO"  isActive={true}/>
      <CardService 
        image={service} title="SERVIÇO B7" 
        description="Essa é uma descrição de um produto b7, irá conter explicações prévias sobre servços b7"/>
      <CardPlans 
        title="PACOTES DE SERVIÇO"
        price="997,00"
        description="Este é o preço do nosso serviço e você também pode observar os benefícios dele"
        isActive={true}
        items={items}
      />
      <CardFeedback 
        image={perfil}
        title="Amanda Costa"
        description="Marketing Director"
        price="5.0"
        text="Serviços de alto padrão com qualidade extraodrdinária,
        equipe alatamente competente pronta para lhe ajudar em qualquer fase do 
        seu negócio"
      />
    </>
    
  );
}

export default App;
