import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import OfficeFilter from '@/components/OfficeFilter'
import CardContainer from '@/components/CardContainer'
import OfficeCard from '@/components/OfficeCard'
import { useState, useEffect } from "react";



export default function office() {
  const emphasis = 'Finding our offices'
  const h1 = ' is easy'
  const h2 = 'Office listings'
  const [results, setResults] = useState([])
  return (
    <div className="site-wrap" id="home-section">
      <Nav  />
      <OfficeFilter
        setResults={setResults}
        emphasis = {emphasis}
        h1 = {h1}
      />
      <CardContainer h2 ={h2}>
        {
          // results && 
          results.map(office => (
            <OfficeCard OfficeID={office.office_id} OfficeLocation={office.office_location} OfficePhone={office.office_phone} />
          ))
        }
      </CardContainer>
    </div>
  )
}
