import Navbar from '@/components/navbar/navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  return (
    <>
    <div className='line-divider'></div>
    <div className='line-divider'></div>
    <div className='line-divider'></div>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
