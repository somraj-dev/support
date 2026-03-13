"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { PageHeader } from "@/components/PageHeader"
import { AISuggestionPanel } from "@/components/AISuggestionPanel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { TicketCategory, TicketSeverity } from "@/lib/types"
import { mockWorkspaces } from "@/lib/mock-data"
import { ArrowRight, CheckCircle2 } from "lucide-react"

enum Step {
  DETAILS = 1,
  AI_SUGGESTIONS = 2,
  CONFIRMATION = 3
}

function NewTicketForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultCategory = searchParams?.get("category") || TicketCategory.OTHER

  const [step, setStep] = useState<Step>(Step.DETAILS)
  const [formData, setFormData] = useState({
    subject: "",
    category: defaultCategory,
    severity: TicketSeverity.LOW,
    description: "",
    workspaceId: "none",
    contactEmail: "developer@example.com"
  })

  const [ticketId, setTicketId] = useState("")

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === Step.DETAILS && formData.subject.length > 5) {
      setStep(Step.AI_SUGGESTIONS)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    // In a real app, send api request here
    setTicketId(`TCK-${Math.floor(Math.random() * 9000) + 1000}`)
    setStep(Step.CONFIRMATION)
    window.scrollTo(0, 0)
  }

  const handleAIResolve = () => {
    // User resolved their own issue via AI docs
    router.push("/")
  }

  if (step === Step.CONFIRMATION) {
    return (
      <div className="container max-w-2xl py-10 md:py-20">
        <Card className="border-emerald-500/20 shadow-lg text-center py-12 px-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Ticket Submitted</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Your request has been received and is being reviewed by our support team.
          </p>
          <div className="bg-muted min-w-[250px] inline-block p-4 rounded-lg mb-8">
            <p className="text-sm text-muted-foreground mb-1">Ticket ID</p>
            <p className="text-2xl font-mono font-medium">{ticketId}</p>
          </div>
          <div className="flex justify-center gap-4">
            <Button onClick={() => router.push(`/tickets/${ticketId}`)} variant="default">
              View Ticket
            </Button>
            <Button onClick={() => router.push("/")} variant="outline">
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-3xl py-10">
      <PageHeader 
        title="Submit a Ticket" 
        description="We'll help you get things sorted out as quickly as possible."
        breadcrumbs={[
          { label: "Tickets", href: "/tickets" },
          { label: "New Ticket" }
        ]}
      />

      {step === Step.AI_SUGGESTIONS && (
        <AISuggestionPanel 
          query={formData.subject}
          onResolve={handleAIResolve}
          onContinue={handleSubmit}
        />
      )}

      {(step === Step.DETAILS || step === Step.AI_SUGGESTIONS) && (
        <Card className={step === Step.AI_SUGGESTIONS ? "opacity-50 pointer-events-none" : ""}>
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleNext} className="space-y-8">
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">What can we help you with? <span className="text-destructive">*</span></Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(v) => setFormData({...formData, category: v as TicketCategory})}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={TicketCategory.ACCOUNT_LOGIN}>Account & Login</SelectItem>
                        <SelectItem value={TicketCategory.BILLING_PAYMENTS}>Billing & Payments</SelectItem>
                        <SelectItem value={TicketCategory.IDE}>TrackCodex IDE</SelectItem>
                        <SelectItem value={TicketCategory.DEPLOYMENT}>Deployments</SelectItem>
                        <SelectItem value={TicketCategory.BUG_REPORT}>Report a Bug</SelectItem>
                        <SelectItem value={TicketCategory.OTHER}>Other Issue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workspace">Affected Workspace (Optional)</Label>
                    <Select 
                      value={formData.workspaceId} 
                      onValueChange={(v) => setFormData({...formData, workspaceId: v})}
                    >
                      <SelectTrigger id="workspace">
                        <SelectValue placeholder="Select workspace" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None / Not applicable</SelectItem>
                        {mockWorkspaces.map(ws => (
                          <SelectItem key={ws.id} value={ws.id}>{ws.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject <span className="text-destructive">*</span></Label>
                  <Input 
                    id="subject" 
                    placeholder="Briefly summarize the issue"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    minLength={5}
                  />
                  <p className="text-xs text-muted-foreground">Keep it short and descriptive, e.g. &quot;Payment failed on renewal&quot;</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description <span className="text-destructive">*</span></Label>
                  <Textarea 
                    id="description" 
                    placeholder="Please include steps to reproduce, what you expected to happen, and what actually happened."
                    className="min-h-[200px]"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity Level</Label>
                    <Select 
                      value={formData.severity} 
                      onValueChange={(v) => setFormData({...formData, severity: v as TicketSeverity})}
                    >
                      <SelectTrigger id="severity">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={TicketSeverity.LOW}>Low - General question or minimal impact</SelectItem>
                        <SelectItem value={TicketSeverity.MEDIUM}>Medium - Partial feature degradation</SelectItem>
                        <SelectItem value={TicketSeverity.HIGH}>High - Major workflow blocked</SelectItem>
                        <SelectItem value={TicketSeverity.CRITICAL}>Critical - Core service outage or data loss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t flex justify-end">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default function NewTicketPage() {
  return (
    <Suspense fallback={<div className="container py-10">Loading...</div>}>
      <NewTicketForm />
    </Suspense>
  )
}
