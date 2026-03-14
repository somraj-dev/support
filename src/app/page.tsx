import { SearchBar } from "@/components/SearchBar"
import { CategoryCard } from "@/components/CategoryCard"
import { StatusBanner } from "@/components/StatusBanner"
import { mockIncidents } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  HelpCircle,
  CreditCard,
  GitBranch,
  Terminal,
  Cpu,
  Users,
  ServerCrash,
  Blocks,
  ShieldAlert,
  Gavel,
  Bug,
  Lightbulb,
  Ticket,
  Activity,
  UserCircle
} from "lucide-react"

export default function HomePage() {
  const categories = [
    { title: "Account & Login", description: "Password resets, 2FA, SSO, and account recovery.", icon: UserCircle, href: "/contact?topic=account" },
    { title: "Billing & Payments", description: "Invoices, upgrading plans, and payment methods.", icon: CreditCard, href: "/billing" },
    { title: "Repositories & Git", description: "Cloning, commits, large files, and Git LFS.", icon: GitBranch, href: "https://docs.trackcodex.com" },
    { title: "TrackCodex IDE", description: "Workspaces, environments, extensions, and editor issues.", icon: Terminal, href: "https://docs.trackcodex.com" },
    { title: "AI Tools", description: "Code generation, chat completion, and limits.", icon: Cpu, href: "https://docs.trackcodex.com" },
    { title: "Collaboration & Teams", description: "Organizations, members, access control, and roles.", icon: Users, href: "https://docs.trackcodex.com" },
    { title: "Deployments", description: "Build failures, environments, and runtime issues.", icon: ServerCrash, href: "https://docs.trackcodex.com" },
    { title: "API & Integrations", description: "Webhooks, API keys, ratelimits, and third-party apps.", icon: Blocks, href: "https://docs.trackcodex.com" },
    { title: "Security & Abuse", description: "Report vulnerabilities, spam, or Terms of Service violations.", icon: ShieldAlert, href: "/security" },
    { title: "Legal & Policy", description: "Privacy, terms, DMCA, and compliance info.", icon: Gavel, href: "/policies" },
    { title: "Bug Report", description: "Report a bug or unexpected behavior in TrackCodex.", icon: Bug, href: "/new?category=BUG_REPORT" },
    { title: "Feature Request", description: "Suggest a new feature or improvement.", icon: Lightbulb, href: "/new?category=FEATURE_REQUEST" },
  ]

  return (
    <>
      <StatusBanner incidents={mockIncidents} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            How can we help you today?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Search our knowledge base, submit a support ticket, or check the platform status.
          </p>
          
          <SearchBar />
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/25 transition-all">
              <Link href="/new">
                <Ticket className="w-5 h-5 mr-2" />
                Submit a Ticket
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-background/50 backdrop-blur">
              <Link href="/status">
                <Activity className="w-5 h-5 mr-2" />
                View Platform Status
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">Popular Help Topics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Docs CTA Section */}
      <section className="py-16 px-4 bg-muted/30 border-t">
        <div className="container mx-auto text-center max-w-3xl">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Check our Documentation</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Before opening a ticket, you might find a quick answer in our extensive technical documentation covering every feature of TrackCodex.
          </p>
          <Button asChild variant="outline" size="lg" className="rounded-full shadow-sm">
            <Link href="https://docs.trackcodex.com">
              Go to TrackCodex Docs
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
