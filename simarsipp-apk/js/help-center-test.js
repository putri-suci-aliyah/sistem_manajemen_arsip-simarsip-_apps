/**
 * HELP CENTER - TESTING & DEMO UTILITIES
 * File ini berisi function untuk testing dan demo fitur
 */

// ==================== DEMO DATA GENERATOR ====================

/**
 * Generate demo tickets untuk testing
 */
function generateDemoTickets(count = 10) {
    const categories = ['surat', 'peminjaman', 'peralatan', 'akun', 'lainnya'];
    const priorities = ['rendah', 'sedang', 'tinggi'];
    const statuses = ['baru', 'dalam_proses', 'terselesaikan', 'ditutup'];
    const users = [
        { id: 'hmif-001', name: 'HMIF Org', email: 'hmif@university.ac.id' },
        { id: 'hmif-002', name: 'Ketua HMIF', email: 'ketua@university.ac.id' },
        { id: 'hmif-003', name: 'Sekretaris HMIF', email: 'sekretaris@university.ac.id' }
    ];

    const sampleTitles = [
        'Surat tidak bisa didownload',
        'Ruangan peminjaman tidak tersedia',
        'Peralatan rusak saat peminjaman',
        'Lupa password akun',
        'Data profil tidak update',
        'Pengajuan surat ditolak',
        'Peminjaman tidak bisa dihapus',
        'Notifikasi tidak masuk',
        'Login gagal terus menerus',
        'Berkas tidak bisa di-upload'
    ];

    const sampleDescriptions = [
        'Saya sudah mengajukan surat 3 hari lalu tetapi tidak bisa download. Status masih pending.',
        'Ingin meminjam ruang meeting tapi tanggal yang saya inginkan tidak ada di kalender.',
        'Proyektor yang saya pinjam rusak, lampu tidak menyala. Tolong bantuan.',
        'Sudah coba login berkali-kali dengan password yang benar tetapi tetap error.',
        'Update nama dan email tapi tidak tersimpan setelah logout login lagi.',
        'Pengajuan surat saya ditolak tapi tidak dijelaskan alasannya.',
        'Sudah upload semua berkas tapi sistem malah menolak berkas tersebut.',
        'Sudah punya notifikasi enabled tapi tidak ada yang masuk.',
        'Setiap login selalu error 401 tidak authorized.',
        'Saat upload lampiran surat, sistem muncul error dan file tidak terupload.'
    ];

    const tickets = [];

    for (let i = 0; i < count; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        const createdDaysAgo = Math.floor(Math.random() * 30);
        
        const ticket = {
            id: generateTicketId(),
            title: sampleTitles[Math.floor(Math.random() * sampleTitles.length)],
            category: categories[Math.floor(Math.random() * categories.length)],
            priority: priorities[Math.floor(Math.random() * priorities.length)],
            description: sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            createdAt: new Date(Date.now() - createdDaysAgo * 24 * 60 * 60 * 1000).toISOString(),
            responses: generateDemoResponses(Math.random() > 0.5 ? Math.floor(Math.random() * 3) + 1 : 0),
            attachment: null
        };

        tickets.push(ticket);
    }

    return tickets;
}

/**
 * Generate demo responses
 */
function generateDemoResponses(count = 0) {
    const responses = [];
    const messages = [
        'Baik, kami sudah menerima laporan Anda. Tim kami sedang menginvestigasi masalah ini.',
        'Kami sudah menemukan masalahnya. Akan segera kami perbaiki dalam 24 jam ke depan.',
        'Masalah Anda sudah kami selesaikan. Silakan coba login kembali.',
        'File Anda sudah kami proses. Silakan download surat dari menu download.',
        'Maaf atas kesalahpahamannya. Berikut penjelasan lengkapnya...',
        'Kami akan menghubungi Anda untuk memastikan masalah sudah teratasi.',
        'Terima kasih atas laporan Anda. Ini sangat membantu kami meningkatkan layanan.',
    ];

    for (let i = 0; i < count; i++) {
        responses.push({
            createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
            message: messages[Math.floor(Math.random() * messages.length)]
        });
    }

    return responses;
}

/**
 * Populate localStorage dengan demo data
 */
function populateDemoData(ticketCount = 15) {
    const tickets = generateDemoTickets(ticketCount);
    saveTicketsToStorage(tickets);
    console.log(`✅ Populated ${ticketCount} demo tickets`);
    return tickets;
}

/**
 * Clear semua data
 */
function clearAllData() {
    localStorage.removeItem('simarsip_tickets');
    console.log('✅ All data cleared');
}

/**
 * Reset ke demo data default
 */
function resetToDefault() {
    clearAllData();
    populateDemoData(10);
    console.log('✅ Reset to default demo data');
}

// ==================== TESTING FUNCTIONS ====================

/**
 * Test create new ticket
 */
function testCreateTicket() {
    console.log('🧪 Testing: Create Ticket');
    
    const testTicket = {
        id: generateTicketId(),
        title: 'Test Ticket - Surat tidak bisa didownload',
        category: 'surat',
        priority: 'tinggi',
        description: 'Ini adalah test ticket untuk validasi sistem',
        status: 'baru',
        userId: getCurrentUserId(),
        createdAt: new Date().toISOString(),
        responses: [],
        attachment: null
    };

    const tickets = getTicketsFromStorage();
    tickets.push(testTicket);
    saveTicketsToStorage(tickets);

    console.log('✅ Test ticket created:', testTicket);
    return testTicket;
}

/**
 * Test update ticket status
 */
function testUpdateTicketStatus(ticketId, newStatus) {
    console.log(`🧪 Testing: Update Ticket Status - ${ticketId}`);
    
    const tickets = getTicketsFromStorage();
    const ticket = tickets.find(t => t.id === ticketId);

    if (!ticket) {
        console.error('❌ Ticket not found');
        return;
    }

    const oldStatus = ticket.status;
    ticket.status = newStatus;
    saveTicketsToStorage(tickets);

    console.log(`✅ Status updated: ${oldStatus} → ${newStatus}`);
    return ticket;
}

/**
 * Test add response to ticket
 */
function testAddResponse(ticketId, message) {
    console.log(`🧪 Testing: Add Response - ${ticketId}`);
    
    const tickets = getTicketsFromStorage();
    const ticket = tickets.find(t => t.id === ticketId);

    if (!ticket) {
        console.error('❌ Ticket not found');
        return;
    }

    const response = {
        createdAt: new Date().toISOString(),
        message: message || 'Test response dari BAA'
    };

    if (!ticket.responses) {
        ticket.responses = [];
    }

    ticket.responses.push(response);
    saveTicketsToStorage(tickets);

    console.log('✅ Response added:', response);
    return response;
}

/**
 * Test search FAQ
 */
function testSearchFAQ(query) {
    console.log(`🧪 Testing: Search FAQ - "${query}"`);
    
    const results = faqData.filter(faq => 
        faq.title.toLowerCase().includes(query.toLowerCase()) ||
        faq.category.toLowerCase().includes(query.toLowerCase()) ||
        faq.content.toLowerCase().includes(query.toLowerCase())
    );

    console.log(`✅ Found ${results.length} results:`, results);
    return results;
}

/**
 * Test validate ticket
 */
function testValidateTicket() {
    console.log('🧪 Testing: Validate Ticket');
    
    // Valid ticket
    const validTicket = {
        title: 'Test Ticket',
        category: 'surat',
        priority: 'tinggi',
        description: 'Test description'
    };

    // Invalid ticket
    const invalidTicket = {
        title: '',
        category: '',
        priority: 'tinggi',
        description: ''
    };

    console.log('Valid ticket result:', validateTicket(validTicket));
    console.log('Invalid ticket result:', validateTicket(invalidTicket));
}

// ==================== PERFORMANCE TESTING ====================

/**
 * Test performance: Load many tickets
 */
function testPerformanceLoadTickets(count = 1000) {
    console.log(`🧪 Performance Test: Loading ${count} tickets`);
    
    const startTime = performance.now();
    
    // Generate data
    const tickets = generateDemoTickets(count);
    saveTicketsToStorage(tickets);
    
    // Load data
    const loaded = getTicketsFromStorage();
    
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);

    console.log(`✅ Completed in ${duration}ms`);
    console.log(`Average: ${(duration / count).toFixed(4)}ms per ticket`);

    return {
        count: count,
        duration: duration,
        avgPerItem: (duration / count).toFixed(4)
    };
}

/**
 * Test performance: Filter tickets
 */
function testPerformanceFilterTickets() {
    console.log('🧪 Performance Test: Filter Tickets');
    
    const tickets = getTicketsFromStorage();
    const startTime = performance.now();

    // Filter by status
    const filtered = tickets.filter(t => t.status === 'baru');

    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);

    console.log(`✅ Filtered ${filtered.length} tickets in ${duration}ms`);

    return {
        itemsFiltered: filtered.length,
        duration: duration
    };
}

// ==================== DATA VALIDATION ====================

/**
 * Validate all data integrity
 */
function validateDataIntegrity() {
    console.log('🧪 Testing: Data Integrity');
    
    const tickets = getTicketsFromStorage();
    const errors = [];

    tickets.forEach((ticket, index) => {
        if (!ticket.id) errors.push(`Ticket ${index}: Missing ID`);
        if (!ticket.title) errors.push(`Ticket ${ticket.id}: Missing title`);
        if (!ticket.category) errors.push(`Ticket ${ticket.id}: Missing category`);
        if (!ticket.status) errors.push(`Ticket ${ticket.id}: Missing status`);
        if (!ticket.userId) errors.push(`Ticket ${ticket.id}: Missing userId`);
        if (!ticket.createdAt) errors.push(`Ticket ${ticket.id}: Missing createdAt`);
    });

    if (errors.length === 0) {
        console.log(`✅ All ${tickets.length} tickets are valid`);
    } else {
        console.warn(`⚠️ Found ${errors.length} errors:`, errors);
    }

    return {
        totalTickets: tickets.length,
        errors: errors,
        isValid: errors.length === 0
    };
}

// ==================== CONSOLE COMMANDS ====================

/**
 * Print help menu untuk test commands
 */
function helpTest() {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║         HELP CENTER - TEST COMMANDS                            ║
╚════════════════════════════════════════════════════════════════╝

📊 DATA MANAGEMENT:
  • populateDemoData(count)     - Generate demo tickets
  • clearAllData()              - Delete all data
  • resetToDefault()            - Reset to 10 demo tickets
  • validateDataIntegrity()     - Check data validity

🧪 FUNCTIONAL TESTS:
  • testCreateTicket()          - Test create ticket
  • testUpdateTicketStatus()    - Test status update
  • testAddResponse()           - Test add response
  • testSearchFAQ()             - Test FAQ search
  • testValidateTicket()        - Test validation

⚡ PERFORMANCE TESTS:
  • testPerformanceLoadTickets(count)  - Load test
  • testPerformanceFilterTickets()     - Filter test

📋 UTILITIES:
  • helpTest()                  - Show this menu
  • getTicketsFromStorage()     - Get all tickets
  • formatDate(date)            - Format date
  • formatStatus(status)        - Format status

EXAMPLES:
  > populateDemoData(20)         // Generate 20 demo tickets
  > const tickets = getTicketsFromStorage()
  > testCreateTicket()           // Create and log test ticket
  > testPerformanceLoadTickets(500)  // Test with 500 items
    `);
}

// ==================== AUTO-RUN SETUP ====================

/**
 * Setup default demo data jika localStorage kosong
 */
function initializeDemo() {
    const existing = getTicketsFromStorage();
    if (existing.length === 0) {
        console.log('📝 Initializing demo data...');
        populateDemoData(10);
        console.log('✅ Demo data initialized');
    }
}

// Run initialization jika development mode
if (typeof window !== 'undefined') {
    window.helpTest = helpTest;
    window.populateDemoData = populateDemoData;
    window.clearAllData = clearAllData;
    window.resetToDefault = resetToDefault;
    window.testCreateTicket = testCreateTicket;
    window.testUpdateTicketStatus = testUpdateTicketStatus;
    window.testAddResponse = testAddResponse;
    window.testSearchFAQ = testSearchFAQ;
    window.testValidateTicket = testValidateTicket;
    window.testPerformanceLoadTickets = testPerformanceLoadTickets;
    window.testPerformanceFilterTickets = testPerformanceFilterTickets;
    window.validateDataIntegrity = validateDataIntegrity;
    window.initializeDemo = initializeDemo;

    // Print help menu untuk development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('\n💡 Tip: Type helpTest() to see available test commands\n');
    }
}

console.log('✅ Help Center Test Utilities Loaded');
