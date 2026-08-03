import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Ticket, Mail, Phone, MapPin, Building2, Briefcase, ShieldAlert, Gavel, HeartPulse, Stethoscope } from "lucide-react"

export default function ContactPage() {
  const departments = [
    {
      title: "Healthcare Technical Support",
      icon: Stethoscope,
      desc: "Get assistance with AxioVital EHR integration, doctor portals, and patient account issues.",
      link: "/new",
      linkText: "Submit Support Request"
    },
    {
      title: "Hospital & Enterprise Sales",
      icon: Building2,
      desc: "Discuss enterprise hospital licenses, custom SLAs, or multi-clinic deployments.",
      link: "mailto:enterprise@axiovital.quantaforze.com",
      linkText: "enterprise@axiovital.quantaforze.com"
    },
    {
      title: "HIPAA & Security Operations",
      icon: ShieldAlert,
      desc: "Report security vulnerabilities or inquire about HIPAA & ISO 27001 data compliance.",
      link: "/security",
      linkText: "Report Vulnerability"
    },
    {
      title: "Trust, Safety & Patient Privacy",
      icon: HeartPulse,
      desc: "Report unauthorized access, patient data misuse, or platform terms violations.",
      link: "/abuse",
      linkText: "Report Privacy Abuse"
    },
    {
      title: "Account & Access Appeals",
      icon: Gavel,
      desc: "Request a review for suspended provider credentials or locked clinic accounts.",
      link: "/appeal",
      linkText: "Submit Access Appeal"
    }
  ]

  return (
    <div className="container max-w-5xl py-12">
      <PageHeader 
        title="Contact Healthcare Support" 
        description="Connect with the appropriate AxioVital team to resolve clinical, technical, or administrative requests."
        breadcrumbs={[{ label: "Contact Support" }]}
      />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {departments.map((dept, i) => (
          <Card key={i} className="bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <dept.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{dept.title}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{dept.desc}</p>
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
          <h2 className="text-2xl font-bold mb-6">AxioVital Healthcare HQ</h2>
          <Card className="bg-white border border-slate-200/90 shadow-2xs rounded-2xl">
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">AxioVital Healthcare Technologies Inc.</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed text-sm">
                    500 Healthcare Plaza<br />
                    Suite 1200<br />
                    Boston, MA 02115<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-slate-600 text-sm font-medium">+1 (800) 555-AXIO (2946)</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-slate-600 text-sm font-medium">support@axiovital.quantaforze.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex items-center justify-center p-8 border border-slate-200 rounded-2xl bg-blue-50/40 overflow-hidden relative min-h-[300px]">
          <div className="relative text-center z-10 w-full max-w-sm bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <HeartPulse className="w-10 h-10 text-blue-600 mx-auto mb-3 animate-pulse" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">AxioVital Global Care Desk</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Our 24/7 clinical support team operates globally to ensure continuous hospital uptime.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
