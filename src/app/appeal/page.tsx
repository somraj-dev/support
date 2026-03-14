"use client"

import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldAlert, Gavel, FileText, ArrowRight, Info } from "lucide-react"

export default function AppealPage() {
  const guidelines = [
    {
      title: "Review our Terms of Service",
      desc: "Ensure you understand why your account might have been flagged. Common reasons include spam, harassment, or automated abuse.",
      icon: Gavel
    },
    {
      title: "Provide Context",
      desc: "Be prepared to explain any recent activity that might have triggered an automated suspension.",
      icon: Info
    },
    {
      title: "Expect a Review",
      desc: "Appeals are reviewed by our Trust & Safety team. This typically takes 2-3 business days.",
      icon: ShieldAlert
    }
  ]

  return (
    <div className="container max-w-4xl py-10">
      <PageHeader 
        title="Account Suspension Appeal" 
        description="If you believe your account was suspended in error, you can submit an appeal for review."
        breadcrumbs={[
          { label: "Contact", href: "/contact" },
          { label: "Appeal" }
        ]}
      />

      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">Before you appeal</CardTitle>
              <CardDescription>
                Please read through these guidelines to ensure your appeal is processed correctly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {guidelines.map((g, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-2 bg-background rounded-lg border h-fit">
                    <g.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{g.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="p-6 border rounded-xl bg-muted/30">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Submission Instructions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Use the primary email address associated with your account.</li>
              <li>Include any relevant Ticket IDs from previous requests.</li>
              <li>Explain clearly why you believe the suspension should be lifted.</li>
              <li>Do not submit multiple appeals for the same account.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Submit Appeal</CardTitle>
              <CardDescription>Ready to submit your request?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">
                Clicking below will take you to our secure ticket form with the appeal category pre-selected.
              </p>
              <Button asChild className="w-full h-12 shadow-md">
                <Link href="/new?category=ACCOUNT_SUSPENSION_APPEAL">
                  Open Appeal Form <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
            <CardFooter className="bg-muted/50 py-4 text-[11px] text-center text-muted-foreground italic">
              Our Trust & Safety team reviews all appeals manually.
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
