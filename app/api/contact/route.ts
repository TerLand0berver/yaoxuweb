import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 构建企业微信机器人消息
    const message = {
      msgtype: "markdown",
      markdown: {
        content: `## 📧 新客户咨询\n\n**姓名：** ${body.name}\n**公司：** ${body.company || '未填写'}\n**邮箱：** ${body.email}\n**消息：** ${body.message}\n\n**时间：** ${new Date().toLocaleString('zh-CN')}`
      }
    }
    
    // 发送到企业微信机器人
    const response = await fetch('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=c4757663-ad37-488f-b2f5-4821628d72a6', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    })
    
    const result = await response.json()
    
    if (result.errcode === 0) {
      return NextResponse.json({ success: true, message: '发送成功' })
    } else {
      return NextResponse.json({ success: false, message: result.errmsg || '发送失败' }, { status: 400 })
    }
  } catch (error) {
    console.error('API错误:', error)
    return NextResponse.json({ success: false, message: '服务器错误' }, { status: 500 })
  }
}