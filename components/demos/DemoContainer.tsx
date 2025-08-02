'use client'

import { useState } from 'react'
import { X, Minimize2, Maximize2, Play, Pause, RotateCcw } from 'lucide-react'

interface DemoContainerProps {
  title: string
  description: string
  children: React.ReactNode
  onClose: () => void
  onMinimize?: () => void
  isFullscreen?: boolean
  onToggleFullscreen?: () => void
  autoPlay?: boolean
}

export default function DemoContainer({
  title,
  description,
  children,
  onClose,
  onMinimize,
  isFullscreen = false,
  onToggleFullscreen,
  autoPlay = false
}: DemoContainerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMinimized, setIsMinimized] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    // 触发重置事件，子组件可以监听
    window.dispatchEvent(new CustomEvent('demo-reset'))
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-3 min-w-[300px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-800">{title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 text-gray-500 hover:text-gray-700 rounded"
              title="最大化"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-gray-500 hover:text-red-600 rounded"
              title="关闭"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${isFullscreen ? 'p-0' : 'p-4'}`}>
      <div className={`bg-white rounded-lg shadow-2xl flex flex-col ${
        isFullscreen ? 'w-full h-full rounded-none' : 'max-w-6xl mx-auto h-[90vh]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }`}></div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePlayPause}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
              title={isPlaying ? "暂停" : "播放"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={handleReset}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
              title="重置"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            {onToggleFullscreen && (
              <button
                onClick={onToggleFullscreen}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
                title={isFullscreen ? "退出全屏" : "全屏"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            )}
            {onMinimize && (
              <button
                onClick={() => setIsMinimized(true)}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
                title="最小化"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="关闭"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 bg-blue-50 border-b border-blue-200">
          <p className="text-sm text-blue-800">{description}</p>
        </div>

        {/* Demo Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>演示状态: {isPlaying ? '运行中' : '已暂停'}</span>
            <span>提示: 使用控制按钮来操作演示</span>
          </div>
        </div>
      </div>
    </div>
  )
}