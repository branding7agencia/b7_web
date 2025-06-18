import { StylesQuemSomos } from "./styles";
import b7 from "../../assets/images/b7-semfundo.png"
import foguete from "../../assets/images/b7-foguete.png"

const QuemSomos = () =>{
    return (
        <StylesQuemSomos>
                <div className="head">
                    <div className="logo">
                        <img src={b7} alt="logo b7" />
                    </div>
                    <h2>Quem somos nós?</h2>
                </div>
                <div className="content">
                    <div className="frame">
                        <img src={foguete} alt="foguete b7" />
                    </div>
                    <div className="text">
                        <div className="story">
                            <h3>Compromtimento em alavancar sua marca!</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur nobis 
                                sed ut maxime, facilis, quaerat est ipsa totam tempore ratione 
                                delectus velit quasi cupiditate facere eum enim, perspiciatis voluptates?
                            </p>
                        </div>
                        <div className="metrics">
                            <div className="insigth">
                                <span>4.8/5</span>
                                <h3>Reviws positicas</h3>
                            </div>
                            <div className="insigth">
                                <span>5+</span>
                                <h3>Anos de experiênia</h3>
                            </div>
                            <div className="insigth">
                                <span>11+</span>
                                <h3>Especialistas no time B7</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </StylesQuemSomos>
    )
}

export default QuemSomos