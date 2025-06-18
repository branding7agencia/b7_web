import Container from "../../components/layout/Container";
import { StylesNossosServicos } from "./styles";
import Button from "../../components/ui/Button";
import CardService from "../../components/ui/Card-service";
import service from "../../assets/images/service.png"

const NossoServico = () => {
    return (
        <Container hasBackground>
            <StylesNossosServicos>
                <div className="head">
                    <h2>NOSSOS SERVIÇOS</h2>
                    <Button isActive text="Todos os serviços"/>
                </div>
                <div className="cards">
                    <CardService image={service} title="B7 Ensina" 
                        description="Plataforma voltadapara o ensino de empreendedores.Autodidata? Então a B7 é para você."/>
                    <CardService image={service} title="B7 Play"
                        description="Vìdeos profissionais para seu perfil e poder experimentar a qualidade dos serviços B7." />
                    <CardService image={service} title="My Bussines"
                        description="Maior evento de network e heads do ramo digital de vitória da conquista." />
                </div>
            </StylesNossosServicos>
        </Container>
    )
}

export default NossoServico