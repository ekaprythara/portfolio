import bpbdImg from "../assets/projects/bpbd.png";
import bersihJejak from "../assets/projects/bersih-jejak.jpeg";
import evogym from "../assets/projects/evogym.jpeg";

export const NAV_LINKS = [
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "About",
        href: "#profile",
    },
];

export const SOCIALS = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ekaprythara",
    },
    {
        label: "GitHub",
        href: "https://github.com/ekaprythara",
    },
    {
        label: "Threads",
        href: "https://www.threads.com/@ekaprythara",
    },
];

export const SELECTED_WORKS = [
    {
        title: "BPBD E-Report Logistik",
        techStacks: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
        sourceUrl: "https://github.com/ekaprythara/e-report",
        demoUrl: "http://ekapriyanthara-bpbd.infinityfree.me/",
        // Gambar merepresentasikan dashboard / report / analytics
        image: bpbdImg,
        role: "Full Stack Developer",
        situation:
            "Badan Penanggulangan Bencana Daerah (BPBD) memerlukan sistem digitalisasi pencatatan dan pelaporan distribusi logistik bantuan bencana agar transparansi dan kecepatan rekapitulasi data dapat ditingkatkan.",
        challenges:
            "Mengubah proses pencatatan manual berbasis kertas menjadi sistem digital terpusat yang mudah digunakan oleh petugas lapangan dengan literasi digital yang beragam, serta menangani sinkronisasi stok barang secara real-time.",
        outcome:
            "Sistem berhasil diselesaikan dan diuji coba dengan baik, menghadirkan solusi digitalisasi pencatatan logistik yang terpusat. Aplikasi ini secara efektif mampu mengotomatisasi manajemen stok barang dan menyajikan format pelaporan yang jauh lebih akurat dan transparan.",
    },
    {
        title: "EVOGYM",
        techStacks: ["React.js", "TailwindCSS", "TypeScript"], // Tambahkan TypeScript jika Anda menggunakannya
        sourceUrl: "https://github.com/ekaprythara/evogym",
        demoUrl: "https://evogym-zeta.vercel.app/",
        image: evogym, // Pastikan variabel import gambar sudah benar
        role: "Frontend Developer",
        situation:
            "Saya merancang landing page untuk EVOGYM, sebuah brand pusat kebugaran modern, dengan tujuan menciptakan presensi digital yang kuat untuk menampilkan fasilitas, program kelas, dan menarik minat calon anggota baru melalui antarmuka yang profesional.",
        challenges:
            "Mengimplementasikan desain Single Page Application (SPA) yang interaktif dengan navigasi smooth-scrolling, memastikan tata letak 100% responsif (mobile-first) menggunakan Tailwind CSS, serta menyusun struktur komponen React yang reusable agar kode mudah di-maintain.",
        outcome:
            "Landing page berhasil di-deploy di Vercel dengan performa tinggi dan waktu muat (load time) yang cepat. Menghasilkan antarmuka pengguna yang mulus dan visual yang menarik, siap digunakan sebagai media promosi digital yang efektif.",
    },
    {
        title: "Bersih Jejak",
        techStacks: ["Vue", "Laravel", "Inertia", "MySQL", "Typescript"],
        sourceUrl: "https://github.com/ekaprythara/arfapos", // Sesuaikan jika URL repository berubah
        demoUrl: "#",
        image: bersihJejak,
        role: "Full Stack Developer",
        situation:
            "Saya mengembangkan Bersih Jejak, sebuah aplikasi point-of-sale (POS) dan manajemen jasa cuci sepatu, sebagai proyek personal. Tujuannya adalah merancang sistem terpadu untuk memudahkan manajemen pesanan, pelacakan status cucian pelanggan, dan pencatatan transaksi.",
        challenges:
            "Merancang arsitektur database yang fleksibel untuk berbagai jenis layanan, serta mengimplementasikan komponen antarmuka yang interaktif seperti timeline pelacakan status pesanan dan fitur cetak struk PDF yang mulus menggunakan Vue 3 dan Inertia.js.",
        outcome:
            "Saat ini, aplikasi sedang dalam tahap pengembangan aktif. Fitur-fitur inti seperti model database, logika controller untuk pesanan, dan antarmuka pengguna telah berhasil dibangun, yang menunjukkan progres solid menuju penyelesaian versi Minimum Viable Product (MVP).",
    },
];

export const EXPERIENCES = [
    {
        company: "Krisna Oleh-Oleh Bali Bypass",
        role: "Packing Staff",
        location: "Badung, Bali",
        startDate: "Feb 2025",
        endDate: "Aug 2026",
        responsibilities: [
            "Handled and checked customer's items before packing.",
            "Managed orders for packing supplies such as boxes, bubble wrap, brown paper, and tubes.",
            "Assisted with daily sales reports and handed them over to the finance department.",
        ],
        reflection:
            "Built strong discipline in quality control, inventory management, and cross-departmental reporting under fast-paced retail operations.",
    },
    {
        company: "PT. Putra Inti Lumayan",
        role: "Monument Attendant",
        location: "Badung, Bali",
        startDate: "Sep 2023",
        endDate: "May 2024",
        responsibilities: [
            "Looked out for the monument by guiding visitors to prevent any accidental damage.",
            "Prepared payment receipts for visitor transactions.",
            "Documented pre-wedding shoots for promotional use.",
        ],
        reflection:
            "Enhanced my communication skills, situational awareness, and ability to handle customer-facing duties professionally.",
    },
    {
        company: "PT. Putra Inti Lumayan",
        role: "Admin Support",
        location: "Denpasar, Bali",
        startDate: "Dec 2022",
        endDate: "May 2024",
        responsibilities: [
            "Handled document copying for admin needs and organized files by priority for easier access.",
        ],
        reflection:
            "Taught me the importance of meticulous organization, structural filing, and streamlined administrative workflows.",
    },
    {
        company: "BPBD Provinsi Bali",
        role: "Data Entry (Internship)",
        location: "Denpasar, Bali",
        startDate: "Jul 2021",
        endDate: "Sep 2021",
        responsibilities: [
            "Helped out with inventory, sorted out reports for incoming/outgoing logistics, and handled basic data entry.",
        ],
        reflection:
            "An early introduction to data management and operational coordination during high-urgency public service scenarios.",
    },
];
