"use client"
import React from "react"
import { motion } from "framer-motion"

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string
  /** Content to render on top of the background */
  children?: React.ReactNode
  /** Number of “star” points */
  starCount?: number
  /** Two CSS-variable backed colors for the radial overlays */
  gradientColors?: [string, string]
  /** Pulse animation duration in seconds */
  pulseDuration?: number
  /** ARIA label for the animated background */
  ariaLabel?: string
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 50,
  gradientColors = [
    "var(--aurora-color1, rgba(56, 189, 248, 0.25))",
    "var(--aurora-color2, rgba(59, 130, 246, 0.25))",
  ],
  pulseDuration = 10,
  ariaLabel = "Animated aurora background",
}) => {
  const [colorA, colorB] = gradientColors

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative flex flex-col w-full min-h-screen items-center justify-start bg-[#070b12] text-slate-50 overflow-hidden ${className}`}
    >
      {/* Background layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Pulsing radial gradients */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(circle, ${colorA} 0%, transparent 80%),
              radial-gradient(circle, ${colorB} 0%, transparent 80%)
            `,
            backgroundSize: "100% 100%",
            animation: `pulse ${pulseDuration}s infinite`,
          }}
        />

        {/* Blurred color blobs */}
        <motion.div
          className="absolute inset-0 mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-600 rounded-full filter blur-3xl opacity-30"
            animate={{
              x: [-50, 50, -50],
              y: [-20, 20, -20],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full filter blur-3xl opacity-30"
            animate={{
              x: [50, -50, 50],
              y: [20, -20, 20],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-sky-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [20, -20, 20],
              y: [-30, 30, -30],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Twinkling stars */}
        {Array.from({ length: starCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-200 rounded-full"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, Math.random() * 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start min-h-screen">{children}</div>
    </div>
  )
}

export default AuroraBackground
export { AuroraBackground }
