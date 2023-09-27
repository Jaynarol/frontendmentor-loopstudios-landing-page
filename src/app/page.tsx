import type { Metadata } from 'next'
import Creations from '../components/Creations'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Frontend Mentor - Loopstudios landing page',
  description: 'Your challenge is to build out this landing page and get it looking as close to the design as possible.',
}

const PageHome = () => (
  <>
    <Header />
    <main className="flex flex-col px-8 md:px-0">
      <Features />
      <Creations />
    </main>
    <Footer />
  </>
)

export default PageHome
