import { SearchBar } from "@/components/SearchBar"
import { CategoryCard } from "@/components/CategoryCard"
import { StatusBanner } from "@/components/StatusBanner"
import { mockIncidents } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
  HelpCircle,
  CreditCard,
  UserCircle,
  Calendar,
  Stethoscope,
  Building2,
  FileHeart,
  Pill,
  Microscope,
  Lock,
  Video,
  BarChart3,
  KeyRound,
  AlertCircle,
  Lightbulb,
  Ticket,
  Activity,
  HeartPulse,
  PhoneCall,
  MessageSquare,
  Users,
  ShieldCheck,
  FileText,
  ChevronRight,
  Download,
  Headphones,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Clock,
  ArrowRight,
  Play
} from "lucide-react"

export default function HomePage() {
  const categories = [
    { title: "Patient Accounts", description: "Password resets, 2FA, patient identity verification, and profile management.", icon: UserCircle, href: "/contact?topic=account" },
    { title: "Appointment Booking", description: "Scheduling, cancellations, telemedicine virtual visits, and automated reminders.", icon: Calendar, href: "/contact?topic=appointments" },
    { title: "Doctor Portal", description: "Clinical workspace, E-prescriptions, physician roster, and consultation logs.", icon: Stethoscope, href: "/contact?topic=doctors" },
    { title: "Hospital Dashboard", description: "Facility management, bed occupancy, department routing, and ER triage.", icon: Building2, href: "/contact?topic=hospitals" },
    { title: "Electronic Health Records (EHR)", description: "Medical history, lab results, radiology scans, and chart synchronization.", icon: FileHeart, href: "/policies" },
    { title: "Digital Prescriptions", description: "E-pharmacy integration, medication refills, dosage history, and RX security.", icon: Pill, href: "/policies" },
    { title: "Laboratory Integration", description: "Pathology sync, diagnostic report delivery, specimen tracking, and LIS APIs.", icon: Microscope, href: "/policies" },
    { title: "Billing & Insurance", description: "Claims processing, copay statements, insurance eligibility, and invoices.", icon: CreditCard, href: "/billing" },
    { title: "AXIO Smart Card", description: "Digital health ID card, NFC tap-in verification, emergency medical profile, and passcodes.", icon: ShieldCheck, href: "/contact?topic=smartcard" },
    { title: "Privacy & Security", description: "HIPAA compliance, GDPR consent, biometric encryption, and audit logs.", icon: Lock, href: "/security" },
    { title: "Telemedicine & Virtual Care", description: "HD video consultations, remote patient monitoring (RPM), and vitals sync.", icon: Video, href: "/contact?topic=telemedicine" },
    { title: "Healthcare Analytics", description: "Hospital operational metrics, patient outcomes reporting, and population health data.", icon: BarChart3, href: "/policies" },
    { title: "Account Recovery", description: "Emergency account lockouts, identity confirmation, and credential resets.", icon: KeyRound, href: "/account-recovery" },
    { title: "Report Platform Issue", description: "Report bugs or unexpected behavior in the AxioVital healthcare platform.", icon: AlertCircle, href: "/new?category=BUG_REPORT" },
    { title: "Feature Request", description: "Suggest a new feature or workflow improvement for AxioVital.", icon: Lightbulb, href: "/new?category=FEATURE_REQUEST" },
  ]

  const quickActions = [
    { title: "Book Appointment Help", desc: "Troubleshoot scheduling & reminders", icon: Calendar, href: "/contact?topic=appointments" },
    { title: "Recover Patient Account", desc: "Reset credentials & 2FA access", icon: KeyRound, href: "/account-recovery" },
    { title: "Report Platform Issue", desc: "Submit a technical bug report", icon: AlertCircle, href: "/new?category=BUG_REPORT" },
    { title: "Contact Support Desk", desc: "Connect with our healthcare engineers", icon: Headphones, href: "/contact" },
    { title: "Platform Status", desc: "Check system uptime & performance", icon: Activity, href: "/status" },
    { title: "Emergency Escalation", desc: "Critical hospital escalation (24/7)", icon: HeartPulse, href: "/contact?topic=emergency" },
    { title: "Download User Guides", desc: "PDF documentation for staff & patients", icon: Download, href: "https://docs.axiovital.quantaforze.com/downloads" },
  ]

  const supportChannels = [
    { title: "24×7 Technical Support", desc: "Round-the-clock technical assistance for healthcare providers.", icon: Headphones, detail: "Available 24/7/365" },
    { title: "Hospital Enterprise Support", desc: "Dedicated SLA engineering team for enterprise hospital systems.", icon: Building2, detail: "Dedicated SLA" },
    { title: "Emergency Assistance", desc: "Priority hotline for critical hospital platform downtime.", icon: HeartPulse, detail: "Instant Response" },
    { title: "Live Chat Support", desc: "Instant chat with an AxioVital support specialist.", icon: MessageSquare, detail: "Average wait: < 2 mins" },
    { title: "Email Support", desc: "Send detailed inquiries directly to support@axiovital.quantaforze.com.", icon: FileText, detail: "Response in < 2 hrs" },
    { title: "Community Forum", desc: "Connect with healthcare admins and doctors in our forum.", icon: Users, detail: "Peer Support" },
  ]

  const faqs = [
    {
      q: "How do I book an appointment?",
      a: "Patients can book appointments directly through the AxioVital Patient Mobile App or Web Portal by selecting a doctor, clinic location, and available time slot. If you encounter issues, navigate to Account Recovery or Contact Support."
    },
    {
      q: "How do I access my medical records?",
      a: "Your Electronic Health Records (EHR) are securely stored under your verified AxioVital Patient Account. Log into the Patient Portal and click 'My Medical History' or scan your AXIO Smart Card at participating clinics."
    },
    {
      q: "How can doctors issue digital prescriptions?",
      a: "Licensed physicians can log into the AxioVital Doctor Portal, select a patient chart, and generate cryptographically signed digital prescriptions (E-RX) sent directly to integrated e-pharmacies."
    },
    {
      q: "How can hospitals onboard to AxioVital?",
      a: "Hospital administrators can request enterprise onboarding by reaching out to our Hospital Enterprise Support team via the Contact Us page. Our integration engineers assist with HL7/FHIR setup and EHR data migration."
    },
    {
      q: "How does the AXIO Card NFC Kiosk check-in work?",
      a: "Patients simply tap their hardware AXIO Card at hospital reception kiosks to confirm check-in, verify eligibility, and load offline emergency medical tags."
    },
    {
      q: "Is patient medical data stored securely?",
      a: "All medical records are encrypted using AES-256 keys at rest and TLS 1.3 in transit, fully complying with HIPAA and GDPR regulations."
    }
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <StatusBanner incidents={mockIncidents} />
      
      {/* Support Hero Section - Centered Classic Delight Design */}
      <section className="relative bg-[#EEF7FB] bg-medical-dots pt-16 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/60 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-7">
            
            {/* Centered Libre Baskerville Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.15] font-baskerville max-w-3xl mx-auto">
              How can we assist your <span className="font-bold text-slate-900">healthcare journey</span> today?
            </h1>
            
            {/* Centered Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal font-sans">
              Submit support requests, check real-time system uptime, troubleshoot clinical workflows, or connect directly with our 24/7 healthcare support team.
            </p>

            {/* Centered Primary Action Buttons - Symbolically Uniform */}
            <div className="flex flex-wrap items-center justify-center gap-4 font-sans pt-2">
              <Button asChild variant="outline" size="lg" className="bg-white hover:bg-slate-50 border-slate-300 text-slate-900 font-semibold rounded-xl px-7 h-12 shadow-2xs transition-all">
                <Link href="/new">
                  <Ticket className="w-4 h-4 mr-2 text-blue-600" />
                  Submit Support Request
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="bg-white hover:bg-slate-50 border-slate-300 text-slate-900 font-semibold rounded-xl px-7 h-12 shadow-2xs transition-all">
                <Link href="/status">
                  <Activity className="w-4 h-4 mr-2 text-blue-600" />
                  Healthcare System Status
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-white hover:bg-slate-50 border-slate-300 text-slate-900 font-semibold rounded-xl px-7 h-12 shadow-2xs transition-all">
                <Link href="/contact?topic=emergency">
                  <HeartPulse className="w-4 h-4 mr-2 text-blue-600" />
                  24/7 Emergency Escalation
                </Link>
              </Button>
            </div>

            {/* Centered Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-sans pt-6 border-t border-slate-200/60 max-w-2xl mx-auto">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Trusted by 120+ Hospitals
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Clock className="w-4 h-4 text-blue-600" />
                Average SLA: &lt; 15 Mins
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Lock className="w-4 h-4 text-slate-600" />
                HIPAA & ISO 27001 Certified
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 bg-slate-50/80 border-b border-slate-200/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
              Frequent Support Actions
            </h3>
            <span className="text-xs text-slate-400 font-sans">Select an action to proceed</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
            {quickActions.map((qa, i) => (
              <Link key={i} href={qa.href}>
                <Card className={`h-full bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all cursor-pointer ${qa.highlight ? 'border-blue-300 bg-blue-50/30' : ''}`}>
                  <CardContent className="p-0 flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl shrink-0 ${qa.highlight ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                      <qa.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm font-baskerville">{qa.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-sans">{qa.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2 font-sans">
              HEALTHCARE KNOWLEDGE BASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3 font-baskerville">
              Explore Healthcare Support Categories
            </h2>
            <p className="text-base text-slate-600 max-w-2xl font-sans">
              Select a category below to find step-by-step guides, troubleshooting articles, and technical documentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-sans">
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3 font-baskerville">
              Official Support Channels
            </h2>
            <p className="text-base text-slate-600 font-sans">
              Multiple ways to connect with our dedicated enterprise healthcare support engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {supportChannels.map((channel, i) => (
              <Card key={i} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      <channel.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-sans">
                      {channel.detail}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 font-baskerville">{channel.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">{channel.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3 font-baskerville">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 font-sans">
              Answers to common inquiries regarding AxioVital workflows, EHR sync, and account access.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 font-sans">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-slate-200/90 rounded-xl px-6 bg-white shadow-2xs">
                <AccordionTrigger className="text-base font-bold text-slate-900 py-5 hover:no-underline hover:text-blue-600 text-left font-baskerville">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-sm font-sans">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Knowledge Base CTA Banner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-blue-50/80 border border-blue-200/80 rounded-3xl p-8 md:p-12 text-center shadow-xs">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-500/20">
              <FileText className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4 font-baskerville">
              Explore the AxioVital Knowledge Base
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Access technical documentation covering patient care, doctor portals, EHR integration, HL7/FHIR standards, and HIPAA compliance.
            </p>
            <Button asChild size="lg" className="bg-[#18181b] hover:bg-[#0f172a] text-white font-semibold rounded-lg px-8 h-12 shadow-sm transition-all font-sans">
              <Link href="https://docs.axiovital.quantaforze.com">
                Go to AxioVital Knowledge Base
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

