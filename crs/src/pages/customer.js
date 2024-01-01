import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import CustomerFilter from '@/components/CustomerFilter'
import CardContainer from '@/components/CardContainer'
import CustomerCard from '@/components/CustomerCard'
import { useState, useEffect } from "react";



export default function customer() {
  const emphasis = 'Our Customers'
  const h1 = ' are here'
  const h2 = 'Customer listings'
  const [results, setResults] = useState([])
  return (
    <div className="site-wrap" id="home-section">
      <Nav  />
      <CustomerFilter
        setResults={setResults}
        emphasis = {emphasis}
        h1 = {h1}
      />
      <CardContainer h2 ={h2}>
        {
          // results && 
          results.map(user => (
            <CustomerCard userID={user.user_id} userName={user.user_name} userEmail={user.user_email} userPhone={user.user_phone} />
          ))
        }
      </CardContainer>
    </div>
  )
}
