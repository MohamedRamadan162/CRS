import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import CarAdder from '@/components/CarAdder'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function add_car() {
  const emphasis = 'Adding new cars'
  const h1 = ' is within your finger tips.'
  const h2 = 'Car listings'
  return (
    <div className="site-wrap" id="home-section">
      <Nav  />
      <CarAdder
        emphasis = {emphasis}
        h1 = {h1}
      />
    </div>
  )
}
