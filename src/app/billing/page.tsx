"use client"

import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, FileText, Briefcase, Mail } from "lucide-react"
import Link from "next/link"

export default function BillingPage() {
  return (
    <div className="container max-w-5xl py-12">
      <PageHeader 
        title="Billing & Insurance" 
        description="Manage healthcare subscription tiers, view hospital invoices, and resolve insurance claim billing questions."
        breadcrumbs={[{ label: "Billing & Insurance" }]}
      />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link href="https://axiovital.quantaforze.com/settings/billing" className="block">
          <Card className="h-full bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:shadow-md hover:border-blue-400 transition-all">
            <CardHeader>
              <CreditCard className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="font-bold text-slate-900 text-lg">Update Payment & Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">Manage hospital billing accounts, credit cards, and electronic claim clearinghouse profiles.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="https://axiovital.quantaforze.com/settings/billing/invoices" className="block">
          <Card className="h-full bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:shadow-md hover:border-blue-400 transition-all">
            <CardHeader>
              <FileText className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="font-bold text-slate-900 text-lg">View Hospital Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">Download official medical billing statements, PDF invoices, and copay records.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/contact" className="block">
          <Card className="h-full bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:shadow-md hover:border-blue-400 transition-all">
            <CardHeader>
              <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="font-bold text-slate-900 text-lg">Enterprise Licensing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">Contact sales for hospital network volume licensing, custom BAA agreements, and B2B billing.</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Healthcare Billing FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How are enterprise hospital licenses billed?</AccordionTrigger>
              <AccordionContent>
                Enterprise hospital tiers are billed annually based on active bed capacity, provider licenses, and integrated diagnostic modules.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does electronic insurance claim verification work?</AccordionTrigger>
              <AccordionContent>
                AxioVital connects directly with national health insurance clearinghouses via real-time EDI 270/271 protocols for instant copay and eligibility checks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can healthcare networks pay via Wire Transfer or Purchase Order?</AccordionTrigger>
              <AccordionContent>
                Yes! Enterprise hospital networks can request invoice billing with Net-30 or Net-60 payment terms payable via ACH, Wire Transfer, or Purchase Order.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do refunds and claim disputes work?</AccordionTrigger>
              <AccordionContent>
                Disputed billing charges or duplicate copay transactions can be submitted directly to our billing support team for prompt review within 3 business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Submit a Billing Inquiry</CardTitle>
              <CardDescription>If you see an incorrect statement or need assistance with insurance claims, open a billing request.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label>Invoice or Claim Reference (Optional)</Label>
                  <Input placeholder="AXIO-INV-1029384" />
                </div>
                <div className="space-y-2">
                  <Label>Description <span className="text-destructive">*</span></Label>
                  <Textarea placeholder="Explain the billing or insurance inquiry..." className="min-h-[120px]" required />
                </div>
                <Button type="button" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Billing Support
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
