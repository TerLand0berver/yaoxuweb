'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sparkles, Play, Award, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-accent-500/20 border border-accent-500/30 px-4 py-2 rounded-full"
            >
              <CheckCircle className="w-4 h-4 text-accent-500" />
              <span className="text-sm text-accent-500 font-medium">企业级智能Agent解决方案</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">智能Agent</span>
                <br />
                <span className="text-white">部署平台</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                为中小企业提供一站式智能Agent解决方案，助力企业数字化转型
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">服务企业</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400">客户满意度</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">技术支持</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>免费试用</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>观看演示</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Desktop view - 3D floating cards */}
            <div className="hidden md:block relative h-[600px]">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 glass-effect p-8 rounded-2xl w-80 shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">智能数据融合</h3>
                    <p className="text-sm text-gray-400">Data Fusion Platform</p>
                  </div>
                </div>
                {/* Image Placeholder */}
                <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/images/hero-card-data-fusion.webp"
                      alt="智能数据融合"
                      className="w-full h-40 object-cover"
                    />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  多源数据整合，AI驱动的企业级数据解决方案，实现数据可控、可视、可用
                </p>
                <div className="flex items-center space-x-2 text-sm text-primary-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>效率提升 89%</span>
                </div>
              </motion.div>

              {/* Second Card */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 glass-effect p-8 rounded-2xl w-80 shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">业务流程Agent</h3>
                    <p className="text-sm text-gray-400">Business Process Agent</p>
                  </div>
                </div>
                {/* Image Placeholder */}
                <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/images/hero-card-business-agent.webp"
                      alt="业务流程Agent"
                      className="w-full h-40 object-cover"
                    />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  全链路智能在环，定制化业务自动化可视化Agent解决方案
                </p>
                <div className="flex items-center space-x-2 text-sm text-accent-400">
                  <Award className="w-4 h-4" />
                  <span>客户满意度 98%</span>
                </div>
              </motion.div>

              {/* Third Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-effect p-8 rounded-2xl w-80 shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">市场洞察服务</h3>
                    <p className="text-sm text-gray-400">Market Insight</p>
                  </div>
                </div>
                {/* Image Placeholder */}
                <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/images/hero-card-market-insight.webp"
                      alt="市场洞察服务"
                      className="w-full h-40 object-cover"
                    />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  及时监控市场，助力营销高转化，竞品情报监控AI分析
                </p>
                <div className="flex items-center space-x-2 text-sm text-purple-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>转化率提升 300%</span>
                </div>
              </motion.div>
            </div>
            
            {/* Mobile view - stacked cards */}
            <div className="md:hidden space-y-6">
              {/* Card 1 */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-effect p-6 rounded-2xl w-full shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">智能数据融合</h3>
                    <p className="text-xs text-gray-400">Data Fusion Platform</p>
                  </div>
                </div>
                <div className="mb-3 overflow-hidden rounded-lg">
                    <img
                      src="/images/hero-card-data-fusion.webp"
                      alt="智能数据融合"
                      className="w-full h-32 object-cover"
                    />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  多源数据整合，AI驱动的企业级数据解决方案，实现数据可控、可视、可用
                </p>
                <div className="flex items-center space-x-2 text-xs text-primary-400">
                  <TrendingUp className="w-3 h-3" />
                  <span>效率提升 89%</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-effect p-6 rounded-2xl w-full shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">业务流程Agent</h3>
                    <p className="text-xs text-gray-400">Business Process Agent</p>
                  </div>
                </div>
                <div className="mb-3 overflow-hidden rounded-lg">
                    <img
                      src="/images/hero-card-business-agent.webp"
                      alt="业务流程Agent"
                      className="w-full h-32 object-cover"
                    />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  全链路智能在环，定制化业务自动化可视化Agent解决方案
                </p>
                <div className="flex items-center space-x-2 text-xs text-accent-400">
                  <Award className="w-3 h-3" />
                  <span>客户满意度 98%</span>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="glass-effect p-6 rounded-2xl w-full shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">市场洞察服务</h3>
                    <p className="text-xs text-gray-400">Market Insight</p>
                  </div>
                </div>
                <div className="mb-3 overflow-hidden rounded-lg">
                    <img
                      src="/images/hero-card-market-insight.webp"
                      alt="市场洞察服务"
                      className="w-full h-32 object-cover"
                    />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  及时监控市场，助力营销高转化，竞品情报监控AI分析
                </p>
                <div className="flex items-center space-x-2 text-xs text-purple-400">
                  <TrendingUp className="w-3 h-3" />
                  <span>转化率提升 300%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 