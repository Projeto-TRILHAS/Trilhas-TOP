import React from 'react';
import '../../App.css';
import CarruselGet from '../carrusel/CarruselGet';
import Navbar from '../navbar/Navbar';
import LCards from '../pack-trilhas/LCards';
import Contato from '../contato/Contato';



export default function Home() {
  return (
    <>
      <Navbar/>
      <CarruselGet/>
      <LCards key="23123"/>
      <Contato/>
    </>
  );
}
