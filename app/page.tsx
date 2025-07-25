'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Cases from '@/components/Cases'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Cases />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
} 