'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="bg-background pt-48 pb-32 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight md:leading-tight">
          智能涌现，重塑企业未来
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          我们构建可靠、可控的智能体，无缝集成于您的核心业务，驱动前所未有的增长与创新。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-accent-hover transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>立即咨询</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3 bg-surface text-accent font-semibold rounded-lg border border-border hover:bg-gray-100 transition-colors duration-300"
          >
            <span>了解更多</span>
          </a>
        </div>
      </div>
    </section>
  )
}