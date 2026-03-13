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
    <div className="container max-w-5xl py-10">
      <PageHeader 
        title="Billing & Payments" 
        description="Manage your subscription, view invoices, and resolve payment issues."
        breadcrumbs={[{ label: "Billing Help" }]}
      />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link href="https://trackcodex.com/settings/billing" target="_blank" className="block">
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <CreditCard className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Update Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Add or modify credit cards and billing addresses in your account settings.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="https://trackcodex.com/settings/billing/invoices" target="_blank" className="block">
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <FileText className="w-8 h-8 text-blue-500 mb-2" />
              <CardTitle>View Past Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Download PDF receipts and view your complete billing history.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/contact" className="block">
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <Briefcase className="w-8 h-8 text-purple-500 mb-2" />
              <CardTitle>Sales & Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Contact our sales team for volume licensing, custom terms, or enterprise deployment.</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How are TrackCodex AI minutes calculated?</AccordionTrigger>
              <AccordionContent>
                AI minutes are consumed based on the computational complexity of the task. Generating a small function might use 0.1 minutes, while analyzing a large codebase might use 5-10 minutes. Pro plans include 10,000 minutes per month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I pay annually instead of monthly?</AccordionTrigger>
              <AccordionContent>
                Yes! When you upgrade your plan, you can select annual billing to receive a 20% discount compared to the monthly rate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if a payment fails?</AccordionTrigger>
              <AccordionContent>
                If your card is declined, we will retry the charge 3 times over 7 days. Your services will remain active during this grace period. You will receive email notifications containing a link to update your payment info.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do refunds work?</AccordionTrigger>
              <AccordionContent>
                We offer a 14-day money-back guarantee on all new subscriptions. Beyond 14 days, we do not offer prorated refunds for mid-billing cycle cancellations, but your premium features will remain active until the end of that cycle.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Submit a Billing Dispute</CardTitle>
              <CardDescription>If you see an incorrect charge or need a refund, open a billing ticket directly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label>Invoice Number (Optional)</Label>
                  <Input placeholder="TCX-1029384" />
                </div>
                <div className="space-y-2">
                  <Label>Description <span className="text-destructive">*</span></Label>
                  <Textarea placeholder="Explain the issue with your bill..." className="min-h-[120px]" required />
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
