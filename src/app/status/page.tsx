import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockIncidents } from "@/lib/mock-data"
import { CheckCircle2, AlertTriangle, ExternalLink, Activity } from "lucide-react"
import Link from "next/link"

export default function StatusPage() {
  const isOperational = mockIncidents.length === 0

  return (
    <div className="container max-w-4xl py-10">
      <PageHeader 
        title="Platform Status" 
        description="Current system status and incident history."
        action={
          <Button variant="outline" asChild>
            <Link href="https://status.trackcodex.com" target="_blank">
              Subscribe to Updates <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        }
      />

      <Card className={`mb-10 border-2 ${isOperational ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-destructive/50 bg-destructive/5'}`}>
        <CardContent className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-10 gap-6">
          <div className="flex items-center gap-4">
            {isOperational ? (
              <div className="bg-emerald-500/20 p-4 rounded-full">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
            ) : (
              <div className="bg-destructive/20 p-4 rounded-full">
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
            )}
            <div>
              <h2 className={`text-2xl font-bold ${isOperational ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive'}`}>
                {isOperational ? "All Systems Operational" : "Active Incidents Detected"}
              </h2>
              <p className="text-muted-foreground mt-1">
                Last updated just now.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {!isOperational && (
        <div className="mb-12 space-y-4">
          <h3 className="text-xl font-bold mb-4">Current Incidents</h3>
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
                  We are actively investigating degraded performance. Affected components: {incident.components.join(", ")}.
                </p>
                <div className="text-xs text-muted-foreground">
                  Started {new Date(incident.updatedAt).toLocaleTimeString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Component Status
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["TrackCodex API", "Web Interface", "Git Infrastructure", "TrackCodex IDE", "AI Code Suggestions", "Billing System"].map((component, i) => (
            <Card key={i}>
              <CardContent className="p-4 flex justify-between items-center">
                <span className="font-medium">{component}</span>
                <span className="text-sm font-medium text-emerald-500 flex items-center gap-1.5">
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
        
        <div className="bg-muted p-4 rounded-lg flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row mt-8">
          <div>
            <p className="font-medium">Need full historical uptime data?</p>
            <p className="text-sm text-muted-foreground">Visit our dedicated status page for detailed graphs and past incidents.</p>
          </div>
          <Button variant="outline" asChild className="shrink-0 bg-background">
            <Link href="https://status.trackcodex.com" target="_blank">
              Go to status.trackcodex.com
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
