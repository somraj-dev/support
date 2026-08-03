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
  email: "dr.jenkins@axiovital-health.com",
  name: "Dr. Sarah Jenkins",
  avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80",
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2026-01-01T00:00:00Z"),
}

export const supportAgent: User = {
  id: "agent_01",
  email: "support@axiovital.quantaforze.com",
  name: "AxioVital Healthcare Support",
  avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
  createdAt: new Date("2023-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z"),
}

export const mockOrganizations: Organization[] = [
  { id: "org_01", name: "Metro General Health System", plan: "ENTERPRISE" }
]

export const mockWorkspaces: Workspace[] = [
  { id: "ws_01", organizationId: "org_01", name: "Cardiology Department" },
  { id: "ws_02", organizationId: "org_01", name: "Outpatient Clinic A" }
]

export const mockTickets: Ticket[] = [
  {
    id: "AXIO-1042",
    subject: "Insurance eligibility check delay during patient check-in",
    description: "When staff attempt to verify real-time coverage for emergency admissions, the API request times out after 30 seconds.",
    status: TicketStatus.OPEN,
    severity: TicketSeverity.MEDIUM,
    category: TicketCategory.BILLING_INSURANCE,
    requesterId: currentUser.id,
    orgId: "org_01",
    workspaceId: null,
    assignedTo: null,
    createdAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 30), // 30 mins ago
    updatedAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 30),
    requester: currentUser,
  },
  {
    id: "AXIO-0985",
    subject: "EHR sync delay for lab results in Outpatient Clinic A",
    description: "Pathology results uploaded from Central Lab are taking up to 45 minutes to reflect in the patient's EHR profile.",
    status: TicketStatus.PENDING,
    severity: TicketSeverity.HIGH,
    category: TicketCategory.EHR_RECORDS,
    requesterId: currentUser.id,
    orgId: "org_01",
    workspaceId: "ws_02",
    assignedTo: supportAgent.id,
    createdAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    updatedAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 2), // 2 hours ago
    requester: currentUser,
  },
  {
    id: "AXIO-0153",
    subject: "Question regarding AXIO Smart Card NFC tap reader setup",
    description: "What are the supported hardware specifications for setting up AXIO Smart Card reader terminals in hospital reception kiosks?",
    status: TicketStatus.RESOLVED,
    severity: TicketSeverity.LOW,
    category: TicketCategory.AXIO_SMART_CARD,
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
    ticketId: "AXIO-0985",
    senderId: supportAgent.id,
    body: "Hello Dr. Jenkins, our team is currently investigating a temporary queue backlog in the HL7/FHIR sync gateway. We have scaled up processing workers to clear the pending lab records.",
    isInternalNote: false,
    createdAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 60 * 2), // 2 hours ago
    sender: supportAgent
  }
]

export const mockIncidents = [
  {
    id: "inc_01",
    title: "Intermittent delays in FHIR Lab Result Sync Gateway",
    status: "MONITORING",
    components: ["EHR Sync API", "Lab Diagnostics Gateway"],
    updatedAt: new Date(MOCK_DATE.getTime() - 1000 * 60 * 15), // 15 mins ago
  }
]
