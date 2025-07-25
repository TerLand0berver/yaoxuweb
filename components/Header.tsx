'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, CheckCircle } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img src="/images/logo.webp" alt="爻序科技 Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold gradient-text">@爻序科技</h1>
              <p className="text-xs text-gray-400">上海爻序科技有限公司</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">首页</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">产品服务</a>
            <a href="#cases" className="text-gray-300 hover:text-white transition-colors">典型案例</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系我们</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              立即咨询
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/20"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">首页</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">产品服务</a>
              <a href="#cases" className="text-gray-300 hover:text-white transition-colors">典型案例</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系我们</a>
              <button className="button-primary w-full">立即咨询</button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
} 