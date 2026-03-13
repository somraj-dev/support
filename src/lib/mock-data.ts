import {
  Ticket,
  TicketStatus,
  TicketSeverity,
  TicketCategory,
  User,
  TicketMessage,
  Organization,
  Workspace
} from "./types"

const MOCK_DATE = new Date("2026-03-10T10:00:00Z")

export const currentUser: User = {
  id: "user_01",
  email: "developer@example.com",
  name: "Alex Developer",
  avatarUrl: "https://github.com/shadcn.png",
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2026-01-01T00:00:00Z"),
}

export const supportAgent: User = {
  id: "agent_01",
  email: "support@trackcodex.com",
  name: "TrackCodex Support",
  avatarUrl: "https://github.com/github.png",
  createdAt: new Date("2023-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z"),
}

export const mockOrganizations: Organization[] = [
  { id: "org_01", name: "Acme Corp", plan: "PRO" }
]

export const mockWorkspaces: Workspace[] = [
  { id: "ws_01", organizationId: "org_01", name: "Frontend Project" },
  { id: "ws_02", organizationId: "org_01", name: "Backend Services" }
]

export const mockTickets: Ticket[] = [
  {
    id: "TCK-1042",
    subject: "Cannot access billing page",
    description: "When I try to navigate to the billing page in the main console, it shows a 403 Forbidden error even though I am the organization admin.",
    status: TicketStatus.OPEN,
    severity: TicketSeverity.MEDIUM,
    category: TicketCategory.BILLING_PAYMENTS,
    requesterId: currentUser.id,
    orgId: "org_01",
    workspaceId: null,
    assignedTo: null,
    createdAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 30), // 30 mins ago
    updatedAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 30),
    requester: currentUser,
  },
  {
    id: "TCK-0985",
    subject: "TrackCodex IDE fails to load large workspaces",
    description: "I'm trying to open the 'Backend Services' workspace but the IDE spinner just hangs forever. It worked fine yesterday.",
    status: TicketStatus.PENDING,
    severity: TicketSeverity.HIGH,
    category: TicketCategory.IDE,
    requesterId: currentUser.id,
    orgId: "org_01",
    workspaceId: "ws_02",
    assignedTo: supportAgent.id,
    createdAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    updatedAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 2), // 2 hours ago
    requester: currentUser,
  },
  {
    id: "TCK-0153",
    subject: "Question about AI code generation limits",
    description: "What is the monthly limit for AI code completions on the Pro plan?",
    status: TicketStatus.RESOLVED,
    severity: TicketSeverity.LOW,
    category: TicketCategory.AI_TOOLS,
    requesterId: currentUser.id,
    orgId: "org_01",
    workspaceId: null,
    assignedTo: supportAgent.id,
    createdAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 24 * 15), // 15 days ago
    updatedAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
    requester: currentUser,
  }
]

export const mockMessages: TicketMessage[] = [
  {
    id: "msg_01",
    ticketId: "TCK-0985",
    senderId: supportAgent.id,
    body: "Hi Alex, we are currently investigating an issue with our persistent volumes that might be causing this timeout. Could you try restarting the workspace from the dashboard?",
    isInternalNote: false,
    createdAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 2), // 2 hours ago
    sender: supportAgent
  }
]

export const mockIncidents = [
  {
    id: "inc_01",
    title: "Degraded performance in US-East region",
    status: "INVESTIGATING",
    components: ["TrackCodex IDE", "API"],
    updatedAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 15), // 15 mins ago
  }
]
