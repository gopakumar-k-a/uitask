import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyLinkProps {
  href: string
  className?: string
}

export function CaseStudyLink({ href, className }: CaseStudyLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex bg-black py-3 text-sm text-white transition-colors hover:bg-black/90 ${
        className ?? ""
      }`}
    >
      <div className="inline-flex items-center gap-2 border-b font-tggMedium border-white/20">
        <span>See full case study</span>
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  )
}
