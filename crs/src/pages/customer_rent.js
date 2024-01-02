import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navc from '@/components/Navc'
import ReservationAdder from '@/components/ReservationAdder'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { withSession } from '../lib/session'

const inter = Inter({ subsets: ["latin"] });
export default function customer_rent({ user }) {
  const router = useRouter();
  const { plateID } = router.query; // Retrieve the passed variable
  return (
    <div className="site-wrap" id="home-section">
      <Navc />
      <ReservationAdder
        plateID={plateID}
        userID={user.user.user_id}
      />
    </div>
  )
}
export const getServerSideProps = withSession(async function ({ req }) {
  const user = req.session.get('user');
  const admin = req.session.get('admin');
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


