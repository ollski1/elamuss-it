import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import elamused2 from "@/assets/gallery/elamused-2.jpeg";
import elamused3 from "@/assets/gallery/elamused-3.jpeg";
import elamused4 from "@/assets/gallery/elamused-4.jpeg";
import elamused5 from "@/assets/gallery/elamused-5.jpeg";

type GalleryItem = {
  src?: string;
  videoUrl?: string;
  alt: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    videoUrl: "https://www.youtube.com/embed/4drdzMuSasw",
    alt: "Porsche Racing Experience elamus",
    category: "Elamus",
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
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedItem(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const navigateItem = (direction: "prev" | "next") => {
    if (selectedItem === null) return;
    if (direction === "prev") {
      setSelectedItem(
        selectedItem === 0 ? galleryItems.length - 1 : selectedItem - 1
      );
    } else {
      setSelectedItem(
        selectedItem === galleryItems.length - 1 ? 0 : selectedItem + 1
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
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3]">
                  {item.videoUrl ? (
                    <div className="w-full h-full bg-card flex items-center justify-center relative">
                      <img
                        src={`https://img.youtube.com/vi/4drdzMuSasw/hqdefault.jpg`}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-accent-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-accent text-sm uppercase tracking-wider">
                      {item.category}
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
      {selectedItem !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateItem("prev");
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className="absolute right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateItem("next");
            }}
          >
            <ChevronRight size={48} />
          </button>

          {/* Content - Video or Image */}
          {galleryItems[selectedItem].videoUrl ? (
            <div
              className="w-[90vw] max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={galleryItems[selectedItem].videoUrl + "?autoplay=1"}
                title={galleryItems[selectedItem].alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          ) : (
            <motion.img
              key={selectedItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryItems[selectedItem].src}
              alt={galleryItems[selectedItem].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedItem + 1} / {galleryItems.length}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
