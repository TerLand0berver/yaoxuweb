'use client'

import { useState, useEffect } from 'react'

export interface DemoState {
  isPlaying: boolean
  currentStep: number
  totalSteps: number
  data: any
  error: string | null
  isLoading: boolean
}

export interface DemoActions {
  play: () => void
  pause: () => void
  reset: () => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  setData: (data: any) => void
  setError: (error: string | null) => void
  setLoading: (loading: boolean) => void
}

export function useDemoState(initialSteps: number = 1): [DemoState, DemoActions] {
  const [state, setState] = useState<DemoState>({
    isPlaying: false,
    currentStep: 0,
    totalSteps: initialSteps,
    data: null,
    error: null,
    isLoading: false
  })

  const actions: DemoActions = {
    play: () => setState(prev => ({ ...prev, isPlaying: true })),
    pause: () => setState(prev => ({ ...prev, isPlaying: false })),
    reset: () => setState(prev => ({ 
      ...prev, 
      isPlaying: false, 
      currentStep: 0,
      error: null,
      isLoading: false
    })),
    nextStep: () => setState(prev => ({ 
      ...prev, 
      currentStep: Math.min(prev.currentStep + 1, prev.totalSteps - 1)
    })),
    prevStep: () => setState(prev => ({ 
      ...prev, 
      currentStep: Math.max(prev.currentStep - 1, 0)
    })),
    goToStep: (step: number) => setState(prev => ({ 
      ...prev, 
      currentStep: Math.max(0, Math.min(step, prev.totalSteps - 1))
    })),
    setData: (data: any) => setState(prev => ({ ...prev, data })),
    setError: (error: string | null) => setState(prev => ({ ...prev, error })),
    setLoading: (loading: boolean) => setState(prev => ({ ...prev, isLoading: loading }))
  }

  // 监听重置事件
  useEffect(() => {
    const handleReset = () => {
      actions.reset()
    }
    
    window.addEventListener('demo-reset', handleReset)
    return () => window.removeEventListener('demo-reset', handleReset)
  }, [])

  return [state, actions]
}

// 演示进度组件
export function DemoProgress({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>步骤 {current + 1}/{total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  )
}

// 演示控制按钮组件
export function DemoControls({
  onPrev,
  onNext,
  onPlay,
  onPause,
  onReset,
  isPlaying,
  canPrev,
  canNext,
  isDisabled = false
}: {
  onPrev: () => void
  onNext: () => void
  onPlay: () => void
  onPause: () => void
  onReset: () => void
  isPlaying: boolean
  canPrev: boolean
  canNext: boolean
  isDisabled?: boolean
}) {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg">
      <button
        onClick={onReset}
        disabled={isDisabled}
        className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        title="重置"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
      
      <button
        onClick={onPrev}
        disabled={!canPrev || isDisabled}
        className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        title="上一步"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={isPlaying ? onPause : onPlay}
        disabled={isDisabled}
        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        title={isPlaying ? "暂停" : "播放"}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
      
      <button
        onClick={onNext}
        disabled={!canNext || isDisabled}
        className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        title="下一步"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}