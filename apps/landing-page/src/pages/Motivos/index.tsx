import Container from "../../components/layout/Container";
import { StylesMotivos } from "./styles";
import Button from "../../components/ui/Button";
import estrela from "../../assets/images/star.png"

const Motivos = () => {
    return (
        <Container>
            <StylesMotivos>
                <div className="left">
                    <div className="text">
                        <span>Seu sucesso, nossa prioridade</span>
                        <h2>Porque você deve ser um de nossos parceiros?</h2>
                        <p>
                            Dolor risus sit dui eu vel mauris neque pulvinar mattis. A in pulvinar fames lorem 
                            laoreet pulvinar nisl nunc fringilla.
                        </p>
                    </div>
                    <ul>
                        <li>
                            <img src={estrela} alt="estrela icon" />
                            HITÓRICO COMPROVADO
                        </li>
                        <li>
                            <img src={estrela} alt="estrela icon" />
                            ARBODAGEM ORIENTADA POR DADOS
                        </li>
                        <li>
                            <img src={estrela} alt="estrela icon" />
                            TIME DE EXPERTS
                        </li>
                    </ul>
                    <Button isActive text="VIRAR PARCEIRO"/>
                </div>
                <div className="rigth">
                    
                </div>
            </StylesMotivos>
        </Container>
    )
}

export default Motivos