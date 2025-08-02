'use client'

import { useState } from 'react'
import DemoContainer from './DemoContainer'
import { useDemoState, DemoProgress, DemoControls } from './DemoHooks'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function ChatDemo({ onClose }: { onClose: () => void }) {
  const [state, actions] = useDemoState(5)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const demoSteps = [
    {
      title: "欢迎使用AI智能对话系统",
      description: "这是一个演示AI对话功能的交互式演示。您将体验AI助手如何理解用户需求并提供有用的回答。",
      action: () => {
        setMessages([
          {
            id: '1',
            role: 'assistant',
            content: '您好！我是您的AI智能助手。我可以帮助您解答问题、提供建议、进行对话交流。请问有什么可以帮助您的吗？',
            timestamp: new Date()
          }
        ])
      }
    },
    {
      title: "基础问答演示",
      description: "向AI提问基础问题，观察其回答能力。AI能够理解自然语言并提供准确的回答。",
      action: () => {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: '2',
            role: 'user',
            content: '什么是人工智能？',
            timestamp: new Date()
          }])
          
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: '3',
              role: 'assistant',
              content: '人工智能（Artificial Intelligence，AI）是计算机科学的一个分支，旨在创建能够模拟人类智能行为的系统。它包括机器学习、深度学习、自然语言处理等技术。AI系统可以学习、推理、感知、理解语言并解决问题，在医疗、金融、教育等领域有广泛应用。',
              timestamp: new Date()
            }])
          }, 1500)
        }, 1000)
      }
    },
    {
      title: "多轮对话演示",
      description: "体验AI的多轮对话能力，AI能够记住上下文并进行连续的对话交流。",
      action: () => {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: '4',
            role: 'user',
            content: '那么机器学习和深度学习有什么区别？',
            timestamp: new Date()
          }])
          
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: '5',
              role: 'assistant',
              content: '机器学习是人工智能的一个子集，专注于开发能够从数据中学习的算法。而深度学习是机器学习的一个更专门的子集，使用神经网络来模拟人脑的工作方式。\n\n主要区别：\n1. 机器学习需要特征工程，深度学习可以自动提取特征\n2. 深度学习需要更多数据和计算资源\n3. 深度学习在复杂任务上表现更好，如图像识别、语音识别等',
              timestamp: new Date()
            }])
          }, 1500)
        }, 1000)
      }
    },
    {
      title: "情感理解演示",
      description: "AI能够理解用户情感并作出相应的回应，提供更人性化的对话体验。",
      action: () => {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: '6',
            role: 'user',
            content: '我觉得这些技术很难学，有点担心学不会。',
            timestamp: new Date()
          }])
          
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: '7',
              role: 'assistant',
              content: '我理解您的担心。确实，人工智能技术看起来很复杂，但不要担心！\n\n学习建议：\n1. 从基础概念开始，循序渐进\n2. 多动手实践，理论与项目结合\n3. 加入学习社区，与他人交流\n4. 选择适合的入门课程\n\n每个人的学习节奏都不同，重要的是保持耐心和持续学习的态度。我相信您一定能够掌握这些技术！',
              timestamp: new Date()
            }])
          }, 1500)
        }, 1000)
      }
    },
    {
      title: "实用功能演示",
      description: "AI不仅可以回答问题，还能帮助处理各种实际任务，如文本生成、翻译、总结等。",
      action: () => {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: '8',
            role: 'user',
            content: '请帮我总结一下我们刚才讨论的主要内容。',
            timestamp: new Date()
          }])
          
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: '9',
              role: 'assistant',
              content: '好的，我来为您总结刚才讨论的主要内容：\n\n## 讨论要点总结\n\n### 1. 人工智能基础概念\n- 人工智能是计算机科学的分支，旨在模拟人类智能\n- 包括机器学习、深度学习、自然语言处理等技术\n\n### 2. 机器学习vs深度学习\n- 机器学习：需要人工特征工程，资源需求相对较少\n- 深度学习：自动特征提取，需要大量数据和计算资源\n- 深度学习在复杂任务上表现更优秀\n\n### 3. 学习建议\n- 循序渐进，从基础开始\n- 理论与实践相结合\n- 加入学习社区，保持耐心\n\n这就是我们刚才讨论的核心内容。如果您对某个部分想要更详细的了解，请随时告诉我！',
              timestamp: new Date()
            }])
          }, 1500)
        }, 1000)
      }
    }
  ]

  const handleStepAction = () => {
    const currentStepData = demoSteps[state.currentStep]
    if (currentStepData) {
      actions.setLoading(true)
      currentStepData.action()
      setTimeout(() => {
        actions.setLoading(false)
        if (state.isPlaying && state.currentStep < state.totalSteps - 1) {
          setTimeout(() => {
            actions.nextStep()
            if (state.isPlaying) {
              handleStepAction()
            }
          }, 4000)
        }
      }, 500)
    }
  }

  const handlePlay = () => {
    actions.play()
    handleStepAction()
  }

  const handlePause = () => {
    actions.pause()
  }

  const handleNext = () => {
    actions.nextStep()
    handleStepAction()
  }

  const handlePrev = () => {
    actions.prevStep()
    setMessages([])
    if (state.currentStep > 0) {
      const prevStepData = demoSteps[state.currentStep - 1]
      if (prevStepData) {
        prevStepData.action()
      }
    }
  }

  const handleReset = () => {
    actions.reset()
    setMessages([])
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newUserMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: inputMessage,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, newUserMessage])
      setInputMessage('')
      
      // 模拟AI回复
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '感谢您的消息！这是一个演示环境，AI会根据当前演示步骤来回应您。在实际应用中，我会根据您的具体问题提供个性化的回答。',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  const currentStepData = demoSteps[state.currentStep]

  return (
    <DemoContainer
      title="智能对话演示"
      description={currentStepData?.description || "AI智能对话系统演示"}
      onClose={onClose}
      autoPlay={state.isPlaying}
    >
      <div className="h-full flex flex-col">
        {/* 步骤信息 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {currentStepData?.title}
          </h3>
          <DemoProgress current={state.currentStep} total={state.totalSteps} />
        </div>

        {/* 聊天界面 */}
        <div className="flex-1 flex flex-col bg-gray-50 rounded-lg overflow-hidden">
          {/* 消息区域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {state.isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 输入区域 */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="输入消息..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                发送
              </button>
            </div>
          </div>
        </div>

        {/* 控制按钮 */}
        <div className="mt-6">
          <DemoControls
            onPrev={handlePrev}
            onNext={handleNext}
            onPlay={handlePlay}
            onPause={handlePause}
            onReset={handleReset}
            isPlaying={state.isPlaying}
            canPrev={state.currentStep > 0}
            canNext={state.currentStep < state.totalSteps - 1}
            isDisabled={state.isLoading}
          />
        </div>
      </div>
    </DemoContainer>
  )
}