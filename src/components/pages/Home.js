import React from 'react';
import '../../App.css';
import CarruselGet from '../carrusel/CarruselGet';
import Navbar from '../navbar/Navbar';
import LCards from '../pack-trilhas/LCards';



export default function Home() {
  return (
    <>
      <Navbar/>
      <CarruselGet/>
      <LCards key="23123"/>
    </>
  );
}
