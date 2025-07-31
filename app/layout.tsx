import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansSC = Noto_Sans_SC({ 
  subsets: ['latin'], 
  variable: '--font-noto-sans-sc',
  weight: ['300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: '爻序科技 - 智能Agent部署解决方案平台',
  description: '爻序科技是一站式Agent部署解决方案平台，致力于帮助各行业企业快速构建、部署和运营智能Agent，提供零门槛、可定制、易操作的智能交互平台。',
  keywords: '智能Agent, 企业智能化, 数据融合, 业务流程, 市场洞察, 数字化转型',
  authors: [{ name: '爻序科技' }],
  icons: {
    icon: [
      { url: '/images/logo.webp', type: 'image/webp' }
    ],
    apple: [
      { url: '/images/logo.webp', type: 'image/webp' }
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable}`}>
      <body className="font-sans font-noto-sans-sc">
        {children}
      </body>
    </html>
  )
} 