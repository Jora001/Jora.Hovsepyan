"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

/* ================= BLOG POSTS ================= */

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices in 2024",
    excerpt:
      "Learn the essential patterns and practices for building React applications that scale. From state management to code organization, this guide covers it all.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    category: "tech",
    date: "Dec 15, 2024",
    readTime: 8,
    tags: ["React", "Best Practices", "Architecture"],
  },
  {
    id: 2,
    title: "From Junior to Senior: My 5-Year Journey in Tech",
    excerpt:
      "Reflecting on my career progression, the challenges I faced, lessons learned, and advice for developers looking to grow in their careers.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    category: "career",
    date: "Nov 28, 2024",
    readTime: 12,
    tags: ["Career", "Growth", "Mentorship"],
  },
  {
    id: 3,
    title: "TypeScript Tips That Will Make Your Code Cleaner",
    excerpt:
      "Discover powerful TypeScript features and patterns that will help you write more maintainable and type-safe code in your projects.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
    category: "tech",
    date: "Nov 10, 2024",
    readTime: 6,
    tags: ["TypeScript", "Programming", "Tips"],
  },
  {
    id: 4,
    title: "Why I Moved Back to Gyumri: Finding Balance in Tech",
    excerpt:
      "A personal story about choosing quality of life over big city opportunities and how remote work has changed the game for developers.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    category: "personal",
    date: "Oct 22, 2024",
    readTime: 10,
    tags: ["Remote Work", "Life", "Armenia"],
  },
  {
    id: 5,
    title: "Mastering CSS Grid: A Complete Visual Guide",
    excerpt:
      "Everything you need to know about CSS Grid, from basic concepts to advanced techniques with practical examples and visualizations.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop",
    category: "tech",
    date: "Oct 5, 2024",
    readTime: 15,
    tags: ["CSS", "Web Development", "Tutorial"],
  },
  {
    id: 6,
    title: "Preparing for Technical Interviews: A Practical Guide",
    excerpt:
      "My approach to technical interview preparation, including resources, practice strategies, and tips for handling different interview formats.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop",
    category: "career",
    date: "Sep 18, 2024",
    readTime: 9,
    tags: ["Interviews", "Career", "Tips"],
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "tech", label: "Technology" },
  { id: "career", label: "Career" },
  { id: "personal", label: "Personal" },
];

/* ================= EVENTS / IMAGES ================= */

const VISIBLE = 2;
const AUTOPLAY_DELAY = 5000;

const events = [
  { id: 1, title: "AI Masters Challenge Hackathon", location: "Gyumri, Armenia", image: "/assets/fir.jpg" },
  { id: 2, title: "TestIT Competition", location: "EIF Gyumri Technology Center", image: "/assets/hac2.jpg" },
  { id: 3, title: "42 Yerevan Piscine", location: "Yerevan, Armenia", image: "/assets/labs.jpg" },
  { id: 4, title: "Tech Meetup", location: "Gyumri", image: "/assets/digi.jpg" },
  { id: 5, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/hac.jpg" },
  { id: 6, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/hac3.jpg" },
  { id: 7, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/silli.jpg" },
  { id: 8, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/ann.jpg" },
  { id: 9, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/ddd.jpg" },
  { id: 10, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/armines.jpg" },
  { id: 11, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/shax.jpg" },
  { id: 12, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/hamn.jpg" },
  { id: 13, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/com.jpg" },
  { id: 14, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/qe.jpg" },
  { id: 15, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/m2.jpg" },
  { id: 16, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/armine.jpg" },
  { id: 17, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/tru.jpg" },
  { id: 18, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/m10.jpg" },
  { id: 19, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/diju.jpg" },
  { id: 20, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/423.jpg" },
  { id: 21, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/gtc.jpg" },
  { id: 22, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/tra.jpg" },
  { id: 23, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/45.jpg" },
  { id: 24, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/silicon.jpg" },
  { id: 25, title: "Hackathon Presentation", location: "Gyumri", image: "/assets/m101.jpg" },
];

/* ================= PAGE ================= */

const Blog = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

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
    <Layout>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="heading-display mb-6">{t("blog.title")}</h1>
            <p className="body-large max-w-2xl mx-auto">
              {t("blog.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.article key={post.id} layout>
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        <span className="text-accent flex items-center gap-2 text-sm">
                          {t("blog.readMore")}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* EVENTS / IMAGES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title={t("home.events.title")}
            subtitle={t("home.events.subtitle")}
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
                transition={{ duration: 0.7 }}
              >
                {events.map((event) => (
                  <div
                    key={event.id}
                    style={{ width: `${100 / events.length}%` }}
                    className="px-6"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-[380px] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 p-6 text-white">
                        <h4 className="font-semibold">{event.title}</h4>
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={() => setIndex((p) => (p <= 0 ? maxIndex : p - 1))}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-background p-3 rounded-full shadow"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => setIndex((p) => (p >= maxIndex ? 0 : p + 1))}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-background p-3 rounded-full shadow"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
