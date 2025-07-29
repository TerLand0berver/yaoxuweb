'use client'

import { Target, Shield, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: "精准定位",
    description: "深度理解企业需求，提供企业级、定制化的解决方案。",
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "企业级安全防护，全程数据加密，保障您的数据安全。",
  },
  {
    icon: Zap,
    title: "高效部署",
    description: "提供快速部署流程，实现分钟级上线与零停机更新。",
  },
  {
    icon: Globe,
    title: "全球服务",
    description: "我们提供7x24小时技术支持，覆盖全球不同时区的客户。",
  }
]

export default function About() {
  return (
    <section id="about" className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              关于我们：技术与愿景
            </h2>
            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                爻序科技成立于2025年，是一家专注于智能Agent技术的高新技术企业。我们致力于为中小企业提供一站式智能Agent部署解决方案，帮助企业快速实现数字化转型。
              </p>
              <p>
                我们的平台集成从模型接入、数据采集、业务编排到安全合规的全流程能力，打造“零门槛、可定制、易操作”的智能交互平台。
              </p>
            </div>
          </div>

          {/* Right Content: Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}