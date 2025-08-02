'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: "电子邮箱",
    value: "info.yaoxu@iooxu.com",
    description: "获取商务合作或技术支持"
  },
  {
    icon: Phone,
    title: "服务热线",
    value: "17821146082",
    description: "周一至周五 9:00-18:00"
  },
  {
    icon: MapPin,
    title: "公司地址",
    value: "上海市宝山区逸仙路2816号",
    description: "欢迎前来拜访交流"
  },
]

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

export default function Contact() {
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
      // 发送到后端API
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
        
        // 3秒后清除成功消息
        setTimeout(() => {
          setSubmitStatus(null)
        }, 3000)
      } else {
        throw new Error(result.message || '发送失败')
      }
    } catch (error) {
      console.error('表单提交失败:', error)
      setSubmitStatus('error')
      
      // 3秒后清除错误消息
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
    
    // 清除该字段的错误
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <section id="contact" className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            联系我们
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            我们随时准备好响应您的需求。请通过以下任何方式与我们联系，我们的专家团队将尽快给您回复。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {info.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">
                    {info.value}
                  </p>
                  <p className="text-sm text-gray-500">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-6">发送在线消息</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">消息发送成功！我们会尽快回复您。</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-800">发送失败，请稍后重试或直接通过其他方式联系我们。</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border rounded-md focus:ring-accent focus:border-accent ${
                      errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border'
                    }`}
                    placeholder="您的姓名"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">公司</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-accent focus:border-accent"
                    placeholder="您的公司名称"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">邮箱 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-background border rounded-md focus:ring-accent focus:border-accent ${
                    errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">消息内容 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 bg-background border rounded-md focus:ring-accent focus:border-accent resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border'
                  }`}
                  placeholder="请详细描述您的需求..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>发送中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>发送消息</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}