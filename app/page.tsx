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
import Practice from '@/components/Practice'
import FloatingContact from '@/components/FloatingContact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Cases />
      <Practice />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
} 