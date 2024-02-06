import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Snake Game",
    img: "/snake-game.png",
    desc: "A board game similar to the popular snake game built with HTML, CSS & Javascript.",
    href: "https://joaocravidao.github.io/ironhack-project/",
  },
  {
    id: 2,
    title: "Marvel Universe",
    img: "/marvel-universe.png",
    desc: "A simple web app with the official marvel API.",
    href: "https://marveluniverseproject.netlify.app/",
  },
  {
    id: 3,
    title: "Accountable.me",
    img: "/accountable.png",
    desc: "A MERN stack project with CRUD where you can create to-do lists.",
    href: "https://enchanting-babka-f1a835.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio",
    img: "/portfolio.png",
    desc: "This app you are currently visiting using React and Framer Motion animations.",
    href: "https://my-portfolio-jcravidao.netlify.app",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
