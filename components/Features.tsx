'use client'

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
    <section id="features" className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            技术架构与优势
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            我们强大的技术架构与丰富的功能，为您的企业提供稳定、可靠且易于扩展的智能Agent服务。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg border border-border">
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}