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
    contactEmail: "dr.jenkins@axiovital-health.com"
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
    // Send healthcare support request
    setTicketId(`AXIO-${Math.floor(Math.random() * 9000) + 1000}`)
    setStep(Step.CONFIRMATION)
    window.scrollTo(0, 0)
  }

  const handleAIResolve = () => {
    router.push("/")
  }

  if (step === Step.CONFIRMATION) {
    return (
      <div className="container max-w-2xl py-10 md:py-20">
        <Card className="border-emerald-200 bg-white shadow-xl text-center py-12 px-6 rounded-2xl">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Support Request Submitted</h1>
          <p className="text-slate-600 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Your request has been received and assigned to our AxioVital healthcare support engineers.
          </p>
          <div className="bg-slate-50 border border-slate-200 min-w-[250px] inline-block p-5 rounded-xl mb-8">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Support Request ID</p>
            <p className="text-2xl font-mono font-bold text-blue-600">{ticketId}</p>
          </div>
          <div className="flex justify-center gap-4">
            <Button onClick={() => router.push(`/tickets/${ticketId}`)} className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              View Request
            </Button>
            <Button onClick={() => router.push("/")} variant="outline" className="border-slate-300 text-slate-900 font-semibold">
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-3xl py-12">
      <PageHeader 
        title="Submit Support Request" 
        description="Our healthcare support team is available 24/7 to assist with platform and clinical workflow issues."
        breadcrumbs={[
          { label: "Support Requests", href: "/tickets" },
          { label: "New Request" }
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
        <Card className={`bg-white border-slate-200/90 shadow-md rounded-2xl ${step === Step.AI_SUGGESTIONS ? "opacity-50 pointer-events-none" : ""}`}>
          <CardContent className="p-6 sm:p-10">
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
                        <SelectValue placeholder="Select healthcare topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={TicketCategory.PATIENT_ACCOUNTS}>Patient Accounts & Profile</SelectItem>
                        <SelectItem value={TicketCategory.APPOINTMENT_BOOKING}>Appointment Booking & Telemedicine</SelectItem>
                        <SelectItem value={TicketCategory.DOCTOR_PORTAL}>Doctor & Physician Portal</SelectItem>
                        <SelectItem value={TicketCategory.HOSPITAL_DASHBOARD}>Hospital & Clinic Dashboard</SelectItem>
                        <SelectItem value={TicketCategory.EHR_RECORDS}>Electronic Health Records (EHR)</SelectItem>
                        <SelectItem value={TicketCategory.DIGITAL_PRESCRIPTIONS}>Digital Prescriptions (E-RX)</SelectItem>
                        <SelectItem value={TicketCategory.LAB_INTEGRATION}>Laboratory & Diagnostic Sync</SelectItem>
                        <SelectItem value={TicketCategory.BILLING_INSURANCE}>Billing & Insurance Claims</SelectItem>
                        <SelectItem value={TicketCategory.AXIO_SMART_CARD}>AXIO Smart Card & NFC Reader</SelectItem>
                        <SelectItem value={TicketCategory.PRIVACY_SECURITY}>HIPAA Privacy & Security</SelectItem>
                        <SelectItem value={TicketCategory.BUG_REPORT}>Report Platform Bug</SelectItem>
                        <SelectItem value={TicketCategory.FEATURE_REQUEST}>Feature Request</SelectItem>
                        <SelectItem value={TicketCategory.ACCOUNT_SUSPENSION_APPEAL}>Account Appeal</SelectItem>
                        <SelectItem value={TicketCategory.OTHER}>Other Healthcare Issue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workspace">Department / Clinic Unit (Optional)</Label>
                    <Select 
                      value={formData.workspaceId} 
                      onValueChange={(v) => setFormData({...formData, workspaceId: v})}
                    >
                      <SelectTrigger id="workspace">
                        <SelectValue placeholder="Select facility unit" />
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
                    placeholder="Briefly summarize your request"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    minLength={5}
                  />
                  <p className="text-xs text-muted-foreground">Keep it short and descriptive, e.g. &quot;Lab sync delay in Cardiology unit&quot;</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description <span className="text-destructive">*</span></Label>
                  <Textarea 
                    id="description" 
                    placeholder="Provide details about the issue, patient workflow context, steps to reproduce, or urgent medical context."
                    className="min-h-[200px]"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="severity">Urgency Level</Label>
                    <Select 
                      value={formData.severity} 
                      onValueChange={(v) => setFormData({...formData, severity: v as TicketSeverity})}
                    >
                      <SelectTrigger id="severity">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={TicketSeverity.LOW}>Low - General inquiry or feature question</SelectItem>
                        <SelectItem value={TicketSeverity.MEDIUM}>Medium - Non-critical workflow delay</SelectItem>
                        <SelectItem value={TicketSeverity.HIGH}>High - Department operation impacted</SelectItem>
                        <SelectItem value={TicketSeverity.CRITICAL}>Critical - Urgent patient care or ER outage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Healthcare Contact Email</Label>
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
