import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ShieldCheck, FileText, Scale, Users, HeadphonesIcon } from "lucide-react"

export default function PoliciesPage() {
  const policies = [
    {
      title: "Terms of Service",
      icon: Scale,
      date: "Last updated: Oct 1, 2025",
      desc: "The agreement governing your use of TrackCodex services."
    },
    {
      title: "Privacy Policy",
      icon: ShieldCheck,
      date: "Last updated: Nov 15, 2025",
      desc: "How we collect, use, and protect your data."
    },
    {
      title: "Acceptable Use Policy",
      icon: Users,
      date: "Last updated: Jan 5, 2026",
      desc: "Rules for what you can and cannot do on our platform."
    },
    {
      title: "Service Level Agreement",
      icon: FileText,
      date: "Last updated: Mar 10, 2026",
      desc: "Our uptime guarantees and SLA credits for Enterprise customers."
    }
  ]

  return (
    <div className="container max-w-4xl py-10">
      <PageHeader 
        title="Policies & Legal" 
        description="Important legal documents and our commitment to support."
        breadcrumbs={[{ label: "Policies" }]}
      />

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {policies.map((policy, i) => (
          <Card key={i} className="group hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <policy.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    {policy.title}
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 mt-1">{policy.date}</p>
                  <p className="text-sm text-foreground/80">{policy.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <HeadphonesIcon className="w-8 h-8 text-primary" />
        Support Target Response Times
      </h2>
      
      <p className="text-muted-foreground mb-6">
        Depending on your TrackCodex tier, our support team aims to provide initial responses within the following timeframes during business hours (Mon-Fri, 9AM-5PM PT).
      </p>
      
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="p-4 font-semibold">Plan Tier</th>
              <th className="p-4 font-semibold">Low / Normal</th>
              <th className="p-4 font-semibold">High Priority</th>
              <th className="p-4 font-semibold">Critical (Outage)</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-muted/20">
              <td className="p-4 font-medium">Free</td>
              <td className="p-4 text-muted-foreground">Community Support Only</td>
              <td className="p-4 text-muted-foreground">-</td>
              <td className="p-4 text-muted-foreground">-</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-4 font-medium">Pro</td>
              <td className="p-4">48 hours</td>
              <td className="p-4">24 hours</td>
              <td className="p-4">12 hours</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-4 font-medium">Team</td>
              <td className="p-4">24 hours</td>
              <td className="p-4">8 hours</td>
              <td className="p-4">4 hours</td>
            </tr>
            <tr className="hover:bg-primary/5 bg-primary/5">
              <td className="p-4 font-bold text-primary">Enterprise</td>
              <td className="p-4 font-medium">12 hours</td>
              <td className="p-4 font-medium">4 hours</td>
              <td className="p-4 font-bold">1 hour (24/7 coverage)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
