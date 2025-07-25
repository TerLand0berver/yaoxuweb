'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  Globe,
  Lock,
  Cpu,
  Network,
  Monitor
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "智能对话引擎",
    description: "基于大语言模型的智能对话系统，支持多轮对话、上下文理解、情感分析",
    color: "from-blue-500 to-blue-600",
    delay: 0.1
  },
  {
    icon: Database,
    title: "数据融合平台",
    description: "多源数据整合，实时数据处理，智能数据清洗和标准化",
    color: "from-green-500 to-green-600",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "企业级安全",
    description: "端到端加密，权限管理，审计日志，符合GDPR等国际标准",
    color: "from-red-500 to-red-600",
    delay: 0.3
  },
  {
    icon: Zap,
    title: "快速部署",
    description: "一键部署，自动扩缩容，支持公有云、私有云、混合云",
    color: "from-yellow-500 to-yellow-600",
    delay: 0.4
  },
  {
    icon: BarChart3,
    title: "实时监控",
    description: "性能监控，业务指标，异常告警，可视化大屏",
    color: "from-purple-500 to-purple-600",
    delay: 0.5
  },
  {
    icon: MessageSquare,
    title: "多渠道集成",
    description: "支持微信、钉钉、企业微信、网页、APP等多渠道接入",
    color: "from-pink-500 to-pink-600",
    delay: 0.6
  },
  {
    icon: Settings,
    title: "可视化配置",
    description: "拖拽式流程设计，零代码业务编排，可视化参数配置",
    color: "from-indigo-500 to-indigo-600",
    delay: 0.7
  },
  {
    icon: Globe,
    title: "多语言支持",
    description: "支持中文、英文、日文等多语言，全球化部署能力",
    color: "from-teal-500 to-teal-600",
    delay: 0.8
  }
]

const technicalFeatures = [
  {
    icon: Cpu,
    title: "高性能计算",
    description: "GPU加速推理，分布式计算，毫秒级响应"
  },
  {
    icon: Network,
    title: "高可用架构",
    description: "多活部署，故障自动切换，99.9%可用性保证"
  },
  {
    icon: Lock,
    title: "数据安全",
    description: "数据脱敏，访问控制，传输加密，存储加密"
  },
  {
    icon: Monitor,
    title: "智能运维",
    description: "自动化运维，智能故障诊断，预测性维护"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
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
            平台特性
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            强大的技术架构，为企业提供稳定可靠的智能Agent服务
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect p-6 rounded-2xl h-full card-hover">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Features */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">技术优势</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {technicalFeatures.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {technicalFeatures.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              开始您的智能化之旅
            </h3>
            <p className="text-gray-200 mb-6">
              立即体验我们的平台，感受智能Agent带来的效率提升
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              免费试用
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 