'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ShoppingCart, Store } from 'lucide-react'

const cases = [
  {
    icon: TrendingUp,
    title: "智能制造转型",
    subtitle: "Intelligent Manufacturing",
    description: "通过智能Agent技术，实现生产流程自动化，提升效率89.4%，减少人工成本27,644小时，质量合格率达到96.0%",
    image: "/images/case-manufacturing.webp",
    stats: [
      { label: "效率提升", value: "89.4%" },
      { label: "节省工时", value: "27,644h" },
      { label: "质量合格率", value: "96.0%" }
    ],
    color: "from-blue-500 to-blue-600",
    delay: 0.1
  },
  {
    icon: ShoppingCart,
    title: "电商营销突破",
    subtitle: "E-commerce Marketing",
    description: "运用智能营销Agent，实现精准用户画像和个性化推荐，转化率提升3倍，ROI增长156%",
    image: "/images/case-ecommerce.webp",
    stats: [
      { label: "转化率提升", value: "300%" },
      { label: "ROI增长", value: "156%" },
      { label: "用户满意度", value: "98.5%" }
    ],
    color: "from-purple-500 to-purple-600",
    delay: 0.2
  },
  {
    icon: Store,
    title: "零售数字化重构",
    subtitle: "Retail Digital Transformation",
    description: "构建全渠道智能零售Agent，实现线上线下无缝融合，销售额增长78%，客户留存率提升65%",
    image: "/images/case-retail.webp",
    stats: [
      { label: "销售额增长", value: "78%" },
      { label: "客户留存率", value: "65%" },
      { label: "运营效率", value: "提升2.3倍" }
    ],
    color: "from-accent-500 to-accent-600",
    delay: 0.3
  }
]

export default function Cases() {
  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
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
            典型案例
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            成功案例展示，见证企业数字化转型的卓越成果
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: caseItem.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl h-full card-hover">
                {/* Image Placeholder */}
                {caseItem.image && (
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${caseItem.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <caseItem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {caseItem.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-8">
                  {caseItem.description}
                </p>

                {/* Stats */}
                <div className="space-y-4">
                  {caseItem.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: caseItem.delay + 0.1 + statIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                    >
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </motion.div>
                  ))}
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
            className="button-secondary"
          >
            查看更多案例
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 