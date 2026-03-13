import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/new" className="hover:text-foreground">Submit a Ticket</Link></li>
              <li><Link href="/status" className="hover:text-foreground">Platform Status</Link></li>
              <li><Link href="/billing" className="hover:text-foreground">Billing Help</Link></li>
              <li><Link href="/account-recovery" className="hover:text-foreground">Account Recovery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="https://docs.trackcodex.com" className="hover:text-foreground">Documentation</Link></li>
              <li><Link href="https://trackcodex.com/community" className="hover:text-foreground">Community Forum</Link></li>
              <li><Link href="https://trackcodex.com/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/policies" className="hover:text-foreground">Support Policy</Link></li>
              <li><Link href="/policies" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/policies" className="hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Report</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/security" className="hover:text-foreground">Security Vulnerability</Link></li>
              <li><Link href="/abuse" className="hover:text-foreground">Report Abuse</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} TrackCodex Support. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Powered by Quantaforze LLC</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
