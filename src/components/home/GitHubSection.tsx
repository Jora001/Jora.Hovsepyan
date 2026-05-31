"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

/* === CONFIG === */
const VISIBLE = 2;
const AUTOPLAY_DELAY = 5000;

/* === EVENTS DATA (i18n KEYS) === */
const events = [
  { id: 1, key: "aiMasters", image: "/assets/c1.jpg" },
  { id: 2, key: "testit", image: "/assets/c2.jpg" },
  { id: 3, key: "piscine42", image: "/assets/c00.jpg" },
  { id: 4, key: "meetup", image: "/assets/c3.jpg" },
  { id: 5, key: "sas", image: "/assets/sasbase.jpg" },
  { id: 6, key: "hackathon1", image: "/assets/c4.jpg" },
  { id: 7, key: "hackathon2", image: "/assets/c5.jpg" },
  { id: 8, key: "hackathon3", image: "/assets/c6.jpg" },
  { id: 9, key: "hackathon4", image: "/assets/c8.jpg" },
  { id: 10, key: "hackathon5", image: "/assets/cer8.jpg" },
  { id: 11, key: "hackathon6", image: "/assets/c9.jpg" },
  { id: 12, key: "hackathon7", image: "/assets/c10.jpg" },
  { id: 13, key: "hackathon8", image: "/assets/po.jpg" },
];

const EventsCarouselSection = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = events.length - VISIBLE;
  const step = 100 / events.length;

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [paused, maxIndex]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          title={t("home.certificates.title")}
          subtitle={t("home.certificates.subtitle")}
        />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: `${(events.length / VISIBLE) * 100}%` }}
              animate={{ x: `-${index * step}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  style={{ width: `${100 / events.length}%` }}
                  className="px-6"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-[1px] rounded-[34px] bg-gradient-to-br from-primary/40 via-purple-500/30 to-cyan-400/40 opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />

                    <div className="relative overflow-hidden rounded-[32px] border bg-card shadow-xl">
                      <div className="relative h-[380px] overflow-hidden">
                        <img
                          src={event.image}
                          alt={t(
                            `home.certificates.items.${event.key}.title`
                          )}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h4 className="font-semibold text-lg mb-1">
                          {t(
                            `home.certificates.items.${event.key}.title`
                          )}
                        </h4>
                        <div className="flex items-center gap-1 text-sm text-white/80">
                          <MapPin className="w-4 h-4" />
                          {t(
                            `home.certificates.items.${event.key}.location`
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={() => setIndex((p) => (p <= 0 ? maxIndex : p - 1))}
            className="absolute -left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background shadow hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => setIndex((p) => (p >= maxIndex ? 0 : p + 1))}
            className="absolute -right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background shadow hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsCarouselSection;
