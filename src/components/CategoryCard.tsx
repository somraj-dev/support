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
      <div className="group relative flex flex-col h-full rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground flex-1">{description}</p>
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
          View articles <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
