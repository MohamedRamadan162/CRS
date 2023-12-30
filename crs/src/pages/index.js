import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CardContainer from '@/components/CardContainer'
import Card from '@/components/Card'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // const [cars, setCars] = useState([]);
  // useEffect(() => {
  //   fetch(`/api/getCars`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setCars(data))
  //     .catch((error) => console.error("Error listing cars:", error));
  // }, []);
  // console.log(cars)
  const [results,setResults] = useState([])
  return (
    <div className="site-wrap" id="home-section">
      <Nav />
      <Hero
       setResults={setResults} 
       />
      <CardContainer>
        {
          results.map(car => (
            <Card key={car.plate_id} carPic={car.car_pic} carModel={car.car_model} carPrice={car.car_price} carYear={car.car_year} OfficeName={car.office_id} carStatus={car.car_status} />
          ))
        }
      </CardContainer>
    </div>
  )
}
