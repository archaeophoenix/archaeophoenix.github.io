export class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('app_lang') || 'en';
        this.translations = {
            en: {
                nav: {
                    summary: "Summary",
                    skills: "Skills",
                    experience: "Experience",
                    portfolio: "Portfolio",
                    education: "Education"
                },
                profile: {
                    title: "Fullstack Developer & Quality Assurance"
                },
                summary: {
                    title: "Professional Summary",
                    text: "Fullstack Developer with experience building scalable web applications using PHP frameworks including Laravel and Symfony. Experienced in RESTful API development, database optimization, backend architecture, and Quality Assurance (QA/QC) processes, including test scenario creation, API testing (Postman), bug tracking, and system validation. Proven ability to improve system performance by 30–50% through query optimization and efficient backend design. Skilled in debugging, issue analysis, and ensuring reliable, high-quality production systems. Excellent communication, collaboration, and problem-solving skills."
                },
                skills: {
                    title: "Core Skills",
                    fullstack: "Fullstack Development",
                    database: "Database Engineering",
                    devops: "DevOps & Version Control",
                    api: "API Development & Integration",
                    qa: "Quality Assurance (QA/QC)",
                    collaboration: "Collaboration & Process"
                },
                experience: {
                    title: "Professional Experience",
                    tekareo_role: "Web & Fullstack Developer",
                    tekareo_company: "CV Tekareo Indonesia (Malang, Indonesia)",
                    tekareo_period: "May 2021 – Feb 2025",
                    tekareo_desc: [
                        "Assigned to US-based companies including Distributed Website Corporation, rSchoolToday, and PlayOn Sports.",
                        "Developed and maintained scalable web applications and backend services using Symfony.",
                        "Designed and implemented RESTful APIs and third-party integrations.",
                        "Improved performance by 30% through database optimization, query tuning, and efficient backend architecture.",
                        "Collaborated with cross-functional teams to gather requirements and troubleshoot issues.",
                        "Performed QA/QC including API testing, bug tracking, and system validation to ensure application stability."
                    ],
                    freelance_role: "Fullstack Developer (Freelance)",
                    freelance_company: "Self-Employed",
                    freelance_period: "Mar 2012 – Present",
                    freelance_desc: [
                        "Designed and developed business applications and e-commerce platforms for clients across various industries.",
                        "Developed responsive user interfaces using HTML, CSS, JavaScript, jQuery, and AJAX.",
                        "Optimized database structures and SQL queries, improving application performance by up to 50%.",
                        "Integrated third-party services, payment gateways, and external APIs to extend business functionality.",
                        "Conducted testing, debugging, and issue resolution to ensure reliable software delivery."
                    ],
                    cekstok_role: "Web Developer",
                    cekstok_company: "Cekstok.com (Blitar, Indonesia)",
                    cekstok_period: "Mar 2019 – Dec 2019",
                    cekstok_desc: [
                        "Developed and enhanced a marketplace platform for UMKM, supporting product management, online transactions, and customer engagement.",
                        "Collaborated with stakeholders to deliver scalable and user-friendly e-commerce solutions."
                    ],
                    pos_role: "Data Entry Operator",
                    pos_company: "PT Pos Indonesia (Malang, Indonesia)",
                    pos_period: "Dec 2016 – Sep 2017",
                    pos_desc: [
                        "Processed and maintained operational logistics data with a high level of accuracy and data integrity.",
                        "Verified, updated, and organized shipment records to support daily operations."
                    ],
                    indosat_role: "Quality Assurance",
                    indosat_company: "Indosat Ooredoo (Jakarta, Indonesia)",
                    indosat_period: "Sep 2014 – Sep 2016",
                    indosat_desc: [
                        "Led QA activities for telecom products and services, coordinating testing and validation.",
                        "Oversaw tariff and billing validation for voice, SMS, internet, and data plan products to ensure pricing accuracy.",
                        "Coordinated cross-functional teams (Product, IT, Network, Billing) to resolve issues before production deployment.",
                        "Managed QA and service validation for digital products (e.g. Indosat TekTok).",
                        "Mentored QA team members and standardized testing procedures."
                    ],
                    jagad_role: "Web Developer",
                    jagad_company: "Jagad.co.id (Malang, Indonesia)",
                    jagad_period: "Nov 2013 – May 2014",
                    jagad_desc: [
                        "Developed and maintained travelcar.co.id web-based travel booking applications.",
                        "Collaborated with stakeholders to deliver reliable online booking solutions."
                    ],
                    primasoft_role: "Web Developer",
                    primasoft_company: "Primasoft Informa (Malang, Indonesia)",
                    primasoft_period: "Jan 2012 – Feb 2013",
                    primasoft_desc: [
                        "Developed and maintained MasterTI web-based academic information system for junior high, senior high, and vocational schools.",
                        "Collaborated with stakeholders to deliver reliable solutions."
                    ]
                },
                portfolio: {
                    title: "Portfolio & Projects",
                    visit: "Visit Project"
                },
                education: {
                    title: "Education",
                    diploma: "Associate Degree in Informatics",
                    diploma_school: "Politeknik Negeri Malang",
                    diploma_year: "2011 – 2014",
                    smk: "Vocational High School – Informatics",
                    smk_school: "SMK Negeri 4 Malang",
                    smk_year: "2008 – 2011"
                }
            },
            id: {
                nav: {
                    summary: "Ringkasan",
                    skills: "Keahlian",
                    experience: "Pengalaman",
                    portfolio: "Portofolio",
                    education: "Pendidikan"
                },
                profile: {
                    title: "Fullstack Developer & Quality Assurance"
                },
                summary: {
                    title: "Ringkasan Profesional",
                    text: "Fullstack Developer berpengalaman dalam membangun aplikasi web yang scalable menggunakan framework PHP seperti Laravel dan Symfony. Memiliki keahlian dalam pengembangan RESTful API, optimasi database, arsitektur backend, serta proses Quality Assurance (QA/QC) termasuk pembuatan skenario pengujian, pengujian API (Postman), pelacakan bug, dan validasi sistem. Terbukti mampu meningkatkan performa sistem sebesar 30–50% melalui optimasi query dan desain backend yang efisien. Terampil dalam debugging, analisis masalah, serta memastikan sistem produksi yang andal dan berkualitas tinggi. Memiliki komunikasi, kolaborasi, dan kemampuan pemecahan masalah yang sangat baik."
                },
                skills: {
                    title: "Keahlian Utama",
                    fullstack: "Pengembangan Fullstack",
                    database: "Rekayasa Database",
                    devops: "DevOps & Kontrol Versi",
                    api: "Pengembangan & Integrasi API",
                    qa: "Quality Assurance (QA/QC)",
                    collaboration: "Kolaborasi & Proses"
                },
                experience: {
                    title: "Pengalaman Kerja",
                    tekareo_role: "Web & Fullstack Developer",
                    tekareo_company: "CV Tekareo Indonesia (Malang, Indonesia)",
                    tekareo_period: "Mei 2021 – Feb 2025",
                    tekareo_desc: [
                        "Ditempatkan pada perusahaan berbasis di AS termasuk Distributed Website Corporation, rSchoolToday, dan PlayOn Sports.",
                        "Membangun dan memelihara aplikasi web scalable serta layanan backend menggunakan Symfony.",
                        "Merancang dan mengimplementasikan RESTful API serta integrasi pihak ketiga.",
                        "Meningkatkan performa sebesar 30% melalui optimasi database, query tuning, dan arsitektur backend efisien.",
                        "Berkolaborasi dengan tim lintas fungsi untuk mengumpulkan kebutuhan dan mengatasi kendala sistem.",
                        "Melakukan pengujian QA/QC termasuk tes API, pelacakan bug, dan validasi sistem untuk menjaga stabilitas."
                    ],
                    freelance_role: "Fullstack Developer (Lepas / Freelance)",
                    freelance_company: "Freelance",
                    freelance_period: "Mar 2012 – Sekarang",
                    freelance_desc: [
                        "Merancang dan mengembangkan aplikasi bisnis serta platform e-commerce untuk berbagai klien industri.",
                        "Mengembangkan antarmuka pengguna responsif menggunakan HTML, CSS, JavaScript, jQuery, dan AJAX.",
                        "Mengoptimalkan struktur database dan query SQL, meningkatkan kinerja aplikasi hingga 50%.",
                        "Mengintegrasikan layanan pihak ketiga, payment gateway, dan API eksternal.",
                        "Melakukan pengujian, debugging, dan penyelesaian masalah untuk menjamin kualitas perangkat lunak."
                    ],
                    cekstok_role: "Web Developer",
                    cekstok_company: "Cekstok.com (Blitar, Indonesia)",
                    cekstok_period: "Mar 2019 – Des 2019",
                    cekstok_desc: [
                        "Mengembangkan platform marketplace untuk UMKM, mendukung manajemen produk, transaksi online, dan interaksi pelanggan.",
                        "Berkolaborasi dengan pemangku kepentingan untuk menghadirkan solusi e-commerce yang scalable."
                    ],
                    pos_role: "Operator Data Entry",
                    pos_company: "PT Pos Indonesia (Malang, Indonesia)",
                    pos_period: "Des 2016 – Sep 2017",
                    pos_desc: [
                        "Memproses dan memelihara data operasional logistik dengan akurasi dan integritas data tinggi.",
                        "Verifikasi, pembaruan, dan pengorganisasian catatan pengiriman untuk mendukung operasional harian."
                    ],
                    indosat_role: "Quality Assurance",
                    indosat_company: "Indosat Ooredoo (Jakarta, Indonesia)",
                    indosat_period: "Sep 2014 – Sep 2016",
                    indosat_desc: [
                        "Memimpin aktivitas QA untuk produk dan layanan telekomunikasi, mengoordinasikan pengujian dan validasi.",
                        "Mengawasi validasi tarif dan billing untuk produk voice, SMS, internet, dan paket data demi akurasi harga.",
                        "Mengoordinasikan tim lintas fungsi (Product, IT, Network, Billing) dalam mengidentifikasi & menyelesaikan masalah.",
                        "Mengelola validasi kualitas dan layanan untuk produk digital (contoh: Indosat TekTok).",
                        "Membimbing anggota tim QA dan menstandardisasi prosedur pengujian."
                    ],
                    jagad_role: "Web Developer",
                    jagad_company: "Jagad.co.id (Malang, Indonesia)",
                    jagad_period: "Nov 2013 – Mei 2014",
                    jagad_desc: [
                        "Mengembangkan dan memelihara aplikasi pemesanan travel berbasis web (travelcar.co.id).",
                        "Berkolaborasi dengan pemangku kepentingan untuk menghadirkan solusi reservasi online yang andal."
                    ],
                    primasoft_role: "Web Developer",
                    primasoft_company: "Primasoft Informa (Malang, Indonesia)",
                    primasoft_period: "Jan 2012 – Feb 2013",
                    primasoft_desc: [
                        "Mengembangkan dan memelihara aplikasi basis website Sistem Informasi Akademik (SIAKAD) MasterTI untuk SMP, SMA, dan SMK.",
                        "Berkolaborasi dengan pemangku kepentingan untuk menghadirkan solusi yang andal."
                    ]
                },
                portfolio: {
                    title: "Portofolio & Proyek",
                    visit: "Kunjungi Proyek"
                },
                education: {
                    title: "Pendidikan",
                    diploma: "D3 Ahli Madya Informatika",
                    diploma_school: "Politeknik Negeri Malang",
                    diploma_year: "2011 – 2014",
                    smk: "SMK Informatika",
                    smk_school: "SMK Negeri 4 Malang",
                    smk_year: "2008 – 2011"
                }
            }
        };
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('app_lang', lang);
        document.documentElement.lang = lang;
    }

    getTranslation(keyPath) {
        const keys = keyPath.split('.');
        let val = this.translations[this.currentLang];
        for (const k of keys) {
            if (val && val[k] !== undefined) {
                val = val[k];
            } else {
                return keyPath;
            }
        }
        return val;
    }

    toggleLanguage() {
        const nextLang = this.currentLang === 'en' ? 'id' : 'en';
        this.setLanguage(nextLang);
        return nextLang;
    }
}
