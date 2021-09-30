import React from 'react';
import styled from 'styled-components';
import '../../App.css';

const Dicastrilhas = () =>{
  return <div className='trilhainformation'>

    <Overlay>
      <Content>
        <Main>
          <h5>10 motivos para fazer trilhas: por que o esforço vale tanto a pena</h5>
        
        </Main>
        <Contentinfo>
          <ol>
            <li>Se conectar com a natureza.</li>
            
            <li>Sair da rotina.</li>
           
            <li>Se conectar consigo mesmo.</li>
            
            <li>Se conectar com outras pessoas.</li>
           
            <li>Se conhecer melhor.</li>
          
            <li>Se superar.</li>
           
            <li>Aprender a valorizar o caminho.</li>
            
            <li>Conhecer lugares lindos.</li>
            
            <li>Simplificar.</li>
         
            <li>Se exercitar.</li>
         
          </ol>
          <br/>
          <br/>
          <p>Mesmo que você seja uma pessoa urbana e 
            edentária como eu, vale a pena dar uma 
            chance ao seu lado “aventureiro” e se juntar ao clube dos loucos que adoram se
             cansar e se sujar em 
            nome de uma boa trilha
          </p>
        </Contentinfo>
      </Content>

    </Overlay>


</div>
}

export default Dicastrilhas;

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

const Content =styled.div`
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
const Contentinfo =styled.div`
    top: 5;
    font-weight: 20px;
    font-size: 30px;
    
    ol{
      text-align: justify;
      margin-left:50px;
    }
    li{
      
    }
`;

const Main = styled.div`
    display: flex;
    aling-items: center;
    justify-content: space-between;
    marging-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2C3E50;
    
`;


