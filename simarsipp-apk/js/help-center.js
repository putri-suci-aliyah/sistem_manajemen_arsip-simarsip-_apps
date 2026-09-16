// ==================== HELP CENTER DATA & LOGIC ====================

// FAQ Data
const faqData = [
    {
        id: 1,
        title: "Bagaimana cara membuat pengajuan surat?",
        category: "surat",
        content: "Untuk membuat pengajuan surat, ikuti langkah-langkah berikut:\n1. Masuk ke aplikasi dengan akun HMIF Anda\n2. Pilih menu 'Surat' di halaman utama\n3. Klik tombol 'Buat Pengajuan Baru'\n4. Isi formulir dengan data yang diperlukan\n5. Unggah berkas yang diperlukan jika ada\n6. Klik 'Kirim' untuk mengirimkan pengajuan\n7. Status pengajuan dapat dipantau di menu 'Riwayat'"
    },
    {
        id: 2,
        title: "Berapa lama waktu verifikasi surat?",
        category: "surat",
        content: "Waktu verifikasi surat biasanya berkisar 1-3 hari kerja, tergantung pada jenis surat dan beban kerja tim verifikator. Untuk surat yang mendesak, Anda dapat menghubungi BAA melalui fitur Ticketing dengan menyebutkan prioritas tinggi."
    },
    {
        id: 3,
        title: "Apa yang harus dilakukan jika pengajuan surat ditolak?",
        category: "surat",
        content: "Jika pengajuan surat Anda ditolak, Anda akan menerima notifikasi yang berisi alasan penolakan. Anda dapat:\n1. Merevisi pengajuan sesuai dengan catatan dari verifikator\n2. Mengunggah berkas yang benar jika ada kesalahan\n3. Mengajukan ulang dengan data yang sudah diperbaiki\n\nJika Anda masih tidak yakin, silakan hubungi kami melalui fitur Ticketing."
    },
    {
        id: 4,
        title: "Bagaimana cara meminjam peralatan?",
        category: "peminjaman",
        content: "Langkah-langkah meminjam peralatan:\n1. Akses menu 'Peminjaman' dari halaman utama\n2. Cari peralatan yang ingin Anda pinjam\n3. Klik tombol 'Pinjam' pada peralatan tersebut\n4. Isi tanggal peminjamandengan dan estimasi tanggal pengembalian\n5. Sertakan keperluan peminjaman (untuk apa)\n6. Klik 'Kirim Permintaan'\n7. Tunggu verifikasi dari BAA"
    },
    {
        id: 5,
        title: "Apa yang terjadi jika saya lupa mengembalikan peralatan tepat waktu?",
        category: "peminjaman",
        content: "Jika Anda lupa mengembalikan peralatan tepat waktu:\n1. Anda akan menerima pengingat dari sistem\n2. Untuk peminjaman yang terlambat, hubungi BAA segera melalui Ticketing\n3. BAA akan membantu mengatur jadwal pengembalian baru\n4. Perhatian: Keterlambatan yang berulang dapat membatasi akses peminjaman Anda di masa depan"
    },
    {
        id: 6,
        title: "Bagaimana jika peralatan yang dipinjam rusak?",
        category: "peminjaman",
        content: "Jika peralatan yang Anda pinjam mengalami kerusakan:\n1. Segera laporkan ke BAA melalui fitur Ticketing\n2. Sertakan foto atau video kondisi peralatan\n3. Jelaskan bagaimana kerusakan tersebut terjadi\n4. BAA akan melakukan inspeksi lebih lanjut\n5. Penggantian atau perbaikan akan dikoordinasikan bersama"
    },
    {
        id: 7,
        title: "Bagaimana cara melihat daftar peralatan yang tersedia?",
        category: "peralatan",
        content: "Untuk melihat daftar peralatan yang tersedia:\n1. Klik menu 'Peralatan' di halaman utama\n2. Anda akan melihat daftar semua peralatan dengan status ketersediaan\n3. Peralatan dengan status 'Tersedia' dapat langsung dipinjam\n4. Gunakan fitur pencarian untuk menemukan peralatan tertentu\n5. Klik pada peralatan untuk melihat detail lengkap termasuk spesifikasi dan ketentuan"
    },
    {
        id: 8,
        title: "Apakah ada biaya peminjaman?",
        category: "peralatan",
        content: "Peminjaman peralatan untuk kegiatan HMIF adalah gratis. Namun, pastikan untuk:\n1. Mengembalikan peralatan dalam kondisi baik\n2. Mengembalikan tepat waktu sesuai jadwal yang telah ditentukan\n3. Melaporkan jika ada kerusakan sesegera mungkin\n\nJika terdapat kerusakan yang disengaja, BAA dapat menetapkan biaya perbaikan atau penggantian."
    },
    {
        id: 9,
        title: "Bagaimana cara mengubah profil akun?",
        category: "akun",
        content: "Untuk mengubah profil akun Anda:\n1. Klik pada chip profil pengguna di bagian atas halaman (menunjukkan nama dan ikon)\n2. Halaman profil akan terbuka\n3. Klik tombol 'Edit Profil'\n4. Ubah informasi yang diperlukan (nama, email, nomor telepon, dsb)\n5. Unggah foto profil baru jika diinginkan\n6. Klik 'Simpan Perubahan'\n7. Perubahan akan tersimpan secara otomatis"
    },
    {
        id: 10,
        title: "Bagaimana cara mengganti password?",
        category: "akun",
        content: "Untuk mengganti password akun Anda:\n1. Masuk ke halaman Profil\n2. Cari bagian 'Keamanan' atau 'Pengaturan Password'\n3. Klik 'Ubah Password'\n4. Masukkan password lama Anda\n5. Masukkan password baru (minimal 8 karakter)\n6. Konfirmasi password baru\n7. Klik 'Simpan'\n8. Pastikan password yang baru kuat dan mudah diingat (kombinasi huruf, angka, dan simbol)"
    },
    {
        id: 11,
        title: "Apa yang harus dilakukan jika lupa password?",
        category: "akun",
        content: "Jika Anda lupa password:\n1. Di halaman login, klik 'Lupa Password?'\n2. Masukkan alamat email yang terdaftar di akun Anda\n3. Kami akan mengirimkan link reset password ke email Anda\n4. Buka link tersebut sebelum waktu kadaluarsa (30 menit)\n5. Masukkan password baru Anda\n6. Klik 'Reset Password'\n7. Login dengan password baru Anda\n\nJika Anda tidak menerima email, periksa folder spam atau hubungi BAA melalui Ticketing."
    },
    {
        id: 12,
        title: "Bagaimana cara logout dari aplikasi?",
        category: "akun",
        content: "Untuk logout dari aplikasi:\n1. Klik pada chip profil pengguna di bagian atas halaman\n2. Scroll ke bawah pada halaman profil\n3. Klik tombol 'Logout'\n4. Sistem akan mengkonfirmasi logout Anda\n5. Klik 'Konfirmasi' untuk menyelesaikan logout\n6. Anda akan diarahkan kembali ke halaman login\n\nPastikan untuk selalu logout jika menggunakan perangkat bersama untuk keamanan akun Anda."
    }
];

// Get current page type
function getCurrentPageType() {
    const currentPage = document.querySelector('.page');
    if (currentPage.classList.contains('page-help-center')) {
        return 'user';
    } else if (currentPage.classList.contains('page-admin-dashboard')) {
        return 'admin';
    }
    return null;
}

// ==================== USER - HELP CENTER PAGE ====================

function initUserPage() {
    if (getCurrentPageType() !== 'user') return;

    loadFAQ();
    loadUserTickets();
    setupEventListeners();
    updateNotificationBadges();
}

// FAQ Functions
function loadFAQ() {
    displayFAQ('semua');
}

function displayFAQ(category) {
    const container = document.getElementById('faqContainer');
    let filteredFAQ = faqData;

    if (category !== 'semua') {
        filteredFAQ = faqData.filter(faq => faq.category === category);
    }

    container.innerHTML = '';

    if (filteredFAQ.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Tidak ada FAQ untuk kategori ini</p></div>';
        return;
    }

    filteredFAQ.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-header">
                <div class="faq-title-section">
                    <h3 class="faq-title">${faq.title}</h3>
                    <span class="faq-category-badge">${faq.category}</span>
                </div>
                <i class="material-icons faq-expand-icon">expand_more</i>
            </div>
            <div class="faq-content">
                <div class="faq-content-text">${faq.content.split('\n').map(line => line.trim()).filter(line => !line.match(/^\d\./)).join('</div><div class="faq-content-text">')}</div>
            </div>
        `;

        faqItem.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        container.appendChild(faqItem);
    });
}

function loadUserTickets() {
    const tickets = getTicketsFromStorage();
    const userTickets = tickets.filter(t => t.userId === getCurrentUserId());
    displayUserTickets(userTickets);
}

function displayUserTickets(tickets) {
    const container = document.getElementById('ticketsContainer');
    container.innerHTML = '';

    if (tickets.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="material-icons">support_agent</i>
                <div class="empty-state-title">Belum Ada Tiket</div>
                <div class="empty-state-text">Buat tiket pertama Anda untuk menghubungi BAA</div>
            </div>
        `;
        return;
    }

    tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    tickets.forEach(ticket => {
        const ticketItem = document.createElement('div');
        ticketItem.className = 'ticket-item';
        ticketItem.innerHTML = `
            <div class="ticket-item-icon">
                <i class="material-icons">${getTicketIcon(ticket.status)}</i>
            </div>
            <div class="ticket-item-content">
                <div class="ticket-item-header">
                    <div>
                        <p class="ticket-title">${ticket.title}</p>
                        <span class="ticket-id">Tiket #${ticket.id}</span>
                    </div>
                    <span class="ticket-status ${ticket.status}">${formatStatus(ticket.status)}</span>
                </div>
                <div class="ticket-meta">
                    <span class="ticket-meta-item">
                        <i class="material-icons">category</i>
                        ${ticket.category}
                    </span>
                    <span class="ticket-meta-item">
                        <i class="material-icons">flag</i>
                        <span class="ticket-priority-badge ${ticket.priority}">${ticket.priority}</span>
                    </span>
                    <span class="ticket-meta-item">
                        <i class="material-icons">schedule</i>
                        ${formatDate(ticket.createdAt)}
                    </span>
                </div>
            </div>
        `;

        ticketItem.addEventListener('click', () => openTicketModal(ticket));
        container.appendChild(ticketItem);
    });

    // Update badges
    updateNotificationBadges();
}

// Notification Badges
function updateNotificationBadges() {
    const tickets = getTicketsFromStorage();
    const userTickets = tickets.filter(t => t.userId === getCurrentUserId());
    
    // Count unread responses
    let unreadsCount = 0;
    userTickets.forEach(ticket => {
        if (ticket.responses && ticket.responses.length > 0) {
            // Count responses yang belum dibaca (bisa ditambah field 'read' nanti)
            unreadsCount += ticket.responses.length;
        }
    });

    const badge = document.getElementById('ticketBadge');
    if (badge) {
        if (unreadsCount > 0) {
            badge.textContent = unreadsCount > 99 ? '99+' : unreadsCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Ticket Management
function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.help-tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            switchTab(tab);
            
            // Clear badge saat membuka tab ticketing
            if (tab === 'tickets') {
                const badge = document.getElementById('ticketBadge');
                if (badge) {
                    badge.style.display = 'none';
                }
            }
        });
    });

    // Category filtering
    document.querySelectorAll('.faq-category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.faq-category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            displayFAQ(category);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('faqSearchInput');
    const searchClear = document.getElementById('searchClear');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            searchClear.style.display = query ? 'flex' : 'none';
            searchFAQ(query);
        });

        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            this.style.display = 'none';
            displayFAQ('semua');
        });
    }

    // Form submission
    const form = document.getElementById('newTicketForm');
    if (form) {
        form.addEventListener('submit', handleNewTicketSubmit);
    }

    // File input
    const fileInput = document.getElementById('ticketAttachment');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            const fileName = document.getElementById('fileName');
            if (this.files.length > 0) {
                fileName.textContent = `File dipilih: ${this.files[0].name}`;
            } else {
                fileName.textContent = '';
            }
        });
    }
}

function switchTab(tab) {
    document.querySelectorAll('.help-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.help-tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`.help-tab-btn[data-tab="${tab}"]`).classList.add('active');
    document.querySelector(`.help-tab-content[data-tab="${tab}"]`).classList.add('active');
}

function searchFAQ(query) {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const title = item.querySelector('.faq-title').textContent.toLowerCase();
        const category = item.querySelector('.faq-category-badge').textContent.toLowerCase();
        if (title.includes(query) || category.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function handleNewTicketSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('ticketTitle').value;
    const category = document.getElementById('ticketCategory').value;
    const priority = document.querySelector('input[name="ticketPriority"]:checked').value;
    const description = document.getElementById('ticketDescription').value;
    const fileInput = document.getElementById('ticketAttachment');

    let attachmentData = null;

    // Process file attachment jika ada
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            attachmentData = {
                name: file.name,
                size: file.size,
                type: file.type,
                data: event.target.result  // base64 encoded
            };

            // Simpan tiket dengan attachment
            saveTicketWithAttachment(title, category, priority, description, attachmentData);
        };

        reader.readAsDataURL(file);
    } else {
        // Simpan tanpa attachment
        saveTicketWithAttachment(title, category, priority, description, null);
    }
}

function saveTicketWithAttachment(title, category, priority, description, attachmentData) {
    const ticket = {
        id: generateTicketId(),
        title,
        category,
        priority,
        description,
        status: 'baru',
        userId: getCurrentUserId(),
        createdAt: new Date().toISOString(),
        responses: [],
        attachment: attachmentData
    };

    const tickets = getTicketsFromStorage();
    tickets.push(ticket);
    saveTicketsToStorage(tickets);

    showNotification('Tiket berhasil dibuat!', 'success');
    
    document.getElementById('newTicketForm').reset();
    document.getElementById('fileName').textContent = '';
    loadUserTickets();
}

function openTicketModal(ticket) {
    const modal = document.getElementById('ticketModal');
    const title = document.getElementById('ticketModalTitle');
    const body = document.getElementById('ticketModalBody');

    title.textContent = `Tiket #${ticket.id}`;

    let responsesHTML = '';
    if (ticket.responses && ticket.responses.length > 0) {
        ticket.responses.forEach(response => {
            responsesHTML += `
                <div style="background: #f9fafb; padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                    <div style="font-size: 12px; color: #999; margin-bottom: 6px;">
                        <strong>BAA</strong> - ${formatDate(response.createdAt)}
                    </div>
                    <div style="font-size: 13px; color: #333;">${response.message}</div>
                </div>
            `;
        });
    } else {
        responsesHTML = '<p style="text-align: center; color: #999;">Belum ada respons dari BAA</p>';
    }

    body.innerHTML = `
        <div style="margin-bottom: 16px;">
            <p><strong>Judul:</strong> ${ticket.title}</p>
            <p><strong>Kategori:</strong> ${ticket.category}</p>
            <p><strong>Prioritas:</strong> <span class="ticket-priority-badge ${ticket.priority}">${ticket.priority}</span></p>
            <p><strong>Status:</strong> <span class="ticket-status ${ticket.status}">${formatStatus(ticket.status)}</span></p>
            <p><strong>Dibuat:</strong> ${formatDate(ticket.createdAt)}</p>
        </div>

        <div style="border-top: 1px solid #e0e6f0; padding-top: 16px; margin-bottom: 16px;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px;">Deskripsi Masalah</h3>
            <div style="font-size: 13px; color: #666; line-height: 1.6; white-space: pre-wrap;">${ticket.description}</div>
        </div>

        ${ticket.attachment ? `
        <div style="border-top: 1px solid #e0e6f0; padding-top: 16px; margin-bottom: 16px;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px;">File Lampiran</h3>
            <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 3px solid #1e73ff;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <i class="material-icons" style="font-size: 20px; color: #1e73ff;">attachment</i>
                    <div style="flex: 1;">
                        <div style="font-weight: 600; font-size: 13px; color: #333;">${ticket.attachment.name}</div>
                        <div style="font-size: 11px; color: #999;">${formatFileSize(ticket.attachment.size)}</div>
                    </div>
                    <a href="${ticket.attachment.data}" download="${ticket.attachment.name}" style="padding: 6px 12px; background: #1e73ff; color: white; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 600;">Download</a>
                </div>
            </div>
        </div>
        ` : ''}

        <div style="border-top: 1px solid #e0e6f0; padding-top: 16px;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px;">Respons dari BAA</h3>
            ${responsesHTML}
        </div>
    `;

    modal.style.display = 'flex';
}

function closeFAQModal() {
    document.getElementById('faqModal').style.display = 'none';
}

function closeTicketModal() {
    document.getElementById('ticketModal').style.display = 'none';
}

// ==================== ADMIN - DASHBOARD PAGE ====================

function initAdminPage() {
    if (getCurrentPageType() !== 'admin') return;

    loadAdminDashboard();
    setupAdminEventListeners();
}

function loadAdminDashboard() {
    const tickets = getTicketsFromStorage();

    // Update statistics
    const pendingCount = tickets.filter(t => t.status === 'baru').length;
    document.getElementById('statPending').textContent = pendingCount;
    document.getElementById('statProcessing').textContent = tickets.filter(t => t.status === 'dalam_proses').length;
    document.getElementById('statResolved').textContent = tickets.filter(t => t.status === 'terselesaikan').length;
    document.getElementById('statClosed').textContent = tickets.filter(t => t.status === 'ditutup').length;

    // Update pending badge
    const pendingBadge = document.getElementById('pendingBadge');
    if (pendingBadge) {
        if (pendingCount > 0) {
            pendingBadge.style.display = 'inline-block';
        } else {
            pendingBadge.style.display = 'none';
        }
    }

    displayAdminTickets(tickets);
}

function displayAdminTickets(tickets) {
    const container = document.getElementById('adminTicketsContainer');
    container.innerHTML = '';

    if (tickets.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="material-icons">support_agent</i>
                <div class="empty-state-title">Tidak Ada Tiket</div>
                <div class="empty-state-text">Semua tiket sudah direspon</div>
            </div>
        `;
        return;
    }

    tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    tickets.forEach(ticket => {
        const ticketItem = document.createElement('div');
        ticketItem.className = 'admin-ticket-item';

        const userName = getUserName(ticket.userId) || 'Unknown User';

        ticketItem.innerHTML = `
            <div class="admin-ticket-header">
                <div>
                    <div class="admin-ticket-title">${ticket.title}</div>
                    <div class="admin-ticket-user">Dari: ${userName}</div>
                </div>
                <span class="ticket-status ${ticket.status}">${formatStatus(ticket.status)}</span>
            </div>
            <div class="admin-ticket-meta">
                <div class="admin-ticket-meta-item">
                    <i class="material-icons">category</i>
                    <span>${ticket.category}</span>
                </div>
                <div class="admin-ticket-meta-item priority">
                    <i class="material-icons">flag</i>
                    <span class="ticket-priority-badge ${ticket.priority}">${ticket.priority}</span>
                </div>
                <div class="admin-ticket-meta-item">
                    <i class="material-icons">schedule</i>
                    <span>${formatDate(ticket.createdAt)}</span>
                </div>
                <div class="admin-ticket-meta-item">
                    <i class="material-icons">chat</i>
                    <span>${ticket.responses ? ticket.responses.length : 0} respons</span>
                </div>
            </div>
        `;

        ticketItem.addEventListener('click', () => openAdminTicketModal(ticket));
        container.appendChild(ticketItem);
    });
}

function openAdminTicketModal(ticket) {
    const modal = document.getElementById('adminTicketModal');
    const title = document.getElementById('adminTicketModalTitle');
    const body = document.getElementById('adminTicketModalBody');

    title.textContent = `Tiket #${ticket.id}`;

    const userName = getUserName(ticket.userId) || 'Unknown User';
    const userEmail = getUserEmail(ticket.userId) || 'N/A';

    let responsesHTML = '';
    if (ticket.responses && ticket.responses.length > 0) {
        ticket.responses.forEach(response => {
            responsesHTML += `
                <div style="background: #f0f5ff; padding: 12px; border-radius: 8px; margin-bottom: 10px; border-left: 3px solid #1e73ff;">
                    <div style="font-size: 12px; color: #1e73ff; margin-bottom: 6px;">
                        <strong>BAA</strong> - ${formatDate(response.createdAt)}
                    </div>
                    <div style="font-size: 13px; color: #333; white-space: pre-wrap;">${response.message}</div>
                </div>
            `;
        });
    }

    body.innerHTML = `
        <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e6f0;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div>
                    <p style="font-size: 12px; color: #999; margin: 0;">Pengguna</p>
                    <p style="font-size: 14px; font-weight: 600; margin: 4px 0 0 0;">${userName}</p>
                    <p style="font-size: 12px; color: #999; margin: 2px 0 0 0;">${userEmail}</p>
                </div>
                <div>
                    <p style="font-size: 12px; color: #999; margin: 0;">Status</p>
                    <p style="font-size: 14px; margin: 4px 0 0 0;">
                        <span class="ticket-status ${ticket.status}">${formatStatus(ticket.status)}</span>
                    </p>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                    <p style="font-size: 12px; color: #999; margin: 0;">Kategori</p>
                    <p style="font-size: 14px; margin: 4px 0 0 0;">${ticket.category}</p>
                </div>
                <div>
                    <p style="font-size: 12px; color: #999; margin: 0;">Prioritas</p>
                    <p style="font-size: 14px; margin: 4px 0 0 0;">
                        <span class="ticket-priority-badge ${ticket.priority}">${ticket.priority}</span>
                    </p>
                </div>
            </div>
        </div>

        <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e6f0;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">Keluhan</h3>
            <div style="font-size: 13px; color: #666; line-height: 1.6; white-space: pre-wrap; background: #f9fafb; padding: 12px; border-radius: 8px;">${ticket.description}</div>
        </div>

        ${ticket.attachment ? `
        <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e6f0;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">File Lampiran dari Pengguna</h3>
            <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 3px solid #ffc107;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <i class="material-icons" style="font-size: 20px; color: #ffc107;">attachment</i>
                    <div style="flex: 1;">
                        <div style="font-weight: 600; font-size: 13px; color: #333;">${ticket.attachment.name}</div>
                        <div style="font-size: 11px; color: #999;">${formatFileSize(ticket.attachment.size)}</div>
                    </div>
                    <a href="${ticket.attachment.data}" download="${ticket.attachment.name}" style="padding: 6px 12px; background: #ffc107; color: #333; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 600;">Download</a>
                </div>
            </div>
        </div>
        ` : ''}

        <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e6f0;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">Riwayat Respons</h3>
            ${responsesHTML || '<p style="text-align: center; color: #999; margin: 0;">Belum ada respons</p>'}
        </div>

        <form id="responseForm" class="ticket-response-form" data-ticket-id="${ticket.id}">
            <div>
                <label style="font-size: 12px; font-weight: 600; color: #333; display: block; margin-bottom: 8px;">
                    Respons
                </label>
                <textarea class="response-textarea" id="responseMessage" placeholder="Ketik respons Anda di sini..." required></textarea>
            </div>

            <div class="status-update-section">
                <div>
                    <label style="font-size: 12px; font-weight: 600; color: #333; display: block; margin-bottom: 6px;">
                        Update Status
                    </label>
                    <select class="status-select" id="responseStatus" style="width: 100%;">
                        <option value="baru" ${ticket.status === 'baru' ? 'selected' : ''}>Baru</option>
                        <option value="dalam_proses" ${ticket.status === 'dalam_proses' ? 'selected' : ''}>Dalam Proses</option>
                        <option value="terselesaikan" ${ticket.status === 'terselesaikan' ? 'selected' : ''}>Terselesaikan</option>
                        <option value="ditutup" ${ticket.status === 'ditutup' ? 'selected' : ''}>Ditutup</option>
                    </select>
                </div>
                <div></div>
            </div>

            <div class="response-actions">
                <button type="submit" class="btn btn-primary">Kirim Respons</button>
                <button type="button" class="btn btn-secondary" onclick="closeAdminTicketModal()">Tutup</button>
            </div>
        </form>
    `;

    modal.style.display = 'flex';
    window.currentTicketId = ticket.id;

    // Attach form submission handler
    setTimeout(() => {
        const form = document.getElementById('responseForm');
        if (form) {
            form.onsubmit = function(e) {
                e.preventDefault();
                handleAdminResponse(form.getAttribute('data-ticket-id'));
            };
        }
    }, 100);
}

function closeAdminTicketModal() {
    document.getElementById('adminTicketModal').style.display = 'none';
}

function handleAdminResponse(ticketId) {
    const message = document.getElementById('responseMessage').value;
    const newStatus = document.getElementById('responseStatus').value;

    if (!message.trim()) {
        showNotification('Respons tidak boleh kosong', 'error');
        return;
    }

    const tickets = getTicketsFromStorage();
    const ticketIndex = tickets.findIndex(t => t.id === ticketId);

    if (ticketIndex !== -1) {
        const ticket = tickets[ticketIndex];
        
        if (!ticket.responses) {
            ticket.responses = [];
        }

        ticket.responses.push({
            createdAt: new Date().toISOString(),
            message
        });

        ticket.status = newStatus;

        saveTicketsToStorage(tickets);
        showNotification('Respons berhasil dikirim!', 'success');

        closeAdminTicketModal();
        loadAdminDashboard();
    } else {
        showNotification('Tiket tidak ditemukan', 'error');
    }
}

function setupAdminEventListeners() {
    // Search
    const searchInput = document.getElementById('adminSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterAdminTickets();
        });
    }

    // Status filter
    const statusFilter = document.getElementById('adminStatusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', filterAdminTickets);
    }

    // Priority filter
    const priorityFilter = document.getElementById('adminPriorityFilter');
    if (priorityFilter) {
        priorityFilter.addEventListener('change', filterAdminTickets);
    }
}

function filterAdminTickets() {
    const tickets = getTicketsFromStorage();
    const searchQuery = document.getElementById('adminSearchInput').value.toLowerCase();
    const statusFilter = document.getElementById('adminStatusFilter').value;
    const priorityFilter = document.getElementById('adminPriorityFilter').value;

    let filtered = tickets.filter(ticket => {
        const matchSearch = ticket.title.toLowerCase().includes(searchQuery) || 
                          ticket.description.toLowerCase().includes(searchQuery) ||
                          ticket.id.toString().includes(searchQuery);
        const matchStatus = !statusFilter || ticket.status === statusFilter;
        const matchPriority = !priorityFilter || ticket.priority === priorityFilter;

        return matchSearch && matchStatus && matchPriority;
    });

    displayAdminTickets(filtered);
}

// ==================== UTILITY FUNCTIONS ====================

function getTicketsFromStorage() {
    const stored = localStorage.getItem('simarsip_tickets');
    return stored ? JSON.parse(stored) : [];
}

function saveTicketsToStorage(tickets) {
    localStorage.setItem('simarsip_tickets', JSON.stringify(tickets));
}

function generateTicketId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `TKT${timestamp}${random}`.slice(-10);
}

function getCurrentUserId() {
    // Mengambil ID dari session atau fallback ke 'hmif-001'
    return sessionStorage.getItem('userId') || 'hmif-001';
}

function getUserName(userId) {
    // Simulasi pengambilan nama pengguna
    const users = {
        'hmif-001': 'HMIF Org',
        'baa-001': 'BAA Staff'
    };
    return users[userId] || 'Unknown';
}

function getUserEmail(userId) {
    // Simulasi pengambilan email pengguna
    const emails = {
        'hmif-001': 'hmif@university.ac.id',
        'baa-001': 'baa@university.ac.id'
    };
    return emails[userId] || 'unknown@university.ac.id';
}

function formatStatus(status) {
    const statusMap = {
        'baru': 'Baru',
        'dalam_proses': 'Dalam Proses',
        'terselesaikan': 'Terselesaikan',
        'ditutup': 'Ditutup'
    };
    return statusMap[status] || status;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return 'Hari ini';
    } else if (diffDays === 1) {
        return 'Kemarin';
    } else if (diffDays < 7) {
        return `${diffDays} hari lalu`;
    } else {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('id-ID', options);
    }
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function getTicketIcon(status) {
    const iconMap = {
        'baru': 'mail_outline',
        'dalam_proses': 'hourglass_bottom',
        'terselesaikan': 'check_circle',
        'ditutup': 'close_circle'
    };
    return iconMap[status] || 'help_outline';
}

function showNotification(message, type = 'info') {
    // Membuat notifikasi toast sederhana
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#28a745' : '#1e73ff'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideUp 0.3s ease-out;
        max-width: 300px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease-in';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Modal click outside to close
document.addEventListener('DOMContentLoaded', function() {
    // User page modal
    const ticketModal = document.getElementById('ticketModal');
    if (ticketModal) {
        ticketModal.addEventListener('click', function(e) {
            if (e.target === this) closeTicketModal();
        });
    }

    const faqModal = document.getElementById('faqModal');
    if (faqModal) {
        faqModal.addEventListener('click', function(e) {
            if (e.target === this) closeFAQModal();
        });
    }

    // Admin page modal
    const adminTicketModal = document.getElementById('adminTicketModal');
    if (adminTicketModal) {
        adminTicketModal.addEventListener('click', function(e) {
            if (e.target === this) closeAdminTicketModal();
        });
    }

    // Initialize appropriate page
    const pageType = getCurrentPageType();
    if (pageType === 'user') {
        initUserPage();
        
        // Auto-refresh notification badges every 5 seconds
        setInterval(updateNotificationBadges, 5000);
    } else if (pageType === 'admin') {
        initAdminPage();
        
        // Auto-refresh admin dashboard every 5 seconds
        setInterval(() => {
            loadAdminDashboard();
        }, 5000);
    }
});
