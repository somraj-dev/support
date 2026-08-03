import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockIncidents } from "@/lib/mock-data"
import { CheckCircle2, AlertTriangle, ExternalLink, Activity } from "lucide-react"
import Link from "next/link"

export default function StatusPage() {
  const isOperational = mockIncidents.length === 0

  return (
    <div className="container max-w-4xl py-12">
      <PageHeader 
        title="Healthcare System Status" 
        description="Real-time operational status of AxioVital health platform services."
        action={
          <Button variant="outline" asChild className="bg-white border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold shadow-2xs">
            <Link href="https://status.axiovital.quantaforze.com">
              Subscribe to Status Alerts <ExternalLink className="ml-2 w-4 h-4 text-blue-600" />
            </Link>
          </Button>
        }
      />

      <Card className={`mb-10 border ${isOperational ? 'border-emerald-200 bg-emerald-50/70 shadow-xs' : 'border-amber-200 bg-amber-50/70 shadow-xs'} rounded-2xl`}>
        <CardContent className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-10 gap-6">
          <div className="flex items-center gap-4">
            {isOperational ? (
              <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shrink-0">
                <CheckCircle2 className="w-10 h-10" />
              </div>
            ) : (
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 shrink-0">
                <AlertTriangle className="w-10 h-10" />
              </div>
            )}
            <div>
              <h2 className={`text-2xl font-extrabold ${isOperational ? 'text-emerald-900' : 'text-amber-900'}`}>
                {isOperational ? "All Systems Operational" : "System Incident Under Monitoring"}
              </h2>
              <p className="text-slate-600 mt-1 text-sm">
                Real-time monitoring across all connected hospital regional nodes & FHIR engines.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {!isOperational && (
        <div className="mb-12 space-y-4">
          <h3 className="text-xl font-bold mb-4">Active Healthcare Incidents</h3>
          {mockIncidents.map(incident => (
            <Card key={incident.id} className="border-l-4 border-l-destructive shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{incident.title}</CardTitle>
                  <span className="text-xs font-semibold bg-destructive/10 text-destructive px-2 py-1 rounded">
                    {incident.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-4">
                  We are actively monitoring performance optimization. Affected components: {incident.components.join(", ")}.
                </p>
                <div className="text-xs text-muted-foreground">
                  Logged at {new Date(incident.updatedAt).toLocaleTimeString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Core Platform Component Status
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "AxioVital Core API Gateway",
            "Patient EHR Sync (FHIR/HL7)",
            "Doctor Portal & E-RX",
            "Hospital Bed & ER Triage",
            "AXIO Smart Card NFC Service",
            "Billing & Insurance Verification"
          ].map((component, i) => (
            <Card key={i}>
              <CardContent className="p-4 flex justify-between items-center">
                <span className="font-medium text-sm">{component}</span>
                <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Operational
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted p-6 rounded-xl flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row mt-8 border">
          <div>
            <p className="font-semibold">Need historical uptime & hospital SLA metrics?</p>
            <p className="text-sm text-muted-foreground">Visit our dedicated status portal for historical uptime reports and maintenance schedules.</p>
          </div>
          <Button variant="outline" asChild className="shrink-0 bg-background">
            <Link href="https://status.axiovital.quantaforze.com">
              Go to status.axiovital.quantaforze.com
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
