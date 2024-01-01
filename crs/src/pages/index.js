import Image from 'next/image'
import {useUser} from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CardContainer from '@/components/CardContainer'
import Card from '@/components/Card'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [results,setResults] = useState([])
    return (
      <div className="site-wrap" id="home-section">
        <Nav />
        <Hero
         setResults={setResults} 
        />
        <CardContainer>
          {
            // results && 
            results.map(car => (
              <Card plateID={car.plate_id} carPic={car.car_pic} carModel={car.car_model} carPrice={car.car_price} carYear={car.car_year} officeName={car.office_id} carStatus={car.car_status} />
            ))
          }
        </CardContainer>
      </div>
    )
  }
