import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navc from '@/components/Navc'
import ReservationAdder from '@/components/ReservationAdder'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { withSession } from '../lib/session'

const inter = Inter({ subsets: ["latin"] });
export default function add_reservation({ admin }) {
  const router = useRouter();
  const { plateID } = router.query; // Retrieve the passed variable
  return (
    <div className="site-wrap" id="home-section">
      <Navc />
      <ReservationAdder
        plateID={plateID}
        userID={admin.admin.user_id}
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


