import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import cockpitImage from "@/assets/cockpit.jpg";
import driverImage from "@/assets/driver.jpg";
import trackImage from "@/assets/track.jpg";
import heroImage from "@/assets/hero-racing.jpg";

// Replace these with your actual photos
const galleryImages = [
  {
    src: heroImage,
    alt: "Porsche GT3 Cup racing on track",
    category: "Track",
  },
  {
    src: cockpitImage,
    alt: "Racing cockpit interior",
    category: "Car",
  },
  {
    src: driverImage,
    alt: "Professional racing driver",
    category: "Experience",
  },
  {
    src: trackImage,
    alt: "Porsche Ring aerial view",
    category: "Track",
  },
  {
    src: heroImage,
    alt: "High-speed racing action",
    category: "Experience",
  },
  {
    src: cockpitImage,
    alt: "GT3 Cup dashboard",
    category: "Car",
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
              ELAMUSED PILDIS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vaata pilte meie võidusõidu kogemustest, autodest ja rahulolevatest klientidest
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`aspect-square ${index === 0 ? "md:aspect-auto md:h-full" : ""}`}>
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
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-accent transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-accent transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedImage ? "bg-accent" : "bg-white/30"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
