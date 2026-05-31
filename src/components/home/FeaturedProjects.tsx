import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

// ===== ExpandableText կոմպոնենտ =====
interface ExpandableTextProps {
  text: string;
  limit?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, limit = 120 }) => {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= limit) return <p>{text}</p>;

  return (
    <p className="text-sm text-muted-foreground leading-relaxed">
      {expanded ? text : `${text.slice(0, limit)}...`}
      <button
        onClick={() => setExpanded(!expanded)}
        className="ml-2 text-accent font-semibold hover:underline"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </p>
  );
};
const skills = [
  { name: "", icon: "/assets/js.jpg" },
  { name: "Next.js", icon: "/assets/ts.jpg" },
  { name: "TypeScript", icon: "/assets/react.jpg" },
  { name: "Node.js", icon: "/assets/next.jpg" },
  { name: "Express", icon: "/assets/node.jpg" },
  { name: "MongoDB", icon: "/assets/abg.jpg" },
  { name: "MySQL", icon: "/assets/MY.jpg" },
  { name: "PostgreSQL", icon: "/assets/ppp.jpg" },
  { name: "SAS", icon: "/assets/Dock.jpg" },
  { name: "Python", icon: "/assets/web3d.jpg" },
  { name: "Web3", icon: "/assets/AS.jpg" },
  { name: "MetaMask", icon: "/assets/ccd.jpg" },
];

// ===== FeaturedProjects կոմպոնենտ =====
const bgBlobs = [
  "bg-purple-700/30",
  "bg-cyan-500/30",
  "bg-pink-500/30",
];

const FeaturedProjects = () => {
  const { t } = useTranslation();

  const cards = [
    { key: "frontend", image: "/assets/front.jpg" },
    { key: "backend", image: "/assets/back.jpg" },
    { key: "database", image: "/assets/db.jpg" },
    { key: "data", image: "/assets/sas.jpg" },
  ];

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* ===== Animated background blobs ===== */}
      {bgBlobs.map((bg, i) => (
        <motion.div
          key={i}
          className={`absolute w-[420px] h-[420px] rounded-full blur-3xl ${bg}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 80, -60, 0],
            y: [0, -60, 80, 0],
          }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${i * 20 + 10}%`,
            left: `${i * 25 + 5}%`,
          }}
        />
      ))}

      <div className="relative container-custom z-10">
        {/* ===== SERVICES / OFFER ===== */}
        <SectionHeader
          title={t("home.featured.title")}
          subtitle={t("home.featured.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <AnimatedSection key={card.key} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative rounded-2xl bg-card/70 backdrop-blur-md border border-border/50 overflow-hidden shadow-md hover:shadow-premium"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-accent/20 via-transparent to-accent/20" />

                {/* IMAGE */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={card.image}
                    alt={t(`home.offer.cards.${card.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70" />
                </div>

                {/* CONTENT */}
                <div className="relative p-6 flex flex-col">
                  <h3 className="font-serif text-xl font-semibold mb-3 transition-colors group-hover:text-accent">
                    {t(`home.offer.cards.${card.key}.title`)}
                  </h3>

                  <div className="flex-1">
                    {/* Show More հանված է այս քարտերից */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`home.offer.cards.${card.key}.description`)}
                    </p>
                  </div>

                  <span className="block mt-4 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-12" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ===== EXTRA / WEB3 & MINDSET ===== */}
        <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold">
                {t("home.extra.title")}
              </h3>

              {/* Show More հանված է այս տեքստերից */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("home.extra.web3")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("home.extra.mindset")}
              </p>
            </div>
          </AnimatedSection>

          {/* IMAGE */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-premium"
            >
              <img
                src="/assets/web3.jpg"
                alt="Web3 & Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
            </motion.div>
          </AnimatedSection>
        </div>






 {/* ===== SKILLS MARQUEE ===== */}
<div className="mt-24 overflow-hidden relative">
  <AnimatedSection>
    <div className="relative">
      {/* Blur sides */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex gap-8 whitespace-nowrap animate-[marquee_28s_linear_infinite] w-max">
        {[...skills, ...skills].map((skill, index) => (
         <motion.div
  key={index}
  whileHover={{
    y: -8,
    scale: 1.12,
  }}
  transition={{ type: "spring", stiffness: 200 }}
  className="flex items-center justify-center"
>
  <img
    src={skill.icon}
    alt={skill.name}
    className="w-16 h-16 object-contain drop-shadow-xl"
  />
</motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>

  {/* LOCAL STYLE */}
  <style>
    {`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }

        100% {
          transform: translateX(-50%);
        }
      }
    `}
  </style>
</div>
        {/* ===== COMPETITIONS & HACKATHONS ===== */}
        <div className="mt-32">
          <SectionHeader
            title={t("home.competitions.title")}
            subtitle={t("home.competitions.subtitle")}
          />

          <div className="grid md:grid-cols-2 gap-10">
            {/* 2023 */}
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-card/70 backdrop-blur-md border border-border/50 shadow-md hover:shadow-premium"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/assets/hec.jpg"
                    alt="Hackathon 2023"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-semibold">
                    {t("home.competitions.items.2023.title")}
                  </h3>
                  <ExpandableText
                    text={t("home.competitions.items.2023.description")}
                    limit={120}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* 2025 */}
            <AnimatedSection delay={0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-card/70 backdrop-blur-md border border-border/50 shadow-md hover:shadow-premium"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/assets/hec2.jpg"
                    alt="Hackathon 2025"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-semibold">
                    {t("home.competitions.items.2025.title")}
                  </h3>
                  <ExpandableText
                    text={t("home.competitions.items.2025.description")}
                    limit={120}
                  />
                </div>
              </motion.div>
            </AnimatedSection>










  <AnimatedSection delay={0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-card/70 backdrop-blur-md border border-border/50 shadow-md hover:shadow-premium"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/assets/1771912464612.jpg"
                    alt="Hackathon 2025"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-semibold">
                    {t("home.competitions.items.2026.title")}
                  </h3>
                  <ExpandableText
                    text={t("home.competitions.items.2026.description")}
                    limit={120}
                  />
                </div>
              </motion.div>
            </AnimatedSection>











          </div>
        </div>

        {/* ===== COMPETITIONS FOOTNOTE / PHILOSOPHY ===== */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            {/* Show More հանված է */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("home.competitions.outro")}
            </p>
            <span className="block mx-auto mt-6 h-[2px] w-16 bg-accent rounded-full" />
          </AnimatedSection>
        </div>

        {/* ===== HACKATHON INSIGHTS ===== */}
        {/* <div className="mt-24 grid md:grid-cols-2 gap-10"> */}
          {/* INSIGHT 1 */}
          {/* <AnimatedSection>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl overflow-hidden bg-card/70 backdrop-blur-md border border-border/50 shadow-md hover:shadow-premium"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/assets/m6.jpg"
                  alt={t("home.competitions.highlights.first.title")}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-semibold">
                  {t("home.competitions.highlights.first.title")}
                </h3>
                <ExpandableText
                  text={t("home.competitions.highlights.first.description")}
                  limit={120}
                />
              </div>
            </motion.div>
          </AnimatedSection> */}

          {/* INSIGHT 2 */}
          {/* <AnimatedSection delay={0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl overflow-hidden bg-card/70 backdrop-blur-md border border-border/50 shadow-md hover:shadow-premium"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/assets/hackathon-2.jpg"
                  alt={t("home.competitions.highlights.second.title")}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-semibold">
                  {t("home.competitions.highlights.second.title")}
                </h3>
                <ExpandableText
                  text={t("home.competitions.highlights.second.description")}
                  limit={120}
                />
              </div>
            </motion.div>
          </AnimatedSection> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;
