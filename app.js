// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
// src/data/portfolio.js
var site = {
	name: "Rangga Maulana Ramadhan Wiharto",
	shortName: "rangga.mrw",
	location: "Serang, Banten",
	role: "Mahasiswa Sistem Informasi",
	heroDesc: "Mahasiswa Sistem Informasi. Berada di Serang, Banten.",
	heroBuilding: "Project yang sedang saya bangun: AlkonekPlus, RabegLab, dan site ini.",
	email: "ranggamaulana111111@gmail.com",
	github: "https://github.com/ranggamaulana111111-bit",
	linkedin: "https://www.linkedin.com/in/rangga-maulana-ramadhan-wiharto-022077337/",
	whatsapp: "https://wa.me/6285774138047",
	cv: "https://rmrw.my.id/cv.html",
	spotify: "https://open.spotify.com/playlist/1dd0RgxyoiRiFLptOChO6e?si=02ad28709f664a86"
};
var navLinks = [
	{
		label: "Beranda",
		href: "#home"
	},
	{
		label: "Tentang",
		href: "#about"
	},
	{
		label: "Project",
		href: "#projects"
	},
	{
		label: "Perjalanan",
		href: "#experience"
	},
	{
		label: "Stack",
		href: "#skills"
	},
	{
		label: "Workspace",
		href: "#workspace"
	},
	{
		label: "Pesan",
		href: "#messages"
	},
	{
		label: "Kontak",
		href: "#contact"
	}
];
var currently = [
	{
		num: "01",
		title: "KULIAH",
		text: "Semester 5, Sistem Informasi di Universitas Pamulang. Kuliah berjalan sambil terus membangun dan belajar dari project."
	},
	{
		num: "02",
		title: "BANGUN",
		text: "AlkonekPlus (speed test untuk ISP), RabegLab (homelab), dan site ini sendiri (porto)."
	},
	{
		num: "03",
		title: "JELAJAH",
		text: "Next.js, Laravel, infrastruktur, networking. Hal-hal yang saya dalami lewat project nyata, bukan teori saja."
	},
	{
		num: "04",
		title: "DENGAR",
		text: "Mix Harian, playlist lo-fi yang sedang menemani beberapa waktu ini.",
		link: {
			label: "Buka daftar putar di Spotify",
			href: site.spotify
		}
	},
	{
		num: "05",
		title: "HIDUP",
		text: "Berada di Serang, Banten. Terbuka untuk magang, part-time, dan freelance."
	}
];
var about = {
	label: "TENTANG SAYA",
	title: "Mahasiswa yang belajar lewat membangun.",
	paragraphs: [
		"Mahasiswa Sistem Informasi di Universitas Pamulang, Kampus Serang. Ketertarikan utama saya di pengembangan software, dengan minat yang terus tumbuh di networking dan infrastructure.",
		"Saya lebih banyak memahami teknologi dengan membangun langsung, dari aplikasi web, pengelolaan database dan API, konfigurasi jaringan, sampai menjalankan aplikasi di server dan homelab.",
		"Tidak semua hal sudah saya kuasai, beberapa masih dalam eksplorasi. Yang saya kejar bukan hafal semua tools, tapi paham bagaimana sebuah sistem berjalan menyeluruh, dan setiap project jadi tempat untuk menguji pemahaman itu."
	]
};
var projects = [
	{
		id: "alkonek",
		category: "ISP Billing System",
		year: "2025",
		status: "Produksi",
		name: "ALKONEK",
		role: "Developer",
		description: "Sistem billing ISP FTTH berbasis Laravel untuk penagihan otomatis, pembayaran online, hingga monitoring jaringan fiber real-time.",
		tech: [
			"Laravel 12",
			"MySQL",
			"MikroTik API",
			"OLT multi-brand",
			"Midtrans",
			"Leaflet"
		],
		live: "https://billing.alkonek.online/",
		github: "https://github.com/ranggamaulana111111-bit/billing",
		detail: "ALKONEK adalah sistem billing ISP FTTH yang saya bangun untuk membantu operasional ISP kecil. Sistem ini menangani penagihan otomatis, integrasi pembayaran online, manajemen pelanggan, hingga monitoring jaringan fiber secara real-time. Dibangun dengan Laravel 12 dan terintegrasi dengan MikroTik API serta berbagai OLT multi-brand."
	},
	{
		id: "prodesa",
		category: "Digital Village · e-Government Platform",
		year: "2025–2026",
		status: "Produksi",
		name: "Prodesa",
		role: "Developer",
		description: "Sistem pelayanan administrasi desa: pengajuan surat online dengan workflow approval berjenjang, RBAC 8 role, versioning dokumen, verifikasi QR, dan dashboard analitik per peran.",
		tech: [
			"Laravel 11",
			"MySQL",
			"Spatie Permission",
			"Blade",
			"Tailwind CSS",
			"Chart.js"
		],
		live: "https://desa.ranggamrw.my.id/",
		github: "https://github.com/ranggamaulana111111-bit/desamoderen",
		detail: "Prodesa adalah platform e-Government untuk pelayanan administrasi desa. Fitur utamanya meliputi pengajuan surat online, workflow approval berjenjang, RBAC dengan 8 role berbeda, versioning dokumen, verifikasi QR code, dan dashboard analitik yang disesuaikan per peran pengguna."
	},
	{
		id: "alkonekplus",
		category: "Network Speed Test",
		year: "2026",
		status: "Dibangun",
		name: "AlkonekPlus",
		role: "Developer",
		description: "Aplikasi pengujian kecepatan internet profesional berbasis Next.js 16. Ukur unduh, unggah, ping, jitter, dan packet loss dengan visualisasi real-time.",
		tech: [
			"Next.js 16",
			"TypeScript",
			"Zustand",
			"TanStack Query",
			"Recharts",
			"Playwright"
		],
		live: "",
		github: "https://github.com/ranggamaulana111111-bit/speedtest",
		detail: "AlkonekPlus adalah aplikasi speed test profesional yang dirancang untuk ISP. Mengukur download, upload, ping, jitter, dan packet loss dengan visualisasi real-time. Dibangun dengan Next.js 16 dan fokus pada akurasi pengukuran serta pengalaman pengguna yang bersih."
	},
	{
		id: "rabeglab",
		category: "Personal HomeLab",
		year: "2026",
		status: "Dibangun",
		name: "RabegLab",
		role: "Arsitek & Operator",
		description: "HomeLab pribadi berarsitektur enterprise. Proxmox VE, Docker, dan dokumentasi lengkap dari fase analisis sampai deployment.",
		tech: [
			"Proxmox VE",
			"Docker",
			"Ansible",
			"Terraform",
			"MkDocs",
			"Cloudflare Tunnel"
		],
		live: "",
		github: "https://github.com/ranggamaulana111111-bit/homelab",
		detail: "RabegLab adalah homelab pribadi yang dirancang dengan pendekatan enterprise. Menggunakan Proxmox VE sebagai hypervisor, Docker untuk containerization, serta Ansible dan Terraform untuk automation. Seluruh proses didokumentasikan dari fase analisis hingga deployment."
	},
	{
		id: "portfolio",
		category: "Personal Website · Portfolio",
		year: "2026",
		status: "Aktif",
		name: "Portofolio rmrw.my.id",
		role: "Developer & Designer",
		description: "Website portofolio responsif dengan command palette, animasi scroll, dan visual Three.js. Dibangun dari awal sebagai tempat dokumentasi karya dan eksperimen.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript",
			"Vite",
			"Three.js",
			"GSAP"
		],
		live: "https://rmrw.my.id/",
		github: "",
		detail: "Portofolio ini adalah tempat saya mendokumentasikan project, pengalaman, dan hal yang sedang dipelajari. Saya membangunnya dengan HTML, CSS, dan JavaScript modern, dibantu Vite untuk build pipeline, Three.js untuk visual hero, serta GSAP dan Motion untuk animasi. Fokusnya adalah keterbacaan konten, aksesibilitas, dan tampilan yang nyaman di desktop maupun mobile."
	}
];
var experience = [
	{
		year: "2021",
		title: "Pertama kali menyentuh kode",
		text: "Masuk SMKN 4 Pandeglang jurusan PPLG / RPL. Belum paham apa itu variabel, fungsi, atau loop. Tapi saya penasaran."
	},
	{
		year: "2022",
		title: "HTML pertama kali jalan di browser",
		text: "Belajar HTML, CSS, JavaScript secara mandiri lewat YouTube dan dokumentasi. Membuat website pertama yang isinya cuma 'Hello World', tapi rasanya seperti menaklukkan dunia."
	},
	{
		year: "2023",
		title: "Project pertama yang selesai",
		text: "Mengerjakan project kecil untuk tugas sekolah. Saya belajar satu hal penting: menyelesaikan project itu lebih sulit dari memulainya."
	},
	{
		year: "2024",
		title: "Masuk kuliah, dunia lebih luas",
		text: "Diterima di UNPAM jurusan Sistem Informasi. Mulai belajar backend, database, dan bagaimana sistem bekerja secara keseluruhan. Baru sadar ada banyak yang belum saya tahu."
	},
	{
		year: "2025",
		title: "Membangun untuk orang lain",
		text: "Membangun portal desa untuk Desa Kumpay, sistem billing untuk ISP kecil. Belajar bahwa software yang baik bukan yang paling canggih, tapi yang menyelesaikan masalah nyata."
	},
	{
		year: "2026",
		title: "Masih belajar, masih membangun",
		text: "Mendalami Next.js, Docker, Linux, networking. Menerima bahwa menjadi developer adalah proses yang tidak pernah benar-benar selesai, dan itu OK."
	}
];
var education = [{
	school: "Universitas Pamulang",
	program: "Program Studi Sistem Informasi, Kampus Serang",
	note: "Masuk 2024. Fokus belajar software development, database, dan bagaimana sistem bekerja secara menyeluruh.",
	period: "2024–Sekarang"
}, {
	school: "SMKN 4 Pandeglang",
	program: "Rekayasa Perangkat Lunak",
	note: "Awal masuk 2021. Fondasi pertama mengenal pemrograman dan pengembangan perangkat lunak.",
	period: "2021–2024"
}];
var skills = [
	{
		label: "BAHASA",
		items: [
			"PHP",
			"TypeScript",
			"JavaScript",
			"Dart"
		]
	},
	{
		label: "FRAMEWORK",
		items: [
			"Laravel",
			"Next.js",
			"React",
			"Flutter",
			"Blade"
		]
	},
	{
		label: "BASIS DATA",
		items: ["MySQL", "SQLite"]
	},
	{
		label: "INFRASTRUKTUR",
		items: [
			"Linux",
			"Docker",
			"Nginx",
			"Proxmox",
			"Cloudflare"
		]
	},
	{
		label: "JARINGAN",
		items: [
			"MikroTik",
			"OLT",
			"FTTH"
		]
	},
	{
		label: "ALAT",
		items: [
			"Git",
			"GitHub",
			"Postman",
			"Playwright",
			"Figma"
		]
	}
];
var learning = [
	{
		title: "Software Development",
		items: [
			"Laravel",
			"Next.js",
			"React",
			"TypeScript",
			"REST API",
			"Database",
			"Authentication",
			"RBAC"
		]
	},
	{
		title: "Networking",
		items: [
			"MikroTik",
			"FTTH",
			"OLT",
			"ONU",
			"Network Monitoring",
			"Network Troubleshooting"
		]
	},
	{
		title: "Infrastructure",
		items: [
			"Linux",
			"Docker",
			"Nginx",
			"Proxmox",
			"Cloudflare Tunnel",
			"Deployment"
		]
	},
	{
		title: "System Architecture",
		items: [
			"Database Design",
			"API Integration",
			"System Architecture",
			"Security",
			"Documentation",
			"Testing"
		]
	}
];
var notes = [
	{
		date: "Jun 2025",
		category: "Belajar",
		read: "6 min baca",
		title: "Cara Saya Belajar Coding Tanpa Burnout",
		href: "https://rmrw.my.id/catatan.html"
	},
	{
		date: "Mei 2025",
		category: "Project",
		read: "5 min baca",
		title: "Membangun Project Pertama yang Benar-benar Selesai",
		href: "https://rmrw.my.id/catatan.html"
	},
	{
		date: "Apr 2025",
		category: "Catatan",
		read: "4 min baca",
		title: "Kenapa Saya Mulai Menulis Tiap Selesai Belajar",
		href: "https://rmrw.my.id/catatan.html"
	}
];
// src/js/utils.js
var $ = (sel, ctx = document) => ctx.querySelector(sel);
var $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
function escapeHtml(str = "") {
	return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
// src/js/render.js
var iconArrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>`;
var iconExt = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>`;
function renderNav() {
	const list = $("#nav-links");
	list.innerHTML = navLinks.map((l) => `<li><a class="nav-link" href="${l.href}" data-nav="${l.href.replace("#", "")}">${escapeHtml(l.label)}</a></li>`).join("");
}
function renderNow() {
	$("#now-list").innerHTML = currently.map((item) => `
    <article class="now-item">
      <span class="now-num">${item.num}</span>
      <p class="now-title">${escapeHtml(item.title)}</p>
      <div class="now-text">
        <p>${escapeHtml(item.text)}</p>
        ${item.link ? `<a href="${item.link.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.link.label)} ${iconArrow}</a>` : ""}
      </div>
    </article>
  `).join("");
}
function renderAbout() {
	$("#about-body").innerHTML = about.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
}
function renderProjects() {
	$("#projects-list").innerHTML = projects.map((p, i) => {
		const live = p.status === "Produksi";
		return `
      <article class="project-card reveal" data-project-index="${i}">
        <div class="project-meta">
          <span class="project-category">${escapeHtml(p.category)}</span>
          <span class="project-meta-dot" aria-hidden="true">·</span>
          <span>${escapeHtml(p.year)}</span>
          <span class="project-status"><span class="status-dot ${live ? "is-live" : ""}" aria-hidden="true"></span>${escapeHtml(p.status)}</span>
        </div>
        <h3 class="project-name">${escapeHtml(p.name)}</h3>
        <p class="project-role">${escapeHtml(p.role)}</p>
        <p class="project-desc">${escapeHtml(p.description)}</p>
        <div class="project-tech">${p.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
        <div class="project-actions">
          ${p.live ? `<a class="btn btn-sm btn-live" href="${p.live}" target="_blank" rel="noopener noreferrer">Live ${iconExt}</a>` : ""}
          <button class="btn btn-sm btn-detail" type="button" data-open-project="${i}">Detail</button>
          ${p.github ? `<a class="btn btn-sm btn-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub ${iconExt}</a>` : ""}
        </div>
      </article>`;
	}).join("");
}
function renderExperience() {
	$("#timeline").innerHTML = experience.map((e) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot" aria-hidden="true"></span>
      <p class="timeline-year">${escapeHtml(e.year)}</p>
      <h3 class="timeline-title">${escapeHtml(e.title)}</h3>
      <p class="timeline-text">${escapeHtml(e.text)}</p>
    </article>
  `).join("");
}
function renderEducation() {
	$("#edu-list").innerHTML = education.map((e) => `
    <article class="edu-item reveal">
      <div>
        <h3 class="edu-school">${escapeHtml(e.school)}</h3>
        <p class="edu-program">${escapeHtml(e.program)}</p>
        <p class="edu-note">${escapeHtml(e.note)}</p>
      </div>
      <p class="edu-period">${escapeHtml(e.period)}</p>
    </article>
  `).join("");
}
function renderSkills() {
	$("#skills-grid").innerHTML = skills.map((g) => `
    <div class="skill-group reveal">
      <p class="skill-group-label">${escapeHtml(g.label)}</p>
      <div class="skill-tags">${g.items.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join("")}</div>
    </div>
  `).join("");
}
function renderLearning() {
	$("#learning-grid").innerHTML = learning.map((g) => `
    <div class="learning-card reveal">
      <h3 class="learning-title">${escapeHtml(g.title)}</h3>
      <div class="learning-tags">${g.items.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join("")}</div>
    </div>
  `).join("");
}
function renderNotes() {
	$("#notes-list").innerHTML = notes.map((n) => `
    <a class="note-item reveal" href="https://rmrw.my.id/catatan.html" target="_blank" rel="noopener noreferrer">
      <p class="note-meta"><span>${escapeHtml(n.date)}</span><span>${escapeHtml(n.category)}</span><span>${escapeHtml(n.read)}</span></p>
      <h3 class="note-title">${escapeHtml(n.title)}</h3>
    </a>
  `).join("");
}
// \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep, importerUrl) {
	return new URL(dep, importerUrl).href;
};
var seen = {};
var isCssPreloadUrl = function isCssPreloadUrl(url) {
	return url.pathname.endsWith(".css");
};
var preloadOnce = function preloadOnce(seen, href, preload) {
	if (href in seen) return seen[href];
	const promise = preload();
	if (!promise) {
		seen[href] = void 0;
		return;
	}
	const preloadPromise = promise.then(() => {
		seen[href] = void 0;
	}, (err) => {
		seen[href] = void 0;
		throw err;
	});
	seen[href] = preloadPromise;
	return preloadPromise;
};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		let preloadedHrefs;
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return new URL(import.meta.resolve(specifier));
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			);
		}
		promise = allSettled(deps.map((depString) => {
			depString = assetsURL(depString, importerUrl);
			const dep = importMetaResolve(depString);
			const isCss = isCssPreloadUrl(dep);
			return preloadOnce(seen, dep.href, () => {
				if (preloadedHrefs === void 0) {
					preloadedHrefs = {
						all: /* @__PURE__ */ new Set(),
						styles: /* @__PURE__ */ new Set()
					};
					const links = document.getElementsByTagName("link");
					for (let i = links.length - 1; i >= 0; i--) {
						const link = links[i];
						preloadedHrefs.all.add(link.href);
						if (link.rel === "stylesheet") preloadedHrefs.styles.add(link.href);
					}
				}
				if ((isCss ? preloadedHrefs.styles : preloadedHrefs.all).has(dep.href)) return;
				const link = document.createElement("link");
				link.rel = isCss ? "stylesheet" : scriptRel;
				if (!isCss) link.as = "script";
				link.crossOrigin = "";
				link.href = dep.href;
				if (cspNonce) link.setAttribute("nonce", cspNonce);
				document.head.appendChild(link);
				if (isCss) return new Promise((res, rej) => {
					const handleSettle = (e) => {
						link.removeEventListener("load", handleSettle);
						link.removeEventListener("error", handleSettle);
						if (e.type === "error") rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`));
						else res(e);
					};
					link.addEventListener("load", handleSettle);
					link.addEventListener("error", handleSettle);
				});
			});
		}).filter((p) => p !== void 0));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
// src/js/navigation.js
function initNavigation() {
	const nav = $(".nav");
	const toggle = $("#nav-toggle");
	$("#nav-menu");
	const links = $$(".nav-link");
	const closeMenu = () => {
		nav.classList.remove("is-open");
		toggle.setAttribute("aria-expanded", "false");
	};
	toggle.addEventListener("click", () => {
		const open = nav.classList.toggle("is-open");
		toggle.setAttribute("aria-expanded", String(open));
	});
	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			const href = link.getAttribute("href");
			if (href?.startsWith("#")) {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) __vitePreload(async () => {
					const { scrollToTarget } = await Promise.resolve().then(() => animations_exports);
					return { scrollToTarget };
				}, void 0, import.meta.url).then(({ scrollToTarget }) => scrollToTarget(target)).catch(() => {
					const y = target.getBoundingClientRect().top + window.scrollY - 96;
					window.scrollTo({
						top: Math.max(0, y),
						behavior: "smooth"
					});
				});
				closeMenu();
			}
		});
	});
	document.addEventListener("click", (e) => {
		if (nav.classList.contains("is-open") && !nav.contains(e.target)) closeMenu();
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && nav.classList.contains("is-open")) {
			closeMenu();
			toggle.focus();
		}
	});
	const sections = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.id;
				links.forEach((l) => {
					const active = l.getAttribute("href") === `#${id}`;
					l.classList.toggle("is-active", active);
					if (active) l.setAttribute("aria-current", "true");
					else l.removeAttribute("aria-current");
				});
			}
		});
	}, {
		rootMargin: "-20% 0px -70% 0px",
		threshold: 0
	});
	sections.forEach((s) => observer.observe(s));
}
// src/js/interactions.js
function initReveal() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) $(".reveal").forEach((el) => {
		el.style.opacity = "1";
		el.style.transform = "none";
	});
}
function initBackTop() {
	const btn = $("#back-top");
	const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 500);
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();
	btn.addEventListener("click", () => {
		__vitePreload(async () => {
			const { scrollToTarget } = await Promise.resolve().then(() => animations_exports);
			return { scrollToTarget };
		}, void 0, import.meta.url).then(({ scrollToTarget }) => scrollToTarget(0)).catch(() => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}));
	});
}
async function copyText(text, trigger) {
	try {
		await navigator.clipboard.writeText(text);
	} catch {
		const ta = document.createElement("textarea");
		ta.value = text;
		ta.style.position = "fixed";
		ta.style.opacity = "0";
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		ta.remove();
	}
	if (!trigger) return;
	const original = trigger.innerHTML;
	const label = trigger.querySelector("span");
	if (label) label.textContent = "Tersalin!";
	else trigger.textContent = "Tersalin!";
	setTimeout(() => {
		trigger.innerHTML = original;
	}, 1500);
}
function initCopyEmail() {
	[
		"#copy-email",
		"#copy-email-inline",
		"#copy-email-footer"
	].forEach((sel) => {
		const el = $(sel);
		if (!el) return;
		el.addEventListener("click", () => copyText(el.dataset.email || site.email, el));
	});
}
function trapFocus(container, e) {
	if (e.key !== "Tab") return;
	const focusable = [...container.querySelectorAll("a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex=\"-1\"])")].filter((el) => el.offsetParent !== null);
	if (!focusable.length) return;
	const first = focusable[0];
	const last = focusable[focusable.length - 1];
	if (e.shiftKey && document.activeElement === first) {
		e.preventDefault();
		last.focus();
	} else if (!e.shiftKey && document.activeElement === last) {
		e.preventDefault();
		first.focus();
	}
}
function initModal() {
	const modal = $("#project-modal");
	const panel = modal.querySelector(".modal-panel");
	const closeBtn = $("#modal-close");
	const title = $("#modal-title");
	const meta = $("#modal-meta");
	const role = $("#modal-role");
	const desc = $("#modal-desc");
	const tech = $("#modal-tech");
	const actions = $("#modal-actions");
	let lastFocus = null;
	const close = () => {
		modal.classList.remove("is-open");
		modal.setAttribute("aria-hidden", "true");
		document.body.style.overflow = "";
		if (lastFocus) lastFocus.focus();
	};
	const open = (index) => {
		const p = projects[index];
		if (!p) return;
		lastFocus = document.activeElement;
		meta.textContent = `${p.category} · ${p.year} · ${p.status}`;
		title.textContent = p.name;
		role.textContent = p.role;
		desc.textContent = p.detail;
		tech.innerHTML = p.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
		actions.innerHTML = `
      ${p.live ? `<a class="btn btn-sm btn-live" href="${p.live}" target="_blank" rel="noopener noreferrer">Live</a>` : ""}
      ${p.github ? `<a class="btn btn-sm btn-secondary" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
    `;
		modal.classList.add("is-open");
		modal.setAttribute("aria-hidden", "false");
		document.body.style.overflow = "hidden";
		closeBtn.focus();
	};
	document.addEventListener("click", (e) => {
		const btn = e.target.closest("[data-open-project]");
		if (btn) open(Number(btn.dataset.openProject));
		if (e.target.closest("[data-close=\"modal\"]")) close();
	});
	closeBtn.addEventListener("click", close);
	document.addEventListener("keydown", (e) => {
		if (!modal.classList.contains("is-open")) return;
		if (e.key === "Escape") {
			close();
			return;
		}
		trapFocus(panel, e);
	});
}
function initCommandPalette() {
	const overlay = $("#cmd-overlay");
	const input = $("#cmd-input");
	const list = $("#cmd-list");
	const empty = $("#cmd-empty");
	const openBtn = $("#cmd-btn");
	let active = -1;
	let items = [];
	const commands = [
		{
			label: "Beranda",
			type: "Section",
			action: () => go("#home")
		},
		{
			label: "Tentang",
			type: "Section",
			action: () => go("#about")
		},
		{
			label: "Project",
			type: "Section",
			action: () => go("#projects")
		},
		{
			label: "Perjalanan",
			type: "Section",
			action: () => go("#experience")
		},
		{
			label: "Stack",
			type: "Section",
			action: () => go("#skills")
		},
		{
			label: "Workspace",
			type: "Section",
			action: () => go("#workspace")
		},
		{
			label: "Pesan",
			type: "Section",
			action: () => go("#messages")
		},
		{
			label: "Kontak",
			type: "Section",
			action: () => go("#contact")
		},
		{
			label: "Lihat CV",
			type: "Aksi",
			action: () => window.open("https://rmrw.my.id/cv.html", "_blank")
		},
		{
			label: "Salin Email",
			type: "Aksi",
			action: () => copyText(site.email, $("#copy-email"))
		}
	];
	function go(hash) {
		close();
		const t = document.querySelector(hash);
		if (t) __vitePreload(async () => {
			const { scrollToTarget } = await Promise.resolve().then(() => animations_exports);
			return { scrollToTarget };
		}, void 0, import.meta.url).then(({ scrollToTarget }) => scrollToTarget(t)).catch(() => t.scrollIntoView({ behavior: "smooth" }));
	}
	function render(filter = "") {
		const q = filter.toLowerCase().trim();
		items = commands.filter((c) => c.label.toLowerCase().includes(q));
		list.innerHTML = items.map((c, i) => `
      <li role="option" aria-selected="${i === active}"><button class="cmd-item ${i === active ? "is-active" : ""}" type="button" data-cmd="${i}">
        <span>${escapeHtml(c.label)}</span><span class="cmd-item-type">${escapeHtml(c.type)}</span>
      </button></li>`).join("");
		empty.hidden = items.length !== 0;
	}
	function open() {
		overlay.classList.add("is-open");
		overlay.setAttribute("aria-hidden", "false");
		input.value = "";
		active = 0;
		render();
		setTimeout(() => input.focus(), 0);
	}
	function close() {
		overlay.classList.remove("is-open");
		overlay.setAttribute("aria-hidden", "true");
	}
	openBtn.addEventListener("click", open);
	overlay.addEventListener("click", (e) => {
		if (e.target.closest("[data-close=\"cmd\"]")) close();
	});
	input.addEventListener("input", () => {
		active = 0;
		render(input.value);
	});
	list.addEventListener("click", (e) => {
		const btn = e.target.closest("[data-cmd]");
		if (btn) items[Number(btn.dataset.cmd)]?.action();
	});
	document.addEventListener("keydown", (e) => {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
			e.preventDefault();
			overlay.classList.contains("is-open") ? close() : open();
		}
		if (!overlay.classList.contains("is-open")) return;
		if (e.key === "Escape") {
			e.preventDefault();
			close();
			openBtn.focus();
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			active = Math.min(active + 1, items.length - 1);
			render(input.value);
			return;
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			active = Math.max(active - 1, 0);
			render(input.value);
			return;
		}
		if (e.key === "Enter" && items[active]) {
			e.preventDefault();
			items[active].action();
			return;
		}
		trapFocus(overlay.querySelector(".cmd-palette"), e);
	});
}
function initMessages() {
	const form = $("#message-form");
	const name = $("#msg-name");
	const text = $("#msg-text");
	const count = $("#msg-count");
	const status = $("#msg-status");
	const feed = $("#feed-list");
	const KEY = "rangga-messages";
	const load = () => {
		try {
			return JSON.parse(localStorage.getItem(KEY) || "[]");
		} catch {
			return [];
		}
	};
	const save = (items) => localStorage.setItem(KEY, JSON.stringify(items.slice(0, 20)));
	const renderFeed = () => {
		const items = load();
		if (!items.length) {
			feed.innerHTML = `<p class="feed-empty">Belum ada pesan. Jadi yang pertama mengirim.</p>`;
			return;
		}
		feed.innerHTML = items.map((m, i) => `
      <article class="feed-item">
        <div class="feed-meta">
          <span class="feed-name">${escapeHtml(m.name || "Anonim")}</span>
          <span>${escapeHtml(m.time)}</span>
          <button class="feed-delete" type="button" data-del-msg="${i}" aria-label="Hapus pesan">Hapus</button>
        </div>
        <p class="feed-msg">${escapeHtml(m.text)}</p>
      </article>`).join("");
	};
	feed.addEventListener("click", (e) => {
		const btn = e.target.closest("[data-del-msg]");
		if (!btn) return;
		const items = load();
		items.splice(Number(btn.dataset.delMsg), 1);
		save(items);
		renderFeed();
	});
	text.addEventListener("input", () => {
		count.textContent = String(text.value.length);
	});
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		status.textContent = "";
		status.classList.remove("is-error");
		const msg = text.value.trim();
		if (!msg) {
			status.textContent = "Pesan tidak boleh kosong.";
			status.classList.add("is-error");
			text.focus();
			return;
		}
		const items = load();
		items.unshift({
			name: name.value.trim().slice(0, 60),
			text: msg.slice(0, 500),
			time: (/* @__PURE__ */ new Date()).toLocaleString("id-ID", {
				day: "2-digit",
				month: "short",
				year: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			})
		});
		save(items);
		renderFeed();
		form.reset();
		count.textContent = "0";
		status.textContent = "Pesan ditampilkan secara lokal di browser ini (localStorage).";
	});
	renderFeed();
}
function initInteractions() {
	initReveal();
	initBackTop();
	initCopyEmail();
	initModal();
	initCommandPalette();
	initMessages();
}
// node_modules/lenis/dist/lenis.mjs
var version = "1.3.27";
/**
* Clamp a value between a minimum and maximum value
*
* @param min Minimum value
* @param input Value to clamp
* @param max Maximum value
* @returns Clamped value
*/
function clamp$2(min, input, max) {
	return Math.max(min, Math.min(input, max));
}
/**
*  Linearly interpolate between two values using an amount (0 <= t <= 1)
*
* @param x First value
* @param y Second value
* @param t Amount to interpolate (0 <= t <= 1)
* @returns Interpolated value
*/
function lerp(x, y, t) {
	return (1 - t) * x + t * y;
}
/**
* Damp a value over time using a damping factor
* {@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}
*
* @param x Initial value
* @param y Target value
* @param lambda Damping factor
* @param dt Time elapsed since the last update
* @returns Damped value
*/
function damp(x, y, lambda, deltaTime) {
	return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
/**
* Calculate the modulo of the dividend and divisor while keeping the result within the same sign as the divisor
* {@link https://anguscroll.com/just/just-modulo}
*
* @param n Dividend
* @param d Divisor
* @returns Modulo
*/
function modulo(n, d) {
	return (n % d + d) % d;
}
/**
* Animate class to handle value animations with lerping or easing
*
* @example
* const animate = new Animate()
* animate.fromTo(0, 100, { duration: 1, easing: (t) => t })
* animate.advance(0.5) // 50
*/
var Animate = class {
	isRunning = false;
	value = 0;
	from = 0;
	to = 0;
	currentTime = 0;
	lerp;
	duration;
	easing;
	onUpdate;
	/**
	* Advance the animation by the given delta time
	*
	* @param deltaTime - The time in seconds to advance the animation
	*/
	advance(deltaTime) {
		if (!this.isRunning) return;
		let completed = false;
		if (this.duration && this.easing) {
			this.currentTime += deltaTime;
			const linearProgress = clamp$2(0, this.currentTime / this.duration, 1);
			completed = linearProgress >= 1;
			const easedProgress = completed ? 1 : this.easing(linearProgress);
			this.value = this.from + (this.to - this.from) * easedProgress;
		} else if (this.lerp) {
			this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
			if (Math.round(this.value) === Math.round(this.to)) {
				this.value = this.to;
				completed = true;
			}
		} else {
			this.value = this.to;
			completed = true;
		}
		if (completed) this.stop();
		this.onUpdate?.(this.value, completed);
	}
	/** Stop the animation */
	stop() {
		this.isRunning = false;
	}
	/**
	* Set up the animation from a starting value to an ending value
	* with optional parameters for lerping, duration, easing, and onUpdate callback
	*
	* @param from - The starting value
	* @param to - The ending value
	* @param options - Options for the animation
	*/
	fromTo(from, to, { lerp, duration, easing, onStart, onUpdate }) {
		this.from = this.value = from;
		this.to = to;
		this.lerp = lerp;
		this.duration = duration;
		this.easing = easing;
		this.currentTime = 0;
		this.isRunning = true;
		onStart?.();
		this.onUpdate = onUpdate;
	}
};
function debounce(callback, delay) {
	let timer;
	return function(...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = void 0;
			callback.apply(this, args);
		}, delay);
	};
}
/**
* Dimensions class to handle the size of the content and wrapper
*
* @example
* const dimensions = new Dimensions(wrapper, content)
* dimensions.on('resize', (e) => {
*   console.log(e.width, e.height)
* })
*/
var Dimensions = class {
	width = 0;
	height = 0;
	scrollHeight = 0;
	scrollWidth = 0;
	debouncedResize;
	wrapperResizeObserver;
	contentResizeObserver;
	constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
		this.wrapper = wrapper;
		this.content = content;
		if (autoResize) {
			this.debouncedResize = debounce(this.resize, debounceValue);
			if (this.wrapper instanceof Window) window.addEventListener("resize", this.debouncedResize);
			else {
				this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
				this.wrapperResizeObserver.observe(this.wrapper);
			}
			this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
			this.contentResizeObserver.observe(this.content);
		}
		this.resize();
	}
	destroy() {
		this.wrapperResizeObserver?.disconnect();
		this.contentResizeObserver?.disconnect();
		if (this.wrapper === window && this.debouncedResize) window.removeEventListener("resize", this.debouncedResize);
	}
	resize = () => {
		this.onWrapperResize();
		this.onContentResize();
	};
	onWrapperResize = () => {
		if (this.wrapper instanceof Window) {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
		} else {
			this.width = this.wrapper.clientWidth;
			this.height = this.wrapper.clientHeight;
		}
	};
	onContentResize = () => {
		if (this.wrapper instanceof Window) {
			this.scrollHeight = this.content.scrollHeight;
			this.scrollWidth = this.content.scrollWidth;
		} else {
			this.scrollHeight = this.wrapper.scrollHeight;
			this.scrollWidth = this.wrapper.scrollWidth;
		}
	};
	get limit() {
		return {
			x: this.scrollWidth - this.width,
			y: this.scrollHeight - this.height
		};
	}
};
/**
* Emitter class to handle events
* @example
* const emitter = new Emitter()
* emitter.on('event', (data) => {
*   console.log(data)
* })
* emitter.emit('event', 'data')
*/
var Emitter = class {
	events = {};
	/**
	* Emit an event with the given data
	* @param event Event name
	* @param args Data to pass to the event handlers
	*/
	emit(event, ...args) {
		const callbacks = this.events[event] || [];
		for (let i = 0, length = callbacks.length; i < length; i++) callbacks[i]?.(...args);
	}
	/**
	* Add a callback to the event
	* @param event Event name
	* @param cb Callback function
	* @returns Unsubscribe function
	*/
	on(event, cb) {
		if (this.events[event]) this.events[event].push(cb);
		else this.events[event] = [cb];
		return () => {
			this.events[event] = this.events[event]?.filter((i) => cb !== i);
		};
	}
	/**
	* Remove a callback from the event
	* @param event Event name
	* @param callback Callback function
	*/
	off(event, callback) {
		this.events[event] = this.events[event]?.filter((i) => callback !== i);
	}
	/**
	* Remove all event listeners and clean up
	*/
	destroy() {
		this.events = {};
	}
};
var LINE_HEIGHT = 100 / 6;
var listenerOptions = { passive: false };
function getDeltaMultiplier(deltaMode, size) {
	if (deltaMode === 1) return LINE_HEIGHT;
	if (deltaMode === 2) return size;
	return 1;
}
var VirtualScroll = class {
	touchStart = {
		x: 0,
		y: 0
	};
	lastDelta = {
		x: 0,
		y: 0
	};
	window = {
		width: 0,
		height: 0
	};
	emitter = new Emitter();
	constructor(element, options = {
		wheelMultiplier: 1,
		touchMultiplier: 1
	}) {
		this.element = element;
		this.options = options;
		window.addEventListener("resize", this.onWindowResize);
		this.onWindowResize();
		this.element.addEventListener("wheel", this.onWheel, listenerOptions);
		this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
		this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
		this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
	}
	/**
	* Add an event listener for the given event and callback
	*
	* @param event Event name
	* @param callback Callback function
	*/
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	/** Remove all event listeners and clean up */
	destroy() {
		this.emitter.destroy();
		window.removeEventListener("resize", this.onWindowResize);
		this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
		this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
		this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
		this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
	}
	/**
	* Event handler for 'touchstart' event
	*
	* @param event Touch event
	*/
	onTouchStart = (event) => {
		const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
		this.touchStart.x = clientX;
		this.touchStart.y = clientY;
		this.lastDelta = {
			x: 0,
			y: 0
		};
		this.emitter.emit("scroll", {
			deltaX: 0,
			deltaY: 0,
			event
		});
	};
	/** Event handler for 'touchmove' event */
	onTouchMove = (event) => {
		const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
		const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
		const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
		this.touchStart.x = clientX;
		this.touchStart.y = clientY;
		this.lastDelta = {
			x: deltaX,
			y: deltaY
		};
		this.emitter.emit("scroll", {
			deltaX,
			deltaY,
			event
		});
	};
	onTouchEnd = (event) => {
		this.emitter.emit("scroll", {
			deltaX: this.lastDelta.x,
			deltaY: this.lastDelta.y,
			event
		});
	};
	/** Event handler for 'wheel' event */
	onWheel = (event) => {
		let { deltaX, deltaY, deltaMode } = event;
		const multiplierX = getDeltaMultiplier(deltaMode, this.window.width);
		const multiplierY = getDeltaMultiplier(deltaMode, this.window.height);
		deltaX *= multiplierX;
		deltaY *= multiplierY;
		deltaX *= this.options.wheelMultiplier;
		deltaY *= this.options.wheelMultiplier;
		this.emitter.emit("scroll", {
			deltaX,
			deltaY,
			event
		});
	};
	onWindowResize = () => {
		this.window = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	};
};
var defaultEasing$1 = (t) => Math.min(1, 1.001 - 2 ** (-10 * t));
var Lenis = class {
	_isScrolling = false;
	_isStopped = false;
	_isLocked = false;
	_preventNextNativeScrollEvent = false;
	_resetVelocityTimeout = null;
	_rafId = null;
	_isDraggingSelection = false;
	reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	/**
	* Whether or not the user is touching the screen
	*/
	isTouching;
	/**
	* Whether or not the device is running iOS
	*/
	isIos;
	/**
	* The time in ms since the lenis instance was created
	*/
	time = 0;
	/**
	* User data that will be forwarded through the scroll event
	*
	* @example
	* lenis.scrollTo(100, {
	*   userData: {
	*     foo: 'bar'
	*   }
	* })
	*/
	userData = {};
	/**
	* The last velocity of the scroll
	*/
	lastVelocity = 0;
	/**
	* The current velocity of the scroll
	*/
	velocity = 0;
	/**
	* The direction of the scroll
	*/
	direction = 0;
	/**
	* The options passed to the lenis instance
	*/
	options;
	/**
	* The target scroll value
	*/
	targetScroll;
	/**
	* The animated scroll value
	*/
	animatedScroll;
	animate = new Animate();
	emitter = new Emitter();
	dimensions;
	virtualScroll;
	constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = .075, touchInertiaExponent = 1.7, duration, easing, lerp = .1, infinite = false, orientation = "vertical", gestureOrientation = orientation === "horizontal" ? "both" : "vertical", touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, allowNestedScroll = false, __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false, respectReducedMotion = true } = {}) {
		window.lenisVersion = version;
		if (!window.lenis) window.lenis = {};
		window.lenis.version = version;
		if (orientation === "horizontal") window.lenis.horizontal = true;
		if (syncTouch === true) window.lenis.touch = true;
		this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
		if (!wrapper || wrapper === document.documentElement) wrapper = window;
		if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing$1;
		else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
		this.options = {
			wrapper,
			content,
			eventsTarget,
			smoothWheel,
			syncTouch,
			syncTouchLerp,
			touchInertiaExponent,
			duration,
			easing,
			lerp,
			infinite,
			gestureOrientation,
			orientation,
			touchMultiplier,
			wheelMultiplier,
			autoResize,
			prevent,
			virtualScroll,
			overscroll,
			autoRaf,
			anchors,
			autoToggle,
			allowNestedScroll,
			naiveDimensions,
			stopInertiaOnNavigate,
			respectReducedMotion
		};
		this.dimensions = new Dimensions(wrapper, content, { autoResize });
		this.updateClassName();
		this.targetScroll = this.animatedScroll = this.actualScroll;
		this.options.wrapper.addEventListener("scroll", this.onNativeScroll);
		this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true });
		if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.addEventListener("click", this.onClick);
		this.options.wrapper.addEventListener("pointerdown", this.onPointerDown);
		this.virtualScroll = new VirtualScroll(eventsTarget, {
			touchMultiplier,
			wheelMultiplier
		});
		this.virtualScroll.on("scroll", this.onVirtualScroll);
		if (this.options.autoToggle) {
			this.checkOverflow();
			this.rootElement.addEventListener("transitionend", this.onTransitionEnd);
		}
		if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
	}
	/**
	* Destroy the lenis instance, remove all event listeners and clean up the class name
	*/
	destroy() {
		this.emitter.destroy();
		if (this._resetVelocityTimeout !== null) {
			clearTimeout(this._resetVelocityTimeout);
			this._resetVelocityTimeout = null;
		}
		this.options.wrapper.removeEventListener("scroll", this.onNativeScroll);
		this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true });
		this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown);
		if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.removeEventListener("click", this.onClick);
		this.virtualScroll.destroy();
		this.dimensions.destroy();
		this.cleanUpClassName();
		if (this._rafId) cancelAnimationFrame(this._rafId);
	}
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	off(event, callback) {
		return this.emitter.off(event, callback);
	}
	onScrollEnd = (e) => {
		if (!(e instanceof CustomEvent)) {
			if (this.isScrolling === "smooth" || this.isScrolling === false) e.stopPropagation();
		}
	};
	dispatchScrollendEvent = () => {
		this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
			bubbles: this.options.wrapper === window,
			detail: { lenisScrollEnd: true }
		}));
	};
	get overflow() {
		const property = this.isHorizontal ? "overflow-x" : "overflow-y";
		return getComputedStyle(this.rootElement)[property];
	}
	checkOverflow() {
		if (["hidden", "clip"].includes(this.overflow)) this.internalStop();
		else this.internalStart();
	}
	onTransitionEnd = (event) => {
		if (event.propertyName?.includes("overflow") && event.target === this.rootElement) this.checkOverflow();
	};
	setScroll(scroll) {
		if (this.isHorizontal) this.options.wrapper.scrollTo({
			left: scroll,
			behavior: "instant"
		});
		else this.options.wrapper.scrollTo({
			top: scroll,
			behavior: "instant"
		});
	}
	onClick = (event) => {
		const linkElementsUrls = event.composedPath().filter((node) => node instanceof HTMLAnchorElement && node.href).map((element) => new URL(element.href));
		const currentUrl = new URL(window.location.href);
		if (this.options.anchors) {
			const anchorElementUrl = linkElementsUrls.find((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname === targetUrl.pathname && targetUrl.hash);
			if (anchorElementUrl) {
				const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
				const target = decodeURIComponent(anchorElementUrl.hash);
				this.scrollTo(target, options);
				return;
			}
		}
		if (this.options.stopInertiaOnNavigate) {
			if (linkElementsUrls.some((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname !== targetUrl.pathname)) {
				this.reset();
				return;
			}
		}
	};
	onPointerDown = (event) => {
		if (event.button === 1) this.reset();
	};
	isTouchOnSelectionHandle(event) {
		const selection = window.getSelection();
		if (!selection || selection.isCollapsed || selection.rangeCount === 0) return false;
		const touch = event.targetTouches[0] ?? event.changedTouches[0];
		if (!touch) return false;
		const rects = selection.getRangeAt(0).getClientRects();
		if (rects.length === 0) return false;
		const first = rects[0];
		const last = rects[rects.length - 1];
		const HANDLE_RADIUS = 40;
		const nearStart = Math.hypot(touch.clientX - first.left, touch.clientY - first.top) <= HANDLE_RADIUS;
		const nearEnd = Math.hypot(touch.clientX - last.right, touch.clientY - last.bottom) <= HANDLE_RADIUS;
		return nearStart || nearEnd;
	}
	onVirtualScroll = (data) => {
		if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
		const { deltaX, deltaY, event } = data;
		this.emitter.emit("virtual-scroll", {
			deltaX,
			deltaY,
			event
		});
		if (event.ctrlKey) return;
		if (event.lenisStopPropagation) return;
		const isTouch = event.type.includes("touch");
		const isWheel = event.type.includes("wheel");
		if (isTouch && this.isIos) {
			if (event.type === "touchstart") this._isDraggingSelection = this.isTouchOnSelectionHandle(event);
			if (this._isDraggingSelection) {
				if (event.type === "touchend") this._isDraggingSelection = false;
				return;
			}
		}
		this.isTouching = event.type === "touchstart" || event.type === "touchmove";
		const isClickOrTap = deltaX === 0 && deltaY === 0;
		if (this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked) {
			this.reset();
			return;
		}
		const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
		if (isClickOrTap || isUnknownGesture) return;
		let composedPath = event.composedPath();
		composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
		const prevent = this.options.prevent;
		const gestureOrientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
		if (composedPath.find((node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || gestureOrientation === "vertical" && node.hasAttribute?.("data-lenis-prevent-vertical") || gestureOrientation === "horizontal" && node.hasAttribute?.("data-lenis-prevent-horizontal") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(node, {
			deltaX,
			deltaY
		})))) return;
		if (this.isStopped || this.isLocked) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!(this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel)) {
			this.isScrolling = "native";
			this.animate.stop();
			event.lenisStopPropagation = true;
			return;
		}
		let delta = deltaY;
		if (this.options.gestureOrientation === "both") delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
		else if (this.options.gestureOrientation === "horizontal") delta = deltaX;
		if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) event.lenisStopPropagation = true;
		if (event.cancelable) event.preventDefault();
		const isSyncTouch = isTouch && this.options.syncTouch;
		const hasTouchInertia = isTouch && event.type === "touchend";
		if (hasTouchInertia) delta = Math.sign(delta) * Math.abs(this.velocity) ** this.options.touchInertiaExponent;
		this.scrollTo(this.targetScroll + delta, {
			programmatic: false,
			...isSyncTouch ? { lerp: hasTouchInertia ? this.options.syncTouchLerp : 1 } : {
				lerp: this.options.lerp,
				duration: this.options.duration,
				easing: this.options.easing
			}
		});
	};
	/**
	* Force lenis to recalculate the dimensions
	*/
	resize() {
		this.dimensions.resize();
		this.animatedScroll = this.targetScroll = this.actualScroll;
		this.emit();
	}
	emit() {
		this.emitter.emit("scroll", this);
	}
	onNativeScroll = () => {
		if (this._resetVelocityTimeout !== null) {
			clearTimeout(this._resetVelocityTimeout);
			this._resetVelocityTimeout = null;
		}
		if (this._preventNextNativeScrollEvent) {
			this._preventNextNativeScrollEvent = false;
			return;
		}
		if (this.isScrolling === false || this.isScrolling === "native") {
			const lastScroll = this.animatedScroll;
			this.animatedScroll = this.targetScroll = this.actualScroll;
			this.lastVelocity = this.velocity;
			this.velocity = this.animatedScroll - lastScroll;
			this.direction = Math.sign(this.animatedScroll - lastScroll);
			if (!this.isStopped) this.isScrolling = "native";
			this.emit();
			if (this.velocity !== 0) this._resetVelocityTimeout = setTimeout(() => {
				this.lastVelocity = this.velocity;
				this.velocity = 0;
				this.isScrolling = false;
				this.emit();
			}, 400);
		}
	};
	reset() {
		this.isLocked = false;
		this.isScrolling = false;
		this.animatedScroll = this.targetScroll = this.actualScroll;
		this.lastVelocity = this.velocity = 0;
		this.animate.stop();
	}
	/**
	* Start lenis scroll after it has been stopped
	*/
	start() {
		if (!this.isStopped) return;
		if (this.options.autoToggle) {
			this.rootElement.style.removeProperty("overflow");
			return;
		}
		this.internalStart();
	}
	internalStart() {
		if (!this.isStopped) return;
		this.reset();
		this.isStopped = false;
		this.emit();
	}
	/**
	* Stop lenis scroll
	*/
	stop() {
		if (this.isStopped) return;
		if (this.options.autoToggle) {
			this.rootElement.style.setProperty("overflow", "clip");
			return;
		}
		this.internalStop();
	}
	internalStop() {
		if (this.isStopped) return;
		this.reset();
		this.isStopped = true;
		this.emit();
	}
	/**
	* RequestAnimationFrame for lenis
	*
	* @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
	*/
	raf = (time) => {
		const deltaTime = time - (this.time || time);
		this.time = time;
		this.animate.advance(deltaTime * .001);
		if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
	};
	/**
	* Scroll to a target value
	*
	* @param target The target value to scroll to
	* @param options The options for the scroll
	*
	* @example
	* lenis.scrollTo(100, {
	*   offset: 100,
	*   duration: 1,
	*   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
	*   lerp: 0.1,
	*   onStart: () => {
	*     console.log('onStart')
	*   },
	*   onComplete: () => {
	*     console.log('onComplete')
	*   },
	* })
	*/
	scrollTo(_target, { offset = 0, immediate = false, lock = false, programmatic = true, lerp = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, userData } = {}) {
		if (this.prefersReducedMotion) if (programmatic) immediate = true;
		else {
			lerp = 1;
			duration = void 0;
			easing = void 0;
		}
		if ((this.isStopped || this.isLocked) && !force) return;
		let target = _target;
		let adjustedOffset = offset;
		if (typeof target === "string" && [
			"top",
			"left",
			"start",
			"#"
		].includes(target)) target = 0;
		else if (typeof target === "string" && [
			"bottom",
			"right",
			"end"
		].includes(target)) target = this.limit;
		else {
			let node = null;
			if (typeof target === "string") {
				node = target.startsWith("#") ? document.getElementById(target.slice(1)) : document.querySelector(target);
				if (!node) if (target === "#top") target = 0;
				else console.warn("Lenis: Target not found", target);
			} else if (target instanceof Element) node = target;
			if (node) {
				if (this.options.wrapper !== window) {
					const wrapperRect = this.rootElement.getBoundingClientRect();
					adjustedOffset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
				}
				const rect = node.getBoundingClientRect();
				const targetStyle = getComputedStyle(node);
				const scrollMargin = this.isHorizontal ? Number.parseFloat(targetStyle.scrollMarginLeft) : Number.parseFloat(targetStyle.scrollMarginTop);
				const containerStyle = getComputedStyle(this.rootElement);
				const scrollPadding = this.isHorizontal ? Number.parseFloat(containerStyle.scrollPaddingLeft) : Number.parseFloat(containerStyle.scrollPaddingTop);
				target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll - (Number.isNaN(scrollMargin) ? 0 : scrollMargin) - (Number.isNaN(scrollPadding) ? 0 : scrollPadding);
			}
		}
		if (typeof target !== "number") return;
		target += adjustedOffset;
		if (this.options.infinite) {
			if (programmatic) {
				this.targetScroll = this.animatedScroll = this.scroll;
				const distance = target - this.animatedScroll;
				if (distance > this.limit / 2) target -= this.limit;
				else if (distance < -this.limit / 2) target += this.limit;
			}
		} else target = clamp$2(0, target, this.limit);
		if (target === this.targetScroll) {
			onStart?.(this);
			onComplete?.(this);
			return;
		}
		this.userData = userData ?? {};
		if (immediate) {
			this.animatedScroll = this.targetScroll = target;
			this.setScroll(this.scroll);
			this.reset();
			this.preventNextNativeScrollEvent();
			this.emit();
			onComplete?.(this);
			this.userData = {};
			requestAnimationFrame(() => {
				this.dispatchScrollendEvent();
			});
			return;
		}
		if (!programmatic) this.targetScroll = target;
		if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing$1;
		else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
		this.animate.fromTo(this.animatedScroll, target, {
			duration,
			easing,
			lerp,
			onStart: () => {
				if (lock) this.isLocked = true;
				this.isScrolling = "smooth";
				onStart?.(this);
			},
			onUpdate: (value, completed) => {
				this.isScrolling = "smooth";
				this.lastVelocity = this.velocity;
				this.velocity = value - this.animatedScroll;
				this.direction = Math.sign(this.velocity);
				this.animatedScroll = value;
				this.setScroll(this.scroll);
				if (programmatic) this.targetScroll = value;
				if (!completed) this.emit();
				if (completed) {
					this.reset();
					this.emit();
					onComplete?.(this);
					this.userData = {};
					requestAnimationFrame(() => {
						this.dispatchScrollendEvent();
					});
					this.preventNextNativeScrollEvent();
				}
			}
		});
	}
	preventNextNativeScrollEvent() {
		this._preventNextNativeScrollEvent = true;
		requestAnimationFrame(() => {
			this._preventNextNativeScrollEvent = false;
		});
	}
	hasNestedScroll(node, { deltaX, deltaY }) {
		const time = Date.now();
		if (!node._lenis) node._lenis = {};
		const cache = node._lenis;
		let hasOverflowX;
		let hasOverflowY;
		let isScrollableX;
		let isScrollableY;
		let hasOverscrollBehaviorX;
		let hasOverscrollBehaviorY;
		let scrollWidth;
		let scrollHeight;
		let clientWidth;
		let clientHeight;
		if (time - (cache.time ?? 0) > 2e3) {
			cache.time = Date.now();
			const computedStyle = window.getComputedStyle(node);
			cache.computedStyle = computedStyle;
			hasOverflowX = [
				"auto",
				"overlay",
				"scroll"
			].includes(computedStyle.overflowX);
			hasOverflowY = [
				"auto",
				"overlay",
				"scroll"
			].includes(computedStyle.overflowY);
			hasOverscrollBehaviorX = ["auto"].includes(computedStyle.overscrollBehaviorX);
			hasOverscrollBehaviorY = ["auto"].includes(computedStyle.overscrollBehaviorY);
			cache.hasOverflowX = hasOverflowX;
			cache.hasOverflowY = hasOverflowY;
			if (!(hasOverflowX || hasOverflowY)) return false;
			scrollWidth = node.scrollWidth;
			scrollHeight = node.scrollHeight;
			clientWidth = node.clientWidth;
			clientHeight = node.clientHeight;
			isScrollableX = scrollWidth > clientWidth;
			isScrollableY = scrollHeight > clientHeight;
			cache.isScrollableX = isScrollableX;
			cache.isScrollableY = isScrollableY;
			cache.scrollWidth = scrollWidth;
			cache.scrollHeight = scrollHeight;
			cache.clientWidth = clientWidth;
			cache.clientHeight = clientHeight;
			cache.hasOverscrollBehaviorX = hasOverscrollBehaviorX;
			cache.hasOverscrollBehaviorY = hasOverscrollBehaviorY;
		} else {
			isScrollableX = cache.isScrollableX;
			isScrollableY = cache.isScrollableY;
			hasOverflowX = cache.hasOverflowX;
			hasOverflowY = cache.hasOverflowY;
			scrollWidth = cache.scrollWidth;
			scrollHeight = cache.scrollHeight;
			clientWidth = cache.clientWidth;
			clientHeight = cache.clientHeight;
			hasOverscrollBehaviorX = cache.hasOverscrollBehaviorX;
			hasOverscrollBehaviorY = cache.hasOverscrollBehaviorY;
		}
		if (!(hasOverflowX && isScrollableX || hasOverflowY && isScrollableY)) return false;
		const orientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
		let scroll;
		let maxScroll;
		let delta;
		let hasOverflow;
		let isScrollable;
		let hasOverscrollBehavior;
		if (orientation === "horizontal") {
			scroll = Math.round(node.scrollLeft);
			maxScroll = scrollWidth - clientWidth;
			delta = deltaX;
			hasOverflow = hasOverflowX;
			isScrollable = isScrollableX;
			hasOverscrollBehavior = hasOverscrollBehaviorX;
		} else if (orientation === "vertical") {
			scroll = Math.round(node.scrollTop);
			maxScroll = scrollHeight - clientHeight;
			delta = deltaY;
			hasOverflow = hasOverflowY;
			isScrollable = isScrollableY;
			hasOverscrollBehavior = hasOverscrollBehaviorY;
		} else return false;
		if (!hasOverscrollBehavior && (scroll >= maxScroll || scroll <= 0)) return true;
		return (delta > 0 ? scroll < maxScroll : scroll > 0) && hasOverflow && isScrollable;
	}
	/**
	* The root element on which lenis is instanced
	*/
	get rootElement() {
		return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
	}
	/**
	* The limit which is the maximum scroll value
	*/
	get limit() {
		if (this.options.naiveDimensions) {
			if (this.isHorizontal) return this.rootElement.scrollWidth - this.rootElement.clientWidth;
			return this.rootElement.scrollHeight - this.rootElement.clientHeight;
		}
		return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
	}
	/**
	* Whether or not the scroll is horizontal
	*/
	get isHorizontal() {
		return this.options.orientation === "horizontal";
	}
	/**
	* The actual scroll value
	*/
	get actualScroll() {
		const wrapper = this.options.wrapper;
		return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
	}
	/**
	* The current scroll value
	*/
	get scroll() {
		return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
	}
	/**
	* The progress of the scroll relative to the limit
	*/
	get progress() {
		return this.limit === 0 ? 1 : this.scroll / this.limit;
	}
	/**
	* Current scroll state
	*/
	get isScrolling() {
		return this._isScrolling;
	}
	set isScrolling(value) {
		if (this._isScrolling !== value) {
			this._isScrolling = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is stopped
	*/
	get isStopped() {
		return this._isStopped;
	}
	set isStopped(value) {
		if (this._isStopped !== value) {
			this._isStopped = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is locked
	*/
	get isLocked() {
		return this._isLocked;
	}
	set isLocked(value) {
		if (this._isLocked !== value) {
			this._isLocked = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is smooth scrolling
	*/
	get isSmooth() {
		return this.isScrolling === "smooth";
	}
	/**
	* Whether the user prefers reduced motion and lenis is honoring it (see `respectReducedMotion` option)
	*/
	get prefersReducedMotion() {
		return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
	}
	/**
	* The class name applied to the wrapper element
	*/
	get className() {
		let className = "lenis";
		if (this.options.autoToggle) className += " lenis-autoToggle";
		if (this.isStopped) className += " lenis-stopped";
		if (this.isLocked) className += " lenis-locked";
		if (this.isScrolling) className += " lenis-scrolling";
		if (this.isScrolling === "smooth") className += " lenis-smooth";
		return className;
	}
	updateClassName() {
		this.cleanUpClassName();
		this.className.split(" ").forEach((className) => {
			this.rootElement.classList.add(className);
		});
	}
	cleanUpClassName() {
		for (const className of Array.from(this.rootElement.classList)) if (className === "lenis" || className.startsWith("lenis-")) this.rootElement.classList.remove(className);
	}
};
// node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
	if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return self;
}
function _inheritsLoose(subClass, superClass) {
	subClass.prototype = Object.create(superClass.prototype);
	subClass.prototype.constructor = subClass;
	subClass.__proto__ = superClass;
}
/*!
* GSAP 3.15.1
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _config = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
};
var _defaults$1 = {
	duration: .5,
	overwrite: false,
	delay: 0
};
var _suppressOverwrites$1;
var _reverting$1;
var _context$2;
var _bigNum$1 = 1e8;
var _tinyNum = 1 / _bigNum$1;
var _2PI = Math.PI * 2;
var _HALF_PI = _2PI / 4;
var _gsID = 0;
var _sqrt = Math.sqrt;
var _cos = Math.cos;
var _sin = Math.sin;
var _isString$1 = function _isString(value) {
	return typeof value === "string";
};
var _isFunction$1 = function _isFunction(value) {
	return typeof value === "function";
};
var _isNumber$1 = function _isNumber(value) {
	return typeof value === "number";
};
var _isUndefined = function _isUndefined(value) {
	return typeof value === "undefined";
};
var _isObject$1 = function _isObject(value) {
	return typeof value === "object";
};
var _isNotFalse = function _isNotFalse(value) {
	return value !== false;
};
var _windowExists$2 = function _windowExists() {
	return typeof window !== "undefined";
};
var _isFuncOrString = function _isFuncOrString(value) {
	return _isFunction$1(value) || _isString$1(value);
};
var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {};
var _isArray = Array.isArray;
var _randomExp = /random\([^)]+\)/g;
var _commaDelimExp = /,\s*/g;
var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var _relExp = /[+-]=-?[.\d]+/;
var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var _globalTimeline;
var _win$3;
var _coreInitted$2;
var _doc$3;
var _globals = {};
var _installScope = {};
var _coreReady;
var _install = function _install(scope) {
	return (_installScope = _merge(scope, _globals)) && gsap$2;
};
var _missingPlugin = function _missingPlugin(property, value) {
	return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
};
var _warn = function _warn(message, suppress) {
	return !suppress && console.warn(message);
};
var _addGlobal = function _addGlobal(name, obj) {
	return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
};
var _emptyFunc = function _emptyFunc() {
	return 0;
};
var _startAtRevertConfig = {
	suppressEvents: true,
	isStart: true,
	kill: false
};
var _revertConfigNoKill = {
	suppressEvents: true,
	kill: false
};
var _revertConfig = { suppressEvents: true };
var _reservedProps = {};
var _lazyTweens = [];
var _lazyLookup = {};
var _lastRenderedFrame;
var _plugins = {};
var _effects = {};
var _nextGCFrame = 30;
var _harnessPlugins = [];
var _callbackNames = "";
var _harness = function _harness(targets) {
	var target = targets[0], harnessPlugin, i;
	_isObject$1(target) || _isFunction$1(target) || (targets = [targets]);
	if (!(harnessPlugin = (target._gsap || {}).harness)) {
		i = _harnessPlugins.length;
		while (i-- && !_harnessPlugins[i].targetTest(target));
		harnessPlugin = _harnessPlugins[i];
	}
	i = targets.length;
	while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
	return targets;
};
var _getCache = function _getCache(target) {
	return target._gsap || _harness(toArray(target))[0]._gsap;
};
var _getProperty = function _getProperty(target, property, v) {
	return (v = target[property]) && _isFunction$1(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
};
var _forEachName = function _forEachName(names, func) {
	return (names = names.split(",")).forEach(func) || names;
};
var _round$1 = function _round(value) {
	return Math.round(value * 1e5) / 1e5 || 0;
};
var _roundPrecise = function _roundPrecise(value) {
	return Math.round(value * 1e7) / 1e7 || 0;
};
var _parseRelative = function _parseRelative(start, value) {
	var operator = value.charAt(0), end = parseFloat(value.substr(2));
	start = parseFloat(start);
	return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
};
var _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
	var l = toFind.length, i = 0;
	for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
	return i < l;
};
var _lazyRender = function _lazyRender() {
	var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
	_lazyLookup = {};
	_lazyTweens.length = 0;
	for (i = 0; i < l; i++) {
		tween = a[i];
		tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
	}
};
var _isRevertWorthy = function _isRevertWorthy(animation) {
	return !!(animation._initted || animation._startAt || animation.add);
};
var _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
	_lazyTweens.length && !_reverting$1 && _lazyRender();
	animation.render(time, suppressEvents, force || !!(_reverting$1 && time < 0 && _isRevertWorthy(animation)));
	_lazyTweens.length && !_reverting$1 && _lazyRender();
};
var _numericIfPossible = function _numericIfPossible(value) {
	var n = parseFloat(value);
	return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString$1(value) ? value.trim() : value;
};
var _passThrough$1 = function _passThrough(p) {
	return p;
};
var _setDefaults$1 = function _setDefaults(obj, defaults) {
	for (var p in defaults) p in obj || (obj[p] = defaults[p]);
	return obj;
};
var _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
	return function(obj, defaults) {
		for (var p in defaults) p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
	};
};
var _merge = function _merge(base, toMerge) {
	for (var p in toMerge) base[p] = toMerge[p];
	return base;
};
var _mergeDeep = function _mergeDeep(base, toMerge) {
	for (var p in toMerge) p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject$1(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
	return base;
};
var _copyExcluding = function _copyExcluding(obj, excluding) {
	var copy = {}, p;
	for (p in obj) p in excluding || (copy[p] = obj[p]);
	return copy;
};
var _inheritDefaults = function _inheritDefaults(vars) {
	var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults$1;
	if (_isNotFalse(vars.inherit)) while (parent) {
		func(vars, parent.vars.defaults);
		parent = parent.parent || parent._dp;
	}
	return vars;
};
var _arraysMatch = function _arraysMatch(a1, a2) {
	var i = a1.length, match = i === a2.length;
	while (match && i-- && a1[i] === a2[i]);
	return i < 0;
};
var _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = parent[lastProp], t;
	if (sortBy) {
		t = child[sortBy];
		while (prev && prev[sortBy] > t) prev = prev._prev;
	}
	if (prev) {
		child._next = prev._next;
		prev._next = child;
	} else {
		child._next = parent[firstProp];
		parent[firstProp] = child;
	}
	if (child._next) child._next._prev = child;
	else parent[lastProp] = child;
	child._prev = prev;
	child.parent = child._dp = parent;
	return child;
};
var _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = child._prev, next = child._next;
	if (prev) prev._next = next;
	else if (parent[firstProp] === child) parent[firstProp] = next;
	if (next) next._prev = prev;
	else if (parent[lastProp] === child) parent[lastProp] = prev;
	child._next = child._prev = child.parent = null;
};
var _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
	child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
	child._act = 0;
};
var _uncache = function _uncache(animation, child) {
	if (animation && (!child || child._end > animation._dur || child._start < 0)) {
		var a = animation;
		while (a) {
			a._dirty = 1;
			a = a.parent;
		}
	}
	return animation;
};
var _recacheAncestors = function _recacheAncestors(animation) {
	var parent = animation.parent;
	while (parent && parent.parent) {
		parent._dirty = 1;
		parent.totalDuration();
		parent = parent.parent;
	}
	return animation;
};
var _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
	return tween._startAt && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
};
var _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
	return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
};
var _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
	return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
};
var _animationCycle = function _animationCycle(tTime, cycleDuration) {
	var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
	return tTime && whole === tTime ? whole - 1 : whole;
};
var _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
	return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
};
var _setEnd = function _setEnd(animation) {
	return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
};
var _alignPlayhead = function _alignPlayhead(animation, totalTime) {
	var parent = animation._dp;
	if (parent && parent.smoothChildTiming && animation._ts) {
		animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
		_setEnd(animation);
		parent._dirty || _uncache(parent, animation);
	}
	return animation;
};
var _postAddChecks = function _postAddChecks(timeline, child) {
	var t;
	if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
		t = _parentToChildTotalTime(timeline.rawTime(), child);
		if (!child._dur || _clamp$1(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
	}
	if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
		if (timeline._dur < timeline.duration()) {
			t = timeline;
			while (t._dp) {
				t.rawTime() >= 0 && t.totalTime(t._tTime);
				t = t._dp;
			}
		}
		timeline._zTime = -_tinyNum;
	}
};
var _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
	child.parent && _removeFromParent(child);
	child._start = _roundPrecise((_isNumber$1(position) ? position : !position && _isFromOrFromStart(child) && (!timeline._last || timeline._last._start >= timeline._time) ? timeline._last ? timeline._last._start : timeline._time : position || timeline !== _globalTimeline ? _parsePosition$1(timeline, position, child) : timeline._time) + child._delay);
	child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
	_addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
	_isFromOrFromStart(child) || (timeline._recent = child);
	skipChecks || _postAddChecks(timeline, child);
	timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
	return timeline;
};
var _scrollTrigger = function _scrollTrigger(animation, trigger) {
	return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
};
var _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
	_initTween(tween, time, tTime);
	if (!tween._initted) return 1;
	if (!force && tween._pt && !_reverting$1 && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
		_lazyTweens.push(tween);
		tween._lazy = [tTime, suppressEvents];
		return 1;
	}
};
var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
	var parent = _ref.parent;
	return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
};
var _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
	var data = _ref2.data;
	return data === "isFromStart" || data === "isStart";
};
var _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
	var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
	if (repeatDelay && tween._repeat) {
		tTime = _clamp$1(0, tween._tDur, totalTime);
		iteration = _animationCycle(tTime, repeatDelay);
		tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
		if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
			prevRatio = 1 - ratio;
			tween.vars.repeatRefresh && tween._initted && tween.invalidate();
		}
	}
	if (ratio !== prevRatio || _reverting$1 || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
		if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) return;
		prevIteration = tween._zTime;
		tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
		suppressEvents || (suppressEvents = totalTime && !prevIteration);
		tween.ratio = ratio;
		tween._from && (ratio = 1 - ratio);
		tween._time = 0;
		tween._tTime = tTime;
		pt = tween._pt;
		while (pt) {
			pt.r(ratio, pt.d);
			pt = pt._next;
		}
		totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
		tween._onUpdate && !suppressEvents && _callback$1(tween, "onUpdate");
		tTime && tween._repeat && !suppressEvents && tween.parent && _callback$1(tween, "onRepeat");
		if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
			ratio && _removeFromParent(tween, 1);
			if (!suppressEvents && !_reverting$1) {
				_callback$1(tween, ratio ? "onComplete" : "onReverseComplete", true);
				tween._prom && tween._prom();
			}
		}
	} else if (!tween._zTime) tween._zTime = totalTime;
};
var _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
	var child;
	if (time > prevTime) {
		child = animation._first;
		while (child && child._start <= time) {
			if (child.data === "isPause" && child._start > prevTime) return child;
			child = child._next;
		}
	} else {
		child = animation._last;
		while (child && child._start >= time) {
			if (child.data === "isPause" && child._start < prevTime) return child;
			child = child._prev;
		}
	}
};
var _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
	var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
	totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
	animation._dur = dur;
	animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
	totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
	animation.parent && _setEnd(animation);
	skipUncache || _uncache(animation.parent, animation);
	return animation;
};
var _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
	return animation instanceof Timeline$1 ? _uncache(animation) : _setDuration(animation, animation._dur);
};
var _zeroPosition = {
	_start: 0,
	endTime: _emptyFunc,
	totalDuration: _emptyFunc
};
var _parsePosition$1 = function _parsePosition(animation, position, percentAnimation) {
	var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum$1 ? recent.endTime(false) : animation._dur, i, offset, isPercent;
	if (_isString$1(position) && (isNaN(position) || position in labels)) {
		offset = position.charAt(0);
		isPercent = position.substr(-1) === "%";
		i = position.indexOf("=");
		if (offset === "<" || offset === ">") {
			i >= 0 && (position = position.replace(/=/, ""));
			return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
		}
		if (i < 0) {
			position in labels || (labels[position] = clippedDuration);
			return labels[position];
		}
		offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
		if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
		return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
	}
	return position == null ? clippedDuration : +position;
};
var _createTweenType = function _createTweenType(type, params, timeline) {
	var isLegacy = _isNumber$1(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
	isLegacy && (vars.duration = params[1]);
	vars.parent = timeline;
	if (type) {
		irVars = vars;
		parent = timeline;
		while (parent && !("immediateRender" in irVars)) {
			irVars = parent.vars.defaults || {};
			parent = _isNotFalse(parent.vars.inherit) && parent.parent;
		}
		vars.immediateRender = _isNotFalse(irVars.immediateRender);
		type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
	}
	return new Tween(params[0], vars, params[varsIndex + 1]);
};
var _conditionalReturn = function _conditionalReturn(value, func) {
	return value || value === 0 ? func(value) : func;
};
var _clamp$1 = function _clamp(min, max, value) {
	return value < min ? min : value > max ? max : value;
};
var getUnit = function getUnit(value, v) {
	return !_isString$1(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
};
var clamp$1 = function clamp(min, max, value) {
	return _conditionalReturn(value, function(v) {
		return _clamp$1(min, max, v);
	});
};
var _slice = [].slice;
var _isArrayLike = function _isArrayLike(value, nonEmpty) {
	return value && _isObject$1(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject$1(value[0])) && !value.nodeType && value !== _win$3;
};
var _flatten = function _flatten(ar, leaveStrings, accumulator) {
	if (accumulator === void 0) accumulator = [];
	return ar.forEach(function(value) {
		var _accumulator;
		return _isString$1(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
	}) || accumulator;
};
var toArray = function toArray(value, scope, leaveStrings) {
	return _context$2 && !scope && _context$2.selector ? _context$2.selector(value) : _isString$1(value) && !leaveStrings && (_coreInitted$2 || !_wake()) ? _slice.call((scope || _doc$3).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
};
var selector = function selector(value) {
	value = toArray(value)[0] || _warn("Invalid scope") || {};
	return function(v) {
		var el = value.current || value.nativeElement || value;
		return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$3.createElement("div") : value);
	};
};
var shuffle = function shuffle(a) {
	return a.sort(function() {
		return .5 - Math.random();
	});
};
var distribute = function distribute(v) {
	if (_isFunction$1(v)) return v;
	var vars = _isObject$1(v) ? v : { each: v }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
	if (_isString$1(from)) ratioX = ratioY = {
		center: .5,
		edges: .5,
		end: 1
	}[from] || 0;
	else if (!isDecimal && ratios) {
		ratioX = from[0];
		ratioY = from[1];
	}
	return function(i, target, a) {
		var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
		if (!distances) {
			wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
			if (!wrapAt) {
				max = -_bigNum$1;
				while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
				wrapAt < l && wrapAt--;
			}
			distances = cache[l] = [];
			originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
			originY = wrapAt === _bigNum$1 ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
			max = 0;
			min = _bigNum$1;
			for (j = 0; j < l; j++) {
				x = j % wrapAt - originX;
				y = originY - (j / wrapAt | 0);
				distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
				d > max && (max = d);
				d < min && (min = d);
			}
			from === "random" && shuffle(distances);
			distances.max = max - min;
			distances.min = min;
			distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
			distances.b = l < 0 ? base - l : base;
			distances.u = getUnit(vars.amount || vars.each) || 0;
			ease = ease && l < 0 ? _invertEase(ease) : ease;
		}
		l = (distances[i] - distances.min) / distances.max || 0;
		return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
	};
};
var _roundModifier = function _roundModifier(v) {
	var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
	return function(raw) {
		var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
		return (n - n % 1) / p + (_isNumber$1(raw) ? 0 : getUnit(raw));
	};
};
var snap = function snap(snapTo, value) {
	var isArray = _isArray(snapTo), radius, is2D;
	if (!isArray && _isObject$1(snapTo)) {
		radius = isArray = snapTo.radius || _bigNum$1;
		if (snapTo.values) {
			snapTo = toArray(snapTo.values);
			if (is2D = !_isNumber$1(snapTo[0])) radius *= radius;
		} else snapTo = _roundModifier(snapTo.increment);
	}
	return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction$1(snapTo) ? function(raw) {
		is2D = snapTo(raw);
		return Math.abs(is2D - raw) <= radius ? is2D : raw;
	} : function(raw) {
		var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum$1, closest = 0, i = snapTo.length, dx, dy;
		while (i--) {
			if (is2D) {
				dx = snapTo[i].x - x;
				dy = snapTo[i].y - y;
				dx = dx * dx + dy * dy;
			} else dx = Math.abs(snapTo[i] - x);
			if (dx < min) {
				min = dx;
				closest = i;
			}
		}
		closest = !radius || min <= radius ? snapTo[closest] : raw;
		return is2D || closest === raw || _isNumber$1(raw) ? closest : closest + getUnit(raw);
	});
};
var random = function random(min, max, roundingIncrement, returnFunction) {
	return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
		return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
	});
};
var pipe$1 = function pipe() {
	for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
	return function(value) {
		return functions.reduce(function(v, f) {
			return f(v);
		}, value);
	};
};
var unitize = function unitize(func, unit) {
	return function(value) {
		return func(parseFloat(value)) + (unit || getUnit(value));
	};
};
var normalize = function normalize(min, max, value) {
	return mapRange(min, max, 0, 1, value);
};
var _wrapArray = function _wrapArray(a, wrapper, value) {
	return _conditionalReturn(value, function(index) {
		return a[~~wrapper(index)];
	});
};
var wrap$1 = function wrap(min, max, value) {
	var range = max - min;
	return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
		return (range + (value - min) % range) % range + min;
	});
};
var wrapYoyo = function wrapYoyo(min, max, value) {
	var range = max - min, total = range * 2;
	return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
		value = (total + (value - min) % total) % total || 0;
		return min + (value > range ? total - value : value);
	});
};
var _replaceRandom = function _replaceRandom(s) {
	return s.replace(_randomExp, function(match) {
		var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
		return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
	});
};
var mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
	var inRange = inMax - inMin, outRange = outMax - outMin;
	return _conditionalReturn(value, function(value) {
		return outMin + ((value - inMin) / inRange * outRange || 0);
	});
};
var interpolate$1 = function interpolate(start, end, progress, mutate) {
	var func = isNaN(start + end) ? 0 : function(p) {
		return (1 - p) * start + p * end;
	};
	if (!func) {
		var isString = _isString$1(start), master = {}, p, i, interpolators, l, il;
		progress === true && (mutate = 1) && (progress = null);
		if (isString) {
			start = { p: start };
			end = { p: end };
		} else if (_isArray(start) && !_isArray(end)) {
			interpolators = [];
			l = start.length;
			il = l - 2;
			for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
			l--;
			func = function func(p) {
				p *= l;
				var i = Math.min(il, ~~p);
				return interpolators[i](p - i);
			};
			progress = end;
		} else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
		if (!interpolators) {
			for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
			func = function func(p) {
				return _renderPropTweens(p, master) || (isString ? start.p : start);
			};
		}
	}
	return _conditionalReturn(progress, func);
};
var _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
	var labels = timeline.labels, min = _bigNum$1, p, distance, label;
	for (p in labels) {
		distance = labels[p] - fromTime;
		if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
			label = p;
			min = distance;
		}
	}
	return label;
};
var _callback$1 = function _callback(animation, type, executeLazyFirst) {
	var v = animation.vars, callback = v[type], prevContext = _context$2, context = animation._ctx, params, scope, result;
	if (!callback) return;
	params = v[type + "Params"];
	scope = v.callbackScope || animation;
	executeLazyFirst && _lazyTweens.length && _lazyRender();
	context && (_context$2 = context);
	result = params ? callback.apply(scope, params) : callback.call(scope);
	_context$2 = prevContext;
	return result;
};
var _interrupt = function _interrupt(animation) {
	_removeFromParent(animation);
	animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$1);
	animation.progress() < 1 && _callback$1(animation, "onInterrupt");
	return animation;
};
var _quickTween;
var _registerPluginQueue = [];
var _createPlugin = function _createPlugin(config) {
	if (!config) return;
	config = !config.name && config["default"] || config;
	if (_windowExists$2() || config.headless) {
		var name = config.name, isFunc = _isFunction$1(config), Plugin = name && !isFunc && config.init ? function() {
			this._props = [];
		} : config, instanceDefaults = {
			init: _emptyFunc,
			render: _renderPropTweens,
			add: _addPropTween,
			kill: _killPropTweensOf,
			modifier: _addPluginModifier,
			rawVars: 0
		}, statics = {
			targetTest: 0,
			get: 0,
			getSetter: _getSetter,
			aliases: {},
			register: 0
		};
		_wake();
		if (config !== Plugin) {
			if (_plugins[name]) return;
			_setDefaults$1(Plugin, _setDefaults$1(_copyExcluding(config, instanceDefaults), statics));
			_merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
			_plugins[Plugin.prop = name] = Plugin;
			if (config.targetTest) {
				_harnessPlugins.push(Plugin);
				_reservedProps[name] = 1;
			}
			name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
		}
		_addGlobal(name, Plugin);
		config.register && config.register(gsap$2, Plugin, PropTween);
	} else _registerPluginQueue.push(config);
};
var _255 = 255;
var _colorLookup = {
	aqua: [
		0,
		_255,
		_255
	],
	lime: [
		0,
		_255,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		_255
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		_255,
		_255,
		_255
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		_255,
		_255,
		0
	],
	orange: [
		_255,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		_255,
		0,
		0
	],
	pink: [
		_255,
		192,
		203
	],
	cyan: [
		0,
		_255,
		_255
	],
	transparent: [
		_255,
		_255,
		_255,
		0
	]
};
var _hue = function _hue(h, m1, m2) {
	h += h < 0 ? 1 : h > 1 ? -1 : 0;
	return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
};
var splitColor$1 = function splitColor(v, toHSL, forceAlpha) {
	var a = !v ? _colorLookup.black : _isNumber$1(v) ? [
		v >> 16,
		v >> 8 & _255,
		v & _255
	] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
	if (!a) {
		if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
		if (_colorLookup[v]) a = _colorLookup[v];
		else if (v.charAt(0) === "#") {
			if (v.length < 6) {
				r = v.charAt(1);
				g = v.charAt(2);
				b = v.charAt(3);
				v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
			}
			if (v.length === 9) {
				a = parseInt(v.substr(1, 6), 16);
				return [
					a >> 16,
					a >> 8 & _255,
					a & _255,
					parseInt(v.substr(7), 16) / 255
				];
			}
			v = parseInt(v.substr(1), 16);
			a = [
				v >> 16,
				v >> 8 & _255,
				v & _255
			];
		} else if (v.substr(0, 3) === "hsl") {
			a = wasHSL = v.match(_strictNumExp);
			if (!toHSL) {
				h = +a[0] % 360 / 360;
				s = +a[1] / 100;
				l = +a[2] / 100;
				g = l <= .5 ? l * (s + 1) : l + s - l * s;
				r = l * 2 - g;
				a.length > 3 && (a[3] *= 1);
				a[0] = _hue(h + 1 / 3, r, g);
				a[1] = _hue(h, r, g);
				a[2] = _hue(h - 1 / 3, r, g);
			} else if (~v.indexOf("=")) {
				a = v.match(_numExp);
				forceAlpha && a.length < 4 && (a[3] = 1);
				return a;
			}
		} else a = v.match(_strictNumExp) || _colorLookup.transparent;
		a = a.map(Number);
	}
	if (toHSL && !wasHSL) {
		r = a[0] / _255;
		g = a[1] / _255;
		b = a[2] / _255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		l = (max + min) / 2;
		if (max === min) h = s = 0;
		else {
			d = max - min;
			s = l > .5 ? d / (2 - max - min) : d / (max + min);
			h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
			h *= 60;
		}
		a[0] = ~~(h + .5);
		a[1] = ~~(s * 100 + .5);
		a[2] = ~~(l * 100 + .5);
	}
	forceAlpha && a.length < 4 && (a[3] = 1);
	return a;
};
var _colorOrderData = function _colorOrderData(v) {
	var values = [], c = [], i = -1;
	v.split(_colorExp).forEach(function(v) {
		var a = v.match(_numWithUnitExp) || [];
		values.push.apply(values, a);
		c.push(i += a.length + 1);
	});
	values.c = c;
	return values;
};
var _formatColors = function _formatColors(s, toHSL, orderMatchData) {
	var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
	if (!colors) return s;
	colors = colors.map(function(color) {
		return (color = splitColor$1(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
	});
	if (orderMatchData) {
		d = _colorOrderData(s);
		c = orderMatchData.c;
		if (c.join(result) !== d.c.join(result)) {
			shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
			l = shell.length - 1;
			for (; i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
		}
	}
	if (!shell) {
		shell = s.split(_colorExp);
		l = shell.length - 1;
		for (; i < l; i++) result += shell[i] + colors[i];
	}
	return result + shell[l];
};
var _colorExp = function() {
	var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
	for (p in _colorLookup) s += "|" + p + "\\b";
	return new RegExp(s + ")", "gi");
}();
var _hslExp = /hsl[a]?\(/;
var _colorStringFilter = function _colorStringFilter(a) {
	var combined = a.join(" "), toHSL;
	_colorExp.lastIndex = 0;
	if (_colorExp.test(combined)) {
		toHSL = _hslExp.test(combined);
		a[1] = _formatColors(a[1], toHSL);
		a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
		return true;
	}
};
var _tickerActive;
var _ticker = function() {
	var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
		var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
		(elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
		_lastUpdate += elapsed;
		time = _lastUpdate - _startTime;
		overlap = time - _nextTime;
		if (overlap > 0 || manual) {
			frame = ++_self.frame;
			_delta = time - _self.time * 1e3;
			_self.time = time = time / 1e3;
			_nextTime += overlap + (overlap >= _gap ? 0 : _gap - overlap);
			dispatch = 1;
		}
		manual || (_id = _req(_tick));
		if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
	};
	_self = {
		time: 0,
		frame: 0,
		tick: function tick() {
			_tick(true);
		},
		deltaRatio: function deltaRatio(fps) {
			return _delta / (1e3 / (fps || 60));
		},
		wake: function wake() {
			if (_coreReady) {
				if (!_coreInitted$2 && _windowExists$2()) {
					_win$3 = _coreInitted$2 = window;
					_doc$3 = _win$3.document || {};
					_globals.gsap = gsap$2;
					(_win$3.gsapVersions || (_win$3.gsapVersions = [])).push(gsap$2.version);
					_install(_installScope || _win$3.GreenSockGlobals || !_win$3.gsap && _win$3 || {});
					_registerPluginQueue.forEach(_createPlugin);
				}
				_raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
				_id && _self.sleep();
				_req = _raf || function(f) {
					return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
				};
				_tickerActive = 1;
				_tick(2);
			}
		},
		sleep: function sleep() {
			(_raf ? cancelAnimationFrame : clearTimeout)(_id);
			_tickerActive = 0;
			_req = _emptyFunc;
		},
		lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
			_lagThreshold = threshold || Infinity;
			_adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
		},
		fps: function fps(_fps) {
			_gap = 1e3 / (_fps || 240);
			_nextTime = _self.time * 1e3 + _gap;
		},
		add: function add(callback, once, prioritize) {
			var func = once ? function(t, d, f, v) {
				callback(t, d, f, v);
				_self.remove(func);
			} : callback;
			_self.remove(callback);
			_listeners[prioritize ? "unshift" : "push"](func);
			_wake();
			return func;
		},
		remove: function remove(callback, i) {
			~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
		},
		_listeners
	};
	return _self;
}();
var _wake = function _wake() {
	return !_tickerActive && _ticker.wake();
};
var _easeMap = {};
var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
var _quotesExp = /["']/g;
var _parseObjectInString = function _parseObjectInString(value) {
	var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
	for (; i < l; i++) {
		val = split[i];
		index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
		parsedVal = val.substr(0, index);
		obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
		key = val.substr(index + 1).trim();
	}
	return obj;
};
var _valueInParentheses = function _valueInParentheses(value) {
	var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
	return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
};
var _configEaseFromString = function _configEaseFromString(name) {
	var split = (name + "").split("("), ease = _easeMap[split[0]];
	return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
};
var _invertEase = function _invertEase(ease) {
	return function(p) {
		return 1 - ease(1 - p);
	};
};
var _parseEase = function _parseEase(ease, defaultEase) {
	return !ease ? defaultEase : (_isFunction$1(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
};
var _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
	if (easeOut === void 0) easeOut = function easeOut(p) {
		return 1 - easeIn(1 - p);
	};
	if (easeInOut === void 0) easeInOut = function easeInOut(p) {
		return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
	};
	var ease = {
		easeIn,
		easeOut,
		easeInOut
	}, lowercaseName;
	_forEachName(names, function(name) {
		_easeMap[name] = _globals[name] = ease;
		_easeMap[lowercaseName = name.toLowerCase()] = easeOut;
		for (var p in ease) _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
	});
	return ease;
};
var _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
	return function(p) {
		return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
	};
};
var _configElastic = function _configElastic(type, amplitude, period) {
	var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
		return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	p2 = _2PI / p2;
	ease.config = function(amplitude, period) {
		return _configElastic(type, amplitude, period);
	};
	return ease;
};
var _configBack = function _configBack(type, overshoot) {
	if (overshoot === void 0) overshoot = 1.70158;
	var easeOut = function easeOut(p) {
		return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	ease.config = function(overshoot) {
		return _configBack(type, overshoot);
	};
	return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
	var power = i < 5 ? i + 1 : i;
	_insertEase(name + ",Power" + (power - 1), i ? function(p) {
		return Math.pow(p, power);
	} : function(p) {
		return p;
	}, function(p) {
		return 1 - Math.pow(1 - p, power);
	}, function(p) {
		return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
	});
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
	var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
		return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
	};
	_insertEase("Bounce", function(p) {
		return 1 - easeOut(1 - p);
	}, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
	return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
_insertEase("Circ", function(p) {
	return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
	return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = { config: function config(steps, immediateStart) {
	if (steps === void 0) steps = 1;
	var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
	return function(p) {
		return ((p2 * _clamp$1(0, max, p) | 0) + p3) * p1;
	};
} };
_defaults$1.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
	return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
	this.id = _gsID++;
	target._gsap = this;
	this.target = target;
	this.harness = harness;
	this.get = harness ? harness.get : _getProperty;
	this.set = harness ? harness.getSetter : _getSetter;
};
var Animation$1 = /*#__PURE__*/ function() {
	function Animation(vars) {
		this.vars = vars;
		this._delay = +vars.delay || 0;
		if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
			this._rDelay = vars.repeatDelay || 0;
			this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
		}
		this._ts = 1;
		_setDuration(this, +vars.duration, 1, 1);
		this.data = vars.data;
		if (_context$2) {
			this._ctx = _context$2;
			_context$2.data.push(this);
		}
		_tickerActive || _ticker.wake();
	}
	var _proto = Animation.prototype;
	_proto.delay = function delay(value) {
		if (value || value === 0) {
			this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
			this._delay = value;
			return this;
		}
		return this._delay;
	};
	_proto.duration = function duration(value) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
	};
	_proto.totalDuration = function totalDuration(value) {
		if (!arguments.length) return this._tDur;
		this._dirty = 0;
		return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
	};
	_proto.totalTime = function totalTime(_totalTime, suppressEvents) {
		_wake();
		if (!arguments.length) return this._tTime;
		var parent = this._dp;
		if (parent && parent.smoothChildTiming && this._ts) {
			_alignPlayhead(this, _totalTime);
			!parent._dp || parent.parent || _postAddChecks(parent, this);
			while (parent && parent.parent) {
				if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
				parent = parent.parent;
			}
			if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
		}
		if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
			this._ts || (this._pTime = _totalTime);
			_lazySafeRender(this, _totalTime, suppressEvents);
		}
		return this;
	};
	_proto.time = function time(value, suppressEvents) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
	};
	_proto.totalProgress = function totalProgress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	};
	_proto.progress = function progress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
	};
	_proto.iteration = function iteration(value, suppressEvents) {
		var cycleDuration = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
	};
	_proto.timeScale = function timeScale(value, suppressEvents) {
		if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
		if (this._rts === value) return this;
		var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime, wasReversed = this._rts < 0;
		this._rts = +value || 0;
		this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
		var tDur = this.totalDuration();
		if (wasReversed !== this._rts < 0 || tTime > 0 && tTime < tDur) this.totalTime(_clamp$1(-Math.abs(this._delay), tDur, tTime), suppressEvents !== false);
		_setEnd(this);
		return _recacheAncestors(this);
	};
	_proto.paused = function paused(value) {
		if (!arguments.length) return this._ps;
		if (this._ps !== value) {
			this._ps = value;
			if (value) {
				this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
				this._ts = this._act = 0;
			} else {
				_wake();
				this._ts = this._rts;
				var tTime = this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, suppress = this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum, child;
				if (suppress) {
					this._tTime -= _tinyNum;
					child = this._first;
					while (child) {
						if (!child._dur && child._zTime < 0 && child._ts && child._start <= tTime + _tinyNum) {
							suppress = false;
							break;
						}
						child = child._next;
					}
				}
				this.totalTime(tTime, suppress);
			}
		}
		return this;
	};
	_proto.startTime = function startTime(value) {
		if (arguments.length) {
			this._start = _roundPrecise(value);
			var parent = this.parent || this._dp;
			parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
			return this;
		}
		return this._start;
	};
	_proto.endTime = function endTime(includeRepeats) {
		return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	};
	_proto.rawTime = function rawTime(wrapRepeats) {
		var parent = this.parent || this._dp;
		return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
	};
	_proto.revert = function revert(config) {
		if (config === void 0) config = _revertConfig;
		var prevIsReverting = _reverting$1;
		_reverting$1 = config;
		if (_isRevertWorthy(this)) {
			this.timeline && this.timeline.revert(config);
			this.totalTime(-.01, config.suppressEvents);
		}
		this.data !== "nested" && config.kill !== false && this.kill();
		_reverting$1 = prevIsReverting;
		return this;
	};
	_proto.globalTime = function globalTime(rawTime) {
		var animation = this, time = arguments.length ? rawTime : animation.rawTime();
		while (animation) {
			time = animation._start + time / (Math.abs(animation._ts) || 1);
			animation = animation._dp;
		}
		return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
	};
	_proto.repeat = function repeat(value) {
		if (arguments.length) {
			this._repeat = value === Infinity ? -2 : value;
			return _onUpdateTotalDuration(this);
		}
		return this._repeat === -2 ? Infinity : this._repeat;
	};
	_proto.repeatDelay = function repeatDelay(value) {
		if (arguments.length) {
			var time = this._time;
			this._rDelay = value;
			_onUpdateTotalDuration(this);
			return time ? this.time(time) : this;
		}
		return this._rDelay;
	};
	_proto.yoyo = function yoyo(value) {
		if (arguments.length) {
			this._yoyo = value;
			return this;
		}
		return this._yoyo;
	};
	_proto.seek = function seek(position, suppressEvents) {
		return this.totalTime(_parsePosition$1(this, position), _isNotFalse(suppressEvents));
	};
	_proto.restart = function restart(includeDelay, suppressEvents) {
		this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
		this._dur || (this._zTime = -_tinyNum);
		return this;
	};
	_proto.play = function play(from, suppressEvents) {
		from != null && this.seek(from, suppressEvents);
		return this.reversed(false).paused(false);
	};
	_proto.reverse = function reverse(from, suppressEvents) {
		from != null && this.seek(from || this.totalDuration(), suppressEvents);
		return this.reversed(true).paused(false);
	};
	_proto.pause = function pause(atTime, suppressEvents) {
		atTime != null && this.seek(atTime, suppressEvents);
		return this.paused(true);
	};
	_proto.resume = function resume() {
		return this.paused(false);
	};
	_proto.reversed = function reversed(value) {
		if (arguments.length) {
			!!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
			return this;
		}
		return this._rts < 0;
	};
	_proto.invalidate = function invalidate() {
		this._initted = this._act = 0;
		this._zTime = -_tinyNum;
		return this;
	};
	_proto.isActive = function isActive() {
		var parent = this.parent || this._dp, start = this._start, rawTime;
		return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
	};
	_proto.eventCallback = function eventCallback(type, callback, params) {
		var vars = this.vars;
		if (arguments.length > 1) {
			if (!callback) delete vars[type];
			else {
				vars[type] = callback;
				params && (vars[type + "Params"] = params);
				type === "onUpdate" && (this._onUpdate = callback);
			}
			return this;
		}
		return vars[type];
	};
	_proto.then = function then(onFulfilled) {
		var self = this, prevProm = self._prom;
		return new Promise(function(resolve) {
			var f = _isFunction$1(onFulfilled) ? onFulfilled : _passThrough$1, _resolve = function _resolve() {
				var _then = self.then;
				self.then = null;
				prevProm && prevProm();
				_isFunction$1(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
				resolve(f);
				self.then = _then;
			};
			if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
			else self._prom = _resolve;
		});
	};
	_proto.kill = function kill() {
		_interrupt(this);
	};
	return Animation;
}();
_setDefaults$1(Animation$1.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: false,
	parent: null,
	_initted: false,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -_tinyNum,
	_prom: 0,
	_ps: false,
	_rts: 1
});
var Timeline$1 = /*#__PURE__*/ function(_Animation) {
	_inheritsLoose(Timeline, _Animation);
	function Timeline(vars, position) {
		var _this;
		if (vars === void 0) vars = {};
		_this = _Animation.call(this, vars) || this;
		_this.labels = {};
		_this.smoothChildTiming = !!vars.smoothChildTiming;
		_this.autoRemoveChildren = !!vars.autoRemoveChildren;
		_this._sort = _isNotFalse(vars.sortChildren);
		_globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
		vars.reversed && _this.reverse();
		vars.paused && _this.paused(true);
		vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
		return _this;
	}
	var _proto2 = Timeline.prototype;
	_proto2.to = function to(targets, vars, position) {
		_createTweenType(0, arguments, this);
		return this;
	};
	_proto2.from = function from(targets, vars, position) {
		_createTweenType(1, arguments, this);
		return this;
	};
	_proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
		_createTweenType(2, arguments, this);
		return this;
	};
	_proto2.set = function set(targets, vars, position) {
		vars.duration = 0;
		vars.parent = this;
		_inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
		vars.immediateRender = !!vars.immediateRender;
		new Tween(targets, vars, _parsePosition$1(this, position), 1);
		return this;
	};
	_proto2.call = function call(callback, params, position) {
		return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
	};
	_proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.duration = duration;
		vars.stagger = vars.stagger || stagger;
		vars.onComplete = onCompleteAll;
		vars.onCompleteParams = onCompleteAllParams;
		vars.parent = this;
		new Tween(targets, vars, _parsePosition$1(this, position));
		return this;
	};
	_proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.runBackwards = 1;
		_inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
		return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
		toVars.startAt = fromVars;
		_inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
		return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
		this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
		if (tTime !== this._tTime || force || crossingStart) {
			if (prevTime !== this._time && dur) {
				tTime += this._time - prevTime;
				totalTime += this._time - prevTime;
			}
			time = tTime;
			prevStart = this._start;
			timeScale = this._ts;
			prevPaused = !timeScale;
			if (crossingStart) {
				dur || (prevTime = this._zTime);
				(totalTime || !suppressEvents) && (this._zTime = totalTime);
			}
			if (this._repeat) {
				yoyo = this._yoyo;
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					}
					time > dur && (time = dur);
				}
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				!prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
				if (yoyo && iteration & 1) {
					time = dur - time;
					isYoyo = 1;
				}
				if (iteration !== prevIteration && !this._lock) {
					var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
					iteration < prevIteration && (rewinding = !rewinding);
					prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
					this._lock = 1;
					this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
					this._tTime = tTime;
					!suppressEvents && this.parent && _callback$1(this, "onRepeat");
					if (this.vars.repeatRefresh && !isYoyo) {
						this.invalidate()._lock = 1;
						prevIteration = iteration;
					}
					if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
					dur = this._dur;
					tDur = this._tDur;
					if (doesWrap) {
						this._lock = 2;
						prevTime = rewinding ? dur : -1e-4;
						this.render(prevTime, true);
						this.vars.repeatRefresh && !isYoyo && this.invalidate();
					}
					this._lock = 0;
					if (!this._ts && !prevPaused) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2) {
				pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
				if (pauseTween) tTime -= time - (time = pauseTween._start);
			}
			this._tTime = tTime;
			this._time = time;
			this._act = !!timeScale;
			if (!this._initted) {
				this._onUpdate = this.vars.onUpdate;
				this._initted = 1;
				this._zTime = totalTime;
				prevTime = 0;
			}
			if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
				_callback$1(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			if (time >= prevTime && totalTime >= 0) {
				child = this._first;
				while (child) {
					next = child._next;
					if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = -_tinyNum);
							break;
						}
					}
					child = next;
				}
			} else {
				child = this._last;
				var adjustedTime = totalTime < 0 ? totalTime : time;
				while (child) {
					next = child._prev;
					if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting$1 && _isRevertWorthy(child));
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
							break;
						}
					}
					child = next;
				}
			}
			if (pauseTween && !suppressEvents) {
				this.pause();
				pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
				if (this._ts) {
					this._start = prevStart;
					_setEnd(this);
					return this.render(totalTime, suppressEvents, force);
				}
			}
			this._onUpdate && !suppressEvents && _callback$1(this, "onUpdate", true);
			if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
				if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
					if (!this._lock) {
						(totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
						if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
							_callback$1(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
							this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
						}
					}
				}
			}
		}
		return this;
	};
	_proto2.add = function add(child, position) {
		var _this2 = this;
		_isNumber$1(position) || (position = _parsePosition$1(this, position, child));
		if (!(child instanceof Animation$1)) {
			if (_isArray(child)) {
				child.forEach(function(obj) {
					return _this2.add(obj, position);
				});
				return this;
			}
			if (_isString$1(child)) return this.addLabel(child, position);
			if (_isFunction$1(child)) child = Tween.delayedCall(0, child);
			else return this;
		}
		return this !== child ? _addToTimeline(this, child, position) : this;
	};
	_proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
		if (nested === void 0) nested = true;
		if (tweens === void 0) tweens = true;
		if (timelines === void 0) timelines = true;
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum$1;
		var a = [], child = this._first;
		while (child) {
			if (child._start >= ignoreBeforeTime) {
				if (child instanceof Tween) tweens && a.push(child);
				else {
					timelines && a.push(child);
					nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
				}
			}
			child = child._next;
		}
		return a;
	};
	_proto2.getById = function getById(id) {
		var animations = this.getChildren(1, 1, 1), i = animations.length;
		while (i--) if (animations[i].vars.id === id) return animations[i];
	};
	_proto2.remove = function remove(child) {
		if (_isString$1(child)) return this.removeLabel(child);
		if (_isFunction$1(child)) return this.killTweensOf(child);
		child.parent === this && _removeLinkedListItem(this, child);
		if (child === this._recent) this._recent = this._last;
		return _uncache(this);
	};
	_proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
		if (!arguments.length) return this._tTime;
		this._forcing = 1;
		if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
		_Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
		this._forcing = 0;
		return this;
	};
	_proto2.addLabel = function addLabel(label, position) {
		this.labels[label] = _parsePosition$1(this, position);
		return this;
	};
	_proto2.removeLabel = function removeLabel(label) {
		delete this.labels[label];
		return this;
	};
	_proto2.addPause = function addPause(position, callback, params) {
		var t = Tween.delayedCall(0, callback || _emptyFunc, params);
		t.data = "isPause";
		this._hasPause = 1;
		return _addToTimeline(this, t, _parsePosition$1(this, position));
	};
	_proto2.removePause = function removePause(position) {
		var child = this._first;
		position = _parsePosition$1(this, position);
		while (child) {
			if (child._start === position && child.data === "isPause") _removeFromParent(child);
			child = child._next;
		}
	};
	_proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
		while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
		return this;
	};
	_proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
		var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber$1(onlyActive), children;
		while (child) {
			if (child instanceof Tween) {
				if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
			} else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
			child = child._next;
		}
		return a;
	};
	_proto2.tweenTo = function tweenTo(position, vars) {
		vars = vars || {};
		var tl = this, endTime = _parsePosition$1(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults$1({
			ease: vars.ease || "none",
			lazy: false,
			immediateRender: false,
			time: endTime,
			overwrite: "auto",
			duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
			onStart: function onStart() {
				tl.pause();
				if (!initted) {
					var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
					tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
					initted = 1;
				}
				_onStart && _onStart.apply(tween, onStartParams || []);
			}
		}, vars));
		return immediateRender ? tween.render(0) : tween;
	};
	_proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
		return this.tweenTo(toPosition, _setDefaults$1({ startAt: { time: _parsePosition$1(this, fromPosition) } }, vars));
	};
	_proto2.recent = function recent() {
		return this._recent;
	};
	_proto2.nextLabel = function nextLabel(afterTime) {
		if (afterTime === void 0) afterTime = this._time;
		return _getLabelInDirection(this, _parsePosition$1(this, afterTime));
	};
	_proto2.previousLabel = function previousLabel(beforeTime) {
		if (beforeTime === void 0) beforeTime = this._time;
		return _getLabelInDirection(this, _parsePosition$1(this, beforeTime), 1);
	};
	_proto2.currentLabel = function currentLabel(value) {
		return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
	};
	_proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
		var child = this._first, labels = this.labels, p;
		amount = _roundPrecise(amount);
		while (child) {
			if (child._start >= ignoreBeforeTime) {
				child._start += amount;
				child._end += amount;
			}
			child = child._next;
		}
		if (adjustLabels) {
			for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
		}
		return _uncache(this);
	};
	_proto2.invalidate = function invalidate(soft) {
		var child = this._first;
		this._lock = 0;
		while (child) {
			child.invalidate(soft);
			child = child._next;
		}
		return _Animation.prototype.invalidate.call(this, soft);
	};
	_proto2.clear = function clear(includeLabels) {
		if (includeLabels === void 0) includeLabels = true;
		var child = this._first, next;
		while (child) {
			next = child._next;
			this.remove(child);
			child = next;
		}
		this._dp && (this._time = this._tTime = this._pTime = 0);
		includeLabels && (this.labels = {});
		return _uncache(this);
	};
	_proto2.totalDuration = function totalDuration(value) {
		var max = 0, self = this, child = self._last, prevStart = _bigNum$1, prev, start, parent;
		if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
		if (self._dirty) {
			parent = self.parent;
			while (child) {
				prev = child._prev;
				child._dirty && child.totalDuration();
				start = child._start;
				if (start > prevStart && self._sort && child._ts && !self._lock) {
					self._lock = 1;
					_addToTimeline(self, child, start - child._delay, 1)._lock = 0;
				} else prevStart = start;
				if (start < 0 && child._ts) {
					max -= start;
					if (!parent && !self._dp || parent && parent.smoothChildTiming) {
						self._start += _roundPrecise(start / self._ts);
						self._time -= start;
						self._tTime -= start;
					}
					self.shiftChildren(-start, false, -Infinity);
					prevStart = 0;
				}
				child._end > max && child._ts && (max = child._end);
				child = prev;
			}
			_setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
			self._dirty = 0;
		}
		return self._tDur;
	};
	Timeline.updateRoot = function updateRoot(time) {
		if (_globalTimeline._ts) {
			_lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
			_lastRenderedFrame = _ticker.frame;
		}
		if (_ticker.frame >= _nextGCFrame) {
			_nextGCFrame += _config.autoSleep || 120;
			var child = _globalTimeline._first;
			if (!child || !child._ts) {
				if (_config.autoSleep && _ticker._listeners.length < 2) {
					while (child && !child._ts) child = child._next;
					child || _ticker.sleep();
				}
			}
		}
	};
	return Timeline;
}(Animation$1);
_setDefaults$1(Timeline$1.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
	var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
	if (stringFilter) {
		a = [start, end];
		stringFilter(a, target, prop);
		start = a[0];
		end = a[1];
	}
	startNums = start.match(_complexStringNumExp) || [];
	while (result = _complexStringNumExp.exec(end)) {
		endNum = result[0];
		chunk = end.substring(index, result.index);
		if (color) color = (color + 1) % 5;
		else if (chunk.substr(-5) === "rgba(") color = 1;
		if (endNum !== startNums[matchIndex++]) {
			startNum = parseFloat(startNums[matchIndex - 1]) || 0;
			pt._pt = {
				_next: pt._pt,
				p: chunk || matchIndex === 1 ? chunk : ",",
				s: startNum,
				c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
				m: color && color < 4 ? Math.round : 0
			};
			index = _complexStringNumExp.lastIndex;
		}
	}
	pt.c = index < end.length ? end.substring(index, end.length) : "";
	pt.fp = funcParam;
	if (_relExp.test(end) || hasRandom) pt.e = 0;
	this._pt = pt;
	return pt;
};
var _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
	_isFunction$1(end) && (end = end(index || 0, target, targets));
	var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction$1(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction$1(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction$1(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
	if (_isString$1(end)) {
		if (~end.indexOf("random(")) end = _replaceRandom(end);
		if (end.charAt(1) === "=") {
			pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
			if (pt || pt === 0) end = pt;
		}
	}
	if (!optional || parsedStart !== end || _forceAllPropTweens) {
		if (!isNaN(parsedStart * end) && end !== "") {
			pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
			funcParam && (pt.fp = funcParam);
			modifier && pt.modifier(modifier, this, target);
			return this._pt = pt;
		}
		!currentValue && !(prop in target) && _missingPlugin(prop, end);
		return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
	}
};
var _processVars = function _processVars(vars, index, target, targets, tween) {
	_isFunction$1(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
	if (!_isObject$1(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString$1(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
	var copy = {}, p;
	for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
	return copy;
};
var _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
	var plugin, pt, ptLookup, i;
	if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
		tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
		if (tween !== _quickTween) {
			ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
			i = plugin._props.length;
			while (i--) ptLookup[plugin._props[i]] = pt;
		}
	}
	return plugin;
};
var _overwritingTween;
var _forceAllPropTweens;
var _initTween = function _initTween(tween, time, tTime) {
	var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites$1, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
	tl && (!keyframes || !ease) && (ease = "none");
	tween._ease = _parseEase(ease, _defaults$1.ease);
	tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
	tween._from = !tl && !!vars.runBackwards;
	if (tween._from) tween.ratio = 1;
	if (!tl || keyframes && !vars.stagger) {
		harness = targets[0] ? _getCache(targets[0]).harness : 0;
		harnessVars = harness && vars[harness.prop];
		cleanVars = _copyExcluding(vars, _reservedProps);
		if (prevStartAt) {
			prevStartAt._zTime < 0 && prevStartAt.progress(1);
			time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
			prevStartAt._lazy = 0;
		}
		if (startAt) {
			_removeFromParent(tween._startAt = Tween.set(targets, _setDefaults$1({
				data: "isStart",
				overwrite: false,
				parent,
				immediateRender: true,
				lazy: !prevStartAt && _isNotFalse(lazy),
				startAt: null,
				delay: 0,
				onUpdate: onUpdate && function() {
					return _callback$1(tween, "onUpdate");
				},
				stagger: 0
			}, startAt)));
			tween._startAt._dp = 0;
			tween._startAt._sat = tween;
			time < 0 && (_reverting$1 || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
			if (immediateRender) {
				if (dur && time <= 0 && tTime <= 0) {
					time && (tween._zTime = time);
					return;
				}
			}
		} else if (runBackwards && dur) {
			if (!prevStartAt) {
				time && (immediateRender = false);
				p = _setDefaults$1({
					overwrite: false,
					data: "isFromStart",
					lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
					immediateRender,
					stagger: 0,
					parent
				}, cleanVars);
				harnessVars && (p[harness.prop] = harnessVars);
				_removeFromParent(tween._startAt = Tween.set(targets, p));
				tween._startAt._dp = 0;
				tween._startAt._sat = tween;
				time < 0 && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
				tween._zTime = time;
				if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum);
				else if (!time) return;
			}
		}
		tween._pt = tween._ptCache = 0;
		lazy = dur && _isNotFalse(lazy) || lazy && !dur;
		for (i = 0; i < targets.length; i++) {
			target = targets[i];
			gsData = target._gsap || _harness(targets)[i]._gsap;
			tween._ptLookup[i] = ptLookup = {};
			_lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
			index = fullTargets === targets ? i : fullTargets.indexOf(target);
			if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
				tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
				plugin._props.forEach(function(name) {
					ptLookup[name] = pt;
				});
				plugin.priority && (hasPriority = 1);
			}
			if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
			else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
			tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
			if (autoOverwrite && tween._pt) {
				_overwritingTween = tween;
				_globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
				overwritten = !tween.parent;
				_overwritingTween = 0;
			}
			tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
		}
		hasPriority && _sortPropTweensByPriority(tween);
		tween._onInit && tween._onInit(tween);
	}
	tween._onUpdate = onUpdate;
	tween._initted = (!tween._op || tween._pt) && !overwritten;
	keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
};
var _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
	var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
	if (!ptCache) {
		ptCache = tween._ptCache[property] = [];
		lookup = tween._ptLookup;
		i = tween._targets.length;
		while (i--) {
			pt = lookup[i][property];
			if (pt && pt.d && pt.d._pt) {
				pt = pt.d._pt;
				while (pt && pt.p !== property && pt.fp !== property) pt = pt._next;
			}
			if (!pt) {
				_forceAllPropTweens = 1;
				tween.vars[property] = "+=0";
				_initTween(tween, time);
				_forceAllPropTweens = 0;
				return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1;
			}
			ptCache.push(pt);
		}
	}
	i = ptCache.length;
	while (i--) {
		rootPT = ptCache[i];
		pt = rootPT._pt || rootPT;
		pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
		pt.c = value - pt.s;
		rootPT.e && (rootPT.e = _round$1(value) + getUnit(rootPT.e));
		rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
	}
};
var _addAliasesToVars = function _addAliasesToVars(targets, vars) {
	var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
	if (!propertyAliases) return vars;
	copy = _merge({}, vars);
	for (p in propertyAliases) if (p in copy) {
		aliases = propertyAliases[p].split(",");
		i = aliases.length;
		while (i--) copy[aliases[i]] = copy[p];
	}
	return copy;
};
var _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
	var ease = obj.ease || easeEach || "power1.inOut", p, a;
	if (_isArray(obj)) {
		a = allProps[prop] || (allProps[prop] = []);
		obj.forEach(function(value, i) {
			return a.push({
				t: i / (obj.length - 1) * 100,
				v: value,
				e: ease
			});
		});
	} else for (p in obj) {
		a = allProps[p] || (allProps[p] = []);
		p === "ease" || a.push({
			t: parseFloat(prop),
			v: obj[p],
			e: ease
		});
	}
};
var _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
	return _isFunction$1(value) ? value.call(tween, i, target, targets) : _isString$1(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
};
var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
var _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
	return _staggerPropsToSkip[name] = 1;
});
_staggerTweenProps = _staggerTweenProps.split(",");
var Tween = /*#__PURE__*/ function(_Animation2) {
	_inheritsLoose(Tween, _Animation2);
	function Tween(targets, vars, position, skipInherit) {
		var _this3;
		if (typeof vars === "number") {
			position.duration = vars;
			vars = position;
			position = null;
		}
		_this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
		var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber$1(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
		_this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
		_this3._ptLookup = [];
		_this3._overwrite = overwrite;
		if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
			vars = _this3.vars;
			var easeReverse = vars.easeReverse || vars.yoyoEase;
			tl = _this3.timeline = new Timeline$1({
				data: "nested",
				defaults: defaults || {},
				targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
			});
			tl.kill();
			tl.parent = tl._dp = _assertThisInitialized(_this3);
			tl._start = 0;
			if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
				l = parsedTargets.length;
				staggerFunc = stagger && distribute(stagger);
				if (_isObject$1(stagger)) {
					for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
						staggerVarsToMerge || (staggerVarsToMerge = {});
						staggerVarsToMerge[p] = stagger[p];
					}
				}
				for (i = 0; i < l; i++) {
					copy = _copyExcluding(vars, _staggerPropsToSkip);
					copy.stagger = 0;
					easeReverse && (copy.easeReverse = easeReverse);
					staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
					curTarget = parsedTargets[i];
					copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
					copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
					if (!stagger && l === 1 && copy.delay) {
						_this3._delay = delay = copy.delay;
						_this3._start += delay;
						copy.delay = 0;
					}
					tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
					tl._ease = _easeMap.none;
				}
				tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
			} else if (keyframes) {
				_inheritDefaults(_setDefaults$1(tl.vars.defaults, { ease: "none" }));
				tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
				var time = 0, a, kf, v;
				if (_isArray(keyframes)) {
					keyframes.forEach(function(frame) {
						return tl.to(parsedTargets, frame, ">");
					});
					tl.duration();
				} else {
					copy = {};
					for (p in keyframes) p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
					for (p in copy) {
						a = copy[p].sort(function(a, b) {
							return a.t - b.t;
						});
						time = 0;
						for (i = 0; i < a.length; i++) {
							kf = a[i];
							v = {
								ease: kf.e,
								duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
							};
							v[p] = kf.v;
							tl.to(parsedTargets, v, time);
							time += v.duration;
						}
					}
					tl.duration() < duration && tl.to({}, { duration: duration - tl.duration() });
				}
			}
			duration || _this3.duration(duration = tl.duration());
		} else _this3.timeline = 0;
		if (overwrite === true && !_suppressOverwrites$1) {
			_overwritingTween = _assertThisInitialized(_this3);
			_globalTimeline.killTweensOf(parsedTargets);
			_overwritingTween = 0;
		}
		_addToTimeline(parent, _assertThisInitialized(_this3), position);
		vars.reversed && _this3.reverse();
		vars.paused && _this3.paused(true);
		if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
			_this3._tTime = -_tinyNum;
			_this3.render(Math.max(0, -delay) || 0);
		}
		scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
		return _this3;
	}
	var _proto3 = Tween.prototype;
	_proto3.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline;
		if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
		else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
			time = tTime;
			timeline = this.timeline;
			if (this._repeat) {
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					} else if (time > dur) time = dur;
				}
				isYoyo = this._yoyo && iteration & 1;
				if (isYoyo) time = dur - time;
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				if (time === prevTime && !force && this._initted && iteration === prevIteration) {
					this._tTime = tTime;
					return this;
				}
				if (iteration !== prevIteration) {
					if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
						this._lock = force = 1;
						this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
					}
				}
			}
			if (!this._initted) {
				if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
					this._tTime = 0;
					return this;
				}
				if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) return this;
				if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
			}
			if (this._rEase) {
				var inv = time < prevTime;
				if (inv !== this._inv) {
					var segDur = inv ? prevTime : dur - prevTime;
					this._inv = inv;
					if (this._from) this.ratio = 1 - this.ratio;
					this._invRatio = this.ratio;
					this._invTime = prevTime;
					this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
					this._invScale = inv ? -this.ratio : 1 - this.ratio;
					this._invEase = inv ? this._rEase : this._ease;
				}
				this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
			} else this.ratio = ratio = this._ease(time / dur);
			if (this._from) this.ratio = ratio = 1 - ratio;
			this._tTime = tTime;
			this._time = time;
			if (!this._act && this._ts) {
				this._act = 1;
				this._lazy = 0;
			}
			if (!prevTime && tTime && !suppressEvents && !prevIteration) {
				_callback$1(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			pt = this._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
			timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
			if (this._onUpdate && !suppressEvents) {
				isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
				_callback$1(this, "onUpdate");
			}
			this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback$1(this, "onRepeat");
			if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
				isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
				(totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
				if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
					_callback$1(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
					this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
				}
			}
		}
		return this;
	};
	_proto3.targets = function targets() {
		return this._targets;
	};
	_proto3.invalidate = function invalidate(soft) {
		(!soft || !this.vars.runBackwards) && (this._startAt = 0);
		this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
		this._ptLookup = [];
		this.timeline && this.timeline.invalidate(soft);
		return _Animation2.prototype.invalidate.call(this, soft);
	};
	_proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
		_tickerActive || _ticker.wake();
		this._ts || this.play();
		var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
		this._initted || _initTween(this, time);
		ratio = this._ease(time / this._dur);
		if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) return this.resetTo(property, value, start, startIsRelative, 1);
		_alignPlayhead(this, 0);
		this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
		return this.render(0);
	};
	_proto3.kill = function kill(targets, vars) {
		if (vars === void 0) vars = "all";
		if (!targets && (!vars || vars === "all")) {
			this._lazy = this._pt = 0;
			this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting$1);
			return this;
		}
		if (this.timeline) {
			var tDur = this.timeline.totalDuration();
			this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
			this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
			return this;
		}
		var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
		if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
			vars === "all" && (this._pt = 0);
			return _interrupt(this);
		}
		overwrittenProps = this._op = this._op || [];
		if (vars !== "all") {
			if (_isString$1(vars)) {
				p = {};
				_forEachName(vars, function(name) {
					return p[name] = 1;
				});
				vars = p;
			}
			vars = _addAliasesToVars(parsedTargets, vars);
		}
		i = parsedTargets.length;
		while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
			curLookup = propTweenLookup[i];
			if (vars === "all") {
				overwrittenProps[i] = vars;
				props = curLookup;
				curOverwriteProps = {};
			} else {
				curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
				props = vars;
			}
			for (p in props) {
				pt = curLookup && curLookup[p];
				if (pt) {
					if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
					delete curLookup[p];
				}
				if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
			}
		}
		this._initted && !this._pt && firstPT && _interrupt(this);
		return this;
	};
	Tween.to = function to(targets, vars) {
		return new Tween(targets, vars, arguments[2]);
	};
	Tween.from = function from(targets, vars) {
		return _createTweenType(1, arguments);
	};
	Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
		return new Tween(callback, 0, {
			immediateRender: false,
			lazy: false,
			overwrite: false,
			delay,
			onComplete: callback,
			onReverseComplete: callback,
			onCompleteParams: params,
			onReverseCompleteParams: params,
			callbackScope: scope
		});
	};
	Tween.fromTo = function fromTo(targets, fromVars, toVars) {
		return _createTweenType(2, arguments);
	};
	Tween.set = function set(targets, vars) {
		vars.duration = 0;
		vars.repeatDelay || (vars.repeat = 0);
		return new Tween(targets, vars);
	};
	Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		return _globalTimeline.killTweensOf(targets, props, onlyActive);
	};
	return Tween;
}(Animation$1);
_setDefaults$1(Tween.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
	Tween[name] = function() {
		var tl = new Timeline$1(), params = _slice.call(arguments, 0);
		params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
		return tl[name].apply(tl, params);
	};
});
var _setterPlain = function _setterPlain(target, property, value) {
	return target[property] = value;
};
var _setterFunc = function _setterFunc(target, property, value) {
	return target[property](value);
};
var _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
	return target[property](data.fp, value);
};
var _setterAttribute = function _setterAttribute(target, property, value) {
	return target.setAttribute(property, value);
};
var _getSetter = function _getSetter(target, property) {
	return _isFunction$1(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
};
var _renderPlain = function _renderPlain(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
};
var _renderBoolean = function _renderBoolean(ratio, data) {
	return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
};
var _renderComplexString = function _renderComplexString(ratio, data) {
	var pt = data._pt, s = "";
	if (!ratio && data.b) s = data.b;
	else if (ratio === 1 && data.e) s = data.e;
	else {
		while (pt) {
			s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
			pt = pt._next;
		}
		s += data.c;
	}
	data.set(data.t, data.p, s, data);
};
var _renderPropTweens = function _renderPropTweens(ratio, data) {
	var pt = data._pt;
	while (pt) {
		pt.r(ratio, pt.d);
		pt = pt._next;
	}
};
var _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
	var pt = this._pt, next;
	while (pt) {
		next = pt._next;
		pt.p === property && pt.modifier(modifier, tween, target);
		pt = next;
	}
};
var _killPropTweensOf = function _killPropTweensOf(property) {
	var pt = this._pt, hasNonDependentRemaining, next;
	while (pt) {
		next = pt._next;
		if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
		else if (!pt.dep) hasNonDependentRemaining = 1;
		pt = next;
	}
	return !hasNonDependentRemaining;
};
var _setterWithModifier = function _setterWithModifier(target, property, value, data) {
	data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
};
var _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
	var pt = parent._pt, next, pt2, first, last;
	while (pt) {
		next = pt._next;
		pt2 = first;
		while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
		if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
		else first = pt;
		if (pt._next = pt2) pt2._prev = pt;
		else last = pt;
		pt = next;
	}
	parent._pt = first;
};
var PropTween = /*#__PURE__*/ function() {
	function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
		this.t = target;
		this.s = start;
		this.c = change;
		this.p = prop;
		this.r = renderer || _renderPlain;
		this.d = data || this;
		this.set = setter || _setterPlain;
		this.pr = priority || 0;
		this._next = next;
		if (next) next._prev = this;
	}
	var _proto4 = PropTween.prototype;
	_proto4.modifier = function modifier(func, tween, target) {
		this.mSet = this.mSet || this.set;
		this.set = _setterWithModifier;
		this.m = func;
		this.mt = target;
		this.tween = tween;
	};
	return PropTween;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
	return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline$1;
_globalTimeline = new Timeline$1({
	sortChildren: false,
	defaults: _defaults$1,
	autoRemoveChildren: true,
	id: "root",
	smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [];
var _listeners$1 = {};
var _emptyArray$1 = [];
var _lastMediaTime = 0;
var _contextID = 0;
var _dispatch$1 = function _dispatch(type) {
	return (_listeners$1[type] || _emptyArray$1).map(function(f) {
		return f();
	});
};
var _onMediaChange = function _onMediaChange() {
	var time = Date.now(), matches = [];
	if (time - _lastMediaTime > 2) {
		_dispatch$1("matchMediaInit");
		_media.forEach(function(c) {
			var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
			for (p in queries) {
				match = _win$3.matchMedia(queries[p]).matches;
				match && (anyMatch = 1);
				if (match !== conditions[p]) {
					conditions[p] = match;
					toggled = 1;
				}
			}
			if (toggled) {
				c.revert();
				anyMatch && matches.push(c);
			}
		});
		_dispatch$1("matchMediaRevert");
		matches.forEach(function(c) {
			return c.onMatch(c, function(func) {
				return c.add(null, func);
			});
		});
		_lastMediaTime = time;
		_dispatch$1("matchMedia");
	}
};
var Context = /*#__PURE__*/ function() {
	function Context(func, scope) {
		this.selector = scope && selector(scope);
		this.data = [];
		this._r = [];
		this.isReverted = false;
		this.id = _contextID++;
		func && this.add(func);
	}
	var _proto5 = Context.prototype;
	_proto5.add = function add(name, func, scope) {
		if (_isFunction$1(name)) {
			scope = func;
			func = name;
			name = _isFunction$1;
		}
		var self = this, f = function f() {
			var prev = _context$2, prevSelector = self.selector, result;
			prev && prev !== self && prev.data.push(self);
			scope && (self.selector = selector(scope));
			_context$2 = self;
			result = func.apply(self, arguments);
			_isFunction$1(result) && self._r.push(result);
			_context$2 = prev;
			self.selector = prevSelector;
			self.isReverted = false;
			return result;
		};
		self.last = f;
		return name === _isFunction$1 ? f(self, function(func) {
			return self.add(null, func);
		}) : name ? self[name] = f : f;
	};
	_proto5.ignore = function ignore(func) {
		var prev = _context$2;
		_context$2 = null;
		func(this);
		_context$2 = prev;
	};
	_proto5.getTweens = function getTweens() {
		var a = [];
		this.data.forEach(function(e) {
			return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
		});
		return a;
	};
	_proto5.clear = function clear() {
		this._r.length = this.data.length = 0;
	};
	_proto5.kill = function kill(revert, matchMedia) {
		var _this4 = this;
		if (revert) (function() {
			var tweens = _this4.getTweens(), i = _this4.data.length, t;
			while (i--) {
				t = _this4.data[i];
				if (t.data === "isFlip") {
					t.revert();
					t.getChildren(true, true, false).forEach(function(tween) {
						return tweens.splice(tweens.indexOf(tween), 1);
					});
				}
			}
			tweens.map(function(t) {
				return {
					g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
					t
				};
			}).sort(function(a, b) {
				return b.g - a.g || -Infinity;
			}).forEach(function(o) {
				return o.t.revert(revert);
			});
			i = _this4.data.length;
			while (i--) {
				t = _this4.data[i];
				if (t instanceof Timeline$1) {
					if (t.data !== "nested") {
						t.scrollTrigger && t.scrollTrigger.revert();
						t.kill();
					}
				} else !(t instanceof Tween) && t.revert && t.revert(revert);
			}
			_this4._r.forEach(function(f) {
				return f(revert, _this4);
			});
			_this4.isReverted = true;
		})();
		else this.data.forEach(function(e) {
			return e.kill && e.kill();
		});
		this.clear();
		if (matchMedia) {
			var i = _media.length;
			while (i--) _media[i].id === this.id && _media.splice(i, 1);
			this._mqs && this._mqs.forEach(function(mq) {
				return mq.removeListener ? mq.removeListener(_onMediaChange) : mq.removeEventListener("change", _onMediaChange);
			});
			this._mqs = null;
		}
	};
	_proto5.revert = function revert(config) {
		this.kill(config || {});
	};
	return Context;
}();
var MatchMedia = /*#__PURE__*/ function() {
	function MatchMedia(scope) {
		this.contexts = [];
		this.scope = scope;
		_context$2 && _context$2.data.push(this);
	}
	var _proto6 = MatchMedia.prototype;
	_proto6.add = function add(conditions, func, scope) {
		_isObject$1(conditions) || (conditions = { matches: conditions });
		var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
		_context$2 && !context.selector && (context.selector = _context$2.selector);
		this.contexts.push(context);
		func = context.add("onMatch", func);
		context.queries = conditions;
		for (p in conditions) if (p === "all") active = 1;
		else {
			mq = _win$3.matchMedia(conditions[p]);
			if (mq) {
				_media.indexOf(context) < 0 && _media.push(context);
				(cond[p] = mq.matches) && (active = 1);
				mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
				(context._mqs || (context._mqs = [])).push(mq);
			}
		}
		active && func(context, function(f) {
			return context.add(null, f);
		});
		return this;
	};
	_proto6.revert = function revert(config) {
		this.kill(config || {});
	};
	_proto6.kill = function kill(revert) {
		this.contexts.forEach(function(c) {
			return c.kill(revert, true);
		});
	};
	return MatchMedia;
}();
var _gsap = {
	registerPlugin: function registerPlugin() {
		for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
		args.forEach(function(config) {
			return _createPlugin(config);
		});
	},
	timeline: function timeline(vars) {
		return new Timeline$1(vars);
	},
	getTweensOf: function getTweensOf(targets, onlyActive) {
		return _globalTimeline.getTweensOf(targets, onlyActive);
	},
	getProperty: function getProperty(target, property, unit, uncache) {
		_isString$1(target) && (target = toArray(target)[0]);
		var getter = _getCache(target || {}).get, format = unit ? _passThrough$1 : _numericIfPossible;
		unit === "native" && (unit = "");
		return !target ? target : !property ? function(property, unit, uncache) {
			return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
		} : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
	},
	quickSetter: function quickSetter(target, property, unit) {
		target = toArray(target);
		if (target.length > 1) {
			var setters = target.map(function(t) {
				return gsap$2.quickSetter(t, property, unit);
			}), l = setters.length;
			return function(value) {
				var i = l;
				while (i--) setters[i](value);
			};
		}
		target = target[0] || {};
		var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
			var p = new Plugin();
			_quickTween._pt = 0;
			p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
			p.render(1, p);
			_quickTween._pt && _renderPropTweens(1, _quickTween);
		} : cache.set(target, p);
		return Plugin ? setter : function(value) {
			return setter(target, p, unit ? value + unit : value, cache, 1);
		};
	},
	quickTo: function quickTo(target, property, vars) {
		var _setDefaults2;
		var tween = gsap$2.to(target, _setDefaults$1((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})), func = function func(value, start, startIsRelative) {
			return tween.resetTo(property, value, start, startIsRelative);
		};
		func.tween = tween;
		return func;
	},
	isTweening: function isTweening(targets) {
		return _globalTimeline.getTweensOf(targets, true).length > 0;
	},
	defaults: function defaults(value) {
		value && value.ease && (value.ease = _parseEase(value.ease, _defaults$1.ease));
		return _mergeDeep(_defaults$1, value || {});
	},
	config: function config(value) {
		return _mergeDeep(_config, value || {});
	},
	registerEffect: function registerEffect(_ref3) {
		var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
		(plugins || "").split(",").forEach(function(pluginName) {
			return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
		});
		_effects[name] = function(targets, vars, tl) {
			return effect(toArray(targets), _setDefaults$1(vars || {}, defaults), tl);
		};
		if (extendTimeline) Timeline$1.prototype[name] = function(targets, vars, position) {
			return this.add(_effects[name](targets, _isObject$1(vars) ? vars : (position = vars) && {}, this), position);
		};
	},
	registerEase: function registerEase(name, ease) {
		_easeMap[name] = _parseEase(ease);
	},
	parseEase: function parseEase(ease, defaultEase) {
		return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
	},
	getById: function getById(id) {
		return _globalTimeline.getById(id);
	},
	exportRoot: function exportRoot(vars, includeDelayedCalls) {
		if (vars === void 0) vars = {};
		var tl = new Timeline$1(vars), child, next;
		tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
		_globalTimeline.remove(tl);
		tl._dp = 0;
		tl._time = tl._tTime = _globalTimeline._time;
		child = _globalTimeline._first;
		while (child) {
			next = child._next;
			if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
			child = next;
		}
		_addToTimeline(_globalTimeline, tl, 0);
		return tl;
	},
	context: function context(func, scope) {
		return func ? new Context(func, scope) : _context$2;
	},
	matchMedia: function matchMedia(scope) {
		return new MatchMedia(scope);
	},
	matchMediaRefresh: function matchMediaRefresh() {
		return _media.forEach(function(c) {
			var cond = c.conditions, found, p;
			for (p in cond) if (cond[p]) {
				cond[p] = false;
				found = 1;
			}
			found && c.revert();
		}) || _onMediaChange();
	},
	addEventListener: function addEventListener(type, callback) {
		var a = _listeners$1[type] || (_listeners$1[type] = []);
		~a.indexOf(callback) || a.push(callback);
	},
	removeEventListener: function removeEventListener(type, callback) {
		var a = _listeners$1[type], i = a && a.indexOf(callback);
		i >= 0 && a.splice(i, 1);
	},
	utils: {
		wrap: wrap$1,
		wrapYoyo,
		distribute,
		random,
		snap,
		normalize,
		getUnit,
		clamp: clamp$1,
		splitColor: splitColor$1,
		toArray,
		selector,
		mapRange,
		pipe: pipe$1,
		unitize,
		interpolate: interpolate$1,
		shuffle
	},
	install: _install,
	effects: _effects,
	ticker: _ticker,
	updateRoot: Timeline$1.updateRoot,
	plugins: _plugins,
	globalTimeline: _globalTimeline,
	core: {
		PropTween,
		globals: _addGlobal,
		Tween,
		Timeline: Timeline$1,
		Animation: Animation$1,
		getCache: _getCache,
		_removeLinkedListItem,
		reverting: function reverting() {
			return _reverting$1;
		},
		context: function context(toAdd) {
			if (toAdd && _context$2) {
				_context$2.data.push(toAdd);
				toAdd._ctx = _context$2;
			}
			return _context$2;
		},
		suppressOverwrites: function suppressOverwrites(value) {
			return _suppressOverwrites$1 = value;
		}
	}
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
	return _gsap[name] = Tween[name];
});
_ticker.add(Timeline$1.updateRoot);
_quickTween = _gsap.to({}, { duration: 0 });
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
	var pt = plugin._pt;
	while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
	return pt;
};
var _addModifiers = function _addModifiers(tween, modifiers) {
	var targets = tween._targets, p, i, pt;
	for (p in modifiers) {
		i = targets.length;
		while (i--) {
			pt = tween._ptLookup[i][p];
			if (pt && (pt = pt.d)) {
				if (pt._pt) pt = _getPluginPropTween(pt, p);
				pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
			}
		}
	}
};
var _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
	return {
		name,
		headless: 1,
		rawVars: 1,
		init: function init(target, vars, tween) {
			tween._onInit = function(tween) {
				var temp, p;
				if (_isString$1(vars)) {
					temp = {};
					_forEachName(vars, function(name) {
						return temp[name] = 1;
					});
					vars = temp;
				}
				if (modifier) {
					temp = {};
					for (p in vars) temp[p] = modifier(vars[p]);
					vars = temp;
				}
				_addModifiers(tween, vars);
			};
		}
	};
};
var gsap$2 = _gsap.registerPlugin({
	name: "attr",
	init: function init(target, vars, tween, index, targets) {
		var p, pt, v;
		this.tween = tween;
		for (p in vars) {
			v = target.getAttribute(p) || "";
			pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
			pt.op = p;
			pt.b = v;
			this._props.push(p);
		}
	},
	render: function render(ratio, data) {
		var pt = data._pt;
		while (pt) {
			_reverting$1 ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
			pt = pt._next;
		}
	}
}, {
	name: "endArray",
	headless: 1,
	init: function init(target, value) {
		var i = value.length;
		while (i--) this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
	}
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline$1.version = gsap$2.version = "3.15.1";
_coreReady = 1;
_windowExists$2() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
// node_modules/gsap/CSSPlugin.js
/*!
* CSSPlugin 3.15.1
* https://gsap.com
*
* Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _win$2;
var _doc$2;
var _docElement;
var _pluginInitted;
var _tempDiv;
var _recentSetterPlugin;
var _reverting;
var _windowExists$1 = function _windowExists() {
	return typeof window !== "undefined";
};
var _transformProps = {};
var _RAD2DEG = 180 / Math.PI;
var _DEG2RAD = Math.PI / 180;
var _atan2 = Math.atan2;
var _bigNum = 1e8;
var _capsExp$1 = /([A-Z])/g;
var _horizontalExp = /(left|right|width|margin|padding|x)/i;
var _complexExp = /[\s,\(]\S/;
var _propertyAliases = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
};
var _renderCSSProp = function _renderCSSProp(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
	return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
	var value = data.s + data.c * ratio;
	data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
};
var _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
	return data.set(data.t, data.p, ratio ? data.e : data.b, data);
};
var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
	return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
};
var _setterCSSStyle = function _setterCSSStyle(target, property, value) {
	return target.style[property] = value;
};
var _setterCSSProp = function _setterCSSProp(target, property, value) {
	return target.style.setProperty(property, value);
};
var _setterTransform = function _setterTransform(target, property, value) {
	return target._gsap[property] = value;
};
var _setterScale = function _setterScale(target, property, value) {
	return target._gsap.scaleX = target._gsap.scaleY = value;
};
var _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache.scaleX = cache.scaleY = value;
	cache.renderTransform(ratio, cache);
};
var _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache[property] = value;
	cache.renderTransform(ratio, cache);
};
var _transformProp$1 = "transform";
var _transformOriginProp = _transformProp$1 + "Origin";
var _saveStyle = function _saveStyle(property, isNotCSS) {
	var _this = this;
	var target = this.target, style = target.style, cache = target._gsap;
	if (property in _transformProps && style) {
		this.tfm = this.tfm || {};
		if (property !== "transform") {
			property = _propertyAliases[property] || property;
			~property.indexOf(",") ? property.split(",").forEach(function(a) {
				return _this.tfm[a] = _get(target, a);
			}) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
			property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
		} else return _propertyAliases.transform.split(",").forEach(function(p) {
			return _saveStyle.call(_this, p, isNotCSS);
		});
		if (this.props.indexOf(_transformProp$1) >= 0) return;
		if (cache.svg) {
			this.svgo = target.getAttribute("data-svg-origin");
			this.props.push(_transformOriginProp, isNotCSS, "");
		}
		property = _transformProp$1;
	}
	(style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
};
var _removeIndependentTransforms = function _removeIndependentTransforms(style) {
	if (style.translate) {
		style.removeProperty("translate");
		style.removeProperty("scale");
		style.removeProperty("rotate");
	}
};
var _revertStyle = function _revertStyle() {
	var props = this.props, target = this.target, style = target.style, cache = target._gsap, i = 0, p;
	for (; i < props.length; i += 3) if (!props[i + 1]) props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp$1, "-$1").toLowerCase());
	else if (props[i + 1] === 2) target[props[i]](props[i + 2]);
	else target[props[i]] = props[i + 2];
	if (this.tfm) {
		for (p in this.tfm) cache[p] = this.tfm[p];
		if (cache.svg) {
			cache.renderTransform();
			target.setAttribute("data-svg-origin", this.svgo || "");
		}
		i = _reverting();
		if ((!i || !i.isStart) && !style[_transformProp$1]) {
			_removeIndependentTransforms(style);
			if (cache.zOrigin && style[_transformOriginProp]) {
				style[_transformOriginProp] += " " + cache.zOrigin + "px";
				cache.zOrigin = 0;
				cache.renderTransform();
			}
			cache.uncache = 1;
		}
	}
};
var _getStyleSaver = function _getStyleSaver(target, properties) {
	var saver = {
		target,
		props: [],
		revert: _revertStyle,
		save: _saveStyle
	};
	target._gsap || gsap$2.core.getCache(target);
	properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
		return saver.save(p);
	});
	return saver;
};
var _supports3D;
var _createElement = function _createElement(type, ns) {
	var e = _doc$2.createElementNS ? _doc$2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$2.createElement(type);
	return e && e.style ? e : _doc$2.createElement(type);
};
var _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
	var cs = getComputedStyle(target);
	return cs[property] || cs.getPropertyValue(property.replace(_capsExp$1, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
};
var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
var _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
	var s = (element || _tempDiv).style, i = 5;
	if (property in s && !preferPrefix) return property;
	property = property.charAt(0).toUpperCase() + property.substr(1);
	while (i-- && !(_prefixes[i] + property in s));
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
};
var _initCore$1 = function _initCore() {
	if (_windowExists$1() && window.document) {
		_win$2 = window;
		_doc$2 = _win$2.document;
		_docElement = _doc$2.documentElement;
		_tempDiv = _createElement("div") || { style: {} };
		_createElement("div");
		_transformProp$1 = _checkPropPrefix(_transformProp$1);
		_transformOriginProp = _transformProp$1 + "Origin";
		_tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
		_supports3D = !!_checkPropPrefix("perspective");
		_reverting = gsap$2.core.reverting;
		_pluginInitted = 1;
	}
};
var _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
	var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
	clone.style.display = "block";
	svg.appendChild(clone);
	_docElement.appendChild(svg);
	try {
		bbox = clone.getBBox();
	} catch (e) {}
	svg.removeChild(clone);
	_docElement.removeChild(svg);
	return bbox;
};
var _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
	var i = attributesArray.length;
	while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
};
var _getBBox = function _getBBox(target) {
	var bounds, cloned;
	try {
		bounds = target.getBBox();
	} catch (error) {
		bounds = _getReparentedCloneBBox(target);
		cloned = 1;
	}
	bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
	return bounds && !bounds.width && !bounds.x && !bounds.y ? {
		x: +_getAttributeFallbacks(target, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +_getAttributeFallbacks(target, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : bounds;
};
var _isSVG = function _isSVG(e) {
	return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
};
var _removeProperty = function _removeProperty(target, property) {
	if (property) {
		var style = target.style, first2Chars;
		if (property in _transformProps && property !== _transformOriginProp) property = _transformProp$1;
		if (style.removeProperty) {
			first2Chars = property.substr(0, 2);
			if (first2Chars === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
			style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp$1, "-$1").toLowerCase());
		} else style.removeAttribute(property);
	}
};
var _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
	var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
	plugin._pt = pt;
	pt.b = beginning;
	pt.e = end;
	plugin._props.push(property);
	return pt;
};
var _nonConvertibleUnits = {
	deg: 1,
	rad: 1,
	turn: 1
};
var _nonStandardLayouts = {
	grid: 1,
	flex: 1
};
var _convertToUnit = function _convertToUnit(target, property, value, unit) {
	var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
	if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
	curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
	isSVG = target.getCTM && _isSVG(target);
	if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
		px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
		return _round$1(toPercent ? curValue / px * amount : curValue / 100 * px);
	}
	style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
	parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
	if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
	if (!parent || parent === _doc$2 || !parent.appendChild) parent = _doc$2.body;
	cache = parent._gsap;
	if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) return _round$1(curValue / cache.width * amount);
	else {
		if (toPercent && (property === "height" || property === "width")) {
			var v = target.style[property];
			target.style[property] = amount + unit;
			px = target[measureProperty];
			v ? target.style[property] = v : _removeProperty(target, property);
		} else {
			(toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
			parent === target && (style.position = "static");
			parent.appendChild(_tempDiv);
			px = _tempDiv[measureProperty];
			parent.removeChild(_tempDiv);
			style.position = "absolute";
		}
		if (horizontal && toPercent) {
			cache = _getCache(parent);
			cache.time = _ticker.time;
			cache.width = parent[measureProperty];
		}
	}
	return _round$1(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
};
var _get = function _get(target, property, unit, uncache) {
	var value;
	_pluginInitted || _initCore$1();
	if (property in _propertyAliases && property !== "transform") {
		property = _propertyAliases[property];
		if (~property.indexOf(",")) property = property.split(",")[0];
	}
	if (_transformProps[property] && property !== "transform") {
		value = _parseTransform(target, uncache);
		value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
	} else {
		value = target.style[property];
		if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
	}
	return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
};
var _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
	if (!start || start === "none") {
		var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
		if (s && s !== start) {
			prop = p;
			start = s;
		} else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
	}
	var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (end.substring(0, 6) === "var(--") end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
	if (end === "auto") {
		startValue = target.style[prop];
		target.style[prop] = end;
		end = _getComputedProperty(target, prop) || end;
		startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
	}
	a = [start, end];
	_colorStringFilter(a);
	start = a[0];
	end = a[1];
	startValues = start.match(_numWithUnitExp) || [];
	endValues = end.match(_numWithUnitExp) || [];
	if (endValues.length) {
		while (result = _numWithUnitExp.exec(end)) {
			endValue = result[0];
			chunk = end.substring(index, result.index);
			if (color) color = (color + 1) % 5;
			else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
			if (endValue !== (startValue = startValues[matchIndex++] || "")) {
				startNum = parseFloat(startValue) || 0;
				startUnit = startValue.substr((startNum + "").length);
				endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
				endNum = parseFloat(endValue);
				endUnit = endValue.substr((endNum + "").length);
				index = _numWithUnitExp.lastIndex - endUnit.length;
				if (!endUnit) {
					endUnit = endUnit || _config.units[prop] || startUnit;
					if (index === end.length) {
						end += endUnit;
						pt.e += endUnit;
					}
				}
				if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
				pt._pt = {
					_next: pt._pt,
					p: chunk || matchIndex === 1 ? chunk : ",",
					s: startNum,
					c: endNum - startNum,
					m: color && color < 4 || prop === "zIndex" ? Math.round : 0
				};
			}
		}
		pt.c = index < end.length ? end.substring(index, end.length) : "";
	} else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
	_relExp.test(end) && (pt.e = 0);
	this._pt = pt;
	return pt;
};
var _keywordToPercent = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
};
var _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
	var split = value.split(" "), x = split[0], y = split[1] || "50%";
	if (x === "top" || x === "bottom" || y === "left" || y === "right") {
		value = x;
		x = y;
		y = value;
	}
	split[0] = _keywordToPercent[x] || x;
	split[1] = _keywordToPercent[y] || y;
	return split.join(" ");
};
var _renderClearProps = function _renderClearProps(ratio, data) {
	if (data.tween && data.tween._time === data.tween._dur) {
		var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
		if (props === "all" || props === true) {
			style.cssText = "";
			clearTransforms = 1;
		} else {
			props = props.split(",");
			i = props.length;
			while (--i > -1) {
				prop = props[i];
				if (_transformProps[prop]) {
					clearTransforms = 1;
					prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp$1;
				}
				_removeProperty(target, prop);
			}
		}
		if (clearTransforms) {
			_removeProperty(target, _transformProp$1);
			if (cache) {
				cache.svg && target.removeAttribute("transform");
				style.scale = style.rotate = style.translate = "none";
				_parseTransform(target, 1);
				cache.uncache = 1;
				_removeIndependentTransforms(style);
			}
		}
	}
};
var _specialProps = { clearProps: function clearProps(plugin, target, property, endValue, tween) {
	if (tween.data !== "isFromStart") {
		var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
		pt.u = endValue;
		pt.pr = -10;
		pt.tween = tween;
		plugin._props.push(property);
		return 1;
	}
} };
var _identity2DMatrix = [
	1,
	0,
	0,
	1,
	0,
	0
];
var _rotationalProperties = {};
var _isNullTransform = function _isNullTransform(value) {
	return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
};
var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
	var matrixString = _getComputedProperty(target, _transformProp$1);
	return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round$1);
};
var _getMatrix = function _getMatrix(target, force2D) {
	var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
	if (cache.svg && target.getAttribute("transform")) {
		temp = target.transform.baseVal.consolidate().matrix;
		matrix = [
			temp.a,
			temp.b,
			temp.c,
			temp.d,
			temp.e,
			temp.f
		];
		return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
	} else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
		temp = style.display;
		style.display = "block";
		parent = target.parentNode;
		if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
			addedToDOM = 1;
			nextSibling = target.nextElementSibling;
			_docElement.appendChild(target);
		}
		matrix = _getComputedTransformMatrixAsArray(target);
		temp ? style.display = temp : _removeProperty(target, "display");
		if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
	}
	return force2D && matrix.length > 6 ? [
		matrix[0],
		matrix[1],
		matrix[4],
		matrix[5],
		matrix[12],
		matrix[13]
	] : matrix;
};
var _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
	var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
	if (!originIsAbsolute) {
		bounds = _getBBox(target);
		xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
		yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
	} else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
		x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
		y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
		xOrigin = x;
		yOrigin = y;
	}
	if (smooth || smooth !== false && cache.smooth) {
		tx = xOrigin - xOriginOld;
		ty = yOrigin - yOriginOld;
		cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
		cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
	} else cache.xOffset = cache.yOffset = 0;
	cache.xOrigin = xOrigin;
	cache.yOrigin = yOrigin;
	cache.smooth = !!smooth;
	cache.origin = origin;
	cache.originIsAbsolute = !!originIsAbsolute;
	target.style[_transformOriginProp] = "0px 0px";
	if (pluginToAddPropTweensTo) {
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
	}
	target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
};
var _parseTransform = function _parseTransform(target, uncache) {
	var cache = target._gsap || new GSCache(target);
	if ("x" in cache && !uncache && !cache.uncache) return cache;
	var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0, y, z, scaleX = scaleY = 1, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
	cache.svg = !!(target.getCTM && _isSVG(target));
	if (cs.translate) {
		if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp$1] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp$1] !== "none" ? cs[_transformProp$1] : "");
		style.scale = style.rotate = style.translate = "none";
	}
	matrix = _getMatrix(target, cache.svg);
	if (cache.svg) {
		if (cache.uncache) {
			t2 = target.getBBox();
			origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
			t1 = "";
		} else t1 = !uncache && target.getAttribute("data-svg-origin");
		_applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
	}
	xOrigin = cache.xOrigin || 0;
	yOrigin = cache.yOrigin || 0;
	if (matrix !== _identity2DMatrix) {
		a = matrix[0];
		b = matrix[1];
		c = matrix[2];
		d = matrix[3];
		x = a12 = matrix[4];
		y = a22 = matrix[5];
		if (matrix.length === 6) {
			scaleX = Math.sqrt(a * a + b * b);
			scaleY = Math.sqrt(d * d + c * c);
			rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
			skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
			skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
			if (cache.svg) {
				x -= xOrigin - (xOrigin * a + yOrigin * c);
				y -= yOrigin - (xOrigin * b + yOrigin * d);
			}
		} else {
			a32 = matrix[6];
			a42 = matrix[7];
			a13 = matrix[8];
			a23 = matrix[9];
			a33 = matrix[10];
			a43 = matrix[11];
			x = matrix[12];
			y = matrix[13];
			z = matrix[14];
			angle = _atan2(a32, a33);
			rotationX = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a12 * cos + a13 * sin;
				t2 = a22 * cos + a23 * sin;
				t3 = a32 * cos + a33 * sin;
				a13 = a12 * -sin + a13 * cos;
				a23 = a22 * -sin + a23 * cos;
				a33 = a32 * -sin + a33 * cos;
				a43 = a42 * -sin + a43 * cos;
				a12 = t1;
				a22 = t2;
				a32 = t3;
			}
			angle = _atan2(-c, a33);
			rotationY = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a * cos - a13 * sin;
				t2 = b * cos - a23 * sin;
				t3 = c * cos - a33 * sin;
				a43 = d * sin + a43 * cos;
				a = t1;
				b = t2;
				c = t3;
			}
			angle = _atan2(b, a);
			rotation = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(angle);
				sin = Math.sin(angle);
				t1 = a * cos + b * sin;
				t2 = a12 * cos + a22 * sin;
				b = b * cos - a * sin;
				a22 = a22 * cos - a12 * sin;
				a = t1;
				a12 = t2;
			}
			if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
				rotationX = rotation = 0;
				rotationY = 180 - rotationY;
			}
			scaleX = _round$1(Math.sqrt(a * a + b * b + c * c));
			scaleY = _round$1(Math.sqrt(a22 * a22 + a32 * a32));
			angle = _atan2(a12, a22);
			skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
			perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
		}
		if (cache.svg) {
			t1 = target.getAttribute("transform");
			cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp$1));
			t1 && target.setAttribute("transform", t1);
		}
	}
	if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
		if (invertedScaleX) {
			scaleX *= -1;
			skewX += rotation <= 0 ? 180 : -180;
			rotation += rotation <= 0 ? 180 : -180;
		} else {
			scaleY *= -1;
			skewX += skewX <= 0 ? 180 : -180;
		}
	}
	uncache = uncache || cache.uncache;
	cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
	cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
	cache.z = z + px;
	cache.scaleX = _round$1(scaleX);
	cache.scaleY = _round$1(scaleY);
	cache.rotation = _round$1(rotation) + deg;
	cache.rotationX = _round$1(rotationX) + deg;
	cache.rotationY = _round$1(rotationY) + deg;
	cache.skewX = skewX + deg;
	cache.skewY = skewY + deg;
	cache.transformPerspective = perspective + px;
	if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
	cache.xOffset = cache.yOffset = 0;
	cache.force3D = _config.force3D;
	cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
	cache.uncache = 0;
	return cache;
};
var _firstTwoOnly = function _firstTwoOnly(value) {
	return (value = value.split(" "))[0] + " " + value[1];
};
var _addPxTranslate = function _addPxTranslate(target, start, value) {
	var unit = getUnit(start);
	return _round$1(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
};
var _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
	cache.z = "0px";
	cache.rotationY = cache.rotationX = "0deg";
	cache.force3D = 0;
	_renderCSSTransforms(ratio, cache);
};
var _zeroDeg = "0deg";
var _zeroPx = "0px";
var _endParenthesis = ") ";
var _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
	var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
	if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
		var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
		angle = parseFloat(rotationX) * _DEG2RAD;
		cos = Math.cos(angle);
		x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
		y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
		z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
	}
	if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
	if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
	if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
	if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
	if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
	if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
	if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
	if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
	target.style[_transformProp$1] = transforms || "translate(0, 0)";
};
var _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
	var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
	rotation = parseFloat(rotation);
	skewX = parseFloat(skewX);
	skewY = parseFloat(skewY);
	if (skewY) {
		skewY = parseFloat(skewY);
		skewX += skewY;
		rotation += skewY;
	}
	if (rotation || skewX) {
		rotation *= _DEG2RAD;
		skewX *= _DEG2RAD;
		a11 = Math.cos(rotation) * scaleX;
		a21 = Math.sin(rotation) * scaleX;
		a12 = Math.sin(rotation - skewX) * -scaleY;
		a22 = Math.cos(rotation - skewX) * scaleY;
		if (skewX) {
			skewY *= _DEG2RAD;
			temp = Math.tan(skewX - skewY);
			temp = Math.sqrt(1 + temp * temp);
			a12 *= temp;
			a22 *= temp;
			if (skewY) {
				temp = Math.tan(skewY);
				temp = Math.sqrt(1 + temp * temp);
				a11 *= temp;
				a21 *= temp;
			}
		}
		a11 = _round$1(a11);
		a21 = _round$1(a21);
		a12 = _round$1(a12);
		a22 = _round$1(a22);
	} else {
		a11 = scaleX;
		a22 = scaleY;
		a21 = a12 = 0;
	}
	if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
		tx = _convertToUnit(target, "x", x, "px");
		ty = _convertToUnit(target, "y", y, "px");
	}
	if (xOrigin || yOrigin || xOffset || yOffset) {
		tx = _round$1(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
		ty = _round$1(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
	}
	if (xPercent || yPercent) {
		temp = target.getBBox();
		tx = _round$1(tx + xPercent / 100 * temp.width);
		ty = _round$1(ty + yPercent / 100 * temp.height);
	}
	temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
	target.setAttribute("transform", temp);
	forceCSS && (target.style[_transformProp$1] = temp);
};
var _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
	var cap = 360, isString = _isString$1(endValue), change = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1) - startNum, finalValue = startNum + change + "deg", direction, pt;
	if (isString) {
		direction = endValue.split("_")[1];
		if (direction === "short") {
			change %= cap;
			if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
		}
		if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
		else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
	}
	plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
	pt.e = finalValue;
	pt.u = "deg";
	plugin._props.push(property);
	return pt;
};
var _assign = function _assign(target, source) {
	for (var p in source) target[p] = source[p];
	return target;
};
var _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
	var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
	if (startCache.svg) {
		startValue = target.getAttribute("transform");
		target.setAttribute("transform", "");
		style[_transformProp$1] = transforms;
		endCache = _parseTransform(target, 1);
		_removeProperty(target, _transformProp$1);
		target.setAttribute("transform", startValue);
	} else {
		startValue = getComputedStyle(target)[_transformProp$1];
		style[_transformProp$1] = transforms;
		endCache = _parseTransform(target, 1);
		style[_transformProp$1] = startValue;
	}
	for (p in _transformProps) {
		startValue = startCache[p];
		endValue = endCache[p];
		if (startValue !== endValue && exclude.indexOf(p) < 0) {
			startUnit = getUnit(startValue);
			endUnit = getUnit(endValue);
			startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
			endNum = parseFloat(endValue);
			plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
			plugin._pt.u = endUnit || 0;
			plugin._props.push(p);
		}
	}
	_assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
	var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
		t,
		r,
		b,
		l
	] : [
		t + l,
		t + r,
		b + r,
		b + l
	]).map(function(side) {
		return index < 2 ? name + side : "border" + side + name;
	});
	_specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
		var a, vars;
		if (arguments.length < 4) {
			a = props.map(function(prop) {
				return _get(plugin, prop, property);
			});
			vars = a.join(" ");
			return vars.split(a[0]).length === 5 ? a[0] : vars;
		}
		a = (endValue + "").split(" ");
		vars = {};
		props.forEach(function(prop, i) {
			return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
		});
		plugin.init(target, vars, tween);
	};
});
var CSSPlugin = {
	name: "css",
	register: _initCore$1,
	targetTest: function targetTest(target) {
		return target.style && target.nodeType;
	},
	init: function init(target, vars, tween, index, targets) {
		var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
		_pluginInitted || _initCore$1();
		this.styles = this.styles || _getStyleSaver(target);
		inlineProps = this.styles.props;
		this.tween = tween;
		for (p in vars) {
			if (p === "autoRound") continue;
			endValue = vars[p];
			if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
			type = typeof endValue;
			specialProp = _specialProps[p];
			if (type === "function") {
				endValue = endValue.call(tween, index, target, targets);
				type = typeof endValue;
			}
			if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
			if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
			else if (p.substr(0, 2) === "--") {
				startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
				endValue += "";
				_colorExp.lastIndex = 0;
				if (!_colorExp.test(startValue)) {
					startUnit = getUnit(startValue);
					endUnit = getUnit(endValue);
					endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
				}
				this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
				props.push(p);
				inlineProps.push(p, 0, style[p]);
			} else if (type !== "undefined") {
				if (startAt && p in startAt) {
					startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
					_isString$1(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
					getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
					(startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
				} else startValue = _get(target, p);
				startNum = parseFloat(startValue);
				relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
				relative && (endValue = endValue.substr(2));
				endNum = parseFloat(endValue);
				if (p in _propertyAliases) {
					if (p === "autoAlpha") {
						if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
						inlineProps.push("visibility", 0, style.visibility);
						_addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
					}
					if (p !== "scale" && p !== "transform") {
						p = _propertyAliases[p];
						~p.indexOf(",") && (p = p.split(",")[0]);
					}
				}
				isTransformRelated = p in _transformProps;
				if (isTransformRelated) {
					this.styles.save(p);
					finalTransformValue = endValue;
					if (type === "string" && endValue.substring(0, 6) === "var(--") {
						endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
						if (endValue.substring(0, 5) === "calc(") {
							var origPerspective = target.style.perspective;
							target.style.perspective = endValue;
							endValue = _getComputedProperty(target, "perspective");
							origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
						}
						endNum = parseFloat(endValue);
					}
					if (!transformPropTween) {
						cache = target._gsap;
						cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
						smooth = vars.smoothOrigin !== false && cache.smooth;
						transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp$1, 0, 1, cache.renderTransform, cache, 0, -1);
						transformPropTween.dep = 1;
					}
					if (p === "scale") {
						this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
						this._pt.u = 0;
						props.push("scaleY", p);
						p += "X";
					} else if (p === "transformOrigin") {
						inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
						endValue = _convertKeywordsToPercentages(endValue);
						if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
						else {
							endUnit = parseFloat(endValue.split(" ")[2]) || 0;
							endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
							_addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
						}
						continue;
					} else if (p === "svgOrigin") {
						_applySVGOrigin(target, endValue, 1, smooth, 0, this);
						continue;
					} else if (p in _rotationalProperties) {
						_addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
						continue;
					} else if (p === "smoothOrigin") {
						_addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
						continue;
					} else if (p === "force3D") {
						cache[p] = endValue;
						continue;
					} else if (p === "transform") {
						_addRawTransformPTs(this, endValue, target);
						continue;
					}
				} else if (!(p in style)) p = _checkPropPrefix(p) || p;
				if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
					startUnit = (startValue + "").substr((startNum + "").length);
					endNum || (endNum = 0);
					endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
					startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
					this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
					this._pt.u = endUnit || 0;
					if (isTransformRelated && finalTransformValue !== endValue) {
						this._pt.b = startValue;
						this._pt.e = finalTransformValue;
						this._pt.r = _renderCSSPropWithBeginningAndEnd;
					} else if (startUnit !== endUnit && endUnit !== "%") {
						this._pt.b = startValue;
						this._pt.r = _renderCSSPropWithBeginning;
					}
				} else if (!(p in style)) {
					if (p in target) this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
					else if (p !== "parseTransform") {
						_missingPlugin(p, endValue);
						continue;
					}
				} else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
				isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
				props.push(p);
			}
		}
		hasPriority && _sortPropTweensByPriority(this);
	},
	render: function render(ratio, data) {
		if (data.tween._time || !_reverting()) {
			var pt = data._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
		} else data.styles.revert();
	},
	get: _get,
	aliases: _propertyAliases,
	getSetter: function getSetter(target, property, plugin) {
		var p = _propertyAliases[property];
		p && p.indexOf(",") < 0 && (property = p);
		return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
	},
	core: {
		_removeProperty,
		_getMatrix
	}
};
gsap$2.utils.checkPrefix = _checkPropPrefix;
gsap$2.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
	var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
		_transformProps[name] = 1;
	});
	_forEachName(rotation, function(name) {
		_config.units[name] = "deg";
		_rotationalProperties[name] = 1;
	});
	_propertyAliases[all[13]] = positionAndScale + "," + rotation;
	_forEachName(aliases, function(name) {
		var split = name.split(":");
		_propertyAliases[split[1]] = all[split[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
	_config.units[name] = "px";
});
gsap$2.registerPlugin(CSSPlugin);
// node_modules/gsap/index.js
var gsapWithCSS = gsap$2.registerPlugin(CSSPlugin) || gsap$2;
gsapWithCSS.core.Tween;
// node_modules/gsap/Observer.js
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}
/*!
* Observer 3.15.1
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var gsap$1;
var _coreInitted$1;
var _win$1;
var _doc$1;
var _docEl$1;
var _body$1;
var _isTouch;
var _pointerType;
var ScrollTrigger$1;
var _root$1;
var _normalizer$1;
var _eventTypes;
var _context$1;
var _getGSAP$1 = function _getGSAP() {
	return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
};
var _startup$1 = 1;
var _observers = [];
var _scrollers = [];
var _proxies = [];
var _getTime$1 = Date.now;
var _bridge = function _bridge(name, value) {
	return value;
};
var _integrate = function _integrate() {
	var core = ScrollTrigger$1.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
	scrollers.push.apply(scrollers, _scrollers);
	proxies.push.apply(proxies, _proxies);
	_scrollers = scrollers;
	_proxies = proxies;
	_bridge = function _bridge(name, value) {
		return data[name](value);
	};
};
var _getProxyProp = function _getProxyProp(element, property) {
	return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
};
var _isViewport$1 = function _isViewport(el) {
	return !!~_root$1.indexOf(el);
};
var _addListener$1 = function _addListener(element, type, func, passive, capture) {
	return element.addEventListener(type, func, {
		passive: passive !== false,
		capture: !!capture
	});
};
var _removeListener$1 = function _removeListener(element, type, func, capture) {
	return element.removeEventListener(type, func, !!capture);
};
var _scrollLeft = "scrollLeft";
var _scrollTop = "scrollTop";
var _onScroll$1 = function _onScroll() {
	return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++;
};
var _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
	var cachingFunc = function cachingFunc(value) {
		if (value || value === 0) {
			_startup$1 && _win$1.history.scrollRestoration !== "manual" && (_win$1.history.scrollRestoration = "manual");
			var isNormalizing = _normalizer$1 && _normalizer$1.isPressed;
			value = cachingFunc.v = Math.round(value) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0);
			f(value);
			cachingFunc.cacheID = _scrollers.cache;
			isNormalizing && _bridge("ss", value);
		} else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
			cachingFunc.cacheID = _scrollers.cache;
			cachingFunc.v = f();
		}
		return cachingFunc.v + cachingFunc.offset;
	};
	cachingFunc.offset = 0;
	return f && cachingFunc;
};
var _horizontal = {
	s: _scrollLeft,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: _scrollCacheFunc(function(value) {
		return arguments.length ? _win$1.scrollTo(value, _vertical.sc()) : _win$1.pageXOffset || _doc$1[_scrollLeft] || _docEl$1[_scrollLeft] || _body$1[_scrollLeft] || 0;
	})
};
var _vertical = {
	s: _scrollTop,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: _horizontal,
	sc: _scrollCacheFunc(function(value) {
		return arguments.length ? _win$1.scrollTo(_horizontal.sc(), value) : _win$1.pageYOffset || _doc$1[_scrollTop] || _docEl$1[_scrollTop] || _body$1[_scrollTop] || 0;
	})
};
var _getTarget = function _getTarget(t, self) {
	return (self && self._ctx && self._ctx.selector || gsap$1.utils.toArray)(t)[0] || (typeof t === "string" && gsap$1.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
};
var _isWithin = function _isWithin(element, list) {
	var i = list.length;
	while (i--) if (list[i] === element || list[i].contains(element)) return true;
	return false;
};
var _getScrollFunc = function _getScrollFunc(element, _ref) {
	var s = _ref.s, sc = _ref.sc;
	_isViewport$1(element) && (element = _doc$1.scrollingElement || _docEl$1);
	var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
	!~i && (i = _scrollers.push(element) - 1);
	_scrollers[i + offset] || _addListener$1(element, "scroll", _onScroll$1);
	var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport$1(element) ? sc : _scrollCacheFunc(function(value) {
		return arguments.length ? element[s] = value : element[s];
	})));
	func.target = element;
	prev || (func.smooth = gsap$1.getProperty(element, "scrollBehavior") === "smooth");
	return func;
};
var _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
	var v1 = value, v2 = value, t1 = _getTime$1(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
		var t = _getTime$1();
		if (force || t - t1 > min) {
			v2 = v1;
			v1 = value;
			t2 = t1;
			t1 = t;
		} else if (useDelta) v1 += value;
		else v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
	};
	return {
		update,
		reset: function reset() {
			v2 = v1 = useDelta ? 0 : v1;
			t2 = t1 = 0;
		},
		getVelocity: function getVelocity(latestValue) {
			var tOld = t2, vOld = v2, t = _getTime$1();
			(latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
			return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
		}
	};
};
var _getEvent = function _getEvent(e, preventDefault) {
	preventDefault && !e._gsapAllow && e.cancelable !== false && e.preventDefault();
	return e.changedTouches ? e.changedTouches[0] : e;
};
var _getAbsoluteMax = function _getAbsoluteMax(a) {
	var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
	return Math.abs(max) >= Math.abs(min) ? max : min;
};
var _setScrollTrigger = function _setScrollTrigger() {
	ScrollTrigger$1 = gsap$1.core.globals().ScrollTrigger;
	ScrollTrigger$1 && ScrollTrigger$1.core && _integrate();
};
var _initCore = function _initCore(core) {
	gsap$1 = core || _getGSAP$1();
	if (!_coreInitted$1 && gsap$1 && typeof document !== "undefined" && document.body) {
		_win$1 = window;
		_doc$1 = document;
		_docEl$1 = _doc$1.documentElement;
		_body$1 = _doc$1.body;
		_root$1 = [
			_win$1,
			_doc$1,
			_docEl$1,
			_body$1
		];
		gsap$1.utils.clamp;
		_context$1 = gsap$1.core.context || function() {};
		_pointerType = "onpointerenter" in _body$1 ? "pointer" : "mouse";
		_isTouch = Observer.isTouch = _win$1.matchMedia && _win$1.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$1 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
		_eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$1 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl$1) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
		setTimeout(function() {
			return _startup$1 = 0;
		}, 500);
		_coreInitted$1 = 1;
	}
	ScrollTrigger$1 || _setScrollTrigger();
	return _coreInitted$1;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/ function() {
	function Observer(vars) {
		this.init(vars);
	}
	var _proto = Observer.prototype;
	_proto.init = function init(vars) {
		_coreInitted$1 || _initCore(gsap$1) || console.warn("Please gsap.registerPlugin(Observer)");
		ScrollTrigger$1 || _setScrollTrigger();
		var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
		this.target = target = _getTarget(target) || _docEl$1;
		this.vars = vars;
		ignore && (ignore = gsap$1.utils.toArray(ignore));
		tolerance = tolerance || 1e-9;
		dragMinimum = dragMinimum || 0;
		wheelSpeed = wheelSpeed || 1;
		scrollSpeed = scrollSpeed || 1;
		type = type || "wheel,touch,pointer";
		debounce = debounce !== false;
		lineHeight || (lineHeight = parseFloat(_win$1.getComputedStyle(_body$1).lineHeight) || 22);
		var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport$1(target), ownerDoc = target.ownerDocument || _doc$1, deltaX = [
			0,
			0,
			0
		], deltaY = [
			0,
			0,
			0
		], onClickTime = 0, clickCapture = function clickCapture() {
			return onClickTime = _getTime$1();
		}, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
			return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
		}, onStopFunc = function onStopFunc() {
			self._vx.reset();
			self._vy.reset();
			onStopDelayedCall.pause();
			onStop && onStop(self);
		}, update = function update() {
			var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
			onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
			if (changedX) {
				onRight && self.deltaX > 0 && onRight(self);
				onLeft && self.deltaX < 0 && onLeft(self);
				onChangeX && onChangeX(self);
				onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
				prevDeltaX = self.deltaX;
				deltaX[0] = deltaX[1] = deltaX[2] = 0;
			}
			if (changedY) {
				onDown && self.deltaY > 0 && onDown(self);
				onUp && self.deltaY < 0 && onUp(self);
				onChangeY && onChangeY(self);
				onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
				prevDeltaY = self.deltaY;
				deltaY[0] = deltaY[1] = deltaY[2] = 0;
			}
			if (moved || dragged) {
				onMove && onMove(self);
				if (dragged) {
					onDragStart && dragged === 1 && onDragStart(self);
					onDrag && onDrag(self);
					dragged = 0;
				}
				moved = false;
			}
			locked && !(locked = false) && onLockAxis && onLockAxis(self);
			if (wheeled) {
				onWheel(self);
				wheeled = false;
			}
			id = 0;
		}, onDelta = function onDelta(x, y, index) {
			deltaX[index] += x;
			deltaY[index] += y;
			self._vx.update(x);
			self._vy.update(y);
			debounce ? id || (id = requestAnimationFrame(update)) : update();
		}, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
			if (lockAxis && !axis) {
				self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
				locked = true;
			}
			if (axis !== "y") {
				deltaX[2] += x;
				self._vx.update(x, true);
			}
			if (axis !== "x") {
				deltaY[2] += y;
				self._vy.update(y, true);
			}
			debounce ? id || (id = requestAnimationFrame(update)) : update();
		}, _onDrag = function _onDrag(e) {
			if (_ignoreCheck(e, 1)) return;
			e = _getEvent(e, preventDefault);
			var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
			self.x = x;
			self.y = y;
			if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
				dragged || (dragged = isDragging ? 2 : 1);
				isDragging || (self.isDragging = true);
				onTouchOrPointerDelta(dx, dy);
			}
		}, _onPress = self.onPress = function(e) {
			if (_ignoreCheck(e, 1) || e && e.button) return;
			self.axis = axis = null;
			onStopDelayedCall.pause();
			self.isPressed = true;
			e = _getEvent(e);
			prevDeltaX = prevDeltaY = 0;
			self.startX = self.x = e.clientX;
			self.startY = self.y = e.clientY;
			self._vx.reset();
			self._vy.reset();
			_addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
			self.deltaX = self.deltaY = 0;
			onPress && onPress(self);
		}, _onRelease = self.onRelease = function(e) {
			if (_ignoreCheck(e, 1)) return;
			_removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
			var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
			if (!isDragNotClick && isTrackingDrag) {
				self._vx.reset();
				self._vy.reset();
				if (preventDefault && allowClicks) gsap$1.delayedCall(.08, function() {
					if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (ownerDoc.createEvent) {
							var syntheticEvent = ownerDoc.createEvent("MouseEvents");
							syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
							e.target.dispatchEvent(syntheticEvent);
						}
					}
				});
			}
			self.isDragging = self.isGesturing = self.isPressed = false;
			onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
			dragged && update();
			onDragEnd && wasDragging && onDragEnd(self);
			onRelease && onRelease(self, isDragNotClick);
		}, _onGestureStart = function _onGestureStart(e) {
			return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
		}, _onGestureEnd = function _onGestureEnd() {
			return (self.isGesturing = false) || onGestureEnd(self);
		}, onScroll = function onScroll(e) {
			if (_ignoreCheck(e)) return;
			var x = scrollFuncX(), y = scrollFuncY();
			onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
			scrollX = x;
			scrollY = y;
			onStop && onStopDelayedCall.restart(true);
		}, _onWheel = function _onWheel(e) {
			if (_ignoreCheck(e)) return;
			e = _getEvent(e, preventDefault);
			onWheel && (wheeled = true);
			var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$1.innerHeight : 1) * wheelSpeed;
			onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
			onStop && !isNormalizer && onStopDelayedCall.restart(true);
		}, _onMove = function _onMove(e) {
			if (_ignoreCheck(e)) return;
			var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
			self.x = x;
			self.y = y;
			moved = true;
			onStop && onStopDelayedCall.restart(true);
			(dx || dy) && onTouchOrPointerDelta(dx, dy);
		}, _onHover = function _onHover(e) {
			self.event = e;
			onHover(self);
		}, _onHoverEnd = function _onHoverEnd(e) {
			self.event = e;
			onHoverEnd(self);
		}, _onClick = function _onClick(e) {
			return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
		};
		onStopDelayedCall = self._dc = gsap$1.delayedCall(onStopDelay || .25, onStopFunc).pause();
		self.deltaX = self.deltaY = 0;
		self._vx = _getVelocityProp(0, 50, true);
		self._vy = _getVelocityProp(0, 50, true);
		self.scrollX = scrollFuncX;
		self.scrollY = scrollFuncY;
		self.isDragging = self.isGesturing = self.isPressed = false;
		_context$1(this);
		self.enable = function(e) {
			if (!self.isEnabled) {
				_addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
				type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
				type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, passive, capture);
				if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
					_addListener$1(target, _eventTypes[0], _onPress, passive, capture);
					_addListener$1(ownerDoc, _eventTypes[2], _onRelease);
					_addListener$1(ownerDoc, _eventTypes[3], _onRelease);
					allowClicks && _addListener$1(target, "click", clickCapture, true, true);
					onClick && _addListener$1(target, "click", _onClick);
					onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
					onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
					onHover && _addListener$1(target, _pointerType + "enter", _onHover);
					onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
					onMove && _addListener$1(target, _pointerType + "move", _onMove);
				}
				self.isEnabled = true;
				self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
				self._vx.reset();
				self._vy.reset();
				scrollX = scrollFuncX();
				scrollY = scrollFuncY();
				e && e.type && _onPress(e);
				onEnable && onEnable(self);
			}
			return self;
		};
		self.disable = function() {
			if (self.isEnabled) {
				_observers.filter(function(o) {
					return o !== self && _isViewport$1(o.target);
				}).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
				if (self.isPressed) {
					self._vx.reset();
					self._vy.reset();
					_removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
				}
				_removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
				_removeListener$1(target, "wheel", _onWheel, capture);
				_removeListener$1(target, _eventTypes[0], _onPress, capture);
				_removeListener$1(ownerDoc, _eventTypes[2], _onRelease);
				_removeListener$1(ownerDoc, _eventTypes[3], _onRelease);
				_removeListener$1(target, "click", clickCapture, true);
				_removeListener$1(target, "click", _onClick);
				_removeListener$1(ownerDoc, "gesturestart", _onGestureStart);
				_removeListener$1(ownerDoc, "gestureend", _onGestureEnd);
				_removeListener$1(target, _pointerType + "enter", _onHover);
				_removeListener$1(target, _pointerType + "leave", _onHoverEnd);
				_removeListener$1(target, _pointerType + "move", _onMove);
				self.isEnabled = self.isPressed = self.isDragging = false;
				onDisable && onDisable(self);
			}
		};
		self.kill = self.revert = function() {
			self.disable();
			var i = _observers.indexOf(self);
			i >= 0 && _observers.splice(i, 1);
			_normalizer$1 === self && (_normalizer$1 = 0);
		};
		_observers.push(self);
		isNormalizer && _isViewport$1(target) && (_normalizer$1 = self);
		self.enable(event);
	};
	_createClass(Observer, [{
		key: "velocityX",
		get: function get() {
			return this._vx.getVelocity();
		}
	}, {
		key: "velocityY",
		get: function get() {
			return this._vy.getVelocity();
		}
	}]);
	return Observer;
}();
Observer.version = "3.15.1";
Observer.create = function(vars) {
	return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function() {
	return _observers.slice();
};
Observer.getById = function(id) {
	return _observers.filter(function(o) {
		return o.vars.id === id;
	})[0];
};
_getGSAP$1() && gsap$1.registerPlugin(Observer);
// node_modules/gsap/ScrollTrigger.js
/*!
* ScrollTrigger 3.15.1
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var gsap;
var _coreInitted;
var _win;
var _doc;
var _docEl;
var _body;
var _root;
var _resizeDelay;
var _toArray;
var _clamp;
var _time2;
var _syncInterval;
var _refreshing;
var _pointerIsDown;
var _transformProp;
var _i;
var _prevWidth;
var _prevHeight;
var _autoRefresh;
var _sort;
var _suppressOverwrites;
var _ignoreResize;
var _normalizer;
var _ignoreMobileResize;
var _baseScreenHeight;
var _baseScreenWidth;
var _fixIOSBug;
var _context;
var _scrollRestoration;
var _div100vh;
var _100vh;
var _isReverted;
var _clampingMax;
var _limitCallbacks;
var _startup = 1;
var _getTime = Date.now;
var _time1 = _getTime();
var _lastScrollTime = 0;
var _enabled = 0;
var _parseClamp = function _parseClamp(value, type, self) {
	var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
	self["_" + type + "Clamp"] = clamp;
	return clamp ? value.substr(6, value.length - 7) : value;
};
var _keepClamp = function _keepClamp(value, clamp) {
	return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
};
var _rafBugFix = function _rafBugFix() {
	return _enabled && requestAnimationFrame(_rafBugFix);
};
var _pointerDownHandler = function _pointerDownHandler() {
	return _pointerIsDown = 1;
};
var _pointerUpHandler = function _pointerUpHandler() {
	return _pointerIsDown = 0;
};
var _passThrough = function _passThrough(v) {
	return v;
};
var _round = function _round(value) {
	return Math.round(value * 1e5) / 1e5 || 0;
};
var _windowExists = function _windowExists() {
	return typeof window !== "undefined";
};
var _getGSAP = function _getGSAP() {
	return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
};
var _isViewport = function _isViewport(e) {
	return !!~_root.indexOf(e);
};
var _getViewportDimension = function _getViewportDimension(dimensionProperty) {
	return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
};
var _getBoundsFunc = function _getBoundsFunc(element) {
	return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
		_winOffsets.width = _win.innerWidth;
		_winOffsets.height = _100vh;
		return _winOffsets;
	} : function() {
		return _getBounds(element);
	});
};
var _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
	var d = _ref.d, d2 = _ref.d2, a = _ref.a;
	return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
		return a()[d];
	} : function() {
		return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
	};
};
var _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
	return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
		return _winOffsets;
	};
};
var _maxScroll = function _maxScroll(element, _ref2) {
	var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
	return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
};
var _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
	for (var i = 0; i < _autoRefresh.length; i += 3) (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
};
var _isString = function _isString(value) {
	return typeof value === "string";
};
var _isFunction = function _isFunction(value) {
	return typeof value === "function";
};
var _isNumber = function _isNumber(value) {
	return typeof value === "number";
};
var _isObject = function _isObject(value) {
	return typeof value === "object";
};
var _endAnimation = function _endAnimation(animation, reversed, pause) {
	return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
};
var _callback = function _callback(self, func, extraParam) {
	if (self.enabled) {
		var result = self._ctx ? self._ctx.add(function() {
			return func(self, extraParam);
		}) : func(self, extraParam);
		result && result.totalTime && (self.callbackAnimation = result);
	}
};
var _abs = Math.abs;
var _left = "left";
var _top = "top";
var _right = "right";
var _bottom = "bottom";
var _width = "width";
var _height = "height";
var _Right = "Right";
var _Left = "Left";
var _Top = "Top";
var _Bottom = "Bottom";
var _padding = "padding";
var _margin = "margin";
var _Width = "Width";
var _Height = "Height";
var _px = "px";
var _getComputedStyle = function _getComputedStyle(element) {
	return _win.getComputedStyle(element.nodeType === Node.DOCUMENT_NODE ? element.scrollingElement : element);
};
var _makePositionable = function _makePositionable(element) {
	var position = _getComputedStyle(element).position;
	element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
};
var _setDefaults = function _setDefaults(obj, defaults) {
	for (var p in defaults) p in obj || (obj[p] = defaults[p]);
	return obj;
};
var _getBounds = function _getBounds(element, withoutTransforms) {
	var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
		x: 0,
		y: 0,
		xPercent: 0,
		yPercent: 0,
		rotation: 0,
		rotationX: 0,
		rotationY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0
	}).progress(1), bounds = element.getBoundingClientRect ? element.getBoundingClientRect() : element.scrollingElement.getBoundingClientRect();
	tween && tween.progress(0).kill();
	return bounds;
};
var _getSize = function _getSize(element, _ref3) {
	var d2 = _ref3.d2;
	return element["offset" + d2] || element["client" + d2] || 0;
};
var _getLabelRatioArray = function _getLabelRatioArray(timeline) {
	var a = [], labels = timeline.labels, duration = timeline.duration(), p;
	for (p in labels) a.push(labels[p] / duration);
	return a;
};
var _getClosestLabel = function _getClosestLabel(animation) {
	return function(value) {
		return gsap.utils.snap(_getLabelRatioArray(animation), value);
	};
};
var _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
	var snap = gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
		return a - b;
	});
	return a ? function(value, direction, threshold) {
		if (threshold === void 0) threshold = .001;
		var i;
		if (!direction) return snap(value);
		if (direction > 0) {
			value -= threshold;
			for (i = 0; i < a.length; i++) if (a[i] >= value) return a[i];
			return a[i - 1];
		} else {
			i = a.length;
			value += threshold;
			while (i--) if (a[i] <= value) return a[i];
		}
		return a[0];
	} : function(value, direction, threshold) {
		if (threshold === void 0) threshold = .001;
		var snapped = snap(value);
		return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
	};
};
var _getLabelAtDirection = function _getLabelAtDirection(timeline) {
	return function(value, st) {
		return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
	};
};
var _multiListener = function _multiListener(func, element, types, callback) {
	return types.split(",").forEach(function(type) {
		return func(element, type, callback);
	});
};
var _addListener = function _addListener(element, type, func, nonPassive, capture) {
	return element.addEventListener(type, func, {
		passive: !nonPassive,
		capture: !!capture
	});
};
var _removeListener = function _removeListener(element, type, func, capture) {
	return element.removeEventListener(type, func, !!capture);
};
var _wheelListener = function _wheelListener(func, el, scrollFunc) {
	scrollFunc = scrollFunc && scrollFunc.wheelHandler;
	if (scrollFunc) {
		func(el, "wheel", scrollFunc);
		func(el, "touchmove", scrollFunc);
	}
};
var _markerDefaults = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
};
var _defaults = {
	toggleActions: "play",
	anticipatePin: 0
};
var _keywords = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
};
var _offsetToPx = function _offsetToPx(value, size) {
	if (_isString(value)) {
		var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
		if (~eqIndex) {
			value.indexOf("%") > eqIndex && (relative *= size / 100);
			value = value.substr(0, eqIndex - 1);
		}
		value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
	}
	return value;
};
var _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
	var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
	var e = _doc.createElement("div"), useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container.tagName === "IFRAME" ? container.contentDocument.body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
	(isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
	matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
	e._isStart = isStart;
	e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
	e.style.cssText = css;
	e.innerText = name || name === 0 ? type + "-" + name : type;
	parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
	e._offset = e["offset" + direction.op.d2];
	_positionMarker(e, 0, direction, isStart);
	return e;
};
var _positionMarker = function _positionMarker(marker, start, direction, flipped) {
	var vars = { display: "block" }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
	marker._isFlipped = flipped;
	vars[direction.a + "Percent"] = flipped ? -100 : 0;
	vars[direction.a] = flipped ? "1px" : 0;
	vars["border" + side + _Width] = 1;
	vars["border" + oppositeSide + _Width] = 0;
	vars[direction.p] = start + "px";
	gsap.set(marker, vars);
};
var _triggers = [];
var _ids = {};
var _rafID;
var _sync = function _sync() {
	return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
};
var _onScroll = function _onScroll() {
	if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
		_scrollers.cache++;
		if (_normalizer) _rafID || (_rafID = requestAnimationFrame(_updateAll));
		else _updateAll();
		_lastScrollTime || _dispatch("scrollStart");
		_lastScrollTime = _getTime();
	}
};
var _setBaseDimensions = function _setBaseDimensions() {
	_baseScreenWidth = _win.innerWidth;
	_baseScreenHeight = _win.innerHeight;
};
var _onResize = function _onResize(force) {
	_scrollers.cache++;
	(force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * .25)) && _resizeDelay.restart(true);
};
var _listeners = {};
var _emptyArray = [];
var _softRefresh = function _softRefresh() {
	return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
};
var _dispatch = function _dispatch(type) {
	return _listeners[type] && _listeners[type].map(function(f) {
		return f();
	}) || _emptyArray;
};
var _savedStyles = [];
var _revertRecorded = function _revertRecorded(media) {
	for (var i = 0; i < _savedStyles.length; i += 5) if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
		_savedStyles[i].style.cssText = _savedStyles[i + 1];
		_savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
		_savedStyles[i + 3].uncache = 1;
	}
};
var _recordScrollPositions = function _recordScrollPositions() {
	_scrollers.cache++;
	_scrollers.forEach(function(obj) {
		return _isFunction(obj) && (obj.rec = obj());
	});
};
var _revertAll = function _revertAll(kill, media) {
	var trigger;
	for (_i = 0; _i < _triggers.length; _i++) {
		trigger = _triggers[_i];
		if (trigger && (!media || trigger._ctx === media)) {
			if (kill) trigger.kill(1);
			else trigger.revert(true, true);
		}
	}
	_isReverted = true;
	media && _revertRecorded(media);
	media || _dispatch("revert");
};
var _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
	_scrollers.cache++;
	(force || !_refreshingAll) && _scrollers.forEach(function(obj) {
		return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
	});
	if (_isString(scrollRestoration)) {
		_scrollRestoration = scrollRestoration;
		_win.history.scrollRestoration !== scrollRestoration && (_win.history.scrollRestoration = scrollRestoration);
	}
};
var _refreshingAll;
var _refreshID = 0;
var _queueRefreshID;
var _queueRefreshAll = function _queueRefreshAll() {
	if (_queueRefreshID !== _refreshID) {
		var id = _queueRefreshID = _refreshID;
		requestAnimationFrame(function() {
			return id === _refreshID && _refreshAll(true);
		});
	}
};
var _refresh100vh = function _refresh100vh() {
	_body.appendChild(_div100vh);
	_100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;
	_body.removeChild(_div100vh);
};
var _hideAllMarkers = function _hideAllMarkers(hide) {
	return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
		return el.style.display = hide ? "none" : "block";
	});
};
var _refreshAll = function _refreshAll(force, skipRevert) {
	_docEl = _doc.documentElement;
	_body = _doc.body;
	_root = [
		_win,
		_doc,
		_docEl,
		_body
	];
	if (_lastScrollTime && !force && !_isReverted) {
		_addListener(ScrollTrigger, "scrollEnd", _softRefresh);
		return;
	}
	_refresh100vh();
	_refreshingAll = ScrollTrigger.isRefreshing = true;
	_isReverted || _recordScrollPositions();
	var refreshInits = _dispatch("refreshInit");
	_sort && ScrollTrigger.sort();
	skipRevert || _revertAll();
	_scrollers.forEach(function(obj) {
		if (_isFunction(obj)) {
			obj.smooth && (obj.target.style.scrollBehavior = "auto");
			obj(0);
		}
	});
	_triggers.slice(0).forEach(function(t) {
		return t.refresh();
	});
	_isReverted = false;
	_triggers.forEach(function(t) {
		if (t._subPinOffset && t.pin) {
			var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
			t.revert(true, 1);
			t.adjustPinSpacing(t.pin[prop] - original);
			t.refresh();
		}
	});
	_clampingMax = 1;
	_hideAllMarkers(true);
	_triggers.forEach(function(t) {
		var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
		(endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
	});
	_hideAllMarkers(false);
	_clampingMax = 0;
	refreshInits.forEach(function(result) {
		return result && result.render && result.render(-1);
	});
	_scrollers.forEach(function(obj) {
		if (_isFunction(obj)) {
			obj.smooth && requestAnimationFrame(function() {
				return obj.target.style.scrollBehavior = "smooth";
			});
			obj.rec && obj(obj.rec);
		}
	});
	_clearScrollMemory(_scrollRestoration, 1);
	_resizeDelay.pause();
	_refreshID++;
	_refreshingAll = 2;
	_updateAll(2);
	_triggers.forEach(function(t) {
		return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
	});
	_refreshingAll = ScrollTrigger.isRefreshing = false;
	_dispatch("refresh");
};
var _lastScroll = 0;
var _direction = 1;
var _primary;
var _updateAll = function _updateAll(force) {
	if (force === 2 || !_refreshingAll && !_isReverted) {
		ScrollTrigger.isUpdating = true;
		_primary && _primary.update(0);
		var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
		_direction = _lastScroll > scroll ? -1 : 1;
		_refreshingAll || (_lastScroll = scroll);
		if (recordVelocity) {
			if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
				_lastScrollTime = 0;
				_dispatch("scrollEnd");
			}
			_time2 = _time1;
			_time1 = time;
		}
		if (_direction < 0) {
			_i = l;
			while (_i-- > 0) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
			_direction = 1;
		} else for (_i = 0; _i < l; _i++) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
		ScrollTrigger.isUpdating = false;
	}
	_rafID = 0;
};
var _propNamesToCopy = [
	_left,
	_top,
	_bottom,
	_right,
	_margin + _Bottom,
	_margin + _Right,
	_margin + _Top,
	_margin + _Left,
	"display",
	"flexShrink",
	"float",
	"zIndex",
	"gridColumnStart",
	"gridColumnEnd",
	"gridRowStart",
	"gridRowEnd",
	"gridArea",
	"justifySelf",
	"alignSelf",
	"placeSelf",
	"order"
];
var _stateProps = _propNamesToCopy.concat([
	_width,
	_height,
	"boxSizing",
	"max" + _Width,
	"max" + _Height,
	"position",
	_margin,
	_padding,
	_padding + _Top,
	_padding + _Right,
	_padding + _Bottom,
	_padding + _Left
]);
var _swapPinOut = function _swapPinOut(pin, spacer, state) {
	_setState(state);
	var cache = pin._gsap;
	if (cache.spacerIsNative) _setState(cache.spacerState);
	else if (pin._gsap.swappedIn) {
		var parent = spacer.parentNode;
		if (parent) {
			parent.insertBefore(pin, spacer);
			parent.removeChild(spacer);
		}
	}
	pin._gsap.swappedIn = false;
};
var _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
	if (!pin._gsap.swappedIn) {
		var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
		while (i--) {
			p = _propNamesToCopy[i];
			spacerStyle[p] = cs[p];
		}
		spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
		cs.display === "inline" && (spacerStyle.display = "inline-block");
		pinStyle[_bottom] = pinStyle[_right] = "auto";
		spacerStyle.flexBasis = cs.flexBasis || "auto";
		spacerStyle.overflow = "visible";
		spacerStyle.boxSizing = "border-box";
		spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
		spacerStyle[_height] = _getSize(pin, _vertical) + _px;
		spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
		_setState(spacerState);
		pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
		pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
		pinStyle[_padding] = cs[_padding];
		if (pin.parentNode !== spacer) {
			pin.parentNode.insertBefore(spacer, pin);
			spacer.appendChild(pin);
		}
		pin._gsap.swappedIn = true;
	}
};
var _capsExp = /([A-Z])/g;
var _setState = function _setState(state) {
	if (state) {
		var style = state.t.style, l = state.length, i = 0, p, value;
		(state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;
		for (; i < l; i += 2) {
			value = state[i + 1];
			p = state[i];
			if (value) style[p] = value;
			else if (style[p]) style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
		}
	}
};
var _getState = function _getState(element) {
	var l = _stateProps.length, style = element.style, state = [], i = 0;
	for (; i < l; i++) state.push(_stateProps[i], style[_stateProps[i]]);
	state.t = element;
	return state;
};
var _copyState = function _copyState(state, override, omitOffsets) {
	var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
	for (; i < l; i += 2) {
		p = state[i];
		result.push(p, p in override ? override[p] : state[i + 1]);
	}
	result.t = state.t;
	return result;
};
var _winOffsets = {
	left: 0,
	top: 0
};
var _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
	_isFunction(value) && (value = value(self));
	if (_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
	var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
	containerAnimation && containerAnimation.seek(0);
	isNaN(value) || (value = +value);
	if (!_isNumber(value)) {
		_isFunction(trigger) && (trigger = trigger(self));
		var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
		element = _getTarget(trigger, self) || _body;
		bounds = _getBounds(element) || {};
		if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
			display = element.style.display;
			element.style.display = "block";
			bounds = _getBounds(element);
			display ? element.style.display = display : element.style.removeProperty("display");
		}
		localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
		globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
		value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
		markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
		scrollerSize -= scrollerSize - globalOffset;
	} else {
		containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
		markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
	}
	if (clampZeroProp) {
		self[clampZeroProp] = value || -.001;
		value < 0 && (value = 0);
	}
	if (marker) {
		var position = value + scrollerSize, isStart = marker._isStart;
		p1 = "scroll" + direction.d2;
		_positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
		if (useFixedPosition) {
			scrollerBounds = _getBounds(markerScroller);
			useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
		}
	}
	if (containerAnimation && element) {
		p1 = _getBounds(element);
		containerAnimation.seek(scrollerMax);
		p2 = _getBounds(element);
		containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
		value = value / containerAnimation._caScrollDist * scrollerMax;
	}
	containerAnimation && containerAnimation.seek(time);
	return containerAnimation ? value : Math.round(value);
};
var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
var _reparent = function _reparent(element, parent, top, left) {
	if (element.parentNode !== parent) {
		var style = element.style, p, cs;
		if (parent === _body) {
			element._stOrig = style.cssText;
			cs = _getComputedStyle(element);
			for (p in cs) if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
			style.top = top;
			style.left = left;
		} else style.cssText = element._stOrig;
		gsap.core.getCache(element).uncache = 1;
		parent.appendChild(element);
	}
};
var _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
	var last1 = initialValue, last2 = last1;
	return function(value) {
		var current = Math.round(getValueFunc());
		if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
			value = current;
			onInterrupt && onInterrupt();
		}
		last2 = last1;
		last1 = Math.round(value);
		return last1;
	};
};
var _shiftMarker = function _shiftMarker(marker, direction, value) {
	var vars = {};
	vars[direction.p] = "+=" + value;
	gsap.set(marker, vars);
};
var _getTweenCreator = function _getTweenCreator(scroller, direction) {
	var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
		var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
		initialValue = initialValue || getScroll();
		var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
			tween.kill();
			getTween.tween = 0;
		});
		change2 = change1 && change2 || 0;
		change1 = change1 || scrollTo - initialValue;
		tween && tween.kill();
		vars[prop] = scrollTo;
		vars.inherit = false;
		vars.modifiers = modifiers;
		modifiers[prop] = function() {
			return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
		};
		vars.onUpdate = function() {
			_scrollers.cache++;
			getTween.tween && _updateAll();
		};
		vars.onComplete = function() {
			getTween.tween = 0;
			onComplete && onComplete.call(tween);
		};
		tween = getTween.tween = gsap.to(scroller, vars);
		return tween;
	};
	scroller[prop] = getScroll;
	getScroll.wheelHandler = function() {
		return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
	};
	_addListener(scroller, "wheel", getScroll.wheelHandler);
	ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
	return getTween;
};
var ScrollTrigger = /*#__PURE__*/ function() {
	function ScrollTrigger(vars, animation) {
		_coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
		_context(this);
		this.init(vars, animation);
	}
	var _proto = ScrollTrigger.prototype;
	_proto.init = function init(vars, animation) {
		this.progress = this.start = 0;
		this.vars && this.kill(true, true);
		if (!_enabled) {
			this.update = this.refresh = this.kill = _passThrough;
			return;
		}
		vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? { trigger: vars } : vars, _defaults);
		var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win), scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
			vars.onEnter,
			vars.onLeave,
			vars.onEnterBack,
			vars.onLeaveBack
		], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
			return vars.onRefreshInit(self);
		}, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
		self._startClamp = self._endClamp = false;
		self._dir = direction;
		anticipatePin *= 45;
		self.scroller = scroller;
		self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
		scroll1 = scrollFunc();
		_isReverted && scrollFunc.rec == null && (scrollFunc.rec = scroll1);
		self.vars = vars;
		animation = animation || vars.animation;
		if ("refreshPriority" in vars) {
			_sort = 1;
			vars.refreshPriority === -9999 && (_primary = self);
		}
		scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
			top: _getTweenCreator(scroller, _vertical),
			left: _getTweenCreator(scroller, _horizontal)
		};
		self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
		self.scrubDuration = function(value) {
			scrubSmooth = _isNumber(value) && value;
			if (!scrubSmooth) {
				scrubTween && scrubTween.progress(1).kill();
				scrubTween = 0;
			} else scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: false,
				duration: scrubSmooth,
				paused: true,
				onComplete: function onComplete() {
					return onScrubComplete && onScrubComplete(self);
				}
			});
		};
		if (animation) {
			animation.vars.lazy = false;
			animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
			self.animation = animation.pause();
			animation.scrollTrigger = self;
			self.scrubDuration(scrub);
			snap1 = 0;
			id || (id = animation.vars.id);
		}
		if (snap) {
			if (!_isObject(snap) || snap.push) snap = { snapTo: snap };
			"scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, { scrollBehavior: "auto" });
			_scrollers.forEach(function(o) {
				return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
			});
			snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
				return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
			} : gsap.utils.snap(snap.snapTo);
			snapDurClamp = snap.duration || {
				min: .1,
				max: 2
			};
			snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
			snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || .1, function() {
				var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
				if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
					var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1e3 || 0, change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / .185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
					endValue = snapFunc(naturalEnd, self);
					_isNumber(endValue) || (endValue = naturalEnd);
					endScroll = Math.max(0, Math.round(start + endValue * change));
					if (scroll <= end && scroll >= start && endScroll !== scroll) {
						if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) return;
						if (snap.inertia === false) change1 = endValue - progress;
						tweenTo(endScroll, {
							duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * .185 / velocity / .05 || 0)),
							ease: snap.ease || "power3",
							data: _abs(endScroll - scroll),
							onInterrupt: function onInterrupt() {
								return snapDelayedCall.restart(true) && _onInterrupt && _callback(self, _onInterrupt);
							},
							onComplete: function onComplete() {
								self.update();
								lastSnap = scrollFunc();
								if (animation && !isToggle) scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
								snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
								onSnapComplete && onSnapComplete(self);
								_onComplete && _callback(self, _onComplete);
							}
						}, scroll, change1 * change, endScroll - scroll - change1 * change);
						onStart && _callback(self, onStart, tweenTo.tween);
					}
				} else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
			}).pause();
		}
		id && (_ids[id] = self);
		trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
		customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
		customRevertReturn && (customRevertReturn = customRevertReturn(self));
		pin = pin === true ? trigger : _getTarget(pin);
		_isString(toggleClass) && (toggleClass = {
			targets: trigger,
			className: toggleClass
		});
		if (pin) {
			pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
			self.pin = pin;
			pinCache = gsap.core.getCache(pin);
			if (!pinCache.spacer) {
				if (pinSpacer) {
					pinSpacer = _getTarget(pinSpacer);
					pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
					pinCache.spacerIsNative = !!pinSpacer;
					pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
				}
				pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
				spacer.classList.add("pin-spacer");
				id && spacer.classList.add("pin-spacer-" + id);
				pinCache.pinState = pinOriginalState = _getState(pin);
			} else pinOriginalState = pinCache.pinState;
			vars.force3D !== false && gsap.set(pin, { force3D: true });
			self.spacer = spacer = pinCache.spacer;
			cs = _getComputedStyle(pin);
			spacingStart = cs[pinSpacing + direction.os2];
			pinGetter = gsap.getProperty(pin);
			pinSetter = gsap.quickSetter(pin, direction.a, _px);
			_swapPinIn(pin, spacer, cs);
			pinState = _getState(pin);
		}
		if (markers) {
			markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
			markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
			markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
			offset = markerStartTrigger["offset" + direction.op.d2];
			var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
			markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
			markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
			containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));
			if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
				_makePositionable(isViewport ? _body : scroller);
				gsap.set([markerStartTrigger, markerEndTrigger], { force3D: true });
				markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
				markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
			}
		}
		if (containerAnimation) {
			var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
			containerAnimation.eventCallback("onUpdate", function() {
				self.update(0, 0, 1);
				oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
			});
		}
		self.previous = function() {
			return _triggers[_triggers.indexOf(self) - 1];
		};
		self.next = function() {
			return _triggers[_triggers.indexOf(self) + 1];
		};
		self.revert = function(revert, temp) {
			if (!temp) return self.kill(true);
			var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
			if (r !== self.isReverted) {
				if (r) {
					prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
					prevProgress = self.progress;
					prevAnimProgress = animation && animation.progress();
				}
				markerStart && [
					markerStart,
					markerEnd,
					markerStartTrigger,
					markerEndTrigger
				].forEach(function(m) {
					return m.style.display = r ? "none" : "block";
				});
				if (r) {
					_refreshing = self;
					self.update(r);
				}
				if (pin && (!pinReparent || !self.isActive)) {
					if (r) _swapPinOut(pin, spacer, pinOriginalState);
					else _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
				}
				r || self.update(r);
				_refreshing = prevRefreshing;
				self.isReverted = r;
			}
		};
		self.refresh = function(soft, force, position, pinOffset) {
			if ((_refreshing || !self.enabled) && !force) return;
			if (pin && soft && _lastScrollTime) {
				_addListener(ScrollTrigger, "scrollEnd", _softRefresh);
				return;
			}
			!_refreshingAll && onRefreshInit && onRefreshInit(self);
			_refreshing = self;
			if (tweenTo.tween && !position) {
				tweenTo.tween.kill();
				tweenTo.tween = 0;
			}
			scrubTween && scrubTween.pause();
			if (invalidateOnRefresh && animation) {
				animation.revert({ kill: false }).invalidate();
				animation.getChildren ? animation.getChildren(true, true, false).forEach(function(t) {
					return t.vars.immediateRender && t.render(0, true, true);
				}) : animation.vars.immediateRender && animation.render(0, true, true);
			}
			self.isReverted || self.revert(true, true);
			self._subPinOffset = false;
			var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= .01 || !change, offset = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
			if (markers && _isObject(position)) {
				markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
				markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
			}
			while (i-- > 0) {
				curTrigger = _triggers[i];
				curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
				curPin = curTrigger.pin;
				if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
					revertedPins || (revertedPins = []);
					revertedPins.unshift(curTrigger);
					curTrigger.revert(true, true);
				}
				if (curTrigger !== _triggers[i]) {
					triggerIndex--;
					i--;
				}
			}
			_isFunction(parsedStart) && (parsedStart = parsedStart(self));
			parsedStart = _parseClamp(parsedStart, "start", self);
			start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -.001 : 0);
			_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
			if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
				if (~parsedEnd.indexOf(" ")) parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
				else {
					offset = _offsetToPx(parsedEnd.substr(2), size);
					parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset;
					parsedEndTrigger = trigger;
				}
			}
			parsedEnd = _parseClamp(parsedEnd, "end", self);
			end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -.001;
			offset = 0;
			i = triggerIndex;
			while (i--) {
				curTrigger = _triggers[i] || {};
				curPin = curTrigger.pin;
				if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
					cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
					if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) offset += cs * (1 - curTrigger.progress);
					curPin === pin && (otherPinOffset += cs);
				}
			}
			start += offset;
			end += offset;
			self._startClamp && (self._startClamp += offset);
			if (self._endClamp && !_refreshingAll) {
				self._endClamp = end || -.001;
				end = Math.min(end, _maxScroll(scroller, direction));
			}
			change = end - start || (start -= .01) && .001;
			if (isFirstRefresh) prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
			self._pinPush = otherPinOffset;
			if (markerStart && offset) {
				cs = {};
				cs[direction.a] = "+=" + offset;
				pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
				gsap.set([markerStart, markerEnd], cs);
			}
			if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
				cs = _getComputedStyle(pin);
				isVertical = direction === _vertical;
				scroll = scrollFunc();
				pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
				if (!max && end > 1) {
					forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
					forcedOverflow = {
						style: forcedOverflow,
						value: forcedOverflow["overflow" + direction.a.toUpperCase()]
					};
					if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
				}
				_swapPinIn(pin, spacer, cs);
				pinState = _getState(pin);
				bounds = _getBounds(pin, true);
				oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
				if (pinSpacing) {
					spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
					spacerState.t = spacer;
					i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
					if (i) {
						spacerState.push(direction.d, i + _px);
						spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
					}
					_setState(spacerState);
					if (pinnedContainer) _triggers.forEach(function(t) {
						if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
					});
					useFixedPosition && scrollFunc(prevScroll);
				} else {
					i = _getSize(pin, direction);
					i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
				}
				if (useFixedPosition) {
					override = {
						top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
						left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
						boxSizing: "border-box",
						position: "fixed"
					};
					override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
					override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
					override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
					override[_padding] = cs[_padding];
					override[_padding + _Top] = cs[_padding + _Top];
					override[_padding + _Right] = cs[_padding + _Right];
					override[_padding + _Bottom] = cs[_padding + _Bottom];
					override[_padding + _Left] = cs[_padding + _Left];
					pinActiveState = _copyState(pinOriginalState, override, pinReparent);
					_refreshingAll && scrollFunc(0);
				}
				if (animation) {
					initted = animation._initted;
					_suppressOverwrites(1);
					animation.render(animation.duration(), true, true);
					pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
					pinMoves = Math.abs(change - pinChange) > 1;
					useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
					animation.render(0, true, true);
					initted || animation.invalidate(true);
					animation.parent || animation.totalTime(animation.totalTime());
					_suppressOverwrites(0);
				} else pinChange = change;
				forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
			} else if (trigger && scrollFunc() && !containerAnimation) {
				bounds = trigger.parentNode;
				while (bounds && bounds !== _body) {
					if (bounds._pinOffset) {
						start -= bounds._pinOffset;
						end -= bounds._pinOffset;
					}
					bounds = bounds.parentNode;
				}
			}
			revertedPins && revertedPins.forEach(function(t) {
				return t.revert(false, true);
			});
			self.start = start;
			self.end = end;
			scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
			if (!containerAnimation && !_refreshingAll && !_isReverted) {
				scroll1 < prevScroll && scrollFunc(prevScroll);
				self.scroll.rec = 0;
			}
			self.revert(false, true);
			lastRefresh = _getTime();
			if (snapDelayedCall) {
				lastSnap = -1;
				snapDelayedCall.restart(true);
			}
			_refreshing = 0;
			animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
			if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
				animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true);
				self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
			}
			pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
			scrubTween && scrubTween.invalidate();
			if (!isNaN(markerStartOffset)) {
				markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
				markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
				_shiftMarker(markerStartTrigger, direction, markerStartOffset);
				_shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
				_shiftMarker(markerEndTrigger, direction, markerEndOffset);
				_shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
			}
			isFirstRefresh && !_refreshingAll && self.update();
			if (onRefresh && !_refreshingAll && !executingOnRefresh) {
				executingOnRefresh = true;
				onRefresh(self);
				executingOnRefresh = false;
			}
		};
		self.getVelocity = function() {
			return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1e3 || 0;
		};
		self.endAnimation = function() {
			_endAnimation(self.callbackAnimation);
			if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
		};
		self.labelToScroll = function(label) {
			return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
		};
		self.getTrailing = function(name) {
			var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
			return (_isString(name) ? a.filter(function(t) {
				return t.vars.preventOverlaps === name;
			}) : a).filter(function(t) {
				return self.direction > 0 ? t.end <= start : t.start >= end;
			});
		};
		self.update = function(reset, recordVelocity, forceFake) {
			if (containerAnimation && !forceFake && !reset) return;
			var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
			if (recordVelocity) {
				scroll2 = scroll1;
				scroll1 = containerAnimation ? scrollFunc() : scroll;
				if (snap) {
					snap2 = snap1;
					snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
				}
			}
			if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
				if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) clipped = 1e-4;
				else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) clipped = .9999;
			}
			if (clipped !== prevProgress && self.enabled) {
				isActive = self.isActive = !!clipped && clipped < 1;
				wasActive = !!prevProgress && prevProgress < 1;
				toggled = isActive !== wasActive;
				stateChanged = toggled || !!clipped !== !!prevProgress;
				self.direction = clipped > prevProgress ? 1 : -1;
				self.progress = clipped;
				if (stateChanged && !_refreshing) {
					toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;
					if (isToggle) {
						action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
						isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
					}
				}
				preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
					return t.endAnimation();
				}));
				if (!isToggle) {
					if (scrubTween && !_refreshing && !_startup) {
						scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
						if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
						else {
							scrubTween.vars.totalProgress = clipped;
							scrubTween.invalidate().restart();
						}
					} else if (animation) animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
				}
				if (pin) {
					reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
					if (!useFixedPosition) pinSetter(_round(pinStart + pinChange * clipped));
					else if (stateChanged) {
						isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
						if (pinReparent) {
							if (!reset && (isActive || isAtMax)) {
								var bounds = _getBounds(pin, true), _offset = scroll - start;
								_reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
							} else _reparent(pin, spacer);
						}
						_setState(isActive || isAtMax ? pinActiveState : pinState);
						pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
					}
				}
				snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
				toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
					return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
				});
				onUpdate && !isToggle && !reset && onUpdate(self);
				if (stateChanged && !_refreshing) {
					if (isToggle) {
						if (isTakingAction) {
							if (action === "complete") animation.pause().totalProgress(1);
							else if (action === "reset") animation.restart(true).pause();
							else if (action === "restart") animation.restart(true);
							else animation[action]();
						}
						onUpdate && onUpdate(self);
					}
					if (toggled || !_limitCallbacks) {
						onToggle && toggled && _callback(self, onToggle);
						callbacks[toggleState] && _callback(self, callbacks[toggleState]);
						once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
						if (!toggled) {
							toggleState = clipped === 1 ? 1 : 3;
							callbacks[toggleState] && _callback(self, callbacks[toggleState]);
						}
					}
					if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
						_endAnimation(self.callbackAnimation);
						scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
					}
				} else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
			}
			if (markerEndSetter) {
				var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
				markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
				markerEndSetter(n);
			}
			caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
		};
		self.enable = function(reset, refresh) {
			if (!self.enabled) {
				self.enabled = true;
				_addListener(scroller, "resize", _onResize);
				isViewport || _addListener(scroller, "scroll", _onScroll);
				onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
				if (reset !== false) {
					self.progress = prevProgress = 0;
					scroll1 = scroll2 = lastSnap = scrollFunc();
				}
				refresh !== false && self.refresh();
			}
		};
		self.getTween = function(snap) {
			return snap && tweenTo ? tweenTo.tween : scrubTween;
		};
		self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
			if (containerAnimation) {
				var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
				newStart = st.start + _change * newStart / duration;
				newEnd = st.start + _change * newEnd / duration;
			}
			self.refresh(false, false, {
				start: _keepClamp(newStart, keepClamp && !!self._startClamp),
				end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
			}, pinOffset);
			self.update();
		};
		self.adjustPinSpacing = function(amount) {
			if (spacerState && amount) {
				var i = spacerState.indexOf(direction.d) + 1;
				spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
				spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
				_setState(spacerState);
			}
		};
		self.disable = function(reset, allowAnimation) {
			reset !== false && self.revert(true, true);
			if (self.enabled) {
				self.enabled = self.isActive = false;
				allowAnimation || scrubTween && scrubTween.pause();
				prevScroll = 0;
				pinCache && (pinCache.uncache = 1);
				onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
				if (snapDelayedCall) {
					snapDelayedCall.pause();
					tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
				}
				if (!isViewport) {
					var i = _triggers.length;
					while (i--) if (_triggers[i].scroller === scroller && _triggers[i] !== self) return;
					_removeListener(scroller, "resize", _onResize);
					isViewport || _removeListener(scroller, "scroll", _onScroll);
				}
			}
		};
		self.kill = function(revert, allowAnimation) {
			self.disable(revert, allowAnimation);
			scrubTween && !allowAnimation && scrubTween.kill();
			id && delete _ids[id];
			var i = _triggers.indexOf(self);
			i >= 0 && _triggers.splice(i, 1);
			i === _i && _direction > 0 && _i--;
			i = 0;
			_triggers.forEach(function(t) {
				return t.scroller === self.scroller && (i = 1);
			});
			i || _refreshingAll || _isReverted || (self.scroll.rec = 0);
			if (animation) {
				animation.scrollTrigger = null;
				revert && animation.revert({ kill: false });
				allowAnimation || animation.kill();
			}
			markerStart && [
				markerStart,
				markerEnd,
				markerStartTrigger,
				markerEndTrigger
			].forEach(function(m) {
				return m.parentNode && m.parentNode.removeChild(m);
			});
			_primary === self && (_primary = 0);
			if (pin) {
				pinCache && (pinCache.uncache = 1);
				i = 0;
				_triggers.forEach(function(t) {
					return t.pin === pin && i++;
				});
				i || (pinCache.spacer = 0);
			}
			vars.onKill && vars.onKill(self);
		};
		_triggers.push(self);
		self.enable(false, false);
		customRevertReturn && customRevertReturn(self);
		if (animation && animation.add && !change) {
			var updateFunc = self.update;
			self.update = function() {
				self.update = updateFunc;
				_scrollers.cache++;
				start || end || self.refresh();
			};
			gsap.delayedCall(.01, self.update);
			change = .01;
			start = end = 0;
		} else self.refresh();
		pin && _queueRefreshAll();
	};
	ScrollTrigger.register = function register(core) {
		if (!_coreInitted) {
			gsap = core || _getGSAP();
			_windowExists() && window.document && ScrollTrigger.enable();
			_coreInitted = _enabled;
		}
		return _coreInitted;
	};
	ScrollTrigger.defaults = function defaults(config) {
		if (config) for (var p in config) _defaults[p] = config[p];
		return _defaults;
	};
	ScrollTrigger.disable = function disable(reset, kill) {
		_enabled = 0;
		_triggers.forEach(function(trigger) {
			return trigger[kill ? "kill" : "disable"](reset);
		});
		_removeListener(_win, "wheel", _onScroll);
		_removeListener(_doc, "scroll", _onScroll);
		clearInterval(_syncInterval);
		_removeListener(_doc, "touchcancel", _passThrough);
		_removeListener(_body, "touchstart", _passThrough);
		_multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
		_multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
		_resizeDelay.kill();
		_iterateAutoRefresh(_removeListener);
		for (var i = 0; i < _scrollers.length; i += 3) {
			_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);
			_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
		}
	};
	ScrollTrigger.enable = function enable() {
		_win = window;
		_doc = document;
		_docEl = _doc.documentElement;
		_body = _doc.body;
		if (gsap) {
			_toArray = gsap.utils.toArray;
			_clamp = gsap.utils.clamp;
			_context = gsap.core.context || _passThrough;
			_suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
			_scrollRestoration = _win.history.scrollRestoration || "auto";
			_lastScroll = _win.pageYOffset || 0;
			gsap.core.globals("ScrollTrigger", ScrollTrigger);
			if (_body) {
				_enabled = 1;
				_div100vh = document.createElement("div");
				_div100vh.style.height = "100vh";
				_div100vh.style.position = "absolute";
				_refresh100vh();
				_rafBugFix();
				Observer.register(gsap);
				ScrollTrigger.isTouch = Observer.isTouch;
				_fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
				_ignoreMobileResize = Observer.isTouch === 1;
				_addListener(_win, "wheel", _onScroll);
				_root = [
					_win,
					_doc,
					_docEl,
					_body
				];
				if (gsap.matchMedia) {
					ScrollTrigger.matchMedia = function(vars) {
						var mm = gsap.matchMedia(), p;
						for (p in vars) mm.add(p, vars[p]);
						return mm;
					};
					gsap.addEventListener("matchMediaInit", function() {
						_recordScrollPositions();
						_revertAll();
					});
					gsap.addEventListener("matchMediaRevert", function() {
						return _revertRecorded();
					});
					gsap.addEventListener("matchMedia", function() {
						_refreshAll(0, 1);
						_dispatch("matchMedia");
					});
					gsap.matchMedia().add("(orientation: portrait)", function() {
						_setBaseDimensions();
						return _setBaseDimensions;
					});
				} else console.warn("Requires GSAP 3.11.0 or later");
				_setBaseDimensions();
				_addListener(_doc, "scroll", _onScroll);
				var bodyHasStyle = _body.hasAttribute("style"), bodyStyle = _body.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap.core.Animation.prototype, bounds, i;
				AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", { value: function value() {
					return this.time(-.01, true);
				} });
				bodyStyle.borderTopStyle = "solid";
				bounds = _getBounds(_body);
				_vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
				_horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
				border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
				if (!bodyHasStyle) {
					_body.setAttribute("style", "");
					_body.removeAttribute("style");
				}
				_syncInterval = setInterval(_sync, 250);
				gsap.delayedCall(.5, function() {
					return _startup = 0;
				});
				_addListener(_doc, "touchcancel", _passThrough);
				_addListener(_body, "touchstart", _passThrough);
				_multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
				_multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
				_transformProp = gsap.utils.checkPrefix("transform");
				_stateProps.push(_transformProp);
				_coreInitted = _getTime();
				_resizeDelay = gsap.delayedCall(.2, _refreshAll).pause();
				_autoRefresh = [
					_doc,
					"visibilitychange",
					function() {
						var w = _win.innerWidth, h = _win.innerHeight;
						if (_doc.hidden) {
							_prevWidth = w;
							_prevHeight = h;
						} else if (_prevWidth !== w || _prevHeight !== h) _onResize();
					},
					_doc,
					"DOMContentLoaded",
					_refreshAll,
					_win,
					"load",
					_refreshAll,
					_win,
					"resize",
					_onResize
				];
				_iterateAutoRefresh(_addListener);
				_triggers.forEach(function(trigger) {
					return trigger.enable(0, 1);
				});
				for (i = 0; i < _scrollers.length; i += 3) {
					_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);
					_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
				}
			} else if (_doc) _doc.addEventListener("DOMContentLoaded", function onLoad() {
				ScrollTrigger.enable();
				_doc.removeEventListener("DOMContentLoaded", onLoad);
			});
		}
	};
	ScrollTrigger.config = function config(vars) {
		"limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
		var ms = vars.syncInterval;
		ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
		"ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
		if ("autoRefreshEvents" in vars) {
			_iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
			_ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
		}
	};
	ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
		var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport(t);
		if (~i) _scrollers.splice(i, isViewport ? 6 : 2);
		if (vars) isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
	};
	ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
		_triggers.forEach(function(t) {
			return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
		});
	};
	ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
		var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
		return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
	};
	ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
		_isString(element) && (element = _getTarget(element));
		var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
		return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
	};
	ScrollTrigger.killAll = function killAll(allowListeners) {
		_triggers.slice(0).forEach(function(t) {
			return t.vars.id !== "ScrollSmoother" && t.kill();
		});
		if (allowListeners !== true) {
			var listeners = _listeners.killAll || [];
			_listeners = {};
			listeners.forEach(function(f) {
				return f();
			});
		}
	};
	return ScrollTrigger;
}();
ScrollTrigger.version = "3.15.1";
ScrollTrigger.saveStyles = function(targets) {
	return targets ? _toArray(targets).forEach(function(target) {
		if (target && target.style) {
			var i = _savedStyles.indexOf(target);
			i >= 0 && _savedStyles.splice(i, 5);
			_savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
		}
	}) : _savedStyles;
};
ScrollTrigger.revert = function(soft, media) {
	return _revertAll(!soft, media);
};
ScrollTrigger.create = function(vars, animation) {
	return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function(safe) {
	return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function(force) {
	return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function(element, horizontal) {
	return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getScrollFunc = function(element, horizontal) {
	return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getById = function(id) {
	return _ids[id];
};
ScrollTrigger.getAll = function() {
	return _triggers.filter(function(t) {
		return t.vars.id !== "ScrollSmoother";
	});
};
ScrollTrigger.isScrolling = function() {
	return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function(type, callback) {
	var a = _listeners[type] || (_listeners[type] = []);
	~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function(type, callback) {
	var a = _listeners[type], i = a && a.indexOf(callback);
	i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function(targets, vars) {
	var result = [], varsCopy = {}, interval = vars.interval || .016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
		var elements = [], triggers = [], delay = gsap.delayedCall(interval, function() {
			callback(elements, triggers);
			elements = [];
			triggers = [];
		}).pause();
		return function(self) {
			elements.length || delay.restart(true);
			elements.push(self.trigger);
			triggers.push(self);
			batchMax <= elements.length && delay.progress(1);
		};
	}, p;
	for (p in vars) varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
	if (_isFunction(batchMax)) {
		batchMax = batchMax();
		_addListener(ScrollTrigger, "refresh", function() {
			return batchMax = vars.batchMax();
		});
	}
	_toArray(targets).forEach(function(target) {
		var config = {};
		for (p in varsCopy) config[p] = varsCopy[p];
		config.trigger = target;
		result.push(ScrollTrigger.create(config));
	});
	return result;
};
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
	current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
	return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
};
var _allowNativePanning = function _allowNativePanning(target, direction) {
	if (direction === true) target.style.removeProperty("touch-action");
	else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
	target === _docEl && _allowNativePanning(_body, direction);
};
var _overflow = {
	auto: 1,
	scroll: 1
};
var _nestedScroll = function _nestedScroll(_ref5) {
	var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
	var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap.core.getCache(node), time = _getTime(), cs;
	if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
		while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) node = node.parentNode;
		cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
		cache._isScrollT = time;
	}
	if (cache._isScroll || axis === "x") {
		event.stopPropagation();
		event._gsapAllow = true;
	}
};
var _inputObserver = function _inputObserver(target, type, inputs, nested) {
	return Observer.create({
		target,
		capture: true,
		debounce: false,
		lockAxis: true,
		type,
		onWheel: nested = nested && _nestedScroll,
		onPress: nested,
		onDrag: nested,
		onScroll: nested,
		onEnable: function onEnable() {
			return inputs && _addListener(_doc, Observer.eventTypes[0], _captureInputs, false, true);
		},
		onDisable: function onDisable() {
			return _removeListener(_doc, Observer.eventTypes[0], _captureInputs, true);
		}
	});
};
var _inputExp = /(input|label|select|textarea)/i;
var _inputIsFocused;
var _captureInputs = function _captureInputs(e) {
	var isInput = _inputExp.test(e.target.tagName);
	if (isInput || _inputIsFocused) {
		e._gsapAllow = true;
		_inputIsFocused = isInput;
	}
};
var _getScrollNormalizer = function _getScrollNormalizer(vars) {
	_isObject(vars) || (vars = {});
	vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
	vars.type || (vars.type = "wheel,touch");
	vars.debounce = !!vars.debounce;
	vars.id = vars.id || "normalizer";
	var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl, smoother = gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
		return momentum(self);
	} : function() {
		return momentum || 2.8;
	}, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
		return skipTouchMove = false;
	}, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps() {
		maxY = _maxScroll(target, _vertical);
		scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
		normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _horizontal)));
		lastRefreshID = _refreshID;
	}, removeContentOffset = function removeContentOffset() {
		content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
		content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
		scrollFuncY.offset = scrollFuncY.cacheID = 0;
	}, ignoreDrag = function ignoreDrag() {
		if (skipTouchMove) {
			requestAnimationFrame(resumeTouchMove);
			var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
			if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
				scrollFuncY.offset = scroll - scrollFuncY.v;
				var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
				content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
				content._gsap.y = y + "px";
				scrollFuncY.cacheID = _scrollers.cache;
				_updateAll();
			}
			return true;
		}
		scrollFuncY.offset && removeContentOffset();
		skipTouchMove = true;
	}, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
		updateClamps();
		if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
	};
	content && gsap.set(content, { y: "+=0" });
	vars.ignoreCheck = function(e) {
		return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
	};
	vars.onPress = function() {
		skipTouchMove = false;
		var prevScale = scale;
		scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
		tween.pause();
		prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
		startScrollX = scrollFuncX();
		startScrollY = scrollFuncY();
		updateClamps();
		lastRefreshID = _refreshID;
	};
	vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
		scrollFuncY.offset && removeContentOffset();
		if (!wasDragging) onStopDelayedCall.restart(true);
		else {
			_scrollers.cache++;
			var dur = resolveMomentumDuration(), currentScroll, endScroll;
			if (normalizeScrollX) {
				currentScroll = scrollFuncX();
				endScroll = currentScroll + dur * .05 * -self.velocityX / .227;
				dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
				tween.vars.scrollX = scrollClampX(endScroll);
			}
			currentScroll = scrollFuncY();
			endScroll = currentScroll + dur * .05 * -self.velocityY / .227;
			dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
			tween.vars.scrollY = scrollClampY(endScroll);
			tween.invalidate().duration(dur).play(.01);
			if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) gsap.to({}, {
				onUpdate: onResize,
				duration: dur
			});
		}
		onRelease && onRelease(self);
	};
	vars.onWheel = function() {
		tween._ts && tween.pause();
		if (_getTime() - wheelRefresh > 1e3) {
			lastRefreshID = 0;
			wheelRefresh = _getTime();
		}
	};
	vars.onChange = function(self, dx, dy, xArray, yArray) {
		_refreshID !== lastRefreshID && updateClamps();
		dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1]));
		if (dy) {
			scrollFuncY.offset && removeContentOffset();
			var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
			isTouch && y !== yClamped && (startScrollY += yClamped - y);
			scrollFuncY(yClamped);
		}
		(dy || dx) && _updateAll();
	};
	vars.onEnable = function() {
		_allowNativePanning(target, normalizeScrollX ? false : "x");
		ScrollTrigger.addEventListener("refresh", onResize);
		_addListener(_win, "resize", onResize);
		if (scrollFuncY.smooth) {
			scrollFuncY.target.style.scrollBehavior = "auto";
			scrollFuncY.smooth = scrollFuncX.smooth = false;
		}
		inputObserver.enable();
	};
	vars.onDisable = function() {
		_allowNativePanning(target, true);
		_removeListener(_win, "resize", onResize);
		ScrollTrigger.removeEventListener("refresh", onResize);
		inputObserver.kill();
	};
	vars.lockAxis = vars.lockAxis !== false;
	self = new Observer(vars);
	self.iOS = _fixIOSBug;
	_fixIOSBug && !scrollFuncY() && scrollFuncY(1);
	_fixIOSBug && gsap.ticker.add(_passThrough);
	onStopDelayedCall = self._dc;
	tween = gsap.to(self, {
		ease: "power4",
		paused: true,
		inherit: false,
		scrollX: normalizeScrollX ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
			return tween.pause();
		}) },
		onUpdate: _updateAll,
		onComplete: onStopDelayedCall.vars.onComplete
	});
	return self;
};
ScrollTrigger.sort = function(func) {
	if (_isFunction(func)) return _triggers.sort(func);
	var scroll = _win.pageYOffset || 0;
	ScrollTrigger.getAll().forEach(function(t) {
		return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
	});
	return _triggers.sort(func || function(a, b) {
		return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
	});
};
ScrollTrigger.observe = function(vars) {
	return new Observer(vars);
};
ScrollTrigger.normalizeScroll = function(vars) {
	if (typeof vars === "undefined") return _normalizer;
	if (vars === true && _normalizer) return _normalizer.enable();
	if (vars === false) {
		_normalizer && _normalizer.kill();
		_normalizer = vars;
		return;
	}
	var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
	_normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
	_isViewport(normalizer.target) && (_normalizer = normalizer);
	return normalizer;
};
ScrollTrigger.core = {
	_getVelocityProp,
	_inputObserver,
	_scrollers,
	_proxies,
	bridge: {
		ss: function ss() {
			_lastScrollTime || _dispatch("scrollStart");
			_lastScrollTime = _getTime();
		},
		ref: function ref() {
			return _refreshing;
		}
	}
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);
// node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}
// node_modules/motion-utils/dist/es/clamp.mjs
var clamp = (min, max, v) => {
	if (v > max) return max;
	if (v < min) return min;
	return v;
};
// node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};
// node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
// node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;
// node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
* Check if the value is a zero value string like "0px" or "0%"
*/
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
// node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
// node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
// node_modules/motion-utils/dist/es/pipe.mjs
/**
* Pipe
* Compose other transformers to run linearily
* pipe(min(20), max(40))
* @param  {...functions} transformers
* @return {function}
*/
var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));
// node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const range = to - from;
	return range ? (value - from) / range : 1;
};
// node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => this.remove(handler);
	}
	remove(handler) {
		removeItem(this.subscriptions, handler);
	}
	notify(a, b, c) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			const handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
// node_modules/motion-utils/dist/es/time-conversion.mjs
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
// node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;
// node_modules/motion-utils/dist/es/wrap.mjs
var wrap = (min, max, v) => {
	const rangeSize = max - min;
	return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
// node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => t * (3 * (1 - t) * ((1 - t) * a1 + t * a2) + t * t);
/*#__NO_SIDE_EFFECTS__*/
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	return (x) => {
		let lowerBound = 0;
		let upperBound = 1;
		let t = x;
		for (let i = 0;; i++) {
			if (!(t >= lowerBound && t <= upperBound)) t = (lowerBound + upperBound) / 2;
			const currentX = calcBezier(t, mX1, mX2) - x;
			if (currentX * currentX < 1e-28 || i === 40) break;
			currentX > 0 ? upperBound = t : lowerBound = t;
			t -= currentX * 1e-7 / (calcBezier(t + 1e-7, mX1, mX2) - x - currentX);
		}
		return calcBezier(t, mY1, mY2);
	};
}
// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
// node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);
// node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /*@__PURE__*/ cubicBezier(.33, 1.53, .69, .99);
var backIn = /*@__PURE__*/ reverseEasing(backOut);
var backInOut = /*@__PURE__*/ mirrorEasing(backIn);
// node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
// node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);
// node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /*@__PURE__*/ cubicBezier(.42, 0, 1, 1);
var easeOut = /*@__PURE__*/ cubicBezier(0, 0, .58, 1);
var easeInOut = /*@__PURE__*/ cubicBezier(.42, 0, .58, 1);
// node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease) => {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
// node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
/*#__NO_SIDE_EFFECTS__*/
function getEasingForSegment(easing, i) {
	return /* @__PURE__ */ isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}
// node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";
// node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
var isValidEasing = (easing) => {
	return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
	if (/* @__PURE__ */ isBezierDefinition(definition)) {
		const [x1, y1, x2, y2] = definition;
		return /* @__PURE__ */ cubicBezier(x1, y1, x2, y2);
	} else if (isValidEasing(definition)) return easingLookup[definition];
	return definition;
};
// node_modules/motion-dom/dist/es/frameloop/frame-data.mjs
/**
* The frameloop's state, kept apart from the frameloop itself so that
* reading it doesn't bundle the scheduler.
*/
var frameData = {
	delta: 0,
	timestamp: 0,
	isProcessing: false
};
// node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
	now = void 0;
}
/**
* An eventloop-synchronous alternative to performance.now().
*
* Ensures that time measurements remain consistent within a synchronous context.
* Usually calling performance.now() twice within the same synchronous context
* will return different values which isn't useful for animations when we're usually
* trying to sync animations to the same frame.
*/
var time = {
	now: () => {
		if (now === void 0) time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
		return now;
	},
	set: (newTime) => {
		now = newTime;
		queueMicrotask(clearTime);
	}
};
// node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;
// node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
	if (!startsAsVariableToken(value)) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
* Check if a value contains a CSS variable anywhere (e.g. inside calc()).
* Unlike isCSSVariableToken which checks if the value IS a var() token,
* this checks if the value CONTAINS var() somewhere in the string.
*/
function containsCSSVariable(value) {
	if (typeof value !== "string") return false;
	return value.split("/*")[0].includes("var(--");
}
// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
var alpha = {
	...number,
	transform: (v) => clamp(0, 1, v)
};
var scale = {
	...number,
	default: 1
};
// node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
	return v == null;
}
// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
// node_modules/motion-dom/dist/es/value/types/color/utils.mjs
/**
* Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
* but false if a number or multiple colors
*/
var isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha !== void 0 ? parseFloat(alpha) : 1
	};
};
// node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
	...number,
	transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
	test: /*@__PURE__*/ isColorString("rgb", "red"),
	parse: /*@__PURE__*/ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
// node_modules/motion-dom/dist/es/value/types/color/hex.mjs
/**
* #FF0000 has two characters per channel, #F00 one, which is doubled.
*/
var channel = (v, i, size) => {
	const c = v.substring(1 + i * size, 1 + (i + 1) * size);
	return size > 1 ? c : c + c;
};
function parseHex(v) {
	const size = v.length > 5 ? 2 : 1;
	const alpha = channel(v, 3, size);
	return {
		red: parseInt(channel(v, 0, size), 16),
		green: parseInt(channel(v, 1, size), 16),
		blue: parseInt(channel(v, 2, size), 16),
		alpha: alpha ? parseInt(alpha, 16) / 255 : 1
	};
}
var hex = {
	test: /*@__PURE__*/ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
// node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
	test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
var degrees = /*@__PURE__*/ createUnitType("deg");
var percent = /*@__PURE__*/ createUnitType("%");
var px = /*@__PURE__*/ createUnitType("px");
var vh = /*@__PURE__*/ createUnitType("vh");
var vw = /*@__PURE__*/ createUnitType("vw");
var progressPercentage = /*@__PURE__*/ (() => ({
	...percent,
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
}))();
// node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
	test: /*@__PURE__*/ isColorString("hsl", "hue"),
	parse: /*@__PURE__*/ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
// node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	},
	getAnimatableNone: (v) => {
		const parsed = color.parse(v);
		parsed.alpha = 0;
		return color.transform(parsed);
	}
};
// node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
// node_modules/motion-dom/dist/es/value/types/complex/index.mjs
/**
* Non-global copies of the token regexes so test() can use .test()
* (no match array, stops at the first token) without lastIndex state.
*/
var hasFloat = /*@__PURE__*/ new RegExp(floatRegex.source);
var hasColor = /*@__PURE__*/ new RegExp(colorRegex.source, "i");
function test(v) {
	return isNaN(v) && typeof v === "string" && (hasFloat.test(v) || hasColor.test(v));
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
/**
* Whether analyseComplexValue(value) would find any values, without
* tokenising the string. CSS variables are resolved before this is
* used, so it's enough to look for a number or a color.
*/
function hasComplexValues(value) {
	const asString = value.toString();
	return hasFloat.test(asString) || hasColor.test(asString);
}
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const values = [];
	const indexes = {
		color: [],
		number: [],
		var: []
	};
	const types = [];
	let i = 0;
	return {
		values,
		split: originalValue.replace(complexRegex, (parsedValue) => {
			if (color.test(parsedValue)) {
				indexes.color.push(i);
				types.push(COLOR_TOKEN);
				values.push(color.parse(parsedValue));
			} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
				indexes.var.push(i);
				types.push(VAR_TOKEN);
				values.push(parsedValue);
			} else {
				indexes.number.push(i);
				types.push(NUMBER_TOKEN);
				values.push(parseFloat(parsedValue));
			}
			++i;
			return SPLIT_TOKEN;
		}).split(SPLIT_TOKEN),
		indexes,
		types
	};
}
function parseComplexValue(v) {
	return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
	const numSections = split.length;
	return (v) => {
		let output = "";
		for (let i = 0; i < numSections; i++) {
			output += split[i];
			if (v[i] !== void 0) {
				const type = types[i];
				if (type === NUMBER_TOKEN) output += sanitize(v[i]);
				else if (type === COLOR_TOKEN) output += color.transform(v[i]);
				else output += v[i];
			}
		}
		return output;
	};
}
function createTransformer(source) {
	return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
/**
* Convert a parsed value to its zero equivalent, but preserve numbers
* that act as divisors in CSS calc() expressions.
*
* analyseComplexValue extracts numbers from CSS strings and puts the
* surrounding text into a `split` template array. For example:
*   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
*                               split:  ["calc(", " / ", ")"]
*
* When building a zero-equivalent for animation, naively zeroing all
* numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
* We detect this by checking whether the text preceding a number
* (split[i]) ends with "/" — the CSS calc division operator.
*/
var convertToZero = (value, splitBefore) => {
	if (typeof value === "number") return splitBefore?.trim().endsWith("/") ? value : 0;
	return convertNumbersToZero(value);
};
function getAnimatableNone$1(v) {
	const info = analyseComplexValue(v);
	return buildTransformer(info)(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha
	};
}
// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}
// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber$1 = (from, to, progress) => {
	return from + (to - from) * progress;
};
// node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const expo = v * (to * to - fromExpo) + fromExpo;
	return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [
	hex,
	rgba,
	hsla
];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
	const type = getColorType(color);
	if (!type) return false;
	let model = type.parse(color);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
var mixColor = (from, to) => {
	const fromRGBA = asRGBA(from);
	const toRGBA = asRGBA(to);
	if (!fromRGBA || !toRGBA) return mixImmediate(from, to);
	const blended = { ...fromRGBA };
	return (v) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
		blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
		return rgba.transform(blended);
	};
};
// node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
/**
* Returns a function that, when provided a progress value between 0 and 1,
* will return the "none" or "hidden" string only when the progress is that of
* the origin or target.
*/
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}
// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber(a, b) {
	return (p) => mixNumber$1(a, b, p);
}
function getMixer(a) {
	if (typeof a === "number") return mixNumber;
	else if (typeof a === "string") return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
	else if (Array.isArray(a)) return mixArray;
	else if (typeof a === "object") return color.test(a) ? mixColor : mixObject;
	return mixImmediate;
}
function mixArray(a, b) {
	const output = [...a];
	const numValues = output.length;
	const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
	return (p) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](p);
		return output;
	};
}
function mixObject(a, b) {
	const output = {
		...a,
		...b
	};
	const blendValue = {};
	for (const key in output) if (a[key] !== void 0 && b[key] !== void 0) blendValue[key] = getMixer(a[key])(a[key], b[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
}
function matchOrder(origin, target) {
	const orderedOrigin = [];
	const pointers = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < target.values.length; i++) {
		const type = target.types[i];
		const originIndex = origin.indexes[type][pointers[type]];
		const originValue = origin.values[originIndex] ?? 0;
		orderedOrigin[i] = originValue;
		pointers[type]++;
	}
	return orderedOrigin;
}
var mixComplex = (origin, target) => {
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	if (originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length) {
		if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) return mixVisibility(origin, target);
		return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), buildTransformer(targetStats));
	} else return mixImmediate(origin, target);
};
// node_modules/motion-dom/dist/es/utils/mix/index.mjs
/**
* A single number with an optional unit, e.g. "50%", "-10px", ".5em".
* Exponents don't match, so they fall through to the complex mixer.
*/
var unitValue = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
/**
* Most CSS values Motion mixes are a single number with a unit. Mixing
* these directly produces the same output as the complex mixer
* ("25%", "0.33333px") without tokenising both strings.
*/
function mixUnit(from, to) {
	const a = unitValue.exec(from);
	if (!a) return;
	const b = unitValue.exec(to);
	if (!b || a[2] !== b[2]) return;
	const unit = a[2];
	const origin = parseFloat(a[1]);
	const target = parseFloat(b[1]);
	return (p) => sanitize(mixNumber$1(origin, target, p)) + unit;
}
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber$1(from, to, p);
	if (typeof from === "string" && typeof to === "string") {
		const mixer = mixUnit(from, to);
		if (mixer) return mixer;
	}
	return getMixer(from)(from, to);
}
// node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
	/**
	* We create and reuse two queues, one to queue jobs for the current frame
	* and one for the next. We reuse to avoid triggering GC after x frames.
	*/
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	/**
	* Track whether we're currently processing jobs in this step. This way
	* we can decide whether to schedule new jobs for this frame or next.
	*/
	let isProcessing = false;
	let flushNextFrame = false;
	/**
	* The callback currently running. If it schedules itself with `immediate`
	* it's left in place, so as before it doesn't run again this step.
	*/
	let running;
	/**
	* A set of processes which were marked keepAlive when scheduled.
	* A keepAlive process is always also held by a frame queue until
	* it's cancelled, so a Set has the same lifetime semantics as a
	* WeakSet here while being considerably faster to query every frame.
	*/
	const toKeepAlive = /* @__PURE__ */ new Set();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			nextFrame.add(callback);
			runNextFrame();
		}
		(running = callback)(latestFrameData);
	}
	const step = {
		/**
		* Schedule a process to run on the next frame.
		*/
		schedule: (callback, keepAlive = false, immediate = false) => {
			const addToCurrentFrame = immediate && isProcessing;
			const queue = addToCurrentFrame ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			/**
			* A callback scheduled with `immediate` during processing may
			* already have run this step (for instance, a value it reads was
			* changed by a later callback). Re-adding moves it to the end of
			* the queue, so it runs again. The running callback is excluded,
			* so one that re-schedules itself can't loop forever.
			*/
			addToCurrentFrame && callback !== running && queue.delete(callback);
			queue.add(callback);
			return callback;
		},
		/**
		* Cancel the provided callback from running on the next frame.
		*/
		cancel: (callback) => {
			nextFrame.delete(callback);
			toKeepAlive.delete(callback);
		},
		/**
		* Execute all schedule callbacks.
		*/
		process: (frameData) => {
			latestFrameData = frameData;
			/**
			* If we're already processing we've probably been triggered by a flushSync
			* inside an existing process. Instead of executing, mark flushNextFrame
			* as true and ensure we flush the following frame at the end of this one.
			*/
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			const prevFrame = thisFrame;
			thisFrame = nextFrame;
			nextFrame = prevFrame;
			thisFrame.forEach(triggerCallback);
			thisFrame.clear();
			running = void 0;
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive, state = {
	delta: 0,
	timestamp: 0,
	isProcessing: false
}) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const flagRunNextFrame = () => runNextFrame = true;
	const steps = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(flagRunNextFrame);
		return acc;
	}, {});
	const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
	const processBatch = () => {
		const useManualTiming = MotionGlobalConfig.useManualTiming;
		const timestamp = useManualTiming ? state.timestamp : performance.now();
		runNextFrame = false;
		if (!useManualTiming) state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
		state.timestamp = timestamp;
		state.isProcessing = true;
		setup.process(state);
		read.process(state);
		resolveKeyframes.process(state);
		preUpdate.process(state);
		update.process(state);
		preRender.process(state);
		render.process(state);
		postRender.process(state);
		state.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}
// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true, frameData);
// node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		/**
		* If we're processing this frame we can use the
		* framelocked timestamp to keep things in sync.
		*/
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};
// node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};
// node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
* Implement a practical max duration for keyframe generation
* to prevent infinite loops
*/
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator, timeStep = 50, maxDuration = maxGeneratorDuration, keyframes) {
	let duration = 0;
	let state = generator.next(duration);
	keyframes?.push(state.value);
	while (!state.done && duration < maxDuration) {
		duration += timeStep;
		state = generator.next(duration);
		keyframes?.push(state.value);
	}
	return duration >= maxDuration ? Infinity : duration;
}
// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
/**
* Create a progress => progress easing function from a generator.
*/
function createGeneratorEasing(options, scale = 100, createGenerator) {
	/**
	* The easing is generated over 0 - scale, but velocity is in the
	* value's own units, so scale it to match. Otherwise an interrupted
	* spring hands off the wrong speed, or direction. Keyframes with
	* units (colours, filters, mixed units) give NaN, which is falsy,
	* so their velocity passes through unscaled.
	*/
	const { keyframes: k, velocity: v } = options;
	const delta = k && k[k.length - 1] - k[0];
	const generator = createGenerator({
		...options,
		velocity: v && delta ? v * scale / delta : v,
		keyframes: [0, scale]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress) => {
			return generator.next(duration * progress).value / scale;
		},
		duration: /* @__PURE__ */ millisecondsToSeconds(duration)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var defaultStiffness = 100;
var defaultDamping = 10;
var defaultMass = 1;
var defaultDuration = 800;
var defaultBounce = .3;
var defaultVisualDuration = .3;
var restSpeedGranular = .01;
var restSpeedDefault = 2;
var restDeltaGranular = .005;
var restDeltaDefault = .5;
var minDuration = .01;
var maxDuration = 10;
var minDamping = .05;
/**
* Maps bounce to a damping ratio as SwiftUI does: 0 is critically damped, and
* it approaches undamped towards 1 and infinitely overdamped towards -1. Both
* ends are limited so the spring still moves and settles.
*/
var bounceToDampingRatio = (bounce) => bounce < 0 ? 1 / Math.max(1 + bounce, minDamping) : Math.max(1 - bounce, minDamping);
/**
* Scales an overdamped spring's undamped frequency so that, at its defining
* time, it has as far left to go as the critically damped spring that's
* criticalFreqTime radians in by then. A negative bounce then changes the
* shape of the curve, not when it arrives. 1 at a damping ratio of 1, so
* there's no jump at a bounce of 0.
*
* Solved by Newton on the remaining distance (times fast - slow), which is
* convex from criticalFreqTime onwards. criticalFreqTime is always below the
* answer, so it converges from below without overshooting.
*/
function overdampedFreqScale(dampingRatio, criticalFreqTime) {
	if (!(dampingRatio > 1)) return 1;
	const root = Math.sqrt(dampingRatio * dampingRatio - 1);
	const slow = dampingRatio - root;
	const fast = dampingRatio + root;
	const target = 2 * root * Math.exp(-criticalFreqTime) * (1 + criticalFreqTime);
	return approximateRoot((freqTime) => fast * Math.exp(-slow * freqTime) - slow * Math.exp(-fast * freqTime) - target, (freqTime) => Math.exp(-fast * freqTime) - Math.exp(-slow * freqTime), criticalFreqTime) / criticalFreqTime;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
/**
* This is ported from the Framer implementation of duration-based spring resolution.
*/
var safeMin = .001;
/**
* Assumes zero initial velocity and the default mass: duration springs start
* from rest so they end exactly at their duration. Only resolves without
* valid physics. Returns NaN physics when the root search doesn't converge.
*/
function findSpring({ duration = defaultDuration, bounce = defaultBounce }) {
	let envelope;
	let derivative;
	const dampingRatio = bounceToDampingRatio(bounce);
	duration = clamp(minDuration, maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		/**
		* Underdamped spring
		*/
		envelope = (undampedFreq) => {
			const exponentialDecay = undampedFreq * dampingRatio;
			const delta = exponentialDecay * duration;
			const b = calcAngularFreq(undampedFreq, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - exponentialDecay / b * c;
		};
		derivative = (undampedFreq) => {
			const delta = undampedFreq * dampingRatio * duration;
			const e = dampingRatio * dampingRatio * undampedFreq * undampedFreq * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(undampedFreq * undampedFreq, dampingRatio);
			return (-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * -e * f / g;
		};
	} else {
		/**
		* Critically-damped spring. Overdamped springs reuse this root,
		* scaled below.
		*/
		envelope = (undampedFreq) => {
			return -.001 + Math.exp(-undampedFreq * duration) * (undampedFreq * duration + 1);
		};
		derivative = (undampedFreq) => {
			return Math.exp(-undampedFreq * duration) * (-undampedFreq * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const criticalFreq = approximateRoot(envelope, derivative, initialGuess);
	const undampedFreq = criticalFreq * overdampedFreqScale(dampingRatio, criticalFreq * duration);
	const stiffness = undampedFreq * undampedFreq;
	return {
		stiffness,
		damping: dampingRatio * 2 * Math.sqrt(stiffness),
		duration: /* @__PURE__ */ secondsToMilliseconds(duration)
	};
}
/**
* Spring physics must be finite. stiffness and mass are also divisors so must
* be positive, whereas a damping of 0 is a valid, perpetually oscillating
* spring. Relational rather than Number.isFinite so numeric strings still
* coerce.
*/
var isValidPhysics = (value, canBeZero) => (canBeZero ? value >= 0 : value > 0) && value < Infinity;
/**
* Returns value if it's usable spring physics, otherwise undefined so callers
* fall back to the default. An explicit `undefined`, e.g. from a forwarded
* optional prop, must fall back too. Invalid physics would otherwise resolve
* to NaN spring values that never report done.
*/
function resolvePhysics(value, canBeZero) {
	if (isValidPhysics(value, canBeZero)) return value;
}
function getSpringOptions(options) {
	/**
	* Resolve physics before choosing between physics- and duration-based
	* resolution, so an invalid stiffness doesn't also silently discard a
	* valid duration/bounce.
	*/
	const validStiffness = resolvePhysics(options.stiffness);
	const validDamping = resolvePhysics(options.damping, true);
	const validMass = resolvePhysics(options.mass);
	const springOptions = {
		...options,
		stiffness: validStiffness ?? defaultStiffness,
		damping: validDamping ?? defaultDamping,
		mass: validMass ?? defaultMass,
		isResolvedFromDuration: false,
		isTimeDefined: (validStiffness ?? validDamping ?? validMass) === void 0 && (options.duration !== void 0 || options.bounce !== void 0)
	};
	if (springOptions.isTimeDefined) {
		if (options.visualDuration) {
			const dampingRatio = bounceToDampingRatio(options.bounce || 0);
			const root = 2 * Math.PI / (options.visualDuration * 1.2) * overdampedFreqScale(dampingRatio, 2 * Math.PI / 1.2);
			springOptions.stiffness = root * root;
			springOptions.damping = 2 * dampingRatio * Math.sqrt(springOptions.stiffness);
		} else {
			Object.assign(springOptions, findSpring(springOptions));
			springOptions.isResolvedFromDuration = true;
		}
		/**
		* Time options can degenerate: a NaN bounce gives a NaN damping, an
		* infinite visualDuration a 0 stiffness, and findSpring NaN for both
		* when it doesn't converge. Replace the two together, so the
		* relationship duration resolution establishes between them is never
		* left half-overwritten.
		*/
		if (!isValidPhysics(springOptions.stiffness) || !isValidPhysics(springOptions.damping, true)) {
			springOptions.stiffness = defaultStiffness;
			springOptions.damping = defaultDamping;
		}
	}
	return springOptions;
}
function springGenerator(optionsOrVisualDuration = defaultVisualDuration, bounce = defaultBounce) {
	const options = typeof optionsOrVisualDuration !== "object" ? {
		visualDuration: optionsOrVisualDuration,
		keyframes: [0, 1],
		bounce
	} : optionsOrVisualDuration;
	const origin = options.keyframes[0];
	const target = options.keyframes[options.keyframes.length - 1];
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, isResolvedFromDuration, isTimeDefined } = getSpringOptions({ ...options });
	/**
	* A duration spring must end exactly at its duration, and it's settled
	* from rest by then. Inherited velocity could leave it still moving, so
	* it starts from rest. Every other spring, visualDuration included, ends
	* when it comes to rest, so inherits velocity as its initial condition.
	*/
	const inheritVelocity = (velocity) => isResolvedFromDuration ? 0 : -/* @__PURE__ */ millisecondsToSeconds(velocity);
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
	const decay = dampingRatio * undampedAngularFreq;
	/**
	* Everything that changes when the spring is retargeted: written by
	* retarget() and update(), read by the resolvers. Grouped on one object,
	* like the coefficients (c) below. Writing doubles to object fields
	* measured marginally faster than to captured let variables in optimised
	* code; neither allocates, so this is a grouping choice, not a GC one.
	*/
	const s = {
		target,
		delta: target - origin,
		velocity: inheritVelocity(options.velocity) || 0,
		restSpeed: 0,
		restDelta: 0
	};
	/**
	* If we're working on a granular scale, use smaller defaults for determining
	* when the spring is finished.
	*
	* These defaults have been selected empirically based on what strikes a good
	* ratio between feeling good and finishing as soon as changes are imperceptible.
	*/
	const setRestThresholds = () => {
		const isGranularScale = Math.abs(s.delta) < 5;
		s.restSpeed = options.restSpeed || (isGranularScale ? restSpeedGranular : restSpeedDefault);
		s.restDelta = options.restDelta || (isGranularScale ? restDeltaGranular : restDeltaDefault);
	};
	setRestThresholds();
	let resolveSpring;
	let resolveVelocity;
	/**
	* Derives the coefficients that depend on origin, target and initial
	* velocity. Called once now and again whenever the spring is retargeted.
	*/
	let update;
	if (dampingRatio < 1) {
		const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		/**
		* A is the position coefficient, sinC/cosC the coefficients of the
		* analytical derivative (px/ms). The exp/sin/cos terms depend only
		* on t, so they're memoized by t independently of the target: a
		* spring retargeted every frame samples the same t each frame and
		* skips the transcendentals entirely.
		*/
		const c = {
			A: 0,
			sinC: 0,
			cosC: 0,
			t: -1,
			env: 0,
			sin: 0,
			cos: 0
		};
		update = () => {
			c.A = (s.velocity + decay * s.delta) / angularFreq;
			c.sinC = decay * c.A + s.delta * angularFreq;
			c.cosC = decay * s.delta - c.A * angularFreq;
		};
		const sample = (t) => {
			if (t !== c.t) {
				c.t = t;
				c.env = Math.exp(-decay * t);
				c.sin = Math.sin(angularFreq * t);
				c.cos = Math.cos(angularFreq * t);
			}
		};
		resolveSpring = (t) => {
			sample(t);
			return s.target - c.env * (c.A * c.sin + s.delta * c.cos);
		};
		resolveVelocity = (t) => {
			sample(t);
			return c.env * (c.sinC * c.sin + c.cosC * c.cos);
		};
	} else if (dampingRatio === 1) {
		resolveSpring = (t) => s.target - Math.exp(-undampedAngularFreq * t) * (s.delta + (s.velocity + undampedAngularFreq * s.delta) * t);
		const c = { C: 0 };
		update = () => {
			c.C = s.velocity + undampedAngularFreq * s.delta;
		};
		resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * c.C * t - s.velocity);
	} else {
		/**
		* Overdamped spring: the sum of a slow and a fast decaying
		* exponential, so no term can overflow however heavily it's damped.
		*/
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		const slow = decay - dampedAngularFreq;
		const fast = decay + dampedAngularFreq;
		/**
		* Physics-defined springs keep a non-physical limit: once
		* dampedAngularFreq * t passes 300, both terms decay at the damping
		* rate. Heavily overdamped drag springs (dragElastic: 0,
		* dragTransition) rely on this to settle almost at once rather than
		* creep at stiffness / damping. It only applies when reached within
		* 300ms (a dampedAngularFreq of 1 rad/ms), so it reads as a stiff
		* spring snapping into place: any later and it cuts off a slow spring
		* that's visibly still moving (#1207). Negative bounce needs the
		* exact curve, so time-defined springs are exempt.
		*/
		const limit = dampedAngularFreq < 1 || isTimeDefined ? Infinity : 300 / dampedAngularFreq;
		const decayAt = (rate, t) => Math.exp(t > limit ? (decay - rate) * limit - decay * t : -rate * t);
		const c = {
			S: 0,
			F: 0
		};
		update = () => {
			const P = (s.velocity + decay * s.delta) / dampedAngularFreq;
			c.S = (s.delta + P) / 2;
			c.F = (s.delta - P) / 2;
		};
		resolveSpring = (t) => s.target - c.S * decayAt(slow, t) - c.F * decayAt(fast, t);
		resolveVelocity = (t) => slow * c.S * decayAt(slow, t) + fast * c.F * decayAt(fast, t);
	}
	update();
	const calculatedDuration = isResolvedFromDuration ? duration || null : null;
	const generator = {
		calculatedDuration,
		/**
		* Aim the spring at a new target from its current position and
		* velocity, reusing the resolved physics and closures.
		*/
		retarget: (keyframes, newVelocity) => {
			s.target = keyframes[keyframes.length - 1];
			s.delta = s.target - keyframes[0];
			s.velocity = inheritVelocity(newVelocity);
			if (!(options.restSpeed && options.restDelta)) setRestThresholds();
			generator.calculatedDuration = calculatedDuration;
			state.done = false;
			update();
		},
		velocity: (t) => /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t)),
		next: (t) => {
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t));
				state.done = Math.abs(currentVelocity) <= s.restSpeed && Math.abs(s.target - current) <= s.restDelta;
			} else state.done = t >= duration;
			state.value = state.done ? s.target : current;
			return state;
		},
		toString: () => {
			const easingDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
			const easing = generateLinearEasing((progress) => generator.next(easingDuration * progress).value, easingDuration, 30);
			return easingDuration + "ms " + easing;
		}
	};
	return generator;
}
var spring = /* @__PURE__ */ Object.assign(springGenerator, { applyToOptions: (options) => {
	const generatorOptions = createGeneratorEasing(options, 100, springGenerator);
	options.ease = generatorOptions.ease;
	options.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
	options.type = "keyframes";
	return options;
} });
// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = .5, restSpeed }) {
	const origin = keyframes[0];
	const state = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v) => v < min || v > max;
	const nearestBoundary = (v) => {
		if (min === void 0) return max;
		if (max === void 0) return min;
		return Math.abs(min - v) < Math.abs(max - v) ? min : max;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget ? modifyTarget(ideal) : ideal;
	/**
	* If the target has changed we need to re-calculate the amplitude, otherwise
	* the animation will start from the wrong position.
	*/
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : t ? target + delta : origin;
	};
	/**
	* Ideally this would resolve for t in a stateless way, we could
	* do that by always precalculating the animation but as we know
	* this will be done anyway we can assume that spring will
	* be discovered during that.
	*/
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t) => {
		if (!isOutOfBounds(state.value)) return;
		timeReachedBoundary = t;
		spring$1 = spring({
			keyframes: [state.value, nearestBoundary(state.value)],
			/**
			* The friction curve is target + calcDelta(t), so its exact
			* derivative is -calcDelta(t) / timeConstant in units/ms,
			* converted here to the units/second expected by spring.
			*/
			velocity: -calcDelta(t) / timeConstant * 1e3,
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t) => {
			/**
			* We need to resolve the friction to figure out if we need a
			* spring but we don't want to do this twice per frame. So here
			* we flag if we updated for this frame and later if we did
			* we can skip doing it again.
			*/
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			/**
			* If we have a spring and the provided t is beyond the moment the friction
			* animation crossed the min/max boundary, use the spring.
			*/
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}
// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = customMixer?.(output[i], output[i + 1]) || mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = pipe(Array.isArray(ease) ? ease[i] || noop : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
/**
* Create a function that maps from a numerical input array to a generic output array.
*
* Accepts:
*   - Numbers
*   - Colors (hex, hsl, hsla, rgb, rgba)
*   - Complex (combinations of one or more numbers or strings)
*
* ```jsx
* const mixColor = interpolate([0, 1], ['#fff', '#000'])
*
* mixColor(0.5) // 'rgba(128, 128, 128, 1)'
* ```
*
* TODO Revisit this approach once we've moved to data models for values,
* probably not needed to pregenerate mixer functions.
*
* @public
*/
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	/**
	* If we're only provided a single input, we can just make a function
	* that returns the output.
	*/
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease, mixer);
	const numMixers = mixers.length;
	const interpolator = (v) => {
		if (isZeroDeltaRange && v < input[0]) return output[0];
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v < input[i + 1]) break;
		}
		const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
	const min = offset[offset.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
		offset.push(mixNumber$1(min, 1, offsetProgress));
	}
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
	const offset = [0];
	fillOffset(offset, arr.length - 1);
	return offset;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", mixer: transitionMixer }) {
	/**
	* A mixer only blends values that aren't numbers. Numbers blend as
	* usual, as they do in springs, and so do the progress animations
	* behind layout and path animations, which take the same transition.
	*/
	const customMixer = typeof keyframeValues[0] === "number" ? void 0 : transitionMixer;
	/**
	* Easing functions can be externally defined as strings. Here we convert them
	* into actual functions.
	*/
	const easingFunctions = /* @__PURE__ */ isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease) || easeInOut;
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: keyframeValues[0]
	};
	/**
	* Two keyframes, or keyframes that hold, move once, then hold, as each
	* value of a sequence does, ease and mix only the pair that moves.
	*/
	let span = -1;
	if (!customMixer) {
		for (let i = 1; i < keyframeValues.length; i++) if (keyframeValues[i] !== keyframeValues[i - 1]) {
			if (span >= 0) {
				span = -2;
				break;
			}
			span = i - 1;
		}
	}
	if (span >= 0) {
		const offsets = times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues);
		const from = offsets[span] * duration;
		const to = offsets[span + 1] * duration;
		const origin = keyframeValues[span];
		const target = keyframeValues[span + 1];
		const ease = Array.isArray(easingFunctions) ? easingFunctions[span] : easingFunctions;
		const mixer = (MotionGlobalConfig.mix || mix)(origin, target);
		const last = keyframeValues.length - 2;
		return {
			calculatedDuration: duration,
			next: (t) => {
				/**
				* Held keyframes either side of the move are mixed as
				* interpolate() mixes them, so colours keep its format.
				*/
				state.value = span && t < from ? mixer(0) : span < last && (t >= to || !duration) ? typeof target === "number" ? target : mixer(1) : mixer(ease(t >= to || !duration ? 1 : t <= from ? 0 : (t - from) / (to - from)));
				state.done = t >= duration;
				return state;
			}
		};
	}
	const mapTimeToKeyframe = interpolate(convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration), keyframeValues, {
		ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions),
		mixer: customMixer
	});
	return {
		calculatedDuration: duration,
		next: (t) => {
			state.value = mapTimeToKeyframe(t);
			state.done = t >= duration;
			return state;
		}
	};
}
// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return /* @__PURE__ */ velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
/**
* A generator's velocity at time t in units/second: analytical where the
* generator provides it (springs), otherwise by finite difference. Before
* the animation has started this is its initial velocity.
*/
function calcGeneratorVelocity(generator, t, initialVelocity = 0) {
	if (t <= 0) return initialVelocity;
	return generator.velocity ? generator.velocity(t) : getGeneratorVelocity((s) => generator.next(s).value, t, generator.next(t).value);
}
// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	/**
	* The first and last keyframes that aren't null, and how many there
	* are. Found in one pass rather than filtering into a new array, as
	* this runs for every value of every animation.
	*/
	let first;
	let last;
	let numResolved = 0;
	for (let i = 0; i < keyframes.length; i++) {
		const keyframe = keyframes[i];
		if (keyframe !== null) {
			if (!numResolved++) first = keyframe;
			last = keyframe;
		}
	}
	const index = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : numResolved - 1;
	return !index || finalKeyframe === void 0 ? index ? last : first : finalKeyframe;
}
// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(transition) {
	if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-start-time.mjs
/**
* If an animation's keyframes resolve, or its first frame renders, more than
* this long after its start time, it starts from then instead. While we prefer
* to "start" an animation as soon as it's triggered, this avoids a visual jump
* into it after main thread work.
*
* Manual timing steps frames by however long it likes, so never lags.
*/
var MAX_START_DELAY = 40;
var resolveStartTime = (startTime, now) => now - startTime > MAX_START_DELAY && !MotionGlobalConfig.useManualTiming ? now : startTime;
// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function baseRecord(kind, animation) {
	return {
		kind,
		animation,
		timestamp: time.now(),
		frameTimestamp: frameData.timestamp,
		frameIsProcessing: frameData.isProcessing
	};
}
/**
* Notify an optional inspector without adding a public Motion API.
*
* The record is a raw firehose: the live animation handle, the concrete
* animation's internal options object untouched (timing fields in
* internal milliseconds, name/keyframes/element/motionValue still
* attached), a timestamp and the raw frameloop state at notify time.
* All interpretation belongs to the consumer behind
* globalThis.__MOTION_INSPECT__.
*/
function notifyAnimationStart(animation, options, transition) {
	const notify = globalThis.__MOTION_INSPECT__;
	if (!notify) return;
	try {
		notify({
			...baseRecord("animation-start", animation),
			options: transition ? {
				...options,
				...transition
			} : options
		});
	} catch {}
}
// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
	constructor() {
		this.isResolved = false;
	}
	get finished() {
		if (!this._finished) this._finished = this.isResolved ? Promise.resolve() : new Promise((resolve) => {
			this._resolve = resolve;
		});
		return this._finished;
	}
	updateFinished() {
		this._finished = this._resolve = void 0;
		this.isResolved = false;
	}
	notifyFinished() {
		this.isResolved = true;
		this._resolve?.();
	}
	/**
	* Allows the animation to be awaited.
	*
	* @deprecated Use `finished` instead.
	*/
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
};
// node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent) => percent / 100;
var round = (value) => Math.round(value * 1e4) / 1e4;
var JSAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		/**
		* The current time of the animation.
		*/
		this.currentTime = 0;
		/**
		* The time at which the animation was paused.
		*/
		this.holdTime = null;
		/**
		* Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
		*/
		this.playbackSpeed = 1;
		/**
		* Reusable state object for the delay phase to avoid
		* allocating a new object every frame.
		*/
		this.delayState = {
			done: false,
			value: void 0
		};
		/**
		* This method is bound to the instance to fix a pattern where
		* animation.stop is returned as a reference from a useEffect.
		*/
		this.stop = () => {
			const { motionValue } = this.options;
			const now = time.now();
			if (motionValue && motionValue.updatedAt !== now)
 /**
			* Catch the value up to now, but measure its velocity from the
			* previous frame: marking it as updated now keeps the value's
			* previous-frame sample. This tick is usually less than a frame
			* after the last, and the animation's time is rounded to whole
			* milliseconds, so measured from the last frame alone the
			* velocity an interrupting animation inherits could read as 0,
			* or a multiple of the real one.
			*/
			this.tick(motionValue.updatedAt = now);
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
		this.options = options;
		this.initAnimation();
		this.play();
		if (options.autoplay === false) this.pause();
		notifyAnimationStart(this, this.options);
	}
	initAnimation() {
		const { options } = this;
		replaceTransitionType(options);
		const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
		let { keyframes: keyframes$1 } = options;
		const generatorFactory = type || keyframes;
		/**
		* This runs again when a spring is flattened to attach it to a
		* timeline, and the keyframes generator blends values itself.
		*/
		this.mixKeyframes = void 0;
		if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
			this.mixKeyframes = pipe(percentToProgress, options.mixer?.(keyframes$1[0], keyframes$1[1]) || mix(keyframes$1[0], keyframes$1[1]));
			keyframes$1 = [0, 100];
		}
		const generator = generatorFactory(keyframes$1 === options.keyframes ? options : {
			...options,
			keyframes: keyframes$1
		});
		/**
		* If we have a mirror repeat type we need to create a second generator that outputs the
		* mirrored (not reversed) animation and later ping pong between the two generators.
		*/
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options,
			keyframes: [...keyframes$1].reverse(),
			velocity: -velocity
		});
		/**
		* If duration is undefined and we have repeat options,
		* we need to calculate a duration from the generator.
		*
		* We set it to the generator itself to cache the duration.
		* Any timeline resolver will need to have already precalculated
		* the duration by this step.
		*/
		if (generator.calculatedDuration === null) generator.calculatedDuration = calcGeneratorDuration(generator);
		const { calculatedDuration } = generator;
		this.calculatedDuration = calculatedDuration;
		this.resolvedDuration = calculatedDuration + repeatDelay;
		this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
		this.generator = generator;
	}
	updateTime(timestamp) {
		this.currentTime = this.holdTime ?? Math.round(timestamp - this.startTime) * this.playbackSpeed;
	}
	tick(timestamp, sample = false) {
		const { generator, totalDuration, calculatedDuration } = this;
		if (this.startTime === null) return generator.next(0);
		const { delay = 0, keyframes, type, onUpdate, finalKeyframe } = this.options;
		if (this.startTime === this.pendingStartTime) this.startTime = resolveStartTime(this.startTime, timestamp);
		this.pendingStartTime = void 0;
		/**
		* requestAnimationFrame timestamps can come through as lower than
		* the startTime as set by performance.now(). Here we prevent this,
		* though in the future it could be possible to make setting startTime
		* a pending operation that gets resolved here.
		*/
		if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
		else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
		if (sample) this.currentTime = timestamp;
		else this.updateTime(timestamp);
		const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
		const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		this.currentTime = Math.max(timeWithoutDelay, 0);
		if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
		const state = this.generate(this.currentTime, isInDelayPhase);
		let { done } = state;
		/**
		* A generator that takes longer than maxGeneratorDuration to finish
		* has an Infinity duration, so played forwards it finishes when it
		* says it's done.
		*/
		if (!isInDelayPhase) done = this.playbackSpeed >= 0 ? calculatedDuration < Infinity ? this.currentTime >= totalDuration : done : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
		if (onUpdate) onUpdate(state.value);
		if (isAnimationFinished) this.finish();
		return state;
	}
	/**
	* This animation's time, including delay, at a timestamp.
	*/
	at(timestamp) {
		return this.holdTime ?? round((timestamp - this.startTime) * this.playbackSpeed);
	}
	/**
	* The value at a timestamp, without changing this animation's state.
	* If resolved, it ends at the last resolved keyframe, which is in the
	* same unit as the others, rather than at finalKeyframe.
	*/
	sampleAt(timestamp, resolved) {
		const { options, totalDuration } = this;
		const t = this.at(timestamp) - (options.delay || 0);
		return t >= totalDuration && options.type !== inertia ? getFinalKeyframe(options.keyframes, options, resolved ? void 0 : options.finalKeyframe) : this.generate(Math.max(t, 0), t < 0).value;
	}
	/**
	* The generator's state `currentTime` ms after the delay, without
	* changing the animation's own state.
	*/
	generate(currentTime, isInDelayPhase) {
		const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration } = this;
		const { keyframes, repeat, repeatType, repeatDelay } = this.options;
		let elapsed = currentTime;
		let frameGenerator = generator;
		if (repeat) {
			/**
			* Get the current progress (0-1) of the animation. If t is >
			* than duration we'll get values like 2.5 (midway through the
			* third iteration)
			*/
			const progress = Math.min(currentTime, totalDuration) / resolvedDuration;
			/**
			* Get the current iteration (0 indexed). For instance the floor of
			* 2.5 is 2.
			*/
			let currentIteration = Math.floor(progress);
			/**
			* Get the current progress of the iteration by taking the remainder
			* so 2.5 is 0.5 through iteration 2
			*/
			let iterationProgress = progress % 1;
			/**
			* If iteration progress is 1 we count that as the end
			* of the previous iteration.
			*/
			if (!iterationProgress && progress >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			if (Boolean(currentIteration % 2)) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
		}
		/**
		* If we're in negative time, set state as the initial keyframe.
		* This prevents delay: x, duration: 0 animations from finishing
		* instantly.
		*/
		let state;
		if (isInDelayPhase) {
			this.delayState.value = keyframes[0];
			state = this.delayState;
		} else state = frameGenerator.next(elapsed);
		if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
		return state;
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(this.options.delay ?? 0);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(newTime) {
		/**
		* Seeking out of "finished" leaves the animation paused, so play()
		* won't renew finished. Renew it here.
		*/
		if (this.state === "finished") this.updateFinished();
		newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		this.currentTime = newTime;
		if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
		else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
		if (this.driver) this.driver.start(false);
		else {
			this.startTime = 0;
			this.state = "paused";
			this.holdTime = newTime;
			this.tick(newTime);
		}
	}
	/**
	* Returns the generator's velocity at the current time in units/second.
	* Uses the analytical derivative when available (springs), avoiding
	* the MotionValue's frame-dependent velocity estimation.
	*/
	getGeneratorVelocity() {
		return calcGeneratorVelocity(this.generator, this.currentTime, this.options.velocity);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(newSpeed) {
		const hasChanged = this.playbackSpeed !== newSpeed;
		if (hasChanged && this.driver) this.updateTime(time.now());
		this.playbackSpeed = newSpeed;
		if (hasChanged && this.driver) this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	play() {
		if (this.isStopped) return;
		const { driver = frameloopDriver, startTime } = this.options;
		if (!this.driver) this.driver = driver((timestamp) => this.tick(timestamp));
		this.options.onPlay?.();
		const now = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now;
		} else if (this.holdTime !== null) this.startTime = now - this.holdTime / (this.playbackSpeed || 1);
		else if (!this.startTime) this.startTime = startTime ?? (this.pendingStartTime = now);
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
		/**
		* Set playState to running only after we've used it in
		* the previous logic.
		*/
		this.state = "running";
		this.driver.start();
	}
	pause() {
		this.state = "paused";
		this.updateTime(time.now());
		this.holdTime = this.currentTime;
	}
	complete() {
		if (this.state !== "running") this.play();
		this.state = "finished";
		this.holdTime = null;
	}
	finish() {
		this.notifyFinished();
		this.teardown();
		this.state = "finished";
		this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null;
		this.startTime = 0;
		this.tick(0);
		this.teardown();
		this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle";
		this.driver?.stop();
		this.driver = void 0;
		this.startTime = this.holdTime = null;
	}
	sample(sampleTime) {
		this.startTime = 0;
		return this.tick(sampleTime, true);
	}
	attachTimeline(timeline) {
		if (this.options.allowFlatten) {
			this.options.type = "keyframes";
			this.options.ease = "linear";
			this.initAnimation();
		}
		this.driver?.stop();
		return timeline.observe(this);
	}
};
// node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
/**
* Properties that should default to 1 or 100%
*/
var maxDefaults = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number] = value.match(floatRegex) || [];
	if (!number) return v;
	const unit = value.replace(number, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
	...complex,
	getAnimatableNone: (v) => {
		const functions = v.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v;
	}
};
// node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
	...complex,
	getAnimatableNone: (v) => {
		const parsed = complex.parse(v);
		return complex.createTransformer(v)(parsed.map((v) => typeof v === "number" ? 0 : typeof v === "object" ? {
			...v,
			alpha: 1
		} : v));
	}
};
// node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
	...number,
	transform: Math.round
};
// node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
var transformValueTypes = {
	rotate: degrees,
	/**
	* Internal channel for `transition.path` orientToPath. Composed onto
	* `rotate` at the transform-build sites so the user's `rotate` is
	* never read or overwritten. Not part of `transformPropOrder`.
	*/
	pathRotation: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px
};
// node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	fontSize: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	...transformValueTypes,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
// node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
/**
* A map of default value types for common values
*/
var defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter,
	mask,
	WebkitMask: mask
};
/**
* Gets the default ValueType for the provided value key
*/
var getDefaultValueType = (key) => defaultValueTypes[key];
// node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /*@__PURE__*/ new Set([filter, mask]);
/**
* The last call and its result. animate() on many elements asks for the
* same none for each one, and parsing the value is the slow part.
*/
var lastKey;
var lastValue;
var lastNone;
function getAnimatableNone(key, value) {
	if (key === lastKey && value === lastValue) return lastNone;
	let defaultValueType = getDefaultValueType(key);
	if (!customTypes.has(defaultValueType)) defaultValueType = complex;
	lastNone = defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
	lastKey = key;
	lastValue = value;
	return lastNone;
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes) {
	for (let i = 1; i < keyframes.length; i++) keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
}
// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
	return rebaseAngle(radToDeg(Math.atan2(v[1], v[0])));
};
var matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scaleZ: () => 1,
	scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (v) => radToDeg(Math.atan(v[1])),
	skewY: (v) => radToDeg(Math.atan(v[2])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
	angle = angle % 360;
	if (angle < 0) angle += 360;
	return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.hypot(v[0], v[1]);
var scaleY = (v) => Math.hypot(v[4], v[5]);
var matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scaleZ: (v) => Math.hypot(v[8], v[9], v[10]),
	scale: (v) => (scaleX(v) + scaleY(v)) / 2,
	rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
	rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (v) => radToDeg(Math.atan(v[4])),
	skewY: (v) => radToDeg(Math.atan(v[1])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
	return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
	if (!transform || transform === "none") return defaultTransformValue(name);
	const match = transform.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
	if (!match) return defaultTransformValue(name);
	const valueParser = (match[1] ? matrix3dParsers : matrix2dParsers)[name];
	/**
	* parseFloat skips leading whitespace and stops at trailing whitespace.
	*/
	const values = match[2].split(",").map((v) => parseFloat(v));
	return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
	const { transform = "none" } = getComputedStyle(instance);
	return parseValueFromTransform(transform, name);
};
// node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
* Generate a list of every possible transform key.
*/
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"scaleZ",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
/**
* A quick lookup for transform props.
*
* `pathRotation` is a transform for routing purposes (skipped from raw
* style application, wired to the transform composite, flags transform
* dirty) but is intentionally NOT in `transformPropOrder` — it is
* composed onto `rotate` at the build sites, not serialized in its own
* slot, and must stay out of the order-array consumers (parse-transform,
* unit-conversion, keys-position).
*/
var transformProps = /*@__PURE__*/ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();
// node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = /* @__PURE__ */ transformPropOrder.filter((key) => !transformKeys.has(key));
/**
* Reset any bounding box-changing transforms so the element can be
* measured. Returns the values to restore. Values already at their
* default don't change the box, so they're left alone: an element with
* only `rotate: 0` doesn't need to be re-rendered before measuring.
*/
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			const current = value.get();
			const reset = key.startsWith("scale") ? 1 : 0;
			if (current === reset) return;
			removedTransforms.push([key, current]);
			value.set(reset);
		}
	});
	return removedTransforms;
}
/**
* Values that can only be measured from the bounding box. Elements with
* these values need bounding box-changing transforms removed first.
*/
var boxDependentValues = /* @__PURE__ */ new Set(["bottom", "right"]);
/**
* Computed width/height is already in pixels and unaffected by
* transforms. It's "auto" for elements without a layout box (e.g. inline),
* in which case we fall back to measuring the bounding box.
*/
function measureDimension(computed, measureBox, axis, paddingStart, paddingEnd, boxSizing) {
	const px = parseFloat(computed);
	if (!isNaN(px)) return px;
	const { min, max } = measureBox()[axis];
	const size = max - min;
	return boxSizing === "border-box" ? size : size - parseFloat(paddingStart) - parseFloat(paddingEnd);
}
var transformX = ({ transform }) => parseValueFromTransform(transform, "x");
var transformY = ({ transform }) => parseValueFromTransform(transform, "y");
var positionalValues = {
	width: ({ width, paddingLeft = "0", paddingRight = "0", boxSizing }, measureBox) => measureDimension(width, measureBox, "x", paddingLeft, paddingRight, boxSizing),
	height: ({ height, paddingTop = "0", paddingBottom = "0", boxSizing }, measureBox) => measureDimension(height, measureBox, "y", paddingTop, paddingBottom, boxSizing),
	top: ({ top }) => parseFloat(top),
	left: ({ left }) => parseFloat(left),
	bottom: ({ top }, measureBox) => {
		const { y } = measureBox();
		return parseFloat(top) + (y.max - y.min);
	},
	right: ({ left }, measureBox) => {
		const { x } = measureBox();
		return parseFloat(left) + (x.max - x.min);
	},
	x: transformX,
	y: transformY,
	translateX: transformX,
	translateY: transformY
};
// node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = [];
		const elementsToMeasure = /* @__PURE__ */ new Set();
		const elementsToUntransform = /* @__PURE__ */ new Set();
		toResolve.forEach((resolver) => {
			if (!resolver.needsMeasurement) return;
			resolversToMeasure.push(resolver);
			elementsToMeasure.add(resolver.element);
			if (boxDependentValues.has(resolver.name)) elementsToUntransform.add(resolver.element);
		});
		const transformsToRestore = /* @__PURE__ */ new Map();
		/**
		* Write pass
		* Values measured from the bounding box need bounding box-changing
		* transforms removed first. Values read from computed style don't.
		*/
		elementsToUntransform.forEach((element) => {
			const removedTransforms = removeNonTranslationalTransform(element);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element, removedTransforms);
			element.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element) => {
			element.render();
			const restore = transformsToRestore.get(element);
			if (restore) restore.forEach(([key, value]) => {
				element.getValue(key)?.set(value);
			});
		});
		resolversToMeasure.forEach((resolver) => resolver.measureEndState());
		resolversToMeasure.forEach((resolver) => {
			if (resolver.suspendedScrollY !== void 0) window.scrollTo(0, resolver.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = false;
	isScheduled = false;
	toResolve.forEach((resolver) => resolver.complete(isForced));
	toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((resolver) => {
		resolver.readKeyframes();
		if (resolver.needsMeasurement) anyNeedsMeasurement = true;
	});
}
function flushKeyframeResolvers() {
	isForced = true;
	readAllKeyframes();
	measureAllKeyframes();
	isForced = false;
}
/**
* Normalise a value read from the subject into an animation origin: a
* number read as a string ("0", "200") becomes a number, and a value
* that isn't animatable (e.g. "none") but whose target is becomes an
* animatable zero in the shape of the target.
*/
function readOrigin(value, name, target) {
	if (typeof value === "string") {
		if (isNumericalString(value) || isZeroValueString(value)) return parseFloat(value);
		else if (!complex.test(value) && complex.test(target)) return getAnimatableNone(name, target);
	}
	return value ?? void 0;
}
var KeyframeResolver = class {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
		this.state = "pending";
		/**
		* Track whether this resolver is async. If it is, it'll be added to the
		* resolver queue and flushed in the next frame. Resolvers that aren't going
		* to trigger read/write thrashing don't need to be async.
		*/
		this.isAsync = false;
		/**
		* Track whether this resolver needs to perform a measurement
		* to resolve its keyframes.
		*/
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue;
		this.element = element;
		this.isAsync = isAsync;
	}
	scheduleResolve() {
		this.state = "scheduled";
		if (this.isAsync) {
			toResolve.add(this);
			if (!isScheduled) {
				isScheduled = true;
				frame.read(readAllKeyframes);
				frame.resolveKeyframes(measureAllKeyframes);
			}
		} else {
			this.readKeyframes();
			this.complete();
		}
	}
	readKeyframes() {
		const { unresolvedKeyframes, name, element, motionValue } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element && name) {
				const valueAsRead = readOrigin(element.readValue(name, finalKeyframe), name, finalKeyframe);
				if (valueAsRead !== void 0) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue && currentValue === void 0) motionValue.set(unresolvedKeyframes[0]);
		}
		fillWildcards(unresolvedKeyframes);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(isForcedComplete = false) {
		this.state = "complete";
		this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
		toResolve.delete(this);
	}
	cancel() {
		if (this.state === "scheduled") {
			toResolve.delete(this);
			this.state = "pending";
		}
	}
	resume() {
		if (this.state === "pending") this.scheduleResolve();
	}
};
// node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");
// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
	isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
* Add the ability for test suites to manually set support flags
* to better test more environments.
*/
var supportsFlags = {};
// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
	const memoized = /* @__PURE__ */ memo(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}
// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
// node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");
// node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
// node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (/* @__PURE__ */ isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}
// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease, duration);
	/**
	* If this is an easing array, apply to keyframes, not animation as a whole
	*/
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	const options = {
		delay,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options.pseudoElement = pseudoElement;
	return element.animate(keyframeOptions, options);
}
// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options);
	else {
		options.duration ?? (options.duration = 300);
		options.ease ?? (options.ease = "easeOut");
	}
	return options;
}
// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
/**
* NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
*/
var NativeAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		/**
		* Tracks a manually-set start time that takes precedence over WAAPI's
		* dynamic startTime. This is cleared when play() or time setter is called,
		* allowing WAAPI to take over timing.
		*/
		this.manualStartTime = null;
		if (!options) return;
		const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options;
		const transition = applyGeneratorOptions(options);
		this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = this.onFinish = () => {
			this.animation.onfinish = null;
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
				this.updateMotionValue?.(keyframe);
				/**
				* If we can, we want to commit the final style as set by the user,
				* rather than the computed keyframe value supplied by the animation.
				* We always do this, even when a motion value is present, to prevent
				* a visual flash in Firefox where the WAAPI animation's fill is removed
				* during cancel() before the scheduled render can apply the correct value.
				*/
				setStyle(element, name, keyframe);
				this.animation.cancel();
			}
			onComplete?.();
			this.notifyFinished();
		};
		notifyAnimationStart(this, options, transition);
	}
	play() {
		if (this.isStopped) return;
		this.manualStartTime = null;
		this.animation.onfinish = this.onFinish;
		this.animation.play();
		if (this.state === "finished") this.updateFinished();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		if (!this.isStopped) this.animation.onfinish = this.onFinish;
		this.animation.finish?.();
	}
	cancel() {
		this.animation.onfinish = null;
		try {
			this.animation.cancel();
		} catch (e) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = true;
		/**
		* Before its finish event, a finished animation (an instant one is
		* as soon as it starts) is still showing its end, so it's stopped
		* like a running one. Otherwise that event would apply its end
		* over whatever animates the value next.
		*/
		if (this.state === "idle" || this.finishedTime !== null) return;
		if (this.updateMotionValue) this.updateMotionValue();
		else this.commitStyles();
		if (!this.isPseudoElement) this.cancel();
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* In this method, we commit styles back to the DOM before cancelling
	* the animation.
	*
	* This is designed to be overridden by NativeAnimationExtended, which
	* will create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to also correctly calculate velocity for any subsequent animation
	* while deferring the commit until the next animation frame.
	*/
	commitStyles() {
		const element = this.options?.element;
		if (!this.isPseudoElement && element?.isConnected) this.animation.commitStyles?.();
	}
	get duration() {
		const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(duration));
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(newTime) {
		const wasFinished = this.finishedTime !== null;
		this.manualStartTime = null;
		this.finishedTime = null;
		this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		/**
		* Seeking out of "finished" leaves the animation paused, so play()
		* won't renew finished. Renew it here.
		*/
		if (wasFinished) {
			this.animation.pause();
			this.updateFinished();
		}
	}
	/**
	* The playback speed of the animation.
	* 1 = normal speed, 2 = double speed, 0.5 = half speed.
	*/
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(newSpeed) {
		if (newSpeed < 0) this.finishedTime = null;
		this.animation.playbackRate = newSpeed;
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(newStartTime) {
		this.manualStartTime = this.animation.startTime = newStartTime;
	}
	/**
	* Attaches a timeline to the animation, for instance the `ScrollTimeline`.
	*/
	attachTimeline({ timeline, onAttach, observe }) {
		if (this.allowFlatten) this.animation.effect?.updateTiming({ easing: "linear" });
		this.animation.onfinish = this.onFinish = null;
		if (timeline && supportsScrollTimeline()) {
			this.animation.timeline = timeline;
			onAttach?.(this.animation);
			return noop;
		} else return observe(this);
	}
};
// node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(key) {
	return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
	if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options) {
		/**
		* The base NativeAnimation function only supports a subset
		* of Motion easings, and WAAPI also only supports some
		* easing functions via string/cubic-bezier definitions.
		*
		* This function replaces those unsupported easing functions
		* with a JS easing function. This will later get compiled
		* to a linear() easing function.
		*/
		replaceStringEasing(options);
		/**
		* Ensure we replace the transition type with a generator function
		* before passing to WAAPI.
		*
		* TODO: Does this have a better home? It could be shared with
		* JSAnimation.
		*/
		replaceTransitionType(options);
		super(options);
		/**
		* Only set startTime when the animation should autoplay.
		* Setting startTime on a paused WAAPI animation unpauses it
		* (per the WAAPI spec), which breaks autoplay: false.
		*/
		if (options.startTime !== void 0 && options.autoplay !== false) this.startTime = options.startTime;
		this.options = options;
	}
	/**
	* The animation's time now, in ms. Wall-clock rather than WAAPI's
	* currentTime while running, as under CPU load currentTime may not
	* reflect the actual elapsed time, causing incorrect sampling and
	* visual jumps.
	*/
	elapsed() {
		return this.state === "running" ? (time.now() - this.startTime) * this.speed : this.time * 1e3;
	}
	/**
	* The value at a time, from a renderless JS animation.
	*/
	sample(sampleTime) {
		if (!this.sampler) {
			const { motionValue, onUpdate, onComplete, onPlay, onStop, element, ...options } = this.options;
			/**
			* Stop it straight away so its driver doesn't run every frame.
			* It can still be sampled.
			*/
			this.sampler = new JSAnimation({
				...options,
				autoplay: false
			});
			this.sampler.stop();
		}
		return this.sampler.sample(Math.max(0, sampleTime)).value;
	}
	/**
	* The value now, as WAAPI doesn't set the motion value while it runs.
	*/
	liveValue() {
		const { state } = this;
		if (state === "running" || state === "paused") return this.sample(this.elapsed());
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* Rather than read committed styles back out of the DOM, we can
	* sample a renderless JS animation twice to calculate its current
	* value, "previous" value, and therefore allow Motion to calculate
	* velocity for any subsequent animation.
	*/
	updateMotionValue(value) {
		const { motionValue, element, name } = this.options;
		if (!motionValue) return;
		if (value !== void 0) {
			motionValue.set(value);
			return;
		}
		const { speed } = this;
		const sampleTime = this.elapsed();
		const delta = this.state === "running" && speed ? clamp(0, 10, sampleTime) : 0;
		const current = this.sample(sampleTime);
		/**
		* Write the estimated value to inline style so it persists
		* after cancel(), covering the async gap before the next
		* animation starts.
		*/
		if (element && name) setStyle(element, name, current);
		motionValue.setWithVelocity(this.sample(sampleTime - delta * Math.sign(speed)), current, delta / Math.abs(speed || 1));
	}
};
// node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
var isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes) {
	const current = keyframes[0];
	if (keyframes.length === 1) return true;
	for (let i = 0; i < keyframes.length; i++) if (keyframes[i] !== current) return true;
}
function canAnimate(keyframes, name, type, velocity) {
	/**
	* Check if we're able to animate between the start and end keyframes,
	* and throw a warning if we're attempting to animate between one that's
	* animatable and another that isn't.
	*/
	const originKeyframe = keyframes[0];
	if (originKeyframe === null) return false;
	/**
	* These aren't traditionally animatable but we do support them.
	* In future we could look into making this more generic or replacing
	* this function with mix() === mixImmediate
	*/
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes[keyframes.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	if (!isOriginAnimatable || !isTargetAnimatable) return false;
	return hasKeyframesChanged(keyframes) || (type === "spring" || isGenerator(type)) && velocity;
}
// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
	options.duration = 0;
	options.type = "keyframes";
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
/**
* A list of values that can be hardware-accelerated.
*
* Colors aren't included: WAAPI mixes them in sRGB, but JS animations
* (and the sampler that estimates a WAAPI value on interrupt) mix them
* in linear color space, so interrupting one would visibly jump.
*/
var acceleratedValues = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
// node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
	for (let i = 0; i < keyframes.length; i++) if (typeof keyframes[i] === "string" && browserColorFunctions.test(keyframes[i])) return true;
	return false;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/needs-mixer.mjs
/**
* Whether an animation needs its mixer, which WAAPI can't call. Numbers
* blend as usual, and an animation whose mixer declines every pair runs
* as it would without one.
*/
var needsMixer = ({ mixer, keyframes }) => mixer && typeof keyframes[0] !== "number" && keyframes.some((keyframe, i) => i && mixer(keyframes[i - 1], keyframe));
// node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]);
/**
* WAAPI runs on the browser's clock, so on a manual clock every animation
* runs in JS where processFrame can drive it. Set the flag before starting
* animations: running WAAPI animations stay on the browser's clock.
*/
var supportsWaapi = () => !MotionGlobalConfig.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function supportsBrowserAnimation(options) {
	const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes } = options;
	/**
	* Most values can't be accelerated at all, so check the name before
	* looking at the element or its props.
	*/
	if (!name || !(acceleratedValues.has(name) || colorProperties.has(name))) return false;
	const subject = motionValue?.owner?.current;
	/**
	* We use instanceof checks instead of isHTMLElement()/isSVGElement()
	* because we explicitly **don't** want elements in different timing
	* contexts (i.e. popups) to be accelerated, as it's not possible to sync
	* these animations properly with those driven from the main window
	* frameloop.
	*/
	if (!(subject instanceof HTMLElement) && !(subject instanceof SVGElement)) return false;
	const { onUpdate, transformTemplate } = motionValue.owner.getProps();
	return supportsWaapi() && (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes)) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia" && !needsMixer(options);
}
// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
var getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
// node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
transformPropOrder.length;
/**
* Cache of `translateX(`-style openers so each transform function is a few
* string concatenations rather than a template.
*/
var openers = {};
/**
* A transform function, e.g. `translateX(10px)` for `x: 10`.
*/
var transformFunction = (key, value, valueAsType = getValueAsType(value, transformValueTypes[key])) => (openers[key] || (openers[key] = (translateAlias[key] || key) + "(")) + valueAsType + ")";
/**
* Whether a transform value is at its default, so can be left out.
*/
var isDefaultTransform = (key, value) => (typeof value === "number" ? value : parseFloat(value)) === (key.startsWith("scale") ? 1 : 0);
// node_modules/motion-dom/dist/es/animation/waapi/transforms/groups.mjs
var transformGroups = /* @__PURE__ */ new WeakMap();
// node_modules/motion-dom/dist/es/animation/waapi/transforms/TransformAnimation.mjs
/**
* Sample at the interruption sampling rate, up to a cap for long
* animations.
*/
var maxSamples = 200;
/**
* How far values may stray from the WAAPI animation: as a fraction of
* each value's change when they share an easing, otherwise in px or deg,
* or for scale.
*/
var easingTolerance = .001;
var sampleTolerance = .1;
var scaleTolerance = .001;
/**
* If an outside write, or a seek the WAAPI animation can't follow,
* happens again within this window, the group is being driven every
* frame (scrubbing, drag), which is cheaper on the main thread than
* rebuilding the WAAPI animation every frame.
*/
var churnWindow = 100;
/**
* A WAAPI animation that starts moving later than this, as most segments
* of a long sequence do, is built this long before it starts, rather than
* all at once at the start.
*/
var buildAhead = 100;
/**
* Named easings that are the same cubic-bezier in JS and CSS.
*/
var nativeEasings = /* @__PURE__ */ new Set([
	"linear",
	"easeIn",
	"easeOut",
	"easeInOut"
]);
var isNativeEasing = (ease) => nativeEasings.has(ease);
/**
* The last trace of each easing WAAPI can't run into linear(), with its
* number of samples, so the elements of a sequence that share an easing
* and duration trace it once.
*/
var traced = /* @__PURE__ */ new WeakMap();
var trace = (ease, samples) => {
	let last = traced.get(ease);
	if (last?.[0] !== samples) {
		last = [samples, "linear(" + defaultOffset(Array(samples + 1)).map((p) => round(ease(p)) + " " + round(p * 100) + "%") + ")"];
		traced.set(ease, last);
	}
	return last[1];
};
/**
* How many samples trace an easing between two timestamps.
*/
var countSamples = (from, to) => Math.min(maxSamples, Math.max(2, Math.ceil((to - from) / 10)));
/**
* Whether two eased progresses match. False if either is NaN.
*/
var isNear = (a, b) => Math.abs(a - b) <= easingTolerance;
var byTime = (a, b) => a - b;
/**
* n + 1 evenly spaced timestamps, from one timestamp to another.
*/
var spread = (from, to, n) => defaultOffset(Array(n + 1)).map((p) => mixNumber$1(from, to, p));
var getOwner = (options) => options.motionValue.owner;
var getGroup = (element) => transformGroups.get(element);
/**
* Whether an animation has ended, so can leave its group.
*/
var hasEnded = ({ state }) => state === "idle" || state === "finished";
var read = (owner, key) => owner.latestValues ? owner.latestValues[key] : owner.getValue(key)?.get();
/**
* Whether this animation should join its element's transform group.
* Animations that can't be accelerated still join, so the group knows
* to stay on the main thread while they run. Browsers without linear()
* easing stay on the main thread.
*/
var canGroupTransform = ({ name, motionValue }) => name && transformPropOrder.includes(name) && motionValue?.owner?.current instanceof HTMLElement && supportsWaapi() && supportsLinearEasing();
function canAccelerateTransform(options) {
	const owner = getOwner(options);
	const { onUpdate, transformTemplate } = owner.getProps();
	return !options.isHandoff && !onUpdate && !options.hasOnUpdate && !transformTemplate && options.type !== "inertia" && (read(owner, "transform") || "none") === "none" && !read(owner, "pathRotation") && !owner.projection?.isProjecting() && !needsMixer(options);
}
/**
* Starting or stopping tells the group to update its WAAPI animation.
* The frame loop driver is only made once the group is on the main
* thread, as accelerated animations never tick.
*/
var TransformDriver = class {
	constructor(element, update, makeDriver, animation) {
		this.element = element;
		this.update = update;
		this.makeDriver = makeDriver;
		this.animation = animation;
	}
	get js() {
		return this.driver || (this.driver = this.makeDriver(this.update));
	}
	now() {
		return this.driver || this.makeDriver !== frameloopDriver ? this.js.now() : frameData.isProcessing ? frameData.timestamp : time.now();
	}
	/**
	* keepAlive is false when seeking. Seeking the WAAPI animation is
	* free, but if a seek needs a rebuild and keeps happening, the group
	* moves to the main thread.
	*/
	start(keepAlive = true) {
		const group = getGroup(this.element);
		!group || group.isJS ? this.js.start(keepAlive) : group.schedule(false, !keepAlive);
	}
	stopJS() {
		this.driver?.stop();
	}
	stop() {
		this.stopJS();
		const group = getGroup(this.element);
		group && !group.isFinishing && group.release(this.animation);
	}
};
/**
* JSAnimation's time setter, looked up on first use rather than at module
* load, so the module has no top-level side effects and stays
* tree-shakeable in flattened bundles.
*/
var setTime;
var TransformAnimation = class extends JSAnimation {
	constructor(options) {
		const element = getOwner(options).current;
		const { driver = frameloopDriver } = options;
		let animation;
		/**
		* Before JSAnimation replaces the type with its generator.
		*/
		const canAccelerate = canAccelerateTransform(options);
		/**
		* The driver ticks on the main thread only once the group has
		* moved there, so its frame loop driver is made then.
		*/
		options.driver = (update) => new TransformDriver(element, update, driver, animation);
		super(options);
		animation = this;
		/**
		* The first driver is made in super(), before this was assigned.
		*/
		const firstDriver = this.driver;
		firstDriver && (firstDriver.animation = this);
		this.canAccelerate = canAccelerate;
		/**
		* stop is bound in JSAnimation, so wrap it rather than override.
		* Before stopping, set the motion value to where the WAAPI
		* animation is now, with velocity, for the next animation to
		* start from.
		*/
		const { stop } = this;
		this.stop = () => {
			this.isAccelerated() && this.sync();
			stop();
		};
	}
	/**
	* Each keyframe's offset, made once for the keyframes rather than on
	* every build.
	*/
	offsets() {
		const { keyframes, times } = this.options;
		if (times) return times;
		if (this.offsetsOf !== keyframes) {
			this.offsetsOf = keyframes;
			this.cachedOffsets = defaultOffset(keyframes);
		}
		return this.cachedOffsets;
	}
	get group() {
		return getGroup(getOwner(this.options).current);
	}
	get js() {
		return this.driver?.js;
	}
	stopJS() {
		this.driver?.stopJS();
	}
	get name() {
		return this.options.name;
	}
	/**
	* When this stops moving, or, if it repeats forever, when it starts
	* repeating, and how long each repeat takes. Held (paused, or at
	* speed 0) animations never stop moving.
	*/
	timing() {
		const { startTime, speed, totalDuration } = this;
		const { delay = 0, repeatType } = this.options;
		return this.holdTime !== null ? [Infinity, 0] : totalDuration === Infinity ? [startTime + delay / speed, this.resolvedDuration * (repeatType === "loop" ? 1 : 2) / speed || 1] : [startTime + (delay + totalDuration) / speed, 0];
	}
	/**
	* Whether this is running, or paused, on the compositor.
	*/
	isAccelerated() {
		const { group, state } = this;
		return group?.tracks.has(this) && !group.isJS && this.canAccelerate && (state === "running" || state === "paused");
	}
	/**
	* The value now, while this runs on the compositor and so doesn't
	* set its motion value every frame.
	*/
	liveValue() {
		return this.isAccelerated() ? this.sampleAt(time.now()) : void 0;
	}
	/**
	* If this moves between two keyframes only, holding still either side
	* of them, as each value of a sequence segment does, when it starts
	* and stops moving, and its easing: as a string if WAAPI runs it
	* exactly, otherwise its function, to trace.
	*/
	tween() {
		const { keyframes: keyframes$1, type, repeat, delay = 0 } = this.options;
		let span = -1;
		if (repeat || type !== keyframes || this.holdTime !== null) return;
		for (let i = 1; i < keyframes$1.length; i++) if (keyframes$1[i] !== keyframes$1[i - 1]) {
			if (span >= 0) return;
			span = i - 1;
		}
		let { ease } = this.options;
		if (/* @__PURE__ */ isEasingArray(ease)) ease = ease[span];
		const offsets = this.offsets();
		const at = (i) => this.startTime + (delay + offsets[i] * this.totalDuration) / this.speed;
		if (span >= 0) {
			const easing = /* @__PURE__ */ isBezierDefinition(ease) ? cubicBezierAsString(ease) : isNativeEasing(ease) ? supportedWaapiEasing[ease] : easingDefinitionToFunction(ease);
			/**
			* An easing that doesn't run from 0 to 1 doesn't move between
			* the keyframes, so is traced from the values it gives instead.
			*/
			return [
				at(span),
				at(span + 1),
				typeof easing === "string" || isNear(easing(0), 0) && isNear(easing(1), 1) ? easing : void 0
			];
		}
	}
	/**
	* The timestamps between two timestamps where this reaches a
	* keyframe or starts a repeat, where it can turn or jump.
	*/
	boundaries(from, to) {
		const { startTime, speed, resolvedDuration, options } = this;
		const { delay = 0, repeat = 0, repeatDelay = 0, repeatType, type } = options;
		const offsets = (type || keyframes) === keyframes ? this.offsets() : [0, 1];
		const start = startTime + delay / speed;
		const result = [];
		if (this.holdTime !== null || !(resolvedDuration > 0)) return result;
		for (let i = Math.max(0, Math.floor((from - start) * speed / resolvedDuration)); i <= repeat; i++) {
			const iterationStart = start + i * resolvedDuration / speed;
			if (iterationStart > to) break;
			for (const offset of offsets) {
				const t = iterationStart + (i % 2 && repeatType && repeatType !== "loop" ? 1 - offset : offset) * (resolvedDuration - repeatDelay) / speed;
				t > from && t < to && result.push(t);
			}
		}
		return result;
	}
	/**
	* The value at a timestamp, as a number.
	*/
	numberAt(timestamp) {
		return parseFloat(this.sampleAt(timestamp, true));
	}
	/**
	* Write the current value, and velocity, to the motion value.
	*/
	sync() {
		const now = time.now();
		const value = this.sampleAt(now, true);
		/**
		* A held value doesn't move, so there's no need to sample it
		* twice.
		*/
		this.options.motionValue.setWithVelocity(this.holdTime === null ? this.sampleAt(now - 10, true) : value, value, 10);
	}
	play() {
		/**
		* A stopped animation (one that was interrupted) can't play again,
		* so it mustn't join the group.
		*/
		if (this.isStopped) return;
		(this.group || createGroup(getOwner(this.options))).tracks.add(this);
		super.play();
	}
	pause() {
		super.pause();
		this.isAccelerated() && this.group.schedule(false);
	}
	/**
	* JSAnimation finishes on its next tick, which only happens once the
	* group is on the main thread, so finish now. That includes an
	* animation that can't be accelerated but reached its end before the
	* group could move there.
	*/
	complete() {
		super.complete();
		const { group } = this;
		group && !group.isJS && this.tick(time.now());
	}
	/**
	* Without a tick to rebase it, a held time still includes the delay,
	* so take it off here, as a JS animation does on its next tick.
	*/
	get time() {
		if (this.isAccelerated()) return /* @__PURE__ */ millisecondsToSeconds(clamp(0, this.totalDuration, this.at(time.now()) - (this.options.delay || 0)));
		return super.time;
	}
	/**
	* Calls JSAnimation's setter directly, as `super.time =` is a slow
	* path in V8 and this runs for every animation of a seeked sequence.
	*/
	set time(newTime) {
		(setTime ?? (setTime = Object.getOwnPropertyDescriptor(JSAnimation.prototype, "time").set)).call(this, newTime);
	}
	/**
	* Scroll timelines set time every frame, so run these on the main
	* thread.
	*/
	attachTimeline(timeline) {
		this.canAccelerate = false;
		this.group?.demote(true);
		return super.attachTimeline(timeline);
	}
};
/**
* Groups that build straight after the current task build in one
* microtask, rather than one each.
*/
var builds;
var buildSoon = (build) => {
	builds || queueMicrotask(() => {
		const queue = builds;
		builds = void 0;
		queue.forEach((build) => build());
	});
	(builds || (builds = [])).push(build);
};
function createGroup(owner) {
	const element = owner.current;
	const tracks = /* @__PURE__ */ new Set();
	const byKey = /* @__PURE__ */ new Map();
	/**
	* Transforms that aren't animating, as built into the WAAPI animation.
	*/
	let statics = {};
	/**
	* The transforms in the WAAPI animation, in order.
	*/
	let keys = [];
	let built = /* @__PURE__ */ new Map();
	let segments = [];
	let needsBuild = false;
	let isScheduled = false;
	let isEnded = false;
	let hasChurned = false;
	let lastChurn = -Infinity;
	let wake;
	let wakeAt = Infinity;
	/**
	* While waiting to build a tween that starts later, how long after
	* the last build to build it.
	*/
	let buildAt;
	const has = (key) => {
		for (const track of tracks) if (track.name === key) return true;
	};
	/**
	* The transform values at a timestamp or, without one, from the
	* motion values. Animations that don't repeat forever are sampled no
	* earlier than settled, so a loop that starts from an earlier cycle
	* boundary holds them at their end.
	*/
	const valuesAt = (timestamp, settled) => {
		const values = {};
		for (const key of timestamp === void 0 ? transformPropOrder : keys) {
			const track = byKey.get(key);
			const value = timestamp === void 0 ? read(owner, key) : track ? track.sampleAt(settled > timestamp && !track.timing()[1] ? settled : timestamp) : statics[key];
			if (value !== void 0) values[key] = value;
		}
		return values;
	};
	/**
	* Build a transform from values in transformPropOrder. For a keyframe,
	* every key is written, even at its default, so each keyframe has the
	* same list of functions and the browser interpolates them one by one.
	* As an inline style, defaults are left out, as buildTransform does.
	*/
	const toTransform = (values, isStyle) => {
		let transform = "";
		for (const key in values) {
			const value = values[key];
			if (!isStyle || !isDefaultTransform(key, value)) transform += transformFunction(key, value) + " ";
		}
		return (isStyle ? transform.trim() : transform) || "none";
	};
	/**
	* Build the transform at a timestamp.
	*/
	const compose = (timestamp, settled) => toTransform(valuesAt(timestamp, settled));
	/**
	* Write the transform as an inline style, as the renderer would.
	*/
	const commit = (values = valuesAt()) => {
		element.style.transform = toTransform(values, true);
	};
	/**
	* Cancel a WAAPI animation and remove its handlers, as WebKit never
	* collects an animation once it has run, nor anything its handlers
	* reference (#4034).
	*/
	const cancel = (animation) => {
		animation.onfinish = animation.oncancel = null;
		animation.cancel();
	};
	/**
	* Cancel the WAAPI animations, by default first committing the
	* transform. The renderer writes its own version on its next render.
	*/
	const stop = (shouldCommit = true) => {
		clearTimeout(wake);
		wakeAt = Infinity;
		buildAt = void 0;
		shouldCommit && commit();
		segments.forEach(({ animation }) => cancel(animation));
		segments = [];
	};
	/**
	* A WAAPI animation that add() starts by setting its startTime. Playing
	* it first, as element.animate() does, would leave WebKit holding that
	* play's ready time once startTime ends the play, and it uses that for
	* the next updatePlaybackRate(), so the animation would jump.
	*/
	const create = (keyframes, options) => new Animation(new KeyframeEffect(element, keyframes, options));
	const add = (animation, offset, end = Infinity) => {
		const segment = {
			animation,
			offset,
			end
		};
		animation.startTime = time.now() + offset;
		/**
		* Animations finish when the WAAPI animation reaches their end.
		* Once a loop has taken over, the finished animation isn't needed.
		*/
		if (end < Infinity) animation.onfinish = () => {
			segment.isDone = true;
			if (segments.some((s) => s.end === Infinity)) {
				cancel(animation);
				segments = segments.filter((s) => s !== segment);
			}
			group.schedule(false);
		};
		/**
		* Something else cancelled it, so carry on on the main thread.
		*/
		animation.oncancel = () => segments.includes(segment) && group.demote();
		segments.push(segment);
	};
	/**
	* Where a value jumps between two timestamps, as when a repeat starts
	* again: the timestamps either side of the jump, or none if it moves
	* there continuously.
	*/
	const jumpAt = (value, a, b) => {
		const change = (x, y) => Math.abs(value(y) - value(x));
		const size = change(a, b);
		while (b - a > .01) {
			const mid = (a + b) / 2;
			change(a, mid) > change(mid, b) ? b = mid : a = mid;
		}
		return change(a, b) > size / 2 ? [a, b] : [];
	};
	/**
	* If every moving animation follows the same eased progress between
	* two timestamps, the easing that describes it.
	*/
	const getEasing = (moving, from, to, bounds) => {
		const samples = countSamples(from, to);
		/**
		* Too many keyframes or repeats to follow with this many samples.
		*/
		if (bounds.length * 4 > samples) return;
		/**
		* First check half way, where values with different easings
		* usually differ, before sampling every value many times.
		*/
		let quick;
		for (const track of moving) {
			const first = track.numberAt(from);
			const p = (track.numberAt((from + to) / 2) - first) / (track.numberAt(to) - first);
			/**
			* NaN if it doesn't move.
			*/
			if (p !== p) continue;
			if (quick === void 0) quick = p;
			else if (!isNear(p, quick)) return;
		}
		const at = spread(from, to, samples).concat(bounds).sort(byTime);
		const position = (t) => /* @__PURE__ */ progress(from, to, t);
		let shared;
		let progressAt;
		for (const track of moving) {
			const first = track.numberAt(from);
			const changes = at.map((t) => track.numberAt(t) - first);
			const end = changes[changes.length - 1];
			/**
			* A value that ends only a tiny way from where it started, as
			* a round trip does if it's built just after it starts, or
			* from a float residue, ends where it started. Dividing by
			* that tiny range would stretch the easing to values the
			* compositor can't render.
			*/
			const range = changes.some((change) => Math.abs(change) * easingTolerance > Math.abs(end)) ? 0 : end;
			const progress = changes.map((change) => range ? change / range : change);
			/**
			* The first value that moves sets the easing, and every other
			* one must follow it. A value that doesn't change, like one
			* still in its delay, fits any easing. One that changes but
			* ends where it started fits none.
			*/
			if (range && !shared) {
				shared = progress;
				progressAt = (t) => (track.numberAt(t) - first) / range;
			} else if (progress.some((p, i) => !isNear(p, range && shared[i]))) return;
		}
		if (!shared || shared.every((p, i) => isNear(p, position(at[i])))) return "linear";
		/**
		* A repeat that starts again jumps back, which takes two points at
		* the same position.
		*/
		const points = [];
		const point = (t, p = progressAt(t)) => points.push(round(p) + " " + round(position(t) * 100) + "%");
		shared.forEach((p, i) => {
			i && Math.abs(p - shared[i - 1]) > .2 && jumpAt(progressAt, at[i - 1], at[i]).forEach((t) => point(t));
			point(at[i], p);
		});
		return "linear(" + points + ")";
	};
	/**
	* Sample timestamps between two timestamps, closer together where the
	* moving animations curve.
	*/
	const sample = (moving, from, to, bounds) => {
		const times = [from];
		/**
		* A linear tween is straight between its keyframes, so only the
		* other values can curve, and a tween only while it moves.
		*/
		const curved = [];
		let curveFrom = to;
		let curveTo = from;
		for (const track of moving) {
			const tween = track.tween();
			if (tween?.[2] !== "linear") {
				const [trackEnd, cycle] = track.timing();
				const [a, b] = tween || [from, cycle ? to : trackEnd];
				curveFrom = Math.min(curveFrom, a);
				curveTo = Math.max(curveTo, b);
				curved.push(track);
			}
		}
		curveFrom = Math.max(from, curveFrom);
		curveTo = Math.min(to, curveTo);
		/**
		* Values that aren't numbers, like calc(), are left to the
		* browser to interpolate.
		*/
		const isStraight = (a, b) => curved.every((track) => !(Math.abs(track.numberAt((a + b) / 2) - (track.numberAt(a) + track.numberAt(b)) / 2) > (track.name.startsWith("scale") ? scaleTolerance : sampleTolerance)));
		const split = (a, b, depth) => {
			if (b - a < 1 || isStraight(a, b)) times.push(b);
			else if (depth < 4) {
				split(a, (a + b) / 2, depth + 1);
				split((a + b) / 2, b, depth + 1);
			} else {
				/**
				* Keyframes either side of a jump, like a repeat starting
				* again, so it doesn't play as a quick sweep.
				*/
				for (const track of moving) times.push(...jumpAt((t) => track.numberAt(t), a, b));
				times.push(b);
			}
		};
		/**
		* Split at least every 100ms where a value can curve, and at every
		* keyframe and repeat, either side of where a value can jump.
		*/
		const ends = curveTo > curveFrom ? spread(curveFrom, curveTo, Math.ceil((curveTo - curveFrom) / 100)) : [];
		ends.push(to);
		for (const t of bounds) ends.push(t, Math.min(t + .01, to));
		let start = from;
		for (const end of ends.sort(byTime)) {
			end > start && split(start, end, 0);
			start = end;
		}
		return times.sort(byTime);
	};
	/**
	* If every moving animation is the same tween, started together, as
	* happens for the values of one animate() call or transition, when
	* they move and their native easing.
	*/
	const getTween = (moving) => {
		let shared;
		for (const track of moving) {
			const tween = track.tween();
			if (!tween || shared && (Math.abs(tween[0] - shared[0]) > 1 || Math.abs(tween[1] - shared[1]) > 1)) return;
			/**
			* Easings that differ, like the springs a sequence makes for
			* each value, can still be the same curve.
			*/
			shared = [
				tween[0],
				tween[1],
				!shared || tween[2] === shared[2] ? tween[2] : void 0
			];
		}
		return shared;
	};
	/**
	* A WAAPI animation of the composed transform between two timestamps.
	*/
	const run = (moving, from, to, nativeEasing, options = { fill: "both" }, settled) => {
		/**
		* With an easing given, there's nothing to sample, so no need
		* for the boundaries.
		*/
		const bounds = nativeEasing ? [] : moving.flatMap((track) => track.boundaries(from, to));
		const easing = nativeEasing || getEasing(moving, from, to, bounds);
		const times = easing ? [from, to] : sample(moving, from, to, bounds);
		const transform = times.map((t) => compose(t, settled));
		let keyframes = { transform };
		if (!easing) keyframes.offset = times.map((t) => /* @__PURE__ */ progress(from, to, t));
		/**
		* If nothing moves, don't hold a transform, which, even at its
		* default, would make the element a containing block. The empty
		* animation still finishes the animations.
		*/
		if (transform.every((t) => t === transform[0])) {
			commit(valuesAt(from, settled));
			keyframes = null;
		}
		return create(keyframes, {
			...options,
			duration: to - from,
			easing: easing || "linear"
		});
	};
	/**
	* Check whether it's time to build in this long. A check that's due
	* sooner is kept, and checks again if it's early, so pausing and
	* playing don't each replace a timer. One due later, after a seek or
	* speed change while held, is replaced.
	*/
	const wakeIn = (delay) => {
		const at = time.now() + delay;
		if (at < wakeAt) {
			clearTimeout(wake);
			wakeAt = at;
			wake = setTimeout(() => {
				wakeAt = Infinity;
				group.schedule(false);
			}, delay);
		}
	};
	/**
	* Replace the WAAPI animations with ones built from now. Returns
	* undefined if the animations can't be composed.
	*/
	const animate = (now) => {
		/**
		* The finite part runs until the last finite animation (or the
		* last delay) ends. Infinitely repeating animations then continue
		* as one looping WAAPI animation, which needs them to share a
		* cycle.
		*/
		let end = now;
		let cycle = 0;
		let cycleStart = 0;
		const moving = [];
		const looping = [];
		const ends = /* @__PURE__ */ new Set();
		byKey.clear();
		built = /* @__PURE__ */ new Map();
		for (const track of tracks) {
			byKey.set(track.name, track);
			const [trackEnd, trackCycle] = track.timing();
			const isHeld = trackEnd === Infinity;
			built.set(track, [
				track.at(now),
				track.speed,
				isHeld
			]);
			if (isHeld) continue;
			if (track.speed < 0) return;
			if (trackCycle) {
				if (cycle) {
					const phase = (trackEnd - cycleStart) / trackCycle;
					if (Math.abs(trackCycle - cycle) > 1 || Math.abs(phase - Math.round(phase)) * cycle > 1) return;
				} else {
					cycle = trackCycle;
					cycleStart = trackEnd;
				}
				looping.push(track);
			} else ends.add(trackEnd);
			moving.push(track);
			end = Math.max(end, trackEnd);
		}
		statics = {};
		/**
		* Transforms that aren't animating are left out at their default.
		*/
		keys = transformPropOrder.filter((key) => {
			if (byKey.has(key)) return true;
			const value = statics[key] = read(owner, key);
			return value !== void 0 && !isDefaultTransform(key, value);
		});
		stop(false);
		/**
		* Values that share one tween are one WAAPI animation of it, with
		* two keyframes and its own easing, from when they started.
		*/
		const tween = !cycle && getTween(moving);
		try {
			if (end > now) {
				let easing;
				if (tween && tween[1] > now) {
					const [from, to, ease] = tween;
					/**
					* Until it's built, the motion values hold where it
					* starts, for the renderer to write.
					*/
					if (from - now > buildAhead) {
						moving.forEach((track) => track.sync());
						wakeIn(buildAt = from - now - buildAhead);
						return true;
					}
					easing = typeof ease === "string" ? ease : ease ? trace(ease, countSamples(from, to)) : getEasing(moving, from, to, []);
					/**
					* It holds its last keyframe until the animations end.
					*/
					easing && add(run(moving, from, to, easing, {
						fill: "both",
						endDelay: end - to
					}), from - now, end - from);
				}
				easing || add(run(moving, now, end), 0, end - now);
				/**
				* Animations that end sooner finish on the events of
				* empty animations that end with them.
				*/
				ends.forEach((trackEnd) => trackEnd < end - 1 && add(create(null, { duration: trackEnd - now }), 0, trackEnd - now));
			}
			if (cycle) {
				/**
				* Build one cycle from a cycle boundary, so it repeats
				* seamlessly, and start it part way through.
				*/
				const from = cycleStart + Math.floor((end - cycleStart) / cycle) * cycle;
				add(run(looping, from, from + cycle, void 0, {
					iterations: Infinity,
					iterationStart: (end - from) / cycle,
					/**
					* It must not fill backwards over the finite part
					* that runs before it.
					*/
					fill: "forwards"
				}, end), end - now);
			}
		} catch {
			return;
		}
		/**
		* Everything is held, so hold it with an inline style instead.
		*/
		segments.length || stop();
		return true;
	};
	/**
	* If every animation has been paused, played, seeked or sped up
	* together since the WAAPI animation was built, do the same to it.
	* Returns false if it needs rebuilding instead. Seeking to before a
	* tween starts rebuilds, so a running group seeked every frame still
	* moves to the main thread.
	*/
	const retime = (now, isSeek) => {
		let elapsed;
		let rate = 0;
		for (const track of tracks) {
			const state = built.get(track);
			if (!state) return false;
			const [builtTime, builtSpeed, wasHeld] = state;
			const trackTime = track.at(now);
			const isHeld = track.timing()[0] === Infinity;
			/**
			* With nothing on the compositor, a held animation is set
			* where it's held, so it can be seeked as often as needed.
			*/
			if (wasHeld) {
				if (isHeld && (trackTime === builtTime || !segments.length)) continue;
				return false;
			}
			const trackElapsed = (trackTime - builtTime) / builtSpeed;
			const trackRate = isHeld ? 0 : track.speed / builtSpeed;
			if (elapsed === void 0) {
				elapsed = trackElapsed;
				rate = trackRate;
			} else if (Math.abs(trackElapsed - elapsed) > 1 || trackRate !== rate) return false;
		}
		if (elapsed === void 0) return true;
		/**
		* Waiting to build a tween that starts later. Until then the
		* values hold where they start, so only when to build changes.
		* Held, it has nothing on the compositor, so it can be seeked.
		*/
		if (!segments.length) {
			if (buildAt === void 0 || isSeek && rate) return false;
			if (rate) {
				const delay = (buildAt - elapsed) / rate;
				if (delay < 1) return false;
				wakeIn(delay);
			}
			return true;
		}
		/**
		* Only a tween is built to start later, and it holds its first
		* keyframe until then, so it can be paused and played before it
		* starts.
		*/
		for (const { offset, end, isDone } of segments) {
			const local = elapsed - offset;
			if (end < Infinity && (isDone ? local < end - 1 : local < 0 && (isSeek || offset <= 0) || local >= end)) return false;
		}
		for (const { animation, offset, isDone } of segments) {
			if (isDone) continue;
			const local = elapsed - offset;
			if (rate && animation.updatePlaybackRate && animation.playState === "running" && Math.abs(Number(animation.currentTime) - local) < 20)
 /**
			* Only the speed changed. Setting playbackRate and
			* startTime restarts a running compositor animation, which
			* can render the underlying value for a frame.
			*/
			animation.playbackRate !== rate && animation.updatePlaybackRate(rate);
			else if (rate) {
				animation.playbackRate !== rate && (animation.playbackRate = rate);
				animation.startTime = now - local / rate;
			} else {
				/**
				* Hold it without pause(), whose pending pause setting
				* currentTime would end at once, leaving WebKit holding its
				* ready time (see create()).
				*/
				animation.startTime = null;
				animation.currentTime = local;
			}
		}
		return true;
	};
	/**
	* If no animations are left, write where they got to and cancel the
	* WAAPI animations. Returns whether the group ended.
	*/
	const end = () => {
		if (tracks.size) return false;
		isEnded = true;
		/**
		* The element may have a newer group if this one was detached
		* (see handOffElementState).
		*/
		getGroup(element) === group && transformGroups.delete(element);
		group.isJS || stop();
		return true;
	};
	const build = () => {
		const now = time.now();
		/**
		* Finish the animations that have reached their end, which the
		* WAAPI animation has already rendered.
		*/
		if (!group.isJS) {
			group.isFinishing = true;
			tracks.forEach((track) => {
				const [trackEnd, trackCycle] = track.timing();
				if (track.state === "running" && track.speed > 0 && !trackCycle && trackEnd <= now + 1) {
					track.complete();
					/**
					* From now it's checked for outside writes like any
					* other static transform. If the WAAPI animation never
					* rendered it (it was instant), rebuild with its value.
					*/
					statics[track.name] = read(owner, track.name);
					built.has(track) || (needsBuild = true);
				}
			});
			group.isFinishing = false;
		}
		isScheduled = false;
		if (isEnded) return;
		tracks.forEach((track) => hasEnded(track) && tracks.delete(track));
		if (end()) return;
		for (const track of tracks) if (!track.canAccelerate) return group.demote(true);
		/**
		* Everything that kept the group on the main thread has finished,
		* so move the remaining animations back to the compositor.
		*/
		if (group.isJS) {
			group.isJS = false;
			needsBuild = true;
			tracks.forEach((track) => track.stopJS());
		}
		const shouldBuild = needsBuild;
		const churned = hasChurned;
		needsBuild = hasChurned = false;
		if (shouldBuild || !retime(now, churned)) {
			if (churned) {
				if (now - lastChurn < churnWindow) return group.demote();
				lastChurn = now;
			}
			if (!animate(now)) return group.demote();
		} else if (buildAt !== void 0 && !churned)
 /**
		* Still waiting to build, so the values still hold where
		* they start.
		*/
		return;
		/**
		* Held animations don't move, so set their motion values to where
		* they're held, as a JSAnimation would on its next tick. Pausing
		* and seeking schedule this, so it's once however many there are.
		*/
		tracks.forEach((track) => track.timing()[0] === Infinity && track.sync());
	};
	const group = {
		tracks,
		isJS: false,
		isFinishing: false,
		schedule(build_, isChurn) {
			if (isEnded) return;
			needsBuild || (needsBuild = build_);
			hasChurned || (hasChurned = !!isChurn);
			/**
			* Build in this frame's render step, so it's in place before
			* anything reads the DOM in postRender, or straight after the
			* current task outside of a frame.
			*/
			if (!isScheduled) {
				isScheduled = true;
				frameData.isProcessing ? frame.render(build, false, true) : buildSoon(build);
			}
		},
		/**
		* End the group now, rather than when it next builds, so the
		* element's transform is the caller's again as soon as its last
		* animation is stopped.
		*/
		release(track) {
			/**
			* Only drop the stopped animation. Others can be idle because
			* they're part way through play(), and are about to run.
			*/
			hasEnded(track) && tracks.delete(track);
			end() || group.schedule(true);
		},
		/**
		* An outside write. Rebuild once, but if it keeps happening, move
		* to the main thread.
		*/
		check() {
			if (group.isJS) return;
			for (const key in statics) if (read(owner, key) !== statics[key] && !has(key)) return group.schedule(true, true);
		},
		demote(canReturn) {
			if (group.isJS || isEnded) return;
			/**
			* Unless only another animation is holding the group on the
			* main thread, these animations stay there until they end.
			*/
			tracks.forEach((track) => {
				track.isAccelerated() && track.sync();
				canReturn || (track.canAccelerate = false);
			});
			group.isJS = true;
			built = /* @__PURE__ */ new Map();
			stop();
			tracks.forEach((track) => track.state === "running" && track.js?.start());
			return true;
		}
	};
	transformGroups.set(element, group);
	return group;
}
// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor(options) {
		super();
		/**
		* Bound to support return animation.stop pattern
		*/
		this.stop = () => {
			if (this._animation) {
				this._animation.stop();
				this.stopTimeline?.();
			}
			this.keyframeResolver?.cancel();
		};
		this.createdAt = time.now();
		const { keyframes, name, motionValue, element } = options;
		/**
		* animateMotionValue builds a fresh options object per value, so
		* it's completed in place as keyframes resolve rather than copied.
		*/
		const optionsWithDefaults = options;
		optionsWithDefaults.autoplay ?? (optionsWithDefaults.autoplay = true);
		optionsWithDefaults.delay ?? (optionsWithDefaults.delay = 0);
		optionsWithDefaults.type ?? (optionsWithDefaults.type = "keyframes");
		optionsWithDefaults.repeat ?? (optionsWithDefaults.repeat = 0);
		optionsWithDefaults.repeatDelay ?? (optionsWithDefaults.repeatDelay = 0);
		optionsWithDefaults.repeatType ?? (optionsWithDefaults.repeatType = "loop");
		const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
		this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay, isHandoff, onUpdate } = options;
		this.resolvedAt = time.now();
		/**
		* If we can't animate this value with the resolved keyframes
		* then we should complete it immediately.
		*/
		const canAnimateValue = canAnimate(keyframes, name, type, velocity);
		if (!canAnimateValue) {
			if (MotionGlobalConfig.instantAnimations || !delay) onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
			keyframes[0] = keyframes[keyframes.length - 1];
			makeAnimationInstant(options);
			options.repeat = 0;
		}
		const { onComplete } = options;
		options.finalKeyframe = finalKeyframe;
		options.keyframes = keyframes;
		/**
		* JSAnimation and NativeAnimation call onComplete exactly when
		* their own `finished` resolves, so this replaces a promise chain
		* per value with a callback.
		*/
		options.onComplete = () => {
			onComplete?.();
			this.notifyFinished();
		};
		/**
		* Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
		* WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
		* optimised animation.
		*
		* Also skip WAAPI when keyframes aren't animatable, as the resolved
		* values may not be valid CSS and would trigger browser warnings.
		*/
		const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(options);
		/**
		* Independent transforms (x, scale etc) on an HTML element are
		* composed into one WAAPI transform animation per element.
		*/
		const isGroupedTransform = !useWaapi && canGroupTransform(options);
		/**
		* Resolve startTime for the animation. A startTime passed in options
		* (an optimised appear handoff syncing to its WAAPI animation) takes
		* precedence.
		*
		* *Ideally*, we would use the createdAt time as t=0 as the following
		* frame would then be the first frame of the animation in progress,
		* which would feel snappier. If keyframes resolved on a later frame,
		* and long after creation, we start from then instead.
		*
		* If they resolved immediately, a JSAnimation picks its own start
		* time and resolves it the same way on its first frame, so every
		* animation started in that moment stays in sync. WAAPI has no frame
		* of ours to do that on.
		*/
		if (sync && (useWaapi || isGroupedTransform || this.resolvedAt !== this.createdAt)) options.startTime ?? (options.startTime = resolveStartTime(this.createdAt, this.resolvedAt));
		let animation;
		if (useWaapi) {
			/**
			* The resolver needed the VisualElement, WAAPI needs the DOM
			* element. JSAnimation reads neither, so this is safe to
			* leave in place if we fall back to it.
			*/
			options.element = options.motionValue?.owner?.current;
			try {
				animation = new NativeAnimationExtended(options);
			} catch {
				animation = new JSAnimation(options);
			}
		} else if (isGroupedTransform) animation = new TransformAnimation(options);
		else animation = new JSAnimation(options);
		if (this.pendingTimeline) {
			this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
			this.pendingTimeline = void 0;
		}
		this._animation = animation;
	}
	get finished() {
		return this._animation ? this._animation.finished : super.finished;
	}
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
	/**
	* The value now, if the animation runs on the compositor.
	*/
	liveValue() {
		return this._animation?.liveValue?.();
	}
	get animation() {
		if (!this._animation) {
			this.keyframeResolver?.resume();
			flushKeyframeResolvers();
		}
		return this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(newTime) {
		this.animation.time = newTime;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(newSpeed) {
		this.animation.speed = newSpeed;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(timeline) {
		if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
		else this.pendingTimeline = timeline;
		return () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation?.cancel();
		this.keyframeResolver?.cancel();
	}
};
// node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs
var GroupAnimation = class {
	constructor(animations) {
		this.stop = () => {
			for (const animation of this.animations) animation.stop();
		};
		this.animations = animations.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((animation) => animation.finished));
	}
	/**
	* TODO: Filter out cancelled or stopped animations before returning
	*/
	getAll(propName) {
		return this.animations[0][propName];
	}
	attachTimeline(timeline) {
		const subscriptions = this.animations.map((animation) => animation.attachTimeline(timeline));
		return () => {
			subscriptions.forEach((cancel, i) => {
				cancel && cancel();
				this.animations[i].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	/**
	* Setters and methods name the property directly, rather than through
	* a shared helper, so each call site stays monomorphic. Sequences
	* call these on every animation, many times a second.
	*/
	set time(time) {
		for (const animation of this.animations) animation.time = time;
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(speed) {
		for (const animation of this.animations) animation.speed = speed;
	}
	get state() {
		return this.getAll("state");
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		return getMax(this.animations, "duration");
	}
	get iterationDuration() {
		return getMax(this.animations, "iterationDuration");
	}
	play() {
		for (const animation of this.animations) animation.play();
	}
	pause() {
		for (const animation of this.animations) animation.pause();
	}
	cancel() {
		for (const animation of this.animations) animation.cancel();
	}
	complete() {
		for (const animation of this.animations) animation.complete();
	}
};
function getMax(animations, propName) {
	let max = 0;
	for (let i = 0; i < animations.length; i++) {
		const value = animations[i][propName];
		if (value !== null && value > max) max = value;
	}
	return max;
}
// node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var GroupAnimationWithThen = class extends GroupAnimation {
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
};
// node_modules/motion-dom/dist/es/value/index.mjs
/**
* Maximum time between the value of two frames, beyond which we
* assume the velocity has since been 0.
*/
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
var collectMotionValues = { current: void 0 };
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options = {}) {
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = null;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
			/**
			* If we're updating the value during another frame or eventloop
			* than the previous frame, then the we set the previous frame value
			* to current.
			*/
			if (this.updatedAt !== currentTime) this.setPrevFrameValue();
			this.prev = this.current;
			this.setCurrent(v);
			if (this.current !== this.prev) {
				this.dirty();
				if (this.dependents) for (const dependent of this.dependents) dependent.dirty();
			}
		};
		this.hasAnimated = false;
		this.setCurrent(init);
		this.owner = options.owner;
	}
	setCurrent(current) {
		this.current = current;
		this.updatedAt = time.now();
		if (this.canTrackVelocity === null && current !== void 0) this.canTrackVelocity = isFloat(this.current);
	}
	setPrevFrameValue(prevFrameValue = this.current) {
		this.prevFrameValue = prevFrameValue;
		this.prevUpdatedAt = this.updatedAt;
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.on("change", updateOpacity)
	*     const unsubscribeY = y.on("change", updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <motion.div style={{ x }} />
	* }
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @deprecated
	*/
	onChange(subscription) {
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		var _a;
		if (eventName === "change") return this.onChangeSubscribe(callback);
		return ((_a = this.events)[eventName] || (_a[eventName] = new SubscriptionManager())).add(callback);
	}
	onChangeSubscribe(callback) {
		const { events } = this;
		if (!events.change && !this.changeSubscriber) this.changeSubscriber = callback;
		else {
			if (!events.change) {
				events.change = new SubscriptionManager();
				events.change.add(this.changeSubscriber);
				this.changeSubscriber = void 0;
			}
			events.change.add(callback);
		}
		return () => {
			if (this.changeSubscriber === callback) this.changeSubscriber = void 0;
			else events.change?.remove(callback);
			this.stopIfUnobserved();
		};
	}
	/**
	* If we have no more change listeners by the start
	* of the next frame, stop active animations.
	*/
	stopIfUnobserved() {
		frame.read(() => {
			if (!this.changeSubscriber && !this.events.change?.getSize()) this.stop();
		});
	}
	clearListeners() {
		this.changeSubscriber = void 0;
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	/**
	* Attaches a passive effect to the `MotionValue`.
	*/
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	set(v) {
		this.passiveEffect ? this.passiveEffect(v, this.updateAndNotify) : this.updateAndNotify(v);
	}
	setWithVelocity(prev, current, delta) {
		this.set(current);
		this.prev = void 0;
		this.prevFrameValue = prev;
		this.prevUpdatedAt = this.updatedAt - delta;
	}
	/**
	* Set the state of the `MotionValue`, stopping any active animations,
	* effects, and resets velocity to `0`.
	*/
	jump(v, endAnimation = true) {
		if (endAnimation) {
			/**
			* Stop first, as stopping a running animation can set the
			* value it's showing, which would replace v. Marking the value
			* as updated now skips a JS animation's catch-up tick on stop,
			* which could otherwise complete it.
			*/
			this.updatedAt = time.now();
			this.stop();
		}
		this.updateAndNotify(v);
		this.prev = v;
		this.prevUpdatedAt = this.prevFrameValue = void 0;
		this.stopPassiveEffect?.();
	}
	dirty() {
		const { current, changeSubscriber } = this;
		/**
		* One or the other exists. Subscribing during the direct
		* subscriber's call moves it into a new manager, which must not
		* then be notified for the same change.
		*/
		if (changeSubscriber) changeSubscriber(current);
		else this.events.change?.notify(current);
	}
	addDependent(dependent) {
		(this.dependents || (this.dependents = /* @__PURE__ */ new Set())).add(dependent);
	}
	removeDependent(dependent) {
		this.dependents?.delete(dependent);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	get() {
		collectMotionValues.current?.push(this);
		/**
		* A value animating on the compositor isn't updated every frame,
		* so read it from its animation.
		*/
		const sampled = this.animation?.liveValue?.();
		return sampled === void 0 ? this.current : sampled;
	}
	/**
	* The value as last set. Unlike get(), this doesn't read an animation
	* running on the compositor, which renders the value itself.
	*/
	getCurrent() {
		return this.current;
	}
	/**
	* @public
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	getVelocity() {
		const currentTime = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return /* @__PURE__ */ velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*/
	start(startAnimation) {
		return new Promise((resolve) => this.run(startAnimation, resolve));
	}
	/**
	* As start(), without making a promise, for animations started
	* internally, which complete through their own controls.
	*/
	run(startAnimation, onComplete) {
		this.stop();
		this.hasAnimated = true;
		/**
		* Guard against animations that complete before startAnimation
		* has returned.
		*/
		let isComplete = false;
		let animation;
		animation = startAnimation(() => {
			isComplete = true;
			this.events.animationComplete?.notify();
			if (this.animation === animation) this.animation = void 0;
			onComplete?.();
		});
		if (!isComplete) this.animation = animation;
		this.events.animationStart?.notify();
	}
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	stop() {
		if (this.animation) {
			this.animation.stop();
			this.events.animationCancel?.notify();
		}
		this.animation = void 0;
	}
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	isAnimating() {
		return !!this.animation;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	destroy() {
		this.dependents?.clear();
		this.events.destroy?.notify();
		this.clearListeners();
		this.stop();
		this.stopPassiveEffect?.();
	}
};
function motionValue(init, options) {
	return new MotionValue(init, options);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
/**
* If `transition` has `inherit: true`, shallow-merge it with
* `parentTransition` (child keys win) and strip the `inherit` key.
* Otherwise return `transition` unchanged.
*/
function resolveTransition(transition, parentTransition) {
	if (transition?.inherit && parentTransition) {
		const { inherit: _, ...rest } = transition;
		return {
			...parentTransition,
			...rest
		};
	}
	return transition;
}
// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition$1(transition, key) {
	const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
	if (valueTransition !== transition) return resolveTransition(valueTransition, transition);
	return valueTransition;
}
// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
var keyframesTransition = {
	type: "keyframes",
	duration: .8
};
/**
* Default easing curve is a slightly shallower version of
* the default browser easing curve.
*/
var ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
var getDefaultTransition = (valueKey, { keyframes }) => {
	if (keyframes.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
	return ease;
};
// node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed",
	"out",
	"mixer"
]);
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(transition) {
	for (const key in transition) if (!orchestrationKeys.has(key)) return true;
	return false;
}
// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition$1(transition, name) || {};
	/**
	* Most transition values are currently completely overwritten by value-specific
	* transitions. In the future it'd be nicer to blend these transitions. But for now
	* delay actually does inherit from the root transition if not value-specific.
	*/
	const delay = valueTransition.delay || transition.delay || 0;
	/**
	* Elapsed isn't a public transition option but can be passed through from
	* optimized appear effects in milliseconds.
	*/
	let { elapsed = 0 } = transition;
	elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay);
	const options = {
		keyframes: Array.isArray(target) ? target : [null, target],
		ease: "easeOut",
		velocity: value.getVelocity(),
		...valueTransition,
		delay: -elapsed,
		onUpdate: (v) => {
			value.set(v);
			valueTransition.onUpdate && valueTransition.onUpdate(v);
		},
		onComplete: () => {
			onComplete();
			valueTransition.onComplete && valueTransition.onComplete();
		},
		name,
		motionValue: value,
		element: isHandoff ? void 0 : element,
		hasOnUpdate: !!valueTransition.onUpdate
	};
	/**
	* If there's no transition defined for this value, we can generate
	* unique transition settings for this value.
	*/
	if (!isTransitionDefined(valueTransition)) Object.assign(options, getDefaultTransition(name, options));
	/**
	* Both WAAPI and our internal animation functions use durations
	* as defined by milliseconds, while our external API defines them
	* as seconds.
	*/
	options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
	options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
	/**
	* Support deprecated way to set initial value. Prefer keyframe syntax.
	*/
	if (options.from !== void 0) options.keyframes[0] = options.from;
	let shouldSkip = false;
	if (options.type === false || options.duration === 0 && !options.repeatDelay) {
		makeAnimationInstant(options);
		if (options.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options);
		options.delay = 0;
	}
	/**
	* If the transition type or easing has been explicitly set by the user
	* then we don't want to allow flattening the animation.
	*/
	options.allowFlatten = !valueTransition.type && !valueTransition.ease;
	/**
	* If we can or must skip creating the animation, and apply only
	* the final keyframe, do so. We also check once keyframes are resolved but
	* this early check prevents the need to create an animation at all.
	*/
	if (shouldSkip && !isHandoff && value.get() !== void 0) {
		const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
		if (finalKeyframe !== void 0) {
			frame.update(() => {
				options.onUpdate(finalKeyframe);
				options.onComplete();
			});
			return;
		}
	}
	return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};
// node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
function getVariableValue(current, element, depth = 1) {
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);
// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);
// node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
* ValueType for "auto"
*/
var auto = {
	test: (v) => v === "auto",
	parse: (v) => v
};
// node_modules/motion-dom/dist/es/value/types/test.mjs
/**
* Tests a provided value against a ValueType
*/
var testValueType = (v) => (type) => type.test(v);
// node_modules/motion-dom/dist/es/value/types/dimensions.mjs
/**
* A list of value types commonly used for dimensions
*/
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
/**
* If we encounter keyframes like "none" or "0" and we also have keyframes like
* "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
* the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
* zero equivalents, i.e. "#fff0" or "0px 0px".
*/
var invalidTemplates = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
	let i = 0;
	let animatableTemplate = void 0;
	while (i < unresolvedKeyframes.length && !animatableTemplate) {
		const keyframe = unresolvedKeyframes[i];
		if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && hasComplexValues(keyframe)) animatableTemplate = unresolvedKeyframes[i];
		i++;
	}
	if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes) {
		/**
		* A zero-valued template like "0%" is already its own
		* animatable none, so there's nothing to derive.
		*/
		if (unresolvedKeyframes[noneIndex] === animatableTemplate) continue;
		unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
	}
}
// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
	/**
	* Passes isAsync to the base constructor rather than setting it as a
	* class field, which would compile to a constructor that spreads
	* `arguments` into super(). That spread is slow in the interpreter,
	* and animate() constructs one resolver per value.
	*/
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
		super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
	}
	/**
	* Keyframes that don't need reading from the DOM, or measuring,
	* resolve straight away rather than in the frame loop's batched read.
	*/
	scheduleResolve() {
		if (this.canReadNow()) {
			this.readKeyframes();
			if (!this.needsMeasurement) return this.complete();
		}
		super.scheduleResolve();
	}
	canReadNow() {
		const { unresolvedKeyframes, element, motionValue } = this;
		const origin = unresolvedKeyframes[0] ?? motionValue?.get();
		if (!element?.current || origin === void 0) return false;
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (containsCSSVariable(i ? unresolvedKeyframes[i] : origin)) return false;
		return true;
	}
	readKeyframes() {
		const { unresolvedKeyframes, element, name } = this;
		if (!element?.current) return;
		super.readKeyframes();
		/**
		* If any keyframe is a CSS variable, we need to find its value by sampling the element
		*/
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		/**
		* Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
		* This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
		* have a far bigger performance impact.
		*/
		this.resolveNoneKeyframes();
		/**
		* Check to see if unit type has changed. If so schedule jobs that will
		* temporarily set styles to the destination keyframes.
		* Skip if we have more than two keyframes or this isn't a positional value.
		* TODO: We can throw if there are multiple keyframes and the value type changes.
		*/
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		if (typeof origin === "number" && typeof target === "number") return;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		if (containsCSSVariable(origin) !== containsCSSVariable(target) && positionalValues[name]) {
			this.needsMeasurement = true;
			return;
		}
		/**
		* Either we don't recognise these value types or we can animate between them.
		*/
		if (originType === targetType) return;
		/**
		* If both values are numbers or pixels, we can animate between them by
		* converting them to numbers.
		*/
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name])
 /**
		* Else, the only way to resolve this is by measuring the element.
		*/
		this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measure() {
		const { element, name } = this;
		return positionalValues[name](window.getComputedStyle(element.current), () => element.measureViewportBox());
	}
	measureInitialState() {
		const { element, unresolvedKeyframes, name } = this;
		if (!element?.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = this.measure();
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) this.motionValue?.jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element, unresolvedKeyframes } = this;
		if (!element?.current) return;
		this.motionValue?.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = this.measure();
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		this.resolveNoneKeyframes();
	}
};
// node_modules/motion-dom/dist/es/animation/animate/effects.mjs
/**
* Effects registered via `animate.addEffect()`, most recent first.
*/
var effects = [];
function addEffect(effect) {
	removeEffect(effect);
	effects.unshift(effect);
}
function removeEffect(effect) {
	removeItem(effects, effect);
}
function findEffect(subject) {
	return effects.find((effect) => effect.test(subject));
}
/**
* Animate each key in `keyframes` on the motion value `getValue` returns
* for it. `element` is what the keyframe resolver uses to read, render
* and measure the subject when the effect defers resolution to it.
*/
function animateValues(getValue, keyframes, transition = {}, element) {
	const animations = [];
	const { velocity, path } = transition;
	const reduceMotion = transition.reduceMotion ?? element?.shouldReduceMotion;
	/**
	* Only elements have x/y to move along a path. path claims them by
	* deleting them, so hand it a copy.
	*/
	if (path?.animateValues && element) {
		keyframes = { ...keyframes };
		path.animateValues(getValue, keyframes, transition, 0, animations);
	}
	for (const key in keyframes) {
		if (key === "transition" || key === "transitionEnd") continue;
		const target = keyframes[key];
		if (target === void 0) continue;
		const value = getValue(key);
		/**
		* If the value is already at the defined target, skip the animation.
		* We still re-assert the value via frame.update to take precedence
		* over any stale transitionEnd callbacks from previous animations.
		*/
		const current = value.get();
		if (current !== void 0 && !value.isAnimating() && !Array.isArray(target) && target === current && !velocity) {
			frame.update(() => value.set(target));
			continue;
		}
		value.run(animateMotionValue(key, value, target, reduceMotion && positionalKeys.has(key) ? { type: false } : transition, element));
		value.animation && animations.push(value.animation);
	}
	const { transitionEnd } = keyframes;
	if (transitionEnd) {
		const applyTransitionEnd = () => frame.update(() => {
			for (const key in transitionEnd) getValue(key).set(transitionEnd[key]);
		});
		animations.length ? Promise.all(animations).then(applyTransitionEnd) : applyTransitionEnd();
	}
	return animations;
}
/**
* Animate the keys of `subject` via `effect`. Motion values are created on
* first animation and bound to the subject through the effect for the
* rest of its life.
*
* Without `element`, a new value is seeded synchronously from the first
* keyframe or `effect.read()`. With it, the value starts undefined and the
* keyframe resolver reads the subject (batched, with unit conversion by
* measurement) via `element`.
*/
function animateEffectSubject(effect, subject, keyframes, transition, element) {
	/**
	* Values made for this call are bound with one effect call, after the
	* loop, rather than one each.
	*/
	let created;
	let isBound = false;
	const animations = animateValues((key) => {
		let value = created?.[key] ?? effect.get(subject, key);
		if (!value) {
			let initial;
			if (!element) {
				const target = keyframes[key];
				initial = firstKeyframe(target) ?? effect.read(subject, key, target);
			}
			value = motionValue(initial, { owner: element });
			isBound ? effect(subject, { [key]: value }) : (created || (created = {}))[key] = value;
		}
		return value;
	}, keyframes, transition, element);
	isBound = true;
	created && effect(subject, created);
	return animations;
}
function firstKeyframe(target) {
	const first = Array.isArray(target) ? target[0] : void 0;
	return first === null ? void 0 : first;
}
// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
/**
* Checks if an element is an HTML element in a way
* that works across iframes
*/
function isHTMLElement(element) {
	return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
/**
* Checks if an element is an SVG element in a way
* that works across iframes
*/
function isSVGElement(element) {
	return isObject(element) && "ownerSVGElement" in element;
}
// node_modules/motion-dom/dist/es/scope/active.mjs
var activeScope = {};
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector == null) return [];
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		const root = scope ? scope.current : activeScope.current?.root || document;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector).filter((element) => element != null);
}
// node_modules/motion-dom/dist/es/effects/MotionValueState.mjs
var MotionValueState = class {
	/**
	* @param step - The frameloop step renders are scheduled in. Defaults
	* to `frame.render`. Effects that feed a render loop running in
	* `frame.render` (GPU scenes) should write in `frame.preRender`.
	*/
	constructor(step = frame.render) {
		this.step = step;
		this.values = /* @__PURE__ */ new Map();
		/**
		* Renders scheduled for the next flush, usually one or two (values
		* bound to the same computed render, e.g. `x` and `y` to `transform`,
		* share an entry). Tracked with a count rather than truncating the
		* array so no backing store is reallocated every frame. Kept per
		* state so pending writes can be flushed synchronously before the
		* subject is measured.
		*/
		this.pending = [];
		this.numPending = 0;
		/**
		* Run the pending renders. Resetting the count first means a render
		* scheduled while flushing lands in the next frame, as with the
		* frameloop itself.
		*/
		this.flush = () => {
			const { pending, numPending } = this;
			this.numPending = 0;
			for (let i = 0; i < numPending; i++) pending[i]();
		};
	}
	/**
	* @param render - Writes the value to the subject. Renders read the
	* motion value directly rather than a cached copy, so there is one
	* place a value lives.
	* @param computed - A value already in this state (e.g. `transform`)
	* whose render should run whenever `value` changes.
	*/
	set(name, value, render, computed) {
		this.values.get(name)?.onRemove();
		if (computed) {
			for (const entry of this.values.values()) if (entry.value === computed) render = entry.render;
		}
		const onChange = () => render && this.schedule(render);
		/**
		* Values created ahead of a DOM read start out undefined and
		* have nothing to render until they're set.
		*/
		value.get() !== void 0 && onChange();
		const cancelOnChange = value.on("change", onChange);
		const onRemove = () => {
			cancelOnChange();
			render && !computed && this.cancel(render);
			/**
			* A later set() of the same name has already removed this
			* entry, so leave the one that replaced it.
			*/
			this.values.get(name)?.onRemove === onRemove && this.values.delete(name);
		};
		this.values.set(name, {
			value,
			render: computed ? void 0 : render,
			onRemove
		});
		return onRemove;
	}
	get(name) {
		return this.values.get(name)?.value;
	}
	/**
	* Detach every value from this state and return them, so another
	* renderer can take them over. The state stays cached by its effect,
	* so the bound transforms are reset too rather than leaking into
	* values bound later.
	*/
	release() {
		const values = /* @__PURE__ */ new Map();
		this.values.forEach((entry, name) => {
			values.set(name, entry.value);
			entry.onRemove();
		});
		this.transformKeys = this.transformValues = void 0;
		return values;
	}
	schedule(render) {
		const { pending, numPending } = this;
		for (let i = 0; i < numPending; i++) if (pending[i] === render) return;
		numPending || this.step(this.flush);
		pending[this.numPending++] = render;
	}
	cancel(render) {
		const { pending } = this;
		for (let i = 0; i < this.numPending; i++) if (pending[i] === render) {
			pending[i] = pending[--this.numPending];
			return;
		}
	}
};
// node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs
function createEffect(addValue, { step, ...options } = {}) {
	const stateCache = /* @__PURE__ */ new WeakMap();
	const effect = (subject, values) => {
		const state = stateCache.get(subject) ?? new MotionValueState(step);
		stateCache.set(subject, state);
		const subscriptions = [];
		for (const key in values) {
			const value = values[key];
			const remove = addValue(subject, state, key, value);
			subscriptions.push(remove);
		}
		return () => {
			for (const cancel of subscriptions) cancel();
		};
	};
	return Object.assign(effect, options, {
		get: (subject, key) => stateCache.get(subject)?.get(key),
		flush: (subject) => stateCache.get(subject)?.flush(),
		state: (subject) => stateCache.get(subject)
	});
}
// node_modules/motion-dom/dist/es/effects/style/transform.mjs
function buildTransform(state) {
	let transform = "";
	const { transformKeys: keys = [], transformValues: values = {} } = state;
	/**
	* Loop over the bound transforms in order, adding the ones that
	* aren't at their default value to the transform string.
	*/
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = values[key].getCurrent();
		if (value === void 0) continue;
		if (!isDefaultTransform(key, value)) transform += (transform && " ") + transformFunction(key, value);
	}
	const pathRotation = state.get("pathRotation")?.get();
	if (pathRotation) transform += (transform && " ") + transformFunction("rotate", pathRotation);
	return transform || "none";
}
// node_modules/motion-dom/dist/es/effects/style/index.mjs
var originProps = /* @__PURE__ */ new Set([
	"originX",
	"originY",
	"originZ"
]);
/**
* A bound value in its default unit, e.g. `originX: 50` -> `"50%"`.
*/
var styleValue = (state, key) => getValueAsType(state.get(key)?.get(), numberValueTypes[key]);
var addStyleValue = (element, state, key, value) => {
	let render = void 0;
	let computed = void 0;
	if (transformProps.has(key)) {
		if (key !== "pathRotation") {
			const keys = state.transformKeys ?? (state.transformKeys = []);
			(state.transformValues ?? (state.transformValues = {}))[key] = value;
			if (!keys.includes(key)) {
				keys.push(key);
				keys.sort((a, b) => transformPropOrder.indexOf(a) - transformPropOrder.indexOf(b));
			}
		}
		if (!state.get("transform")) {
			if (!isHTMLElement(element) && !state.get("transformBox")) addStyleValue(element, state, "transformBox", new MotionValue("fill-box"));
			state.set("transform", new MotionValue("none"), () => {
				transformGroups.get(element)?.check();
				element.style.transform = buildTransform(state);
			});
		}
		computed = state.get("transform");
	} else if (originProps.has(key)) {
		if (!state.get("transformOrigin")) state.set("transformOrigin", new MotionValue(""), () => {
			const originX = styleValue(state, "originX") ?? "50%";
			const originY = styleValue(state, "originY") ?? "50%";
			const originZ = styleValue(state, "originZ") ?? 0;
			element.style.transformOrigin = `${originX} ${originY} ${originZ}`;
		});
		computed = state.get("transformOrigin");
	} else if (isCSSVar(key)) render = () => {
		element.style.setProperty(key, value.getCurrent());
	};
	else render = () => {
		element.style[key] = getValueAsType(value.getCurrent(), numberValueTypes[key]);
	};
	return state.set(key, value, render, computed);
};
var isStyleSubject = (subject) => isHTMLElement(subject) || isSVGElement(subject);
/**
* Reads the current value of a style from the element, as the initial
* keyframe when `animate()` targets an element via this effect. Transforms
* are parsed out of the computed matrix; everything else is the computed
* style. Units aren't converted to match the target keyframes. A style
* the browser can't report is 0, as a VisualElement reports it.
*/
var readStyleValue = (element, key) => {
	if (transformProps.has(key)) return readTransformValue(element, key);
	const computedStyle = getComputedStyle(element);
	const value = isCSSVar(key) ? computedStyle.getPropertyValue(key) : computedStyle[key];
	return typeof value === "string" && value.trim() || 0;
};
/**
* The per-element effect `animate()` binds through, so HTML values share
* state with a direct `styleEffect()` call. The exported `styleEffect`
* is this wrapped to also accept selectors.
*/
var styleSubjectEffect = /*@__PURE__*/ createEffect(addStyleValue, {
	test: isStyleSubject,
	read: readStyleValue
});
// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
/**
* Values rendered via style rather than as attributes. This must include
* every value WAAPI can accelerate, as WAAPI writes its final value to
* style, which would otherwise override later attribute writes.
*/
var cssStyleProperties = [
	"transform",
	"opacity",
	"clipPath",
	"filter",
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
// node_modules/motion-dom/dist/es/effects/attr/index.mjs
function canSetAsProperty(element, name) {
	if (!(name in element)) return false;
	const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), name) || Object.getOwnPropertyDescriptor(element, name);
	return descriptor && typeof descriptor.set === "function";
}
/**
* `name` is the attribute written when it differs from the key the value
* is stored under, e.g. `attrX` -> `x`. Numbers take the attribute's
* default unit (`x: 100` -> `"100px"`), as they do when key and name match.
*/
var addAttrValue = (element, state, key, value, name = key) => {
	const isProp = canSetAsProperty(element, name);
	if (!isProp && (name.startsWith("data") || name.startsWith("aria"))) name = camelToDash(name);
	const type = numberValueTypes[key] || numberValueTypes[name];
	/**
	* Set attribute directly via property if available
	*/
	const render = isProp ? () => {
		element[name] = getValueAsType(value.get(), numberValueTypes[key]);
	} : () => {
		const v = getValueAsType(value.get(), type);
		if (v === null || v === void 0) element.removeAttribute(name);
		else element.setAttribute(name, String(v));
	};
	return state.set(key, value, render);
};
// node_modules/motion-dom/dist/es/effects/svg/index.mjs
function addSVGPathValue(element, state, key, value) {
	frame.render(() => element.setAttribute("pathLength", "1"));
	if (key === "pathOffset") return state.set(key, value, () => {
		const offset = value.get();
		element.setAttribute("stroke-dashoffset", `${-offset}`);
	});
	else {
		if (!state.get("stroke-dasharray")) state.set("stroke-dasharray", new MotionValue("1 1"), () => {
			const pathLength = state.get("pathLength")?.get() ?? 1;
			const pathSpacing = state.get("pathSpacing")?.get();
			element.setAttribute("stroke-dasharray", `${pathLength} ${pathSpacing ?? 1 - Number(pathLength)}`);
		});
		return state.set(key, value, void 0, state.get("stroke-dasharray"));
	}
}
var addSVGValue = (element, state, key, value) => {
	if (key.startsWith("path") && !transformProps.has(key)) return addSVGPathValue(element, state, key, value);
	else if (key.startsWith("attr")) return addAttrValue(element, state, key, value, convertAttrKey(key));
	else if (key === "d")
 /**
	* `d` is a CSS property in Chrome and Firefox, but only as
	* `path(...)`, so path data goes to the attribute, taken out of
	* `path(...)` if it's written that way. Path data itself has no
	* quotes or brackets.
	*/
	return state.set(key, value, () => {
		const d = value.get()?.replace(/path\(|["')]/g, "");
		d === void 0 ? element.removeAttribute(key) : element.setAttribute(key, d);
	});
	return (transformProps.has(key) || originProps.has(key) || isCSSVar(key) || key in element.style ? addStyleValue : addAttrValue)(element, state, key, value);
};
/**
* Reads the current value of `key` from an SVG element as the origin of
* an animation, as the SVG VisualElement does: transforms start from
* their defaults, CSS variables and the few CSS-only properties come from
* computed style, falling back to the attribute when that's empty (e.g.
* the element isn't rendered), and everything else is read from the
* attribute, dash-cased (`strokeWidth` -> `stroke-width`) or, failing
* that, as written (`baseFrequency`).
*/
var readSVGValue = (element, key) => {
	if (transformProps.has(key)) return numberValueTypes[key]?.default || 0;
	if (isCSSVar(key) || cssStyleProperties.includes(key)) return readStyleValue(element, key) || element.getAttribute(camelToDash(key)) || 0;
	key = convertAttrKey(key);
	return element.getAttribute(camelToDash(key)) ?? element.getAttribute(key) ?? void 0;
};
/**
* The per-element effect `animate()` binds through, so SVG values share
* state with a direct `svgEffect()` call.
*/
var svgSubjectEffect = /*@__PURE__*/ createEffect(addSVGValue, {
	test: isSVGElement,
	read: readSVGValue
});
function convertAttrKey(key) {
	return key.replace(/^attr([A-Z])/, (_, firstChar) => firstChar.toLowerCase());
}
// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToBox({ top, left, right, bottom }) {
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoxPoints(point, transformPoint) {
	if (!transformPoint) return point;
	const topLeft = transformPoint({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
// node_modules/motion-dom/dist/es/animation/animate/element.mjs
var noProps = {};
var getElementEffect = (element) => isSVGElement(element) ? svgSubjectEffect : styleSubjectEffect;
/**
* Presents an effect bound to a DOM element in the shape the DOM keyframe
* resolver and WAAPI expect, which is that of a VisualElement. Holds no
* state: everything delegates to the effect. Goes once the resolver takes
* an effect and subject directly.
*/
var EffectSubject = class {
	constructor(effect, current) {
		this.effect = effect;
		this.current = current;
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	getValue(key) {
		return this.effect.get(this.current, key);
	}
	readValue(key, target) {
		return this.effect.read(this.current, key, target);
	}
	render() {
		this.effect.flush(this.current);
	}
	measureViewportBox() {
		return measureViewportBox(this.current);
	}
	getProps() {
		return noProps;
	}
};
/**
* Animate a DOM element's styles. HTML elements are bound through
* styleEffect, SVG through svgEffect, and both are resolved with the DOM
* keyframe resolver so reads are batched, units are converted by
* measurement and eligible values run on WAAPI.
*
* Pass the element's VisualElement (a <motion.*> component or an
* animateLayout() node) to animate its values instead, so the two keep
* sharing values and a renderer.
*/
function animateElement(element, keyframes, transition, visualElement) {
	activeScope.current?.track(element);
	if (visualElement) return animateValues((key) => visualElement.getValue(key, null), keyframes, transition, visualElement);
	const effect = getElementEffect(element);
	return animateEffectSubject(effect, element, keyframes, transition, new EffectSubject(effect, element));
}
// node_modules/motion-dom/dist/es/effects/prop/index.mjs
/**
* Writes motion values to the properties of any object. This is
* animate()'s fallback for subjects no registered effect claims.
*/
var propEffect = /*@__PURE__*/ createEffect((subject, state, key, value) => {
	return state.set(key, value, () => {
		subject[key] = value.get();
	});
}, {
	test: (subject) => isObject(subject),
	read: (subject, key) => {
		const value = subject[key];
		return typeof value === "string" || typeof value === "number" ? value : void 0;
	}
});
// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.run(animateMotionValue("", motionValue$1, keyframes, options));
	return motionValue$1.animation;
}
// node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();
// node_modules/motion-dom/dist/es/utils/stagger.mjs
function stagger(duration = .1, { startDelay = 0, from = 0, ease, grid } = {}) {
	/**
	* Distances from the origin for each element count. The final entry
	* holds the distance used to normalise easing.
	*/
	const cache = {};
	return (i, total) => {
		let distances = cache[total];
		if (!distances) {
			const [columns, rows] = grid || [Infinity, 1];
			const lastX = Math.min(columns, total) - 1;
			const lastY = Math.max(rows, Math.ceil(total / columns)) - 1;
			const isIndex = typeof from === "number";
			const scale = from === "first" ? 0 : from === "last" ? 1 : .5;
			const originX = isIndex ? from % columns : lastX * scale;
			const originY = isIndex ? Math.floor(from / columns) : lastY * scale;
			distances = cache[total] = [];
			for (let j = 0; j < total; j++) {
				const x = j % columns;
				const y = Math.floor(j / columns);
				const edgeX = Math.min(x, lastX - x);
				const edgeY = Math.min(y, lastY - y);
				if (from === "random") {
					const k = Math.random() * (j + 1) | 0;
					distances[j] = distances[k];
					distances[k] = j;
				} else distances[j] = from === "edges" ? Math.min(lastX ? edgeX : edgeY, lastY ? edgeY : edgeX) : Math.hypot(x - originX, y - originY);
			}
			distances.push(grid ? Math.max(...distances) : total);
		}
		let delay = duration * distances[i];
		const maxDelay = duration * distances[total];
		if (ease && maxDelay) delay = easingDefinitionToFunction(ease)(delay / maxDelay) * maxDelay;
		return startDelay + delay;
	};
}
// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes) {
	return typeof keyframes === "object" && !Array.isArray(keyframes);
}
// node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function resolveSubjects(subject, keyframes, scope, selectorCache) {
	if (subject == null) return [];
	if (typeof subject === "string" && isDOMKeyframes(keyframes)) return resolveElements(subject, scope, selectorCache);
	else if (subject instanceof NodeList) return Array.from(subject);
	else if (Array.isArray(subject)) return subject.filter((s) => s != null);
	else return [subject];
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function calculateRepeatDuration(duration, repeat, repeatDelay) {
	return duration * (repeat + 1) + repeatDelay * repeat;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
/**
* The time of a label, or a label with an offset like "label+1" or
* "label-0.5". An exact label name wins over an offset.
*/
function calcLabelTime(position, labels) {
	if (labels.has(position)) return labels.get(position);
	const [, name, offset] = position.match(/^(.+?)([+-][\d.]+)$/) || [];
	return labels.has(name) ? Math.max(0, labels.get(name) + parseFloat(offset)) : void 0;
}
/**
* Given a absolute or relative time definition and current/prev time state of the sequence,
* calculate an absolute time for the next keyframes.
*/
function calcNextTime(current, next, prev, labels) {
	if (typeof next === "number") return next;
	else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
	else if (next === "<") return prev;
	else if (next.startsWith("<")) return Math.max(0, prev + parseFloat(next.slice(1)));
	else return calcLabelTime(next, labels) ?? current;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
	for (let i = 0; i < sequence.length; i++) {
		const keyframe = sequence[i];
		if (keyframe.at > startTime && keyframe.at < endTime) {
			removeItem(sequence, keyframe);
			i--;
		}
	}
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
	/**
	* Erase every existing value between currentTime and targetTime,
	* this will essentially splice this timeline into any currently
	* defined ones.
	*/
	eraseKeyframes(sequence, startTime, endTime);
	for (let i = 0; i < keyframes.length; i++) sequence.push({
		value: keyframes[i],
		at: mixNumber$1(startTime, endTime, offset[i]),
		easing: /* @__PURE__ */ getEasingForSegment(easing, i)
	});
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
/**
* Take an array of times that represent repeated keyframes. For instance
* if we have original times of [0, 0.5, 1] then our repeated times will
* be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
* down to a 0-1 scale.
*
* `repeatDelayUnits` is the repeatDelay expressed in units of a single
* iteration's duration, so the total span equals `(repeat + 1) + repeat * repeatDelayUnits`.
*/
function normalizeTimes(times, repeat, repeatDelayUnits = 0) {
	const totalUnits = repeat + 1 + repeat * repeatDelayUnits;
	for (let i = 0; i < times.length; i++) times[i] = times[i] / totalUnits;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
	if (a.at === b.at) {
		if (a.value === null) return 1;
		if (b.value === null) return -1;
		return 0;
	} else return a.at - b.at;
}
// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
var MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators, info) {
	const defaultDuration = defaultTransition.duration || .3;
	const animationDefinitions = /* @__PURE__ */ new Map();
	const sequences = /* @__PURE__ */ new Map();
	const elementCache = {};
	const timeLabels = /* @__PURE__ */ new Map();
	let prevTime = 0;
	let currentTime = 0;
	let totalDuration = 0;
	/**
	* Build the timeline by mapping over the sequence array and converting
	* the definitions into keyframes and offsets with absolute time values.
	* These will later get converted into relative offsets in a second pass.
	*
	* Nested sequences are resolved recursively. `base` is the absolute
	* start of the sequence being resolved, so numeric `at` values inside
	* a nested sequence are relative to where it starts. Returns the time
	* the sequence ends.
	*/
	const resolveSequence = (sequence, base) => {
		let sequenceEnd = base;
		const resolveTime = (at) => typeof at === "number" ? base + at : calcNextTime(currentTime, at, prevTime, timeLabels);
		for (let i = 0; i < sequence.length; i++) {
			const segment = sequence[i];
			/**
			* If this is a timeline label, mark it and skip the rest of this iteration.
			*/
			if (typeof segment === "string") {
				timeLabels.set(segment, currentTime);
				continue;
			} else if (!Array.isArray(segment)) {
				const start = segment.at === void 0 ? currentTime : resolveTime(segment.at);
				if ("sequence" in segment) {
					/**
					* Resolve the nested sequence from its start. Afterwards
					* "<" points at its start and the next segment follows
					* its end, as if it were a single segment.
					*/
					prevTime = currentTime = start;
					currentTime = resolveSequence(segment.sequence, start);
					prevTime = start;
					sequenceEnd = Math.max(sequenceEnd, currentTime);
				} else timeLabels.set(segment.name, start);
				continue;
			}
			let [subject, keyframes, transition = {}] = segment;
			/**
			* If a relative or absolute time value has been specified we need to resolve
			* it in relation to the currentTime.
			*/
			if (transition.at !== void 0) currentTime = resolveTime(transition.at);
			/**
			* Keep track of the maximum duration in this definition. This will be
			* applied to currentTime once the definition has been parsed.
			*/
			let maxDuration = 0;
			const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
				const valueKeyframesAsList = keyframesAsList(valueKeyframes);
				const { delay = 0, times = defaultOffset(valueKeyframesAsList), type = defaultTransition.type || "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
				let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
				/**
				* The value animates as one, so it takes the first mixer
				* given for it, or else the default transition's.
				*/
				valueSequence.mixer || (valueSequence.mixer = valueTransition.mixer);
				/**
				* Resolve stagger() if defined.
				*/
				const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
				/**
				* If this animation should and can use a spring, generate a spring easing function.
				*/
				const numKeyframes = valueKeyframesAsList.length;
				const createGenerator = isGenerator(type) ? type : generators?.[type || "keyframes"];
				if (numKeyframes <= 2 && createGenerator) {
					/**
					* As we're creating an easing function from a spring,
					* ideally we want to generate it using the real distance
					* between the two keyframes. However this isn't always
					* possible - in these situations we use 0-100.
					*/
					let absoluteDelta = 100;
					if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
						const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
						absoluteDelta = Math.abs(delta);
					}
					const springTransition = {
						...defaultTransition,
						...remainingTransition
					};
					if (duration !== void 0) springTransition.duration = /* @__PURE__ */ secondsToMilliseconds(duration);
					const springEasing = createGeneratorEasing(springTransition, absoluteDelta, createGenerator);
					ease = springEasing.ease;
					duration = springEasing.duration;
				}
				duration ?? (duration = defaultDuration);
				const startTime = currentTime + calculatedDelay;
				/**
				* If there's only one time offset of 0, fill in a second with length 1
				*/
				if (times.length === 1 && times[0] === 0) times[1] = 1;
				/**
				* Fill out if offset if fewer offsets than keyframes
				*/
				const remainder = times.length - valueKeyframesAsList.length;
				remainder > 0 && fillOffset(times, remainder);
				/**
				* If only one value has been set, ie [1], push a null to the start of
				* the keyframe array. This will let us mark a keyframe at this point
				* that will later be hydrated with the previous value.
				*/
				valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
				/**
				* Segments can't express `repeat: Infinity` or very large
				* counts — they'd leave dead time after the segment or
				* explode the keyframe array. Ignore with a warning.
				*/
				if (repeat) {}
				if (repeat && repeat < MAX_REPEAT) {
					/**
					* Express repeatDelay in units of a single iteration's duration
					* so it can be added to the per-iteration time offsets below
					* before they're normalized to 0-1.
					*/
					const repeatDelayUnits = duration > 0 ? repeatDelay / duration : 0;
					duration = calculateRepeatDuration(duration, repeat, repeatDelay);
					const originalKeyframes = [...valueKeyframesAsList];
					const originalTimes = [...times];
					ease = Array.isArray(ease) ? [...ease] : [ease];
					const originalEase = [...ease];
					/**
					* For reverse/mirror, alternate iterations play the segment
					* backwards. mirror matches JSAnimation's mirroredGenerator:
					* reversed keyframes, easings unchanged. reverse matches
					* JSAnimation's iterationProgress = 1 - p: reversed
					* keyframes, easing array reversed AND each function easing
					* mapped through reverseEasing (string easings unchanged —
					* they're resolved later by the keyframes engine).
					*/
					const isFlipping = repeatType === "reverse" || repeatType === "mirror";
					let flippedKeyframes = originalKeyframes;
					let flippedEases = originalEase;
					if (isFlipping) {
						flippedKeyframes = [...originalKeyframes].reverse();
						if (repeatType === "reverse") flippedEases = [...originalEase].reverse().map((e) => typeof e === "function" ? /* @__PURE__ */ reverseEasing(e) : e);
					}
					for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
						const isFlipped = isFlipping && repeatIndex % 2 === 0;
						const iterKeyframes = isFlipped ? flippedKeyframes : originalKeyframes;
						const iterEase = isFlipped ? flippedEases : originalEase;
						const iterStartOffset = (repeatIndex + 1) * (1 + repeatDelayUnits);
						/**
						* If repeatDelay is set, hold the previous iteration's
						* final value through the delay by inserting a keyframe
						* at the moment the next iteration begins.
						*/
						if (repeatDelayUnits > 0) {
							valueKeyframesAsList.push(valueKeyframesAsList[valueKeyframesAsList.length - 1]);
							times.push(iterStartOffset);
							ease.push("linear");
						}
						valueKeyframesAsList.push(...iterKeyframes);
						for (let keyframeIndex = 0; keyframeIndex < iterKeyframes.length; keyframeIndex++) {
							times.push(originalTimes[keyframeIndex] + iterStartOffset);
							ease.push(keyframeIndex === 0 ? "linear" : /* @__PURE__ */ getEasingForSegment(iterEase, keyframeIndex - 1));
						}
					}
					normalizeTimes(times, repeat, repeatDelayUnits);
				}
				const targetTime = startTime + duration;
				/**
				* Add keyframes, mapping offsets to absolute time.
				*/
				addKeyframes(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
				maxDuration = Math.max(calculatedDelay + duration, maxDuration);
				totalDuration = Math.max(targetTime, totalDuration);
			};
			if (isMotionValue(subject)) {
				const subjectSequence = getSubjectSequence(subject, sequences);
				resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
			} else {
				const subjects = resolveSubjects(subject, keyframes, scope, elementCache);
				const numSubjects = subjects.length;
				/**
				* For every element in this segment, process the defined values.
				*/
				for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
					/**
					* Cast necessary, but we know these are of this type
					*/
					keyframes = keyframes;
					transition = transition;
					const thisSubject = subjects[subjectIndex];
					const subjectSequence = getSubjectSequence(thisSubject, sequences);
					for (const key in keyframes) resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
				}
			}
			prevTime = currentTime;
			currentTime += maxDuration;
			sequenceEnd = Math.max(sequenceEnd, currentTime);
		}
		return sequenceEnd;
	};
	resolveSequence(sequence, 0);
	if (info) {
		info.duration = totalDuration;
		info.labels = timeLabels;
	}
	/**
	* Exclude `type` from defaultTransition since springs have been
	* converted to duration-based easing functions in resolveValueSequence.
	* Including `type: "spring"` would cause JSAnimation to error when
	* the merged keyframes array has more than 2 keyframes.
	*/
	const { type: _type, ...remainingDefaultTransition } = defaultTransition;
	/**
	* For every element and value combination create a new animation.
	*/
	sequences.forEach((valueSequences, element) => {
		for (const key in valueSequences) {
			const valueSequence = valueSequences[key];
			/**
			* Arrange all the keyframes in ascending time order.
			*/
			valueSequence.sort(compareByTime);
			const keyframes = [];
			const valueOffset = [];
			const valueEasing = [];
			/**
			* For each keyframe, translate absolute times into
			* relative offsets based on the total duration of the timeline.
			*/
			for (let i = 0; i < valueSequence.length; i++) {
				const { at, value, easing } = valueSequence[i];
				keyframes.push(value);
				valueOffset.push(/* @__PURE__ */ progress(0, totalDuration, at));
				valueEasing.push(easing || "easeOut");
			}
			/**
			* If the first keyframe doesn't land on offset: 0
			* provide one by duplicating the initial keyframe. This ensures
			* it snaps to the first keyframe when the animation starts.
			*/
			if (valueOffset[0] !== 0) {
				valueOffset.unshift(0);
				keyframes.unshift(keyframes[0]);
				valueEasing.unshift(defaultSegmentEasing);
			}
			/**
			* If the last keyframe doesn't land on offset: 1
			* provide one with a null wildcard value. This will ensure it
			* stays static until the end of the animation.
			*/
			if (valueOffset[valueOffset.length - 1] !== 1) {
				valueOffset.push(1);
				keyframes.push(null);
			}
			if (!animationDefinitions.has(element)) animationDefinitions.set(element, {
				keyframes: {},
				transition: {}
			});
			const definition = animationDefinitions.get(element);
			definition.keyframes[key] = keyframes;
			definition.transition[key] = {
				...remainingDefaultTransition,
				duration: totalDuration,
				ease: valueEasing,
				times: valueOffset,
				mixer: valueSequence.mixer || defaultTransition.mixer,
				...sequenceTransition
			};
		}
	});
	return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
	!sequences.has(subject) && sequences.set(subject, {});
	return sequences.get(subject);
}
function getValueSequence(name, sequences) {
	if (!sequences[name]) sequences[name] = [];
	return sequences[name];
}
function keyframesAsList(keyframes) {
	return Array.isArray(keyframes) ? keyframes : [keyframes];
}
function getValueTransition(transition, key) {
	return transition && transition[key] ? {
		...transition,
		...transition[key]
	} : { ...transition };
}
var isNumber = (keyframe) => typeof keyframe === "number";
var isNumberKeyframesArray = (keyframes) => keyframes.every(isNumber);
// node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function isSingleValue(subject, keyframes) {
	return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes);
}
/**
* Implementation
*/
function animateSubject(subject, keyframes, options, scope) {
	const animations = [];
	if (isSingleValue(subject, keyframes)) animations.push(animateSingleValue(subject, isDOMKeyframes(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
	else {
		if (subject == null) return animations;
		const subjects = resolveSubjects(subject, keyframes, scope);
		const numSubjects = subjects.length;
		for (let i = 0; i < numSubjects; i++) {
			const thisSubject = subjects[i];
			const transition = { ...options };
			/**
			* Resolve stagger function if provided.
			*/
			if ("delay" in transition && typeof transition.delay === "function") transition.delay = transition.delay(i, numSubjects);
			if (thisSubject instanceof Element)
 /**
			* An element already owned by a VisualElement (a <motion.*>
			* component or animateLayout()) animates its values so they
			* share one renderer. Anything else is driven through
			* styleEffect (or svgEffect) and the DOM keyframe resolver,
			* without creating a VisualElement.
			*/
			animations.push(...animateElement(thisSubject, keyframes, transition, visualElementStore.get(thisSubject)));
			else
 /**
			* Registered effects (animate.addEffect) claim non-DOM
			* subjects before we fall back to writing plain properties.
			*/
			animations.push(...animateEffectSubject(findEffect(thisSubject) ?? propEffect, thisSubject, keyframes, transition));
		}
	}
	return animations;
}
// node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function animateSequence(sequence, options, scope, info) {
	const animations = [];
	const animationDefinitions = createAnimationsFromSequence(sequence.map((segment) => {
		if (Array.isArray(segment) && typeof segment[0] === "function") {
			const callback = segment[0];
			const mv = motionValue(0);
			mv.on("change", callback);
			if (segment.length === 1) return [mv, [0, 1]];
			else if (segment.length === 2) return [
				mv,
				[0, 1],
				segment[1]
			];
			else return [
				mv,
				segment[1],
				segment[2]
			];
		}
		return segment;
	}), options, scope, { spring }, info);
	/**
	* Transitions are made per value, but reduceMotion is read from the
	* top level. animate() resolves it into options, and the default
	* transition covers timelines made directly.
	*/
	const reduceMotion = options?.reduceMotion ?? options?.defaultTransition?.reduceMotion;
	animationDefinitions.forEach(({ keyframes, transition }, subject) => {
		animations.push(...animateSubject(subject, keyframes, {
			...transition,
			reduceMotion
		}));
	});
	return animations;
}
// node_modules/framer-motion/dist/es/animation/timeline/index.mjs
var markerId = 0;
/**
* Split a time across repeats into its repeat and the playhead position in
* the sequence. A time on a repeat boundary is the end of the repeat
* before it, as it is for the clock's value. With `index`, join a position
* in that repeat back into a time. Mirrored and reversed repeats play
* every other repeat backwards.
*/
function inRepeat({ repeat = 0, repeatDelay = 0, repeatType = "loop", delay = 0 }, duration, time, index) {
	const cycle = duration + repeatDelay;
	const isSplit = index === void 0;
	if (isSplit) {
		const t = Math.max(0, time - delay);
		index = cycle && t > 0 ? Math.min(repeat, Math.ceil(t / cycle - 1e-9) - 1) : 0;
		time = Math.min(t - index * cycle, duration);
	}
	if (repeatType !== "loop" && index % 2) time = duration - time;
	return [index, isSplit ? time : delay + index * cycle + time];
}
/**
* Copy a segment with a new `at`, adding a transition if it has none.
*/
function withAt(segment, at) {
	const copy = [...segment];
	const i = typeof copy[0] === "function" ? Math.max(1, copy.length - 1) : 2;
	copy[i] = {
		...copy[i],
		at
	};
	return copy;
}
var label = (name, at) => at === void 0 ? name : {
	name,
	at
};
/**
* Rewind to the start and stop, so every value is back at the value it
* started from and the next build reads those values as its origin.
*/
function rewind(animation) {
	animation.pause();
	animation.time = 0;
	animation.stop();
}
/**
* A sequence that can be changed after it's created. Segments, labels,
* callbacks, pauses and other timelines can be added, moved and removed
* at any point, including while it plays.
*
* Changes are batched and applied once per microtask. Each change
* rebuilds the underlying animations from the timeline's starting
* values, then restores the playhead, speed and play state, so changes
* made while playing take effect without a jump.
*/
var Timeline = class Timeline {
	/**
	* `animations` are already running animations of `items`, as
	* animate() makes them. The timeline plays these until it's first
	* changed, so it costs nothing over the animations themselves until
	* then.
	*/
	constructor(items = [], options = {}, animations) {
		this.options = options;
		this.entries = [];
		/**
		* The repeat the playhead is in, to detect when it starts another.
		*/
		this.repeatIndex = 0;
		this.prevTime = 0;
		this.markers = [];
		this.labels = /* @__PURE__ */ new Map();
		this.totalDuration = 0;
		this.isDirty = false;
		this.isDone = false;
		this.isRebuilding = false;
		this.playbackSpeed = 1;
		/**
		* The scopeMotion() scope this was created in. Rebuilds run in it, so
		* selectors resolve in its root and cancel() restores what they
		* animate.
		*/
		this.motionScope = activeScope.current;
		/**
		* Set when the scope stops, so later changes don't restart it.
		*/
		this.isKilled = false;
		/**
		* True while this plays the animations it was created with, before
		* any change compiles it as a sequence.
		*/
		this.isWrapped = false;
		this.stop = () => {
			this.flush();
			this.group?.stop();
		};
		this.isPaused = options.autoplay === false;
		this.newFinished();
		items.forEach((item) => this.add(item));
		if (animations) {
			this.isDirty = false;
			this.isWrapped = true;
			this.group = new GroupAnimationWithThen(animations);
			this.watch();
		} else {
			/**
			* Build now, like animate(), so selectors resolve while a
			* scope is attached. Later changes are batched.
			*/
			this.invalidate();
			this.flush();
		}
	}
	/**
	* Add a segment, label or timeline. `at` overrides any `at` already
	* on the segment. The item itself is the handle for `move()` and
	* `remove()`.
	*/
	add(item, at) {
		if (item instanceof Timeline) item.adopt(this);
		return this.push({
			item,
			at
		});
	}
	/**
	* Fire a callback when the playhead crosses `at`, in either direction.
	* It receives the direction: 1 forwards, -1 backwards.
	*/
	call(callback, at) {
		return this.push({
			item: callback,
			at,
			marker: {
				name: "_m" + markerId++,
				time: 0,
				callback
			}
		});
	}
	/**
	* Pause when the playhead reaches `at`.
	*/
	addPause(at, callback) {
		return this.push({
			item: callback || {},
			at,
			marker: {
				name: "_m" + markerId++,
				time: 0,
				callback,
				pause: true
			}
		});
	}
	/**
	* Change where an item starts.
	*/
	move(item, at) {
		this.entries.forEach((entry) => {
			if (entry.item === item) entry.at = at;
		});
		return this.invalidate();
	}
	/**
	* Remove a segment, label, callback or timeline.
	*/
	remove(item) {
		if (item instanceof Timeline) item.parent = void 0;
		this.entries = this.entries.filter((entry) => entry.item !== item);
		return this.invalidate();
	}
	clear() {
		this.entries = [];
		return this.invalidate();
	}
	/**
	* The time of a label in seconds, or `undefined` if there's no label
	* with this name.
	*/
	getLabelTime(name) {
		this.flush();
		return this.labels.get(name);
	}
	/**
	* Jump to a time in seconds or a label.
	*/
	seek(position) {
		this.time = this.resolve(position);
		return this;
	}
	/**
	* Play forwards or backwards to a time or label, then pause there.
	*/
	playTo(position) {
		const stopAt = this.resolve(position);
		const duration = this.iterationDuration;
		/**
		* A repeating timeline plays to the position in the repeat it's
		* already in, rather than all the way back to the first.
		*/
		const time = this.time;
		const [index] = inRepeat(this.options, duration, time);
		const target = inRepeat(this.options, duration, stopAt, index)[1];
		const speed = Math.abs(this.speed);
		this.speed = target < time ? -speed : speed;
		this.stopAt = stopAt;
		this.clock || this.invalidate();
		this.play();
		return this;
	}
	reverse() {
		this.speed = -this.speed;
		this.play();
		return this;
	}
	get progress() {
		return this.duration ? this.time / this.duration : 0;
	}
	set progress(progress) {
		this.time = progress * this.duration;
	}
	get time() {
		return this.active()?.time ?? 0;
	}
	set time(time) {
		this.flush();
		this.prevTime = time;
		this.group && (this.group.time = time);
		this.repeatIndex = this.currentRepeat();
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(speed) {
		this.playbackSpeed = speed;
		this.group && (this.group.speed = speed);
	}
	get duration() {
		this.flush();
		return this.isWrapped ? this.group.duration : this.totalDuration;
	}
	get iterationDuration() {
		this.flush();
		return this.isWrapped ? this.group.iterationDuration : this.totalDuration;
	}
	get state() {
		return this.active()?.state ?? "idle";
	}
	get startTime() {
		return this.active()?.startTime ?? null;
	}
	play() {
		this.flush();
		this.isPaused = false;
		this.group?.play();
		/**
		* Watch after playing, so it waits for the restarted animations
		* rather than the ones that already finished.
		*/
		if (this.isDone) {
			this.newFinished();
			this.watch();
		}
	}
	pause() {
		this.flush();
		this.isPaused = true;
		this.group?.pause();
	}
	cancel() {
		this.flush();
		this.group?.cancel();
	}
	complete() {
		this.flush();
		this.group?.complete();
	}
	attachTimeline(timeline) {
		this.flush();
		this.scrollTimeline = timeline;
		this.detachScroll = this.group?.attachTimeline(timeline);
		return () => {
			this.scrollTimeline = void 0;
			this.detachScroll?.();
		};
	}
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
	/**
	* The current animations, if any are running. Skipped animations
	* (skipAnimations, reduced motion) can leave the group empty.
	*/
	active() {
		this.flush();
		return this.group?.animations.length ? this.group : void 0;
	}
	push(entry) {
		this.entries.push(entry);
		return this.invalidate();
	}
	/**
	* Schedule a rebuild. A nested timeline passes changes up, as it's
	* built as part of its parent.
	*/
	invalidate() {
		if (this.parent) this.parent.invalidate();
		else if (!this.isDirty) {
			this.isDirty = true;
			queueMicrotask(() => this.flush());
		}
		return this;
	}
	/**
	* Apply pending changes now, so reads straight after a change
	* reflect it.
	*/
	flush() {
		this.isDirty && !this.parent && !this.isKilled && this.build();
	}
	adopt(parent) {
		if (this.group) {
			rewind(this.group);
			this.group = void 0;
		}
		this.isDirty = false;
		this.parent = parent;
	}
	build() {
		const prevDuration = this.isWrapped ? this.group.iterationDuration : this.totalDuration;
		this.isDirty = false;
		this.isWrapped = false;
		const prev = this.group;
		let time = 0;
		if (prev) {
			this.isRebuilding = true;
			if (this.scrollTimeline) {
				/**
				* Scroll-linked animations can't be seeked in seconds.
				* Cancelling also returns them to their starting values,
				* and the new build is attached to scroll instead.
				*/
				this.detachScroll?.();
				prev.cancel();
			} else {
				time = prev.animations.length ? prev.time : 0;
				rewind(prev);
			}
			this.isRebuilding = false;
		}
		const { defaultTransition, onComplete, onUpdate, onRepeat, onReverseComplete, autoplay, scope, ...options } = this.options;
		/**
		* Inherit MotionConfig settings from a useAnimate() scope.
		*/
		const playback = {};
		if (scope?.reduceMotion !== void 0) playback.reduceMotion = scope.reduceMotion;
		if (scope?.skipAnimations !== void 0) playback.skipAnimations = scope.skipAnimations;
		Object.assign(playback, options);
		const markers = /* @__PURE__ */ new Map();
		const info = {};
		const prevScope = activeScope.current;
		activeScope.current = this.motionScope;
		let animations;
		try {
			animations = animateSequence(this.toSequence(markers), {
				defaultTransition,
				...playback
			}, scope, info);
		} finally {
			activeScope.current = prevScope;
		}
		const labels = info.labels;
		let duration = playback.duration ?? info.duration;
		/**
		* A `duration` option stretches every animation to fit, so scale
		* label and marker times to match.
		*/
		const scale = info.duration ? duration / info.duration : 1;
		labels.forEach((time, name) => labels.set(name, time * scale));
		/**
		* Markers are resolved as labels. Move them out of the label map
		* and extend the duration to reach any marker past the end.
		*/
		this.markers = [];
		markers.forEach((marker, name) => {
			marker.time = labels.get(name);
			labels.delete(name);
			duration = Math.max(duration, marker.time);
			this.markers.push(marker);
		});
		this.markers.sort((a, b) => a.time - b.time);
		this.labels = labels;
		this.totalDuration = duration;
		/**
		* Callbacks, pauses and playTo() watch a linear clock. Without
		* them, the timeline is only its animations.
		*/
		this.clock = this.clockAnimation = void 0;
		if (this.markers.length || this.stopAt !== void 0 || onUpdate || onRepeat) {
			const clock = this.clock = motionValue(0);
			clock.on("change", (t) => clock === this.clock && this.onClock(t));
			animations.unshift(this.clockAnimation = animateSingleValue(clock, [0, duration], {
				...playback,
				duration,
				ease: "linear"
			}));
		}
		const group = this.group = new GroupAnimationWithThen(animations);
		/**
		* Keep the playhead in the same repeat and at the same position,
		* so changing a repeating timeline doesn't jump it.
		*/
		const { delay = 0, repeat = 0, repeatDelay = 0 } = this.options;
		const [index, position] = inRepeat(this.options, prevDuration, time);
		if (time > delay) time = inRepeat(this.options, duration, Math.min(position, duration), index)[1];
		if (this.isDone && time < delay + (repeat + 1) * (duration + repeatDelay) - repeatDelay) this.newFinished();
		if (this.scrollTimeline) this.detachScroll = group.attachTimeline(this.scrollTimeline);
		else {
			group.speed = this.playbackSpeed;
			if (this.isPaused) group.pause();
			if (time) group.time = time;
		}
		this.repeatIndex = this.currentRepeat();
		/**
		* Treat a start from 0 as coming from just before it, so markers
		* at 0 fire.
		*/
		this.prevTime = time || -1;
		this.watch();
	}
	toSequence(markers) {
		return this.entries.map(({ item, at, marker }) => {
			if (marker) {
				markers.set(marker.name, marker);
				return label(marker.name, at);
			}
			if (item instanceof Timeline) return {
				sequence: item.toSequence(markers),
				at
			};
			if (typeof item === "string") return label(item, at);
			if (at === void 0) return item;
			return Array.isArray(item) ? withAt(item, at) : {
				...item,
				at
			};
		});
	}
	resolve(position) {
		this.flush();
		return typeof position === "number" ? position : calcLabelTime(position, this.labels) ?? this.time;
	}
	/**
	* The repeat the clock is in, from its time across all repeats.
	*/
	currentRepeat() {
		return inRepeat(this.options, this.totalDuration, this.clockAnimation?.time ?? 0)[0];
	}
	onClock(time) {
		let prevTime = this.prevTime;
		this.prevTime = time;
		if (this.isRebuilding) return;
		const { onUpdate, onRepeat, repeatType = "loop" } = this.options;
		onUpdate?.(time);
		/**
		* A frame can cross any number of repeats. Finish crossing each
		* repeat it leaves, then cross the next from its edge. A loop
		* starts each repeat from the same edge. The others turn around.
		*/
		const repeatIndex = this.currentRepeat();
		const step = repeatIndex > this.repeatIndex ? 1 : -1;
		while (repeatIndex !== this.repeatIndex) {
			const isForward = this.speed > 0 === (repeatType === "loop" || !(this.repeatIndex % 2));
			const edge = isForward ? this.totalDuration : 0;
			if (this.cross(prevTime, edge)) return;
			this.repeatIndex += step;
			onRepeat?.();
			prevTime = repeatType === "loop" ? isForward ? -1 : Infinity : edge;
		}
		this.cross(prevTime, time);
	}
	/**
	* Fire markers between two playhead times. Returns `true` if it
	* paused.
	*/
	cross(from, to) {
		if (from === to) return;
		const isForward = to > from;
		const crossed = (t) => isForward ? t > from && t <= to : t < from && t >= to;
		const markers = isForward ? this.markers : [...this.markers].reverse();
		for (const marker of markers) {
			if (!crossed(marker.time)) continue;
			marker.callback?.(isForward ? 1 : -1);
			if (marker.pause) return this.pauseAt(marker.time);
		}
		if (this.stopAt !== void 0 && crossed(this.stopAt)) {
			this.pauseAt(this.stopAt);
			this.stopAt = void 0;
			return true;
		}
	}
	/**
	* Pause at a playhead position in the current repeat.
	*/
	pauseAt(position) {
		this.pause();
		this.time = inRepeat(this.options, this.totalDuration, position, this.repeatIndex)[1];
		return true;
	}
	watch() {
		const group = this.group;
		group.finished.then(() => {
			if (group !== this.group || this.isDone) return;
			this.isDone = true;
			const { onComplete, onReverseComplete } = this.options;
			/**
			* Without onReverseComplete, onComplete fires in either
			* direction, as it does for a single animation.
			*/
			const callback = this.speed < 0 && onReverseComplete || onComplete;
			/**
			* Resolve this run's promise, even if the callback plays the
			* timeline again and so makes a new one.
			*/
			const resolve = this.resolveFinished;
			callback?.();
			resolve();
		});
	}
	newFinished() {
		this.isDone = false;
		this.finished = new Promise((resolve) => {
			this.resolveFinished = resolve;
		});
		/**
		* Stay in the scopeMotion() scope this was created in, and the
		* useAnimate() scope, while playing. Each replay, including a
		* change that restarts a finished timeline, registers again.
		*/
		const { scope } = this.options;
		const remove = this.motionScope?.add(() => {
			this.isKilled = true;
			this.stop();
		});
		scope?.animations.push(this);
		this.finished.then(() => {
			remove?.();
			scope && removeItem(scope.animations, this);
		});
	}
};
// node_modules/framer-motion/dist/es/animation/animate/index.mjs
/**
* A sequence has at least one segment or nested sequence. Labels alone
* are never a sequence, as an array of strings isn't a subject either.
*/
function isSequence(value) {
	return Array.isArray(value) && value.some((item) => Array.isArray(item) || item?.sequence);
}
/**
* Creates an animation function that is optionally scoped
* to a specific element.
*/
function createScopedAnimate(options = {}) {
	const { scope, reduceMotion, skipAnimations } = options;
	/**
	* Implementation
	*/
	function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
		const scopeTransition = activeScope.current?.transition;
		const inherited = {};
		if (reduceMotion !== void 0) inherited.reduceMotion = reduceMotion;
		if (skipAnimations !== void 0) inherited.skipAnimations = skipAnimations;
		let timeline;
		if (isSequence(subjectOrSequence)) {
			const sequenceOptions = {
				...inherited,
				...optionsOrKeyframes,
				scope
			};
			if (scopeTransition) sequenceOptions.defaultTransition = {
				...scopeTransition,
				...sequenceOptions.defaultTransition
			};
			/**
			* Resolve reduceMotion in the same order as a single
			* animation: options, then the default transition (which
			* includes the scope's), then useAnimate()'s.
			*/
			sequenceOptions.reduceMotion = optionsOrKeyframes?.reduceMotion ?? sequenceOptions.defaultTransition?.reduceMotion ?? reduceMotion;
			timeline = new Timeline(subjectOrSequence, sequenceOptions);
		} else {
			const { onComplete, ...rest } = options || {};
			const transition = {
				...inherited,
				...scopeTransition,
				...rest
			};
			/**
			* Play the animations directly, and only compile them as a
			* sequence if the timeline is changed. Values animated from a
			* number are animated via their onUpdate callback instead.
			*/
			const { onUpdate } = rest;
			timeline = new Timeline([typeof subjectOrSequence === "number" || typeof subjectOrSequence === "string" && (typeof optionsOrKeyframes === "string" || Array.isArray(optionsOrKeyframes)) ? [
				onUpdate || (() => {}),
				Array.isArray(optionsOrKeyframes) ? optionsOrKeyframes : [subjectOrSequence, optionsOrKeyframes],
				{
					...transition,
					onUpdate: void 0
				}
			] : [
				subjectOrSequence,
				optionsOrKeyframes,
				transition
			]], {
				...inherited,
				onComplete,
				scope
			}, animateSubject(subjectOrSequence, optionsOrKeyframes, transition, scope));
		}
		return timeline;
	}
	return scopedAnimate;
}
var animate = /* @__PURE__ */ Object.assign(/* @__PURE__ */ createScopedAnimate(), {
	/**
	* Register an effect so `animate()` can animate the subjects it
	* claims, for instance `animate.addEffect(threeEffect)`. The most
	* recently added effect is tested first. DOM elements are always
	* animated directly.
	*/
	addEffect,
	removeEffect
});
// src/js/animations.js
var animations_exports = /* @__PURE__ */ __exportAll({ scrollToTarget: () => scrollToTarget });
gsapWithCSS.registerPlugin(ScrollTrigger);
var lenis;
function initAnimations() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		document.querySelectorAll(".reveal").forEach((el) => {
			el.style.opacity = "1";
			el.style.transform = "none";
		});
		return;
	}
	initLenis();
	initScrollAnimations();
	initMicroAnimations();
}
function initLenis() {
	lenis = new Lenis({
		duration: 1.1,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true
	});
	lenis.on("scroll", ScrollTrigger.update);
	gsapWithCSS.ticker.add((time) => {
		lenis.raf(time * 1e3);
	});
	gsapWithCSS.ticker.lagSmoothing(0);
}
function scrollToTarget(target, options = {}) {
	if (lenis) lenis.scrollTo(target, {
		offset: -96,
		duration: 1.1,
		...options
	});
	else {
		const el = typeof target === "string" ? document.querySelector(target) : target;
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
}
function initScrollAnimations() {
	gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).from(".hero-eyebrow", {
		y: 24,
		opacity: 0,
		duration: .8
	}).from(".hero-title-line", {
		y: 60,
		opacity: 0,
		duration: .9,
		stagger: .12
	}, "-=0.5").from(".hero-desc", {
		y: 24,
		opacity: 0,
		duration: .7
	}, "-=0.55").from(".hero-building", {
		y: 24,
		opacity: 0,
		duration: .7
	}, "-=0.55").from(".hero-cta .btn", {
		y: 20,
		opacity: 0,
		duration: .6,
		stagger: .1
	}, "-=0.45").from(".listening-card", {
		y: 24,
		opacity: 0,
		duration: .7
	}, "-=0.4");
	gsapWithCSS.utils.toArray(".section-head").forEach((head) => {
		const children = head.children;
		gsapWithCSS.from(children, {
			scrollTrigger: {
				trigger: head,
				start: "top 85%",
				once: true
			},
			y: 28,
			opacity: 0,
			duration: .7,
			stagger: .1,
			ease: "power2.out"
		});
	});
	gsapWithCSS.utils.toArray(".reveal").forEach((el) => {
		gsapWithCSS.fromTo(el, {
			y: 28,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .7,
			ease: "power2.out",
			scrollTrigger: {
				trigger: el,
				start: "top 88%",
				once: true
			}
		});
	});
	gsapWithCSS.utils.toArray(".now-item").forEach((item, i) => {
		gsapWithCSS.from(item, {
			scrollTrigger: {
				trigger: item,
				start: "top 88%",
				once: true
			},
			x: -24,
			opacity: 0,
			duration: .6,
			delay: i * .04,
			ease: "power2.out"
		});
	});
	gsapWithCSS.utils.toArray(".timeline-item").forEach((item) => {
		gsapWithCSS.from(item, {
			scrollTrigger: {
				trigger: item,
				start: "top 85%",
				once: true
			},
			x: -20,
			opacity: 0,
			duration: .65,
			ease: "power2.out"
		});
	});
	gsapWithCSS.from(".contact-pill", {
		scrollTrigger: {
			trigger: ".contact-actions",
			start: "top 88%",
			once: true
		},
		y: 16,
		opacity: 0,
		duration: .5,
		stagger: .08,
		ease: "power2.out"
	});
}
function initMicroAnimations() {
	document.querySelectorAll(".project-card").forEach((card) => {
		card.addEventListener("mouseenter", () => {
			animate(card, { transform: "translateX(4px)" }, {
				duration: .25,
				easing: "ease-out"
			});
		});
		card.addEventListener("mouseleave", () => {
			animate(card, { transform: "translateX(0px)" }, {
				duration: .25,
				easing: "ease-out"
			});
		});
	});
	document.querySelectorAll(".btn").forEach((btn) => {
		btn.addEventListener("pointerdown", () => {
			animate(btn, { scale: .98 }, { duration: .1 });
		});
		btn.addEventListener("pointerup", () => {
			animate(btn, { scale: 1 }, { duration: .2 });
		});
		btn.addEventListener("pointerleave", () => {
			animate(btn, { scale: 1 }, { duration: .2 });
		});
	});
	const footerLinks = document.querySelectorAll(".footer-links-col a, .footer-links-col button");
	if (footerLinks.length) ScrollTrigger.create({
		trigger: ".site-footer",
		start: "top 92%",
		once: true,
		onEnter: () => animate(footerLinks, {
			opacity: [0, 1],
			transform: ["translateY(10px)", "translateY(0)"]
		}, {
			delay: stagger(.05),
			duration: .4,
			easing: "ease-out"
		})
	});
}
// src/main.js
renderNav();
renderNow();
renderAbout();
renderProjects();
renderExperience();
renderEducation();
renderSkills();
renderLearning();
renderNotes();
initNavigation();
initInteractions();
initAnimations();
var loadThree = () => __vitePreload(() => import("./three-scene.js").then((m) => m.initThreeScene()), [], import.meta.url).catch(() => {
	document.getElementById("hero-canvas-fallback")?.classList.add("is-visible");
});
if ("requestIdleCallback" in window) requestIdleCallback(loadThree, { timeout: 1200 });
else setTimeout(loadThree, 300);
export { prefersReducedMotion as t };
