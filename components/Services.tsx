'use client'

import { motion } from 'framer-motion'
import { Database, Code, Lightbulb, Users } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: "智能数据融合平台",
    description: "多源数据整合，AI 驱动的企业级数据解决方案，实现数据可控、可视、可用。",
    image: "/images/service-data-fusion.webp",
  },
  {
    icon: Code,
    title: "业务流程智能 Agent 工厂",
    description: "定制化业务流程自动化，提供全链路智能在环的可视化 Agent 解决方案。",
    image: "/images/service-agent-factory.webp",
  },
  {
    icon: Lightbulb,
    title: "市场洞察与转化优化",
    description: "实时监控市场动态与竞品情报，通过 AI 分析助力营销高转化。",
    image: "/images/service-market-insight.webp",
  },
  {
    icon: Users,
    title: "企业智能化陪跑咨询",
    description: "资深 AI 与行业专家团队，为企业成长提供高级顾问驻场式服务。",
    image: "/images/service-consulting.webp",
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            智能<span className="gradient-text">解决方案</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            企业级 AI 智能体系统，覆盖数据融合、流程自动化、市场洞察到专家咨询的全链路解决方案。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-medium"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-gradient-to-br from-accent/10 to-yellow-600/10 rounded-lg">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-text-secondary leading-relaxed text-sm">
                {service.description}
              </p>
              
              {service.image && (
                <div className="mt-4 -mx-6 -mb-6 overflow-hidden rounded-b-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}