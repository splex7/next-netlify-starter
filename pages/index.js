import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Demo from '@components/demo';
import Flicking, { MoveEvent, WillChangeEvent } from "@egjs/react-flicking";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Header title="Fullstack Studio" />
      
          
  
        
        
        <div className="grid grid-cols-3">
          <div className="card">
            <p className="icon">🫱🏻‍🫲🏻</p>
            <p className="description">
              Provides clients with software development consultancy that fits their
              budget and objectives{" "}
            </p>
          </div>
          <div className="card">
            <p className="icon">📱</p>
            <p className="description">
              Deliver Flutter-based iOS/Android applications or web applications{" "}
            </p>
          </div>
          <div className="card">
            <p className="icon">⚙️</p>
            <p className="description">
              Help develop and maintain low-code or no-code base applications.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
