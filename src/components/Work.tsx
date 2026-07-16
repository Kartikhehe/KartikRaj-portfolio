import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "AI Sales Intelligence Platform",
    category: "Full-Stack · AI · LLM — I'mBesideYou (Japan)",
    tools: "React 18, FastAPI, Firestore, Cloud Run, Multi-LLM",
    image: "/images/imbesideyou-sales.png",
    link: "",
  },
  {
    name: "Laminar — Operational Intelligence",
    category: "Fintech · Streaming ML · Inter IIT 14.0 (4th/23)",
    tools: "Pathway, Streaming ML, RAG, Autonomous RCA Agents",
    image: "/images/laminar.png",
    link: "https://drive.google.com/drive/folders/12peaRDWaxSHpITRclXpIrlrtMo-CrDt7?usp=sharing",
  },
  {
    name: "RSSODNet — Salient Object Detection",
    category: "Computer Vision · Deep Learning",
    tools: "PyTorch, EfficientNet-B4, ASPP, U-Net, BASNet",
    image: "/images/rssodnet.png",
    link: "https://drive.google.com/file/d/1PPZ9xlkML2-PGEnB9pll8FFgI_kM_AK4/view?usp=sharing",
  },
  {
    name: "Neuro Mudra Analytics",
    category: "Machine Learning · Biosignals (EEG/EMG)",
    tools: "LSTM, SVM, Random Forest, DANN, Domain Adaptation",
    image: "/images/neuro-mudra.png",
    link: "https://github.com/Kartikhehe/Neuro-Mudra-Analytics",
  },
  {
    name: "ML-PUF Modeling & Delay Recovery",
    category: "Machine Learning · 99% Test Accuracy",
    tools: "LinearSVC, Logistic Regression, Feature Engineering",
    image: "/images/ml-puf.png",
    link: "",
  },
  {
    name: "Bayesian Modelling & Data Analysis",
    category: "Data Science · Bayesian Statistics (CGS698)",
    tools: "Bayesian Inference, MCMC, Posterior Predictive Checks",
    image: "/images/cgs698-bayesian.png",
    link: "",
  },
  {
    name: "Visualize.ai — Chat to Visualization",
    category: "Full-Stack · LLM",
    tools: "React, Node.js, Express, SSE, OpenAI",
    image: "/images/visualize-ai.png",
    link: "https://github.com/Kartikhehe/Visualize.ai-app",
  },
];

const Work = () => {
  useGSAP(() => {
  // On touch/mobile the pinned horizontal scroll fights native scrolling and
  // becomes jittery — skip it there and let the cards stack & scroll normally.
  if (window.innerWidth <= 1024) return;
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="disable"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link || undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
