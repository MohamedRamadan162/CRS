import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CardContainer from '@/components/CardContainer'
import Card from '@/components/Card'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`/api/getAllCars`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error listing cars:", error));
  }, []);
  return (
    <div class="site-wrap" id="home-section">
      <Nav />
      <Hero />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </div>
  )
}
