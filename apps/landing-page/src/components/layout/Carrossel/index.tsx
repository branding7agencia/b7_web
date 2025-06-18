import { StylesCarrossel, CarroselConatiner } from "./styles";
import ecopower from "../../../assets/images/logos/ecopower.png"
import blw from "../../../assets/images/logos/blw.png"
import atacao from "../../../assets/images/logos/atacadao.png"
import lemont from "../../../assets/images/logos/lemont.png"

const logos = [
    {
        id: 1,
        src: lemont, 
        alt: 'Logo Lemont'
    },
    {
        id: 2,
        src: ecopower, 
        alt: 'Logo Ecopower'
    },
    {
        id: 3,
        src: blw, 
        alt: 'Logo blw'
    },
    {
        id: 4,
        src: atacao, 
        alt: 'Logo atacadão'
    }
]


const Carrossel = () => {
    return(
        <CarroselConatiner>
            <StylesCarrossel>
                {logos.map((logo) => (
                    <img key={logo.id} src={logo.src} alt={logo.alt} />
                ))}
                {logos.map((logo) => (
                    <img key={`duplicate-${logo.id}`} src={logo.src} alt={logo.alt} />
                ))}
            </StylesCarrossel>
        </CarroselConatiner>
    )
}

export default Carrossel