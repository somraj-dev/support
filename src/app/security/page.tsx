"use client"

import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ShieldAlert, Send } from "lucide-react"
import Link from "next/link"

export default function SecurityPage() {
  return (
    <div className="container max-w-4xl py-10">
      <PageHeader 
        title="Report a Security Vulnerability" 
        description="We take security seriously. Follow our responsible disclosure guidelines below."
        breadcrumbs={[{ label: "Security" }]}
      />

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Vulnerability Report Form</CardTitle>
              <CardDescription>
                Use this form to securely submit vulnerability details to our security team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="vulnerability-type">Vulnerability Type <span className="text-destructive">*</span></Label>
                  <Input id="vulnerability-type" placeholder="e.g., Cross-Site Scripting (XSS), SQL Injection" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="affected-url">Affected URL or Component <span className="text-destructive">*</span></Label>
                  <Input id="affected-url" placeholder="https://..." required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description & Impact <span className="text-destructive">*</span></Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the vulnerability, how it can be exploited, and the potential impact."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="steps">Steps to Reproduce <span className="text-destructive">*</span></Label>
                  <Textarea 
                    id="steps" 
                    placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact">Your Contact Email <span className="text-destructive">*</span></Label>
                  <Input id="contact" type="email" placeholder="security-researcher@example.com" required />
                </div>
                
                <Button type="button" className="w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Report Securely
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-primary">
                <ShieldAlert className="w-5 h-5" />
                Safe Harbor & HIPAA Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <p>
                AxioVital supports responsible disclosure for security researchers and HIPAA security officers. If you adhere to these guidelines, we will not pursue legal action.
              </p>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-xs leading-relaxed">
                <li>Do not exploit vulnerabilities further than necessary to demonstrate risk.</li>
                <li>Never access, expose, or modify Protected Health Information (PHI).</li>
                <li>Provide our security team reasonable time to remediate before public disclosure.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">HIPAA Compliance Program</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              AxioVital undergoes annual independent SOC 2 Type II, ISO 27001, and HIPAA compliance audits.
              <br/><br/>
              <Link href="/policies" className="text-primary hover:underline font-medium">Read Full Security & Privacy Policy</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
