'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="hero-glow"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-accent/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/30 rotate-45"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-surface border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-soft"
          >
            <Zap className="w-4 h-4" />
            <span>企业级 AI 解决方案</span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-text-primary leading-tight md:leading-tight mb-6 text-center"
          >
            <span className="block">智能涌现</span>
            <span className="block gradient-text">重塑企业未来</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            构建可靠、可控的智能体系统，<br className="hidden md:block" />
            无缝集成核心业务流程，驱动企业级智能化转型。
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="btn-primary group flex items-center space-x-2"
            >
              <span>开始对话</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="btn-secondary"
            >
              了解方案
            </a>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex items-center justify-center space-x-8 text-text-muted text-sm"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>企业级安全</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>可解释AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>持续优化</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}