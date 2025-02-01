import { GlowTag } from "./glow-tag"

interface GlowTagGroupProps {
  tags: string[]
  className?: string
}

export function GlowTagGroup({ tags, className = "" }: GlowTagGroupProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag) => (
        <GlowTag key={tag} text={tag} />
      ))}
    </div>
  )
}

