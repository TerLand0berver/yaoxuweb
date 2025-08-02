'use client'

import { useState, useEffect } from 'react'
import DemoContainer from './DemoContainer'
import { useDemoState, DemoProgress, DemoControls } from './DemoHooks'

interface DataSource {
  id: string
  name: string
  type: 'database' | 'api' | 'file' | 'stream'
  status: 'connected' | 'disconnected' | 'processing'
  recordCount: number
  lastUpdate: Date
}

interface DataRecord {
  id: string
  source: string
  data: any
  confidence: number
  validation: 'valid' | 'invalid' | 'pending'
}

export default function DataFusionDemo({ onClose }: { onClose: () => void }) {
  const [state, actions] = useDemoState(6)
  const [dataSources, setDataSources] = useState<DataSource[]>([])
  const [fusedData, setFusedData] = useState<DataRecord[]>([])
  const [selectedSource, setSelectedSource] = useState<string | null>(null)

  const demoSteps = [
    {
      title: "数据源配置",
      description: "配置多个数据源，包括数据库、API、文件和实时流数据。系统将自动识别数据格式和结构。",
      action: () => {
        setDataSources([
          {
            id: 'db1',
            name: '客户关系管理系统',
            type: 'database',
            status: 'connected',
            recordCount: 1250,
            lastUpdate: new Date()
          },
          {
            id: 'api1',
            name: '第三方订单API',
            type: 'api',
            status: 'connected',
            recordCount: 890,
            lastUpdate: new Date()
          },
          {
            id: 'file1',
            name: '历史数据文件',
            type: 'file',
            status: 'disconnected',
            recordCount: 0,
            lastUpdate: new Date()
          },
          {
            id: 'stream1',
            name: '实时用户行为流',
            type: 'stream',
            status: 'processing',
            recordCount: 342,
            lastUpdate: new Date()
          }
        ])
      }
    },
    {
      title: "数据质量评估",
      description: "自动评估各数据源的数据质量，包括完整性、准确性、一致性和时效性。",
      action: () => {
        setTimeout(() => {
          setDataSources(prev => prev.map(source => ({
            ...source,
            status: source.id === 'file1' ? 'connected' : source.status,
            recordCount: source.id === 'file1' ? 567 : source.recordCount
          })))
        }, 1000)
      }
    },
    {
      title: "数据清洗与标准化",
      description: "对数据进行清洗、去重、格式标准化，确保数据的一致性和可用性。",
      action: () => {
        setTimeout(() => {
          setFusedData([
            {
              id: '1',
              source: '客户关系管理系统',
              data: { name: '张三', email: 'zhangsan@example.com', phone: '13800138000' },
              confidence: 0.95,
              validation: 'valid'
            },
            {
              id: '2',
              source: '第三方订单API',
              data: { name: '李四', email: 'lisi@example.com', amount: 1500 },
              confidence: 0.88,
              validation: 'valid'
            },
            {
              id: '3',
              source: '历史数据文件',
              data: { name: '王五', email: 'invalid-email', department: '销售部' },
              confidence: 0.72,
              validation: 'invalid'
            }
          ])
        }, 1500)
      }
    },
    {
      title: "智能数据融合",
      description: "使用AI算法进行数据融合，识别重复数据、关联相关信息，构建统一的数据视图。",
      action: () => {
        setTimeout(() => {
          setFusedData(prev => [
            ...prev,
            {
              id: '4',
              source: '实时用户行为流',
              data: { userId: 'user001', action: 'purchase', timestamp: new Date() },
              confidence: 0.92,
              validation: 'valid'
            },
            {
              id: '5',
              source: '融合结果',
              data: { 
                name: '张三', 
                email: 'zhangsan@example.com', 
                phone: '13800138000',
                lastOrder: 1500,
                department: '技术部',
                riskLevel: 'low'
              },
              confidence: 0.96,
              validation: 'valid'
            }
          ])
        }, 1500)
      }
    },
    {
      title: "实时数据监控",
      description: "实时监控数据流，及时发现数据异常，确保数据质量的持续稳定。",
      action: () => {
        // 模拟实时数据更新
        const interval = setInterval(() => {
          setDataSources(prev => prev.map(source => 
            source.type === 'stream' 
              ? { ...source, recordCount: source.recordCount + Math.floor(Math.random() * 5) }
              : source
          ))
        }, 2000)
        
        setTimeout(() => clearInterval(interval), 8000)
      }
    },
    {
      title: "数据可视化展示",
      description: "通过可视化图表展示融合后的数据，提供直观的数据洞察和决策支持。",
      action: () => {
        // 添加更多融合结果
        setTimeout(() => {
          setFusedData(prev => [
            ...prev,
            {
              id: '6',
              source: '融合结果',
              data: { 
                name: '李四', 
                email: 'lisi@example.com', 
                amount: 1500,
                department: '市场部',
                riskLevel: 'medium'
              },
              confidence: 0.89,
              validation: 'valid'
            }
          ])
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
          }, 3000)
        }
      }, 1000)
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
    setFusedData([])
    if (state.currentStep > 0) {
      const prevStepData = demoSteps[state.currentStep - 1]
      if (prevStepData) {
        prevStepData.action()
      }
    }
  }

  const handleReset = () => {
    actions.reset()
    setDataSources([])
    setFusedData([])
    setSelectedSource(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500'
      case 'processing': return 'bg-blue-500'
      case 'disconnected': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'database': return '🗄️'
      case 'api': return '🔌'
      case 'file': return '📄'
      case 'stream': return '🌊'
      default: return '📊'
    }
  }

  const getValidationColor = (validation: string) => {
    switch (validation) {
      case 'valid': return 'text-green-600'
      case 'invalid': return 'text-red-600'
      case 'pending': return 'text-yellow-600'
      default: return 'text-gray-600'
    }
  }

  const currentStepData = demoSteps[state.currentStep]

  return (
    <DemoContainer
      title="数据融合平台演示"
      description={currentStepData?.description || "多源数据融合平台演示"}
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

        {/* 主要内容区域 */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 数据源面板 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-4">数据源状态</h4>
            <div className="space-y-3">
              {dataSources.map((source) => (
                <div
                  key={source.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedSource === source.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedSource(source.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{getTypeIcon(source.type)}</span>
                      <div>
                        <div className="font-medium text-gray-800">{source.name}</div>
                        <div className="text-sm text-gray-600 capitalize">{source.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(source.status)}`}></div>
                        <span className="text-xs text-gray-600 capitalize">{source.status}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {source.recordCount.toLocaleString()} 条记录
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 融合数据面板 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-4">融合结果</h4>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {fusedData.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <div className="text-4xl mb-2">📊</div>
                  <p>等待数据融合...</p>
                </div>
              ) : (
                fusedData.map((record) => (
                  <div
                    key={record.id}
                    className="p-3 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm ${getValidationColor(record.validation)}`}>
                          {record.validation === 'valid' ? '✅' : record.validation === 'invalid' ? '❌' : '⏳'}
                        </span>
                        <span className="text-sm font-medium text-gray-800">{record.source}</span>
                      </div>
                      <div className="text-xs text-gray-600">
                        置信度: {Math.round(record.confidence * 100)}%
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
                      <pre className="whitespace-pre-wrap">
                        {JSON.stringify(record.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* 统计信息 */}
        {fusedData.length > 0 && (
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{dataSources.length}</div>
                <div className="text-sm text-gray-600">数据源</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {fusedData.filter(r => r.validation === 'valid').length}
                </div>
                <div className="text-sm text-gray-600">有效记录</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {fusedData.filter(r => r.validation === 'pending').length}
                </div>
                <div className="text-sm text-gray-600">待处理</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {fusedData.filter(r => r.validation === 'invalid').length}
                </div>
                <div className="text-sm text-gray-600">异常记录</div>
              </div>
            </div>
          </div>
        )}

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