'use client'

// TODO: Replace emoji avatars with actual image paths, e.g., avatar: '/images/team/zhang-ming.jpg'
const team = [
  {
    name: "张明",
    title: "创始人 & CEO",
    description: "前阿里巴巴技术专家，拥有15年AI和大数据经验，曾主导多个千万级用户项目。",
    avatar: "👨‍💼", // Placeholder
  },
  {
    name: "李华",
    title: "CTO",
    description: "前腾讯AI实验室技术总监，深度学习专家，在NLP领域有深厚造诣。",
    avatar: "👨‍💻", // Placeholder
  },
  {
    name: "王芳",
    title: "产品总监",
    description: "前字节跳动产品经理，拥有丰富的企业级产品设计经验。",
    avatar: "👩‍💼", // Placeholder
  },
  {
    name: "陈强",
    title: "技术总监",
    description: "前百度高级工程师，专注于分布式系统和微服务架构。",
    avatar: "👨‍🔧", // Placeholder
  }
]

export default function Team() {
  return (
    <section id="team" className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            我们的团队
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            我们汇聚了来自顶尖科技公司的行业精英，拥有丰富的AI和企业服务经验，致力于用技术驱动商业未来。
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center bg-background p-6 rounded-lg border border-border">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {/* It's recommended to replace this emoji with an <img /> tag */}
                {member.avatar}
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-3">
                {member.title}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}