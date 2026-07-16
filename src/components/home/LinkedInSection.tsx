"use client";

import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/* === CONFIG === */
const VISIBLE = 3;
const AUTOPLAY_DELAY = 7000;
const TEXT_LIMIT = 320;

/* === DATA === */
const recommendations = [
  {
    id: 1,
    name: "Anahit Otaryan",
    role: "Software Engineer C/C++ | System Architecture",
    text:
      "I had the pleasure of studying and working alongside Jor, and I can confidently say he is a highly motivated and intelligent professional. Jor consistently demonstrates a strong sense of responsibility, attention to detail, and a genuine passion for learning and self-improvement. He approaches every task with focus and professionalism, adapts quickly to new challenges, and contributes positively to any team environment. Jor’s dedication, technical mindset, and strong work ethic make him a valuable asset, and I’m confident he will continue to achieve great results in his career..",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/anahit.jpg",
    date: "January 8, 2026",
  },
  {
    id: 2,
    name: "Arman Harutyunyan",
    role: "Data Analyst | Data Scientist | Machine Learning Enthusiast",
    text:
      "During our time at 42 School, I worked closely with Jora on various learning challenges. Our shared interest in data analysis led to productive collaboration, and his problem-solving mindset and positive attitude made studying together a great experience.",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/arman.jpg",
    date: "January 7, 2026",
  },
  

 

  {
    id: 3,
    name: "Hovhannes Khachatryan",
    role: "Back-End & Automation Tech Lead at MFM Soft",
    text:
      "I wholeheartedly recommend Jor for their purposeful, active, and clever mindset. Their dedication and intelligence make them an invaluable addition to any team or project. 🌟",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/hovo.jpg",
    date: "October 18, 2023",
  },
    {
    id: 23,
    name: "Vahag Poghosyan",
    role: "Software Engineer | Cybersecurity | Python Automation & Linux | Open to Work",
    text:
      "Working with Jora is always inspiring. He is an intelligent, proactive, and professional individual who constantly strives to acquire new knowledge and improve his skills and solutions. Jora creates a positive atmosphere within the team, collaborates effortlessly, and is always ready to take on new challenges. He is a true asset to any project and team",
    linkedinUrl: "https://www.linkedin.com/in/vahag-poghosyan-98458090/",
    avatar: "/assets/vahag.jpg",
    date: "February 12, 2026",
  },

  {
    id: 25,
    name: "Vache Zohrabyan",
    role: "Software Engineer | Systems Programming Enthusiast | 42Yerevan Student",
    text:
      "Jora helped me refine my LinkedIn profile and build a focused portfolio that aligned with my goals. I was struggling to present myself properly and find freelance work, and his advice made a real difference. Thanks to his guidance, I landed my first solo project soon after. He has a great sense for how to position developers for real opportunities.",
    linkedinUrl: "linkedin.com/in/vache-zohrabyan?skipRedirect=true",
    avatar: "/assets/vache.jpg",
    date: "April 12, 2026",
  },

  {
    id: 4,
    name: "Hasmik Hunanyan",
    role: "Front-End Developer | Trainer",
    text:
      "I had the opportunity to study alongside Jora, and he consistently demonstrated strong work ethic and intelligence. He approached tasks with responsibility and showed excellent problem-solving abilities. In addition to his technical skills, Jora is a supportive and cooperative individual. He was always willing to help others, including myself, and communicated ideas clearly and effectively. His positive attitude made him a strong team player. I confidently recommend Jora to any organization seeking a motivated, reliable, and capable professional.",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/hasmik.jpg",
    date: "January 8, 2026",
  },
 
  {
    id: 5,
    name: "Lilit Drnoyan",
    role: "Full-Stack Developer | React/Next.js | Node.js Express.js",
    text:
      "I met Jora Hovsepyan during the Piscine phase at 42 Yerevan, a highly intensive and demanding program that requires strong analytical thinking, self-discipline, and the ability to perform effectively under pressure. Jora consistently demonstrated these qualities throughout the program. He stands out for his structured approach to problem-solving, strong logical reasoning, and attention to detail. When working on complex technical challenges, Jora remains focused, adapts quickly to new conditions, and consistently strives to deliver accurate and efficient solutions. His work clearly reflects a high sense of responsibility and a strong commitment to quality. In team environments, Jora is open, approachable, and collaborative. He communicates effectively, shares his ideas willingly, listens to others, and contributes positively to team dynamics. His goal-oriented mindset, combined with his friendly and professional attitude, makes him a reliable and valued team member. I am confident that Jora has a solid foundation and strong potential in the field of software development and would be a valuable asset to any technical team. I recommend him without hesitation. 🤝😊",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/llilit.jpg",
    date: "January 7, 2026",
  },
  {
    id: 6,
    name: "Elmira Papoyan",
    role: "Front-End Web Developer | React.js | Next.js",
    text:
      " During our time studying together, Jora consistently showed a strong commitment to doing well in our studies. 📚 He works really hard and never gives up, making him a great study partner. 🚀 Jora is excellent at understanding difficult ideas quickly, which helps us study more efficiently. Not only is Jora a hard worker, but he is also very kind and supportive. 🌈 Even when there are tough assignments or a lot of studying to do, he is always there to help and encourage. 🤝 This makes our study sessions positive and teamwork-oriented. It doesn't just make learning easier, but it also makes studying together enjoyable. 😊",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/elmira.jpg",
    date: "February 14, 2024",
  },
  {
    id: 7,
    name: "Lilit Poghosyan",
    role: "Middle Full-Stack Developer at IT Space",
    text:
      "I am pleased to write this recommendation for Jora, who I have had the privilege of working with at our education center. Jora is an exceptionally intelligent individual with a remarkable ability to adapt to new technologies and embrace challenges with enthusiasm. What truly sets Jora apart is his flexibility and eagerness to learn. He consistently approaches new problems with a positive attitude and quickly masters new tools and techniques. His knack for coming up with smart, effective solutions to complex issues has impressed everyone who has worked with him. Jora’s ability to stay on top of emerging technologies and his readiness to tackle any challenge make him a valuable asset. His creativity and problem-solving skills ensure that he excels in dynamic environments and contributes significantly to any project or team.",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/lil.jpg",
    date: "September 9, 2024",
  },
  {
    id: 8,
    name: "Arman Haroyan",
    role: "Data Analyst | SAS R SPSS",
    text:
      "It is my pleasure to share my experience working with Jora, whom I first met at 42Yerevan, where we started studying together. From day one, Jora stood out with his dedication, perseverance, and eagerness to learn continuously. We often practiced together, solving programming challenges and exercises, during which I noticed his exceptional analytical thinking and teamwork skills. Jora is not only technically skilled but also highly adaptable and creative in approaching problems. Throughout our joint practice, he actively developed his own skills while also supporting me and others by sharing knowledge and insights. His constant motivation and collaborative spirit make Jora an excellent team member and a strong asset for any future endeavors. I highly recommend Jora to anyone seeking a committed and intelligent professional. It is my pleasure to share my experience working with Jora, whom I first met at 42Yerevan, where we started studying together. From day one, Jora stood out with his dedication, perseverance, and eagerness to learn continuously. We often practiced together, solving programming challenges and exercises, during which I noticed his exceptional analytical thinking and teamwork skills. Jora is not only technically skilled but also highly adaptable and creative in approaching problems. Throughout our joint practice, he actively developed his own skills while also supporting me and others by sharing knowledge and insights. His constant motivation and collaborative spirit make Jora an excellent team member and a strong asset for any future endeavors. I highly recommend Jora to anyone seeking a committed and intelligent professional.",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/arman43.jpg",
    date: "December 12, 2024",
  },
  {
    id: 9,
    name: "Arpi Sargsyan",
    role: "NTL QA Engineer | Software Tester",
    text:
      "I had the pleasure of working with Jora on a recent project, and I cannot speak highly enough of their skills and professionalism. As a Software developer, Jora demonstrated exceptional proficiency in both front-end and back-end technologies, making significant contributions to the success of our project",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/arpi.jpg",
    date: "July 24, 2024",
  },
  {
    id: 10,
    name: "Misha Papoyan",
    role: "Front-End Developer | Rust Enthusiast",
    text:
      "I had the pleasure of working with Jora on several projects, and I can confidently say that he is an exceptional front-end developer, particularly skilled with Next.js. His technical expertise in building scalable, performant web applications is impressive, and his ability to seamlessly integrate dynamic user experiences into projects always adds significant value. Jora has a deep understanding of modern web development technologies, and his code is consistently clean, well-structured, and maintainable. Beyond his technical skills, Jora is a fantastic teammate. He communicates effectively, collaborates effortlessly, and always approaches challenges with a positive attitude. Jora is someone who genuinely cares about the success of the team, and he's always willing to go the extra mile to ensure that projects are completed to the highest standard. His strong work ethic, coupled with his attention to detail, make him a reliable and indispensable part of any team. In addition to his professionalism, Jora brings a great sense of empathy and patience to the table, always ready to help others and contribute to a harmonious working environment. I'm confident that Jora will continue to excel and bring great value to any future team he joins.",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/misho.jpg",
    date: "October 7, 2024",
  },
  {
    id: 11,
    name: "Armen Papikyan",
    role: "Full-Stack Developer | React.js | Node.js",
    text:
      "I highly recommend Jora👌 as a ReactJS developer. We studied together, and his proficiency is exceptional. He excels in creating efficient user interfaces, tackling complex challenges with creativity and technical expertise. Jora is a team player, actively contributing ideas and collaborating effectively. His positive attitude and willingness to help others make him a valuable asset. With a strong work ethic and a continuous desire for learning, he stays updated with the latest trends, ensuring his work is always cutting-edge. Jora would undoubtedly excel in any ReactJS development role.🚀",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/armo.jpg",
    date: "February 24, 2024",
  },
  {
    id: 12,
    name: "Armenuhi Toroyan",
    role: "Software Engineer",
    text:
      "Jora and I are working and learning together on a team project. He already has software development background. I can say that Jora is a dedicated and hardworking developer with structured and attentive approach to work.",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/armenuhi.jpg",
    date: "January 9, 2024",
  },
  {
    id: 13,
    name: "Katya Smbatyan",
    role: "Communications Specialist",
    text:
      "I wholeheartedly recommend Jor🤗 as an outstanding programmer with whom I've collaborated in previous business ventures. His technical expertise, strategic problem-solving, and commitment to excellence were evident throughout our projects. Jor possesses a rare combination of kindness and intelligence, fostering a positive and collaborative work environment.👌His friendly demeanor enhances team dynamics, making him not only a skilled professional but also a pleasure to work alongside. I am confident that Jor would be a valuable asset to any organization seeking a talented programmer who excels both technically and interpersonally.😉",
    linkedinUrl: "https://www.linkedin.com/in/jora-hovsepyan-459149265/details/recommendations/",
    avatar: "/assets/katya.jpg",
    date: "March 13, 2024",
  },

];


/* === COMPONENT === */
const RecommendationsSection = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [paused, setPaused] = useState(false);

  const maxIndex = recommendations.length - VISIBLE;
  const step = 100 / recommendations.length;

  /* AUTOPLAY */
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [paused, maxIndex]);

  const toggle = (id: number) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="section-padding relative overflow-hidden">
      {/* ===== ATOMIC BACKGROUND ===== */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#0A66C2]/20 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/4 -right-40 w-[360px] h-[360px] rounded-full bg-purple-500/20 blur-[120px]"
        animate={{ x: [0, -70, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-400/20 blur-[110px]"
        animate={{ y: [0, -40, 20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== CONTENT ===== */}
      <div className="container-custom relative z-10">
       <SectionHeader title={t("home.recommendations.title")} />


        <div className="relative mt-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: `${(recommendations.length / VISIBLE) * 100}%` }}
              animate={{ x: `-${index * step}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {recommendations.map((rec) => {
                const isLong = rec.text.length > TEXT_LIMIT;
                const isOpen = expanded[rec.id];

                return (
                  <div
                    key={rec.id}
                    style={{ width: `${100 / recommendations.length}%` }}
                    className="px-3"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                  >
                    <div className="card-premium h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <a href={rec.linkedinUrl} target="_blank">
                          <div className="w-12 aspect-square rounded-full overflow-hidden border">
                            <img
                              src={rec.avatar}
                              alt={rec.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </a>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-sm truncate">
                            {rec.name}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">
                            {rec.role}
                          </p>
                        </div>
                        <a
                          href={rec.linkedinUrl}
                          target="_blank"
                          className="ml-auto text-[#0A66C2]"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.p
                          key={isOpen ? "open" : "closed"}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-sm leading-relaxed"
                        >
                          “
                          {isLong && !isOpen
                            ? rec.text.slice(0, TEXT_LIMIT) + "..."
                            : rec.text}
                          ”
                        </motion.p>
                      </AnimatePresence>

                      {isLong && (
                        <button
                          onClick={() => toggle(rec.id)}
                          className="mt-2 text-xs text-[#0A66C2] hover:underline self-start"
                        >
                          {isOpen ? "Show less" : "Show more"}
                        </button>
                      )}

                      <span className="mt-auto pt-4 text-xs text-muted-foreground">
                        {rec.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <button
            onClick={() => setIndex((p) => (p <= 0 ? maxIndex : p - 1))}
            className="absolute -left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background shadow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => setIndex((p) => (p >= maxIndex ? 0 : p + 1))}
            className="absolute -right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
