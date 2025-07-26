'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Zap, Globe, Award, Users, TrendingUp, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: "精准定位",
    description: "深度理解企业需求，提供定制化解决方案",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "企业级安全防护，数据加密传输",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Zap,
    title: "高效部署",
    description: "快速部署，分钟级上线，零停机更新",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Globe,
    title: "全球服务",
    description: "7x24小时技术支持，覆盖全球客户",
    color: "from-purple-500 to-purple-600"
  }
]

const stats = [
  { label: "服务企业", value: "500+", icon: Users },
  { label: "部署成功率", value: "99.9%", icon: CheckCircle },
  { label: "客户满意度", value: "98%", icon: Award },
  { label: "效率提升", value: "300%", icon: TrendingUp }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 px-4 py-2 rounded-full"
              >
                <span className="text-sm text-primary-500 font-medium">关于爻序科技</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                引领企业智能化转型
              </h2>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-200 leading-relaxed">
                爻序科技成立于2025年，是一家专注于智能Agent技术的高新技术企业。我们致力于为中小企业提供一站式智能Agent部署解决方案，
                帮助企业快速实现数字化转型。
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                我们的平台集成从模型接入、数据采集、业务编排、对话管理、运维监控到安全合规的全流程能力，
                打造"零门槛、可定制、易操作"的智能交互平台。
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                通过深度学习和自然语言处理技术，我们让企业能够在最短周期内构建符合自身业务特色的智能Agent，
                全面提升客服、营销、运维等场景的效率和体验。
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-center p-4 glass-effect rounded-xl"
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="glass-effect p-6 rounded-2xl h-full card-hover">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4">我们的使命</h3>
              <p className="text-gray-200 leading-relaxed">
                让每一个企业都能轻松拥抱AI技术，通过智能Agent实现业务创新和效率提升，
                共同构建智能化商业未来。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 