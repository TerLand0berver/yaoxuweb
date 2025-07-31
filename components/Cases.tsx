'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ShoppingCart, Store, ArrowUpRight } from 'lucide-react'

const cases = [
  {
    icon: TrendingUp,
    title: "智能制造转型",
    description: "通过智能 Agent 技术，实现生产流程自动化，大幅提升效率，减少人工成本，并显著提高质量合格率。",
    image: "/images/case-manufacturing.webp",
    stats: [
      { label: "效率提升", value: "89.4%" },
      { label: "节省工时", value: "27,644h" },
      { label: "质量合格率", value: "96.0%" }
    ],
  },
  {
    icon: ShoppingCart,
    title: "电商营销突破",
    description: "运用智能营销 Agent，实现精准用户画像和个性化推荐，使转化率和 ROI 得到显著增长。",
    image: "/images/case-ecommerce.webp",
    stats: [
      { label: "转化率提升", value: "300%" },
      { label: "ROI增长", value: "156%" },
      { label: "用户满意度", value: "98.5%" }
    ],
  },
  {
    icon: Store,
    title: "零售数字化重构",
    description: "构建全渠道智能零售 Agent，实现线上线下无缝融合，驱动销售额与客户留存率双双提升。",
    image: "/images/case-retail.webp",
    stats: [
      { label: "销售额增长", value: "78%" },
      { label: "客户留存率", value: "65%" },
      { label: "运营效率", value: "提升2.3倍" }
    ],
  }
]

export default function Cases() {
  return (
    <section id="cases" className="relative bg-gradient-to-b from-background to-surface_alt py-24 px-4 sm:px-6 lg:px-8">
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
            客户成功<span className="gradient-text">案例</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            我们的解决方案已在多个行业成功落地，见证企业数字化转型的卓越成果。
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface border border-border rounded-xl overflow-hidden flex flex-col hover:border-accent/50 transition-all duration-300 hover:shadow-medium"
            >
              <div className="relative overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <caseItem.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {caseItem.title}
                  </h3>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                  {caseItem.description}
                </p>

                <div className="space-y-4 border-t border-border pt-4">
                  {caseItem.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center">
                      <span className="text-text-secondary text-sm">{stat.label}</span>
                      <span className="text-text-primary font-semibold text-lg">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}