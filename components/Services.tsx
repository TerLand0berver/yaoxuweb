'use client'

import { Database, Code, Lightbulb, Users } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: "智能数据融合平台",
    description: "多源数据整合，AI驱动的企业级数据解决方案，实现数据可控、可视、可用。",
    image: "/images/service-data-fusion.webp",
  },
  {
    icon: Code,
    title: "业务流程智能Agent工厂",
    description: "定制化业务流程自动化，提供全链路智能在环的可视化Agent解决方案。",
    image: "/images/service-agent-factory.webp",
  },
  {
    icon: Lightbulb,
    title: "市场洞察与转化优化",
    description: "实时监控市场动态与竞品情报，通过AI分析助力营销高转化。",
    image: "/images/service-market-insight.webp",
  },
  {
    icon: Users,
    title: "企业智能化陪跑咨询",
    description: "资深AI与行业专家团队，为企业成长提供高级顾问驻场式服务。",
    image: "/images/service-consulting.webp",
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            我们的解决方案
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            我们提供一站式Agent部署解决方案，覆盖从数据到业务的全链路，助力企业实现智能化转型。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-surface rounded-lg border border-border overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              {service.image && (
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                  <h3 className="text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}