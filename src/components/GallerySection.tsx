import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import elamused2 from "@/assets/gallery/elamused-2.jpeg";
import elamused3 from "@/assets/gallery/elamused-3.jpeg";
import elamused4 from "@/assets/gallery/elamused-4.jpeg";
import elamused5 from "@/assets/gallery/elamused-5.jpeg";

const galleryImages = [
  {
    src: elamused2,
    alt: "Võidusõitja ja klient Porsche kõrval",
    category: "Elamused",
  },
  {
    src: elamused2,
    alt: "Võidusõitja ja klient Porsche kõrval",
    category: "Elamused",
  },
  {
    src: elamused3,
    alt: "Õnnelikud sõitjad võidusõiduautos",
    category: "Elamused",
  },
  {
    src: elamused4,
    alt: "Porsche Racing Experience auto boksides",
    category: "Elamused",
  },
  {
    src: elamused5,
    alt: "Võidusõitja ja klient Porsche GT3 Cup kõrval boksiteel",
    category: "Elamused",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <>
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Galerii
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-gradient mb-6">
              ELAMUSED
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vaata pilte meie võidusõidu kogemustest ja rahulolevatest klientidest
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {/* YouTube Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3]">
                <iframe
                  src="https://www.youtube.com/embed/4drdzMuSasw"
                  title="Porsche Racing Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="p-4">
                  <span className="text-accent text-sm uppercase tracking-wider">
                    Elamus
                  </span>
                </div>
              </div>
            </motion.div>
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-accent text-sm uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-colors duration-300 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Navigation buttons */}
          <button
            className="absolute left-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className="absolute right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <ChevronRight size={48} />
          </button>

          {/* Image */}
          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
