/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components';
import sendero from '../../images/sendero.png'
import guiadas from '../../images/guiadas.jpeg'
import nãoguiadas from '../../images/nãoguiadas.jpg'

const TrilhaInformation = () =>{
   return <div className='trilhainformation'>
            <Overlay>
              <ContentTrilha>

                  <Header>
                    <h5>Você saberia definir o que é trilha?</h5>
                  </Header>
                
                  <Contentinfo>
                    <p>
                      Uma trilha é um caminho ou estrada de passeio terrestre usado 
                      para caminhada ao ar livre, ciclismo ou outras atividades de 
                      locomoção. Trilhas são caminhos existentes ou estabelecidos, com 
                      diferentes formas, comprimentos e larguras, que possuam o 
                      objetivo de aproximar o visitante ao ambiente natural, ou 
                      conduzi-lo a um atrativo específico, possibilitando seu 
                      entretenimento ou educação através de sinalizações ou de 
                      recursos interpretativos.
                    </p>
                    
                  </Contentinfo>

                  <Divimg>
                    <img className="img" src={sendero}/>
                  </Divimg>
                    
                  <Main>
                    <h5>Tecnicamente, podem ser estabelecidos diversos tipos de trilhas, que podem ser classificadas:</h5>
                  </Main>
                <Contentinfo>
                  <ul>
                      <li>Quanto à função: Vigilância, recreativa, educativa, interpretativa e travessias.</li>
                      <li>Quanto à forma: Circular, oito, linear e atalho</li>
                      <li>Quanto ao grau de dificuldade:</li>
                  </ul>
                  <p>Leve – como a Trilha da Teatro Amazona.
                      Moderada – como a Trilha do Parque Estadual Sumaúma.
                      Pesada – como a Trilha da Parque Rio Negro.
                  </p>
                  <br/>
                  <br/>
                  <p>Quanto à declividade do relevo: Ascendentes, descendentes e irregulares.
                      Acerca dos recursos utilizados para a interpretação ambiental da trilha, elas podem ser classificadas de duas maneiras: trilhas guiadas (monitoradas) ou trilhas autoguiadas.
                  </p>

                  <Divimg>
                    <h4>Trilhas Guiadas</h4>
                    <img className="img" src={guiadas}/>
                  </Divimg>
                  <br/>
                  <p>Vários tipos de passeios guiados podem ser desenvolvidos. O guia 
                    pode fixar previamente os locais de parada e os temas trabalhados, sem
                     que o público possa designar novas investigações, ou naquelas em que 
                     as observações vão acontecendo conforme os eventos aparecem (fauna, 
                     flora, relevo, etc.) ou de acordo com as motivações dos participantes. Entretanto, 
                     o bom guia de ecoturismo é aquele estabelece uma estratégia de abordagem que 
                     satisfaça interesses específicos dos seus participantes (Observação de Aves,
                      Espeleologia, etc.).</p>
                  
                      <Divimg>
                    <h4>Trilhas Auto Guiadas</h4>
                    <img className="img" src={nãoguiadas}/>
                  </Divimg>
                  <br/>
                  <p>A trilhas auto guiadas tem como principal função facilitar a caminhada e permitir o 
                    contato
                     dos visitantes
                     com o meio ambiente sem a presença do guia 
                    de ecoturismo. Assim, recursos visuais e gráficos indicam a direção a seguir, os
                     elementos a serem
                     destacados são (árvores nativas, 
                    plantas medicinais, ninhos de
                     pássaros, etc.) e os 
                    temas desenvolvidos
                     (mata ciliar, recursos hídricos, etc.).
                    As trilhas localizam-se dentro de um ecossistema específico, utilizando traçados já 
                    existentes. Quando bem elaboradas, conseguem promover o contato mais estreito 
                    entre o 
                    omem e a natureza, possibilitando conhecimento das espécies, animais e vegetais, da
                     história local, da geologia, da pedologia, dos processos 
                    biológicos, das relações ecológicas, ao meio ambiente e sua proteção, constituindo 
                    instrumento pedagógico muito
                    importante.</p>


              </Contentinfo>

                
               
              </ContentTrilha>
            </Overlay>   
            
               
         </div>
}

export default TrilhaInformation;

const Overlay = styled.div`
    width: 100vw;
    padding-top: 40px;
    top:60;
    left:0;
    display:flex;
    alingn-items: center;
    justify-content: center;
    margin-bottom:20px;
`;


const ContentTrilha = styled.div`
    width: 80vw;
    min-height: 500px;
    background:rgba(230, 214, 214, 0.39);
    position: relative;
    border-radius: 5px;
    box-shadow: (100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    top:50;
    alingn-items: center;
    justify-content: center;
    text-align: center;
    
    `;

const Header = styled.div`
    display: flex;
    aling-items: center;
    justify-content: space-between;
    marging-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2C3E50;
    
 
`;

const Main = styled.div`
    display: flex;
    aling-items: center;
    justify-content: space-between;
    marging-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2C3E50;
    
 
`;

const Contentinfo =styled.div`
    top: 5;
    font-weight: 20px;
    font-size: 20px;
    text-align: justify
`;

const Divimg =styled.div`
    padding: 50px;
    top: 20px;
    text-align: right;
    opacity:none;
`;












// ------------------------------------------------------

//  <div className="card">
//      <div className="custom_card">
//         <div className="top_image_card">
//           <img className="img_card" src={sendero} alt="soy una imagen"/>
//         </div>

//         <div class="title_card">
//           <p>titulo</p>
//         </div>

//         <div class="text_card">
//             <p>descripcion y pequeço texto del card</p>
//         </div>
//       </div>        
//    //</div> 