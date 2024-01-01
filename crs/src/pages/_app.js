import '../../public/fonts/icomoon/style.css'
import '@/styles/aos.css'
import '@/styles/bootstrap.min.css'
import '@/styles/bootstrap-datepicker.css'
import '@/styles/jquery.fancybox.min.css'
import '@/styles/owl.carousel.min.css'
import '@/styles/owl.theme.default.min.css'
import '@/styles/globals.css'
import '@/styles/style.css'
import { ClerkProvider } from '@clerk/nextjs'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider> 
    </>
  )
}
