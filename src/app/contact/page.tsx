import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Ticket, Mail, Phone, MapPin, Building2, Briefcase, ShieldAlert, Gavel } from "lucide-react"

export default function ContactPage() {
  const departments = [
    {
      title: "Technical Support",
      icon: Ticket,
      desc: "Get help with TrackCodex products, IDE errors, or bugs.",
      link: "/new",
      linkText: "Open Support Ticket"
    },
    {
      title: "Sales & Enterprise",
      icon: Briefcase,
      desc: "Discuss volume licensing, custom SLAs, or self-hosted deployment.",
      link: "mailto:sales@trackcodex.com",
      linkText: "sales@trackcodex.com"
    },
    {
      title: "Security & Bug Bounty",
      icon: Building2,
      desc: "Report security vulnerabilities or inquire about our HackerOne program.",
      link: "/security",
      linkText: "Report Vulnerability"
    },
    {
      title: "Trust & Safety",
      icon: ShieldAlert,
      desc: "Report abusive behavior, spam, malware or DMCA takedowns.",
      link: "/abuse",
      linkText: "Report Abuse"
    },
    {
      title: "Account Suspension Appeals",
      icon: Gavel,
      desc: "Believe your account was suspended in error? Submit an appeal for review.",
      link: "/appeal",
      linkText: "Appeal Suspension"
    }
  ]

  return (
    <div className="container max-w-5xl py-10">
      <PageHeader 
        title="Contact Us" 
        description="Choose the right department to ensure your request is handled quickly."
        breadcrumbs={[{ label: "Contact Routes" }]}
      />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {departments.map((dept, i) => (
          <Card key={i} className="hover:border-primary/50 transition-colors flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-muted rounded-lg shrink-0">
                  <dept.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{dept.title}</h3>
                  <p className="text-muted-foreground mt-1">{dept.desc}</p>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button variant={i === 0 ? "default" : "outline"} asChild className="w-full sm:w-auto">
                  <Link href={dept.link}>{dept.linkText}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-6">Corporate Headquarters</h2>
          <Card className="bg-muted/30 border-none">
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Quantaforze LLC</h4>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    123 Innovation Drive<br />
                    Suite 500<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p className="text-muted-foreground">+1 (800) 555-CODE</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-muted-foreground">hello@trackcodex.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex items-center justify-center p-8 border rounded-xl bg-muted/10 overflow-hidden relative min-h-[300px]">
          {/* Aesthetic map placeholder */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-grid-pattern" />
          <div className="relative text-center z-10 w-full max-w-sm backdrop-blur-sm bg-background/80 p-6 rounded-xl border shadow-sm">
            <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">TrackCodex HQ</h3>
            <p className="text-sm text-muted-foreground">Our engineers operate globally, but our core team is based in SF.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
