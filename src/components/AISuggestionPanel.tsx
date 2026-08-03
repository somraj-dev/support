import { Sparkles, FileText, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

interface AISuggestionPanelProps {
  query: string
  onResolve: () => void
  onContinue: () => void
}

export function AISuggestionPanel({ query, onResolve, onContinue }: AISuggestionPanelProps) {
  // Mock AI generated suggestions based on the category/subject
  return (
    <Card className="border-blue-200 shadow-sm bg-blue-50/50 mb-8 rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-blue-700 gap-2 text-lg font-bold">
          <Sparkles className="w-5 h-5 text-blue-600" />
          AxioVital Smart Knowledge Suggestions
        </CardTitle>
        <CardDescription className="text-slate-600">
          Before you submit your request, our healthcare AI matched these relevant guides for &quot;{query}&quot;:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <Link href="https://docs.axiovital.quantaforze.com" className="flex items-start gap-3 p-3 rounded-lg bg-background border hover:border-primary/50 transition-colors">
            <FileText className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium text-sm">Patient EHR Synchronization & Chart Transfer</h4>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                Learn how medical records and pathology results are synced across hospital departments and outpatient clinics.
              </p>
            </div>
          </Link>
          <Link href="https://docs.axiovital.quantaforze.com" className="flex items-start gap-3 p-3 rounded-lg bg-background border hover:border-primary/50 transition-colors">
            <FileText className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium text-sm">Real-Time Insurance Eligibility & Copay Billing</h4>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                Troubleshoot insurance verification timeouts, billing claim status, and copay processing issues.
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-primary/10 mt-6">
          <Button onClick={onResolve} variant="default" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            This solved my question
          </Button>
          <Button onClick={onContinue} variant="outline" className="w-full sm:w-auto flex-1">
            Continue to submit request
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
