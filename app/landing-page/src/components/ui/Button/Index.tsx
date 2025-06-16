import { StyleButton } from './Styles';
import React from 'react';

interface ButtonProps {
  value: string;
  hasButton?: boolean
}

const Button: React.FC<ButtonProps> = ({value, hasButton}) => {
  return (
    <StyleButton hasButton={hasButton}>
      {value}
    </StyleButton>
  )
}

export default Button;
