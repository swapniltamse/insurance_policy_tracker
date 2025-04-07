// Sample policy data
const policyData = {
    policy1: {
        policyNumber: "LI-12345678",
        insuredName: "John Smith",
        policyType: "Term Life Insurance",
        coverageAmount: "$500,000",
        advisorName: "Sarah Johnson",
        advisorEmail: "sarah.johnson@insurance.com",
        advisorPhone: "(555) 123-4567",
        currentStage: 3,
        stageStartDate: "April 5, 2025",
        estimatedCompletionDate: "April 10, 2025",
        lastUpdated: "April 7, 2025",
        actions: [
            { id: 1, text: "Submit application form", completed: true },
            { id: 2, text: "Complete medical examination", completed: true },
            { id: 3, text: "Review and sign policy documents", completed: false, pending: true },
            { id: 4, text: "Submit first premium payment", completed: false, pending: true }
        ]
    },
    policy2: {
        policyNumber: "LI-87654321",
        insuredName: "Jane Doe",
        policyType: "Whole Life Insurance",
        coverageAmount: "$750,000",
        advisorName: "Michael Brown",
        advisorEmail: "michael.brown@insurance.com",
        advisorPhone: "(555) 987-6543",
        currentStage: 5,
        stageStartDate: "April 2, 2025",
        estimatedCompletionDate: "April 9, 2025",
        lastUpdated: "April 7, 2025",
        actions: [
            { id: 1, text: "Submit application form", completed: true },
            { id: 2, text: "Complete medical examination", completed: true },
            { id: 3, text: "Review and sign policy documents", completed: true },
            { id: 4, text: "Submit first premium payment", completed: false, pending: false }
        ]
    },
    policy3: {
        policyNumber: "LI-24681357",
        insuredName: "Robert Johnson",
        policyType: "Universal Life Insurance",
        coverageAmount: "$1,000,000",
        advisorName: "Emily Davis",
        advisorEmail: "emily.davis@insurance.com",
        advisorPhone: "(555) 456-7890",
        currentStage: 1,
        stageStartDate: "April 6, 2025",
        estimatedCompletionDate: "April 20, 2025",
        lastUpdated: "April 7, 2025",
        actions: [
            { id: 1, text: "Submit application form", completed: true },
            { id: 2, text: "Complete medical examination", completed: false, pending: true },
            { id: 3, text: "Review and sign policy documents", completed: false, pending: true },
            { id: 4, text: "Submit first premium payment", completed: false, pending: true }
        ]
    }
};

// Stage information
const stageInfo = {
    1: {
        title: "Application Submitted",
        description: "Your application has been received and is being prepared for underwriting review. Our team will begin processing your application shortly.",
        icon: "fas fa-file-signature"
    },
    2: {
        title: "Underwriting in Progress",
        description: "Your application is currently being reviewed by our underwriting team. They are evaluating your application details, including your health information and coverage needs.",
        icon: "fas fa-search"
    },
    3: {
        title: "Medical Review",
        description: "The underwriter is currently reviewing the medical information provided in the application and the results from the medical exam. This process typically takes 3-5 business days.",
        icon: "fas fa-heartbeat"
    },
    4: {
        title: "Final Decision",
        description: "The underwriting process is complete, and a final decision has been made on your application. You will be notified of the decision shortly.",
        icon: "fas fa-check-circle"
    },
    5: {
        title: "Policy Issued",
        description: "Your policy has been approved and issued. The policy documents are being prepared and will be sent to you for review and signature.",
        icon: "fas fa-file-contract"
    },
    6: {
        title: "Policy Delivered",
        description: "Your policy documents have been delivered and are awaiting your signature. Please review the documents and sign where indicated.",
        icon: "fas fa-envelope-open-text"
    },
    7: {
        title: "Policy In Force",
        description: "Congratulations! Your policy is now in force. You are fully covered according to the terms of your policy. Thank you for choosing our insurance services.",
        icon: "fas fa-shield-alt"
    }
};
