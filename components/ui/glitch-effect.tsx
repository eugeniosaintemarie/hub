"use client"

import React, { useState } from 'react'

interface GlitchEffectProps {
  children: React.ReactNode
  backgroundImage?: string
  trigger?: 'hover' | 'click' | 'auto'
  duration?: number
  className?: string
}

export function GlitchEffect({ 
  children, 
  backgroundImage, 
  trigger = 'hover',
  duration = 1500,
  className = ''
}: GlitchEffectProps) {
  const [isActive, setIsActive] = useState(trigger === 'auto')

  const handleClick = () => {
    if (trigger === 'click') {
      setIsActive(true)
      setTimeout(() => setIsActive(false), duration)
    }
  }

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsActive(true)
    }
  }

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsActive(false)
    }
  }

  return (
    <div 
      className={`relative ${className} ${trigger === 'hover' ? 'glitch-trigger' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--time-anim': `${duration}ms`,
      } as React.CSSProperties}
    >
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glitch layers */}
      <div className={`glitch ${isActive ? 'glitch--active' : ''}`}>
        <div 
          className="glitch__img"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: backgroundImage ? 'transparent' : 'currentColor'
          }}
        />
        <div 
          className="glitch__img"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: backgroundImage ? 'transparent' : 'currentColor'
          }}
        />
        <div 
          className="glitch__img"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: backgroundImage ? 'transparent' : 'currentColor'
          }}
        />
        <div 
          className="glitch__img"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: backgroundImage ? 'transparent' : 'currentColor'
          }}
        />
        <div 
          className="glitch__img"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: backgroundImage ? 'transparent' : 'currentColor'
          }}
        />
      </div>
    </div>
  )
}

// Text-specific glitch component
export function GlitchText({ 
  children, 
  className = '',
  trigger = 'hover'
}: {
  children: React.ReactNode
  className?: string
  trigger?: 'hover' | 'click' | 'auto'
}) {
  const [isActive, setIsActive] = useState(trigger === 'auto')

  const handleClick = () => {
    if (trigger === 'click') {
      setIsActive(true)
      setTimeout(() => setIsActive(false), 1500)
    }
  }

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsActive(true)
    }
  }

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsActive(false)
    }
  }

  return (
    <span 
      className={`${className} ${isActive ? 'glitch-text' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  )
}
