import React from 'react';
import '../../App.css';

import CarruselGet from '../carrusel/CarruselGet';
import Navbar from '../navbar/Navbar';
import LCards from '../pack-trilhas/LCards';


import Form from '../Form'


export default function Home() {
  return (
    <>

      <Navbar/>
      <CarruselGet/>
      <LCards key="23123"/>
      <h1 className='home'>EPIC</h1>
      <Form/>

    </>
  );
}
