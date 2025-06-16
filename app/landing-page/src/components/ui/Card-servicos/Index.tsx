import React from 'react';
import { StyleCardServicos } from './Styles';
import seta from "../../../assets/images/seta-rigth.png"

interface PropsCard {
  image: string;
  title: string;
  descript: string;
}

const CardServicos: React.FC<PropsCard> =({image, title, descript}) => {
  return (
    <StyleCardServicos>
      <div className='ui'>
        <img className='img-product' src={image} alt="imagem do card" />
        <div className='link'>
          <img src={seta} alt="seta para direita" />
        </div>
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{descript}</p>
      </div>
    </StyleCardServicos>
  )
}

export default CardServicos;
