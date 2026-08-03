import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  action?: React.ReactNode
}

export function PageHeader({ title, description, breadcrumbs, action }: PageHeaderProps) {
  return (
    <div className="mb-10 pb-6 border-b border-slate-200/80">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center text-xs text-slate-500 mb-3">
          <Link href="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="h-3.5 w-3.5 mx-1.5 text-slate-400" />
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-600 transition-colors font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-semibold">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      )}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
          {description && (
            <p className="text-slate-600 mt-2 text-base max-w-2xl leading-relaxed">{description}</p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
