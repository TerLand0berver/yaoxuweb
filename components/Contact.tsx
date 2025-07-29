'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'

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

export default function Contact() {
  return (
    <section id="contact-section" className="bg-background py-24 px-4 sm:px-6 lg:px-8">
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
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">姓名 *</label>
                  <input type="text" id="name" className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-accent focus:border-accent" placeholder="您的姓名" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">公司</label>
                  <input type="text" id="company" className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-accent focus:border-accent" placeholder="您的公司名称" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">邮箱 *</label>
                <input type="email" id="email" className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-accent focus:border-accent" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">消息内容 *</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-accent focus:border-accent resize-none" placeholder="请详细描述您的需求..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>发送消息</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}