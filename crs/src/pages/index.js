import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CardContainer from '@/components/CardContainer'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
