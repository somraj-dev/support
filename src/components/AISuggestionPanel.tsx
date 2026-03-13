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
    <Card className="border-primary/50 shadow-sm bg-primary/5 mb-8">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-primary gap-2 text-lg">
          <Sparkles className="w-5 h-5" />
          TrackCodex AI Suggestions
        </CardTitle>
        <CardDescription>
          Before you submit your ticket, our AI found these potential solutions for &quot;{query}&quot;:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <Link href="https://docs.trackcodex.com" target="_blank" className="flex items-start gap-3 p-3 rounded-lg bg-background border hover:border-primary/50 transition-colors">
            <FileText className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium text-sm">Managing Billing and Payment Methods</h4>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                Learn how to update your credit card, view past invoices, and manage your organization&apos;s subscription plan from the billing dashboard.
              </p>
            </div>
          </Link>
          <Link href="https://docs.trackcodex.com" target="_blank" className="flex items-start gap-3 p-3 rounded-lg bg-background border hover:border-primary/50 transition-colors">
            <FileText className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium text-sm">Troubleshooting 403 Forbidden Errors</h4>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                If you encounter a 403 Forbidden error, ensure you have the correct organization roles assigned. Only Organization Admins can access the billing page.
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-primary/10 mt-6">
          <Button onClick={onResolve} variant="default" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            This solved my problem
          </Button>
          <Button onClick={onContinue} variant="outline" className="w-full sm:w-auto flex-1">
            Continue to submit ticket
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
