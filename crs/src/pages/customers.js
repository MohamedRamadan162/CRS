// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navc from '@/components/Navc'
import CarFilter from '@/components/CarFilter'
import CardContainer from '@/components/CardContainer'
import CarCardc from '@/components/CarCardc'
import { useState, useEffect } from "react";
import { withSession } from '../lib/session'

const inter = Inter({ subsets: ["latin"] });

export default function customers() {
  const emphasis = 'Rent a car'
  const h1 = ' is within your finger tips.'
  const h2 = 'Car listings'
  const [results, setResults] = useState([])
  return (
    <div className="site-wrap" id="home-section">
      <Navc />
      <CarFilter
        setResults={setResults}
        emphasis={emphasis}
        h1={h1}
      />
      <CardContainer h2={h2}>
        {
          // results && 
          results.map(car => (
            <CarCardc plateID={car.plate_id} carPic={car.car_pic} carModel={car.car_model} carPrice={car.car_price} carYear={car.car_year} officeName={car.office_id} carStatus={car.car_status} />
          ))
        }
      </CardContainer>
    </div>
  )
}

export const getServerSideProps = withSession(async function ({ req }) {
  const user = req.session.get('user');
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
});