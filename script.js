(function() {
    // --- DOM Elements ---
    const modalOverlay = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalContent = document.getElementById('modalContent');
    const galleryContainer = document.getElementById('galleryContainer');
    const closeBtn = document.getElementById('closeModalBtn');
    const bodyEl = document.body;

    // --- DATABASE PROJECT DETAIL + GALERI FOTO ---
    const projectDetails = {
        linefollower: {
            title: 'Robot Line Follower',
            icon: 'fa-microchip',
            description: `
                <p><strong>Robot Line Follower</strong> jenis robot otonom yang dirancang untuk bergerak mengikuti jalur garis panduan tertentu, biasanya garis hitam di atas permukaan putih, atau sebaliknya.</p>
                <p><span class="tech-tag">Arduino Uno</span><span class="tech-tag">Sensor IR TCRT5000</span><span class="tech-tag">Motor Driver L298N</span></p>
                <p><strong>Spesifikasi Teknis:</strong></p>
                <ul>
                    <li>Mikrokontroler: Arduino Uno</li>
                    <li>Sensor: 2x TCRT5000 Infrared Sensor</li>
                    <li>Motor Driver: L298N</li>
                    <li>Penggerak: 2x DC Motor 5V dengan Gearbox</li>
                    <li>Power: 3x Baterai 4000mah</li>
                    <li>Bahasa Pemograman: Arduino IDE</li>
                </ul>
                <p>Robot ini berhasil menyelesaikan LIntasan berbelok-belok sepanjang 120 cm.</strong> pada Lintasan di lantai.</p>
            `,
            gallery: [
                { url: 'image/FotoGulir1.webp', caption: '' },
                { url: 'image/FotoGulir2.webp', caption: '' },
                { url: 'image/FotoGulir3.webp', caption: '' },
                { url: 'image/FotoGulir4.webp', caption: '' }
            ]
        },
        roboticarm: {
            title: 'Website Portofolio',
            icon: 'fa-robot',
            description: `
                <p><strong>Website Portofolio </strong> adalah situs personal untuk menampilkan karya, pengalaman, dan keahlian secara digital guna meningkatkan personal branding dan menarik klien atau perekrut.</p>
                <p><span class="tech-tag">HTML</span><span class="tech-tag">CSS</span><span class="tech-tag">Javascript</span><span class="tech-tag">Gtihub</span></p>
                <p><strong>Spesifikasi:</strong></p>
                <ul>
                    <li>Papan Editing: Visual Code Studio</li>
                    <li>Bahasa Pemograman: HTML, CSS, & Javascript.</li>
                    <li>Penggembang: Saya Sendiri</li>
                    <li>Nama A.I: Deepseek</li>
                    <li>Penggunaan A.I: 52%</li>
                    <li>Platform: Github</li>
                </ul>
                <p>Website Ini sudah 5 kali berganti model Prototype sebelum akhirnya bisa dipublikasikan.</p>
            `,
            gallery: [
                { url: 'image/CuplikanWebsite1.webp', caption: '' },
                { url: 'image/CuplikanWebsite2.webp', caption: '' },
                { url: 'image/CuplikanWebsite3.webp', caption: '' },
                { url: 'image/CuplikanWebsite4.webp', caption: '' }
            ]
        },
        drone: {
            title: 'Game tebak kata hewan',
            icon: 'fa-helicopter',
            description: `
                <p><strong>Game Tebak Kata Hewan</strong> Bebasis Python Yang saya kembangkan bersama teman saya saat mengikuti sebuah lomba, pada awalnya game ini menggunakan bahasa python dan kemudian saya pindahkan logika gamenya ke HTML & Javascript agar bisa berjalan di website.</p>
                <p><span class="tech-tag">Python</span><span class="tech-tag">HTML & CSS</span><span class="tech-tag">Javascript</span></p>
                <p><strong>Komponen Utama:</strong></p>
                <ul>
                    <li>Papan editng: Visual Code Studio</li>
                    <li>Bahasa Pemograman: HTML, CSS, Javascript</li>
                    <li>Bahasa Pemograman awal: Python</li>
                    <li>Nama A.I: Chatgpt & Gemini</li>
                    <li>Penggembang: Saya Dan Teman Saya</li>
                    <li>Platform: Github</li>
                </ul>
                <p>Anda bisa memainkan game tersebut di link yang telah saya sediakan di "Website & Game"</p>
            `,
            gallery: [
                { url: 'image/Gamepad1.webp', caption: '' },
                { url: 'image/Gamepad2.webp', caption: '' },
                { url: 'image/Gamepad3.webp', caption: '' },
                { url: 'image/Gamepad4.webp', caption: '' },
                { url: 'image/Gamepad5.webp', caption: '' },
            ]
        }
    };

    // Fungsi render galeri
    function renderGallery(images) {
        if (!images || images.length === 0) {
            return '<p style="color:#94a3b8; text-align:center; width:100%;">Tidak ada gambar untuk project ini.</p>';
        }
        
        let html = '';
        images.forEach(img => {
            html += `
                <div class="gallery-item">
                    <img class="gallery-image" src="${img.url}" alt="${img.caption}" loading="lazy">
                    <div class="gallery-caption">${img.caption}</div>
                </div>
            `;
        });
        return html;
    }

    // Fungsi buka modal
    function openModal(projectKey) {
        const data = projectDetails[projectKey];
        
        if (data) {
            modalTitle.textContent = data.title;
            modalIcon.className = `fas ${data.icon}`;
            modalContent.innerHTML = data.description;
            galleryContainer.innerHTML = renderGallery(data.gallery);
            galleryContainer.scrollLeft = 0;
        } else {
            modalTitle.textContent = 'Detail Project';
            modalContent.innerHTML = '<p>Deskripsi tidak tersedia.</p>';
            galleryContainer.innerHTML = '<p style="color:#94a3b8;">Gambar tidak tersedia.</p>';
        }

        modalOverlay.classList.add('active');
        bodyEl.classList.add('modal-open');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        bodyEl.classList.remove('modal-open');
    }

    // --- EVENT LISTENERS ---

    // 1. Klik pada CARD (seluruh card bisa diklik)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            const projectId = this.getAttribute('data-project');
            if (projectId) {
                openModal(projectId);
            }
        });
    });

    // 2. Klik khusus pada tag "Selengkapnya"
    document.querySelectorAll('.project-tag.selengkapnya').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.project-card');
            const projectId = card.getAttribute('data-project');
            if (projectId) {
                openModal(projectId);
            }
        });
    });

    // 3. Tombol Tutup
    closeBtn.addEventListener('click', closeModal);

    // 4. Klik di luar kotak (overlay) -> Tutup
    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // 5. Tekan ESC -> Tutup
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // 6. Drag-to-scroll untuk galeri
    const scrollContainer = galleryContainer;
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

})();