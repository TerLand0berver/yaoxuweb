'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const team = [
  {
    name: "张明",
    title: "创始人 & CEO",
    description: "前阿里巴巴技术专家，拥有15年AI和大数据经验，曾主导多个千万级用户项目",
    avatar: "👨‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "zhang.ming@yaoxu.tech"
    },
    delay: 0.1
  },
  {
    name: "李华",
    title: "CTO",
    description: "前腾讯AI实验室技术总监，深度学习专家，在NLP领域有深厚造诣",
    avatar: "👨‍💻",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "li.hua@yaoxu.tech"
    },
    delay: 0.2
  },
  {
    name: "王芳",
    title: "产品总监",
    description: "前字节跳动产品经理，拥有丰富的企业级产品设计经验",
    avatar: "👩‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "wang.fang@yaoxu.tech"
    },
    delay: 0.3
  },
  {
    name: "陈强",
    title: "技术总监",
    description: "前百度高级工程师，专注于分布式系统和微服务架构",
    avatar: "👨‍🔧",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "chen.qiang@yaoxu.tech"
    },
    delay: 0.4
  }
]

const advisors = [
  {
    name: "刘教授",
    title: "技术顾问",
    description: "清华大学计算机系教授，AI领域权威专家",
    avatar: "👨‍🏫",
    delay: 0.5
  },
  {
    name: "赵博士",
    title: "商业顾问",
    description: "前麦肯锡合伙人，企业数字化转型专家",
    avatar: "👩‍💼",
    delay: 0.6
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
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
            核心团队
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            汇聚行业精英，拥有丰富的AI和企业服务经验
          </p>
        </motion.div>

        {/* Core Team */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">管理团队</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: member.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect p-6 rounded-2xl h-full card-hover">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary-400 font-medium mb-3">
                    {member.title}
                  </p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex justify-center space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-primary-400" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={member.social.twitter}
                    className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-primary-400" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary-400" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">顾问团队</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: advisor.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl h-full card-hover">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {advisor.avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {advisor.name}
                    </h4>
                    <p className="text-accent-400 font-medium mb-3">
                      {advisor.title}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {advisor.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Culture */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">企业文化</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-white mb-2">使命驱动</h4>
                <p className="text-gray-300 text-sm">
                  以技术改变世界，让AI服务每一个人
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="text-lg font-semibold text-white mb-2">创新精神</h4>
                <p className="text-gray-300 text-sm">
                  持续创新，追求卓越，拥抱变化
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🤝</div>
                <h4 className="text-lg font-semibold text-white mb-2">团队协作</h4>
                <p className="text-gray-300 text-sm">
                  开放包容，相互信任，共同成长
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 