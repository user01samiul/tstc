import React from 'react'

interface DottedPatternProps {
  /**
   * Position of the dotted pattern
   * @default 'bottom-left'
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

  /**
   * Size of the pattern area
   * @default 'md' - medium (32px mobile, 40px desktop)
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Opacity of the pattern
   * @default 25 (0-100)
   */
  opacity?: number

  /**
   * Color of the dots in rgba format
   * @default 'rgba(255, 255, 255, 0.6)' - white with 60% opacity
   */
  dotColor?: string

  /**
   * Size of individual dots in pixels
   * @default 1.5
   */
  dotSize?: number

  /**
   * Spacing between dots in pixels
   * @default 16
   */
  dotSpacing?: number

  /**
   * Additional CSS classes
   */
  className?: string
}

export function DottedPattern({
  position = 'bottom-left',
  size = 'md',
  opacity = 25,
  dotColor = 'rgba(255, 255, 255, 0.6)',
  dotSize = 1.5,
  dotSpacing = 16,
  className = '',
}: DottedPatternProps) {
  // Position classes
  const positionClasses = {
    'top-left': 'top-8 left-8 lg:top-16 lg:left-16',
    'top-right': 'top-8 right-8 lg:top-16 lg:right-16',
    'bottom-left': 'bottom-8 left-8 lg:bottom-16 lg:left-16',
    'bottom-right': 'bottom-8 right-8 lg:bottom-16 lg:right-16',
  }

  // Size classes
  const sizeClasses = {
    sm: 'w-24 h-24 lg:w-32 lg:h-32',
    md: 'w-32 h-32 lg:w-40 lg:h-40',
    lg: 'w-40 h-40 lg:w-48 lg:h-48',
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-0 ${className}`}
      style={{ opacity: opacity / 100 }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
        }}
      />
    </div>
  )
}
