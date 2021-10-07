import React from "react";
import "./InfoTrilha.css";
import caminho from "../../assets/images/caminho.png";
import guiadas from "../../assets/images/guiadas.jpeg";
import autoguiadas from "../../assets/images/autoguiadas.jpg";

const InfoTrilha = () => {
return (
    <div className="info-container">
    <div className="info-desc">
        <h3>Você saberia definir o que é trilha?</h3>
        <div className="def-trilha">
            <div>
                <p>
                Uma trilha é um caminho ou estrada de passeio terrestre usado para caminhada ao ar
                livre, ciclismo ou outras atividades de locomoção. Trilhas são caminhos existentes 
                u estabelecidos, com diferentes formas, comprimentos e larguras, que possuam o 
                objetivo de aproximar o visitante ao ambiente natural, ou conduzi-lo a um atrativo
                específico, possibilitando seu entretenimento
                ou educação através de sinalizações ou de recursos interpretativos.
                </p>
            </div>
            <div className="info-img">
                <img src={caminho} alt="caminho"/>
            </div>
        </div>
    

    
    
        <h3>Tecnicamente, podem ser estabelecidos diversos tipos de trilhas, que podem ser classificadas:</h3>
        <ul>
            <li>Quanto à função: Vigilância, recreativa, educativa, interpretativa e travessias.</li>
            <li>Quanto à forma: Circular, oito, linear e atalho.</li>
            <li>Quanto ao grau de dificuldade:</li>
        </ul>
    
    

        
            
            <div>
                <ol>
                    <li>Leve: como a Trilha da Teatro Amazonas.</li>
                    <li>Moderada: como a Trilha do Parque Sumaúma</li>
                    <li>Pesada: como a Trilha da Encontros das Aguas</li>
                    </ol>
                    </div>
                    <p>Quanto à declividade do relevo: Ascendentes, descendentes e 
                        irregularesAcerca dos recursos utilizados para a interpretação
                        ambiental da trilha, elas podem ser classificadas de duas
                        maneiras: trilhas guiadas (monitoradas) ou trilhas autoguiadas.</p>
                        <br/>
                        <br/>
                        <h3>Trilhas Guiadas (monitoradas)</h3> 
                        <br/>
                        <div className="info-img">
                <img className="guiadas" src={guiadas} alt="guiadas"/>
            </div>
            <br/>
                <p>Vários tipos de passeios guiados podem ser desenvolvidos. O guia pode fixar previamente 
                    os locais de parada e os temas trabalhados, sem que o público possa designar 
                    novas investigações, ou naquelas em que as observações vão acontecendo conforme 
                    os eventos aparecem (fauna, flora, relevo, etc.) ou de acordo com as motivações 
                    dos participantes. Entretanto, o bom guia de ecoturismo é aquele estabelece uma 
                    estratégia de abordagem que satisfaça interesses específicos dos seus participantes
                    (Observação de Aves, Espeleologia, etc.).</p>
                    <br/>
                    <br/>
                    <h3>Trilhas Autoguiadas</h3> 
                    <br/>
                    <div className="info-img">
                <img className="autoguiadas" src={autoguiadas} alt="autoguiadas"/>
            </div>
            <br/>
            <p>A trilhas auto guiadas tem como principal função facilitar a caminhada
                e permitir o contato dos visitantes com o meio ambiente sem a presença do
                guia de ecoturismo. Assim, recursos visuais e gráficos indicam a direção a
                seguir, os elementos a serem destacados são (árvores nativas, 
                plantas medicinais, ninhos de pássaros, etc.) e os temas desenvolvidos (mata ciliar, recursos hídricos, etc.).</p>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>

);
};

export default InfoTrilha;
