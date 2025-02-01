interface GlowTagProps {
    text: string
    className?: string
  }
  
  export function GlowTag({ text, className = "" }: GlowTagProps) {
    return (
      <div
        className={`
          inline-flex items-center px-4 py-2 
          rounded-full border border-[#00ffff]
          text-white bg-black
          shadow-[0_0_10px_rgba(0,255,255,0.3)]
          transition-all duration-300
          font-tggMedium text-xs
          ${className}`}
      >
        {text}
      </div>
    )
  }