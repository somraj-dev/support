"use client"

import { useState } from "react"
import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { KeyRound, ShieldCheck, MailCheck, ArrowRight } from "lucide-react"

enum Step {
  EMAIL = 1,
  CODE = 2,
  SUCCESS = 3
}

export default function AccountRecoveryPage() {
  const [step, setStep] = useState<Step>(Step.EMAIL)
  const [email, setEmail] = useState("")

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setStep(Step.CODE)
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(Step.SUCCESS)
  }

  return (
    <div className="container max-w-3xl py-10">
      <PageHeader 
        title="Account Recovery" 
        description="Lost access to your account? We'll help you get back in."
        breadcrumbs={[{ label: "Account Recovery" }]}
      />

      <div className="max-w-md mx-auto mt-8">
        
        {/* Step Indicator */}
        <div className="flex justify-between mb-8 px-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors
                ${step === s ? "bg-primary text-primary-foreground" : 
                  step > s ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}
              >
                {step > s ? "✓" : s}
              </div>
            </div>
          ))}
          <div className="absolute left-[50%] -translate-x-[50%] top-[15px] w-[50%] h-[2px] bg-muted -z-10" />
        </div>

        {/* Step 1: Email */}
        {step === Step.EMAIL && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-primary" />
                Find your account
              </CardTitle>
              <CardDescription>Enter the email address associated with your TrackCodex account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendLink} className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required 
                  autoFocus
                />
                <Button type="submit" className="w-full">
                  Send Recovery Email
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Code/Link sent */}
        {step === Step.CODE && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MailCheck className="w-5 h-5 text-primary" />
                Check your inbox
              </CardTitle>
              <CardDescription>We&apos;ve sent a 6-digit recovery code to {email}.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerify} className="space-y-4">
                <Input type="text" placeholder="000000" required className="text-center text-2xl tracking-[0.5em] font-mono h-14" />
                <Button type="submit" className="w-full">
                  Verify Code
                </Button>
              </form>
            </CardContent>
            <CardFooter className="justify-center border-t py-4 text-sm text-muted-foreground">
              Didn&apos;t receive an email? <button onClick={() => setStep(Step.EMAIL)} className="text-primary ml-1 hover:underline">Try again</button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Success */}
        {step === Step.SUCCESS && (
          <Card className="border-emerald-500/20 text-center">
            <CardContent className="pt-10 pb-8 space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold">Verification Successful</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                You can now securely reset your password or sign in via SSO.
              </p>
              <div className="pt-6">
                <Button className="w-full" asChild>
                  <a href="https://trackcodex.com/login">
                    Proceed to Login <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
