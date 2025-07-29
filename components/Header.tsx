'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '#home', text: '首页' },
    { href: '#services', text: '解决方案' },
    { href: '#cases', text: '客户案例' },
    { href: '#about', text: '关于我们' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled || isMenuOpen ? 'bg-surface/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src="/images/logo.webp" alt="爻序科技 Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-text-primary">爻序科技</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-accent transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#contact-section"
              className="ml-6 px-5 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              联系我们
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-text-secondary hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-md text-text-secondary hover:bg-gray-100 hover:text-accent transition-colors"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#contact-section"
              onClick={handleLinkClick}
              className="w-full mt-2 text-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-hover transition-colors"
            >
              联系我们
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}