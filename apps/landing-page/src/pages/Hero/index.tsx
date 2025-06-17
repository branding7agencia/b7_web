import { StyleHero } from "./styles";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import { useCountUp } from "../../hooks/useCountUp";
import { useMemo } from "react";

const AnimatedMetric = ({value, suffix, label}: {value: number, suffix: string, label: string}) => {
    const count = useCountUp(value, 2000); 
    const roundedCount = Math.round(count);

    return(
        <div className="metrics">
            <h3>{roundedCount}{suffix}</h3>
            <p>{label}</p>
        </div>
    )
}

const Hero = () => {
    const metricsDate = useMemo(() => [
        {value: 9, suffix: 'M', label: 'Geridos em trafégo'},
        {value: 320, suffix: '+', label: 'Empresas atendidas'},
        {value: 150, suffix: '+', label: 'Criativos ao dia'}
        
    ], []);

    return (
        <StyleHero>
        <div className="title">
            <h1>BRANDING 7</h1>
            <p>O sucesso é a nossa marca!</p>
        </div>
        <div className="analisis">
            {metricsDate.map((metric) => (
                <AnimatedMetric 
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}/>
            ))}
        </div>
        <div className="buttons">
            <Button isActive={true} text="ENTRAR EM CONTATO"/>
            <Button isActive={false} text="NOSSOS SERVIÇOS"/>
        </div>
        </StyleHero>
    )
}

export default Hero