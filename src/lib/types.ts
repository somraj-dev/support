// Re-export Prisma Enums for convenience in UI
export enum TicketStatus {
  OPEN = "OPEN",
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
  ARCHIVED = "ARCHIVED",
}

export enum TicketSeverity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

export enum TicketCategory {
  ACCOUNT_LOGIN = "ACCOUNT_LOGIN",
  BILLING_PAYMENTS = "BILLING_PAYMENTS",
  REPOSITORIES_GIT = "REPOSITORIES_GIT",
  IDE = "IDE",
  AI_TOOLS = "AI_TOOLS",
  COLLABORATION = "COLLABORATION",
  DEPLOYMENT = "DEPLOYMENT",
  API_INTEGRATION = "API_INTEGRATION",
  SECURITY_ABUSE = "SECURITY_ABUSE",
  LEGAL_POLICY = "LEGAL_POLICY",
  BUG_REPORT = "BUG_REPORT",
  FEATURE_REQUEST = "FEATURE_REQUEST",
  OTHER = "OTHER",
}

export interface User {
  id: string
  email: string
  name: string | null
  avatarUrl: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Ticket {
  id: string
  subject: string
  description: string
  status: TicketStatus
  severity: TicketSeverity
  category: TicketCategory
  
  requesterId: string
  orgId: string | null
  workspaceId: string | null
  assignedTo: string | null
  
  createdAt: Date
  updatedAt: Date

  // Relations for UI
  requester?: User
  messages?: TicketMessage[]
  attachments?: TicketAttachment[]
}

export interface TicketMessage {
  id: string
  ticketId: string
  senderId: string
  body: string
  isInternalNote: boolean
  createdAt: Date

  sender?: User
}

export interface TicketAttachment {
  id: string
  ticketId: string
  fileUrl: string
  fileName: string
  mimeType: string
  size: number
  createdAt: Date
}

export interface Organization {
  id: string
  name: string
  plan: string
}

export interface Workspace {
  id: string
  organizationId: string
  name: string
}
