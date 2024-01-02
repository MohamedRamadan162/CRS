import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import CarAdder from '@/components/CarAdder'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function add_car() {
  return (
    <div className="site-wrap" id="home-section">
      <Nav  />
      <CarAdder
      />
    </div>
  )
}
