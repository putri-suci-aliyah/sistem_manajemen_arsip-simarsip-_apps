/**
 * HELP CENTER CONFIGURATION
 * File konfigurasi untuk Pusat Bantuan
 * Edit file ini untuk customize sistem
 */

// ==================== USER CONFIGURATION ====================

const HELP_CENTER_CONFIG = {
    // System Settings
    system: {
        appName: "SIMARSIP APP",
        version: "1.0.0",
        locale: "id-ID",  // Bahasa: id-ID, en-US
    },

    // User Roles
    roles: {
        user: "hmif",      // Role HMIF
        admin: "baa",      // Role BAA (Admin)
    },

    // Notification Settings
    notifications: {
        enabled: true,
        duration: 3000,  // milliseconds
        position: "bottom-right",  // top-left, top-right, bottom-left, bottom-right
    },

    // Ticket Settings
    ticket: {
        autoAssignPriority: false,  // Auto assign priority based on issue
        enableAttachments: true,
        maxFileSize: 5242880,  // 5MB in bytes
        allowedFileTypes: ["image/*", ".pdf"],
        
        // Status definitions
        statuses: {
            "baru": { label: "Baru", color: "#1e73ff", icon: "mail_outline" },
            "dalam_proses": { label: "Dalam Proses", color: "#ff9800", icon: "hourglass_bottom" },
            "terselesaikan": { label: "Terselesaikan", color: "#28a745", icon: "check_circle" },
            "ditutup": { label: "Ditutup", color: "#9e9e9e", icon: "close_circle" }
        },
        
        // Priority definitions
        priorities: {
            "rendah": { label: "Rendah", color: "#28a745", value: 1 },
            "sedang": { label: "Sedang", color: "#ffc107", value: 2 },
            "tinggi": { label: "Tinggi", color: "#dc3545", value: 3 }
        },

        // Category definitions
        categories: {
            "surat": { label: "Masalah Surat", icon: "description" },
            "peminjaman": { label: "Masalah Peminjaman", icon: "home" },
            "peralatan": { label: "Masalah Peralatan", icon: "build" },
            "akun": { label: "Masalah Akun", icon: "account_circle" },
            "lainnya": { label: "Lainnya", icon: "help_outline" }
        }
    },

    // FAQ Settings
    faq: {
        enableSearch: true,
        enableCategories: true,
        itemsPerPage: 10,
        
        // Category definitions
        categories: {
            "semua": { label: "Semua", icon: "apps" },
            "surat": { label: "Surat", icon: "description" },
            "peminjaman": { label: "Peminjaman", icon: "home" },
            "peralatan": { label: "Peralatan", icon: "build" },
            "akun": { label: "Akun", icon: "account_circle" }
        }
    },

    // Email/Notification Templates
    templates: {
        ticketCreated: {
            subject: "Tiket Anda Telah Dibuat",
            body: "Tiket #{ticketId} telah berhasil dibuat. Kami akan segera meresponnya."
        },
        ticketUpdated: {
            subject: "Tiket #{ticketId} Diupdate",
            body: "BAA telah merespons tiket Anda. Lihat detail: {link}"
        },
        ticketResolved: {
            subject: "Tiket #{ticketId} Terselesaikan",
            body: "Masalah Anda telah terselesaikan. Terima kasih telah menggunakan layanan kami."
        }
    },

    // UI Settings
    ui: {
        theme: "light",  // light, dark
        primaryColor: "#1e73ff",
        successColor: "#28a745",
        warningColor: "#ffc107",
        dangerColor: "#dc3545",
        
        // Modal settings
        modal: {
            backgroundColor: "#fff",
            borderRadius: "16px",
            maxWidth: "500px",
            animationDuration: 300  // milliseconds
        },

        // Button settings
        buttons: {
            size: "medium",  // small, medium, large
            rounded: true,
        }
    },

    // Storage Settings
    storage: {
        type: "localStorage",  // localStorage, sessionStorage
        prefix: "simarsip_",
        keys: {
            tickets: "simarsip_tickets",
            settings: "simarsip_settings",
            cache: "simarsip_cache"
        },
        
        // Auto-cleanup settings
        autoCleanup: true,
        cleanupInterval: 7,  // days
        deleteClosedAfter: 30  // days
    },

    // Admin Settings
    admin: {
        // Response time SLA (dalam jam)
        sla: {
            "tinggi": 2,
            "sedang": 24,
            "rendah": 72
        },

        // Auto-assignment
        autoAssign: false,
        assignToTeam: true,

        // Escalation settings
        escalation: {
            enabled: true,
            escalateAfter: 48,  // hours
            escalateToManager: true
        },

        // Report generation
        reports: {
            enabled: true,
            frequency: "weekly",  // daily, weekly, monthly
            email: ["admin@university.ac.id"]
        }
    }
};

// ==================== THEME CUSTOMIZATION ====================

const THEMES = {
    light: {
        primary: "#1e73ff",
        secondary: "#6c757d",
        success: "#28a745",
        warning: "#ffc107",
        danger: "#dc3545",
        
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#1a1a1a",
        textSecondary: "#666666",
        
        border: "#e0e6f0",
        shadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
    },
    dark: {
        primary: "#0f52d4",
        secondary: "#a8b3c1",
        success: "#1e7e34",
        warning: "#cc9900",
        danger: "#cc3333",
        
        background: "#1a1a1a",
        surface: "#2d2d2d",
        text: "#e0e0e0",
        textSecondary: "#999999",
        
        border: "#404040",
        shadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
    }
};

// ==================== FAQ DATA TEMPLATE ====================

const FAQ_TEMPLATE = {
    id: null,           // Auto-generated or manual
    title: "",         // FAQ title
    category: "lainnya", // Category: surat, peminjaman, peralatan, akun
    content: "",       // FAQ answer (supports multi-line)
    createdAt: null,   // Auto-generated
    updatedAt: null,   // Auto-generated
    views: 0,          // Tracking FAQ views
    helpful: 0,        // Helpful counter
    notHelpful: 0      // Not helpful counter
};

// ==================== TICKET DATA TEMPLATE ====================

const TICKET_TEMPLATE = {
    id: null,           // Auto-generated
    title: "",          // Ticket title
    category: "",       // Ticket category
    priority: "rendah", // Priority: rendah, sedang, tinggi
    description: "",    // Detailed description
    status: "baru",     // Status: baru, dalam_proses, terselesaikan, ditutup
    
    userId: null,       // User ID
    userName: "",       // User name
    userEmail: "",      // User email
    
    assignedTo: null,   // Admin assigned to ticket
    assignedName: "",   // Admin name
    
    createdAt: null,    // Auto-generated
    updatedAt: null,    // Auto-generated
    closedAt: null,     // Closed timestamp
    
    responses: [],      // Array of responses
    
    attachment: {
        fileName: null,
        fileSize: null,
        filePath: null,
        uploadedAt: null
    },
    
    // Metadata
    metadata: {
        slaBreached: false,
        escalated: false,
        resolution: {
            time: null,
            rating: null,
            feedback: ""
        }
    }
};

// ==================== RESPONSE TEMPLATE ====================

const RESPONSE_TEMPLATE = {
    id: null,           // Auto-generated
    ticketId: null,     // Parent ticket ID
    message: "",        // Response message
    
    fromAdmin: true,    // Is from admin or user?
    adminId: null,      // Admin who responded
    adminName: "",      // Admin name
    
    createdAt: null,    // Auto-generated
    
    // Status update with response
    statusUpdate: {
        from: null,
        to: null
    }
};

// ==================== ANALYTICS EVENTS ====================

const ANALYTICS_EVENTS = {
    FAQ_VIEWED: "faq_viewed",
    FAQ_SEARCHED: "faq_searched",
    FAQ_HELPFUL: "faq_helpful",
    
    TICKET_CREATED: "ticket_created",
    TICKET_OPENED: "ticket_opened",
    TICKET_RESPONDED: "ticket_responded",
    TICKET_CLOSED: "ticket_closed",
    
    ADMIN_LOGGED_IN: "admin_logged_in",
    ADMIN_RESPONSE_SENT: "admin_response_sent",
    ADMIN_TICKET_ASSIGNED: "admin_ticket_assigned"
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Get config value by path
 * Usage: getConfig('ticket.statuses.baru')
 */
function getConfig(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], HELP_CENTER_CONFIG);
}

/**
 * Set config value by path
 * Usage: setConfig('ui.primaryColor', '#ff0000')
 */
function setConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const obj = keys.reduce((obj, key) => obj[key] ||= {}, HELP_CENTER_CONFIG);
    obj[lastKey] = value;
}

/**
 * Get localized string
 */
function getLabel(key) {
    const config = HELP_CENTER_CONFIG;
    return eval(`config.${key}.label`) || key;
}

/**
 * Validate ticket data
 */
function validateTicket(ticket) {
    const errors = [];
    
    if (!ticket.title || ticket.title.trim().length === 0) {
        errors.push("Judul tidak boleh kosong");
    }
    if (!ticket.category) {
        errors.push("Kategori harus dipilih");
    }
    if (!ticket.description || ticket.description.trim().length === 0) {
        errors.push("Deskripsi tidak boleh kosong");
    }
    
    return {
        valid: errors.length === 0,
        errors: errors
    };
}

/**
 * Validate FAQ data
 */
function validateFAQ(faq) {
    const errors = [];
    
    if (!faq.title || faq.title.trim().length === 0) {
        errors.push("Judul FAQ tidak boleh kosong");
    }
    if (!faq.content || faq.content.trim().length === 0) {
        errors.push("Konten FAQ tidak boleh kosong");
    }
    
    return {
        valid: errors.length === 0,
        errors: errors
    };
}

// ==================== EXPORT ====================

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HELP_CENTER_CONFIG,
        THEMES,
        FAQ_TEMPLATE,
        TICKET_TEMPLATE,
        RESPONSE_TEMPLATE,
        ANALYTICS_EVENTS,
        getConfig,
        setConfig,
        getLabel,
        validateTicket,
        validateFAQ
    };
}
