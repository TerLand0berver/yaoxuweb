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
  Globe
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "智能对话引擎",
    description: "基于大语言模型的智能对话系统，支持多轮对话、上下文理解与情感分析。",
  },
  {
    icon: Database,
    title: "数据融合平台",
    description: "支持多源数据整合、实时数据处理，以及智能数据清洗和标准化。",
  },
  {
    icon: Shield,
    title: "企业级安全",
    description: "提供端到端加密、权限管理和审计日志，符合国际安全标准。",
  },
  {
    icon: Zap,
    title: "快速部署",
    description: "一键部署，自动扩缩容，支持公有云、私有云和混合云环境。",
  },
  {
    icon: BarChart3,
    title: "实时监控",
    description: "提供性能监控、业务指标分析、异常告警和可视化大屏。",
  },
  {
    icon: MessageSquare,
    title: "多渠道集成",
    description: "无缝支持微信、钉钉、企业微信、网页、APP等多渠道接入。",
  },
  {
    icon: Settings,
    title: "可视化配置",
    description: "通过拖拽式流程设计，实现零代码业务编排与可视化参数配置。",
  },
  {
    icon: Globe,
    title: "多语言支持",
    description: "内置中文、英文、日文等多语言支持，具备全球化部署能力。",
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-surface_alt to-background py-24 px-4 sm:px-6 lg:px-8">
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
            技术架构与<span className="gradient-text">优势</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            我们强大的技术架构与丰富的功能，为您的企业提供稳定、可靠且易于扩展的智能 Agent 服务。
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-medium"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-yellow-600/10 rounded-lg flex items-center justify-center group-hover:from-accent/20 group-hover:to-yellow-600/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}