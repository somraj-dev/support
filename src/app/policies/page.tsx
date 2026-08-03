import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ShieldCheck, FileText, Scale, HeadphonesIcon, Building2 } from "lucide-react"

export default function PoliciesPage() {
  const policies = [
    {
      title: "Terms of Service",
      icon: Scale,
      date: "Last updated: Jan 15, 2026",
      desc: "The agreement governing your use of AxioVital healthcare platform services."
    },
    {
      title: "HIPAA & Patient Privacy Policy",
      icon: ShieldCheck,
      date: "Last updated: Feb 1, 2026",
      desc: "How we safeguard Protected Health Information (PHI) under HIPAA and GDPR."
    },
    {
      title: "Business Associate Agreement (BAA)",
      icon: Building2,
      date: "Last updated: Feb 10, 2026",
      desc: "Standard compliance terms for hospital covered entities and clinic partners."
    },
    {
      title: "Healthcare Service Level Agreement",
      icon: FileText,
      date: "Last updated: Mar 1, 2026",
      desc: "99.99% clinical uptime guarantees and SLA response commitments for health systems."
    }
  ]

  return (
    <div className="container max-w-4xl py-10">
      <PageHeader 
        title="Policies & Healthcare Compliance" 
        description="Important legal, HIPAA compliance documents, and clinical SLA commitments."
        breadcrumbs={[{ label: "Policies & Legal" }]}
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
        Healthcare Support Target Response Times
      </h2>
      
      <p className="text-muted-foreground mb-6">
        Depending on your AxioVital deployment tier, our healthcare engineering desk aims to provide initial responses within the following target timeframes (24/7 coverage for Enterprise hospital systems).
      </p>
      
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="p-4 font-semibold">Deployment Tier</th>
              <th className="p-4 font-semibold">Low / General</th>
              <th className="p-4 font-semibold">High Priority</th>
              <th className="p-4 font-semibold">Critical Care / ER Outage</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-muted/20">
              <td className="p-4 font-medium">Individual Doctor / Patient</td>
              <td className="p-4 text-muted-foreground">24 hours</td>
              <td className="p-4 text-muted-foreground">12 hours</td>
              <td className="p-4 text-muted-foreground">4 hours</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-4 font-medium">Clinic & Diagnostic Lab</td>
              <td className="p-4">12 hours</td>
              <td className="p-4">6 hours</td>
              <td className="p-4">2 hours</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-4 font-medium">Hospital System</td>
              <td className="p-4">8 hours</td>
              <td className="p-4">4 hours</td>
              <td className="p-4">1 hour</td>
            </tr>
            <tr className="hover:bg-primary/5 bg-primary/5">
              <td className="p-4 font-bold text-primary">Enterprise Healthcare Network</td>
              <td className="p-4 font-medium">4 hours</td>
              <td className="p-4 font-medium">1 hour</td>
              <td className="p-4 font-bold text-emerald-500">15 minutes (24/7 Dedicated Care Desk)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
