import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-neutral-900 text-white">
    {/* Latar belakang gradien pudar */}
    <div className="absolute inset-0 z-0 bg-linear-to-b from-neutral-900 via-neutral-900 to-black"></div>
    
    <div className="relative z-10 flex flex-col items-center">
      {/* 1. Gambar Anda (Gunakan placeholder) */}
      <motion.img
        // Ganti dengan URL foto Anda
        src="boros.png" 
        alt="Foto Muhammad Arifin Ali"
        className="mb-6 h-32 w-32 rounded-full border-4 border-neutral-700 object-cover shadow-lg"
        initial={{ clipPath: 'circle(0% at 50% 50%)' }} // Muncul dari tengah
        animate={{ clipPath: 'circle(75% at 50% 50%)' }}
        transition={{ duration: 1, delay: 0.2, ease: 'circOut' }}
      />

      {/* 2. Nama dengan Efek Shimmer Elegan */}
      <motion.h1
        className="bg-clip-text text-center text-5xl font-bold text-transparent sm:text-7xl
                   bg-linear-to-r from-neutral-400 via-white to-neutral-400 bg-size[auto_400px]"
        // Menganimasikan posisi background-nya
        animate={{ backgroundPosition: ['200% center', '-200% center'] }}
        transition={{
          duration: 4, // Durasi lebih lama agar elegan
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        Muhammad Arifin Ali
      </motion.h1>

      {/* 3. Status/Jabatan dengan Animasi Staggered */}
      <motion.div
        className="mt-6 flex flex-col items-center gap-2 text-lg text-neutral-300 sm:flex-row sm:gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3, // Jeda antar elemen
              delayChildren: 1,     // Mulai setelah 1 detik
            },
          },
        }}
      >
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Web & App Developer!
        </motion.p>
        <span className="hidden text-neutral-500 sm:block">|</span>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Intern at PT Al Khawarizmi
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default Hero;

