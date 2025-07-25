'use client'

import { motion } from 'framer-motion'
import { Database, Code, Lightbulb, Users } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: "智能数据融合平台",
    subtitle: "DataFusion Platform",
    description: "数据可控、可视、可用多源数据整合，AI驱动的企业级数据解决方案",
    image: "/images/service-data-fusion.webp",
    color: "from-teal-500 to-teal-600",
    delay: 0.1
  },
  {
    icon: Code,
    title: "业务流程智能Agent工厂",
    subtitle: "Business Process Agent Factory",
    description: "全链路智能在环，定制化业务自动化可视化Agent解决方案",
    image: "/images/service-agent-factory.webp",
    color: "from-blue-500 to-blue-600",
    delay: 0.2
  },
  {
    icon: Lightbulb,
    title: "市场洞察与转化优化服务",
    subtitle: "Market Insight & Conversion",
    description: "及时监控市场，助力营销高转化，竞品情报监控AI分析",
    image: "/images/service-market-insight.webp",
    color: "from-purple-500 to-purple-600",
    delay: 0.3
  },
  {
    icon: Users,
    title: "企业智能化陪跑咨询服务",
    subtitle: "Enterprise Consulting",
    description: "用心陪跑每一个企业成长，高级顾问驻场，资深AI+行业专家",
    image: "/images/service-consulting.webp",
    color: "from-accent-500 to-accent-600",
    delay: 0.4
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            产品与服务
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            为中小企业提供一站式Agent部署解决方案，助力企业数字化转型
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl h-full card-hover">
                {/* Image Placeholder */}
                {service.image && (
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary"
          >
            查看详细方案
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 