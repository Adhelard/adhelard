import React, { useState } from "react"; // 1. Impor useState
import { motion } from "framer-motion";
import { Github, Link as LinkIcon, Eye } from "lucide-react"; // 2. Impor ikon Eye

const projects = [
  // ... data proyek Anda (tidak berubah)
  {
    id: "RG account",
    name: "RG account",
    desc: "Mengembangkan layanan akun untuk ekosistem mandiri sekolah impian.",
    img: "Akun.png",
    repo: "#",
    demo: "#",
  },
  {
    id: "jogja-love-palestine",
    name: "Jogja Love Palestine",
    desc: "Membangun aplikasi filantropi untuk Palestina, berkolaborasi dengan UMKM di Yogyakarta.",
    img: "jlp.png",
    repo: "#",
    demo: "#",
  },
  {
    id: "smart-islamic-clock",
    name: "Smart Islamic Clock",
    desc: "Merancang jam pintar berbasis IoT dengan fitur alarm ibadah, puzzle edukatif, dan fitur keluarga lainnya.",
    img: "IMG_4051.JPG",
    repo: "#",
    demo: "#",
  },
  {
    id: "portal-sekolah-impian",
    name: "Portal Sekolah Impian",
    desc: "Mengembangkan media sosial internal yang terfokus untuk lingkungan Sekolah Impian.",
    img: "psi.png",
    repo: "#",
    demo: "#",
  },
];

// Definisikan transisi "spring" yang lebih baik
const revealTransition = { type: "spring", duration: 0.7, bounce: 0.1 };

const FeaturedProjects = () => {
  // 3. Lacak proyek mana yang sedang "aktif" (di-hover atau di-sentuh)
  const [activeProjectId, setActiveProjectId] = useState(null);

  return (
    <section className="relative min-h-screen w-full bg-neutral-900 p-8 sm:p-16 md:p-24">
      <h2 className="mb-12  text-4xl font-bold text-white">
        Take a look on my projects!
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => {
          // 4. Cek apakah kartu ini sedang aktif
          const isActive = activeProjectId === project.id;

          return (
            <motion.div
              key={project.id}
              className="relative h-80 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              // 5. Tambahkan event handler untuk desktop
              onMouseEnter={() => setActiveProjectId(project.id)}
              onMouseLeave={() => setActiveProjectId(null)}
            >
              {/* === Ikon Mata (Hanya untuk Mobile) === */}
              <motion.div
                className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900/70 text-white backdrop-blur-sm md:hidden"
                // 6. Tambahkan event handler untuk mobile (sentuh dan tahan)
                onTouchStart={() => setActiveProjectId(project.id)}
                onTouchEnd={() => setActiveProjectId(null)}
              >
                <Eye className="h-5 w-5" />
              </motion.div>

              {/* Gambar (kini menggunakan motion.img) */}
              <motion.img
                src={project.img}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover"
                // 7. Animasi berdasarkan state `isActive`
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 0.7 : 0 }}
                transition={revealTransition}
              />

              {/* Lapisan abu (selimut) */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                // 8. Animasi latar belakang berdasarkan state `isActive`
                initial={{ backgroundColor: "rgb(23 23 23 / 0.9)" }} // bg-neutral-900/90
                animate={{
                  backgroundColor: isActive
                    ? "rgb(23 23 23 / 0.6)" // bg-neutral-900/60
                    : "rgb(23 23 23 / 0.9)", // bg-neutral-900/90
                }}
                transition={revealTransition}
              >
                <motion.h3
                  className="mb-4 text-5xl font-semibold text-white"
                  layout="position" // Animasi ini sudah bagus, kita pertahankan
                  // 9. Animasi ukuran font berdasarkan state `isActive`
                  animate={{ fontSize: isActive ? "1.5rem" : "3rem" }} // text-2xl & text-5xl
                  transition={revealTransition}
                >
                  {project.name}
                </motion.h3>

                {/* Deskripsi (kini menggunakan motion.p) */}
                <motion.p
                  className="text-sm text-neutral-300"
                  // 10. Animasi opacity & display berdasarkan state `isActive`
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    display: isActive ? "block" : "none", // Sembunyikan agar tidak menghalangi
                  }}
                  transition={{ ...revealTransition, delay: isActive ? 0.1 : 0 }} // Transisi dengan sedikit delay
                >
                  {project.desc}
                </motion.p>

                {/* Ikon (kini menggunakan motion.div) */}
                <motion.div
                  className="mt-6 flex gap-4"
                  // 11. Animasi yang sama untuk ikon
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    display: isActive ? "flex" : "none",
                  }}
                  transition={{ ...revealTransition, delay: isActive ? 0.2 : 0 }} // Delay lebih lama
                >
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neutral-300"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neutral-300"
                  >
                    <LinkIcon className="h-6 w-6" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;