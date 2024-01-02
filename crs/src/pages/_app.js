import '../../public/fonts/icomoon/style.css'
import '@/styles/aos.css'
import '@/styles/bootstrap-datepicker.css'
import '@/styles/jquery.fancybox.min.css'
import '@/styles/owl.carousel.min.css'
import '@/styles/owl.theme.default.min.css'
import '@/styles/style.css'
import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Script src="/js/jquery-3.3.1.min.js" />
      <Script src="/js/popper.min.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/owl.carousel.min.js" />
      <Script src="/js/jquery.sticky.js" />
      <Script src="/js/jquery.waypoints.min.js" />
      <Script src="/js/jquery.animateNumber.min.js" />
      <Script src="/js/jquery.fancybox.min.js" />
      <Script src="/js/jquery.easing.1.3.js" />
      <Script src="/js/bootstrap-datepicker.min.js" />
      <Script src="/js/aos.js" />
      <Script src="/js/main.js" /> */}
    </>
  )
}
