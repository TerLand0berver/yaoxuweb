'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  company: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  company?: string
  email?: string
  message?: string
  [key: string]: string | undefined
}

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '请输入消息内容'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', company: '', email: '', message: '' })
        
        // 3秒后关闭窗口
        setTimeout(() => {
          setIsOpen(false)
          setSubmitStatus(null)
        }, 3000)
      } else {
        throw new Error(result.message || '发送失败')
      }
    } catch (error) {
      console.error('表单提交失败:', error)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  // 点击外部关闭窗口
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && e.target && !(e.target as Element).closest('.floating-contact-container')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-accent to-yellow-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          联系我们
        </span>
      </button>

      {/* 浮动窗口 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="floating-contact-container bg-surface rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* 头部 */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-bold text-text-primary">联系我们</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 内容 */}
            <div className="p-6">
              {/* 联系信息 */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-text-secondary">info.yaoxu@iooxu.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-text-secondary">17821146082</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-text-secondary">上海市宝山区逸仙路2816号</span>
                </div>
              </div>

              {/* 表单 */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 text-sm">发送成功！我们会尽快回复您。</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-red-800 text-sm">发送失败，请稍后重试。</span>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="姓名 *"
                    className={`w-full px-3 py-2 bg-background border rounded-md text-sm focus:ring-accent focus:border-accent ${
                      errors.name ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="公司"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:ring-accent focus:border-accent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="邮箱 *"
                    className={`w-full px-3 py-2 bg-background border rounded-md text-sm focus:ring-accent focus:border-accent ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请详细描述您的需求... *"
                    rows={4}
                    className={`w-full px-3 py-2 bg-background border rounded-md text-sm focus:ring-accent focus:border-accent resize-none ${
                      errors.message ? 'border-red-500' : 'border-border'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-gradient-to-r from-accent to-yellow-600 text-white font-medium rounded-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>发送中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>发送消息</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}