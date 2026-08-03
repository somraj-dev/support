import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"

interface CategoryCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function CategoryCard({ title, description, icon: Icon, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group relative flex flex-col h-full rounded-xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:shadow-md hover:border-blue-400 hover:-translate-y-1">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-sm text-slate-600 flex-1 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
          View articles <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  )
}
