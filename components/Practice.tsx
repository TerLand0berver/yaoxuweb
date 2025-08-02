'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import ChatDemo from './demos/ChatDemo'
import DataFusionDemo from './demos/DataFusionDemo'

const demos = [
  {
    id: 'chat-demo',
    title: "智能对话演示",
    description: "体验我们的AI智能对话系统，支持多轮对话、上下文理解和情感分析。",
    difficulty: "初级",
    duration: "5分钟",
    status: "available",
    icon: Play,
  },
  {
    id: 'data-fusion-demo',
    title: "数据融合平台演示",
    description: "了解多源数据整合、实时数据处理和智能数据清洗的完整流程。",
    difficulty: "中级",
    duration: "10分钟",
    status: "available",
    icon: Play,
  },
  {
    id: 'agent-demo',
    title: "业务流程Agent演示",
    description: "观看智能Agent如何自动化处理复杂业务流程和决策。",
    difficulty: "高级",
    duration: "15分钟",
    status: "coming-soon",
    icon: Clock,
  }
]

export default function Practice() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const handleDemoClick = (demoId: string) => {
    if (demoId === 'chat-demo' || demoId === 'data-fusion-demo') {
      setActiveDemo(demoId)
    } else {
      alert('该演示功能即将上线，敬请期待！')
    }
  }

  const closeDemo = () => {
    setActiveDemo(null)
  }

  return (
    <section id="practice" className="relative bg-gradient-to-b from-surface_alt to-background py-24 px-4 sm:px-6 lg:px-8">
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
            产品<span className="gradient-text">演示</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            通过实际操作和演示，深入了解我们的AI解决方案如何为您的业务创造价值。
          </p>
        </motion.div>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-medium"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent/10 to-yellow-600/10 rounded-lg">
                    <demo.icon className={`w-6 h-6 ${demo.status === 'available' ? 'text-accent' : 'text-text-muted'}`} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      demo.difficulty === '初级' ? 'bg-green-100 text-green-800' :
                      demo.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {demo.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      demo.status === 'available' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {demo.status === 'available' ? '可用' : '即将上线'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {demo.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {demo.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-text-muted mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{demo.duration}</span>
                  </div>
                  {demo.status === 'available' ? (
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>可体验</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 text-orange-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>即将上线</span>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => handleDemoClick(demo.id)}
                  disabled={demo.status !== 'available'}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    demo.status === 'available'
                      ? 'bg-gradient-to-r from-accent to-yellow-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <span>{demo.status === 'available' ? '开始体验' : '敬请期待'}</span>
                  {demo.status === 'available' && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6">
            需要更多定制化演示或有特定需求？
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent to-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>联系我们获取专属演示</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* 演示模态框 */}
      {activeDemo === 'chat-demo' && <ChatDemo onClose={closeDemo} />}
      {activeDemo === 'data-fusion-demo' && <DataFusionDemo onClose={closeDemo} />}
    </section>
  )
}