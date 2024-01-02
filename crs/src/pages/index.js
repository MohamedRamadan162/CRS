import Image from 'next/image'
import {useUser} from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import CarFilter from '@/components/CarFilter'
import CardContainer from '@/components/CardContainer'
import Card from '@/components/Card'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const emphasis = 'Rent a car'
  const h1 = ' is within your finger tips.'
  const h2 = 'Car listings'
  const [results, setResults] = useState([])
  return (
    <div className="site-wrap" id="home-section">
      <Nav  />
      <CarFilter
        setResults={setResults}
        emphasis = {emphasis}
        h1 = {h1}
      />
      <CardContainer h2={h2}>
        {
          // results && 
          results.map(car => (
            <CarCard plateID={car.plate_id} carPic={car.car_pic} carModel={car.car_model} carPrice={car.car_price} carYear={car.car_year} officeName={car.office_id} carStatus={car.car_status} />
          ))
        }
      </CardContainer>
    </div>
  )
}

  export const getServerSideProps = withSession(async function ({ req }) {
    const user = req.session.get('user');
    // console.log('user:', user);
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    return {
      props: { user },
    };
  });