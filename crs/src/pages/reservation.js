import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import ReservationFilter from '@/components/ReservationFilter'
import CardContainer from '@/components/CardContainer'
import ReservationCard from '@/components/ReservationCard'
import { useState, useEffect } from "react";



export default function reservation() {
  const emphasis = 'Our Reservations'
  const h1 = ' are here'
  const h2 = 'Reseravtion listings'
  const [results, setResults] = useState([])
  return (
    <div className="site-wrap" id="home-section">
      <Nav  />
      <ReservationFilter
        setResults={setResults}
        emphasis = {emphasis}
        h1 = {h1}
      />
      <CardContainer h2 ={h2}>
        {
          // results && 
          results.map(res => (
            <ReservationCard rsrvID={res.rsrv_id} userID={res.user_id} plateID={res.plate_id} reserveTime={res.reserve_time} pickupTime={res.pickup_time} returnTime={res.return_time} />
          ))
        }
      </CardContainer>
    </div>
  )
}
