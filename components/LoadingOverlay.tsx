import React from 'react'
import { Loader2, CheckCircle2, Circle } from 'lucide-react'

interface LoadingOverlayProps {
  title?: string;
  steps?: string[];
  currentStep?: number;
}

const LoadingOverlay = ({ 
  title = "Synthesizing Book...", 
  steps = [
    "Extracting text from PDF",
    "Generating conversational flow",
    "Preparing voices"
  ],
  currentStep = 0
}: LoadingOverlayProps) => {
  return (
    <div className="loading-wrapper">
      <div className="loading-shadow-wrapper bg-[var(--bg-primary)] shadow-soft-lg">
        <div className="loading-shadow">
          <Loader2 className="loading-animation w-12 h-12 text-[var(--color-brand)]" />
          <h2 className="loading-title">{title}</h2>
          <div className="loading-progress">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;

              return (
                <div 
                  key={index} 
                  className={`loading-progress-item ${
                    isCompleted || isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] opacity-50'
                  }`}
                >
                  <div className="loading-progress-status">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : isActive ? (
                      <div className="w-4 h-4 rounded-full border-2 border-[var(--color-brand)] border-t-transparent animate-spin" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </div>
                  <span className={isActive ? 'font-medium' : ''}>{step}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay;
