import React from "react";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";

const projects = [
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

const FeaturedProjects = () => {
  return (
    <section className="relative min-h-screen w-full bg-neutral-900 p-8 sm:p-16 md:p-24">
      <h2 className="mb-12  text-4xl font-bold text-white">
        Take a look on my projects!
      </h2>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative h-80 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Gambar di bawah (hanya terlihat saat hover) */}
            <img
              src={project.img}
              alt={project.name}
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-700"
            />

            {/* Lapisan abu (selimut) */}
            <motion.div
              className="absolute inset-0 bg-neutral-900/90 group-hover:bg-neutral-900/60 transition-all duration-700 flex flex-col justify-center items-center text-center p-6"
            >
              <motion.h3
                className="text-5xl group-hover:text-2xl font-semibold text-white mb-4"
                layout="position"
              >
                {project.name}
              </motion.h3>

              {/* Deskripsi muncul saat hover */}
              <p className="text-neutral-300 hidden text-sm opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-700">
                {project.desc}
              </p>

              {/* Ikon muncul dari bawah */}
              <div className=" gap-4 mt-6 opacity-0 group-hover:opacity-100 group-hover:flex hidden transition-opacity duration-700">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300"
                >
                  <LinkIcon className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
