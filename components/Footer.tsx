'use client'

import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { href: '#services', text: '解决方案' },
    { href: '#cases', text: '客户案例' },
    { href: '#about', text: '关于我们' },
    { href: '#contact-section', text: '联系我们' },
  ]

  return (
    <footer id="footer" className="bg-surface border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/logo.webp" alt="爻序科技 Logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-text-primary">上海爻序科技有限公司</h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              我们致力于构建可靠、可控的智能体，驱动企业创新与增长。
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">导航</h4>
              <div className="space-y-3">
                {navLinks.map(link => (
                  <a key={link.text} href={link.href} className="block text-text-secondary hover:text-accent transition-colors">{link.text}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">联系方式</h4>
              <div className="space-y-3 text-text-secondary">
                <p>info.yaoxu@iooxu.com</p>
                <p>17821146082</p>
                <p>上海市宝山区逸仙路2816号</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © 2025 上海爻序科技有限公司. 保留所有权利.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-text-secondary hover:bg-gray-200 transition-colors"
            aria-label="返回顶部"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}