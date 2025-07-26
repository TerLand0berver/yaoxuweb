'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

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
              <p className="text-xs text-gray-400 hidden sm:block">上海爻序科技有限公司</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">首页</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">产品服务</a>
            <a href="#cases" className="text-gray-300 hover:text-white transition-colors">典型案例</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系我们</a>
            <a
              href="https://work.weixin.qq.com/ca/cawcdee1a570ad5f72"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                立即咨询
              </motion.div>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-white/20"
            >
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={handleLinkClick}
                >
                  首页
                </a>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={handleLinkClick}
                >
                  产品服务
                </a>
                <a 
                  href="#cases" 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={handleLinkClick}
                >
                  典型案例
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={handleLinkClick}
                >
                  联系我们
                </a>
                <a
                  href="https://work.weixin.qq.com/ca/cawcdee1a570ad5f72"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary w-full mt-2 text-center"
                >
                  立即咨询
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 