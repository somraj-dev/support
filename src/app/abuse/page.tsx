"use client"

import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Flag, Send } from "lucide-react"
import Link from "next/link"

export default function AbusePage() {
  return (
    <div className="container max-w-3xl py-10">
      <PageHeader 
        title="Report Abuse & Patient Data Violation" 
        description="Help us keep AxioVital secure by reporting violations of patient data privacy, unauthorized access, or policy breaches."
        breadcrumbs={[{ label: "Report Abuse" }]}
      />

      <Card className="mb-8 border-amber-500/20">
        <CardContent className="p-6 bg-amber-500/5 items-start flex gap-4 rounded-xl">
          <Flag className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
          <div className="text-sm">
            <h3 className="font-semibold text-foreground mb-1">What constitutes platform abuse?</h3>
            <p className="text-muted-foreground mb-3">
              Abuse includes unauthorized patient record access, fake healthcare credentials, spamming doctor portals, phishing, and HIPAA privacy violations.
            </p>
            <Link href="/policies" className="text-primary hover:underline font-medium">
              Read our Acceptable Use & Privacy Policies
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="abuse-type">Type of Violation <span className="text-destructive">*</span></Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select violation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unauthorized_access">Unauthorized Patient Data Access</SelectItem>
                <SelectItem value="fake_credentials">Fraudulent Medical Provider Credentials</SelectItem>
                <SelectItem value="phishing">Phishing / Credential Theft</SelectItem>
                <SelectItem value="prescription_fraud">Digital Prescription Fraud</SelectItem>
                <SelectItem value="harassment">Harassment / Unsolicited Spam</SelectItem>
                <SelectItem value="other">Other Healthcare Violation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">Link or Facility ID <span className="text-destructive">*</span></Label>
            <Input id="url" placeholder="https://axiovital.quantaforze.com/..." required />
            <p className="text-xs text-muted-foreground">Provide the exact URL, provider profile, or clinic workspace ID.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Details & Evidence <span className="text-destructive">*</span></Label>
            <Textarea 
              id="details" 
              placeholder="Please provide any additional context or evidence that helps us verify this report..."
              className="min-h-[150px]"
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Your Contact Email <span className="text-destructive">*</span></Label>
            <Input id="contact" type="email" placeholder="you@example.com" required />
            <p className="text-xs text-muted-foreground">We may need to contact you for further details. Your identity will be kept confidential.</p>
          </div>

          <div className="pt-4 border-t">
            <Button type="button" className="w-full sm:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Submit Abuse Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
