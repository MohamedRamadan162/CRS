import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import CarAdder from '@/components/CarAdder'
import { useState, useEffect } from "react";
import { withSession } from '../lib/session'

const inter = Inter({ subsets: ["latin"] });

export default function add_car() {
  return (
    <div className="site-wrap" id="home-section">
      <Nav  />
      <CarAdder
      />
    </div>
  )
}
export const getServerSideProps = withSession(async function ({ req }) {
  const user = req.session.get('user');
  const admin = req.session.get('admin');
  if (!admin) {
    return {
      redirect: {
        destination: '/customers',
        permanent: false,
      },
    };
  }
  return {
    props: { admin },
  };
});
